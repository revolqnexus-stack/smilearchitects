# Smile Architects — LaTeX brochure (8 pages, A4)

Premium print brochure aligned with `src/lib/site-config.ts` and website assets.

## Quick start

1. **Sync images** from `public/` (required before first compile):

   ```bash
   npm run brochure:latex:sync
   ```

2. **Compile** (LuaLaTeX + fontspec):

   ```bash
   npm run brochure:latex:build
   ```

   Output: `brochure/latex/smile-architects-brochure.pdf`

## Requirements

- [TeX Live](https://tug.org/texlive/) or MiKTeX with **lualatex**
- Packages: `fontspec`, `tikz`, `tcolorbox`, `eso-pic`, `adjustbox`, `fancyhdr`, `hyperref`, `microtype`
- Optional: `qrcode` (for booking QR on back cover)
- Fonts (optional; TeX Gyre fallbacks used if missing): **Inter**, **Playfair Display**, **IBM Plex Mono**

## Image mapping

The sync script copies real clinic photos from the website repo:

| Brochure path | Source |
|---------------|--------|
| `images/logo.png` | `public/images/logo.png` |
| `images/hero.jpg` | Thrissur clinic hero |
| `images/about.jpg` | Clinic interior |
| `images/dr-jeo-tom-charls.jpg` | Principal doctor |
| `images/team/*.jpg` | Team photos (placeholders if files missing in `public/images/team/`) |
| `images/braces.jpg`, `aligners.jpg`, `lingual.jpg` | Clinic interiors |
| `images/pala-*.jpg` | Clinic gallery |
| `images/thrissur/*.png` | Thrissur branch |

Add team JPGs under `public/images/team/` and re-run sync to replace placeholders.

## Fixes vs pasted v2

- **Photos:** `adjustbox` crop-to-fill (valid `min width` / `min height`); no invalid `min size` on `\includegraphics`
- **Layout:** stat / FAQ / why cards use `\linewidth` fractions so boxes align on A4
- **Visiting doctors:** three equal `0.32\linewidth` columns (no overflow)
- **Eyebrows / footer:** uppercase text passed directly (no flaky `\MakeUppercase` on macros)
- **Page 8:** single shipout picture for dark BG + logo (no double `\darkbg` clash)
- **Content:** matches site config (18 treatments, both branches, Jintu/Ann line, Practo note)

## Edit content

Edit `smile-architects-brochure.tex`, then recompile. For clinic-wide facts, update `site-config.ts` first and mirror changes here—or use the HTML pipeline: `npm run brochure:generate`.
