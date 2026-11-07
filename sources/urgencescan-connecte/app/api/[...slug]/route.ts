import { env } from "cloudflare:workers";
import { getChatGPTUser } from "../../chatgpt-auth";

export const dynamic = "force-dynamic";

type User = NonNullable<Awaited<ReturnType<typeof getChatGPTUser>>>;
type Member = { cabinet_id: string; user_id: string; email: string; display_name: string; profession: string; role: string };

const json = (value: unknown, status = 200) =>
  Response.json(value, { status, headers: { "cache-control": "no-store" } });
const now = () => new Date().toISOString();
const id = (prefix: string) => `${prefix}_${crypto.randomUUID().replaceAll("-", "")}`;
const db = () => {
  if (!env.DB) throw new Error("DATABASE_UNAVAILABLE");
  return env.DB;
};

async function userOr401(): Promise<User | Response> {
  return (await getChatGPTUser()) ?? json({ error: "AUTH_REQUIRED" }, 401);
}

async function body(request: Request) {
  const size = Number(request.headers.get("content-length") || 0);
  if (size > 5_000_000) throw new Error("PAYLOAD_TOO_LARGE");
  return request.json() as Promise<Record<string, unknown>>;
}

async function membership(userId: string, cabinetId?: string): Promise<Member | null> {
  const row = cabinetId
    ? await db().prepare("SELECT * FROM members WHERE user_id = ? AND cabinet_id = ?").bind(userId, cabinetId).first<Member>()
    : await db().prepare("SELECT * FROM members WHERE user_id = ? ORDER BY created_at LIMIT 1").bind(userId).first<Member>();
  return row ?? null;
}

async function ensureWorkspace(user: User) {
  const stamp = now();
  await db().prepare(
    "INSERT INTO users (id,email,display_name,created_at,updated_at) VALUES (?,?,?,?,?) ON CONFLICT(id) DO UPDATE SET email=excluded.email,display_name=excluded.display_name,updated_at=excluded.updated_at",
  ).bind(user.userId, user.email.toLowerCase(), user.displayName, stamp, stamp).run();

  let active: Member | null = await db().prepare(
    "SELECT m.* FROM users u JOIN members m ON m.user_id=u.id WHERE u.id=? AND m.cabinet_id=u.active_cabinet_id LIMIT 1",
  ).bind(user.userId).first<Member>();
  if (!active) active = await membership(user.userId);

  if (!active) {
    const cabinetId = id("cab");
    const display = user.fullName?.trim() || user.email.split("@")[0];
    await db().batch([
      db().prepare("INSERT INTO cabinets (id,name,inventory_json,revision,created_at,updated_at) VALUES (?,?,?,0,?,?)").bind(cabinetId, `Cabinet de ${display}`, "[]", stamp, stamp),
      db().prepare("INSERT INTO members (cabinet_id,user_id,email,display_name,profession,role,created_at) VALUES (?,?,?,?,?,?,?)").bind(cabinetId, user.userId, user.email.toLowerCase(), user.displayName, "Professionnel de santé", "owner", stamp),
      db().prepare("UPDATE users SET active_cabinet_id=?,updated_at=? WHERE id=?").bind(cabinetId, stamp, user.userId),
    ]);
    active = await membership(user.userId, cabinetId);
  }
  if (!active) throw new Error("WORKSPACE_CREATION_FAILED");
  return active;
}

async function bootstrap(user: User) {
  const member = await ensureWorkspace(user);
  const cabinet = await env.DB.prepare("SELECT * FROM cabinets WHERE id=?").bind(member.cabinet_id).first<Record<string, unknown>>();
  const settings = await env.DB.prepare("SELECT settings_json FROM user_settings WHERE cabinet_id=? AND user_id=?").bind(member.cabinet_id, user.userId).first<{ settings_json: string }>();
  return {
    user: { id: user.userId, email: user.email, displayName: user.displayName },
    cabinet: {
      id: member.cabinet_id,
      name: cabinet?.name,
      role: member.role,
      revision: cabinet?.revision,
      inventory: JSON.parse(String(cabinet?.inventory_json || "[]")),
    },
    settings: JSON.parse(settings?.settings_json || "{}"),
  };
}

async function team(user: User) {
  const member = await ensureWorkspace(user);
  const members = await env.DB.prepare("SELECT user_id,email,display_name,profession,role,created_at FROM members WHERE cabinet_id=? ORDER BY created_at").bind(member.cabinet_id).all();
  const invites = ["owner", "admin"].includes(member.role)
    ? await env.DB.prepare("SELECT code,email,display_name,profession,role,expires_at,used_at FROM invites WHERE cabinet_id=? ORDER BY created_at DESC LIMIT 50").bind(member.cabinet_id).all()
    : { results: [] };
  return { role: member.role, members: members.results, invites: invites.results };
}

function route(request: Request) {
  return new URL(request.url).pathname.replace(/^\/api\//, "");
}

export async function GET(request: Request) {
  const user = await userOr401();
  if (user instanceof Response) return user;
  try {
    if (route(request) === "bootstrap") return json(await bootstrap(user));
    if (route(request) === "team") return json(await team(user));
    return json({ error: "NOT_FOUND" }, 404);
  } catch (error) {
    console.error("GET API", route(request), error);
    return json({ error: "SERVICE_UNAVAILABLE" }, 503);
  }
}

export async function POST(request: Request) {
  const user = await userOr401();
  if (user instanceof Response) return user;
  try {
    const action = route(request);
    const input = await body(request);
    if (action === "state") {
      const member = await ensureWorkspace(user);
      const inventory = Array.isArray(input.inventory) ? input.inventory : [];
      if (inventory.length > 2000) return json({ error: "LIMIT_EXCEEDED" }, 400);
      const inventoryJson = JSON.stringify(inventory);
      if (inventoryJson.length > 4_500_000) return json({ error: "LIMIT_EXCEEDED" }, 400);
      const stamp = now();
      if (["owner", "admin", "editor"].includes(member.role)) {
        const current = await env.DB.prepare("SELECT revision,inventory_json FROM cabinets WHERE id=?").bind(member.cabinet_id).first<{ revision: number; inventory_json: string }>();
        const revision = (current?.revision || 0) + 1;
        await env.DB.batch([
          env.DB.prepare("INSERT INTO backups (id,cabinet_id,revision,inventory_json,created_at) VALUES (?,?,?,?,?)").bind(id("bak"), member.cabinet_id, revision, current?.inventory_json || "[]", stamp),
          env.DB.prepare("UPDATE cabinets SET inventory_json=?,revision=?,updated_at=? WHERE id=?").bind(inventoryJson, revision, stamp, member.cabinet_id),
          env.DB.prepare("DELETE FROM backups WHERE cabinet_id=? AND id NOT IN (SELECT id FROM backups WHERE cabinet_id=? ORDER BY created_at DESC LIMIT 30)").bind(member.cabinet_id, member.cabinet_id),
        ]);
      }
      const settingsJson = JSON.stringify(input.settings && typeof input.settings === "object" ? input.settings : {});
      await env.DB.prepare("INSERT INTO user_settings (cabinet_id,user_id,settings_json,updated_at) VALUES (?,?,?,?) ON CONFLICT(cabinet_id,user_id) DO UPDATE SET settings_json=excluded.settings_json,updated_at=excluded.updated_at").bind(member.cabinet_id, user.userId, settingsJson, stamp).run();
      return json({ ok: true });
    }
    if (action === "invite") {
      const member = await ensureWorkspace(user);
      if (!["owner", "admin"].includes(member.role)) return json({ error: "FORBIDDEN" }, 403);
      const email = String(input.email || "").trim().toLowerCase();
      const displayName = String(input.name || "").trim().slice(0, 150);
      const profession = String(input.profession || "Professionnel de santé").trim().slice(0, 80);
      const roleName = ["admin", "editor", "viewer"].includes(String(input.role)) ? String(input.role) : "editor";
      if (!/^\S+@\S+\.\S+$/.test(email) || !displayName) return json({ error: "INVALID_INPUT" }, 400);
      const code = `US3-${crypto.randomUUID().replaceAll("-", "").slice(0, 12).toUpperCase()}`;
      const expires = new Date(Date.now() + 7 * 86400000).toISOString();
      await env.DB.prepare("INSERT INTO invites (code,cabinet_id,email,display_name,profession,role,expires_at,created_at) VALUES (?,?,?,?,?,?,?,?)").bind(code, member.cabinet_id, email, displayName, profession, roleName, expires, now()).run();
      return json({ code, expiresAt: expires });
    }
    if (action === "join") {
      await ensureWorkspace(user);
      const code = String(input.code || "").trim().toUpperCase();
      const invite = await env.DB.prepare("SELECT * FROM invites WHERE code=? AND used_at IS NULL").bind(code).first<Record<string, string>>();
      if (!invite || invite.expires_at < now()) return json({ error: "INVITE_INVALID" }, 400);
      if (invite.email.toLowerCase() !== user.email.toLowerCase()) return json({ error: "EMAIL_MISMATCH" }, 403);
      const stamp = now();
      await env.DB.batch([
        env.DB.prepare("INSERT INTO members (cabinet_id,user_id,email,display_name,profession,role,created_at) VALUES (?,?,?,?,?,?,?) ON CONFLICT(cabinet_id,user_id) DO UPDATE SET profession=excluded.profession,role=excluded.role").bind(invite.cabinet_id, user.userId, user.email.toLowerCase(), invite.display_name, invite.profession, invite.role, stamp),
        env.DB.prepare("UPDATE invites SET used_at=? WHERE code=?").bind(stamp, code),
        env.DB.prepare("UPDATE users SET active_cabinet_id=?,updated_at=? WHERE id=?").bind(invite.cabinet_id, stamp, user.userId),
      ]);
      return json(await bootstrap(user));
    }
    if (action === "revoke") {
      const member = await ensureWorkspace(user);
      if (!["owner", "admin"].includes(member.role)) return json({ error: "FORBIDDEN" }, 403);
      await env.DB.prepare("DELETE FROM invites WHERE code=? AND cabinet_id=?").bind(String(input.code || ""), member.cabinet_id).run();
      return json({ ok: true });
    }
    if (action === "remove-member") {
      const member = await ensureWorkspace(user);
      if (!["owner", "admin"].includes(member.role)) return json({ error: "FORBIDDEN" }, 403);
      const target = String(input.userId || "");
      const targetMember = await membership(target, member.cabinet_id);
      if (!targetMember || targetMember.role === "owner") return json({ error: "OWNER_PROTECTED" }, 400);
      await env.DB.prepare("DELETE FROM members WHERE cabinet_id=? AND user_id=?").bind(member.cabinet_id, target).run();
      return json({ ok: true });
    }
    return json({ error: "NOT_FOUND" }, 404);
  } catch (error) {
    console.error("POST API", route(request), error);
    return json({ error: error instanceof Error ? error.message : "SERVICE_UNAVAILABLE" }, 500);
  }
}

export async function DELETE(request: Request) {
  const user = await userOr401();
  if (user instanceof Response) return user;
  if (route(request) !== "account") return json({ error: "NOT_FOUND" }, 404);
  try {
    const owned = await env.DB.prepare("SELECT cabinet_id FROM members WHERE user_id=? AND role='owner'").bind(user.userId).all<{ cabinet_id: string }>();
    for (const row of owned.results) {
      const count = await env.DB.prepare("SELECT COUNT(*) AS count FROM members WHERE cabinet_id=?").bind(row.cabinet_id).first<{ count: number }>();
      if ((count?.count || 0) > 1) return json({ error: "TRANSFER_REQUIRED" }, 409);
    }
    await env.DB.batch([
      ...owned.results.map((row) => env.DB.prepare("DELETE FROM cabinets WHERE id=?").bind(row.cabinet_id)),
      env.DB.prepare("DELETE FROM members WHERE user_id=?").bind(user.userId),
      env.DB.prepare("DELETE FROM user_settings WHERE user_id=?").bind(user.userId),
      env.DB.prepare("DELETE FROM users WHERE id=?").bind(user.userId),
    ]);
    return json({ ok: true });
  } catch (error) {
    console.error("DELETE account", error);
    return json({ error: "SERVICE_UNAVAILABLE" }, 503);
  }
}
