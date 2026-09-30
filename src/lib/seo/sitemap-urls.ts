import { CLINIC, DOCTORS, TREATMENTS } from "@/lib/site-config";
import { LOCAL_LANDING_SLUGS } from "@/lib/seo/local-landing";
import { PATIENT_GUIDE_SLUGS } from "@/lib/seo/patient-guide-pages";
import type { MetadataRoute } from "next";

/** Guide slugs kept in sync with dental-guides/[slug]/page.tsx */
const GUIDE_SLUGS = [
  "braces-what-to-expect",
  "clear-aligners-vs-braces",
  "lingual-braces-guide",
  "dental-implants-guide",
  "root-canal-myths",
  "childrens-dental-health",
  "smile-design-guide",
  "oral-hygiene-tips",
];

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/dentists", priority: 0.9, changeFrequency: "weekly" },
  { path: "/treatments", priority: 0.9, changeFrequency: "weekly" },
  { path: "/orthodontics", priority: 0.95, changeFrequency: "weekly" },
  { path: "/orthodontics/braces", priority: 0.9, changeFrequency: "monthly" },
  { path: "/orthodontics/clear-aligners", priority: 0.9, changeFrequency: "monthly" },
  { path: "/orthodontics/lingual-braces", priority: 0.9, changeFrequency: "monthly" },
  { path: "/dental-guides", priority: 0.8, changeFrequency: "weekly" },
  { path: "/patient-stories", priority: 0.7, changeFrequency: "monthly" },
  { path: "/technology", priority: 0.7, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.85, changeFrequency: "yearly" },
  { path: "/locations", priority: 0.92, changeFrequency: "monthly" },
  { path: "/patient-guide", priority: 0.78, changeFrequency: "monthly" },
  { path: "/site-map", priority: 0.55, changeFrequency: "monthly" },
  { path: "/book-appointment", priority: 0.95, changeFrequency: "yearly" },
  { path: "/areas-served", priority: 0.75, changeFrequency: "monthly" },
  { path: "/areas-served/kottayam", priority: 0.8, changeFrequency: "monthly" },
  { path: "/areas-served/thrissur", priority: 0.75, changeFrequency: "monthly" },
  { path: "/thrissur", priority: 0.9, changeFrequency: "weekly" },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
];

export function buildSitemapEntries(): MetadataRoute.Sitemap {
  const baseUrl = CLINIC.seo.siteUrl;
  const now = new Date();

  const entries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  for (const slug of LOCAL_LANDING_SLUGS) {
    entries.push({
      url: `${baseUrl}/local/${slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: slug === "pala" ? 0.98 : 0.92,
    });
  }

  for (const t of TREATMENTS) {
    entries.push({
      url: `${baseUrl}/treatments/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: t.featured ? 0.85 : 0.7,
    });
  }

  for (const d of DOCTORS) {
    entries.push({
      url: `${baseUrl}/dentists/${d.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const slug of GUIDE_SLUGS) {
    entries.push({
      url: `${baseUrl}/dental-guides/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
    });
  }

  for (const slug of PATIENT_GUIDE_SLUGS) {
    entries.push({
      url: `${baseUrl}/patient-guide/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.72,
    });
  }

  return entries;
}
