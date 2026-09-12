FROM oven/bun:1 AS runtime

WORKDIR /app

COPY server.ts .
COPY public ./public

ENV PORT=3000
EXPOSE 3000

USER bun

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD ["bun", "-e", "fetch('http://127.0.0.1:' + (process.env.PORT || 3000) + '/').then((r) => process.exit(r.ok ? 0 : 1)).catch(() => process.exit(1))"]

CMD ["bun", "server.ts"]
