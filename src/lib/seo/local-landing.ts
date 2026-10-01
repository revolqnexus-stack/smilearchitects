import type { BranchId } from "@/lib/branches";

export type LocalLandingSlug = "pala" | "kottayam" | "thrissur";

export interface LocalLandingConfig {
  slug: LocalLandingSlug;
  canonical: string;
  /** Page title segment (before site name) */
  title: string;
  description: string;
  h1: string;
  intro: string;
  branchId: BranchId;
  /** Primary city targets for copy & keywords */
  cities: string[];
  nearbyLinks?: { label: string; href: string }[];
  faqs: { question: string; answer: string }[];
  parking?: string;
  travelFrom?: { from: string; distance: string; time: string; route?: string }[];
  branchHighlights?: string[];
}

export const LOCAL_LANDING_PAGES: Record<LocalLandingSlug, LocalLandingConfig> = {
  pala: {
    slug: "pala",
    canonical: "/local/pala",
    title: "Best Dental Clinic in Pala, Kottayam District",
    description:
      "Looking for the best dental clinic in Pala or Palai, Kottayam? Smile Architects — MDS orthodontist, implants, braces, lingual braces & smile design. Kattakkayam Road, near Federal Bank. Call +91 9446 999 333.",
    h1: "Best dental clinic in Pala, Kottayam District",
    intro:
      "Smile Architects is a multispeciality dental clinic and advanced orthodontic centre in Pala (Palai), Kottayam District — led by Dr. Jeo Tom Charls, MDS Orthodontics. Patients choose us for specialist braces and aligners, dental implants, root canal treatment, cosmetic dentistry, and full-family care under one roof.",
    branchId: "pala",
    cities: ["Pala", "Palai", "Kottayam District", "Meenachil"],
    parking: "Ample car parking on-site — Kattakkayam Road, near Federal Bank, Pala Town.",
    branchHighlights: [
      "Main multispeciality centre with full MDS team",
      "Video-documented clinic interiors & digital X-ray",
      "Orthodontics hub — lingual, aligners & Damon systems",
    ],
    nearbyLinks: [
      { label: "Dental clinic in Kottayam District", href: "/local/kottayam" },
      { label: "Thrissur branch (photos & map)", href: "/thrissur" },
      { label: "Orthodontist in Pala", href: "/orthodontics" },
      { label: "Patient guide — clinic locations", href: "/patient-guide/clinic-locations" },
    ],
    faqs: [
      {
        question: "Which is the best dental clinic in Pala, Kottayam?",
        answer:
          "Smile Architects in Pala is a multispeciality clinic with MDS specialists including an orthodontist and periodontist. The clinic offers braces, clear aligners, lingual braces, implants, root canal treatment, and smile design at Kattakkayam Road, near Federal Bank, Pala Town.",
      },
      {
        question: "Is Smile Architects good for braces in Pala?",
        answer:
          "Yes. Dr. Jeo Tom Charls, MDS Orthodontics, leads orthodontic care including metal and ceramic braces, Damon systems, lingual (hidden) braces, and clear aligners at Smile Architects, Pala.",
      },
      {
        question: "How do I book a dentist appointment in Pala?",
        answer:
          "Call +91 9446 999 333, use WhatsApp, or book online at smilearchitectspala.com. The clinic is open Monday to Saturday, 9:30 AM to 8:00 PM.",
      },
      {
        question: "Where exactly is Smile Architects in Pala?",
        answer:
          "Kattakkayam Road, Pala, Kottayam, Kerala – 686575, near Federal Bank, Pala Town. Ample parking is available.",
      },
    ],
  },
  kottayam: {
    slug: "kottayam",
    canonical: "/local/kottayam",
    title: "Best Dental Clinic in Kottayam District | Pala Centre",
    description:
      "Best dental clinic serving Kottayam town & Kottayam District — Smile Architects in Pala. MDS orthodontist, implants, cosmetic dentistry. Patients from Kottayam, Changanassery & Ettumanoor. +91 9446 999 333.",
    h1: "Best dental clinic serving Kottayam District",
    intro:
      "Patients across Kottayam District — including Kottayam town, Changanassery, Ettumanoor, and surrounding areas — visit Smile Architects in Pala for MDS-led dental and orthodontic treatment. Our Pala centre is the hub for specialist care; we also operate a Thrissur branch for patients in Thrissur city.",
    branchId: "pala",
    cities: ["Kottayam", "Kottayam District", "Kottayam town", "Changanassery", "Ettumanoor"],
    parking: "Visit our Pala centre — parking available at the Kattakkayam Road clinic.",
    travelFrom: [
      { from: "Kottayam town", distance: "~35 km", time: "45–60 min", route: "SH-15 / MC Road" },
      { from: "Changanassery", distance: "~18 km", time: "30–40 min", route: "Pala–Changanassery Road" },
      { from: "Ettumanoor", distance: "~25 km", time: "35–45 min", route: "NH183" },
      { from: "Erattupetta", distance: "~12 km", time: "20–30 min", route: "Local road via Meenachil" },
    ],
    branchHighlights: [
      "Same Pala clinic — specialist care for district-wide patients",
      "Appointment scheduling to reduce wait when travelling",
    ],
    nearbyLinks: [
      { label: "Clinic in Pala", href: "/local/pala" },
      { label: "Thrissur branch page", href: "/thrissur" },
      { label: "Areas served — Kottayam", href: "/areas-served/kottayam" },
      { label: "Dental implants", href: "/treatments/dental-implants" },
      { label: "Patient guide — braces & aligners", href: "/patient-guide/braces-and-aligners" },
    ],
    faqs: [
      {
        question: "What is the best dental clinic in Kottayam District?",
        answer:
          "Smile Architects in Pala is widely chosen by patients from across Kottayam District for multispeciality dentistry and MDS orthodontic treatment. The physical clinic is in Pala on Kattakkayam Road — not in Kottayam town — with convenient access via MC Road and NH183.",
      },
      {
        question: "Is there a Smile Architects branch in Kottayam town?",
        answer:
          "The main Smile Architects centre is in Pala, Kottayam District. We serve Kottayam town patients at this location. We also have a separate branch in Thrissur (Punkunnam) for patients in Thrissur.",
      },
      {
        question: "How far is Smile Architects from Kottayam town?",
        answer:
          "Pala is approximately 35 km from Kottayam town (around 45–60 minutes by road, depending on traffic). Many patients travel for lingual braces, aligners, implants, and smile design.",
      },
      {
        question: "Can I get an orthodontist near Kottayam?",
        answer:
          "Dr. Jeo Tom Charls, MDS Orthodontics, practices at Smile Architects, Pala — serving Kottayam District with braces, clear aligners, and lingual orthodontic treatment.",
      },
    ],
  },
  thrissur: {
    slug: "thrissur",
    canonical: "/local/thrissur",
    title: "Best Dental Clinic in Thrissur | Punkunnam Branch",
    description:
      "Best dental clinic in Thrissur — Smile Architects, 2nd Floor, Ephphatha Medical Complex, Opp. St. Joseph's Church, Punkunnam, Thrissur 680002. Orthodontics, implants & smile design. +91 9446 999 333.",
    h1: "Best dental clinic in Thrissur",
    intro:
      "Smile Architects Thrissur brings the same specialist-led dental and orthodontic care as our Pala centre — now at Punkunnam, Thrissur. Multispeciality dentistry, braces, aligners, implants, and smile design in a modern clinic setting.",
    branchId: "thrissur",
    cities: ["Thrissur", "Punkunnam", "Thrissur city"],
    parking: "Ephphatha Medical Complex — ask reception for visitor parking guidance.",
    branchHighlights: [
      "2nd Floor clinic with modern reception & treatment rooms",
      "Opp. St. Joseph's Church, Punkunnam — easy landmark",
      "Orthodontics & multispeciality care without travelling to Pala",
    ],
    nearbyLinks: [
      { label: "Thrissur branch details & photos", href: "/thrissur" },
      { label: "Pala, Kottayam centre", href: "/local/pala" },
      { label: "Clear aligners", href: "/orthodontics/clear-aligners" },
      { label: "Patient guide — clinic locations", href: "/patient-guide/clinic-locations" },
      { label: "Full site map", href: "/site-map" },
    ],
    faqs: [
      {
        question: "Which is the best dental clinic in Thrissur?",
        answer:
          "Smile Architects Thrissur at Ephphatha Medical Complex, Punkunnam (Opp. St. Joseph's Church) offers multispeciality dental care and advanced orthodontics. Book via +91 9446 999 333 or online.",
      },
      {
        question: "Where is Smile Architects in Thrissur?",
        answer:
          "2nd Floor, Ephphatha Medical Complex, Opp. St. Joseph's Church, Punkunnam, Thrissur, Kerala – 680002.",
      },
      {
        question: "Does Smile Architects in Thrissur offer braces and aligners?",
        answer:
          "Yes. The Thrissur branch provides orthodontic treatment including braces and clear aligners, alongside general dentistry, implants, and cosmetic procedures.",
      },
      {
        question: "Is Smile Architects also in Pala, Kottayam?",
        answer:
          "Yes. Our original multispeciality centre is in Pala, Kottayam District (Kattakkayam Road, near Federal Bank). Both locations share the same clinical standards and specialist team network.",
      },
    ],
  },
};

export const LOCAL_LANDING_SLUGS = Object.keys(LOCAL_LANDING_PAGES) as LocalLandingSlug[];

export function getLocalLanding(slug: string): LocalLandingConfig | null {
  if (slug in LOCAL_LANDING_PAGES) {
    return LOCAL_LANDING_PAGES[slug as LocalLandingSlug];
  }
  return null;
}
