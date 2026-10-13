# Smile Architects — Print Brochure

Premium A4 editorial brochure generated from **site-config** and **public/** assets only (no invented copy).

## Generate (HTML → PDF via Playwright)

```bash
npm run brochure:generate
```

## Generate (LaTeX → PDF, 8-page print layout)

```bash
npm run brochure:latex:sync
npm run brochure:latex:build
```

See `brochure/latex/README.md`.

Output:

- `output/smile-architects-brochure.pdf`
- `output/client-brochure.pdf` (same file)
- `output/smile-architects-brochure.html` (editable layout source)

## Preview pages (QA)

```bash
npm run brochure:preview
```

Writes PNGs to `output/brochure-previews/`.

## Edit

- Layout & copy wiring: `brochure/build-html.ts` (primary)
- Legacy react-pdf draft: `brochure/BrochureDocument.tsx` (not used by `brochure:generate`)
- Brand tokens: `brochure/theme.ts`
- Image prep: `brochure/prepare-assets.ts`
- Source of truth: `src/lib/site-config.ts`, `src/lib/branches.ts`

## Fonts

OFL-licensed files in `brochure/fonts/` (Playfair Display, Inter, IBM Plex Mono — matches the website stack).

## Notes

- Team photos not present in the repo are omitted; names and bios come from `DOCTORS` / FAQ text on the site.
- Re-run generation after updating site content or adding images under `public/`.
