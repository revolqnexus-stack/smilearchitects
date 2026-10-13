# Smile Architects — Complete Website Reference

> **Purpose:** Single reference for clinic content, URLs, branding, tech, and operations.  
> **Code source of truth:** `src/lib/site-config.ts`, `src/lib/branches.ts`, `src/lib/seo/local-landing.ts`, `src/lib/seo/patient-guide-pages.ts`, `src/lib/migration-data.ts` (CMS seed).  
> **Last synced with repo:** October 2026.

---

## Table of contents

1. [Clinic identity](#1-clinic-identity)
2. [Locations & branches](#2-locations--branches)
3. [Contact, hours & booking](#3-contact-hours--booking)
4. [Doctors & team](#4-doctors--team)
5. [Treatments & services](#5-treatments--services)
6. [Facilities](#6-facilities)
7. [FAQs (site-wide)](#7-faqs-site-wide)
8. [Public site map (all routes)](#8-public-site-map-all-routes)
9. [SEO & local landing pages](#9-seo--local-landing-pages)
10. [Patient guide hub](#10-patient-guide-hub)
11. [Dental guides (articles)](#11-dental-guides-articles)
12. [Navigation & UX](#12-navigation--ux)
13. [Brand, design & assets](#13-brand-design--assets)
14. [Technology stack](#14-technology-stack)
15. [CMS (admin panel)](#15-cms-admin-panel)
16. [Database & environment](#16-database--environment)
17. [Deployment & repository](#17-deployment--repository)
18. [URL redirects](#18-url-redirects)
19. [Print brochure](#19-print-brochure)
20. [Items to verify / known gaps](#20-items-to-verify--known-gaps)

---

## 1. Clinic identity

| Field | Value |
|--------|--------|
| **Name** | Smile Architects |
| **Tagline** | Multispeciality Dental Clinic & Advanced Orthodontic Centre |
| **Full name** | Smile Architects — Multispeciality Dental Clinic & Advanced Orthodontic Centre |
| **Practising since (trust)** | 2015 |
| **Production website** | https://smilearchitectspala.com |
| **Default SEO title** | Smile Architects \| Best Dental Clinic in Pala, Kottayam & Thrissur |
| **Default meta description** | Smile Architects — multispeciality dental clinic in Pala, Kottayam District & Thrissur. MDS orthodontist, dental implants, braces, lingual braces & smile design. Call +91 9446 999 333. |

### Brand assets

| Asset | Path | Notes |
|--------|------|--------|
| Primary logo (desktop, footer, mobile nav) | `public/images/logo.png` → `/images/logo.png` | Cache bust: `?v={CLINIC.brand.logoVersion}` (currently **4**) |
| Legacy mobile mark file | `public/images/MOBILE LOGO.png` | Still in repo; mobile header uses **logo.png** in a wider glass pill |
| Open Graph image | `/images/logo.png` | From `CLINIC.seo.ogImage` |

---

## 2. Locations & branches

Two clinics. Same phone, email, hours, and WhatsApp for both.

### Pala — main centre (primary)

| Field | Value |
|--------|--------|
| **Branch ID** | `pala` |
| **Landing** | `/` (homepage) |
| **Toggle label** | Pala · Kottayam |
| **Location line** | Pala, Kottayam, Kerala |
| **Address** | Kattakkayam Road, Pala, Kottayam, Kerala – 686575 |
| **Landmark** | Near Federal Bank, Pala Town |
| **Google Maps embed** | `CLINIC.platforms.googleMaps.embedUrl` |
| **Directions** | https://maps.google.com/?q=Smile+Architects,+Kattakkayam+Road,+Pala,+Kottayam,+Kerala+686575 |

### Thrissur — branch

| Field | Value |
|--------|--------|
| **Branch ID** | `thrissur` |
| **Landing** | `/thrissur` |
| **Toggle label** | Thrissur · Punkunnam |
| **Location line** | Punkunnam, Thrissur, Kerala |
| **Address** | Smile Architects, 2nd Floor, Ephphatha Medical Complex, Opp. St. Joseph's Church, Punkunnam, Thrissur, Kerala – 680002 |
| **Landmark** | Opp. St. Joseph's Church, Punkunnam |
| **Google share link** | https://share.google/8e7fOT2ffSAPGhICJ |
| **Hero image** | `/thrissur/page_1_image_2.jpeg` |

**Thrissur gallery (public):**

- `/thrissur/page_1_image_3.png` — consultation workspace  
- `/thrissur/page_1_image_4.png` — treatment room interior  
- `/thrissur/page_1_image_5.png` — clinic interior detail  
- `/thrissur/page_1_image_6.png` — modern dental clinic space  
- `/thrissur/page_1_image_7.png` — patient care area  
- `/thrissur/page_1_image_8.png` — clinic ambience  
- `/thrissur/IMG-20260930-WA0028.jpg` — additional photo  

**Branch switcher:** Stored in localStorage key `smile-architects-branch` (`pala` \| `thrissur`).

---

## 3. Contact, hours & booking

| Channel | Value |
|---------|--------|
| **Phone (tel)** | +919446999333 |
| **Phone (display)** | +91 9446 999 333 |
| **Email** | drjeosmilearchitects@gmail.com |
| **WhatsApp** | https://wa.me/919446999333 |
| **Online booking** | `/book-appointment` |

### Opening hours

| Day | Hours |
|-----|--------|
| Monday – Saturday | 9:30 AM – 8:00 PM |
| Sunday | Closed |

**Note:** Appointments recommended. Walk-ins welcome subject to availability.

### Third-party listings

| Platform | URL |
|----------|-----|
| Practo | https://www.practo.com/pala/clinic/smile-architects-palai |
| Justdial | https://www.justdial.com (placeholder in config) |
| Facebook / Instagram / YouTube | Empty in config — clinic to verify |

---

## 4. Doctors & team

### Core team (in `DOCTORS`, non-visiting)

#### Dr. Jeo Tom Charls — Principal orthodontist

- **URL:** `/dentists/dr-jeo-tom-charls`
- **Photo:** `/images/dr-jeo-tom-charls.jpg` (present in repo)
- **Qualifications:** MDS — Orthodontics and Dentofacial Orthopaedics
- **Roles:** Consultant Orthodontist; Certified Invisalign Provider; Certified Spark Aligner Provider
- **Registration:** Kerala State Dental Council — No. **9451** (2015)
- **Memberships:** Indian Orthodontic Society; Indian Dental Association
- **Education:** BDS Sri Balaji Dental College, Chennai (2010); MDS Orthodontics same institution (2015)
- **Experience:** Smile Architects Pala; Mar Sleeva Medicity Palai; Believer's Church Medical College & Hospital; Raihan Institute of Medical Sciences; V.V. Dental Clinic Chennai
- **Training:** Invisalign; Spark; lingual orthodontics; lingual CAD/CAM; ClearPath; TMJ in functional orthodontics; miniscrews
- **Areas of expertise:** Straight-wire; Damon/self-ligating; ceramic; lingual; Invisalign & Spark; surgical orthodontics; orthognathic planning; growth modification; fixed functional appliances; digital smile designing
- **Bio:** (see `site-config.ts`) MDS specialist; full spectrum from conventional braces to lingual and clear aligners.

#### Dr. Jom T. Kizhakkel — Periodontist & implantologist

- **URL:** `/dentists/dr-jom-t-kizhakkel`
- **Photo path:** `/images/team/dr-jom-t-kizhakkel.jpg` *(file not in repo as of last audit — add under `public/images/team/`)*
- **Qualifications:** MDS — Periodontics & Implantology
- **Expertise:** Periodontal treatment; scaling/root planing; gum surgery; implants; implant-supported restorations; bone grafting

### Visiting consultants

| Doctor | Specialty | URL slug |
|--------|-----------|----------|
| Dr. Kishore George | Oral & Maxillofacial Surgery | `dr-kishore-george` |
| Dr. Renu Ann Mathew | Paediatric & Preventive Dentistry | `dr-renu-ann-mathew` |
| Dr. Akarsh Babu | Prosthodontics | `dr-akarsh-babu` |

Photos expected at `/images/team/dr-*.jpg` — **not all present in `public/`**; site falls back when missing.

### Additional team (FAQ copy only)

Site FAQ states the clinic is also supported by:

- **Dr. Jintu Joan Jose** — BDS, Aesthetic & General Dentistry  
- **Dr. Ann Tresa T. Srambickal** — BDS, Aesthetic & General Dentistry  

These names are **not** separate entries in `DOCTORS` (no profile pages unless added later).

### Removed profile

- **`/dentists/dr-mohamed-riyas`** → permanent redirect to **`/dentists`** (doctor no longer at clinic).

---

## 5. Treatments & services

All treatment pages: **`/treatments/{slug}`**. Orthodontics hub: **`/orthodontics`** plus dedicated subpages.

| Title | Slug | Featured on homepage | Short description |
|--------|------|----------------------|-------------------|
| General Dentistry | `general-dentistry` | Yes | Preventive care, check-ups and routine dental treatment. |
| Paediatric Dentistry | `pediatric-dentistry` | Yes | Dental care tailored for children. |
| Dental Implants | `dental-implants` | Yes | A permanent solution for missing teeth. |
| Cosmetic Dentistry | `cosmetic-dentistry` | Yes | Improving the appearance of teeth and smile. |
| Smile Design | `smile-design` | Yes | Digital smile design for complete smile transformation. |
| Root Canal Treatment | `root-canal-treatment` | Yes | Saving infected or damaged teeth. |
| Restorative Dentistry | `restorative-dentistry` | No | Restoring teeth damaged by decay or injury. |
| Oral & Maxillofacial Surgery | `oral-surgery` | No | Surgical care for the mouth, jaws and related structures. |
| Orthodontics | `orthodontics` | Yes | Correcting misaligned teeth and jaw relationships. |
| Dental Braces | `braces` | Yes | Metal, ceramic and self-ligating brace systems. |
| Clear Aligners | `clear-aligners` | Yes | Transparent removable aligners for discreet treatment. |
| Lingual Braces | `lingual-braces` | Yes | Hidden braces fitted to the inner surface of teeth. |
| Periodontal Treatment | `periodontal-treatment` | No | Treatment for gum disease and supporting structures. |
| Prosthodontics | `prosthodontics` | No | Replacing and restoring missing or damaged teeth. |
| Dental Crowns | `crowns` | No | Caps that restore and protect damaged teeth. |
| Dental Bridges | `bridges` | No | Fixed replacement for one or more missing teeth. |
| Dentures | `dentures` | No | Removable replacements for missing teeth. |
| Dental Veneers | `veneers` | No | Thin porcelain or composite shells for smile improvement. |

### Orthodontics subpages (standalone content)

| Page | URL |
|------|-----|
| Orthodontics overview | `/orthodontics` |
| Braces | `/orthodontics/braces` |
| Clear aligners | `/orthodontics/clear-aligners` |
| Lingual braces | `/orthodontics/lingual-braces` |

Long-form treatment copy lives in **CMS** (`treatments` table) and/or **`migration-data.ts`** for seeding.

---

## 6. Facilities

| Name | Description |
|------|-------------|
| Individual Treatment Rooms | Private, dedicated treatment rooms for patient comfort and dignity. |
| Sterilisation | Strict sterilisation protocols maintained throughout the clinic. |
| Digital X-Ray | Modern digital radiography for accurate diagnosis with reduced radiation. |
| Ample Car Parking | Convenient parking available for patients. |
| Online & Telephone Booking | Book appointments online or by calling +91 9446 999 333. |

---

## 7. FAQs (site-wide)

From `FAQS_GENERAL` in `site-config.ts`:

1. **Where is Smile Architects located?** — Kattakkayam Road, Pala, Kottayam, Kerala – 686575, near Federal Bank, Pala Town.  
2. **Opening hours?** — Mon–Sat 9:30 AM–8:00 PM; closed Sunday.  
3. **How to book?** — Call +91 9446 999 333, WhatsApp, or online form.  
4. **Which dentists?** — Led by Dr. Jeo Tom Charls (MDS Orthodontics); supported by Dr. Jintu Joan Jose and Dr. Ann Tresa T. Srambickal (BDS — Aesthetic & General Dentistry).  
5. **Parking?** — Yes, ample car parking.  
6. **Walk-ins?** — Welcome; appointments recommended.  

Additional FAQs exist on **local landing pages** (`/local/pala`, `/local/kottayam`, `/local/thrissur`) — see [§9](#9-seo--local-landing-pages).

---

## 8. Public site map (all routes)

### Main marketing site `(site)/`

| Path | Purpose |
|------|---------|
| `/` | Homepage — Pala-focused hero, treatments, facilities, regional CTAs |
| `/about` | About the clinic |
| `/contact` | Contact — both branches, forms, map |
| `/locations` | Compare Pala & Thrissur clinics |
| `/thrissur` | Thrissur branch landing (photos, map, booking) |
| `/book-appointment` | Appointment form |
| `/dentists` | Doctors listing |
| `/dentists/[slug]` | Individual doctor profile |
| `/treatments` | All treatments |
| `/treatments/[slug]` | Treatment detail |
| `/orthodontics` | Orthodontics hub |
| `/orthodontics/braces` | Braces |
| `/orthodontics/clear-aligners` | Clear aligners |
| `/orthodontics/lingual-braces` | Lingual braces |
| `/technology` | Clinic technology & systems |
| `/dental-guides` | Patient education articles (CMS) |
| `/dental-guides/[slug]` | Single guide |
| `/patient-stories` | Testimonials (CMS) |
| `/patient-guide` | Patient guide hub |
| `/patient-guide/[slug]` | Static SEO guide pages (3 slugs) |
| `/areas-served` | Regional service overview |
| `/areas-served/kottayam` | Kottayam District patients |
| `/areas-served/thrissur` | Thrissur patients (travel to Pala / branch info) |
| `/local/[slug]` | Local SEO landings: `pala`, `kottayam`, `thrissur` |
| `/privacy-policy` | Privacy policy |
| `/site-map` | HTML sitemap for users |
| `/sitemap.xml` | XML sitemap (generated) |

### Admin (noindex)

| Path | Purpose |
|------|---------|
| `/jeotomadmin/login` | CMS login |
| `/jeotomadmin/dashboard` | Dashboard |
| `/jeotomadmin/doctors` | Manage doctors |
| `/jeotomadmin/treatments` | Manage treatments |
| `/jeotomadmin/guides` | Dental guides |
| `/jeotomadmin/patient-stories` | Patient stories |
| `/jeotomadmin/faqs` | FAQs |
| `/jeotomadmin/media` | Media library |
| `/jeotomadmin/homepage` | Homepage sections |
| `/jeotomadmin/settings` | Site settings |

### Dev / internal (avoid linking in production)

- `/test`, `/test-env` — development helpers  

---

## 9. SEO & local landing pages

### Homepage regional links (example CTAs)

- `/areas-served/kottayam` — “Patients from Kottayam”  
- `/local/kottayam` — “Best dental clinic — Kottayam”  
- `/local/thrissur` — “Best dental clinic — Thrissur”  

### `/local/pala`

- **H1:** Best dental clinic in Pala, Kottayam District  
- **Cities:** Pala, Palai, Kottayam District, Meenachil  
- **Parking:** Ample on-site — Kattakkayam Road, near Federal Bank  
- **Highlights:** Main MDS centre; documented interiors & digital X-ray; orthodontics hub  

### `/local/kottayam`

- **H1:** Best dental clinic serving Kottayam District  
- **Travel (approx.):** Kottayam town ~35 km; Changanassery ~18 km; Ettumanoor ~25 km; Erattupetta ~12 km  
- **Note:** Physical clinic is in **Pala**, not Kottayam town  

### `/local/thrissur`

- **H1:** Best dental clinic in Thrissur  
- **Branch:** Punkunnam — Ephphatha Medical Complex  
- **Highlights:** Modern reception/treatment rooms; landmark St. Joseph's Church; care without travelling to Pala  

Each local page includes **4 FAQs** — full text in `src/lib/seo/local-landing.ts`.

---

## 10. Patient guide hub

Static pages at `/patient-guide/{slug}`:

| Slug | Title (H1 theme) |
|------|------------------|
| `clinic-locations` | Finding our dental clinics in Kerala |
| `braces-and-aligners` | Braces, aligners & orthodontics |
| `implants-and-smile-design` | Implants, cosmetic dentistry & smile design |

---

## 11. Dental guides (articles)

**CMS-backed** at `/dental-guides/[slug]`. Seed slugs in `migration-data.ts`:

| Slug | Title |
|------|--------|
| `braces-what-to-expect` | What to expect from braces treatment |
| `clear-aligners-vs-braces` | Clear aligners vs braces: which is right for you? |
| `lingual-braces-guide` | Lingual braces (hidden braces): a patient guide |
| `dental-implants-guide` | Dental implants: your questions answered |
| `root-canal-myths` | Root canal treatment: separating fact from fiction |
| `childrens-dental-health` | Children's dental health: a parent's guide |
| `smile-design-guide` | Smile design: what is it and who is it for? |
| `oral-hygiene-tips` | Oral hygiene: the basics that make a real difference |

**Patient stories (seed titles):** Riya M. (Orthodontics); Arun K. (Implants); Shalini J. (Lingual); Thomas V. (Root canal); Meera A. (Aligners); George P. (General dentistry) — managed in CMS.

---

## 12. Navigation & UX

### Desktop header links

About · Our Doctors · Locations (dropdown) · Treatments (dropdown) · Dental Guides · Patient Stories · Contact  

**Locations dropdown:** Pala main · Thrissur branch · Both clinics  

**Treatments dropdown:** General Dentistry, Orthodontics, Braces, Lingual Braces, Clear Aligners, Dental Implants, Cosmetic Dentistry, Smile Design, Root Canal, Paediatric Dentistry  

**Header actions:** Branch toggle (Pala / Thrissur) · Book appointment  

### Mobile

- Centered title “Smile Architects”  
- Left: logo (`/images/logo.png`) in glass pill  
- Right: hamburger → full-screen menu  
- Sticky mobile bar: Call · WhatsApp · Book  

### Footer

Logo, tagline, contact block, treatment links, orthodontics links, legal/privacy.

---

## 13. Brand, design & assets

### Color palette (`globals.css`)

| Token | Hex | Use |
|--------|-----|-----|
| Dark Moss | `#254E06` | Primary brand, headings, primary buttons |
| Olive | `#7E8407` | Secondary text, borders |
| Jonquil | `#EAC800` | Accent, highlights |
| Harvest Gold | `#DD9C00` | Secondary CTA hover |
| Vanilla | `#F5EAB9` | Warm sections |
| Honeydew | `#ECF5E2` | Light UI background |
| Tea Green | `#D7E3A4` | Soft cards |
| Moss | `#A7A865` | Muted UI |
| Café Noir | `#563D23` | Warm body accent |

### Typography (Google Fonts via `layout.tsx`)

| Role | Font | CSS variable |
|------|------|----------------|
| Serif / editorial | Playfair Display | `--font-serif` |
| Sans / body | Inter | `--font-sans` |
| Mono (legacy alias) | Space Grotesk | `--font-mono` |
| Condensed | Barlow Condensed | `--font-condensed` |
| Utility / buttons | IBM Plex Mono | `--font-utility` |

### Public media inventory

```
/images/logo.png
/images/MOBILE LOGO.png
/images/dr-jeo-tom-charls.jpg
/images/general dentistry.png
/images/hero video.mp4
/images/our services.mp4
/thrissur/* (gallery + hero — see §2)
/robots.txt
```

---

## 14. Technology stack

| Layer | Technology |
|--------|------------|
| Framework | Next.js **16.3.0** (App Router) |
| UI | React **19** |
| Language | TypeScript **5** |
| Styling | Tailwind CSS **v4** + `globals.css` design system |
| Motion | Framer Motion / Motion, Lenis smooth scroll |
| Icons | Tabler Icons React |
| Database | Supabase (PostgreSQL) |
| Auth | Custom admin cookie auth + Supabase |
| Storage | Supabase bucket `site-media` |
| Hosting | Vercel |
| PDF brochure | Playwright + HTML (`brochure/build-html.ts`) |

### NPM scripts

```bash
npm run dev              # local dev
npm run build            # production build
npm run start            # production server
npm run lint             # ESLint
npm run migrate:cms      # seed CMS from migration-data
npm run brochure:generate
npm run brochure:preview
```

---

## 15. CMS (admin panel)

| Item | Value |
|------|--------|
| **Login URL** | `/jeotomadmin/login` |
| **Email** | smile@revolq.com |
| **Password** | Smilejeotom@revolq2026 |

**Manages:** doctors, treatments, dental guides, patient stories, FAQs, media, homepage blocks, site settings.

**Security:** Treat credentials as sensitive; rotate for production. Admin routes use `noindex`.

---

## 16. Database & environment

### Supabase tables

`doctors`, `treatments`, `dental_guides`, `patient_stories`, `faqs`, `media`, `homepage_content`, `site_settings`

### Environment variables

See **`VERCEL_ENV_VARS.md`** for:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server-only secret)

After changing env vars on Vercel: **redeploy**. Optional one-time seed: visit `/api/migrate` or run `npm run migrate:cms`.

---

## 17. Deployment & repository

| Item | Value |
|------|--------|
| **Primary git remote (deploy)** | https://github.com/revolqnexus-stack/smilearchitects.git |
| **Legacy remote name** | `origin` → smile-architects-pala (may still exist locally) |
| **Production domain (config)** | https://smilearchitectspala.com |
| **Vercel project (docs reference)** | smile-architects-pala |

---

## 18. URL redirects

Configured in `next.config.ts` (301):

| From | To |
|------|-----|
| `/best-dental-clinic-pala` | `/local/pala` |
| `/best-dental-clinic-kottayam` | `/local/kottayam` |
| `/best-dental-clinic-thrissur` | `/local/thrissur` |
| `/dental-clinic-pala` | `/local/pala` |
| `/dental-clinic-kottayam` | `/local/kottayam` |
| `/dental-clinic-thrissur` | `/local/thrissur` |
| `/orthodontist-pala` | `/orthodontics` |
| `/orthodontist-kottayam` | `/local/kottayam` |
| `/dentist-thrissur` | `/thrissur` |
| `/dental-implants-kerala` | `/patient-guide/implants-and-smile-design` |
| `/braces-pala` | `/orthodontics/braces` |
| `/sitemap` | `/site-map` |
| `/dentists/dr-mohamed-riyas` | `/dentists` |

---

## 19. Print brochure

Reproducible A4 PDF from site data (no invented copy):

```bash
npm run brochure:generate   # → output/client-brochure.pdf
npm run brochure:preview    # → output/brochure-previews/
```

- **Editable source:** `brochure/build-html.ts`  
- **Config:** `site-config.ts`, `branches.ts`, images under `public/`  

---

## 20. Items to verify / known gaps

- [ ] Google Maps **Place ID** empty in `site-config.ts`  
- [ ] Social URLs (Facebook, Instagram, YouTube) empty  
- [ ] Twitter handle empty  
- [ ] Justdial URL is generic placeholder  
- [ ] Team photos for Dr. Jom and visiting consultants — paths set but files missing from `public/images/team/`  
- [ ] Google rating/review count intentionally `null` until synced with live Google data  
- [ ] CMS content may differ from `site-config` after edits in admin — **prefer live CMS** for guides/stories; **prefer `site-config`** for core clinic constants unless settings migrated  

---

*For a shorter legacy summary, see `WEBSITE_INFO.md`. This document is the comprehensive reference.*
