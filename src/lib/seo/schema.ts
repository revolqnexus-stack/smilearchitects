import { CLINIC, DOCTORS, TREATMENTS } from "@/lib/site-config";
import { BRANCH_PALA, BRANCH_THRISSUR, type ClinicBranch } from "@/lib/branches";

const SITE = CLINIC.seo.siteUrl;

function openingHoursSpec() {
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:30",
      closes: "20:00",
    },
  ];
}

function branchToDentistSchema(branch: ClinicBranch, path: string) {
  const id = `${SITE}${path}#dentist`;
  return {
    "@type": "Dentist",
    "@id": id,
    name: `${CLINIC.name} — ${branch.label}`,
    description: `${CLINIC.tagline}. ${branch.address.full}`,
    url: `${SITE}${path}`,
    telephone: branch.contact.phone,
    email: branch.contact.email,
    image: branch.media?.hero
      ? `${SITE}${branch.media.hero}`
      : `${SITE}${CLINIC.seo.ogImage}`,
    priceRange: "₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI",
    medicalSpecialty: ["Dentistry", "Orthodontics", "Dental Implants"],
    openingHoursSpecification: openingHoursSpec(),
    hasMap: branch.maps.shareUrl ?? branch.maps.directionsUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: branch.address.street,
      addressLocality: branch.address.city,
      addressRegion: branch.address.state,
      postalCode: branch.address.pincode || undefined,
      addressCountry: "IN",
    },
    geo: branch.id === "pala"
      ? {
          "@type": "GeoCoordinates",
          latitude: 9.714,
          longitude: 76.683,
        }
      : {
          "@type": "GeoCoordinates",
          latitude: 10.527,
          longitude: 76.214,
        },
    areaServed: branch.id === "pala"
      ? [
          { "@type": "City", name: "Pala" },
          { "@type": "City", name: "Palai" },
          { "@type": "AdministrativeArea", name: "Kottayam District" },
        ]
      : [
          { "@type": "City", name: "Thrissur" },
          { "@type": "Place", name: "Punkunnam" },
        ],
    parentOrganization: { "@id": `${SITE}/#organization` },
  };
}

/** Site-wide JSON-LD @graph: Organization, WebSite, both clinic locations */
export function buildSiteSchemaGraph() {
  const organization = {
    "@type": "Organization",
    "@id": `${SITE}/#organization`,
    name: CLINIC.name,
    url: SITE,
    logo: `${SITE}${CLINIC.seo.ogImage}`,
    email: CLINIC.contact.email,
    telephone: CLINIC.contact.phone,
    description: CLINIC.seo.defaultDescription,
    ...(CLINIC.social.facebook ? { sameAs: [CLINIC.social.facebook, CLINIC.social.instagram].filter(Boolean) } : {}),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    url: SITE,
    name: CLINIC.seo.siteName,
    description: CLINIC.seo.defaultDescription,
    publisher: { "@id": `${SITE}/#organization` },
    inLanguage: "en-IN",
  };

  const palaDentist = branchToDentistSchema(BRANCH_PALA, "/local/pala");
  const thrissurDentist = branchToDentistSchema(BRANCH_THRISSUR, "/local/thrissur");

  const leadDoctors = DOCTORS.slice(0, 4).map((d) => ({
    "@type": "Person",
    name: d.name,
    jobTitle: d.roles?.[0] ?? "Dentist",
    hasCredential: d.qualifications,
    worksFor: { "@id": `${SITE}/#organization` },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website, palaDentist, thrissurDentist, ...leadDoctors],
  };
}

export function buildFaqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function buildMedicalBusinessSchema(options: {
  name: string;
  description: string;
  url: string;
  branch: ClinicBranch;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: options.name,
    description: options.description,
    url: options.url,
    telephone: options.branch.contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: options.branch.address.street,
      addressLocality: options.branch.address.city,
      addressRegion: options.branch.address.state,
      postalCode: options.branch.address.pincode || undefined,
      addressCountry: "IN",
    },
    openingHoursSpecification: openingHoursSpec(),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental treatments",
      itemListElement: TREATMENTS.filter((t) => t.featured).slice(0, 8).map((t) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: t.title,
          url: `${SITE}/treatments/${t.slug}`,
        },
      })),
    },
  };
}
