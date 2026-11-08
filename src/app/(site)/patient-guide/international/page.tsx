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
    a: "Pala is approximately 80 km from Kochi International Airport — about 2 hours by road. Taxis and app cabs are available at the airport. The clinic is at Mukkadan Arcade, Maharani Junction, Pala.",
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
              </div>
            </div>
          </RevealUp>
        </div>
      </div>

      {/* ── INTERNATIONAL PATIENT CTA BOX ──────────────────────── */}
      <section className="section-padding section-warm">
        <div className="container-xl">
          <RevealUp>
            <div style={{
              background: "linear-gradient(135deg, var(--color-dark-moss) 0%, #4a5e2e 100%)",
              borderRadius: "1.5rem",
              padding: "clamp(2rem, 5vw, 3.5rem)",
              border: "3px solid var(--color-jonquil)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Decorative elements */}
              <div aria-hidden="true" style={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 180,
                height: 180,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(234,200,0,0.15), transparent 70%)",
              }} />
              <div aria-hidden="true" style={{
                position: "absolute",
                bottom: -40,
                left: -40,
                width: 140,
                height: 140,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(168,191,91,0.1), transparent 70%)",
              }} />

              <div style={{ position: "relative", zIndex: 1, maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
                {/* Badge */}
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "rgba(234,200,0,0.15)",
                  border: "1.5px solid var(--color-jonquil)",
                  borderRadius: "9999px",
                  padding: "0.5rem 1.125rem",
                  marginBottom: "1.5rem",
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-jonquil)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    color: "var(--color-jonquil)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}>
                    International Patients Welcome
                  </span>
                </div>

                {/* Heading */}
                <h2 style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  color: "var(--color-honeydew)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  marginBottom: "1rem",
                }}>
                  Get Your Treatment Plan Before You Travel
                </h2>

                {/* Description */}
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(0.9375rem, 2vw, 1.125rem)",
                  color: "rgba(237,228,211,0.88)",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                  maxWidth: "640px",
                  margin: "0 auto 2rem",
                }}>
                  Send us your X-rays, photos, or previous dental reports via WhatsApp. 
                  Dr. Jeo will review and provide an indicative treatment plan with costs — 
                  before you book your flights to Kerala.
                </p>

                {/* Contact boxes */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "1rem",
                  marginBottom: "2rem",
                }}>
                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${CLINIC.contact.phone.replace("+", "")}?text=Hello, I'm planning to visit Kerala for dental treatment. Can you review my case?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.625rem",
                      backgroundColor: "rgba(255,255,255,0.12)",
                      backdropFilter: "blur(10px)",
                      border: "1.5px solid rgba(234,200,0,0.3)",
                      borderRadius: "1rem",
                      padding: "1.5rem 1.25rem",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.18)";
                      e.currentTarget.style.borderColor = "var(--color-jonquil)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
                      e.currentTarget.style.borderColor = "rgba(234,200,0,0.3)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--color-jonquil)">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <div style={{ textAlign: "center" }}>
                      <p style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: "rgba(237,228,211,0.7)",
                        marginBottom: "0.25rem",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}>
                        WhatsApp
                      </p>
                      <p style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "var(--color-honeydew)",
                        margin: 0,
                      }}>
                        {CLINIC.contact.phoneDisplay}
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${CLINIC.contact.email}?subject=International Patient Enquiry`}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "0.625rem",
                      backgroundColor: "rgba(255,255,255,0.12)",
                      backdropFilter: "blur(10px)",
                      border: "1.5px solid rgba(234,200,0,0.3)",
                      borderRadius: "1rem",
                      padding: "1.5rem 1.25rem",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.18)";
                      e.currentTarget.style.borderColor = "var(--color-jonquil)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.12)";
                      e.currentTarget.style.borderColor = "rgba(234,200,0,0.3)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-jonquil)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <div style={{ textAlign: "center" }}>
                      <p style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        color: "rgba(237,228,211,0.7)",
                        marginBottom: "0.25rem",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}>
                        Email
                      </p>
                      <p style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        color: "var(--color-honeydew)",
                        margin: 0,
                        wordBreak: "break-word",
                      }}>
                        {CLINIC.contact.email}
                      </p>
                    </div>
                  </a>
                </div>

                {/* Features */}
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1.25rem",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                  {[
                    { icon: "✓", text: "Pre-travel consultation" },
                    { icon: "✓", text: "Transparent pricing in INR" },
                    { icon: "✓", text: "Remote aftercare support" },
                  ].map((item) => (
                    <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        backgroundColor: "var(--color-jonquil)",
                        color: "var(--color-dark-moss)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}>
                        {item.icon}
                      </span>
                      <span style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.875rem",
                        color: "var(--color-honeydew)",
                        fontWeight: 500,
                      }}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealUp>
        </div>
      </section>

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
