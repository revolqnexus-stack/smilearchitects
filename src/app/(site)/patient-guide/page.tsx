import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/ui/Breadcrumb";
import LinkRichText from "@/components/seo/LinkRichText";
import SeoTopicCluster from "@/components/seo/SeoTopicCluster";
import { PATIENT_GUIDE_PAGES, PATIENT_GUIDE_SLUGS } from "@/lib/seo/patient-guide-pages";
import type { LinkSegment } from "@/lib/seo/internal-links";

export const metadata: Metadata = buildMetadata({
  title: "Patient Guide | Dental Care Topics & Clinic Links",
  description:
    "Patient guide hub for Smile Architects — clinic locations in Pala and Thrissur, braces and aligners, dental implants and smile design. Internal topics for booking and research.",
  canonical: "/patient-guide",
});

const hubIntro: LinkSegment[] = [
  { type: "text", value: "This guide connects our main pages for patients researching " },
  { type: "link", href: "/local/pala", label: "dental care in Pala" },
  { type: "text", value: ", " },
  { type: "link", href: "/local/thrissur", label: "care in Thrissur" },
  { type: "text", value: ", and specialist services such as " },
  { type: "link", href: "/orthodontics", label: "orthodontics" },
  { type: "text", value: " and " },
  { type: "link", href: "/treatments/dental-implants", label: "implants" },
  { type: "text", value: ". Use the topics below or browse " },
  { type: "link", href: "/dental-guides", label: "dental guides" },
  { type: "text", value: " and " },
  { type: "link", href: "/site-map", label: "the full site map" },
  { type: "text", value: "." },
];

export default function PatientGuideHubPage() {
  return (
    <>
      <div className="section-padding section-warm">
        <div className="container-xl">
          <Breadcrumb items={[{ label: "Patient guide", href: "/patient-guide" }]} />
          <div style={{ maxWidth: "720px", marginTop: "1.5rem" }}>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                color: "var(--color-dark-moss)",
                fontWeight: 400,
                marginBottom: "1rem",
              }}
            >
              Patient guide
            </h1>
            <LinkRichText
              segments={hubIntro}
              style={{ color: "var(--color-olive)", fontSize: "1.0625rem", lineHeight: 1.75, marginBottom: "2rem" }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {PATIENT_GUIDE_SLUGS.map((slug) => {
                const page = PATIENT_GUIDE_PAGES[slug];
                return (
                  <Link
                    key={slug}
                    href={`/patient-guide/${slug}`}
                    className="card-warm"
                    style={{ padding: "1.25rem 1.5rem", textDecoration: "none", display: "block" }}
                  >
                    <h2 style={{ fontSize: "1.125rem", color: "var(--color-dark-moss)", marginBottom: "0.35rem" }}>
                      {page.h1}
                    </h2>
                    <p style={{ margin: 0, fontSize: "0.9375rem", color: "var(--color-olive)", lineHeight: 1.6 }}>
                      {page.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <SeoTopicCluster pathname="/patient-guide" heading="All related topics" />
    </>
  );
}
