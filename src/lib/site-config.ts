/**
 * Smile Architects — Central site configuration.
 * All clinic data lives here. Update this file to propagate changes site-wide.
 */

/** Calls, SMS, and WhatsApp CTAs — India mobile 9446999333 */
export const CLINIC_PHONE_E164 = "+919446999333" as const;
export const CLINIC_PHONE_WA_ME = "919446999333" as const;
export const CLINIC_PHONE_DISPLAY = "+91 94469 99333";
/** Canonical WhatsApp deep link for every CTA on the site */
export const WHATSAPP_URL = `https://wa.me/${CLINIC_PHONE_WA_ME}` as const;

/** Live production domain (SEO, sitemap, canonical URLs) — use www (primary in Search Console) */
export const SITE_PUBLIC_URL = "https://www.smilearchitectskeralam.com" as const;
export const SITE_PUBLIC_HOST = "www.smilearchitectskeralam.com" as const;

export const CLINIC = {
  name: "Smile Architects",
  tagline: "Invisible Orthodontics & Multispeciality Dental Clinic",
  fullName: "Smile Architects — Invisible Orthodontics & Multispeciality Dental Clinic",
  address: {
    street: "2nd Floor, Mukkadan Arcade, Lalam Junction",
    city: "Pala",
    district: "Kottayam",
    state: "Kerala",
    pincode: "686575",
    country: "India",
    landmark: "Above KFC / Navya Bakes, Lalam Jn.",
    full: "2nd Floor, Mukkadan Arcade, Lalam Jn., Pala, Kottayam, Kerala – 686575",
  },
  contact: {
    phone: CLINIC_PHONE_E164,
    phoneDisplay: CLINIC_PHONE_DISPLAY,
    email: "drjeosmilearchitects@gmail.com",
    website: SITE_PUBLIC_URL,
  },
  hours: {
    weekdays: { label: "Monday – Saturday", open: "9:30 AM", close: "8:00 PM" },
    sunday: { label: "Sunday", status: "Closed" },
    note: "Appointments recommended. Walk-ins welcome subject to availability.",
  },
  // Platform listings — treat as configurable, not permanent claims
  platforms: {
    practo: {
      url: "https://www.practo.com/pala/clinic/smile-architects-palai",
      // NOTE: ratings/review counts are dynamic — update periodically from Practo dashboard
    },
    justdial: {
      url: "https://www.justdial.com",
    },
    googleMaps: {
      placeId: "ChIJ7W7OAs3NN0gReVUrODfjCJ0",
      embedUrl: "https://maps.google.com/maps?q=Smile+Architects+Lalam+Junction+Pala+Kottayam+Kerala&output=embed",
      directionsUrl: "https://maps.google.com/?q=Smile+Architects,+Mukkadan+Arcade,+Lalam+Jn.,+Pala,+Kottayam,+Kerala+686575",
      reviewsUrl: "https://maps.app.goo.gl/Pbo5ja5buaCrrgsu6",
    },
  },
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/the_smilearchitects",
    instagramHandle: "@the_smilearchitects",
    youtube: "",
    whatsapp: WHATSAPP_URL,
  },
  /** Only set review counts when they match live Google data shown on the site */
  trust: {
    practicingSince: 2015,
    googleRating: null as number | null,
    googleReviewCount: null as number | null,
  },
  brand: {
    /** Desktop / footer wordmark — `public/images/logo.png` */
    logo: "/images/logo.png",
    logoMobile: "/images/MOBILE LOGO.png",
    /** Increment when replacing logo files (browser cache bust) */
    logoVersion: 4,
  },
  seo: {
    siteName: "Smile Architects",
    defaultTitle: "Smile Architects | Best Dental Clinic in Pala, Kottayam & Thrissur",
    defaultDescription:
      `Smile Architects — invisible orthodontics & multispeciality dental clinic in Pala, Kottayam District & Thrissur. MDS orthodontist, dental implants, braces, lingual braces & smile design. Call ${CLINIC_PHONE_DISPLAY}.`,
    siteUrl: SITE_PUBLIC_URL,
    // [CLINIC TO VERIFY: Replace with final production domain]
    ogImage: "/images/logo.png",
    twitterHandle: "", // [CLINIC TO VERIFY]
  },
} as const;

export function brandLogoSrc(variant: "desktop" | "mobile" = "desktop"): string {
  const path = variant === "mobile" ? CLINIC.brand.logoMobile : CLINIC.brand.logo;
  return `${path}?v=${CLINIC.brand.logoVersion}`;
}

export const DOCTORS = [
  // ── CORE TEAM ──────────────────────────────────────────────────────────────
  {
    id: "dr-jeo-tom-charls",
    slug: "dr-jeo-tom-charls",
    name: "Dr. Jeo Tom Charls",
    photo: "/images/dr-jeo-tom-charls.jpg",
    photoPosition: "50% 8%",
    qualifications: "MDS",
    specialty: "Orthodontics and Dentofacial Orthopaedics",
    roles: ["Consultant Orthodontist", "Certified Invisalign Provider", "Certified Spark Aligner Provider"],
    visiting: false,
    registrationBody: "Kerala State Dental Council",
    registrationNumber: "9451",
    registrationYear: "2015",
    memberships: ["Indian Orthodontic Society", "Indian Dental Association"],
    education: [
      { degree: "BDS", institution: "Sri Balaji Dental College, Chennai", year: "2010" },
      { degree: "MDS — Orthodontics and Dentofacial Orthopaedics", institution: "Sri Balaji Dental College, Chennai", year: "2015" },
    ],
    professionalExperience: [
      "Smile Architects, Pala",
      "Mar Sleeva Medicity, Palai",
      "Believer's Church Medical College & Hospital",
      "Raihan Institute of Medical Sciences",
      "V.V. Dental Clinic, Chennai",
    ],
    training: [
      "Certified Invisalign Provider",
      "Certified Spark Aligner Provider",
      "Lingual orthodontics training",
      "Lingual orthodontics CAD/CAM training",
      "ClearPath clear-aligner certification workshop",
      "TMJ considerations in functional orthodontics",
      "Miniscrews in orthodontics",
    ],
    areasOfExpertise: [
      "Conventional straight-wire appliances",
      "Damon / self-ligating brackets",
      "Ceramic brackets",
      "Lingual orthodontics / hidden braces",
      "Invisalign & Spark clear aligners",
      "Surgical orthodontics",
      "Orthognathic surgical planning",
      "Growth modification",
      "Fixed functional appliances",
      "Digital smile designing",
    ],
    bio: "Dr. Jeo Tom Charls is the principal orthodontist at Smile Architects, Pala. An MDS-qualified specialist in Orthodontics and Dentofacial Orthopaedics, he is a Certified Invisalign and Spark Aligner Provider with advanced training in lingual orthodontics and CAD/CAM bracket systems. His practice spans the full spectrum of orthodontic treatment — from conventional braces to completely hidden lingual systems and clear aligners.",
    seo: {
      title: "Dr. Jeo Tom Charls | Orthodontist in Pala, Kottayam | Smile Architects",
      description: "Dr. Jeo Tom Charls — MDS Orthodontics. Certified Invisalign & Spark Aligner Provider. Specialist in braces, lingual orthodontics and clear aligners at Smile Architects, Pala.",
    },
  },
  {
    id: "dr-jom-t-kizhakkel",
    slug: "dr-jom-t-kizhakkel",
    name: "Dr. Jom T. Kizhakkel",
    photo: "/images/team/dr-jom-t-kizhakkel.jpg",
    photoPosition: "50% 12%",
    qualifications: "MDS",
    specialty: "Periodontics & Implantology",
    roles: ["Periodontist", "Implantologist"],
    visiting: false,
    registrationBody: "",
    registrationNumber: "",
    registrationYear: "",
    memberships: [],
    education: [
      { degree: "MDS — Periodontics & Implantology", institution: "", year: "" },
    ],
    professionalExperience: ["Smile Architects, Pala"],
    training: [],
    areasOfExpertise: [
      "Periodontal treatment",
      "Scaling and root planing",
      "Gum surgery",
      "Dental implants",
      "Implant-supported restorations",
      "Bone grafting",
    ],
    bio: "Dr. Jom T. Kizhakkel is an MDS specialist in Periodontics and Implantology at Smile Architects, Pala. He manages gum disease treatment and dental implant placement, offering patients a complete solution for tooth loss and periodontal health.",
    seo: {
      title: "Dr. Jom T. Kizhakkel | Periodontist & Implantologist in Pala | Smile Architects",
      description: "Dr. Jom T. Kizhakkel — MDS Periodontics & Implantology. Specialist in dental implants and gum treatment at Smile Architects, Pala, Kottayam, Kerala.",
    },
  },

  // ── VISITING CONSULTANTS ───────────────────────────────────────────────────
  {
    id: "dr-kishore-george",
    slug: "dr-kishore-george",
    name: "Dr. Kishore George",
    photo: "/images/team/dr-kishore-george.jpg",
    photoPosition: "50% 12%",
    qualifications: "MDS",
    specialty: "Oral & Maxillofacial Surgery",
    roles: ["Visiting Consultant", "Oral & Maxillofacial Surgeon"],
    visiting: true,
    registrationBody: "",
    registrationNumber: "",
    registrationYear: "",
    memberships: [],
    education: [
      { degree: "MDS — Oral & Maxillofacial Surgery", institution: "", year: "" },
    ],
    professionalExperience: [],
    training: [],
    areasOfExpertise: [
      "Complex tooth extractions",
      "Impacted wisdom tooth surgery",
      "Oral cyst and lesion removal",
      "Jaw surgery",
      "Pre-implant surgery",
      "Orthognathic surgery",
    ],
    bio: "Dr. Kishore George is a visiting consultant Oral & Maxillofacial Surgeon at Smile Architects, Pala. He manages complex surgical cases including impacted wisdom teeth, jaw surgery and pre-implant procedures.",
    seo: {
      title: "Dr. Kishore George | Oral Surgeon — Visiting Consultant | Smile Architects Pala",
      description: "Dr. Kishore George — MDS Oral & Maxillofacial Surgery. Visiting consultant at Smile Architects, Pala, Kottayam, Kerala.",
    },
  },
  {
    id: "dr-renu-ann-mathew",
    slug: "dr-renu-ann-mathew",
    name: "Dr. Renu Ann Mathew",
    photo: "/images/team/dr-renu-ann-mathew.jpg",
    photoPosition: "50% 12%",
    qualifications: "MDS",
    specialty: "Paediatric & Preventive Dentistry",
    roles: ["Visiting Consultant", "Paediatric Dentist"],
    visiting: true,
    registrationBody: "",
    registrationNumber: "",
    registrationYear: "",
    memberships: [],
    education: [
      { degree: "MDS — Paediatric & Preventive Dentistry", institution: "", year: "" },
    ],
    professionalExperience: [],
    training: [],
    areasOfExpertise: [
      "Children's dental checkups",
      "Milk teeth treatment",
      "Dental sealants and fluoride",
      "Space maintainers",
      "Behavioural management",
      "Early orthodontic assessment",
    ],
    bio: "Dr. Renu Ann Mathew is a visiting consultant specialist in Paediatric & Preventive Dentistry at Smile Architects, Pala. She provides specialised dental care for children, focusing on prevention and creating a positive dental experience from an early age.",
    seo: {
      title: "Dr. Renu Ann Mathew | Paediatric Dentist — Visiting Consultant | Smile Architects Pala",
      description: "Dr. Renu Ann Mathew — MDS Paediatric & Preventive Dentistry. Visiting consultant at Smile Architects, Pala, Kottayam, Kerala.",
    },
  },
  {
    id: "dr-akarsh-babu",
    slug: "dr-akarsh-babu",
    name: "Dr. Akarsh Babu",
    photo: "/images/team/dr-akarsh-babu.jpg",
    photoPosition: "50% 12%",
    qualifications: "MDS",
    specialty: "Prosthodontics",
    roles: ["Visiting Consultant", "Prosthodontist"],
    visiting: true,
    registrationBody: "",
    registrationNumber: "",
    registrationYear: "",
    memberships: [],
    education: [
      { degree: "MDS — Prosthodontics", institution: "", year: "" },
    ],
    professionalExperience: [],
    training: [],
    areasOfExpertise: [
      "Dental crowns and bridges",
      "Complete and partial dentures",
      "Implant-supported prostheses",
      "Full-mouth rehabilitation",
      "Smile makeovers",
      "Ceramic and zirconia restorations",
    ],
    bio: "Dr. Akarsh Babu is a visiting consultant Prosthodontist at Smile Architects, Pala. He specialises in complex restorative and prosthetic work including implant-supported prostheses, full-mouth rehabilitation and smile design.",
    seo: {
      title: "Dr. Akarsh Babu | Prosthodontist — Visiting Consultant | Smile Architects Pala",
      description: "Dr. Akarsh Babu — MDS Prosthodontics. Visiting consultant at Smile Architects, Pala, Kottayam, Kerala.",
    },
  },
];

/** Order matters: homepage, forms, and lists use this sequence (specialty-first). */
export const TREATMENTS = [
  {
    id: "smile-design",
    slug: "smile-design",
    title: "Smile Design",
    shortDescription: "Digital smile design for complete smile transformation.",
    icon: "smile",
    featured: true,
  },
  {
    id: "orthodontics",
    slug: "orthodontics",
    title: "Orthodontics",
    shortDescription: "Correcting misaligned teeth and jaw relationships.",
    icon: "braces",
    featured: true,
  },
  {
    id: "braces",
    slug: "braces",
    title: "Dental Braces",
    shortDescription: "Metal, ceramic and self-ligating brace systems.",
    icon: "braces",
    featured: true,
  },
  {
    id: "clear-aligners",
    slug: "clear-aligners",
    title: "Clear Aligners",
    shortDescription: "Transparent removable aligners for discreet treatment.",
    icon: "aligner",
    featured: true,
  },
  {
    id: "lingual-braces",
    slug: "lingual-braces",
    title: "Lingual Braces",
    shortDescription: "Hidden braces fitted to the inner surface of teeth.",
    icon: "lingual",
    featured: true,
  },
  {
    id: "cosmetic-dentistry",
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    shortDescription: "Improving the appearance of teeth and smile.",
    icon: "sparkle",
    featured: true,
  },
  {
    id: "veneers",
    slug: "veneers",
    title: "Dental Veneers",
    shortDescription: "Thin porcelain or composite shells for smile improvement.",
    icon: "veneer",
    featured: false,
  },
  {
    id: "dental-implants",
    slug: "dental-implants",
    title: "Dental Implants",
    shortDescription: "A permanent solution for missing teeth.",
    icon: "implant",
    featured: true,
  },
  {
    id: "general-dentistry",
    slug: "general-dentistry",
    title: "General Dentistry",
    shortDescription: "Preventive care, check-ups and routine dental treatment.",
    icon: "tooth",
    featured: true,
  },
  {
    id: "pediatric-dentistry",
    slug: "pediatric-dentistry",
    title: "Paediatric Dentistry",
    shortDescription: "Dental care tailored for children.",
    icon: "child",
    featured: true,
  },
  {
    id: "root-canal-treatment",
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    shortDescription: "Saving infected or damaged teeth.",
    icon: "canal",
    featured: true,
  },
  {
    id: "restorative-dentistry",
    slug: "restorative-dentistry",
    title: "Restorative Dentistry",
    shortDescription: "Restoring teeth damaged by decay or injury.",
    icon: "restore",
    featured: false,
  },
  {
    id: "oral-surgery",
    slug: "oral-surgery",
    title: "Oral & Maxillofacial Surgery",
    shortDescription: "Surgical care for the mouth, jaws and related structures.",
    icon: "surgery",
    featured: false,
  },
  {
    id: "periodontal-treatment",
    slug: "periodontal-treatment",
    title: "Periodontal Treatment",
    shortDescription: "Treatment for gum disease and supporting structures.",
    icon: "gum",
    featured: false,
  },
  {
    id: "prosthodontics",
    slug: "prosthodontics",
    title: "Prosthodontics",
    shortDescription: "Replacing and restoring missing or damaged teeth.",
    icon: "prosthetic",
    featured: false,
  },
  {
    id: "crowns",
    slug: "crowns",
    title: "Dental Crowns",
    shortDescription: "Caps that restore and protect damaged teeth.",
    icon: "crown",
    featured: false,
  },
  {
    id: "bridges",
    slug: "bridges",
    title: "Dental Bridges",
    shortDescription: "Fixed replacement for one or more missing teeth.",
    icon: "bridge",
    featured: false,
  },
  {
    id: "dentures",
    slug: "dentures",
    title: "Dentures",
    shortDescription: "Removable replacements for missing teeth.",
    icon: "denture",
    featured: false,
  },
] as const;

export const FACILITIES = [
  { name: "Individual Treatment Rooms", description: "Private, dedicated treatment rooms for patient comfort and dignity." },
  { name: "Sterilisation", description: "Strict sterilisation protocols maintained throughout the clinic." },
  { name: "Digital X-Ray", description: "Modern digital radiography for accurate diagnosis with reduced radiation." },
  { name: "Ample Car Parking", description: "Convenient parking available for patients." },
  { name: "Online & Telephone Booking", description: `Book appointments online or by calling ${CLINIC_PHONE_DISPLAY}.` },
] as const;

export const FAQS_GENERAL = [
  {
    question: "Where is Smile Architects located?",
    answer:
      "Smile Architects is located at 2nd Floor, Mukkadan Arcade, Lalam Jn., Pala, Kottayam, Kerala – 686575. Above KFC / Navya Bakes, Lalam Junction.",
  },
  {
    question: "What are the clinic's opening hours?",
    answer: "The clinic is open Monday to Saturday, 9:30 AM to 8:00 PM. The clinic is closed on Sundays.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      `You can book an appointment by calling ${CLINIC_PHONE_DISPLAY}, sending a WhatsApp message to the same number, or using the online appointment form on this website.`,
  },
  {
    question: "Which dentists are available at Smile Architects?",
    answer:
      "Our Pala, Kottayam centre is led by Dr. Jeo Tom Charls (MDS – Orthodontics and Dentofacial Orthopaedics), supported by Dr. Jintu Joan Jose and Dr. Ann Tresa T. Srambickal (both BDS – Aesthetic & General Dentistry). We also have a branch in Thrissur (Punkunnam).",
  },
  {
    question: "Does the clinic offer parking?",
    answer: "Yes, ample car parking is available for patients visiting the clinic.",
  },
  {
    question: "Can I walk in without an appointment?",
    answer:
      "Walk-ins are welcome, though appointments are recommended to avoid waiting times. Call ahead to check availability.",
  },
];

export type DoctorId = typeof DOCTORS[number]["id"];
export type TreatmentId = typeof TREATMENTS[number]["id"];
