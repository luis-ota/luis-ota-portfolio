const PORTA = Number(process.env.PORT || 3000);
const RAIZ = new URL("./public", import.meta.url).pathname;

// Destino estável do Instagram da Isa: o portfólio sempre linka /instagram.
// Se ela trocar o @, atualize só esta constante (e o texto em public/i18n.js).
const INSTAGRAM_URL =
  process.env.INSTAGRAM_URL || "https://www.instagram.com/isacreates.comm/";

const TIPOS: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".woff2": "font/woff2",
};

function cachePara(extensao: string): string {
  if (extensao === ".html") return "no-cache";
  if (extensao === ".css" || extensao === ".js") return "public, max-age=3600";
  return "public, max-age=604800";
}

const CABECALHOS_FIXOS: Record<string, string> = {
  "x-content-type-options": "nosniff",
  "referrer-policy": "strict-origin-when-cross-origin",
  "permissions-policy": "camera=(), microphone=(), geolocation=()",
  "x-frame-options": "DENY",
};

function responder(corpo: string, status: number, extras: Record<string, string> = {}) {
  return new Response(corpo, {
    status,
    headers: { "content-type": "text/plain; charset=utf-8", ...CABECALHOS_FIXOS, ...extras },
  });
}

const servidor = Bun.serve({
  port: PORTA,
  async fetch(req) {
    const url = new URL(req.url);
    let caminho = decodeURIComponent(url.pathname);

    if (caminho === "/instagram" || caminho === "/instagram/") {
      return new Response(null, {
        status: 302,
        headers: {
          location: INSTAGRAM_URL,
          "cache-control": "no-store",
          ...CABECALHOS_FIXOS,
        },
      });
    }

    if (caminho === "/") caminho = "/index.html";
    if (caminho.includes("..")) {
      return responder("Não encontrado", 404);
    }

    const arquivo = Bun.file(RAIZ + caminho);
    if (await arquivo.exists()) {
      const extensao = caminho.slice(caminho.lastIndexOf("."));
      return new Response(arquivo, {
        headers: {
          "content-type": TIPOS[extensao] || "application/octet-stream",
          "cache-control": cachePara(extensao),
          ...CABECALHOS_FIXOS,
        },
      });
    }

    return responder("Não encontrado", 404);
  },
});

console.log(`Portfólio rodando em http://localhost:${servidor.port}`);
