/** Cost ranges are indicative — clinic to confirm at consultation */

export interface TreatmentCommercialInfo {
  costRangeInr: string;
  costNote: string;
  steps: string[];
  recovery: string;
  faqs: { question: string; answer: string }[];
  availableAt: ("pala" | "thrissur")[];
}

export const TREATMENT_COMMERCIAL: Record<string, TreatmentCommercialInfo> = {
  "dental-implants": {
    costRangeInr: "₹25,000 – ₹65,000+ per implant",
    costNote: "Final cost depends on implant brand, bone grafting, and crown type. Consultation & CBCT if needed are quoted separately.",
    steps: [
      "Examination, X-ray/CBCT and treatment plan",
      "Implant placement (often under local anaesthesia)",
      "Healing period for bone integration (typically 3–6 months)",
      "Abutment and custom crown placement",
      "Follow-up and hygiene instructions",
    ],
    recovery: "Mild soreness 2–5 days; most patients return to normal routine next day. Soft diet advised initially.",
    faqs: [
      {
        question: "How much does a dental implant cost in Pala, Kottayam?",
        answer:
          "At Smile Architects, single-tooth implant treatment often falls in the ₹25,000–₹65,000+ range per implant depending on the case. A consultation is required for an exact quote.",
      },
      {
        question: "Is implant surgery painful?",
        answer:
          "Placement is done under local anaesthesia. Discomfort afterward is usually manageable with prescribed or OTC pain relief.",
      },
    ],
    availableAt: ["pala", "thrissur"],
  },
  "root-canal-treatment": {
    costRangeInr: "₹3,500 – ₹12,000+ per tooth",
    costNote: "Varies by tooth (front vs molar), number of canals, and whether a crown is needed afterward.",
    steps: [
      "Diagnosis and X-ray",
      "Local anaesthesia and access to the pulp",
      "Cleaning and shaping of root canals",
      "Filling and sealing the canals",
      "Crown recommendation for weak teeth (especially molars)",
    ],
    recovery: "Sensitivity for a few days is common. Avoid chewing on the treated tooth until fully restored.",
    faqs: [
      {
        question: "What is the root canal cost in Pala?",
        answer:
          "Root canal fees at Smile Architects typically range from about ₹3,500 for simpler front teeth to ₹12,000+ for complex molars, before any crown.",
      },
      {
        question: "Can root canal be done in one visit?",
        answer:
          "Many cases can be completed in one or two visits depending on infection severity and tooth anatomy.",
      },
    ],
    availableAt: ["pala", "thrissur"],
  },
  braces: {
    costRangeInr: "₹35,000 – ₹1,20,000+",
    costNote: "Metal braces start lower; ceramic, Damon and complex cases cost more. Includes regular adjustment visits as per plan.",
    steps: [
      "Orthodontic records (photos, X-rays, models/scan)",
      "Treatment plan with Dr. Jeo Tom Charls, MDS",
      "Bonding of brackets and wire placement",
      "Review every 4–8 weeks",
      "Retainers after active treatment",
    ],
    recovery: "No downtime. Mild pressure after adjustments for 2–3 days is normal.",
    faqs: [
      {
        question: "How much do braces cost in Kottayam / Pala?",
        answer:
          "Braces at Smile Architects generally range from about ₹35,000 for standard metal cases to ₹1,20,000+ for ceramic or complex treatments, assessed at consultation.",
      },
    ],
    availableAt: ["pala", "thrissur"],
  },
  "clear-aligners": {
    costRangeInr: "₹80,000 – ₹2,50,000+",
    costNote: "Based on case complexity and number of aligner stages. ClearPath / aligner systems quoted after digital scan.",
    steps: [
      "Clinical assessment and suitability check",
      "Digital scan or impressions",
      "Aligner fabrication and delivery",
      "Wear 20–22 hours daily; periodic reviews",
      "Retainers after completion",
    ],
    recovery: "No recovery period. Speech may adapt for a few days when starting.",
    faqs: [
      {
        question: "Clear aligner cost in Kerala?",
        answer:
          "Clear aligner packages at Smile Architects often start around ₹80,000 and increase with case complexity. An orthodontic consult is required for pricing.",
      },
    ],
    availableAt: ["pala", "thrissur"],
  },
  "general-dentistry": {
    costRangeInr: "₹300 – ₹5,000+ per visit",
    costNote: "Check-up and scaling from lower range; fillings and extractions priced by procedure.",
    steps: [
      "Examination and discussion of concerns",
      "X-ray if indicated",
      "Cleaning, fillings or other treatment as needed",
      "Preventive advice and recall interval",
    ],
    recovery: "Usually none; extraction sites heal over 1–2 weeks.",
    faqs: [
      {
        question: "Dental check-up cost in Pala?",
        answer:
          "Routine check-ups and scaling at Smile Architects typically start from a few hundred rupees; additional treatment is quoted before proceeding.",
      },
    ],
    availableAt: ["pala", "thrissur"],
  },
};
