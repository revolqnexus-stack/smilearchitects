import type { LinkSegment } from "@/lib/seo/internal-links";

export type PatientGuideSlug =
  | "clinic-locations"
  | "braces-and-aligners"
  | "implants-and-smile-design";

export interface PatientGuidePage {
  slug: PatientGuideSlug;
  title: string;
  description: string;
  h1: string;
  /** Prose blocks with inline internal links */
  paragraphs: LinkSegment[][];
}

export const PATIENT_GUIDE_PAGES: Record<PatientGuideSlug, PatientGuidePage> = {
  "clinic-locations": {
    slug: "clinic-locations",
    title: "Dental clinic locations — Pala, Kottayam & Thrissur",
    description:
      "Where to find Smile Architects in Kerala: main centre in Pala, Kottayam District and Thrissur branch in Punkunnam. Addresses, directions, and local landing pages.",
    h1: "Finding our dental clinics in Kerala",
    paragraphs: [
      [
        { type: "text", value: "Smile Architects operates two clinics. The " },
        { type: "link", href: "/local/pala", label: "main multispeciality centre in Pala" },
        { type: "text", value: " (Kattakkayam Road, near Federal Bank) serves " },
        { type: "link", href: "/local/kottayam", label: "Kottayam District" },
        { type: "text", value: ", Meenachil, and towns such as Changanassery and Ettumanoor. See " },
        { type: "link", href: "/areas-served/kottayam", label: "areas served — Kottayam" },
        { type: "text", value: " for travel notes." },
      ],
      [
        { type: "text", value: "Our " },
        { type: "link", href: "/thrissur", label: "Thrissur branch" },
        { type: "text", value: " is on the 2nd Floor, Ephphatha Medical Complex, Opp. St. Joseph's Church, " },
        { type: "link", href: "/local/thrissur", label: "Punkunnam, Thrissur" },
        { type: "text", value: ". The branch page includes photos, map, and booking. Compare both on " },
        { type: "link", href: "/locations", label: "/locations" },
        { type: "text", value: " or " },
        { type: "link", href: "/contact", label: "contact us" },
        { type: "text", value: " for phone and WhatsApp." },
      ],
    ],
  },
  "braces-and-aligners": {
    slug: "braces-and-aligners",
    title: "Braces & clear aligners in Pala and Thrissur",
    description:
      "Orthodontic care at Smile Architects — metal and ceramic braces, Damon systems, lingual braces, and clear aligners with Dr. Jeo Tom Charls, MDS. Pala & Thrissur.",
    h1: "Braces, aligners & orthodontics",
    paragraphs: [
      [
        { type: "text", value: "Orthodontic treatment is led by " },
        { type: "link", href: "/dentists/dr-jeo-tom-charls", label: "Dr. Jeo Tom Charls, MDS Orthodontics" },
        { type: "text", value: ". Start with our " },
        { type: "link", href: "/orthodontics", label: "orthodontics overview" },
        { type: "text", value: ", then explore " },
        { type: "link", href: "/orthodontics/braces", label: "braces" },
        { type: "text", value: ", " },
        { type: "link", href: "/orthodontics/clear-aligners", label: "clear aligners" },
        { type: "text", value: ", and " },
        { type: "link", href: "/orthodontics/lingual-braces", label: "lingual braces" },
        { type: "text", value: " for hidden treatment." },
      ],
      [
        { type: "text", value: "Read " },
        { type: "link", href: "/dental-guides/clear-aligners-vs-braces", label: "aligners vs braces" },
        { type: "text", value: " and our " },
        { type: "link", href: "/dental-guides/lingual-braces-guide", label: "lingual braces guide" },
        { type: "text", value: ". Appointments are available in " },
        { type: "link", href: "/local/pala", label: "Pala" },
        { type: "text", value: " and at the " },
        { type: "link", href: "/thrissur", label: "Thrissur clinic" },
        { type: "text", value: ". " },
        { type: "link", href: "/book-appointment", label: "Book online" },
        { type: "text", value: " or call +91 9446 999 333." },
      ],
    ],
  },
  "implants-and-smile-design": {
    slug: "implants-and-smile-design",
    title: "Dental implants & smile design — Kerala",
    description:
      "Dental implants, cosmetic dentistry, and smile design at Smile Architects. Specialist MDS team in Pala and Thrissur. Guides, costs, and booking.",
    h1: "Implants, cosmetic dentistry & smile design",
    paragraphs: [
      [
        { type: "text", value: "Restore missing teeth with " },
        { type: "link", href: "/treatments/dental-implants", label: "dental implants" },
        { type: "text", value: " or improve aesthetics through " },
        { type: "link", href: "/treatments/smile-design", label: "smile design" },
        { type: "text", value: " and " },
        { type: "link", href: "/treatments/cosmetic-dentistry", label: "cosmetic dentistry" },
        { type: "text", value: ". Our " },
        { type: "link", href: "/dental-guides/dental-implants-guide", label: "implants patient guide" },
        { type: "text", value: " explains steps, healing, and what to expect." },
      ],
      [
        { type: "text", value: "For tooth pain or infection, see " },
        { type: "link", href: "/treatments/root-canal-treatment", label: "root canal treatment" },
        { type: "text", value: " and the " },
        { type: "link", href: "/dental-guides/root-canal-myths", label: "root canal myths guide" },
        { type: "text", value: ". Care is available at our " },
        { type: "link", href: "/local/pala", label: "Pala centre" },
        { type: "text", value: " and " },
        { type: "link", href: "/local/thrissur", label: "Thrissur branch" },
        { type: "text", value: ". View all " },
        { type: "link", href: "/treatments", label: "dental treatments" },
        { type: "text", value: " or " },
        { type: "link", href: "/patient-stories", label: "patient stories" },
        { type: "text", value: "." },
      ],
    ],
  },
};

export const PATIENT_GUIDE_SLUGS = Object.keys(PATIENT_GUIDE_PAGES) as PatientGuideSlug[];

export function getPatientGuide(slug: string): PatientGuidePage | null {
  if (slug in PATIENT_GUIDE_PAGES) {
    return PATIENT_GUIDE_PAGES[slug as PatientGuideSlug];
  }
  return null;
}
