import { CLINIC } from "./site-config";

export type BranchId = "pala" | "thrissur";

export interface ClinicBranch {
  id: BranchId;
  /** Short name for toggle labels */
  label: string;
  /** Secondary line under label in location toggle, e.g. "Kottayam" */
  toggleHint: string;
  /** Hero / eyebrow line, e.g. "Pala, Kottayam, Kerala" */
  locationLine: string;
  isPrimary: boolean;
  landingPath: string;
  address: {
    street: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    country: string;
    landmark: string;
    full: string;
  };
  contact: {
    phone: string;
    phoneDisplay: string;
    email: string;
  };
  hours: typeof CLINIC.hours;
  maps: {
    embedUrl: string;
    directionsUrl: string;
    /** Optional Google Maps share link from the clinic */
    shareUrl?: string;
  };
  whatsapp: string;
  /** Public paths under /public — Thrissur branch only today */
  media?: {
    hero: string;
    gallery: { src: string; alt: string }[];
  };
}

const sharedContact = {
  phone: CLINIC.contact.phone,
  phoneDisplay: CLINIC.contact.phoneDisplay,
  email: CLINIC.contact.email,
};

const sharedHours = CLINIC.hours;

export const BRANCH_PALA: ClinicBranch = {
  id: "pala",
  label: "Pala",
  toggleHint: "Kottayam",
  locationLine: "Pala, Kottayam, Kerala",
  isPrimary: true,
  landingPath: "/",
  address: { ...CLINIC.address },
  contact: sharedContact,
  hours: sharedHours,
  maps: {
    embedUrl: CLINIC.platforms.googleMaps.embedUrl,
    directionsUrl: CLINIC.platforms.googleMaps.directionsUrl,
  },
  whatsapp: CLINIC.social.whatsapp,
};

const THRISSUR_MAP_QUERY =
  "Smile+Architects,+2nd+Floor,+Ephphatha+Medical+Complex,+Opp+St+Joseph%27s+Church,+Punkunnam,+Thrissur,+680002,+Kerala";

export const BRANCH_THRISSUR: ClinicBranch = {
  id: "thrissur",
  label: "Thrissur",
  toggleHint: "Punkunnam",
  locationLine: "Punkunnam, Thrissur, Kerala",
  isPrimary: false,
  landingPath: "/thrissur",
  address: {
    street: "2nd Floor, Ephphatha Medical Complex",
    city: "Thrissur",
    district: "Thrissur",
    state: "Kerala",
    pincode: "680002",
    country: "India",
    landmark: "Opp. St. Joseph's Church, Punkunnam",
    full:
      "Smile Architects, 2nd Floor, Ephphatha Medical Complex, Opp. St. Joseph's Church, Punkunnam, Thrissur, Kerala – 680002",
  },
  contact: sharedContact,
  hours: sharedHours,
  maps: {
    embedUrl: `https://maps.google.com/maps?q=${THRISSUR_MAP_QUERY}&output=embed`,
    directionsUrl: `https://maps.google.com/?q=${THRISSUR_MAP_QUERY}`,
    shareUrl: "https://share.google/8e7fOT2ffSAPGhICJ",
  },
  whatsapp: CLINIC.social.whatsapp,
  media: {
    hero: "/thrissur/page_1_image_2.jpeg",
    gallery: [
      {
        src: "/thrissur/page_1_image_3.png",
        alt: "Smile Architects Thrissur — consultation workspace",
      },
      {
        src: "/thrissur/page_1_image_4.png",
        alt: "Smile Architects Thrissur — treatment room interior",
      },
      {
        src: "/thrissur/page_1_image_5.png",
        alt: "Smile Architects Thrissur — clinic interior detail",
      },
      {
        src: "/thrissur/page_1_image_6.png",
        alt: "Smile Architects Thrissur — modern dental clinic space",
      },
      {
        src: "/thrissur/page_1_image_7.png",
        alt: "Smile Architects Thrissur — patient care area",
      },
      {
        src: "/thrissur/page_1_image_8.png",
        alt: "Smile Architects Thrissur — clinic ambience",
      },
    ],
  },
};

export const BRANCHES: Record<BranchId, ClinicBranch> = {
  pala: BRANCH_PALA,
  thrissur: BRANCH_THRISSUR,
};

export const BRANCH_LIST: ClinicBranch[] = [BRANCH_PALA, BRANCH_THRISSUR];

export const DEFAULT_BRANCH_ID: BranchId = "pala";

export const BRANCH_STORAGE_KEY = "smile-architects-branch";

export function getBranch(id: BranchId): ClinicBranch {
  return BRANCHES[id];
}

export function isBranchId(value: string): value is BranchId {
  return value === "pala" || value === "thrissur";
}
