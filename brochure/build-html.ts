import { CLINIC, DOCTORS, TREATMENTS, FACILITIES } from "../src/lib/site-config";
import { BRANCH_LIST } from "../src/lib/branches";
import type { BrochureAssets } from "./prepare-assets";

function fileUrl(absPath: string): string {
  return "file:///" + absPath.replace(/\\/g, "/").replace(/ /g, "%20");
}

export function buildBrochureHtml(assets: BrochureAssets): string {
  const featured = TREATMENTS.filter((t) => t.featured);
  const coreTeam = DOCTORS.filter((d) => !d.visiting);
  const teamWithoutPrincipal = coreTeam.filter((d) => d.id !== "dr-jeo-tom-charls");
  const visiting = DOCTORS.filter((d) => d.visiting);
  const additionalTreatments = TREATMENTS.filter((t) => !t.featured);
  const principal = DOCTORS.find((d) => d.id === "dr-jeo-tom-charls");

  const img = (key: string) => (assets[key] ? fileUrl(assets[key]) : "");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${CLINIC.name} — Brochure</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500&family=Inter:wght@400;500&family=Playfair+Display:ital,wght@0,400;1,400&display=swap" rel="stylesheet" />
<style>
  :root {
    --dark-moss: #254E06;
    --olive: #7E8407;
    --jonquil: #EAC800;
    --honeydew: #ECF5E2;
    --tea-green: #D7E3A4;
    --vanilla: #F5EAB9;
    --cafe: #563D23;
    --moss: #A7A865;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  @page { size: A4 portrait; margin: 0; }
  body { font-family: Inter, system-ui, sans-serif; color: var(--cafe); -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .page {
    width: 210mm;
    height: 297mm;
    position: relative;
    overflow: hidden;
    page-break-after: always;
    background: #fff;
  }
  .page:last-child { page-break-after: auto; }
  .pad { padding: 18mm 16mm 22mm; height: 100%; display: flex; flex-direction: column; }
  .eyebrow {
    font-family: "IBM Plex Mono", monospace;
    font-size: 7pt;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--olive);
    margin-bottom: 6mm;
  }
  .eyebrow.light { color: var(--jonquil); }
  h1, h2, h3 { font-family: "Playfair Display", Georgia, serif; font-weight: 400; color: var(--dark-moss); line-height: 1.1; }
  h1 { font-size: 36pt; }
  h2 { font-size: 22pt; margin-bottom: 4mm; }
  h3 { font-size: 13pt; margin-bottom: 2mm; }
  p { font-size: 10pt; line-height: 1.55; }
  .rule { height: 1px; background: var(--tea-green); margin: 6mm 0; }
  .rule.light { background: rgba(236,245,226,0.35); }
  .footer {
    position: absolute;
    bottom: 10mm;
    left: 16mm;
    right: 16mm;
    display: flex;
    justify-content: space-between;
    font-family: "IBM Plex Mono", monospace;
    font-size: 7pt;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--moss);
  }
  .footer.light { color: var(--tea-green); }
  .cols { display: grid; grid-template-columns: 1fr 1fr; gap: 8mm; }
  .bg-honey { background: var(--honeydew); }
  .bg-vanilla { background: var(--vanilla); }
  .bg-moss { background: var(--dark-moss); color: var(--honeydew); }
  .bg-moss p { color: rgba(236,245,226,0.92); }
  .bg-moss h2 { color: var(--honeydew); }
  .service { border-top: 1px solid var(--tea-green); padding: 4mm 0; }
  .service p { font-size: 9pt; color: var(--olive); }
  .meta { font-family: "IBM Plex Mono", monospace; font-size: 7pt; letter-spacing: 0.1em; text-transform: uppercase; color: var(--olive); margin-bottom: 2mm; }
  .cover-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
  .cover-shade {
    position: absolute; left: 0; right: 0; bottom: 0; height: 50%;
    background: rgba(37,78,6,0.9);
  }
  .cover-shade-mid {
    position: absolute; left: 0; right: 0; bottom: 50%; height: 14%;
    background: rgba(37,78,6,0.45);
  }
  .cover-copy { position: absolute; left: 16mm; right: 16mm; bottom: 22mm; z-index: 2; }
  .cover-copy h1 { color: var(--honeydew); }
  .cover-copy .tag { color: var(--jonquil); font-family: "Playfair Display", serif; font-size: 13pt; margin-top: 4mm; }
  .cover-logo { position: absolute; top: 16mm; left: 16mm; width: 22mm; height: 22mm; object-fit: contain; z-index: 2; }
  .img { width: 100%; object-fit: cover; display: block; }
  .gallery-split { display: grid; grid-template-columns: 58% 42%; height: 100%; }
  .gallery-split img { width: 100%; height: 100%; object-fit: cover; }
  .gallery-panel { padding: 16mm 12mm; display: flex; flex-direction: column; justify-content: center; background: var(--dark-moss); color: var(--honeydew); }
  .gallery-panel p { color: rgba(236,245,226,0.92); font-size: 9pt; line-height: 1.55; }
  .gallery-panel h2 { color: var(--honeydew); }
  .gallery-full { height: 100%; display: grid; grid-template-rows: auto 1fr; }
  .gallery-full .grid4 { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 2.5mm; height: 100%; min-height: 0; padding: 0 16mm 14mm; }
  .grid4 img { width: 100%; height: 100%; min-height: 0; object-fit: cover; }
  .treatment-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 6mm; margin-top: 4mm; }
  .treatment-compact { font-size: 8.5pt; color: var(--olive); line-height: 1.45; }
  .treatment-compact strong { color: var(--dark-moss); font-weight: 500; }
  a { color: var(--dark-moss); text-decoration: none; }
  .bg-moss a { color: var(--jonquil); }
  .center-back { height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 16mm; }
</style>
</head>
<body>

<section class="page">
  ${img("cover") ? `<img class="cover-img" src="${img("cover")}" alt="" />` : ""}
  <div class="cover-shade-mid"></div>
  <div class="cover-shade"></div>
  ${img("logo") ? `<img class="cover-logo" src="${img("logo")}" alt="" />` : ""}
  <div class="cover-copy">
    <p class="eyebrow light">Multispeciality Dental Clinic</p>
    <h1>${CLINIC.name}</h1>
    <p class="tag">${CLINIC.tagline}</p>
    <p style="color:var(--tea-green);font-size:9pt;margin-top:5mm;">Pala, Kottayam · Thrissur, Kerala</p>
  </div>
</section>

<section class="page bg-honey">
  <div class="pad">
    <p class="eyebrow">Introduction</p>
    <h2>Patient-first dentistry in Pala</h2>
    <div class="rule"></div>
    <div class="cols">
      <div>
        <p>Smile Architects is a multispeciality dental clinic and advanced orthodontic centre on Kattakkayam Road, Pala, Kottayam, Kerala — near Federal Bank in Pala Town.</p>
        <p style="margin-top:4mm;">The clinic provides comprehensive dental care for patients in Pala and the surrounding Meenachil region, serves Kottayam District, and operates a Thrissur branch in Punkunnam. General dentistry is combined with orthodontics and cosmetic care under one roof.</p>
        <p style="margin-top:4mm;">Our Pala centre is led by Dr. Jeo Tom Charls, MDS Orthodontics — registered with the Kerala State Dental Council. The clinical team places patient comfort and accurate diagnosis at the centre of every consultation.</p>
      </div>
      <div>
        ${img("introCare") ? `<img class="img" src="${img("introCare")}" alt="" style="height:52mm;" />` : ""}
        <p style="font-size:8.5pt;color:var(--olive);margin-top:3mm;">Preventive care, check-ups and routine dental treatment — Smile Architects, Pala.</p>
      </div>
    </div>
  </div>
  <div class="footer"><span>Smile Architects</span><span>02</span></div>
</section>

<section class="page">
  <div class="pad">
    <p class="eyebrow">Locations</p>
    <h2>Two clinics. One team.</h2>
    <div class="rule"></div>
    ${BRANCH_LIST.map(
      (b) => `
    <div style="margin-bottom:8mm;">
      <p class="meta">${b.isPrimary ? "Main centre" : "Branch"}</p>
      <h2 style="font-size:18pt;">${b.label} — ${b.locationLine}</h2>
      <p style="margin-top:3mm;">${b.address.full}</p>
      <p style="font-size:8.5pt;color:var(--olive);margin-top:2mm;">${b.address.landmark}</p>
    </div>`
    ).join("")}
    <div style="background:var(--honeydew);padding:5mm;margin-top:4mm;">
      <p class="meta">Contact</p>
      <p>Phone: ${CLINIC.contact.phoneDisplay} · Email: ${CLINIC.contact.email}</p>
      <p style="margin-top:2mm;"><a href="${CLINIC.contact.website}">${CLINIC.contact.website}</a></p>
    </div>
  </div>
  <div class="footer"><span>Smile Architects</span><span>03</span></div>
</section>

<section class="page bg-vanilla">
  <div class="pad">
    <p class="eyebrow">Clinical leadership</p>
    <h2>Your orthodontic specialist</h2>
    <div class="rule"></div>
    <div class="cols">
      <div>
        ${img("drJeo") ? `<img class="img" src="${img("drJeo")}" alt="" style="height:52mm;width:42mm;" />` : ""}
        <p style="font-size:8.5pt;margin-top:3mm;">${principal?.name}<br/>${principal?.qualifications} — ${principal?.specialty}</p>
      </div>
      <div>
        <p>${principal?.bio ?? ""}</p>
        <p class="meta" style="margin-top:5mm;">Certifications & training</p>
        <ul style="font-size:8.5pt;color:var(--olive);padding-left:4mm;line-height:1.5;">
          ${(principal?.training ?? []).slice(0, 6).map((t) => `<li>${t}</li>`).join("")}
        </ul>
      </div>
    </div>
  </div>
  <div class="footer"><span>Smile Architects</span><span>04</span></div>
</section>

<section class="page">
  <div class="pad">
    <p class="eyebrow">Our doctors</p>
    <h2>Multispeciality team</h2>
    <div class="rule"></div>
    ${teamWithoutPrincipal
      .map(
        (d) => `
    <div style="margin-bottom:5mm;">
      <h3>${d.name}</h3>
      <p class="meta">${d.qualifications} · ${d.specialty}</p>
      <p style="font-size:9.5pt;">${d.bio}</p>
    </div>`
      )
      .join("")}
    <p class="meta" style="margin-top:3mm;">Visiting consultants</p>
    ${visiting.map((d) => `<p style="font-size:9pt;margin-bottom:2mm;"><strong>${d.name}</strong> — ${d.qualifications}, ${d.specialty}</p>`).join("")}
    <p style="font-size:8.5pt;color:var(--olive);margin-top:4mm;">Our Pala centre is led by Dr. Jeo Tom Charls (MDS – Orthodontics and Dentofacial Orthopaedics), supported by Dr. Jintu Joan Jose and Dr. Ann Tresa T. Srambickal (both BDS – Aesthetic & General Dentistry). We also have a branch in Thrissur (Punkunnam).</p>
  </div>
  <div class="footer"><span>Smile Architects</span><span>05</span></div>
</section>

<section class="page">
  <div class="pad">
    <p class="eyebrow">Treatments</p>
    <h2>Comprehensive care</h2>
    <p style="margin-top:3mm;max-width:120mm;">Multispeciality services at Smile Architects, Pala — descriptions from our clinical offerings.</p>
    <div class="treatment-cols">
      <div>
        ${featured
          .slice(0, 6)
          .map(
            (t) => `
        <div class="service">
          <h3>${t.title}</h3>
          <p>${t.shortDescription}</p>
        </div>`
          )
          .join("")}
      </div>
      <div>
        <p class="meta" style="margin-bottom:4mm;">Additional services</p>
        <div class="treatment-compact">
          ${additionalTreatments.map((t) => `<p style="margin-bottom:2.5mm;"><strong>${t.title}</strong> — ${t.shortDescription}</p>`).join("")}
        </div>
      </div>
    </div>
  </div>
  <div class="footer"><span>Smile Architects</span><span>06</span></div>
</section>

<section class="page bg-honey">
  <div class="pad">
    <p class="eyebrow">Orthodontics & smile design</p>
    <h2>Advanced orthodontic centre</h2>
    <div class="rule"></div>
    ${featured
      .slice(6)
      .map(
        (t) => `
    <div class="service">
      <h3>${t.title}</h3>
      <p>${t.shortDescription}</p>
    </div>`
      )
      .join("")}
    <p class="meta" style="margin-top:6mm;">Areas of expertise — Dr. Jeo Tom Charls</p>
    <p style="font-size:8.5pt;color:var(--olive);line-height:1.5;margin-top:2mm;">
      ${(principal?.areasOfExpertise ?? []).slice(0, 8).map((a) => `· ${a}<br/>`).join("")}
    </p>
  </div>
  <div class="footer"><span>Smile Architects</span><span>07</span></div>
</section>

<section class="page">
  <div class="pad">
    <p class="eyebrow">The clinic</p>
    <h2>What to expect</h2>
    <div class="rule"></div>
    <div class="cols">
      <div>
        ${FACILITIES.map((f) => `<div style="margin-bottom:4mm;"><h3>${f.name}</h3><p style="font-size:9pt;color:var(--olive);">${f.description}</p></div>`).join("")}
        <p style="font-size:8.5pt;color:var(--olive);margin-top:3mm;">${CLINIC.hours.note}</p>
      </div>
      <div>
        ${img("clinic1") ? `<img class="img" src="${img("clinic1")}" alt="" style="height:42mm;margin-bottom:3mm;" />` : ""}
        ${img("clinic2") ? `<img class="img" src="${img("clinic2")}" alt="" style="height:42mm;" />` : ""}
      </div>
    </div>
  </div>
  <div class="footer"><span>Smile Architects</span><span>08</span></div>
</section>

<section class="page" style="padding:0;">
  <div class="gallery-split">
    ${img("clinic3") ? `<img src="${img("clinic3")}" alt="" />` : "<div></div>"}
    <div class="gallery-panel">
      <p class="eyebrow light">Thrissur branch</p>
      <h2 style="color:var(--honeydew);font-size:20pt;">Modern spaces for considered care</h2>
      <p style="margin-top:5mm;font-size:9pt;">Smile Architects, 2nd Floor, Ephphatha Medical Complex, Opp. St. Joseph's Church, Punkunnam, Thrissur — multispeciality care under the Smile Architects name. Same phone and booking as Pala.</p>
    </div>
  </div>
  <div class="footer light"><span>Smile Architects</span><span>09</span></div>
</section>

<section class="page bg-honey">
  <div class="gallery-full">
    <p class="eyebrow" style="padding:16mm 16mm 0;">Inside the clinic</p>
    <div class="grid4">
      ${["clinic4", "clinic5", "clinic6", "thrissurWa"].map((k) => (img(k) ? `<img src="${img(k)}" alt="" />` : "")).join("")}
    </div>
  </div>
  <div class="footer"><span>Smile Architects</span><span>10</span></div>
</section>

<section class="page bg-moss">
  <div class="pad" style="justify-content:center;">
    <p class="eyebrow light">Visit us</p>
    <h2>Book your appointment</h2>
    <div class="rule light"></div>
    <p>${CLINIC.hours.weekdays.label}: ${CLINIC.hours.weekdays.open} – ${CLINIC.hours.weekdays.close}</p>
    <p style="margin-top:2mm;">${CLINIC.hours.sunday.label}: ${CLINIC.hours.sunday.status}</p>
    <p style="margin-top:6mm;font-size:11pt;">Call ${CLINIC.contact.phoneDisplay} · WhatsApp · Online form</p>
    <p style="margin-top:4mm;"><a href="${CLINIC.social.whatsapp}">WhatsApp</a></p>
    <p style="margin-top:2mm;"><a href="${CLINIC.contact.website}/book-appointment">${CLINIC.contact.website}/book-appointment</a></p>
  </div>
  <div class="footer light"><span>Smile Architects</span><span>11</span></div>
</section>

<section class="page bg-honey">
  <div class="center-back">
    ${img("logo") ? `<img src="${img("logo")}" alt="" style="width:28mm;height:28mm;object-fit:contain;margin-bottom:8mm;" />` : ""}
    <h2>${CLINIC.name}</h2>
    <p style="font-size:9pt;color:var(--olive);margin-top:4mm;max-width:90mm;">${CLINIC.address.full}</p>
    <p style="font-size:9pt;margin-top:5mm;">${CLINIC.contact.phoneDisplay} · ${CLINIC.contact.email}</p>
    <p style="margin-top:4mm;"><a href="${CLINIC.contact.website}">${CLINIC.contact.website}</a></p>
  </div>
</section>

</body>
</html>`;
}
