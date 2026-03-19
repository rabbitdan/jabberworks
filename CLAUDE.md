# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Build for production
npm run generate  # Generate static site
npm run preview   # Preview production build
```

No test suite is present.

## Architecture

**Jabberworks** is a Nuxt 4 static site for a comics/children's book publisher. It uses Vue 3, TypeScript, and Tailwind CSS, deployed as a fully static site (via `npm run generate`).

### Data Layer

All content lives in `/data/` as TypeScript files (`books.ts`, `comics.ts`, `events.ts`, `seriesSection.ts`). Types are defined in `/types/content.ts`. There is no CMS or database.

- `/scripts/generateBooks.ts` and `generateComics.ts` — utility scripts that scan `/public/` assets and auto-generate data file entries. Run these manually when adding new books/comics assets.
- `/lib/content.ts` — helper functions for looking up books and series by slug.
- `/utils/` — small utilities: `eventDate.ts` (date formatting/filtering) and `paragraphs.ts` (normalising `string | string[]` fields to arrays).

### Pages & Routing

Standard Nuxt file-based routing under `/app/pages/`. Book pages are pre-rendered via `nuxt.config.ts` (the `nitro.prerender.routes` list is built from `books.ts` at config time).

### Content Types

The `types/content.ts` file is the source of truth for all content shapes. Key types:
- `Book` — has optional `pageLink` (if set to an external URL, no internal page is generated), `activitySheets`, `buyLinks`, `youtube`, `videos`, `miscPanel`
- `EditorialPage` / `EditorialPageSection` — union type with discriminated `_type` field (`textImage`, `featureImage`, `callout`, `twoColumn`, `splitStack`)
- `Comic` — has `panels: ComicPanel[]` rendered in a modal viewer
- `Event` — supports `sessions` for multi-session events; filtered/sorted by date in the events page
- `RichTextParagraph` — union of plain string, `{ text }`, or `{ spans: RichTextSpan[] }` for inline links/bold

### Styling

Tailwind with brand colours defined in `tailwind.config.ts`. Global styles in `/assets/css/main.css`. Splide.js CSS imported globally for carousels.

### Environment

- `NUXT_SITE_URL` — production site URL (used for sitemap/SEO)
- `CONTEXT` — set by Netlify (`production` / `deploy-preview` / `branch-deploy`); non-production contexts automatically block search engines via robots.txt

## Future plans 

This site will get a Sanity connection in due course so things should be scalable in that direction