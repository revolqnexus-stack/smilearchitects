import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { CLINIC } from "@/lib/site-config";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { RevealUp, RevealFade, StaggerContainer, StaggerItem } from "@/components/motion/REVOLQComponents";

export const metadata: Metadata = buildMetadata({
  title: "International Patient Guide | Smile Architects, Pala Kerala",
  description:
    "Travelling to Kerala for dental treatment? Complete guide for international and NRI patients — costs, what to bring, how to plan your visit to Smile Architects, Pala.",
  canonical: "/patient-guide/international",
});

const STEPS = [
  {
    number: "01",
    title: "Enquire before you travel",
    body: "Send your X-rays, photographs or previous dental reports via WhatsApp or email. Dr. Jeo will review and give you an indicative treatment plan and cost before you book flights.",
    cta: null,
  },
  {
    number: "02",
    title: "Book your consultation",
    body: "Schedule a 60–90 minute first appointment. If you're coming from abroad, let us know your travel dates and we'll consolidate as much as possible into your first visit — assessment, X-rays, photographs, and a full treatment discussion.",
    cta: null,
  },
  {
    number: "03",
    title: "Receive your treatment plan",
    body: "A written plan with itemised costs in INR, treatment timeline, and number of visits required. For multi-stage treatments we'll tell you honestly whether one trip is enough or whether two is more realistic.",
    cta: null,
  },
  {
    number: "04",
    title: "Treatment",
    body: "We work efficiently for visiting patients. Simple procedures — extractions, fillings, scaling, whitening, composite veneers — can often be completed in a single visit. Orthodontic and implant cases are staged across visits.",
    cta: null,
  },
  {
    number: "05",
    title: "Remote aftercare",
    body: "After you return home, we stay in contact via WhatsApp. Send photographs, ask questions, report concerns. Retainer checks and minor adjustments are reviewed remotely where possible.",
    cta: null,
  },
];

const FAQS = [
  {
    q: "Can I get a treatment quote before I arrive?",
    a: "Yes. Send X-rays and photographs via WhatsApp (+91 82899 33331) or email. Dr. Jeo will review and provide an indicative cost. Final pricing is confirmed after the in-person assessment.",
  },
  {
    q: "How many days should I plan for?",
    a: "For a single procedure (extraction, filling, scaling, whitening) — one appointment, one or two days. For braces or aligner fitting — two appointments over 3–5 days. Implants require multiple visits across 4–6 months.",
  },
  {
    q: "What treatments can be completed in one visit?",
    a: "Scaling and cleaning, tooth extractions, composite fillings, teeth whitening, composite veneers, and orthodontic consultations can typically be completed in a single appointment.",
  },
  {
    q: "How do I get to the clinic from Kochi airport?",
    a: "Pala is approximately 80 km from Kochi International Airport — about 2 hours by road. Taxis and app cabs are available at the airport. The clinic is at Mukkadan Arcade, Lalam Junction, Pala.",
  },
  {
    q: "Are costs lower than in the UK, UAE or US?",
    a: "Significantly. Dental implants, braces, veneers and cosmetic work in India are typically 60–80% less than equivalent treatment in the UK or UAE, using the same international-standard materials.",
  },
  {
    q: "Can I pay in USD, AED or GBP?",
    a: "Treatment is priced in INR. Most patients pay by card or UPI. International card payments are accepted. See the pricing page for indicative costs converted to your currency.",
  },
];

const WHY_ITEMS = [
  {
    title: "MDS-qualified specialist",
    body: "Dr. Jeo Tom Charls holds an MDS in Orthodontics — a postgraduate specialist degree, not just a general dental qualification. Certified Invisalign and Spark provider.",
  },
  {
    title: "Lingual braces — rare in Kerala",
    body: "CAD/CAM lingual (hidden) braces are available here. One of very few clinics in Kerala with the specialist training and equipment to offer this.",
  },
  {
    title: "Transparent pricing",
    body: "Written cost breakdown before any treatment begins. No hidden charges. Full rate chart published on the website.",
  },
  {
    title: "English-speaking team",
    body: "All consultations are conducted in English. No language barrier for NRI or international patients.",
  },
  {
    title: "Central Kerala location",
    body: "Pala is well-connected — 2 hours from Kochi airport, accessible from Thrissur, Kottayam and the broader Meenachil region.",
  },
  {
    title: "Remote follow-up",
    body: "WhatsApp-based aftercare for patients returning abroad. Regular check-ins, photograph reviews and guidance without needing to return.",
  },
];

export default function InternationalPatientGuidePage() {
  return (
    <>
      {/* ── HEADER ─────────────────────────────────────────────── */}
      <div className="section-padding section-dark" style={{ position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse at 15% 50%, rgba(234,200,0,0.08), transparent 55%), radial-gradient(ellipse at 85% 20%, rgba(126,132,7,0.1), transparent 50%)",
        }} />
        <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>
          <RevealFade>
            <Breadcrumb
              items={[
                { label: "Patient Guide", href: "/patient-guide" },
                { label: "International Patients", href: "/patient-guide/international" },
              ]}
            />
          </RevealFade>
          <RevealUp delay={0.05}>
            <div style={{ marginTop: "1.5rem", maxWidth: "640px" }}>
              <div style={{ width: 36, height: 3, background: "var(--color-jonquil)", borderRadius: 99, marginBottom: "1.25rem" }} />
              <h1 style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                color: "var(--color-honeydew)",
                fontWeight: 400,
                lineHeight: 1.1,
                marginBottom: "1.125rem",
              }}>
                International Patient Guide
              </h1>
              <p style={{
                color: "rgba(237,228,211,0.8)",
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                fontFamily: "var(--font-sans)",
                marginBottom: "2rem",
              }}>
                Travelling from the Gulf, UK, Europe or elsewhere for dental treatment in Kerala?
                This guide covers everything — how to plan your visit, what to send us in advance,
                how many days you'll need, and how we support you after you return home.
              </p>
              <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
                <a
                  href={`https://wa.me/${CLINIC.contact.phone.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    backgroundColor: "var(--color-jonquil)",
                    color: "var(--color-dark-moss)",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                    padding: "0.875rem 1.625rem",
                    borderRadius: "9999px",
                    textDecoration: "none",
                  }}
                >
                  WhatsApp us your X-rays
                </a>
                <Link href="/pricing" style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  border: "1.5px solid rgba(237,228,211,0.35)",
                  color: "var(--color-honeydew)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  padding: "0.875rem 1.625rem",
                  borderRadius: "9999px",
                  textDecoration: "none",
                }}>
                  View pricing
                </Link>
              </div>
            </div>
          </RevealUp>
        </div>
      </div>

      {/* ── WHY SMILE ARCHITECTS ───────────────────────────────── */}
      <section className="section-padding section-warm">
        <div className="container-xl">
          <RevealUp>
            <div className="accent-line" />
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.13em", textTransform: "uppercase", color: "var(--color-olive)", marginBottom: "0.75rem" }}>
              Why choose us
            </p>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "var(--color-dark-moss)",
              fontWeight: 400,
              marginBottom: "2.5rem",
              lineHeight: 1.15,
            }}>
              What makes Smile Architects worth the trip
            </h2>
          </RevealUp>
          <StaggerContainer stagger={0.07} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {WHY_ITEMS.map((item) => (
              <StaggerItem key={item.title}>
                <div style={{
                  backgroundColor: "var(--color-white)",
                  borderRadius: "1rem",
                  padding: "1.625rem",
                  border: "1.5px solid var(--color-tea-green)",
                  height: "100%",
                }}>
                  <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1rem", fontWeight: 500, color: "var(--color-dark-moss)", marginBottom: "0.625rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.875rem", color: "var(--color-cafe-noir)", lineHeight: 1.7, margin: 0 }}>
                    {item.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── WALKTHROUGH ────────────────────────────────────────── */}
      <section className="section-padding section-white">
        <div className="container-xl" style={{ maxWidth: "760px" }}>
          <RevealUp>
            <div className="accent-line" />
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.13em", textTransform: "uppercase", color: "var(--color-olive)", marginBottom: "0.75rem" }}>
              Step by step
            </p>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "var(--color-dark-moss)",
              fontWeight: 400,
              marginBottom: "3rem",
              lineHeight: 1.15,
            }}>
              How your visit works
            </h2>
          </RevealUp>
          <StaggerContainer stagger={0.1} style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {STEPS.map((step, i) => (
              <StaggerItem key={step.number}>
                <div style={{ display: "flex", gap: "1.5rem", paddingBottom: i < STEPS.length - 1 ? "2.5rem" : 0, position: "relative" }}>
                  {/* Vertical line */}
                  {i < STEPS.length - 1 && (
                    <div aria-hidden="true" style={{
                      position: "absolute",
                      left: 23,
                      top: 48,
                      bottom: 0,
                      width: 1,
                      background: "linear-gradient(to bottom, var(--color-tea-green), rgba(168,191,91,0.1))",
                    }} />
                  )}
                  {/* Number */}
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    backgroundColor: "var(--color-honeydew)",
                    border: "2px solid var(--color-tea-green)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 700, color: "var(--color-dark-moss)", letterSpacing: "0.04em" }}>
                      {step.number}
                    </span>
                  </div>
                  {/* Content */}
                  <div style={{ paddingTop: "0.625rem" }}>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.125rem", fontWeight: 500, color: "var(--color-dark-moss)", marginBottom: "0.5rem" }}>
                      {step.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--color-cafe-noir)", lineHeight: 1.75, margin: 0 }}>
                      {step.body}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── FAQs ───────────────────────────────────────────────── */}
      <section className="section-padding section-light">
        <div className="container-xl" style={{ maxWidth: "760px" }}>
          <RevealUp>
            <div className="accent-line" />
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "var(--color-dark-moss)",
              fontWeight: 400,
              marginBottom: "2.5rem",
              lineHeight: 1.15,
            }}>
              Frequently asked questions
            </h2>
          </RevealUp>
          <StaggerContainer stagger={0.07} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {FAQS.map((faq) => (
              <StaggerItem key={faq.q}>
                <div style={{
                  backgroundColor: "var(--color-white)",
                  borderRadius: "0.875rem",
                  padding: "1.5rem",
                  border: "1.5px solid var(--color-tea-green)",
                }}>
                  <h3 style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", fontWeight: 600, color: "var(--color-dark-moss)", marginBottom: "0.625rem" }}>
                    {faq.q}
                  </h3>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9375rem", color: "var(--color-cafe-noir)", lineHeight: 1.7, margin: 0 }}>
                    {faq.a}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="section-dark" style={{ padding: "3.5rem 0" }}>
        <div className="container-xl" style={{ maxWidth: "600px", textAlign: "center" }}>
          <RevealFade>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)", color: "var(--color-honeydew)", fontWeight: 400, marginBottom: "1rem" }}>
              Ready to plan your visit?
            </h2>
            <p style={{ color: "var(--color-honeydew)", opacity: 0.8, lineHeight: 1.7, marginBottom: "1.75rem", fontFamily: "var(--font-sans)" }}>
              Send your X-rays or photographs on WhatsApp and we'll give you an indicative treatment plan before you book travel.
            </p>
            <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", justifyContent: "center" }}>
              <a
                href={`https://wa.me/${CLINIC.contact.phone.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                WhatsApp {CLINIC.contact.phoneDisplay}
              </a>
              <Link href="/book-appointment" className="btn btn-ghost-light">
                Book online
              </Link>
            </div>
          </RevealFade>
        </div>
      </section>
    </>
  );
}
