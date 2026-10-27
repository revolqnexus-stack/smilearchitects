import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { CLINIC } from "@/lib/site-config";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { RevealUp, RevealFade } from "@/components/motion/REVOLQComponents";
import PricingTables from "@/components/sections/PricingTables";
import Link from "next/link";

export const metadata: Metadata = buildMetadata({
  title: "Dental Treatment Prices in Pala, Kottayam | Smile Architects",
  description:
    "Indicative dental treatment prices at Smile Architects, Pala — orthodontics, implants, root canal, crowns, braces and clear aligners. Confirm exact costs at consultation.",
  canonical: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      {/* ── HEADER ─────────────────────────────────────────────── */}
      <div className="section-padding section-warm">
        <div className="container-xl">
          <RevealFade>
            <Breadcrumb items={[{ label: "Pricing", href: "/pricing" }]} />
          </RevealFade>
          <RevealUp delay={0.05}>
            <div style={{ marginTop: "1.5rem" }}>
              <div className="accent-line" />
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  color: "var(--color-dark-moss)",
                  fontWeight: 400,
                  marginBottom: "0.75rem",
                  lineHeight: 1.1,
                }}
              >
                Treatment prices
              </h1>
              <p style={{
                color: "var(--color-cafe-noir)",
                fontSize: "1.0625rem",
                maxWidth: "580px",
                lineHeight: 1.65,
                fontFamily: "var(--font-sans)",
              }}>
                Indicative rates from the 2025 rate chart at Smile Architects, Pala.
                Prices shown in your local currency — confirm exact costs at consultation.
              </p>
            </div>
          </RevealUp>
        </div>
      </div>

      {/* ── PRICING TABLES (client component — currency aware) ── */}
      <PricingTables />

      {/* ── FOOTER NOTE + CTA ──────────────────────────────────── */}
      <section className="section-padding section-dark" style={{ padding: "3.5rem 0" }}>
        <div className="container-xl" style={{ maxWidth: "680px", textAlign: "center" }}>
          <RevealFade>
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
              color: "var(--color-honeydew)",
              fontWeight: 400,
              marginBottom: "1rem",
            }}>
              Book a consultation
            </h2>
            <p style={{
              color: "var(--color-honeydew)",
              opacity: 0.85,
              lineHeight: 1.7,
              marginBottom: "1.75rem",
              fontFamily: "var(--font-sans)",
            }}>
              All prices are indicative. The exact cost depends on your specific case,
              materials chosen, and clinical findings. Dr. Jeo Tom Charls will explain
              the full treatment plan and costs before any procedure begins.
            </p>
            <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/book-appointment" className="btn btn-secondary">
                Book an appointment
              </Link>
              <a href={`tel:${CLINIC.contact.phone}`} className="btn btn-ghost-light">
                {CLINIC.contact.phoneDisplay}
              </a>
            </div>
          </RevealFade>
        </div>
      </section>
    </>
  );
}
