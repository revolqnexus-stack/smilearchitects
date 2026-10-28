"use client";

/**
 * PatientJourneySection
 * ─────────────────────
 * Two sub-sections on a single dark-moss panel:
 *
 * 1. GUIDE CARDS — "International Patient Guide" + other quick-access
 *    cards (First Visit, Technology, Pricing, Team, Patient Stories)
 *    Each is a warm card with an icon, title, short blurb, and arrow link.
 *
 * 2. WALKTHROUGH — numbered step-by-step of what happens from
 *    enquiry → consultation → treatment → aftercare.
 *    Horizontal timeline on desktop, vertical stack on mobile.
 */

import Link from "next/link";
import { StaggerContainer, StaggerItem, RevealUp, RevealFade } from "@/components/motion/REVOLQComponents";

/* ─── Guide cards ─────────────────────────────────────────────────────────── */

const GUIDE_CARDS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h4M18 12h4M12 2v4M12 18v4"/>
        <path d="M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M6.3 17.7l2.8-2.8M14.9 9.1l2.8-2.8"/>
      </svg>
    ),
    label: "International Patient Guide",
    blurb: "Travelling from the Gulf, UK or abroad for treatment? Everything you need — costs, logistics, what to bring.",
    href: "/patient-guide/international",
    highlight: true,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
    label: "Your First Visit",
    blurb: "What to expect at your first appointment — how long it takes, what we assess, and how treatment is planned.",
    href: "/patient-guide",
    highlight: false,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    label: "Equipment & Technology",
    blurb: "Digital X-ray, CAD/CAM lingual brackets, ClearPath aligners and digital smile design tools.",
    href: "/technology",
    highlight: false,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    ),
    label: "Treatment & Charges",
    blurb: "Indicative 2025 rate chart across all treatments — braces, implants, root canal, crowns and more.",
    href: "/pricing",
    highlight: false,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    label: "Team of Specialists",
    blurb: "MDS orthodontist, periodontist and visiting consultants in surgery, prosthodontics and paediatrics.",
    href: "/dentists",
    highlight: false,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    label: "Patient Reviews",
    blurb: "What patients say about their experience — orthodontics, implants, smile design and routine care.",
    href: "/patient-stories",
    highlight: false,
  },
];

/* ─── Walkthrough steps ────────────────────────────────────────────────────── */

const STEPS = [
  {
    number: "01",
    title: "Enquire",
    body: "Call, WhatsApp or fill the online form. Tell us what you're looking for — we'll confirm availability and answer initial questions before you travel.",
  },
  {
    number: "02",
    title: "Consultation",
    body: "60–90 minute first appointment. Clinical assessment, X-rays, photographs. Dr. Jeo walks you through all options and costs — no pressure.",
  },
  {
    number: "03",
    title: "Treatment plan",
    body: "A written treatment plan with timeline and full cost breakdown. For international patients we can provide this digitally before you arrive.",
  },
  {
    number: "04",
    title: "Treatment",
    body: "Braces fitted, aligners delivered, implant placed — or whatever your plan involves. Regular check-ups keep everything on track.",
  },
  {
    number: "05",
    title: "Aftercare",
    body: "Retainers, follow-ups, remote check-ins for patients abroad. We stay in contact after treatment ends.",
  },
];

/* ─── Component ────────────────────────────────────────────────────────────── */

export default function PatientJourneySection() {
  return (
    <section
      aria-label="Patient guide and journey"
      style={{
        backgroundColor: "var(--color-dark-moss)",
        padding: "5rem 0 5.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background texture */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 20% 0%, rgba(234,200,0,0.07) 0%, transparent 60%), radial-gradient(ellipse at 80% 100%, rgba(126,132,7,0.12) 0%, transparent 55%)",
      }} />

      <div className="container-xl" style={{ position: "relative", zIndex: 1 }}>

        {/* ── Section header ──────────────────────────────────── */}
        <RevealUp>
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ width: 36, height: 3, background: "var(--color-jonquil)", borderRadius: 99, marginBottom: "1.25rem" }} />
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-jonquil)",
              marginBottom: "0.75rem",
            }}>
              Plan Your Visit
            </p>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              fontWeight: 400,
              color: "var(--color-honeydew)",
              lineHeight: 1.15,
              maxWidth: "520px",
              marginBottom: "1rem",
            }}>
              Everything you need<br />before you arrive
            </h2>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
              color: "rgba(237,228,211,0.75)",
              lineHeight: 1.7,
              maxWidth: "480px",
            }}>
              Whether you're a local patient or travelling from abroad — guides, pricing, team profiles and a step-by-step walkthrough of your treatment journey.
            </p>
          </div>
        </RevealUp>

        {/* ── Guide cards grid ────────────────────────────────── */}
        <StaggerContainer
          stagger={0.07}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1rem",
            marginBottom: "4.5rem",
          }}
        >
          {GUIDE_CARDS.map((card) => (
            <StaggerItem key={card.label}>
              <Link href={card.href} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                <div
                  style={{
                    backgroundColor: card.highlight
                      ? "rgba(234,200,0,0.12)"
                      : "rgba(255,255,255,0.05)",
                    border: card.highlight
                      ? "1.5px solid rgba(234,200,0,0.4)"
                      : "1.5px solid rgba(255,255,255,0.1)",
                    borderRadius: "1.125rem",
                    padding: "1.75rem",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.875rem",
                    transition: "background 0.2s ease, border-color 0.2s ease, transform 0.2s ease",
                    cursor: "pointer",
                  }}
                  className="journey-card"
                >
                  {/* Icon */}
                  <div style={{
                    width: 52,
                    height: 52,
                    borderRadius: "0.875rem",
                    backgroundColor: card.highlight
                      ? "rgba(234,200,0,0.18)"
                      : "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: card.highlight ? "var(--color-jonquil)" : "rgba(237,228,211,0.8)",
                    flexShrink: 0,
                  }}>
                    {card.icon}
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.0625rem",
                      fontWeight: 500,
                      color: card.highlight ? "var(--color-jonquil)" : "var(--color-honeydew)",
                      marginBottom: "0.5rem",
                      lineHeight: 1.3,
                    }}>
                      {card.label}
                    </p>
                    <p style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.875rem",
                      color: "rgba(237,228,211,0.65)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}>
                      {card.blurb}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    color: card.highlight ? "var(--color-jonquil)" : "rgba(237,228,211,0.5)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                  }}>
                    Explore
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ── Walkthrough ─────────────────────────────────────── */}
        <RevealFade>
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "3.5rem",
          }}>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-jonquil)",
              marginBottom: "0.75rem",
            }}>
              Your Treatment Journey
            </p>
            <h3 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.375rem, 2.5vw, 2rem)",
              fontWeight: 400,
              color: "var(--color-honeydew)",
              marginBottom: "3rem",
              lineHeight: 1.2,
            }}>
              From first contact to finished smile
            </h3>

            {/* Steps */}
            <div className="walkthrough-steps">
              {STEPS.map((step, i) => (
                <div key={step.number} className="walkthrough-step">
                  {/* Connector line (between steps) */}
                  {i < STEPS.length - 1 && (
                    <div className="walkthrough-connector" aria-hidden="true" />
                  )}

                  {/* Number badge */}
                  <div style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    backgroundColor: "rgba(234,200,0,0.12)",
                    border: "1.5px solid rgba(234,200,0,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginBottom: "1rem",
                  }}>
                    <span style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--color-jonquil)",
                      letterSpacing: "0.04em",
                    }}>
                      {step.number}
                    </span>
                  </div>

                  <h4 style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1rem",
                    fontWeight: 500,
                    color: "var(--color-honeydew)",
                    marginBottom: "0.5rem",
                    lineHeight: 1.3,
                  }}>
                    {step.title}
                  </h4>
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.875rem",
                    color: "rgba(237,228,211,0.62)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}>
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealFade>

      </div>

      <style>{`
        .journey-card:hover {
          background-color: rgba(255,255,255,0.09) !important;
          border-color: rgba(255,255,255,0.22) !important;
          transform: translateY(-3px);
        }

        /* Walkthrough — horizontal on desktop */
        .walkthrough-steps {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0;
          position: relative;
        }
        .walkthrough-step {
          position: relative;
          padding-right: 1.5rem;
        }
        .walkthrough-connector {
          position: absolute;
          top: 24px;
          right: 0;
          left: calc(48px + 0.75rem);
          height: 1px;
          background: linear-gradient(90deg, rgba(234,200,0,0.3), rgba(234,200,0,0.08));
        }

        /* Mobile — vertical stack */
        @media (max-width: 900px) {
          .walkthrough-steps {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .walkthrough-step {
            display: grid;
            grid-template-columns: 48px 1fr;
            grid-template-rows: auto auto;
            column-gap: 1.25rem;
            padding-right: 0;
          }
          .walkthrough-step > div:first-child {
            grid-row: 1 / 3;
            margin-bottom: 0;
            align-self: start;
          }
          .walkthrough-step h4 { margin-bottom: 0.25rem; }
          .walkthrough-connector {
            display: none;
          }
        }

        @media (max-width: 640px) {
          /* Guide cards single column on very small screens */
        }
      `}</style>
    </section>
  );
}
