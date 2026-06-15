# Adem Kocyigit — Portfolio

Personal film / video / visual portfolio. Same technical basis as the FirstUp sites:
**Astro 5 + Tailwind 3**, bilingual (DE default, `/en` English), static output, git.

## Develop

```bash
npm install
npm run dev        # http://localhost:4323
npm run build      # static output → dist/
npm run preview
```

## Add or edit a project

Everything lives in **one file**: [`src/data/projects.ts`](src/data/projects.ts).

Copy a block in `PROJECTS` and fill it in:

```ts
{
  slug: 'mein-projekt',
  title: 'Mein Projekt',
  category: 'film',            // film | corporate | interviews | visuelle | weiteres
  year: '2026',
  featured: true,              // shows under "Ausgewählt" / "Selected"
  role: { de: 'Regie · Schnitt', en: 'Director · Editor' },
  description: { de: '…', en: '…' },
  video: { type: 'vimeo', id: '123456789' },   // see below
  thumbnail: '/thumbs/mein-projekt.jpg',        // optional, see below
}
```

### Video player (preview → click → opens player)

- **Vimeo:** `video: { type: 'vimeo', id: '123456789' }` (the number in the Vimeo URL)
- **Google Drive:** `video: { type: 'drive', id: '1AbC…' }` (the file id from the share link;
  the file must be shared **"anyone with the link"**)
- **None yet:** `video: { type: 'none' }` → card opens a tasteful "Vorschau folgt" panel
- **Web/other (category `weiteres`):** add `link: 'https://…'` instead → opens in a new tab

### Thumbnails

Drop an image in `public/thumbs/` and reference it as `thumbnail: '/thumbs/name.jpg'`
(ideally 16:9, e.g. 1280×720). Without a thumbnail a styled placeholder with the title
initials is shown.

## Categories

Defined in `CATEGORIES` in `src/data/projects.ts` (single source of truth — the sidebar
reads from it). Current: Kurzfilm · Corporate · Interviews & Events · Visuelle Arbeiten · Weiteres.

## Languages

Route map is in [`src/i18n/routes.ts`](src/i18n/routes.ts); UI strings in
[`src/i18n/ui.ts`](src/i18n/ui.ts). German pages live in `src/pages/`, English in `src/pages/en/`.

## Deploy (Cloudflare Pages)

Static build — connect the repo in Cloudflare Pages with:
- **Build command:** `npm run build`
- **Output directory:** `dist`

(Also deployable on Netlify / GitHub Pages.) Set the final domain in `astro.config.mjs` (`site`).

## TODO before going live

- [ ] Replace placeholder projects with real ones + video ids + thumbnails (`src/data/projects.ts`)
- [ ] Add a social share image at `public/og.jpg` (1200×630)
- [ ] Set the real domain in `astro.config.mjs`
- [ ] Legal review of Impressum / Datenschutz
