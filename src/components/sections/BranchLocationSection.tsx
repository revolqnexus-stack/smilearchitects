"use client";

import Image from "next/image";
import Link from "next/link";
import { useBranch } from "@/components/providers/BranchProvider";
import TrackedLink from "@/components/ui/TrackedLink";
import ClickToLoadMap from "@/components/ui/ClickToLoadMap";
import {
  RevealUp,
  ImageReveal,
} from "@/components/motion/REVOLQComponents";

export default function BranchLocationSection() {
  const { branch } = useBranch();
  const directionsHref =
    branch.maps.shareUrl ?? branch.maps.directionsUrl;

  const heading =
    branch.id === "pala"
      ? (
          <>
            Dental clinic in Pala,
            <br />
            Kottayam
          </>
        )
      : (
          <>
            Dental clinic in Punkunnam,
            <br />
            Thrissur
          </>
        );

  return (
    <section
      aria-labelledby="location-heading"
      className="section-padding section-white"
      style={{ position: "relative" }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 160,
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(215,231,190,0.18), transparent 60%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div className="container-xl">
        <div className="location-editorial branch-location-editorial">
          <RevealUp delay={0.05} className="location-editorial-text">
            <div className="accent-line" />
            <p className="eyebrow">Find Us</p>
            <h2 id="location-heading" className="location-editorial-heading">
              {heading}
            </h2>

            <address className="location-address-block" style={{ fontStyle: "normal" }}>
              <div className="location-address-item">
                <span className="location-address-label">Address</span>
                <span className="location-address-value">
                  {branch.address.street}
                  <br />
                  {branch.address.city}, {branch.address.district}
                  <br />
                  {branch.address.state} – {branch.address.pincode}
                </span>
              </div>
              {branch.address.landmark ? (
                <>
                  <div className="location-address-divider" />
                  <div className="location-address-item">
                    <span className="location-address-label">Landmark</span>
                    <span className="location-address-value">{branch.address.landmark}</span>
                  </div>
                </>
              ) : null}
              <div className="location-address-divider" />
              <div className="location-address-item">
                <span className="location-address-label">Hours</span>
                <span className="location-address-value">
                  Mon–Sat: {branch.hours.weekdays.open} – {branch.hours.weekdays.close}
                  <br />
                  Sunday: {branch.hours.sunday.status}
                </span>
              </div>
              <div className="location-address-divider" />
              <div className="location-address-item">
                <span className="location-address-label">Phone</span>
                <a href={`tel:${branch.contact.phone}`} className="location-phone-link">
                  {branch.contact.phoneDisplay}
                </a>
              </div>
            </address>

            <div className="location-cta-row">
              <TrackedLink
                href={directionsHref}
                eventName="directions_click"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Get Directions →
              </TrackedLink>
              <a href={`tel:${branch.contact.phone}`} className="btn btn-ghost">
                Call Clinic
              </a>
            </div>

            <p style={{ marginTop: "1.25rem", fontSize: "0.9375rem", color: "var(--color-olive)" }}>
              {branch.id === "thrissur" ? (
                <Link href="/thrissur" style={{ color: "var(--color-dark-moss)", fontWeight: 600 }}>
                  View Thrissur branch photos &amp; details →
                </Link>
              ) : (
                <Link href="/local/pala" style={{ color: "var(--color-dark-moss)", fontWeight: 600 }}>
                  Pala clinic — directions &amp; local info →
                </Link>
              )}
              {" · "}
              <Link href="/locations" style={{ color: "var(--color-olive)", fontWeight: 600 }}>
                Both clinics
              </Link>
            </p>
          </RevealUp>

          <ImageReveal delay={0.2} className="location-editorial-map">
            {branch.media?.hero ? (
              <div
                className="location-map-frame branch-location-photo-stack"
                style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                <div style={{ position: "relative", flex: 1, minHeight: "280px", borderRadius: "inherit" }}>
                  <Image
                    src={branch.media.hero}
                    alt={`Smile Architects ${branch.label} branch interior`}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    style={{ objectFit: "cover", borderRadius: "inherit" }}
                  />
                </div>
                <ClickToLoadMap
                  embedUrl={branch.maps.embedUrl}
                  title={`Smile Architects ${branch.label} — map`}
                  height={200}
                />
              </div>
            ) : (
              <div className="location-map-frame">
                <ClickToLoadMap
                  embedUrl={branch.maps.embedUrl}
                  title="Smile Architects — map"
                  height={340}
                />
              </div>
            )}
          </ImageReveal>
        </div>

        <div className="branch-dual-locations" style={{ marginTop: "3rem" }}>
          <p className="eyebrow" style={{ textAlign: "center", marginBottom: "1rem" }}>
            Also visit us in
          </p>
          <div className="branch-dual-locations-grid branch-dual-locations-grid--two">
            <DualLocationCard
              title="Pala, Kottayam"
              subtitle="Main centre · Kattakkayam Road"
              href="/local/pala"
              highlight={branch.id === "pala"}
            />
            <DualLocationCard
              title="Thrissur branch"
              subtitle="Punkunnam · photos & directions"
              href="/thrissur"
              thumb="/thrissur/page_1_image_2.jpeg"
              highlight={branch.id === "thrissur"}
            />
          </div>
          <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.875rem" }}>
            <Link href="/locations" style={{ color: "var(--color-olive)", fontWeight: 600 }}>
              Compare both clinics →
            </Link>
          </p>
        </div>
      </div>

      <style>{`
        .branch-location-editorial.location-editorial {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 4rem;
          align-items: center;
        }
        .location-editorial-heading {
          font-family: var(--font-serif);
          font-size: clamp(1.875rem, 3vw, 2.75rem);
          font-weight: 400;
          color: var(--color-dark-moss);
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin-bottom: 2rem;
        }
        .location-address-block {
          display: flex;
          flex-direction: column;
          margin-bottom: 2rem;
        }
        .location-address-item {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 1rem;
          padding: 0.875rem 0;
        }
        .location-address-label {
          font-size: 0.6875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--color-olive);
          font-family: var(--font-utility);
          padding-top: 2px;
        }
        .location-address-value {
          font-size: 0.9375rem;
          color: var(--color-dark-moss);
          font-family: var(--font-sans);
          line-height: 1.6;
        }
        .location-address-divider {
          height: 1px;
          background: var(--color-tea-green);
        }
        .location-phone-link {
          font-size: 0.9375rem;
          color: var(--color-dark-moss);
          font-weight: 600;
          text-decoration: none;
          border-bottom: 1px solid var(--color-tea-green);
        }
        .location-cta-row {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .location-map-frame {
          width: 100%;
          height: clamp(340px, 50vh, 520px);
          border-radius: 28px;
          overflow: hidden;
          border: 1.5px solid var(--color-tea-green);
          box-shadow: 0 12px 40px rgba(37,78,6,0.09);
        }
        .branch-location-photo-stack.location-map-frame {
          height: auto;
          min-height: 420px;
        }
        .branch-dual-locations-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          max-width: 720px;
          margin: 0 auto;
        }
        .branch-dual-locations-grid--two {
          max-width: 880px;
        }
        @media (min-width: 560px) {
          .branch-dual-locations-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 899px) {
          .branch-location-editorial.location-editorial {
            grid-template-columns: 1fr;
          }
          .location-map-frame {
            height: 320px;
          }
        }
        @media (max-width: 480px) {
          .location-address-item {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

function DualLocationCard({
  title,
  subtitle,
  href,
  thumb,
  highlight,
}: {
  title: string;
  subtitle: string;
  href: string;
  thumb?: string;
  highlight?: boolean;
}) {
  return (
    <Link
      href={href}
      style={{
        textDecoration: "none",
        borderRadius: "16px",
        overflow: "hidden",
        border: highlight ? "2px solid var(--color-olive)" : "1px solid var(--color-tea-green)",
        background: "var(--color-honeydew)",
      }}
    >
      {thumb ? (
        <div style={{ position: "relative", height: "120px", width: "100%" }}>
          <Image src={thumb} alt="" fill sizes="400px" style={{ objectFit: "cover" }} />
        </div>
      ) : null}
      <div style={{ padding: "1rem 1.25rem" }}>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.125rem",
            color: "var(--color-dark-moss)",
            marginBottom: "0.25rem",
          }}
        >
          {title}
        </p>
        <p style={{ fontSize: "0.8125rem", color: "var(--color-olive)", margin: 0, lineHeight: 1.5 }}>
          {subtitle}
        </p>
      </div>
    </Link>
  );
}
