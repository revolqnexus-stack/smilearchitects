"use client";

/**
 * PatientJourneySection
 * ─────────────────────
 * Clean 4-step journey with modern timeline design
 * Horizontal on desktop, vertical on mobile
 */

import { RevealUp } from "@/components/motion/REVOLQComponents";

const STEPS = [
  {
    number: "1",
    title: "Book Consultation",
    body: "Call, WhatsApp or book online. We'll schedule your 60-minute assessment with Dr. Jeo Tom Charls.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
  {
    number: "2",
    title: "Clinical Assessment",
    body: "Complete examination, digital X-rays, photographs. Dr. Jeo explains all options and answers your questions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    number: "3",
    title: "Treatment Plan",
    body: "Written plan with timeline, full cost breakdown, and payment options. Take time to decide — no pressure.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <path d="M9 15h6M12 18v-6"/>
      </svg>
    ),
  },
  {
    number: "4",
    title: "Start Treatment",
    body: "Braces fitted, aligners delivered, or procedure completed. Regular check-ups keep everything on track.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
];

export default function PatientJourneySection() {
  return (
    <section
      aria-label="Your treatment journey"
      style={{
        backgroundColor: "var(--color-honeydew)",
        padding: "clamp(4rem, 8vw, 6rem) 0",
        position: "relative",
      }}
    >
      <div className="container-xl">

        {/* Header */}
        <RevealUp>
          <div style={{ textAlign: "center", marginBottom: "clamp(2rem, 4vw, 3rem)", maxWidth: "640px", margin: "0 auto 3rem" }}>
            <div style={{ 
              width: 48, 
              height: 3, 
              background: "var(--color-jonquil)", 
              borderRadius: 99, 
              marginBottom: "1.25rem",
              margin: "0 auto 1.25rem"
            }} />
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              color: "var(--color-dark-moss)",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}>
              Your Treatment Journey
            </h2>
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(0.9375rem, 2vw, 1.0625rem)",
              color: "var(--color-cafe-noir)",
              lineHeight: 1.7,
              opacity: 0.8,
            }}>
              From first contact to finished smile — simple, transparent, and stress-free
            </p>
          </div>
        </RevealUp>

        {/* International Patient Guide Card */}
        <RevealUp delay={0.1}>
          <a
            href="/patient-guide/international"
            style={{
              display: "block",
              maxWidth: "720px",
              margin: "0 auto 4rem",
              backgroundColor: "white",
              borderRadius: "1.5rem",
              padding: "2rem 2.5rem",
              border: "2px solid var(--color-jonquil)",
              boxShadow: "0 4px 24px rgba(234,200,0,0.12)",
              textDecoration: "none",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            className="international-guide-card"
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem" }}>
              {/* Icon */}
              <div style={{
                width: 56,
                height: 56,
                borderRadius: "1rem",
                background: "linear-gradient(135deg, var(--color-jonquil) 0%, #d4b000 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                flexShrink: 0,
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h4M18 12h4M12 2v4M12 18v4"/>
                  <path d="M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M6.3 17.7l2.8-2.8M14.9 9.1l2.8-2.8"/>
                </svg>
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  color: "var(--color-dark-moss)",
                  marginBottom: "0.5rem",
                  lineHeight: 1.3,
                }}>
                  International Patient Guide
                </h3>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1rem",
                  color: "var(--color-cafe-noir)",
                  lineHeight: 1.65,
                  margin: 0,
                  opacity: 0.8,
                }}>
                  Travelling from the Gulf, UK or abroad for treatment? Everything you need — costs, logistics, what to bring, and how to plan your visit.
                </p>
              </div>

              {/* Arrow */}
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "var(--color-tea-green)",
                flexShrink: 0,
                color: "var(--color-dark-moss)",
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </a>
        </RevealUp>

        {/* Timeline */}
        <div className="journey-timeline">
          {STEPS.map((step, i) => (
            <div key={step.number} className="journey-step">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="journey-connector" aria-hidden="true" />
              )}

              {/* Icon circle */}
              <div className="journey-icon">
                {step.icon}
              </div>

              {/* Content */}
              <div className="journey-content">
                <div className="journey-number">{step.number}</div>
                <h3 className="journey-title">{step.title}</h3>
                <p className="journey-body">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .international-guide-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(234,200,0,0.2) !important;
        }

        @media (max-width: 640px) {
          .international-guide-card > div {
            flex-direction: column !important;
            text-align: center !important;
          }
          .international-guide-card > div > div:last-child {
            display: none !important;
          }
        }

        /* Desktop — horizontal timeline */
        .journey-timeline {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          position: relative;
          max-width: 1100px;
          margin: 0 auto;
        }

        .journey-step {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 1.5rem;
        }

        .journey-connector {
          position: absolute;
          top: 36px;
          left: calc(50% + 36px);
          right: calc(-50% + 36px);
          height: 2px;
          background: linear-gradient(90deg, var(--color-jonquil) 0%, rgba(234,200,0,0.3) 100%);
          z-index: 0;
        }

        .journey-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: white;
          border: 3px solid var(--color-jonquil);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-dark-moss);
          flex-shrink: 0;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
          box-shadow: 0 4px 16px rgba(234,200,0,0.15);
        }

        .journey-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .journey-number {
          font-family: var(--font-serif);
          font-size: 2.25rem;
          font-weight: 400;
          color: var(--color-jonquil);
          line-height: 1;
          opacity: 0.5;
        }

        .journey-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--color-dark-moss);
          line-height: 1.3;
          margin: 0;
        }

        .journey-body {
          font-family: var(--font-sans);
          font-size: 0.9375rem;
          color: var(--color-cafe-noir);
          line-height: 1.65;
          margin: 0;
          opacity: 0.75;
        }

        /* Tablet — 2 columns */
        @media (max-width: 900px) {
          .journey-timeline {
            grid-template-columns: repeat(2, 1fr);
            gap: 3rem 2rem;
          }

          .journey-step:nth-child(1) .journey-connector {
            left: calc(50% + 36px);
            right: calc(-100% - 2rem + 50% + 36px);
          }

          .journey-step:nth-child(2) .journey-connector,
          .journey-step:nth-child(3) .journey-connector {
            display: none;
          }

          .journey-step:nth-child(3) .journey-connector {
            display: block;
            top: auto;
            bottom: calc(-3rem - 36px);
            left: calc(50%);
            right: auto;
            width: 2px;
            height: 3rem;
            background: linear-gradient(180deg, var(--color-jonquil) 0%, rgba(234,200,0,0.3) 100%);
          }
        }

        /* Mobile — vertical stack */
        @media (max-width: 640px) {
          .journey-timeline {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            padding-left: 0;
          }

          .journey-step {
            flex-direction: row;
            text-align: left;
            padding: 0;
            gap: 1.25rem;
            align-items: flex-start;
          }

          .journey-connector {
            display: none !important;
          }

          .journey-icon {
            width: 56px;
            height: 56px;
            margin-bottom: 0;
            flex-shrink: 0;
          }

          .journey-content {
            flex: 1;
            align-items: flex-start;
            text-align: left;
          }

          .journey-number {
            font-size: 1.75rem;
          }

          .journey-title {
            font-size: 1.125rem;
          }

          .journey-body {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </section>
  );
}
