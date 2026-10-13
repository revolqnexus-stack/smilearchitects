/**
 * Renders each PDF page to PNG for visual QA (requires pdf-to-img).
 * Usage: npm run brochure:preview
 */
import fs from "fs";
import path from "path";
import { pdf } from "pdf-to-img";

async function main() {
  const pdfPath = path.join(process.cwd(), "output", "smile-architects-brochure.pdf");
  if (!fs.existsSync(pdfPath)) {
    console.error("Run npm run brochure:generate first.");
    process.exit(1);
  }

  const previewDir = path.join(process.cwd(), "output", "brochure-previews");
  fs.mkdirSync(previewDir, { recursive: true });

  const doc = await pdf(pdfPath, { scale: 2 });
  let page = 1;
  for await (const image of doc) {
    const out = path.join(previewDir, `page-${String(page).padStart(2, "0")}.png`);
    fs.writeFileSync(out, image);
    console.log(`Wrote ${out}`);
    page += 1;
  }
  console.log(`Preview complete: ${page - 1} pages in ${previewDir}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
