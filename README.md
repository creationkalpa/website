# Kalpa Creations — Website

A Next.js site for the Kalpa Creations lamp catalogue. It builds to plain
static HTML/CSS/JS (`next build` → `out/`), so it can be hosted anywhere —
Netlify, Vercel, GitHub Pages, or any static file host.

## Running it locally

You need [Node.js](https://nodejs.org) installed (v20+).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building for deployment

```bash
npm run build
```

This produces a fully static site in the `out/` folder. Upload that folder's
contents to any static host. There is no server or database — the whole
site is just files.

## Adding, editing, or removing a lamp

All lamp/product data lives in **one file**:
`src/data/lamps.ts`

To add a new lamp or colourway:

1. Create a folder for it under `public/images/lamps/<slug>/` (e.g.
   `public/images/lamps/aura-green/`) and drop its photos in as `1.jpg`,
   `2.jpg`, etc. (first photo is the main image; a second photo shows on
   hover in the collection grid).
2. Open `src/data/lamps.ts` and copy an existing entry in the `lamps` array,
   then edit its fields:
   - `slug` — must match the folder name you created
   - `name`, `edition`, `colour`
   - `family` — `"Mushroom Silhouettes"` or `"Sculptural Forms"`
   - `description` — one or two sentences, in the brand's voice
   - `images` — `["1.jpg", "2.jpg"]` etc., matching what you added
   - `relatedSlugs` — slugs of sibling colourways, so they cross-link under
     "Available in Other Editions" (add the new slug to its siblings' lists
     too)
   - `featuredOnHome` — `true` to show it on the homepage's featured strip
   - `available` — set to `false` to mark it sold out (still shows, with a
     "Sold Out" badge, but reads as unavailable)
   - `addedAt` — today's date (`YYYY-MM-DD`), so it sorts correctly under
     "Newest" on the Collection page
3. Save. That's it — the homepage, Collection grid, filters, and the
   product's own page are all generated from this file automatically.

To remove a lamp, delete its object from the array (and remove its slug
from any siblings' `relatedSlugs`). To edit copy, tags, or images on an
existing lamp, just edit its fields in place.

No rebuild step is needed while developing (`npm run dev` picks up changes
instantly). Before deploying, run `npm run build` again so the static
`out/` folder reflects your changes.

## Editing site-wide text

- **Contact details / Instagram handle**: `src/lib/site-config.ts`
- **Home page copy**: `src/app/page.tsx`
- **About / Our Process copy**: `src/app/about/page.tsx`
- **Custom Orders copy**: `src/app/custom-orders/page.tsx`
- **Colours / fonts**: `src/app/globals.css` (the `--color-*` variables) and
  `src/app/layout.tsx` (the three fonts)

## Enquiries

There is no backend or form-processing service. "Enquire" buttons and forms
open either an Instagram DM link or a pre-filled `mailto:` link addressed to
the email in `site-config.ts` — no submissions are stored anywhere on the
site itself.
