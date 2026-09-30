import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/ui/Breadcrumb";
import LinkRichText from "@/components/seo/LinkRichText";
import SeoTopicCluster from "@/components/seo/SeoTopicCluster";
import {
  getPatientGuide,
  PATIENT_GUIDE_SLUGS,
  type PatientGuideSlug,
} from "@/lib/seo/patient-guide-pages";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PATIENT_GUIDE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPatientGuide(slug);
  if (!page) return {};
  return buildMetadata({
    title: page.title,
    description: page.description,
    canonical: `/patient-guide/${page.slug}`,
  });
}

export default async function PatientGuideTopicPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPatientGuide(slug);
  if (!page) notFound();

  return (
    <>
      <div className="section-padding section-warm">
        <div className="container-xl">
          <Breadcrumb
            items={[
              { label: "Patient guide", href: "/patient-guide" },
              { label: page.h1, href: `/patient-guide/${page.slug}` },
            ]}
          />
          <article style={{ maxWidth: "720px", marginTop: "1.5rem" }}>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                color: "var(--color-dark-moss)",
                fontWeight: 400,
                marginBottom: "1.25rem",
              }}
            >
              {page.h1}
            </h1>
            {page.paragraphs.map((segments, i) => (
              <LinkRichText
                key={i}
                segments={segments}
                style={{
                  color: "var(--color-olive)",
                  fontSize: "1.0625rem",
                  lineHeight: 1.75,
                  marginBottom: "1.25rem",
                }}
              />
            ))}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.5rem" }}>
              <Link href="/book-appointment" className="btn btn-primary">
                Book appointment
              </Link>
              <Link href="/patient-guide" className="btn btn-secondary">
                All guide topics
              </Link>
            </div>
          </article>
        </div>
      </div>
      <SeoTopicCluster pathname={`/patient-guide/${page.slug as PatientGuideSlug}`} />
    </>
  );
}
