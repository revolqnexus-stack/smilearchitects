import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { TOPIC_CLUSTERS, type TopicClusterId } from "@/lib/seo/internal-links";
import { PATIENT_GUIDE_SLUGS, PATIENT_GUIDE_PAGES } from "@/lib/seo/patient-guide-pages";
import { LOCAL_LANDING_SLUGS } from "@/lib/seo/local-landing";
import { TREATMENTS } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Site Map | Smile Architects",
  description:
    "HTML site map for Smile Architects dental clinics — Pala, Kottayam, Thrissur, treatments, orthodontics, patient guides, and booking.",
  canonical: "/site-map",
});

const STATIC_PAGES: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/dentists", label: "Our doctors" },
  { href: "/locations", label: "Clinic locations" },
  { href: "/thrissur", label: "Thrissur branch" },
  { href: "/contact", label: "Contact" },
  { href: "/book-appointment", label: "Book appointment" },
  { href: "/treatments", label: "Treatments" },
  { href: "/orthodontics", label: "Orthodontics" },
  { href: "/dental-guides", label: "Dental guides" },
  { href: "/patient-stories", label: "Patient stories" },
  { href: "/patient-guide", label: "Patient guide hub" },
  { href: "/areas-served", label: "Areas served" },
  { href: "/technology", label: "Technology" },
];

export default function SiteMapPage() {
  const clusterOrder: TopicClusterId[] = ["locations", "orthodontics", "restorative", "guides", "general"];

  return (
    <>
      <div className="section-padding section-warm">
        <div className="container-xl">
          <Breadcrumb items={[{ label: "Site map", href: "/site-map" }]} />
          <div style={{ maxWidth: "800px", marginTop: "1.5rem" }}>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                color: "var(--color-dark-moss)",
                fontWeight: 400,
                marginBottom: "1rem",
              }}
            >
              Site map
            </h1>
            <p style={{ color: "var(--color-olive)", lineHeight: 1.7, marginBottom: "2rem" }}>
              All main pages for Smile Architects —{" "}
              <Link href="/local/pala">Pala</Link>,{" "}
              <Link href="/local/thrissur">Thrissur</Link>, treatments, and patient resources.
            </p>
          </div>

          <div className="site-map-grid">
            <section className="card-warm" style={{ padding: "1.25rem 1.5rem" }}>
              <h2 style={{ fontSize: "1rem", color: "var(--color-dark-moss)", marginBottom: "0.75rem" }}>Main pages</h2>
              <ul style={{ margin: 0, paddingLeft: "1.1rem", lineHeight: 1.8 }}>
                {STATIC_PAGES.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href}>{p.label}</Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="card-warm" style={{ padding: "1.25rem 1.5rem" }}>
              <h2 style={{ fontSize: "1rem", color: "var(--color-dark-moss)", marginBottom: "0.75rem" }}>Local SEO pages</h2>
              <ul style={{ margin: 0, paddingLeft: "1.1rem", lineHeight: 1.8 }}>
                {LOCAL_LANDING_SLUGS.map((slug) => (
                  <li key={slug}>
                    <Link href={`/local/${slug}`}>/local/{slug}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/areas-served/kottayam">/areas-served/kottayam</Link>
                </li>
                <li>
                  <Link href="/areas-served/thrissur">/areas-served/thrissur</Link>
                </li>
              </ul>
            </section>

            <section className="card-warm" style={{ padding: "1.25rem 1.5rem" }}>
              <h2 style={{ fontSize: "1rem", color: "var(--color-dark-moss)", marginBottom: "0.75rem" }}>Patient guide topics</h2>
              <ul style={{ margin: 0, paddingLeft: "1.1rem", lineHeight: 1.8 }}>
                {PATIENT_GUIDE_SLUGS.map((slug) => (
                  <li key={slug}>
                    <Link href={`/patient-guide/${slug}`}>{PATIENT_GUIDE_PAGES[slug].h1}</Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="card-warm" style={{ padding: "1.25rem 1.5rem" }}>
              <h2 style={{ fontSize: "1rem", color: "var(--color-dark-moss)", marginBottom: "0.75rem" }}>Treatments</h2>
              <ul style={{ margin: 0, paddingLeft: "1.1rem", lineHeight: 1.8, columns: 2, columnGap: "1.5rem" }}>
                {TREATMENTS.map((t) => (
                  <li key={t.slug} style={{ breakInside: "avoid" }}>
                    <Link href={`/treatments/${t.slug}`}>{t.title}</Link>
                  </li>
                ))}
              </ul>
            </section>

            {clusterOrder.map((id) => (
              <section key={id} className="card-warm" style={{ padding: "1.25rem 1.5rem" }}>
                <h2 style={{ fontSize: "1rem", color: "var(--color-dark-moss)", marginBottom: "0.75rem" }}>
                  {TOPIC_CLUSTERS[id].title}
                </h2>
                <ul style={{ margin: 0, paddingLeft: "1.1rem", lineHeight: 1.8 }}>
                  {TOPIC_CLUSTERS[id].links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .site-map-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        @media (min-width: 640px) {
          .site-map-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        .site-map-grid a {
          color: var(--color-dark-moss);
          font-weight: 500;
        }
      `}</style>
    </>
  );
}
