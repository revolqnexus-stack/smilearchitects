/**
 * Copy & resize website assets into brochure/latex/images/ for LuaLaTeX.
 * Run: npm run brochure:latex:sync
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "brochure", "latex");
const OUT = path.join(ROOT, "images");
const PUBLIC = path.join(process.cwd(), "public");

/** public path (no leading slash) → output path under images/ */
const MAP: { src: string; dest: string; maxEdge?: number }[] = [
  { src: "images/logo.png", dest: "logo.png" },
  { src: "images/dr-jeo-tom-charls.jpg", dest: "dr-jeo-tom-charls.jpg" },
  { src: "images/team/dr-jom-t-kizhakkel.jpg", dest: "team/dr-jom-t-kizhakkel.jpg" },
  { src: "images/team/dr-kishore-george.jpg", dest: "team/dr-kishore-george.jpg" },
  { src: "images/team/dr-renu-ann-mathew.jpg", dest: "team/dr-renu-ann-mathew.jpg" },
  { src: "images/team/dr-akarsh-babu.jpg", dest: "team/dr-akarsh-babu.jpg" },
  { src: "thrissur/page_1_image_4.png", dest: "hero.jpg", maxEdge: 2400 },
  { src: "thrissur/page_1_image_6.png", dest: "about.jpg", maxEdge: 2400 },
  { src: "thrissur/page_1_image_5.png", dest: "braces.jpg", maxEdge: 1600 },
  { src: "thrissur/page_1_image_8.png", dest: "aligners.jpg", maxEdge: 1600 },
  { src: "thrissur/page_1_image_7.png", dest: "lingual.jpg", maxEdge: 1600 },
  { src: "thrissur/page_1_image_3.png", dest: "pala-1.jpg", maxEdge: 2000 },
  { src: "thrissur/page_1_image_2.jpeg", dest: "pala-2.jpg", maxEdge: 2000 },
  { src: "thrissur/IMG-20260930-WA0028.jpg", dest: "pala-3.jpg", maxEdge: 2000 },
  { src: "thrissur/page_1_image_3.png", dest: "thrissur/page_1_image_3.png" },
  { src: "thrissur/page_1_image_4.png", dest: "thrissur/page_1_image_4.png" },
  { src: "thrissur/page_1_image_5.png", dest: "thrissur/page_1_image_5.png" },
  { src: "images/general dentistry.png", dest: "general-dentistry.jpg", maxEdge: 1600 },
];

async function writeAsset(relSrc: string, relDest: string, maxEdge = 2400) {
  const src = path.join(PUBLIC, relSrc);
  const dest = path.join(OUT, relDest);
  fs.mkdirSync(path.dirname(dest), { recursive: true });

  if (!fs.existsSync(src)) {
    console.warn(`[latex-images] skip (missing): ${relSrc}`);
    return;
  }

  const ext = path.extname(dest).toLowerCase();
  if (ext === ".png") {
    await fs.promises.copyFile(src, dest);
    console.log(`[latex-images] ${relDest} ← ${relSrc}`);
    return;
  }

  await sharp(src)
    .rotate()
    .resize(maxEdge, maxEdge, { fit: "inside", withoutEnlargement: false })
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(dest);
  console.log(`[latex-images] ${relDest} ← ${relSrc}`);
}

/** Silhouette placeholders for missing team photos (neutral, on-brand) */
async function writeTeamPlaceholder(destRel: string, label: string) {
  const dest = path.join(OUT, destRel);
  if (fs.existsSync(dest)) return;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="480">
    <rect width="100%" height="100%" fill="#ECF5E2"/>
    <rect x="20" y="20" width="360" height="440" rx="24" fill="#D7E3A4" stroke="#7E8407" stroke-width="2"/>
    <text x="200" y="240" text-anchor="middle" font-family="Arial,sans-serif" font-size="14" fill="#254E06">${label}</text>
  </svg>`;
  await sharp(Buffer.from(svg)).jpeg({ quality: 88 }).toFile(dest);
  console.log(`[latex-images] placeholder ${destRel}`);
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  for (const row of MAP) {
    await writeAsset(row.src, row.dest, row.maxEdge ?? 2400);
  }
  const teamPlaceholders: [string, string][] = [
    ["team/dr-jom-t-kizhakkel.jpg", "Dr. Jom T. Kizhakkel"],
    ["team/dr-kishore-george.jpg", "Dr. Kishore George"],
    ["team/dr-renu-ann-mathew.jpg", "Dr. Renu Ann Mathew"],
    ["team/dr-akarsh-babu.jpg", "Dr. Akarsh Babu"],
  ];
  for (const [dest, label] of teamPlaceholders) {
    const full = path.join(OUT, dest);
    if (!fs.existsSync(full)) await writeTeamPlaceholder(dest, label);
  }
  console.log(`Done. Images folder: ${OUT}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
