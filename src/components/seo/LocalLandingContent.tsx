import Link from "next/link";
import Image from "next/image";
import type { LocalLandingConfig } from "@/lib/seo/local-landing";
import { getBranch } from "@/lib/branches";
import { CLINIC, TREATMENTS, DOCTORS } from "@/lib/site-config";
import Breadcrumb from "@/components/ui/Breadcrumb";
import WhatsAppForm from "@/components/ui/WhatsAppForm";
import PremiumFAQ from "@/components/ui/PremiumFAQ";
import TrustSignalsStrip from "@/components/seo/TrustSignalsStrip";
import LinkRichText from "@/components/seo/LinkRichText";
import SeoTopicCluster from "@/components/seo/SeoTopicCluster";
import { LOCAL_INTRO_SEGMENTS } from "@/lib/seo/internal-links";
import ClickToLoadMap from "@/components/ui/ClickToLoadMap";
import TrackedLink from "@/components/ui/TrackedLink";
import { PhoneIcon, CheckIcon } from "@/components/ui/icons";

const WHY_CHOOSE = [
  "MDS specialists — orthodontics, periodontics, endodontics & more",
  "Advanced orthodontics: braces, clear aligners & lingual (hidden) braces",
  "Digital X-ray, modern sterilisation & individual treatment rooms",
  "Dental implants, smile design & cosmetic dentistry",
  "Online and phone booking — Mon–Sat 9:30 AM – 8:00 PM",
];

export default function LocalLandingContent({ config }: { config: LocalLandingConfig }) {
  const branch = getBranch(config.branchId);
  const featured = TREATMENTS.filter((t) => t.featured).slice(0, 8);
  const directions = branch.maps.shareUrl ?? branch.maps.directionsUrl;
  const directionsLabel = branch.label;

  return (
    <>
      <div className="section-padding section-warm">
        <div className="container-xl">
          <Breadcrumb
            items={[
              { label: "Locations", href: "/locations" },
              { label: config.cities[0], href: config.canonical },
            ]}
          />

          <div style={{ maxWidth: "780px", marginTop: "1.5rem" }}>
            <p className="eyebrow" style={{ marginBottom: "0.75rem" }}>
              {config.cities.join(" · ")}
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                color: "var(--color-dark-moss)",
                fontWeight: 400,
                lineHeight: 1.12,
                marginBottom: "1rem",
              }}
            >
              {config.h1}
            </h1>
            <LinkRichText
              segments={LOCAL_INTRO_SEGMENTS[config.slug]}
              style={{
                color: "var(--color-olive)",
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            />
            <div style={{ marginBottom: "1.25rem" }}>
              <TrustSignalsStrip />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <TrackedLink
                href={`tel:${branch.contact.phone}`}
                eventName="phone_click"
                className="btn btn-primary"
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
              >
                <PhoneIcon size="sm" />
                {branch.contact.phoneDisplay} ({directionsLabel})
              </TrackedLink>
              <Link href={`/book-appointment?branch=${branch.id}`} className="btn btn-secondary">
                Book appointment
              </Link>
              <a
                href={directions}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Directions
              </a>
            </div>
          </div>
        </div>
      </div>

      {branch.media?.hero ? (
        <div style={{ position: "relative", height: "clamp(200px, 38vw, 420px)", width: "100%" }}>
          <Image
            src={branch.media.hero}
            alt={`${CLINIC.name} — ${branch.label}`}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      ) : null}

      <section className="section-padding section-white">
        <div className="container-xl">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "3rem",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  color: "var(--color-dark-moss)",
                  fontWeight: 400,
                  marginBottom: "1rem",
                }}
              >
                Why patients choose Smile Architects
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {WHY_CHOOSE.map((item) => (
                  <li key={item} style={{ display: "flex", gap: "0.5rem", color: "var(--color-olive)", lineHeight: 1.55 }}>
                    <CheckIcon size="sm" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {config.nearbyLinks ? (
                <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-moss)", fontWeight: 600 }}>
                    Related pages
                  </p>
                  {config.nearbyLinks.map((l) => (
                    <Link key={l.href} href={l.href} style={{ color: "var(--color-dark-moss)", fontWeight: 600 }}>
                      {l.label} →
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>

            <div>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  color: "var(--color-dark-moss)",
                  fontWeight: 400,
                  marginBottom: "1rem",
                }}
              >
                Clinic address
              </h2>
              <address style={{ fontStyle: "normal", color: "var(--color-olive)", lineHeight: 1.7, marginBottom: "1rem" }}>
                <strong style={{ color: "var(--color-dark-moss)" }}>{CLINIC.name}</strong>
                <br />
                {branch.address.street}
                <br />
                {branch.address.landmark ? (
                  <>
                    {branch.address.landmark}
                    <br />
                  </>
                ) : null}
                {branch.address.city}, {branch.address.state} – {branch.address.pincode}
              </address>
              <ClickToLoadMap
                embedUrl={branch.maps.embedUrl}
                title={`Map — ${branch.label}`}
                previewLabel={`Load map — ${branch.label}`}
                height={220}
              />
              {config.parking ? (
                <p style={{ fontSize: "0.875rem", color: "var(--color-olive)", marginTop: "0.75rem" }}>
                  <strong>Parking:</strong> {config.parking}
                </p>
              ) : null}
              {config.branchHighlights?.length ? (
                <ul style={{ marginTop: "1rem", paddingLeft: "1.1rem", color: "var(--color-olive)", fontSize: "0.9375rem", lineHeight: 1.6 }}>
                  {config.branchHighlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
          {config.travelFrom?.length ? (
            <div style={{ marginTop: "3rem" }}>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.5rem",
                  color: "var(--color-dark-moss)",
                  marginBottom: "1rem",
                }}
              >
                Travel times to our Pala clinic
              </h2>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9375rem" }}>
                  <thead>
                    <tr style={{ textAlign: "left", borderBottom: "2px solid var(--color-tea-green)" }}>
                      <th style={{ padding: "0.75rem" }}>From</th>
                      <th style={{ padding: "0.75rem" }}>Distance</th>
                      <th style={{ padding: "0.75rem" }}>Typical time</th>
                      <th style={{ padding: "0.75rem" }}>Route</th>
                    </tr>
                  </thead>
                  <tbody>
                    {config.travelFrom.map((row) => (
                      <tr key={row.from} style={{ borderBottom: "1px solid var(--color-tea-green)" }}>
                        <td style={{ padding: "0.75rem", color: "var(--color-dark-moss)" }}>{row.from}</td>
                        <td style={{ padding: "0.75rem" }}>{row.distance}</td>
                        <td style={{ padding: "0.75rem" }}>{row.time}</td>
                        <td style={{ padding: "0.75rem", color: "var(--color-olive)" }}>{row.route ?? "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-xl">
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              color: "var(--color-dark-moss)",
              fontWeight: 400,
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            Dental treatments in {config.cities[0]}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {featured.map((t) => (
              <Link
                key={t.slug}
                href={`/treatments/${t.slug}`}
                className="card-warm"
                style={{
                  padding: "1.25rem",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <h3 style={{ fontSize: "1rem", color: "var(--color-dark-moss)", marginBottom: "0.35rem" }}>
                  {t.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--color-olive)", margin: 0, lineHeight: 1.5 }}>
                  {t.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-white">
        <div className="container-xl">
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "var(--color-dark-moss)",
              fontWeight: 400,
              marginBottom: "1.5rem",
              textAlign: "center",
            }}
          >
            MDS dental specialists
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            {DOCTORS.slice(0, 6).map((d) => (
              <Link
                key={d.id}
                href={`/dentists/${d.slug}`}
                style={{
                  textDecoration: "none",
                  padding: "1.25rem",
                  borderRadius: "12px",
                  border: "1px solid var(--color-tea-green)",
                  background: "var(--color-honeydew)",
                }}
              >
                <p style={{ fontWeight: 600, color: "var(--color-dark-moss)", marginBottom: "0.25rem" }}>{d.name}</p>
                <p style={{ fontSize: "0.875rem", color: "var(--color-olive)", margin: 0 }}>{d.specialty}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-warm" aria-labelledby="local-faq-heading">
        <div className="container-xl" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 id="local-faq-heading" className="section-title" style={{ textAlign: "center", marginBottom: "2rem" }}>
            Common questions
          </h2>
          <PremiumFAQ faqs={config.faqs} />
        </div>
      </section>

      <SeoTopicCluster pathname={config.canonical} />

      <section className="section-padding section-dark">
        <div className="container-xl" style={{ maxWidth: "560px", margin: "0 auto" }}>
          <WhatsAppForm
            darkMode
            quick
            heading={`Book — ${branch.label} branch via WhatsApp`}
          />
        </div>
      </section>
    </>
  );
}
