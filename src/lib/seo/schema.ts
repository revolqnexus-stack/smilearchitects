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
  
  // Comprehensive areaServed for AI understanding
  const palaAreasServed = [
    { "@type": "City", name: "Pala", "@id": "https://en.wikipedia.org/wiki/Pala,_Kerala" },
    { "@type": "City", name: "Palai" },
    { "@type": "City", name: "Kottayam", "@id": "https://en.wikipedia.org/wiki/Kottayam" },
    { "@type": "City", name: "Erattupetta" },
    { "@type": "City", name: "Ettumanoor" },
    { "@type": "City", name: "Changanassery" },
    { "@type": "City", name: "Vaikom" },
    { "@type": "City", name: "Thiruvalla" },
    { "@type": "City", name: "Puthuppally" },
    { "@type": "AdministrativeArea", name: "Kottayam District", "@id": "https://en.wikipedia.org/wiki/Kottayam_district" },
    { "@type": "AdministrativeArea", name: "Kerala", "@id": "https://en.wikipedia.org/wiki/Kerala" },
  ];

  const thrissurAreasServed = [
    { "@type": "City", name: "Thrissur", "@id": "https://en.wikipedia.org/wiki/Thrissur" },
    { "@type": "Place", name: "Punkunnam" },
    { "@type": "City", name: "Guruvayur" },
    { "@type": "City", name: "Chalakudy" },
    { "@type": "City", name: "Irinjalakuda" },
    { "@type": "City", name: "Kodungallur" },
    { "@type": "AdministrativeArea", name: "Thrissur District", "@id": "https://en.wikipedia.org/wiki/Thrissur_district" },
    { "@type": "AdministrativeArea", name: "Kerala", "@id": "https://en.wikipedia.org/wiki/Kerala" },
  ];

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
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
    medicalSpecialty: [
      "Orthodontics",
      "Dentofacial Orthopaedics", 
      "Dental Implants",
      "Periodontics",
      "Oral and Maxillofacial Surgery",
      "Cosmetic Dentistry",
      "Paediatric Dentistry",
      "Prosthodontics",
      "Endodontics",
      "General Dentistry",
    ],
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
    areaServed: branch.id === "pala" ? palaAreasServed : thrissurAreasServed,
    parentOrganization: { "@id": `${SITE}/#organization` },
    aggregateRating: branch.id === "pala" && CLINIC.trust.googleRating
      ? {
          "@type": "AggregateRating",
          ratingValue: CLINIC.trust.googleRating.toString(),
          reviewCount: CLINIC.trust.googleReviewCount?.toString() || "0",
          bestRating: "5",
          worstRating: "1",
        }
      : undefined,
  };
}

/** Site-wide JSON-LD @graph: Organization, WebSite, both clinic locations */
export function buildSiteSchemaGraph() {
  // Build comprehensive sameAs array for entity disambiguation
  const sameAsLinks = [
    CLINIC.social.instagram,
    CLINIC.platforms.practo.url,
    CLINIC.platforms.googleMaps.reviewsUrl,
    CLINIC.platforms.googleMaps.directionsUrl,
  ].filter(Boolean);

  const organization = {
    "@type": ["Organization", "MedicalOrganization", "Dentist"],
    "@id": `${SITE}/#organization`,
    name: CLINIC.name,
    alternateName: "Smile Architects Keralam",
    legalName: "Smile Architects — Invisible Orthodontics & Multispeciality Dental Clinic",
    url: SITE,
    logo: `${SITE}${CLINIC.seo.ogImage}`,
    email: CLINIC.contact.email,
    telephone: CLINIC.contact.phone,
    description: CLINIC.seo.defaultDescription,
    foundingDate: "2015",
    address: {
      "@type": "PostalAddress",
      streetAddress: CLINIC.address.street,
      addressLocality: CLINIC.address.city,
      addressRegion: CLINIC.address.state,
      postalCode: CLINIC.address.pincode,
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Pala", "@id": "https://en.wikipedia.org/wiki/Pala,_Kerala" },
      { "@type": "City", name: "Kottayam", "@id": "https://en.wikipedia.org/wiki/Kottayam" },
      { "@type": "City", name: "Thrissur", "@id": "https://en.wikipedia.org/wiki/Thrissur" },
      { "@type": "AdministrativeArea", name: "Kottayam District" },
      { "@type": "AdministrativeArea", name: "Kerala", "@id": "https://en.wikipedia.org/wiki/Kerala" },
    ],
    medicalSpecialty: [
      "Orthodontics",
      "Dentofacial Orthopaedics",
      "Dental Implants",
      "Periodontics",
      "Oral Surgery",
      "Cosmetic Dentistry",
      "Paediatric Dentistry",
      "Prosthodontics",
      "Endodontics",
    ],
    knowsAbout: [
      "Invisalign",
      "Clear Aligners",
      "Lingual Braces",
      "Dental Braces",
      "Dental Implants",
      "Smile Design",
      "Root Canal Treatment",
      "Teeth Whitening",
      "Veneers",
      "Orthodontic Treatment",
    ],
    sameAs: sameAsLinks,
    founder: {
      "@type": "Person",
      "@id": `${SITE}/doctors/dr-jeo-tom-charls#person`,
      name: "Dr. Jeo Tom Charls",
    },
    employee: DOCTORS.map(d => ({
      "@type": "Person",
      "@id": `${SITE}/doctors/${d.slug}#person`,
      name: d.name,
    })),
    // Add aggregate rating if available
    ...(CLINIC.trust.googleRating ? {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: CLINIC.trust.googleRating.toString(),
        reviewCount: (CLINIC.trust.googleReviewCount || 50).toString(),
        bestRating: "5",
        worstRating: "1",
      },
    } : {}),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    url: SITE,
    name: CLINIC.seo.siteName,
    description: CLINIC.seo.defaultDescription,
    publisher: { "@id": `${SITE}/#organization` },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const palaDentist = branchToDentistSchema(BRANCH_PALA, "/");
  const thrissurDentist = branchToDentistSchema(BRANCH_THRISSUR, "/thrissur");

  // Enhanced Person schemas with full credentials
  const leadDoctors = DOCTORS.map((d) => ({
    "@type": "Person",
    "@id": `${SITE}/doctors/${d.slug}#person`,
    name: d.name,
    jobTitle: d.specialty,
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: d.qualifications,
      },
      ...(d.registrationNumber ? [{
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "professional license",
        name: `${d.registrationBody} Registration ${d.registrationNumber}`,
      }] : []),
    ],
    worksFor: { "@id": `${SITE}/#organization` },
    knowsAbout: d.areasOfExpertise || [],
    ...(d.memberships?.length ? {
      memberOf: d.memberships.map(m => ({
        "@type": "Organization",
        name: m,
      })),
    } : {}),
    url: `${SITE}/doctors/${d.slug}`,
    image: `${SITE}${d.photo}`,
    description: d.bio,
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

export interface ReviewData {
  id: number;
  name: string;
  time: string;
  rating: number;
  text: string;
  datePublished?: string; // ISO 8601 date (YYYY-MM-DD)
}

/**
 * Build Review schema for a single patient testimonial
 * AI systems use this to validate genuine reviews
 */
export function buildReviewSchema(review: ReviewData) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `${SITE}/patient-stories#review-${review.id}`,
    itemReviewed: {
      "@type": "Dentist",
      "@id": `${SITE}/#dentist`,
      name: CLINIC.name,
      url: SITE,
    },
    author: {
      "@type": "Person",
      name: review.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    datePublished: review.datePublished || new Date().toISOString().split('T')[0],
    reviewBody: review.text,
    inLanguage: "en-IN",
  };
}

/**
 * Build AggregateRating schema for all reviews
 * Shows overall rating to AI systems and search engines
 */
export function buildAggregateRatingSchema(options: {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "@id": `${SITE}/#aggregateRating`,
    ratingValue: options.ratingValue.toString(),
    reviewCount: options.reviewCount.toString(),
    bestRating: (options.bestRating || 5).toString(),
    worstRating: (options.worstRating || 1).toString(),
    itemReviewed: {
      "@type": "Dentist",
      "@id": `${SITE}/#dentist`,
      name: CLINIC.name,
      url: SITE,
    },
  };
}
