import fs from "fs";
import path from "path";
import sharp from "sharp";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const CACHE_DIR = path.join(process.cwd(), "output", "brochure-cache");

/** Max edge length for print embed (~300 DPI on A4 width) */
const MAX_EDGE = 2400;

export type BrochureAssets = Record<string, string>;

export async function prepareBrochureAssets(
  entries: { key: string; publicPath: string }[]
): Promise<BrochureAssets> {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
  const out: BrochureAssets = {};

  for (const { key, publicPath } of entries) {
    const rel = publicPath.replace(/^\//, "");
    const src = path.join(PUBLIC_DIR, rel);
    if (!fs.existsSync(src)) {
      console.warn(`[brochure] Missing asset: ${publicPath}`);
      continue;
    }
    const dest = path.join(CACHE_DIR, `${key}.jpg`);
    const stat = fs.statSync(src);
    const srcTime = stat.mtimeMs;
    if (fs.existsSync(dest)) {
      const destTime = fs.statSync(dest).mtimeMs;
      if (destTime >= srcTime) {
        out[key] = dest;
        continue;
      }
    }
    await sharp(src)
      .rotate()
      .resize(MAX_EDGE, MAX_EDGE, { fit: "inside", withoutEnlargement: false })
      .jpeg({ quality: 92, mozjpeg: true })
      .toFile(dest);
    out[key] = dest;
    console.log(`[brochure] Prepared ${key} ← ${publicPath}`);
  }

  return out;
}
