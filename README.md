# Portfólio — Luís Otávio

Site de portfólio do **Luís Otávio Silva Santos**, desenvolvedor full-stack em Curitiba, PR.
Página única, estática e leve — sem build, sem dependências, sem framework.
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

### Opção 2 — Podman

```bash
podman compose up --build -d
```

### Opção 3 — Bun (sem contêiner)

```bash
bun server.ts
```

Acesse em **http://localhost:3000**

## Estrutura

```
luis-portfolio/
├── public/          # site estático (HTML, CSS, JS)
├── server.ts        # servidor HTTP com Bun.serve (zero dependências)
├── Dockerfile       # imagem baseada em oven/bun
├── docker-compose.yml
└── .dockerignore
```

## Personalização

- **Contatos**: tudo editável em `public/index.html` (WhatsApp, e-mail, LinkedIn,
  GitHub e blog). O botão de agendamento abre o WhatsApp com uma mensagem pré-preenchida.
- **Cores e identidade**: tokens CSS no topo de `public/styles.css`.

## Licença

© Luís Otávio Silva Santos. Todos os direitos reservados.
