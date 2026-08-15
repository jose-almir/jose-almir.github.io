# AGENTS.md — Almir Dev Portfolio & Blog

> Operational guide for agents working in this repository. Read before making changes.
> This is an **Astro static site** (SSG) deployed to GitHub Pages. There is no backend, no server runtime, and no React.

## Tech Stack (facts)

- **Astro 7** — static site generation, file-based routing, content collections.
- **Tailwind CSS 4** — utility classes only; theme tokens live in `src/styles/global.css` (`@theme`).
- **TypeScript (strict)** — `tsconfig.json` extends `astro/tsconfigs/strict`.
- **Vanilla JS** for any client-side interactivity. **Do NOT add React, Vue, Svelte, or any UI framework.**
- **i18n** — two locales (`pt` default, `en`), with `prefixDefaultLocale: true`, so every route is `/pt/*` or `/en/*`. The root `/` redirects to `/pt/`.
- **Node** — `>=22.22.3` (see `package.json` `engines`).

## Build & Development Commands

```bash
npm install          # install dependencies
npm run dev          # start dev server (http://localhost:4321)
npm run build        # production build into dist/
npm run preview      # serve the production build locally

npm run lint         # ESLint (required gate)
npm run format       # Prettier write (run before committing)
npm run format:check # Prettier check (CI gate)
npx astro check      # Astro/TS type & template checking
```

**Definition of Done** — before finishing any change, run and make all pass:

```bash
npm run lint && npm run format:check && npx astro check && npm run build
```

## Repository Structure

```
.github/workflows/   CI/CD (deploy.yml: npm ci -> lint + format:check -> build -> GitHub Pages)
.husky/              pre-commit hook (lint-staged)
public/              static assets served at root (images, favicon.ico, robots.txt)
src/
  assets/            processed images (imported via astro:assets)
  components/
    views/           page-level views (Home, Blog, BlogDetails, Projects, ProjectDetails)
    blog/            blog-specific widgets (TOC, nav, reading progress, etc.)
    mdx/             custom MDX components (Callout, Terminal, ArticleImage, Quote, Preview, Mermaid)
  content/
    blog/{pt,en}/    blog posts (MDX)
    projects/{pt,en}/ projects (MDX)
  layouts/Base.astro shared HTML shell (head, Header, Footer, theme script)
  locales/           pt.json / en.json translation dictionaries
  pages/             routes, including dynamic [lang]/ directories
  styles/global.css  Tailwind entry + @theme tokens + prose/code styling
  content.config.ts  content collection schemas
  i18n.ts            useTranslations() helper
  utils/             helpers (e.g. getReadingTime)
```

## Architecture & Routing

- **SSG only.** Content collections (`src/content/`) are read at build time into static HTML. No runtime data fetching.
- **Language is part of the URL.** `src/content/blog/{lang}/slug.mdx` maps to `/{lang}/blog/slug/`. All pages under `src/pages/[lang]/` declare `getStaticPaths()` returning `{ params: { lang: "pt" } }` and `{ params: { lang: "en" } }`.
- **Root `/`** (`src/pages/index.astro`) is a meta-refresh redirect to `/pt/` with `noindex`.
- **404** — root `src/pages/404.astro` client-redirects `/en/*` and `/pt/*` misses to the localized `/en/404` / `/pt/404` pages.
- **RSS & llms.txt are per-language**: `src/pages/[lang]/rss.xml.ts` and `src/pages/[lang]/llms.txt.ts`; the root `llms.txt` is an index linking to both.

## Content Authoring Rules

Every `.mdx` file in a collection MUST start with valid frontmatter matching the schema in `src/content.config.ts`. The schema is the source of truth.

**Blog** (`src/content/blog/{lang}/*.mdx`):

```yaml
---
title: "Post title"
date: "2026-07-18" # MUST be YYYY-MM-DD (no time, no timezone)
thumbnail: "/blog/foo/thumb.png" # public/ path
description: "Summary" # used for cards, RSS and SEO (see SEO limits)
---
```

**Projects** (`src/content/projects/{lang}/*.mdx`):

```yaml
---
title: "Project title"
description: "Summary"
thumbnail: "/blog/foo/img.png" # public/ path
hidden: false # optional, default false
order: 1 # required, sorts ascending
---
```

Rules:

- **Dates are rendered in UTC** via `toLocaleDateString(..., { timeZone: "UTC" })`. Always use `YYYY-MM-DD`; do not introduce time or timezone components.
- **`thumbnail` paths point into `public/`** (e.g. `/blog/<post>/thumb.png`). Never import them via `astro:assets`; they are referenced by string path.
- **Keep both languages in sync**: a post added in `pt/` should have a `en/` counterpart unless explicitly told otherwise.

## Code Conventions

- **Components are Astro (`.astro`)**. Frontmatter in `---` fences, then template.
- **Styling** — Tailwind utility classes only. Add custom tokens to the `@theme` block in `src/styles/global.css`, never hardcode new CSS in components unless there is no Tailwind equivalent.
- **i18n** — NEVER hardcode user-facing strings. Use `const t = useTranslations(lang as "pt" | "en")` and `t("nav.blog")`, with keys added to BOTH `src/locales/pt.json` and `src/locales/en.json` (identical key paths).
- **TypeScript strict** — no `any`; type props via local `interface Props`.
- **Client scripts** — minimal vanilla JS in `<script>` blocks. No npm packages inside client scripts.

## Design Philosophy: Less is More

The governing principle. Agents MUST:

- **Add only what delivers value.** Do not over-engineer. Prefer native HTML/Markdown and Tailwind over custom components.
- **Use MDX components sparingly.** `<Callout>`, `<Terminal>`, `<ArticleImage>`, `<Quote>`, `<Preview>` exist for a clear UX/semantic benefit — not as decoration. Default to standard markdown.
- **Performance first.** Static, minimal JS. Do not introduce heavy libraries, state frameworks, or backend dependencies without explicit request.

## Agent Guardrails (MUST / DO NOT)

- **MDX imports are forbidden.** Custom MDX components are injected via the `components` prop on `<Content components={...}>` in `src/components/views/BlogDetails.astro` and `ProjectDetails.astro`. If you create a new MDX component, register it in BOTH files. Never write `import` in `.mdx` files.
- **Mermaid** is rendered from ` ```mermaid ` fenced code blocks (client-side). It is mounted via `<Mermaid />`, not invoked as a component in MDX.
- **MDX comments** use `{/* comment */}`. HTML comments (`<!-- -->`) break the build.
- **Run `npm run format` before committing.** The Husky pre-commit hook also enforces lint + format.
- **Do not delete or rename files in `public/`** without explicit permission — they are tightly coupled to markdown content, thumbnails and OG meta tags.
- **SEO limits** — meta description ≤ 155 chars; Open Graph description ≤ 120 chars (already truncated in `Seo.astro`, keep in mind when writing descriptions).
- **No new heavy dependencies** unless explicitly requested.

## Extensibility

**Add a content type** (e.g. talks): define a schema in `src/content.config.ts` and add a corresponding loader + page(s).

**Add a language**: touches many hardcoded spots — update all of them:

1. `src/locales/<lang>.json`
2. `src/i18n.ts` (`translations` map + `useTranslations` param type)
3. `astro.config.mjs` (`i18n.locales`)
4. `getStaticPaths()` in `src/pages/[lang]/index.astro`, `[lang]/404.astro`, `[lang]/rss.xml.ts`, `[lang]/llms.txt.ts`
5. the `langs` arrays in `src/pages/[lang]/blog/[...page].astro` and `[lang]/projects/[...page].astro`
6. content dirs `src/content/blog/<lang>/` and `src/content/projects/<lang>/`

**Add a Tailwind token**: edit the `@theme` block in `src/styles/global.css`.

## Security & CI

- `deploy.yml` runs `npm ci`, then `lint` + `format:check`, then `build`; any failure blocks deployment.
- No secrets or environment variables are required; do not introduce any.
- Run `npm audit` / Dependabot for dependency hygiene.

## Further Reading

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
