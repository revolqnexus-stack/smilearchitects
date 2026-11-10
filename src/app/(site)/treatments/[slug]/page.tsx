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
      "General dentistry at Smile Architects provides the foundation of preventive and routine oral care for patients of all ages in Pala and surrounding Kottayam District. Regular dental checkups allow early detection of problems before they become complex or costly. Our comprehensive general dental services include professional teeth cleaning (scaling and polishing), tooth-colored fillings, simple and surgical extractions, and emergency dental care for pain or trauma. We emphasize preventive advice tailored to your individual needs — including diet guidance, proper brushing technique, and fluoride recommendations.",
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
      "Paediatric dentistry at Smile Architects provides specialized dental care for children from infancy through adolescence in a gentle, reassuring environment in Pala, Kottayam. Dr. Renu Ann Mathew (MDS Paediatric & Preventive Dentistry), visiting consultant, treats children across all ages with experience in behavioral management and age-appropriate communication. Early dental visits establish good oral hygiene habits, allow preventive treatments like fluoride and sealants, and address problems like tooth decay or bite development before they worsen. We help make dental visits positive experiences that last into adulthood.",
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
      "Dental implants are titanium posts surgically placed into the jawbone to replace missing tooth roots, providing the most permanent solution for tooth loss. At Smile Architects, Dr. Jom T. Kizhakkel (MDS Periodontics & Implantology) performs dental implant placement at our Pala clinic using digital X-ray for precise planning. Over 3-6 months, the implant integrates with your bone through osseointegration, after which a crown is attached. Implants can replace single teeth, support bridges, or anchor complete dentures, restoring both function and confidence.",
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
      "Cosmetic dentistry at Smile Architects improves the appearance of your teeth, gums, and smile through professional aesthetic treatments in Pala, Kottayam. Dr. Jeo Tom Charls, with additional training in aesthetic dentistry, provides teeth whitening (in-clinic and take-home), composite bonding, porcelain and composite veneers, and gum contouring. Our approach focuses on natural aesthetics — creating results that look like a refined version of your own smile rather than an artificial transformation. All cosmetic work is planned with careful attention to your facial features, tooth proportions, and personal preferences.",
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
      "Digital Smile Design (DSD) at Smile Architects combines photography, digital simulation software, and detailed clinical measurements to plan your complete smile transformation before any treatment begins. Dr. Jeo Tom Charls leads the smile design process, coordinating orthodontic, restorative, and cosmetic procedures into a single comprehensive plan. You'll see a digital preview of your new smile and approve the design before any permanent work is done. This technology-driven approach eliminates guesswork and ensures your final result matches your expectations.",
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
      "Root canal treatment (endodontic treatment) at Smile Architects relieves dental pain and saves teeth that would otherwise require extraction. When the nerve tissue inside a tooth becomes infected or inflamed — typically from deep decay, a crack, or trauma — we remove the infected pulp, clean and shape the root canals, then seal and restore the tooth. Modern root canal treatment under local anaesthetic is generally no more uncomfortable than receiving a routine filling. Our digital X-ray system ensures accurate canal measurement and successful treatment outcomes.",
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
      "Restorative dentistry at Smile Architects repairs teeth damaged by decay, wear, trauma, or previous unsuccessful treatment. The goal is restoring both function and appearance so you can chew comfortably and smile confidently. Modern restorative materials are predominantly tooth-colored — composite fillings, ceramic inlays, and onlays blend invisibly with your natural teeth. The restoration choice depends on damage extent, chewing forces involved, and aesthetic requirements. Treatment preserves as much healthy tooth structure as possible while providing long-lasting, natural-looking results.",
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
      "Oral and maxillofacial surgery at Smile Architects covers surgical procedures of the mouth, jaws, and facial structures. Dr. Kishore George (MDS Oral & Maxillofacial Surgery), visiting consultant, provides wisdom tooth extraction, surgical removal of impacted teeth, oral cyst removal, and pre-implant surgical assessment at our Pala clinic under local anaesthetic. Simple extractions are performed by our general dental team. Complex surgical cases requiring general anaesthesia or hospital admission are evaluated and referred to appropriate specialist facilities.",
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
      "Orthodontic treatment at Smile Architects in Pala, Kottayam District, is led by Dr. Jeo Tom Charls (MDS Orthodontics and Dentofacial Orthopaedics, Kerala State Dental Council Reg. 9451). We offer the full spectrum of orthodontic care — from conventional metal and ceramic braces through to advanced clear aligner systems and lingual (hidden) braces fitted to the inner tooth surfaces. Treatment corrects misaligned teeth and jaw relationships, improving both function and appearance for children, adolescents, and adults. A comprehensive orthodontic assessment including X-rays and clinical examination determines the most appropriate treatment approach and duration.",
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
      "Dental braces at Smile Architects use brackets, wires, and elastic ties to gradually reposition misaligned teeth over 18-24 months (duration varies by case complexity). Dr. Jeo Tom Charls (MDS Orthodontics, Kerala State Dental Council Reg. 9451) offers metal braces, ceramic (tooth-colored) braces, and self-ligating Damon systems at our Pala clinic. The choice depends on your clinical needs, aesthetic preferences, and budget. All braces treatment includes digital X-rays, regular adjustment appointments every 4-8 weeks, and retainers upon completion to maintain your new smile.",
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
      "Clear aligners at Smile Architects are transparent, removable trays that gradually straighten teeth without visible metal braces. Dr. Jeo Tom Charls, a ClearPath certified provider, creates custom aligner series for mild to moderate crowding, spacing, and bite concerns. The aligners are virtually invisible when worn, can be removed for eating and oral hygiene, and typically require shorter chair-time than traditional braces. Treatment involves wearing each set of aligners for 1-2 weeks before progressing to the next in the series, with progress check appointments every 6-8 weeks.",
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
      "Lingual braces at Smile Architects are fixed orthodontic brackets bonded to the inner (tongue-side) surface of teeth, making them completely invisible from the front even when you smile or speak. Dr. Jeo Tom Charls has dedicated lingual orthodontics training and CAD/CAM lingual bracket training — a specialized skill set rare in Kerala. This advanced treatment option handles the same range of orthodontic problems as conventional braces but remains hidden throughout treatment. Suitable for adults and teenagers concerned about brace visibility during professional, social, or personal situations.",
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
      "Periodontal treatment at Smile Architects addresses gum disease affecting the soft tissue and bone supporting your teeth. Dr. Jom T. Kizhakkel (MDS Periodontics & Implantology) provides comprehensive gum disease treatment at our Pala clinic, from early-stage gingivitis causing bleeding and swelling through to advanced periodontitis where bone loss threatens tooth stability. Treatment typically involves professional deep cleaning (scaling and root planing), tailored oral hygiene instruction, and regular maintenance appointments to prevent recurrence. Untreated gum disease has been linked to systemic health conditions including diabetes and heart disease.",
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
  "prosthodontics": {
    intro:
      "Prosthodontics at Smile Architects restores and replaces missing or damaged teeth using crowns, bridges, dentures, and implant-supported prostheses. Dr. Akarsh Babu (MDS Prosthodontics), visiting consultant, provides specialist prosthodontic care for complex restorative cases including full-mouth rehabilitation in Pala. Whether you need a single crown to protect a weakened tooth, a bridge to replace missing teeth, or complete dentures for full arch restoration, prosthodontic treatment aims to restore your ability to chew comfortably, speak clearly, and smile confidently.",
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
      "Dental crowns at Smile Architects cover and protect weakened, damaged, or heavily restored teeth. Unlike fillings that simply fill cavities, a crown encases the entire visible portion of the tooth above the gum line, providing comprehensive strength and protection. Modern crowns are made from tooth-colored materials — all-ceramic or zirconia — that match your natural teeth in appearance and function. Crowns are commonly needed after root canal treatment to prevent fracture, to restore broken teeth, or to replace large old fillings that have weakened tooth structure.",
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
      "Dental bridges at Smile Architects permanently replace one or more missing teeth by bridging the gap with artificial teeth cemented to adjacent natural teeth or implants. Unlike removable dentures, bridges are fixed prosthetics that restore your ability to chew properly, maintain facial shape by preventing remaining teeth from drifting, and allow you to speak and smile confidently. A well-constructed bridge can last 10-15 years with proper oral hygiene and regular dental checkups. Available in all-ceramic for superior aesthetics or porcelain-fused-to-metal for maximum strength.",
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
      "Dentures at Smile Architects replace missing teeth with removable prosthetic teeth and gums. Complete dentures restore full arches when all teeth are lost, while partial dentures fill gaps when some natural teeth remain. Modern dentures are more comfortable and natural-looking than previous generations, though they rest on gums rather than being anchored like implants. Dr. Akarsh Babu (MDS Prosthodontics) provides complete and partial dentures, with implant-supported overdentures available for significantly improved stability and chewing ability at our Pala clinic.",
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
      "Dental veneers at Smile Architects are thin shells of porcelain or composite resin bonded to the front tooth surfaces to improve color, shape, size, or length. Porcelain veneers fabricated in a dental lab are highly lifelike and stain-resistant, while composite veneers can often be completed in a single visit with minimal tooth preparation. Veneers effectively address discoloration resistant to whitening, chips and fractures, small gaps between teeth, and minor misalignment without orthodontic treatment. Digital smile design allows you to preview results before any permanent work begins.",
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
