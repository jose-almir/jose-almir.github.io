---
name: blog-thumbnail
description: >
  Generate blog post thumbnails in the Almir Dev blog pattern: a 1200x630 PNG with a
  dark gradient background, a green gradient accent bar on top, and a centered thematic
  vector illustration. Rendered from an inline SVG to PNG with sharp (a project dependency).
  Use when asked to create a new blog post thumbnail or restyle an existing one to match
  the site pattern (e.g. "thumbnail", "thumb", "imagem do post", "siga esse padrão").
license: MIT
---

# Blog Thumbnail Generator

Create on-brand thumbnails for blog posts. Each is a **1200×630 PNG** rendered from an SVG with `sharp`.

## The visual pattern (non-negotiable)

Every thumbnail follows this recipe:

- **Canvas**: `1200×630`.
- **Background**: `linearGradient` top-left → bottom-right, `#111827` → `#0b1220`.
- **Accent bar**: 8px tall, gradient `#27ae60` → `#16a085`, across the full top (`x="0" y="0" width="1200" height="8"`).
- **Foreground**: light `#e5e7eb` elements; green accents `#27ae60` / `#16a085`; dark cards `#1f2937` / `#232c3d` with green strokes `#16a085`.
- **Composition**: a single centered thematic illustration. No title text, no watermark — keep it minimal ("Less is More").
- Keep everything readable on the dark background: light fills + green accents.

## Workflow

1. **Concept** — pick one thematic vector for the post (see examples). Ask the user if unsure.
2. **Write the SVG** — center the illustration via `<g transform="translate(600, 315) scale(...)">`.
3. **Render with sharp** — write a temporary `gen-thumb.mjs` at the repo root, run `node gen-thumb.mjs`, then delete it. `sharp` resolves from the repo root.
4. **Output path** — save to `public/blog/<slug>/<slug>-thumb.png` (or `thumbnail.png` to match the post frontmatter). Use the exact path referenced in the post's `thumbnail:` field.
5. **Verify** — `file public/blog/<slug>/<thumb>.png` must report `PNG image data, 1200 x 630`.
6. **Cleanup** — remove the temporary script (`rm gen-thumb.mjs`).

## SVG skeleton

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#111827"/>
      <stop offset="1" stop-color="#0b1220"/>
    </linearGradient>
    <linearGradient id="green" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#27ae60"/>
      <stop offset="1" stop-color="#16a085"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="1200" height="8" fill="url(#green)"/>
  <!-- centered illustration -->
</svg>
```

## Render script template

```js
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const svg = `...`;

const out = "public/blog/<slug>/<slug>-thumb.png";
writeFileSync(out, await sharp(Buffer.from(svg)).png().toBuffer());
console.log("generated", out);
```

Run from the repo root with `node gen-thumb.mjs`, then delete the script.

## Existing examples (match this feel)

- `strategy-pattern` — diagram: 3 strategy cards → `interface PaymentStrategy`.
- `result-pattern` — union: `type Result<T, E>` splitting into `{ ok: true; value: T }` / `{ ok: false; error: E }`.
- `rebuilding-portfolio-astro` — 4 tech logo cards (Astro, GitHub, TypeScript, Tailwind).
- `di-typescript-express` — a tilted syringe (~45°), representing Dependency Injection.
- `cms-portfolio` — a cloud, representing CMS/hosting.

## Tech logos (real brand paths)

Extract official SVG paths from `node_modules/@iconify-json/simple-icons/icons.json` (all `24×24` viewBox):

```js
const ic = require("./node_modules/@iconify-json/simple-icons/icons.json");
ic.icons["astro"].body; // astro, github, typescript, tailwindcss, ...
```

Render each with `fill="#e5e7eb"` inside `<g transform="translate(cx,cy) scale(s/24) translate(-12,-12)">` (s = desired pixel size).

## Notes

- You generally cannot visually inspect the rendered PNG — describe the design clearly and ask the user to confirm.
- Keep it minimal; add text only if the user explicitly asks.
- `sharp` is a project dependency (resolvable from the repo root).
- When the user supplies their own image, place it at the same path/name so no frontmatter changes are needed.
