# Design

<!-- impeccable:design-schema 1 -->

Two committed visual worlds live in this repository. The classic portfolio at `/`
is the incumbent "ficha técnica" world. The neo portfolio at `/neo` (alias
`/creative`) is the pinned "papelaria indigo" world derived from the studio's
brand cards. Both share product truth from PRODUCT.md; each owns its own colors,
type, and components.

## World 1: classic (ficha técnica / engenharia)

- Surface: `/` (`public/index.html`, `public/styles.css`, `public/i18n.js`).
- Ground: warm paper `#F4EFE6` and `#ECE5D6`; ink `#191813`; pine `#2C4636`;
  moss text `#47614F`; signal `#E85D2F`, `#F0A184`, `#B8431C`.
- Type: Fraunces (display), Geist (body), Geist Mono (labels).
- Components: spec-sheet header bars, hairline-bordered cards, diamond bullets,
  review panel with pine header, pill buttons, terminal card with typewriter.
- Motion: staggered `entrar` reveals with expo ease, marquee ticker, caret
  blink, one authored moment per view. Reduced motion draws everything static.

## World 2: neo (papelaria indigo, pinned by the brand cards)

- Surface: `/neo` (`public/neo/index.html`, `styles.css`, `script.js`).
- Ground: paper `#F4F1EA` and `#ECE8DE`, creme `#FBF9F4`; ink indigo `#2A2A8C`
  and `#1F1F6E`; periwinkle patterns `#A9AEE6` and `#C3C7EF`.
- Type: Sora (600/700/800) for text; Yellowtail for the script wordmark.
- Signature elements: script wordmark with a white sticker outline built from
  eight text shadows; portrait silhouette watermark filled with a binary-digit
  pattern (hero and closing poster) or QR-like blocks (about poster), both
  authored as inline SVG patterns clipped by a geometric bust path.
- Components: poster hero stack, phone pill, pill buttons (filled/outline/creme),
  signature indigo service block, numbered service rows, project cards, script
  quote mark, pill tech chips, channel rows, indigo footer.
- Motion: one stamp-in sequence on the hero; sections rise once on first view;
  reduced motion removes both.

## Shared rules

- No em dashes in copy. English is the default language; PT-BR is a toggle that
  persists in `localStorage` under `luis-ota:lang`.
- No fabricated claims; projects stay anonymous except AfroRetratos, whose live
  site and GitHub are linked.
- The Instagram link uses the stable `/instagram` redirect from `server.ts`.
- Raster provenance: the classic world ships `og-image.png` built from the
  studio's own composition; the neo world ships no rasters at all (every visual
  is CSS or inline SVG).
