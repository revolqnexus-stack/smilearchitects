/**
 * Generate print-oriented Smile Architects brochure PDF from site-config + public assets.
 *
 * Usage: npm run brochure:generate
 * Output: output/smile-architects-brochure.pdf
 */
import path from "path";
import fs from "fs";
import { chromium } from "playwright";
import { prepareBrochureAssets } from "../brochure/prepare-assets";
import { buildBrochureHtml } from "../brochure/build-html";

const ASSET_MAP = [
  { key: "cover", publicPath: "/thrissur/page_1_image_4.png" },
  { key: "logo", publicPath: "/images/logo.png" },
  { key: "introCare", publicPath: "/images/general dentistry.png" },
  { key: "drJeo", publicPath: "/images/dr-jeo-tom-charls.jpg" },
  { key: "clinic1", publicPath: "/thrissur/page_1_image_3.png" },
  { key: "clinic2", publicPath: "/thrissur/page_1_image_5.png" },
  { key: "clinic3", publicPath: "/thrissur/page_1_image_6.png" },
  { key: "clinic4", publicPath: "/thrissur/page_1_image_7.png" },
  { key: "clinic5", publicPath: "/thrissur/page_1_image_8.png" },
  { key: "clinic6", publicPath: "/thrissur/page_1_image_2.jpeg" },
  { key: "thrissurWa", publicPath: "/thrissur/IMG-20260930-WA0028.jpg" },
];

async function main() {
  const outDir = path.join(process.cwd(), "output");
  fs.mkdirSync(outDir, { recursive: true });

  console.log("Preparing brochure images (print resolution)…");
  const assets = await prepareBrochureAssets(ASSET_MAP);

  const htmlPath = path.join(outDir, "smile-architects-brochure.html");
  const html = buildBrochureHtml(assets);
  fs.writeFileSync(htmlPath, html, "utf8");
  console.log(`Wrote editable HTML: ${htmlPath}`);

  const pdfPath = path.join(outDir, "smile-architects-brochure.pdf");
  console.log("Rendering PDF with Playwright…");

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(`file:///${htmlPath.replace(/\\/g, "/")}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);

  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  await browser.close();

  const clientPath = path.join(outDir, "client-brochure.pdf");
  fs.copyFileSync(pdfPath, clientPath);

  const stat = fs.statSync(pdfPath);
  console.log(`Done: ${pdfPath} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
  console.log(`Also: ${clientPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
