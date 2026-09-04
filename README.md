# বায়োফ্লক পাঠশালা

React + Vite ওয়েব বই (PWA-ready)। প্রতি অধ্যায় আলাদা ফাইল — একটা একটা করে এডিট করা যায়।

## Quick start

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

## Project layout

```
src/
  content/
    catalog.ts              ← TOC / metadata (single source of truth)
    loadChapter.ts          ← lazy chapter chunks
    chapters/
      01-….tsx              ← thin React wrapper (title shell)
      01-….body.html        ← অধ্যায়ের মূল কনটেন্ট (এখানেই এডিট করুন)
  components/               ← shell UI (sidebar, pager, chapter chrome)
  pages/                    ← Cover + Chapter route pages
  styles/                   ← design tokens + global + chapter CSS
```

## How to edit a chapter

1. Open `src/content/chapters/<slug>.body.html` — এখানেই মূল লেখা
2. Need different lead text? Edit `LEAD` in the matching `.tsx` wrapper
3. Sidebar title/desc? Edit `src/content/catalog.ts`

## How to add a chapter

1. Add metadata in `src/content/catalog.ts`
2. Add `<slug>.tsx` + `<slug>.body.html`
3. Routing & sidebar pick it up automatically

## Routes

| Path (hash) | Page |
|------|------|
| `/#/` | Cover / ভূমিকা |
| `/#/adhyay/:slug` | Chapter |

## Publish on GitHub Pages

Site will be: **https://devnasir23.github.io/biofloc-pathshala/**

### One-time setup

1. Push this repo to GitHub (`master` or `main`).
2. Repo → **Settings → Pages** → Build and deployment → Source: **Deploy from a branch**
3. Branch: **`gh-pages`** / folder **`/` (root)** → Save  
   *(The `gh-pages` branch is created automatically by the deploy command below.)*

### Every time you want to update the live site

```bash
git-use devnasir23   # if needed
npm run deploy
```

That builds the app and pushes `dist/` to the `gh-pages` branch.

## Notes

- Theme (light/dark) persists in `localStorage`
- **PWA**: installable + offline (service worker via `vite-plugin-pwa`)
  - Icons: `public/icons/`
  - Manifest + SW generated on `npm run build`
  - Test install: `npm run build && npm run preview` (HTTPS or localhost)
- Vite `base` is `/biofloc-pathshala/` for GitHub Pages
- Design tokens: `src/styles/tokens.css` (`--bp-*`)
- Chapter bodies use the same `--bp-*` CSS variables, so dark mode works automatically
