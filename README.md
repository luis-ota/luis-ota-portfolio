# Portfólio — Luís Otávio

Site de portfólio do **Luís Otávio Silva Santos**, desenvolvedor full-stack em Curitiba, PR.
Página única, estática e leve — sem build, sem dependências, sem framework.
Inglês como idioma padrão, com seletor para português (a preferência fica salva no navegador).
Agendamento direto pelo WhatsApp, sem serviços externos.

## Como rodar

### Opção 1 — Docker Compose (recomendada)

```bash
docker compose up --build -d
```

Acesse em **http://localhost:3000**

Para parar:

```bash
docker compose down
```

### Opção 2 — Bun (sem contêiner)

```bash
bun server.ts
```

Acesse em **http://localhost:3000**

## Estrutura

```
luis-ota-portfolio/
├── public/                       # site estático (HTML, CSS, JS, i18n)
│   ├── index.html                # conteúdo em inglês (padrão)
│   ├── i18n.js                   # dicionário EN/PT-BR e troca de idioma
│   ├── script.js                 # interações (menu, reveal, terminal)
│   └── styles.css                # tokens e estilos
├── .github/workflows/deploy.yml  # CI/CD: build → GHCR → SSH → deploy
├── server.ts                     # servidor HTTP com Bun.serve (zero dependências)
├── Dockerfile                    # imagem baseada em oven/bun (non-root + healthcheck)
└── docker-compose.yml            # compose local (build)
```

## Idiomas

O inglês é o padrão. O botão `EN / PT` no cabeçalho alterna para português;
a escolha é guardada em `localStorage` e o `lang` do documento, o título e as
metatags são atualizados junto. Os textos ficam em `public/i18n.js` no objeto
`DICIONARIO` (chaves `en` e `pt`) — para mudar qualquer copy, edite os dois.

## Deploy (CI/CD)

Todo push na `main` dispara `.github/workflows/deploy.yml`:

1. **build** — constrói a imagem Docker e publica em `ghcr.io/luis-ota/luis-ota-portfolio`
   (`latest` e `sha-<commit>`), com cache do GitHub Actions. Antes do build, o job
   estampa o SHA do commit nos assets do `index.html` (`?v=<sha>`), então nenhum
   cache (Cloudflare ou navegador) serve CSS/JS antigo após um deploy.
2. **deploy** — por SSH, executa o script `/usr/local/bin/deploy-luis-ota-portfolio`
   na VPS (forçado pela própria chave), que atualiza o compose, roda
   `docker compose pull` + `up -d --force-recreate` e valida `http://127.0.0.1:3000/`.

O Nginx da VPS faz proxy de `https://portfolio.wired.rs` para `127.0.0.1:3000`.

### Secrets necessários (Settings → Secrets and variables → Actions)

| Secret | Valor |
|---|---|
| `DEPLOY_HOST` | `<DEPLOY_HOST>` |
| `DEPLOY_USER` | `ubuntu` |
| `DEPLOY_SSH_KEY` | chave privada ed25519 com forced command na VPS |
| `DEPLOY_KNOWN_HOSTS` | saída de `ssh-keyscan -H <DEPLOY_HOST>` |

Para rodar o deploy manualmente: **Actions → Deploy → Run workflow**.

## Segurança

- A chave usada pelo Actions é **restrita** (`restrict,command="..."` no
  `authorized_keys`): mesmo vazando, ela só consegue disparar o deploy — sem shell,
  sem encaminhamento de porta, sem enviar arquivos.
- O container roda como usuário `bun` (non-root), com rootfs **read-only**,
  `no-new-privileges` e todas as capabilities removidas (`cap_drop: ALL`).
- O server expõe apenas a porta loopback `127.0.0.1:3000`; o firewall da VPS
  libera só 22/80/443.
- No CI, o `GITHUB_TOKEN` é read-only por padrão e ganha `packages: write` só no
  job de build; as actions estão pinadas por SHA de commit.
- O workflow só roda em `push` na `main` e `workflow_dispatch` (nunca em PRs de
  fork), com deploy limitado ao branch `main` via environment `production`.
- Nenhum segredo vive no repositório: apenas referências a `secrets.*`.

## Personalização

- **Contatos**: em `public/index.html` (WhatsApp, e-mail, LinkedIn, GitHub).
  O botão de agendamento abre `agendar.wired.rs`.
- **Cores e identidade**: tokens CSS no topo de `public/styles.css`.
- **Copy em inglês/português**: `public/i18n.js`.
- **Instagram do depoimento**: o site aponta para `/instagram`, um redirect
  estável definido em `server.ts` (`INSTAGRAM_URL`). Se o @ mudar, atualize a
  constante e o texto `relato1.handle` em `public/i18n.js` — o link do portfólio
  continua o mesmo.

## Licença

© Luís Otávio Silva Santos. Todos os direitos reservados.
