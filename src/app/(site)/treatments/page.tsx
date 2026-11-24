import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { TREATMENTS } from "@/lib/site-config";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { TreatmentIconFor, ArrowRightIcon } from "@/components/ui/icons";
import TreatmentsBentoGrid from "@/components/sections/TreatmentsBentoGrid";

export const metadata: Metadata = buildMetadata({
  title: "Dental Treatments in Pala | Braces, Implants & Complete Dental Care",
  description:
    "Complete dental treatments at Smile Architects, Pala, Kottayam District: orthodontics (braces, clear aligners, lingual braces), dental implants, smile design, root canal treatment, cosmetic dentistry, pediatric dentistry, periodontal treatment, crowns, bridges, dentures, and general dentistry. Led by Dr. Jeo Tom Charls, MDS Orthodontics, at Maharani Junction, Pala.",
  canonical: "/treatments",
});

export default function TreatmentsPage() {
  return (
    <>
      {/* Hero section — botanical warm background */}
      <div className="section-padding section-warm">
        <div className="container-xl">
          <Breadcrumb items={[{ label: "Treatments", href: "/treatments" }]} />
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--color-dark-moss)",
              fontWeight: 400,
              marginTop: "1.5rem",
              marginBottom: "0.75rem",
              lineHeight: 1.15,
            }}
          >
            Dental treatments in Pala
          </h1>
          <p style={{ 
            color: "var(--color-olive)", 
            fontSize: "1.0625rem", 
            maxWidth: "560px", 
            lineHeight: 1.65,
            fontFamily: "var(--font-sans)"
          }}>
            Advanced orthodontic centre and smile design in Pala — braces, clear aligners,
            lingual systems and digital smile planning — plus implants, cosmetic care and general dentistry.
          </p>
        </div>
      </div>

      {/* Bento Grid — Editorial photo gallery */}
      <section className="section-padding section-white">
        <div className="container-xl">
          <div style={{ marginBottom: "2.5rem", textAlign: "center" }}>
            <div className="accent-line" style={{ margin: "0 auto 1rem" }} />
            <h2 style={{ 
              fontFamily: "var(--font-serif)", 
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", 
              color: "var(--color-dark-moss)", 
              fontWeight: 400,
              marginBottom: "0.5rem"
            }}>
              Featured treatments
            </h2>
            <p style={{ 
              color: "var(--color-olive)", 
              fontSize: "1rem", 
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.65
            }}>
              Real patient transformations and clinical photography from our Pala clinic
            </p>
          </div>
          <TreatmentsBentoGrid />
        </div>
      </section>

      {/* All Treatments — Simple cards for complete list */}
      <section className="section-padding section-light">
        <div className="container-xl">
          <div style={{ marginBottom: "2.5rem", textAlign: "center" }}>
            <div className="accent-line" style={{ margin: "0 auto 1rem" }} />
            <h2 style={{ 
              fontFamily: "var(--font-serif)", 
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)", 
              color: "var(--color-dark-moss)", 
              fontWeight: 400,
              marginBottom: "0.5rem"
            }}>
              All treatments
            </h2>
            <p style={{ 
              color: "var(--color-olive)", 
              fontSize: "1rem", 
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.65
            }}>
              Complete range of dental services at Smile Architects, Pala
            </p>
          </div>

          <div className="treatments-grid">
            {TREATMENTS.map((treatment) => (
              <Link
                key={treatment.id}
                href={`/treatments/${treatment.slug}`}
                className="treatment-card-link"
                aria-label={`Learn about ${treatment.title} in Pala`}
              >
                <div className="card-treatment">
                  {/* Treatment icon */}
                  <div style={{ marginBottom: "1.125rem", color: "var(--color-dark-moss)" }}>
                    <TreatmentIconFor slug={treatment.slug} size="lg" />
                  </div>
                  <h3 className="treatment-card-title">{treatment.title}</h3>
                  <p className="treatment-card-body">{treatment.shortDescription}</p>
                  <span className="card-learn-more">
                    Learn more <ArrowRightIcon size="sm" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section — dark moss background */}
      <section className="section-padding section-dark">
        <div className="container-xl" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem" }}>
          <h2 style={{ 
            fontFamily: "var(--font-serif)", 
            fontSize: "clamp(1.75rem, 3vw, 2.25rem)", 
            color: "var(--color-honeydew)", 
            fontWeight: 400,
            maxWidth: "520px",
            lineHeight: 1.2
          }}>
            Not sure which treatment you need?
          </h2>
          <p style={{ 
            color: "var(--color-honeydew)", 
            opacity: 0.85,
            maxWidth: "460px", 
            lineHeight: 1.65,
            fontSize: "1rem",
            fontFamily: "var(--font-sans)"
          }}>
            Book a consultation at Smile Architects and our team will assess your dental health and
            discuss the most appropriate treatment options for you.
          </p>
          <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", justifyContent: "center", marginTop: "0.5rem" }}>
            <Link href="/book-appointment" className="btn btn-secondary btn-lg">Book a Consultation</Link>
            <Link href="/contact" className="btn btn-ghost-light">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
