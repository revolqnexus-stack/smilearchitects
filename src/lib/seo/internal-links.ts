/** Typed segments for in-sentence internal links (SEO + readable prose). */
export type LinkSegment =
  | { type: "text"; value: string }
  | { type: "link"; href: string; label: string };

export function segmentsToPlainText(segments: LinkSegment[]): string {
  return segments.map((s) => (s.type === "text" ? s.value : s.label)).join("");
}

/** Contextual intro copy with embedded internal links — local landings */
export const LOCAL_INTRO_SEGMENTS: Record<
  "pala" | "kottayam" | "thrissur",
  LinkSegment[]
> = {
  pala: [
    {
      type: "text",
      value:
        "Smile Architects is a multispeciality dental clinic and advanced orthodontic centre in Pala (Palai), Kottayam District — led by ",
    },
    { type: "link", href: "/dentists/dr-jeo-tom-charls", label: "Dr. Jeo Tom Charls, MDS Orthodontics" },
    {
      type: "text",
      value:
        ". Patients choose us for specialist ",
    },
    { type: "link", href: "/orthodontics", label: "braces and aligners" },
    { type: "text", value: ", " },
    { type: "link", href: "/treatments/dental-implants", label: "dental implants" },
    { type: "text", value: ", " },
    { type: "link", href: "/treatments/root-canal-treatment", label: "root canal treatment" },
    { type: "text", value: ", and " },
    { type: "link", href: "/treatments/smile-design", label: "smile design" },
    {
      type: "text",
      value: ". We also welcome patients from across ",
    },
    { type: "link", href: "/local/kottayam", label: "Kottayam District" },
    { type: "text", value: " and operate a " },
    { type: "link", href: "/thrissur", label: "Thrissur branch in Punkunnam" },
    { type: "text", value: "." },
  ],
  kottayam: [
    {
      type: "text",
      value:
        "Patients across Kottayam District — including Kottayam town, Changanassery, and Ettumanoor — visit our ",
    },
    { type: "link", href: "/local/pala", label: "Pala dental clinic" },
    {
      type: "text",
      value: " for MDS-led care. Treatments include ",
    },
    { type: "link", href: "/orthodontics/lingual-braces", label: "lingual braces" },
    { type: "text", value: ", " },
    { type: "link", href: "/orthodontics/clear-aligners", label: "clear aligners" },
    { type: "text", value: ", " },
    { type: "link", href: "/treatments/dental-implants", label: "implants" },
    {
      type: "text",
      value: ", and full-family ",
    },
    { type: "link", href: "/treatments/general-dentistry", label: "general dentistry" },
    { type: "text", value: ". See also our " },
    { type: "link", href: "/areas-served/kottayam", label: "areas served — Kottayam" },
    { type: "text", value: " page and " },
    { type: "link", href: "/local/thrissur", label: "Thrissur clinic" },
    { type: "text", value: " for patients in Thrissur city." },
  ],
  thrissur: [
    {
      type: "text",
      value: "Smile Architects Thrissur brings the same specialist-led care as our ",
    },
    { type: "link", href: "/local/pala", label: "Pala, Kottayam centre" },
    {
      type: "text",
      value: " — at Punkunnam, Thrissur. Explore ",
    },
    { type: "link", href: "/thrissur", label: "branch photos, map & directions" },
    { type: "text", value: ", or book " },
    { type: "link", href: "/orthodontics", label: "orthodontics" },
    { type: "text", value: ", " },
    { type: "link", href: "/treatments/dental-implants", label: "implants" },
    { type: "text", value: ", and " },
    { type: "link", href: "/treatments/cosmetic-dentistry", label: "cosmetic dentistry" },
    { type: "text", value: " without travelling to Pala. Compare both clinics on " },
    { type: "link", href: "/locations", label: "our locations page" },
    { type: "text", value: "." },
  ],
};

export type TopicClusterId = "locations" | "orthodontics" | "restorative" | "guides" | "general";

export type TopicClusterLink = { href: string; label: string; description?: string };

export const TOPIC_CLUSTERS: Record<
  TopicClusterId,
  { title: string; links: TopicClusterLink[] }
> = {
  locations: {
    title: "Clinics & areas we serve",
    links: [
      { href: "/local/pala", label: "Dental clinic in Pala", description: "Main Kottayam District centre" },
      { href: "/local/kottayam", label: "Dentist for Kottayam District", description: "Serving Kottayam town & nearby" },
      { href: "/local/thrissur", label: "Dental clinic in Thrissur", description: "Local landing — Punkunnam" },
      { href: "/thrissur", label: "Thrissur branch (photos & map)", description: "Branch page with gallery" },
      { href: "/locations", label: "Both clinic addresses", description: "Pala & Thrissur side by side" },
      { href: "/areas-served", label: "Areas served overview", description: "Regional coverage" },
      { href: "/areas-served/kottayam", label: "Areas served — Kottayam", description: "District towns & travel" },
      { href: "/areas-served/thrissur", label: "Areas served — Thrissur", description: "Thrissur city & nearby" },
      { href: "/contact", label: "Contact both clinics", description: "Phone, email, maps" },
    ],
  },
  orthodontics: {
    title: "Orthodontics & braces",
    links: [
      { href: "/orthodontics", label: "Orthodontics overview" },
      { href: "/orthodontics/braces", label: "Braces treatment" },
      { href: "/orthodontics/clear-aligners", label: "Clear aligners" },
      { href: "/orthodontics/lingual-braces", label: "Lingual (hidden) braces" },
      { href: "/dental-guides/clear-aligners-vs-braces", label: "Aligners vs braces guide" },
      { href: "/dental-guides/lingual-braces-guide", label: "Lingual braces guide" },
      { href: "/dentists/dr-jeo-tom-charls", label: "Dr. Jeo Tom Charls — orthodontist" },
      { href: "/patient-guide/braces-and-aligners", label: "Patient guide: braces & aligners" },
    ],
  },
  restorative: {
    title: "Implants, root canal & smile design",
    links: [
      { href: "/treatments/dental-implants", label: "Dental implants" },
      { href: "/treatments/root-canal-treatment", label: "Root canal treatment" },
      { href: "/treatments/smile-design", label: "Smile design" },
      { href: "/treatments/cosmetic-dentistry", label: "Cosmetic dentistry" },
      { href: "/dental-guides/dental-implants-guide", label: "Dental implants guide" },
      { href: "/dental-guides/root-canal-myths", label: "Root canal myths" },
      { href: "/patient-guide/implants-and-smile-design", label: "Patient guide: implants & aesthetics" },
    ],
  },
  guides: {
    title: "Patient guides & stories",
    links: [
      { href: "/dental-guides", label: "All dental guides" },
      { href: "/patient-stories", label: "Patient stories" },
      { href: "/patient-guide", label: "Patient guide hub" },
      { href: "/technology", label: "Clinic technology" },
      { href: "/book-appointment", label: "Book appointment" },
    ],
  },
  general: {
    title: "About the practice",
    links: [
      { href: "/about", label: "About Smile Architects" },
      { href: "/dentists", label: "Our doctors" },
      { href: "/treatments", label: "All treatments" },
      { href: "/treatments/general-dentistry", label: "General dentistry" },
      { href: "/treatments/pediatric-dentistry", label: "Paediatric dentistry" },
    ],
  },
};

/** Which clusters to show on a page (keeps sections relevant, still dense for crawlers). */
export function clustersForPath(pathname: string): TopicClusterId[] {
  if (pathname.startsWith("/local/") || pathname === "/locations" || pathname === "/thrissur") {
    return ["locations", "orthodontics", "restorative", "guides"];
  }
  if (pathname.startsWith("/orthodontics") || pathname.includes("braces") || pathname.includes("aligner")) {
    return ["orthodontics", "locations", "guides", "general"];
  }
  if (pathname.startsWith("/treatments/")) {
    return ["restorative", "orthodontics", "locations", "guides"];
  }
  if (pathname.startsWith("/patient-guide")) {
    return ["locations", "orthodontics", "restorative", "guides", "general"];
  }
  if (pathname === "/about" || pathname === "/contact") {
    return ["locations", "general", "orthodontics", "guides"];
  }
  return ["locations", "orthodontics", "restorative", "guides", "general"];
}
