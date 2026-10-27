/**
 * Smile Architects — Rate Chart 2025
 * Source: printed rate chart, Pala clinic.
 * All base prices are in INR (Indian Rupees).
 * Ranges stored as [min, max]; single price as [price, price].
 */

export interface PriceItem {
  name: string;
  /** [min, max] in INR. Equal values = fixed price. */
  inr: [number, number];
  /** Optional clarification shown as a sub-line */
  note?: string;
}

export interface PriceCategory {
  id: string;
  title: string;
  items: PriceItem[];
}

export const PRICE_DISCLAIMER =
  "Charges may increase when superior quality materials are used or with differences in procedure. Confirm the full treatment plan and total cost with the doctor before starting. These are indicative rates only.";

export const PRICE_CATEGORIES: PriceCategory[] = [
  {
    id: "diagnosis",
    title: "Diagnosis & Consultation",
    items: [
      { name: "OP Registration", inr: [250, 250] },
      { name: "Specialist Consultation", inr: [500, 500] },
      { name: "IOPA X-Ray (per image)", inr: [200, 200] },
    ],
  },
  {
    id: "oral-surgery",
    title: "Oral Surgery",
    items: [
      { name: "Normal Extraction", inr: [600, 600] },
      { name: "Difficult / 3rd Molar Extraction", inr: [1000, 1500] },
      { name: "Surgical Removal of Impacted Teeth", inr: [4000, 7000] },
      { name: "Incision & Drainage", inr: [500, 1000] },
      { name: "Operculectomy", inr: [1500, 2500] },
      { name: "Frenectomy", inr: [2500, 2500] },
      { name: "Apicoectomy", inr: [4000, 6000] },
      { name: "Alveoloplasty (per quadrant)", inr: [2500, 2500] },
    ],
  },
  {
    id: "restorations",
    title: "Restorations",
    items: [
      { name: "Temporary Filling", inr: [400, 400] },
      { name: "Glass Ionomer Restoration", inr: [900, 1500] },
      { name: "Pit & Fissure Sealant", inr: [900, 900] },
      { name: "Composite Restoration, Class I", inr: [1200, 2000] },
      { name: "Composite Restoration, Class II", inr: [2000, 4000] },
      { name: "GI + Composite Restoration (2 stages)", inr: [2000, 2000], note: "900 + 1,100" },
      { name: "Indirect Composite Restoration", inr: [4000, 4000] },
      { name: "Indirect Pulp Capping (Biodentin + Rubber Dam)", inr: [5000, 5000] },
      { name: "Composite Veneering / Diastema Closure (per tooth)", inr: [2500, 5000] },
      { name: "Biomimetic Restorations", inr: [4000, 6000] },
      { name: "Composite Inlay / Onlay", inr: [6000, 6000] },
      { name: "Ceramic Inlay / Onlay", inr: [10000, 10000] },
      { name: "Teeth Whitening / Bleaching", inr: [12000, 20000] },
    ],
  },
  {
    id: "endodontics",
    title: "Root Canal Treatment (Endodontics)",
    items: [
      { name: "Root Canal Treatment — Anterior", inr: [4200, 4200] },
      { name: "Root Canal Treatment — Posterior", inr: [4800, 4800] },
      { name: "Root Canal with Rubber Dam Isolation", inr: [6000, 6000] },
      { name: "Re-treatment Endodontics", inr: [5500, 5500] },
      { name: "Re-treatment Endodontics (Rubber Dam)", inr: [7000, 7000] },
      { name: "Intra-Canal Bleaching after Root Canal", inr: [2400, 2400] },
      { name: "Fibre Post & Composite Core", inr: [1500, 2500] },
    ],
  },
  {
    id: "periodontics",
    title: "Periodontics (Gum Treatment)",
    items: [
      { name: "Scaling (Normal)", inr: [1200, 1200] },
      { name: "Scaling (Heavy stains & calculus)", inr: [1500, 3000] },
      { name: "Subgingival Scaling (per quadrant)", inr: [1000, 2000] },
      { name: "Flap Surgery (per quadrant)", inr: [7000, 7000] },
      { name: "Flap Surgery with Laser (per quadrant)", inr: [12000, 12000] },
      { name: "Crown Lengthening (per tooth)", inr: [2000, 2000] },
      { name: "Gingivectomy (per quadrant)", inr: [2000, 3000] },
    ],
  },
  {
    id: "braces",
    title: "Braces",
    items: [
      { name: "Metal Braces — Regular (Aditek / Morelli, Brazil)", inr: [22000, 22000] },
      { name: "Metal Braces — Standard (Leone / RMO, Italy / USA)", inr: [25000, 25000] },
      { name: "Metal Braces — Premium (AO / Dentarum / 3M, USA / Germany)", inr: [28000, 28000] },
      { name: "Self-Ligating Metal — Standard (Garmy / Selfy+)", inr: [38000, 38000] },
      { name: "Self-Ligating Metal — Premium (Damon Q2)", inr: [50000, 50000] },
      { name: "Self-Ligating Metal — Premium (Ultima)", inr: [58000, 58000] },
      { name: "Tooth-Coloured Resin-Hybrid Braces", inr: [35000, 35000] },
      { name: "Ceramic Braces", inr: [50000, 50000] },
      { name: "Ceramic Self-Ligating (Damon Clear / 3M)", inr: [75000, 75000] },
      { name: "Lingual (Hidden) Braces — Digital CAD-CAM", inr: [75000, 100000] },
    ],
  },
  {
    id: "orthodontic-appliances",
    title: "Orthodontic Appliances & Add-ons",
    items: [
      { name: "Orthopaedic / Myofunctional Appliance", inr: [10000, 20000] },
      { name: "Hawley's Appliance — Active (per arch)", inr: [3000, 3000] },
      { name: "Hawley's / Begg's Retainer (per arch)", inr: [2000, 2000] },
      { name: "Bonded Permanent / Clear Retainer (per arch)", inr: [2500, 2500] },
      { name: "Micro Implants (TADs)", inr: [3000, 5000] },
      { name: "IZC / Buccal Shelf Implants", inr: [6000, 6000] },
      { name: "MARPE / Miniscrew-Assisted Maxillary Expansion", inr: [50000, 50000] },
      { name: "Orthognathic Surgical Planning + Orthodontics", inr: [10000, 10000], note: "Standard orthodontic rate + ₹10,000" },
    ],
  },
  {
    id: "clear-aligners",
    title: "Clear Aligners",
    items: [
      { name: "Invisalign (USA)", inr: [120000, 300000], note: "1.2 / 1.4 / 2.0 / 3.0 Lakhs depending on case complexity" },
      { name: "Spark by Ormco", inr: [100000, 240000], note: "1.0 – 2.40 Lakhs across 6 tiers" },
      { name: "Graphy Direct-Printed Aligners (Shape Memory)", inr: [75000, 250000] },
      { name: "Clear Aligners (Made in India)", inr: [50000, 175000] },
    ],
  },
  {
    id: "paediatric",
    title: "Paediatric Dentistry",
    items: [
      { name: "Pedodontic Extraction (with LA)", inr: [400, 800] },
      { name: "Pedodontic Restoration", inr: [500, 1000] },
      { name: "Pulpectomy", inr: [3000, 3000] },
      { name: "Stainless Steel Crown", inr: [3000, 3000] },
      { name: "Tooth-Coloured Crown", inr: [4000, 4000] },
      { name: "Zirconia Crown (Paediatric)", inr: [6000, 6000] },
      { name: "Space Maintainer", inr: [3000, 5000] },
      { name: "Minor Oral Surgery for Children", inr: [2000, 4000] },
    ],
  },
  {
    id: "implants",
    title: "Dental Implants",
    items: [
      { name: "Dental Implant (without crown)", inr: [30000, 50000] },
      { name: "Implant Crown — PFM", inr: [10000, 10000] },
      { name: "Implant Crown — Zirconia", inr: [15000, 15000] },
      { name: "Implant-Supported Overdenture (per jaw)", inr: [130000, 130000] },
      { name: "Implant-Supported Fixed Denture — Acrylic (per jaw)", inr: [175000, 175000] },
      { name: "Implant-Supported Fixed Denture — Ceramic (per jaw)", inr: [250000, 250000] },
    ],
  },
  {
    id: "crown-bridge",
    title: "Crown & Bridge",
    items: [
      { name: "Full Metal Crown", inr: [3000, 3000] },
      { name: "Metal Ceramic (PFM) — Facing Premium", inr: [5000, 5000] },
      { name: "Metal Ceramic (PFM) — Premium (10 yr)", inr: [5500, 5500] },
      { name: "Metal Ceramic (PFM) — Premium+ CAD-CAM DMLS (15 yr)", inr: [6500, 6500] },
      { name: "Zirconia Crown — Monolith (15 yr)", inr: [8000, 8000] },
      { name: "Zirconia Crown — Regular / Standard (15 yr)", inr: [10000, 10000] },
      { name: "Zirconia Crown — Classic / Premium (20 yr)", inr: [12500, 12500] },
      { name: "Zirconia Crown — 3M Lava Premium (20 yr)", inr: [15000, 15000] },
      { name: "Zirconia Crown — 3M Lava Premium+ (25 yr)", inr: [15000, 15000] },
      { name: "Crown Removal", inr: [1000, 1000] },
      { name: "Ceramic Veneer / E-max Crown", inr: [12000, 15000] },
    ],
  },
  {
    id: "dentures",
    title: "Removable Dentures",
    items: [
      { name: "Partial Denture — Acrylic", inr: [3000, 3000], note: "+ ₹1,000 per additional tooth" },
      { name: "Partial Denture — Flexible / Acetal", inr: [9000, 9000], note: "+ ₹1,000 per additional tooth" },
      { name: "Complete Denture — Acrylic Standard", inr: [18000, 18000] },
      { name: "Complete Denture — Acrylic High Impact", inr: [25000, 25000] },
      { name: "Complete Denture — BPS / Flex Premium", inr: [38000, 38000] },
      { name: "Cast Partial Denture (Cobalt Chrome)", inr: [14000, 14000], note: "+ ₹1,000 per additional tooth" },
    ],
  },
];

// ── Currency config ────────────────────────────────────────────────────────────

export interface CurrencyConfig {
  code: string;
  symbol: string;
  /** Approximate INR → this currency. Updated: Jan 2025. */
  rateFromInr: number;
  /** Decimal places to show */
  decimals: number;
}

/**
 * Country code → currency mapping.
 * Covers the main diaspora markets that visit Indian dental clinics.
 */
export const COUNTRY_CURRENCY: Record<string, CurrencyConfig> = {
  // Indian subcontinent — show INR
  IN: { code: "INR", symbol: "₹", rateFromInr: 1, decimals: 0 },

  // Gulf / Middle East
  AE: { code: "AED", symbol: "AED ", rateFromInr: 0.044, decimals: 0 },
  SA: { code: "SAR", symbol: "SAR ", rateFromInr: 0.045, decimals: 0 },
  QA: { code: "QAR", symbol: "QAR ", rateFromInr: 0.044, decimals: 0 },
  KW: { code: "KWD", symbol: "KWD ", rateFromInr: 0.0037, decimals: 2 },
  BH: { code: "BHD", symbol: "BHD ", rateFromInr: 0.0045, decimals: 2 },
  OM: { code: "OMR", symbol: "OMR ", rateFromInr: 0.0046, decimals: 2 },

  // Western countries
  US: { code: "USD", symbol: "$", rateFromInr: 0.012, decimals: 0 },
  GB: { code: "GBP", symbol: "£", rateFromInr: 0.0095, decimals: 0 },
  CA: { code: "CAD", symbol: "CA$", rateFromInr: 0.016, decimals: 0 },
  AU: { code: "AUD", symbol: "A$", rateFromInr: 0.018, decimals: 0 },
  NZ: { code: "NZD", symbol: "NZ$", rateFromInr: 0.02, decimals: 0 },

  // Europe
  DE: { code: "EUR", symbol: "€", rateFromInr: 0.011, decimals: 0 },
  FR: { code: "EUR", symbol: "€", rateFromInr: 0.011, decimals: 0 },
  NL: { code: "EUR", symbol: "€", rateFromInr: 0.011, decimals: 0 },
  BE: { code: "EUR", symbol: "€", rateFromInr: 0.011, decimals: 0 },
  IT: { code: "EUR", symbol: "€", rateFromInr: 0.011, decimals: 0 },
  ES: { code: "EUR", symbol: "€", rateFromInr: 0.011, decimals: 0 },
  CH: { code: "CHF", symbol: "CHF ", rateFromInr: 0.011, decimals: 0 },
  SE: { code: "SEK", symbol: "SEK ", rateFromInr: 0.124, decimals: 0 },
  NO: { code: "NOK", symbol: "NOK ", rateFromInr: 0.128, decimals: 0 },

  // Asia / Southeast Asia
  SG: { code: "SGD", symbol: "S$", rateFromInr: 0.016, decimals: 0 },
  MY: { code: "MYR", symbol: "RM ", rateFromInr: 0.056, decimals: 0 },
  JP: { code: "JPY", symbol: "¥", rateFromInr: 1.8, decimals: 0 },
};

export const DEFAULT_CURRENCY: CurrencyConfig = COUNTRY_CURRENCY["IN"];

export function getCurrencyForCountry(countryCode: string): CurrencyConfig {
  return COUNTRY_CURRENCY[countryCode.toUpperCase()] ?? DEFAULT_CURRENCY;
}

export function formatPrice(inr: number, currency: CurrencyConfig): string {
  const value = inr * currency.rateFromInr;
  const rounded =
    currency.decimals === 0
      ? Math.round(value / (value > 10000 ? 100 : value > 1000 ? 10 : 1)) *
        (value > 10000 ? 100 : value > 1000 ? 10 : 1)
      : parseFloat(value.toFixed(currency.decimals));
  return (
    currency.symbol +
    rounded.toLocaleString("en-IN", {
      minimumFractionDigits: currency.decimals,
      maximumFractionDigits: currency.decimals,
    })
  );
}

export function formatRange(item: PriceItem, currency: CurrencyConfig): string {
  const [min, max] = item.inr;
  if (min === max) return formatPrice(min, currency);
  return `${formatPrice(min, currency)} – ${formatPrice(max, currency)}`;
}
