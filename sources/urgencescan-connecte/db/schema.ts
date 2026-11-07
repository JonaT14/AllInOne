import { integer, primaryKey, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull(),
  displayName: text("display_name").notNull(),
  activeCabinetId: text("active_cabinet_id"),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
});

export const cabinets = sqliteTable("cabinets", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  inventoryJson: text("inventory_json").notNull().default("[]"),
  revision: integer("revision").notNull().default(0),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
});

export const members = sqliteTable(
  "members",
  {
    cabinetId: text("cabinet_id").notNull().references(() => cabinets.id, { onDelete: "cascade" }),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    email: text("email").notNull(),
    displayName: text("display_name").notNull(),
    profession: text("profession").notNull().default("Professionnel de santé"),
    role: text("role").notNull().default("editor"),
    createdAt: text("created_at").notNull(),
  },
  (table) => [primaryKey({ columns: [table.cabinetId, table.userId] })],
);

export const invites = sqliteTable("invites", {
  code: text("code").primaryKey(),
  cabinetId: text("cabinet_id").notNull().references(() => cabinets.id, { onDelete: "cascade" }),
  email: text("email").notNull(),
  displayName: text("display_name").notNull(),
  profession: text("profession").notNull(),
  role: text("role").notNull(),
  expiresAt: text("expires_at").notNull(),
  usedAt: text("used_at"),
  createdAt: text("created_at").notNull(),
});

export const userSettings = sqliteTable(
  "user_settings",
  {
    cabinetId: text("cabinet_id").notNull().references(() => cabinets.id, { onDelete: "cascade" }),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    settingsJson: text("settings_json").notNull().default("{}"),
    updatedAt: text("updated_at").notNull(),
  },
  (table) => [primaryKey({ columns: [table.cabinetId, table.userId] })],
);

export const backups = sqliteTable("backups", {
  id: text("id").primaryKey(),
  cabinetId: text("cabinet_id").notNull().references(() => cabinets.id, { onDelete: "cascade" }),
  revision: integer("revision").notNull(),
  inventoryJson: text("inventory_json").notNull(),
  createdAt: text("created_at").notNull(),
});
