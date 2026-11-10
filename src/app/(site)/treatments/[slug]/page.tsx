import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { TREATMENTS, CLINIC, DOCTORS } from "@/lib/site-config";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AppointmentForm from "@/components/ui/AppointmentForm";
import { CheckIcon, ArrowRightIcon } from "@/components/ui/icons";
import DoctorPhoto from "@/components/ui/DoctorPhoto";
import {
  RevealUp,
  RevealFade,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/REVOLQComponents";
import { TREATMENT_COMMERCIAL } from "@/lib/treatment-commercial";
import { buildFaqPageSchema } from "@/lib/seo/schema";
import PremiumFAQ from "@/components/ui/PremiumFAQ";
import TreatmentContextLinks from "@/components/seo/TreatmentContextLinks";
import SeoTopicCluster from "@/components/seo/SeoTopicCluster";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return TREATMENTS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = TREATMENTS.find((t) => t.slug === slug);
  if (!treatment) return {};

  // Orthodontic treatments get their own dedicated cluster pages — point canonical there
  const orthodonticSlugs = ["braces", "lingual-braces", "clear-aligners", "orthodontics"];
  const isOrthodontic = orthodonticSlugs.includes(slug);
  const canonicalBase = isOrthodontic ? `/orthodontics/${slug}` : `/treatments/${slug}`;
  // Orthodontics overview and braces/lingual/aligner point to their own cluster pages
  const canonical = slug === "orthodontics" ? "/orthodontics" : isOrthodontic && slug !== "orthodontics" ? `/orthodontics/${slug}` : `/treatments/${slug}`;

  return buildMetadata({
    title: `${treatment.title} in Pala, Kottayam | Smile Architects`,
    description: `${treatment.title} at Smile Architects — ${treatment.shortDescription} Multispeciality dental clinic in Pala, Kottayam District, Kerala. Call +91 82899 33331.`,
    canonical: `/treatments/${treatment.slug}`,
  });
}

// Per-treatment rich content (description, points, who performs it)
const TREATMENT_DETAILS: Record<
  string,
  {
    intro: string;
    points: string[];
    doctorId?: string;
    relatedSlugs?: string[];
  }
> = {
  "general-dentistry": {
    intro:
      "General dentistry forms the foundation of good oral health. At Smile Architects, routine dental care includes check-ups, professional cleaning (scaling and polishing), fillings, tooth extractions and preventive advice. Regular visits allow early detection of problems before they become more complex or costly to treat.",
    points: [
      "Comprehensive dental examination and oral health assessment",
      "Scaling and polishing (professional cleaning)",
      "Tooth-coloured fillings (composite restorations)",
      "Tooth extraction, including simple surgical extractions",
      "Emergency dental care for pain or trauma",
      "Preventive advice: diet, brushing technique, fluoride",
      "Oral hygiene instruction tailored to your needs",
    ],
    relatedSlugs: ["root-canal-treatment", "pediatric-dentistry", "restorative-dentistry"],
  },
  "pediatric-dentistry": {
    intro:
      "Children's dental health requires a gentle, patient-centred approach. The team at Smile Architects is experienced in treating children across all ages — from first tooth check-ups through adolescence — in a calm, reassuring environment. Early dental visits help establish good habits and address issues like tooth decay, spacing or bite development before they worsen.",
    points: [
      "First dental visit check-ups for young children",
      "Preventive care: fluoride treatment and fissure sealants",
      "Fillings for primary (milk) and permanent teeth",
      "Space maintainers after early tooth loss",
      "Tooth extraction under local anaesthetic",
      "Guidance on thumb-sucking and oral habits",
      "Orthodontic assessment and growth monitoring",
    ],
    doctorId: "dr-jeo-tom-charls",
    relatedSlugs: ["general-dentistry", "orthodontics"],
  },
  "dental-implants": {
    intro:
      "A dental implant is a titanium screw surgically placed into the jawbone to replace a missing tooth root. Over several months, the implant integrates with your bone through a process called osseointegration. Once healed, a crown is attached to the implant, giving you a replacement tooth that looks, feels and functions like your natural tooth. Implants can also support bridges or dentures, eliminating the need for removable prosthetics. Treatment is provided by Dr. Jom T. Kizhakkel (MDS Periodontics & Implantology) at our Pala clinic.",
    points: [
      "Single tooth implant to replace one missing tooth",
      "Multiple implants to support a bridge replacing several teeth",
      "Implant-supported overdentures for full-arch tooth replacement",
      "Comprehensive pre-implant assessment including bone evaluation",
      "Digital X-ray and clinical imaging for precise planning",
      "Surgical placement under local anaesthetic",
      "Healing period of 3–6 months before crown placement",
      "Post-operative instructions and follow-up care",
      "Suitable for patients with healthy gums and adequate bone density",
    ],
    doctorId: "dr-jom-t-kizhakkel",
    relatedSlugs: ["prosthodontics", "bridges", "crowns", "periodontal-treatment"],
  },
  "cosmetic-dentistry": {
    intro:
      "Cosmetic dentistry improves the appearance of your teeth, gums and smile. At Smile Architects, cosmetic treatments are carried out with attention to natural aesthetics — results should look like a better version of your own smile, not an artificial one. Dr. Jeo Tom Charls has additional training in aesthetic dentistry.",
    points: [
      "Teeth whitening (professional in-clinic and take-home)",
      "Tooth-coloured composite bonding",
      "Porcelain and composite veneers",
      "Gum contouring and aesthetic gum treatment",
      "Smile makeover planning",
      "Replacing old metal fillings with tooth-coloured restorations",
    ],
    doctorId: "dr-jeo-tom-charls",
    relatedSlugs: ["smile-design", "veneers", "orthodontics"],
  },
  "smile-design": {
    intro:
      "Digital Smile Design (DSD) is a planning tool that allows you to preview your new smile before any treatment begins. Using photographs, digital design software and detailed clinical measurements, your desired outcome is visualised and agreed upon, then used to guide every step of the actual treatment. It brings together orthodontics, restorative and cosmetic dentistry into a single, coordinated plan.",
    points: [
      "Photographic analysis and digital smile simulation",
      "Combined treatment planning across specialties",
      "Mock-up trials before permanent treatment",
      "Coordination of orthodontics, veneers and restorations",
      "Smile design for weddings, special occasions and career goals",
      "Detailed digital treatment preview and discussion",
    ],
    doctorId: "dr-jeo-tom-charls",
    relatedSlugs: ["cosmetic-dentistry", "veneers", "orthodontics"],
  },
  "root-canal-treatment": {
    intro:
      "Root canal treatment (endodontic treatment) relieves pain and saves teeth that would otherwise need to be extracted. When the nerve or pulp inside a tooth becomes infected or irreversibly inflamed — typically due to deep decay, a crack or trauma — the infected tissue is removed, the root canals are cleaned and shaped, and the tooth is sealed and restored. Modern root canal treatment is performed under local anaesthetic and is generally no more uncomfortable than a routine filling.",
    points: [
      "Single and multi-visit root canal procedures",
      "Treatment of infected, painful or abscessed teeth",
      "Digital X-ray for accurate canal length measurement",
      "Post and core placement where required",
      "Crown placement to restore the treated tooth",
      "Re-treatment of previously root-filled teeth",
    ],
    relatedSlugs: ["general-dentistry", "crowns", "oral-surgery"],
  },
  "restorative-dentistry": {
    intro:
      "Restorative dentistry repairs teeth that have been damaged by decay, wear, trauma or previous unsuccessful treatment. The goal is to restore both the function and appearance of your teeth, allowing you to chew comfortably and smile confidently. Modern restorative materials are predominantly tooth-coloured, meaning that fillings, inlays and onlays can be virtually invisible. The choice of restoration depends on the size and location of the damage, the forces involved in chewing, and aesthetic requirements.",
    points: [
      "Tooth-coloured composite fillings for front and back teeth",
      "Removal and replacement of old amalgam (metal) fillings",
      "Inlays and onlays — lab-made restorations for larger cavities",
      "Ceramic and composite bonding to repair chips and fractures",
      "Build-up of severely broken-down teeth before crown placement",
      "Post and core foundations for root canal treated teeth",
      "Same-day emergency repairs for broken restorations",
    ],
    relatedSlugs: ["crowns", "bridges", "dental-implants", "general-dentistry"],
  },
  "oral-surgery": {
    intro:
      "Oral and maxillofacial surgery covers surgical procedures involving the mouth, jaws, face and related structures. At Smile Architects, Dr. Kishore George (MDS Oral & Maxillofacial Surgery) provides oral surgery as a visiting consultant. Common procedures include wisdom tooth extraction, surgical removal of impacted teeth, cyst removal and pre-implant surgery. More complex surgical cases requiring general anaesthesia or hospitalisation are assessed and referred to appropriate specialist facilities.",
    points: [
      "Simple tooth extractions performed under local anaesthetic",
      "Surgical extractions for broken, impacted or difficult teeth",
      "Impacted wisdom tooth assessment and surgical removal",
      "Pre-implant procedures including bone evaluation",
      "Removal of oral cysts and minor lesions",
      "Frenectomy (removal of restrictive lip or tongue tie)",
      "Alveoloplasty — bone smoothing to prepare for dentures",
      "Biopsy of suspicious oral lesions when indicated",
    ],
    doctorId: "dr-kishore-george",
    relatedSlugs: ["dental-implants", "general-dentistry", "root-canal-treatment", "periodontal-treatment"],
  },
  orthodontics: {
    intro:
      "Orthodontic treatment corrects misaligned teeth and jaws to improve both function and appearance. At Smile Architects, Dr. Jeo Tom Charls — MDS Orthodontics and Dentofacial Orthopaedics — provides a full range of orthodontic treatment for children, adolescents and adults. A detailed orthodontic assessment determines the most appropriate appliance and treatment duration.",
    points: [
      "Comprehensive orthodontic assessment including X-rays and study models",
      "Metal and ceramic fixed appliances (braces)",
      "Damon / self-ligating brace systems",
      "Lingual braces (hidden braces on the inner tooth surface)",
      "Clear aligner treatment",
      "Growth modification and functional appliances for children",
      "Surgical orthodontics in coordination with oral surgeons",
      "Retainers and post-treatment monitoring",
    ],
    doctorId: "dr-jeo-tom-charls",
    relatedSlugs: ["braces", "clear-aligners", "lingual-braces"],
  },
  braces: {
    intro:
      "Dental braces use a system of brackets, wires and elastic ties to gradually reposition teeth. Smile Architects offers metal braces, ceramic (tooth-coloured) braces and self-ligating systems such as Damon brackets. The choice of appliance depends on your clinical needs, aesthetic preferences and budget. Treatment is led by Dr. Jeo Tom Charls, MDS Orthodontics.",
    points: [
      "Metal braces — durable and cost-effective",
      "Ceramic braces — tooth-coloured brackets for a discreet look",
      "Damon / self-ligating brackets — lower friction for potentially shorter treatment",
      "Regular adjustment appointments every 4–8 weeks",
      "Digital X-rays and progress records throughout treatment",
      "Retainers provided at end of treatment",
    ],
    doctorId: "dr-jeo-tom-charls",
    relatedSlugs: ["orthodontics", "lingual-braces", "clear-aligners"],
  },
  "clear-aligners": {
    intro:
      "Clear aligners are a series of transparent, removable trays that gradually move teeth to the desired position. They are virtually invisible when worn, can be removed for eating and cleaning, and are a popular choice for adults and older teenagers. Dr. Jeo Tom Charls has completed ClearPath aligner certification training.",
    points: [
      "Custom-fabricated clear aligner series",
      "Suitable for mild to moderate crowding, spacing and bite issues",
      "Removable for eating, drinking and oral hygiene",
      "Shorter chair-time compared to fixed appliances",
      "ClearPath certified treatment",
      "Digital treatment planning with predicted tooth movements",
      "Retainers on completion",
    ],
    doctorId: "dr-jeo-tom-charls",
    relatedSlugs: ["orthodontics", "braces", "lingual-braces"],
  },
  "lingual-braces": {
    intro:
      "Lingual braces are fixed orthodontic appliances bonded to the inner (tongue-side) surface of the teeth. When you smile, they are completely hidden. Dr. Jeo Tom Charls has completed dedicated lingual orthodontics training and CAD/CAM lingual bracket training, allowing him to offer this highly specialised treatment at Smile Architects.",
    points: [
      "Brackets bonded to the inner surface of teeth — invisible from the front",
      "Suitable for the same range of cases as conventional braces",
      "CAD/CAM customised lingual bracket systems",
      "Dedicated training in lingual orthodontic techniques",
      "Regular monitoring appointments throughout treatment",
      "Retainers provided on completion",
    ],
    doctorId: "dr-jeo-tom-charls",
    relatedSlugs: ["orthodontics", "braces", "clear-aligners"],
  },
  "periodontal-treatment": {
    intro:
      "Periodontal disease affects the gums and bone supporting your teeth. Early stages (gingivitis) cause bleeding and swelling. Left untreated, the condition progresses to periodontitis — where the bone supporting teeth is lost, eventually leading to tooth loss. Periodontal disease has also been linked to systemic health conditions including diabetes and heart disease. At Smile Architects, Dr. Jom T. Kizhakkel (MDS Periodontics & Implantology) provides comprehensive gum disease treatment and ongoing maintenance care.",
    points: [
      "Complete periodontal examination with pocket depth measurements",
      "Professional scaling and root planing (deep cleaning below the gum line)",
      "Tailored oral hygiene instruction and technique demonstration",
      "Antimicrobial therapy where clinically indicated",
      "Regular maintenance appointments to prevent recurrence",
      "Coordination with dental implant treatment when bone loss has occurred",
      "Referral for advanced surgical treatment if needed",
    ],
    doctorId: "dr-jom-t-kizhakkel",
    relatedSlugs: ["general-dentistry", "dental-implants", "oral-surgery"],
  },
  prosthodontics: {
    intro:
      "Prosthodontics is the dental specialty focused on restoring and replacing missing or damaged teeth. Whether you need a single crown, a bridge to replace missing teeth, or complete dentures, prosthodontic treatment aims to restore your ability to chew comfortably, speak clearly and smile confidently. At Smile Architects, Dr. Akarsh Babu (MDS Prosthodontics) provides specialist prosthodontic care as a visiting consultant, while routine crown and bridge work is also available through the general dental team.",
    points: [
      "Single and multiple unit dental crowns (ceramic, zirconia, PFM)",
      "Fixed dental bridges to replace one or more missing teeth",
      "Complete dentures for patients who have lost all teeth",
      "Partial dentures (acrylic or metal framework)",
      "Implant-supported crowns and bridges for a fixed solution",
      "Implant-supported overdentures for improved denture stability",
      "Full-mouth rehabilitation for complex restorative cases",
      "Temporary restorations during treatment",
    ],
    doctorId: "dr-akarsh-babu",
    relatedSlugs: ["crowns", "bridges", "dentures", "dental-implants"],
  },
  crowns: {
    intro:
      "A dental crown covers and protects a weakened, damaged or heavily restored tooth. Unlike a filling which simply fills a hole, a crown encases the entire visible part of the tooth above the gum line, providing strength and protection. Modern crowns are made from tooth-coloured materials — typically all-ceramic or zirconia — that match your natural teeth in both appearance and function. Crowns are commonly needed after root canal treatment, to restore fractured teeth, or to replace large old fillings that have weakened the tooth structure.",
    points: [
      "All-ceramic crowns — made entirely from porcelain for a natural translucent appearance",
      "Zirconia crowns — strong, durable and highly aesthetic",
      "Porcelain-fused-to-metal (PFM) crowns — a metal substructure with porcelain coating",
      "Crowns for root canal treated teeth to prevent fracture",
      "Restoration of teeth with large fillings or fractures",
      "Implant crowns to replace missing teeth",
      "Temporary crowns provided while your final crown is being made",
      "Typically requires two visits: preparation and placement",
    ],
    doctorId: "dr-akarsh-babu",
    relatedSlugs: ["bridges", "dental-implants", "restorative-dentistry", "root-canal-treatment"],
  },
  bridges: {
    intro:
      "A dental bridge literally bridges the gap created by one or more missing teeth. Unlike dentures which are removable, a bridge is fixed — it is permanently cemented to the teeth (or implants) on either side of the gap. A well-made bridge restores your ability to chew properly, maintains the shape of your face by preventing remaining teeth from drifting into the space, and allows you to speak and smile confidently. The lifespan of a bridge depends on good oral hygiene and the health of the supporting teeth.",
    points: [
      "Three-unit bridges (two supporting teeth, one replacement tooth)",
      "Multi-unit bridges for replacing several adjacent teeth",
      "All-ceramic bridges for superior aesthetics in the smile line",
      "Porcelain-fused-to-metal (PFM) bridges for strength and durability",
      "Implant-supported bridges — no need to prepare healthy adjacent teeth",
      "Maryland bonded bridges — a conservative option for front teeth",
      "Temporary bridges provided while your final bridge is being made",
      "Typically requires two visits, similar to crown treatment",
    ],
    doctorId: "dr-akarsh-babu",
    relatedSlugs: ["dental-implants", "crowns", "prosthodontics", "dentures"],
  },
  dentures: {
    intro:
      "Dentures replace missing teeth with removable prosthetic teeth and gums. Complete dentures are used when all teeth in an arch (upper or lower) are missing. Partial dentures are used when some natural teeth remain. Modern dentures are more comfortable and natural-looking than previous generations. However, because they rest on the gums rather than being anchored to teeth or implants, they require an adjustment period and regular maintenance. Implant-supported overdentures offer significantly improved stability and chewing ability compared to conventional dentures.",
    points: [
      "Complete acrylic dentures for patients with no remaining teeth",
      "Partial dentures with acrylic or metal framework (cobalt-chrome)",
      "Immediate dentures placed on the same day as tooth extraction",
      "Implant-supported overdentures — clip onto implants for greatly improved stability",
      "Denture adjustments, relines and repairs",
      "Regular review appointments to check denture fit",
      "Cleaning and maintenance instruction provided",
      "Trial dentures fitted before final denture is made",
    ],
    doctorId: "dr-akarsh-babu",
    relatedSlugs: ["dental-implants", "prosthodontics", "bridges", "oral-surgery"],
  },
  veneers: {
    intro:
      "Dental veneers are thin shells of porcelain or composite resin bonded to the front surface of teeth to improve their colour, shape, size or length. Porcelain veneers are highly lifelike and stain-resistant. Composite veneers can often be completed in a single visit with minimal tooth preparation.",
    points: [
      "Porcelain (ceramic) veneers — lab-fabricated, highly aesthetic",
      "Direct composite veneers — single-visit, minimal preparation",
      "Suitable for discolouration, chips, gaps and minor misalignment",
      "Digital smile design mock-up before any tooth preparation",
      "No or minimal tooth reduction for direct composite veneers",
    ],
    doctorId: "dr-jeo-tom-charls",
    relatedSlugs: ["cosmetic-dentistry", "smile-design", "crowns"],
  },
};

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const treatment = TREATMENTS.find((t) => t.slug === slug);
  if (!treatment) notFound();

  const details = TREATMENT_DETAILS[slug] ?? {
    intro: treatment.shortDescription,
    points: [],
    relatedSlugs: [],
  };

  const performingDoctor = details.doctorId
    ? DOCTORS.find((d) => d.id === details.doctorId)
    : null;

  const relatedTreatments = (details.relatedSlugs ?? [])
    .map((s) => TREATMENTS.find((t) => t.slug === s))
    .filter(Boolean);

  const commercial = TREATMENT_COMMERCIAL[slug];

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: treatment.title,
    description: details.intro,
    bodyLocation: "Mouth",
    followup: `Book a consultation at Smile Architects — ${CLINIC.contact.phoneDisplay}`,
    recognizingAuthority: {
      "@type": "MedicalOrganization",
      name: "Smile Architects",
      url: CLINIC.seo.siteUrl,
    },
    ...(commercial
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            description: commercial.costRangeInr,
          },
        }
      : {}),
  };

  const faqSchema = commercial?.faqs.length
    ? buildFaqPageSchema(commercial.faqs)
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {faqSchema ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      ) : null}

      {/* Page header */}
      <div className="section-padding section-warm">
        <div className="container-xl">
          <RevealFade>
            <Breadcrumb
              items={[
                { label: "Treatments", href: "/treatments" },
                { label: treatment.title },
              ]}
            />
          </RevealFade>
          <RevealUp delay={0.05}>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--color-dark-moss)",
                fontWeight: 400,
                marginTop: "1.5rem",
                marginBottom: "0.75rem",
              }}
            >
              {treatment.title}
            </h1>
            <p style={{ color: "var(--color-olive)", fontSize: "1.0625rem", maxWidth: "560px", lineHeight: 1.65 }}>
              {treatment.shortDescription} — Smile Architects, Pala, Kottayam.
            </p>
          </RevealUp>
        </div>
      </div>

      {/* Main content */}
      <section className="section-padding section-white">
        <div className="container-xl">
          <div className="sidebar-content-grid">
            {/* Left column */}
            <div className="sidebar-main" style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {/* Overview */}
              <RevealUp>
                <div>
                  <div className="accent-line" />
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                      color: "var(--color-dark-moss)",
                      fontWeight: 400,
                      marginBottom: "1rem",
                    }}
                  >
                    {treatment.title} in Pala, Kottayam
                  </h2>
                  <p style={{ color: "var(--color-cafe-noir)", lineHeight: 1.75, fontSize: "1rem" }}>{details.intro}</p>
                  <TreatmentContextLinks slug={slug} />
                </div>
              </RevealUp>

              {commercial ? (
                <RevealUp delay={0.04}>
                  <div className="card-warm" style={{ padding: "1.5rem" }}>
                    <h2
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.5rem",
                        color: "var(--color-dark-moss)",
                        fontWeight: 400,
                        marginBottom: "0.75rem",
                      }}
                    >
                      Cost in Pala &amp; Kottayam District
                    </h2>
                    <p style={{ fontSize: "1.125rem", color: "var(--color-dark-moss)", fontWeight: 600, marginBottom: "0.5rem" }}>
                      {commercial.costRangeInr}
                    </p>
                    <p style={{ fontSize: "0.875rem", color: "var(--color-olive)", lineHeight: 1.6, marginBottom: "1rem" }}>
                      {commercial.costNote}
                    </p>
                    <h3 style={{ fontSize: "1rem", color: "var(--color-dark-moss)", marginBottom: "0.5rem" }}>Typical steps</h3>
                    <ol style={{ margin: "0 0 1rem", paddingLeft: "1.25rem", color: "var(--color-cafe-noir)", lineHeight: 1.65 }}>
                      {commercial.steps.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ol>
                    <p style={{ fontSize: "0.9375rem", color: "var(--color-olive)", marginBottom: "1rem" }}>
                      <strong>Recovery:</strong> {commercial.recovery}
                    </p>
                    <p style={{ fontSize: "0.875rem", color: "var(--color-moss)" }}>
                      Available at{" "}
                      {commercial.availableAt.includes("pala") ? (
                        <Link href="/">dental clinic in Pala</Link>
                      ) : null}
                      {commercial.availableAt.includes("pala") && commercial.availableAt.includes("thrissur") ? " and " : null}
                      {commercial.availableAt.includes("thrissur") ? (
                        <Link href="/thrissur">Thrissur branch</Link>
                      ) : null}
                      .
                    </p>
                  </div>
                </RevealUp>
              ) : null}

              {commercial?.faqs.length ? (
                <RevealUp delay={0.05}>
                  <div>
                    <h2
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.5rem",
                        color: "var(--color-dark-moss)",
                        fontWeight: 400,
                        marginBottom: "1rem",
                      }}
                    >
                      {treatment.title} — FAQs
                    </h2>
                    <PremiumFAQ faqs={commercial.faqs} />
                  </div>
                </RevealUp>
              ) : null}

              {/* What's involved */}
              {details.points.length > 0 && (
                <RevealUp delay={0.05}>
                  <div>
                    <h2
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.5rem",
                        color: "var(--color-dark-moss)",
                        fontWeight: 400,
                        marginBottom: "1rem",
                      }}
                    >
                      What this includes
                    </h2>
                    <StaggerContainer stagger={0.06} style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                      {details.points.map((point) => (
                        <StaggerItem key={point}>
                          <div
                            style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.9375rem", color: "var(--color-cafe-noir)", fontFamily: "var(--font-sans)", lineHeight: 1.6 }}
                          >
                            <span style={{ color: "var(--color-jonquil)", marginTop: "0.1em", flexShrink: 0 }}>
                              <CheckIcon size="sm" />
                            </span>
                            {point}
                          </div>
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </RevealUp>
              )}

              {/* Performing doctor */}
              {performingDoctor && (
                <RevealUp delay={0.05}>
                  <div>
                    <h2
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.5rem",
                        color: "var(--color-dark-moss)",
                        fontWeight: 400,
                        marginBottom: "1rem",
                      }}
                    >
                      Your specialist
                    </h2>
                    <Link
                      href={`/dentists/${performingDoctor.slug}`}
                      style={{ textDecoration: "none" }}
                      aria-label={`View profile of ${performingDoctor.name}`}
                    >
                      <div
                        className="card-light"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1.25rem",
                        }}
                      >
                        <DoctorPhoto name={performingDoctor.name} photo={performingDoctor.photo} size="sm" />
                        <div style={{ flex: 1 }}>
                          <p style={{ fontFamily: "var(--font-serif)", fontSize: "1.0625rem", color: "var(--color-dark-moss)", marginBottom: "0.25rem" }}>
                            {performingDoctor.name}
                          </p>
                          <p className="credentials">
                            {performingDoctor.qualifications} — {performingDoctor.specialty}
                          </p>
                        </div>
                        <span style={{ color: "var(--color-olive)", fontFamily: "var(--font-sans)", flexShrink: 0, fontWeight: 600, display: "flex", alignItems: "center", gap: "0.25rem" }}>
                          View profile <ArrowRightIcon size="sm" />
                        </span>
                      </div>
                    </Link>
                  </div>
                </RevealUp>
              )}

              {/* Related treatments */}
              {relatedTreatments.length > 0 && (
                <div>
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.5rem",
                      color: "var(--color-dark-moss)",
                      fontWeight: 400,
                      marginBottom: "1rem",
                    }}
                  >
                    Related treatments
                  </h2>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem" }}>
                    {relatedTreatments.map((t) =>
                      t ? (
                        <Link
                          key={t.id}
                          href={`/treatments/${t.slug}`}
                          style={{ textDecoration: "none" }}
                          aria-label={`Learn about ${t.title}`}
                        >
                          <div className="card-light" style={{ padding: "1rem 1.25rem" }}>
                            <p style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", color: "var(--color-dark-moss)", marginBottom: "0.25rem" }}>
                              {t.title}
                            </p>
                            <p style={{ fontSize: "0.8125rem", color: "var(--color-olive)", fontFamily: "var(--font-sans)", fontWeight: 600 }}>
                              Learn more →
                            </p>
                          </div>
                        </Link>
                      ) : null
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Right column — sticky appointment form */}
            <RevealFade delay={0.1}>
              <div className="sidebar-sticky-form" style={{ position: "sticky", top: "100px" }}>
                <div
                  className="treatment-booking-card"
                  style={{
                    backgroundColor: "var(--color-white)",
                    borderRadius: "var(--radius-xl)",
                    padding: "2rem",
                    border: "2px solid var(--color-tea-green)",
                    boxShadow: "var(--shadow-md)",
                  }}
                >
                  <AppointmentForm
                    compact
                    surface="light"
                    heading={`Book for ${treatment.title}`}
                  />
                </div>
              </div>
            </RevealFade>
          </div>
        </div>
      </section>

      <SeoTopicCluster pathname={`/treatments/${slug}`} />

      {/* Back to treatments + CTA */}
      <section
        style={{
          backgroundColor: "var(--color-dark-moss)",
          padding: "2.5rem 0",
        }}
      >
        <div
          className="container-xl responsive-cta-bar"
          style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}
        >
          <Link href="/treatments" className="footer-link" style={{ fontWeight: 500 }}>
            ← All treatments
          </Link>
          <div className="mobile-cta-group" style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
            <Link href="/book-appointment" className="btn btn-secondary btn-sm">
              Book Appointment
            </Link>
            <a href={`tel:${CLINIC.contact.phone}`} className="btn btn-ghost-light btn-sm">
              {CLINIC.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
