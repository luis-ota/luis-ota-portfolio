const PORTA = Number(process.env.PORT || 3000);
const RAIZ = new URL("./public", import.meta.url).pathname;

const TIPOS = {
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

const servidor = Bun.serve({
  port: PORTA,
  async fetch(req) {
    const url = new URL(req.url);
    let caminho = decodeURIComponent(url.pathname);

    if (caminho === "/") caminho = "/index.html";
    if (caminho.includes("..")) {
      return new Response("Não encontrado", { status: 404 });
    }

    const arquivo = Bun.file(RAIZ + caminho);
    if (await arquivo.exists()) {
      const extensao = caminho.slice(caminho.lastIndexOf("."));
      return new Response(arquivo, {
        headers: { "content-type": TIPOS[extensao] || "application/octet-stream" },
      });
    }

    return new Response("Não encontrado", { status: 404 });
  },
});

console.log(`Portfólio rodando em http://localhost:${servidor.port}`);
