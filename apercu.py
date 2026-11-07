"""Serve the portal and its isolated modules on the local machine."""
from argparse import ArgumentParser
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
from urllib.parse import unquote, urlsplit
from webbrowser import open as open_browser

ROOT = Path(__file__).resolve().parent
HOST = "127.0.0.1"
PORTS = {"portail": 8740, "questionnaires": 8741, "urgencescan": 8742, "medonym": 8743, "saos": 8744, "sommeil": 8745}
ORIGINS = {key: f"http://{HOST}:{port}" for key, port in PORTS.items()}


class PreviewHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, site, **kwargs):
        self.site = site
        self.root = ROOT / site
        super().__init__(*args, directory=str(self.root), **kwargs)

    def send_head(self):
        path = unquote(urlsplit(self.path).path)
        if any(part.startswith(".") for part in path.split("/")):
            self.send_error(404)
            return None
        target = Path(self.translate_path(self.path))
        if target.is_dir() and not (target / "index.html").is_file():
            self.send_error(404)
            return None
        return super().send_head()

    def end_headers(self):
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "strict-origin-when-cross-origin")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Permissions-Policy", "camera=(), microphone=(), geolocation=()")
        if self.site == "portail":
            module_origins = " ".join(origin for name, origin in ORIGINS.items() if name != "portail")
            policy = (
                "default-src 'self'; object-src 'none'; base-uri 'none'; form-action 'none'; "
                f"connect-src 'none'; frame-src {module_origins}; frame-ancestors 'none'"
            )
        else:
            policy = f"frame-ancestors {ORIGINS['portail']}"
            if self.site in {"medonym", "saos", "sommeil"}:
                policy += ("; default-src 'self'; script-src 'self' 'unsafe-inline'; "
                           "style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; "
                           "worker-src 'self' blob:; connect-src 'none'; "
                           "object-src 'none'; base-uri 'none'; form-action 'none'")
        self.send_header("Content-Security-Policy", policy)
        super().end_headers()


def main():
    parser = ArgumentParser(description=__doc__)
    parser.add_argument("--ouvrir", action="store_true", help="Ouvrir le portail dans le navigateur")
    args = parser.parse_args()

    servers = []
    try:
        for site, port in PORTS.items():
            servers.append(ThreadingHTTPServer((HOST, port), partial(PreviewHandler, site=site)))
    except OSError as error:
        for server in servers:
            server.server_close()
        raise SystemExit(f"Impossible d’ouvrir les ports locaux 8740 à 8745. {error}") from error

    workers = [Thread(target=server.serve_forever, daemon=True) for server in servers]
    for worker in workers:
        worker.start()
    print(f"Portail du cabinet — {ORIGINS['portail']}/", flush=True)
    if args.ouvrir:
        open_browser(ORIGINS["portail"] + "/")
    try:
        workers[0].join()
    except KeyboardInterrupt:
        pass
    finally:
        for server in servers:
            server.shutdown()
            server.server_close()


if __name__ == "__main__":
    main()
