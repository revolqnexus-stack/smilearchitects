import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { BRANCH_THRISSUR } from "@/lib/branches";
import Breadcrumb from "@/components/ui/Breadcrumb";
import AppointmentForm from "@/components/ui/AppointmentForm";
import TrackedLink from "@/components/ui/TrackedLink";
import BranchToggle from "@/components/ui/BranchToggle";
import ThrissurClinicGallery from "@/components/sections/ThrissurClinicGallery";
import SeoTopicCluster from "@/components/seo/SeoTopicCluster";
import LinkRichText from "@/components/seo/LinkRichText";
import { LOCAL_INTRO_SEGMENTS } from "@/lib/seo/internal-links";
import { MapPinIcon, PhoneIcon, ClockIcon } from "@/components/ui/icons";

export const metadata: Metadata = buildMetadata({
  title: "Best Dental Clinic in Thrissur | Smile Architects Branch",
  description:
    "Smile Architects Thrissur — 2nd Floor, Ephphatha Medical Complex, Opp. St. Joseph's Church, Punkunnam, Thrissur 680002. Multispeciality dental & orthodontic care. Call +91 9446 999 333.",
  canonical: "/thrissur",
});

export default function ThrissurBranchPage() {
  const branch = BRANCH_THRISSUR;

  return (
    <>
      <div className="section-padding section-warm">
        <div className="container-xl">
          <Breadcrumb items={[{ label: "Thrissur Branch", href: "/thrissur" }]} />
          <div style={{ maxWidth: "720px", margin: "2rem auto 0", textAlign: "center" }}>
            <p
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-olive)",
                fontWeight: 600,
                marginBottom: "1rem",
              }}
            >
              Second location
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                color: "var(--color-dark-moss)",
                fontWeight: 400,
                lineHeight: 1.1,
                marginBottom: "1rem",
              }}
            >
              Smile Architects — Thrissur
            </h1>
            <LinkRichText
              segments={LOCAL_INTRO_SEGMENTS.thrissur}
              style={{ color: "var(--color-olive)", fontSize: "1.0625rem", lineHeight: 1.65, marginBottom: "1.5rem" }}
            />
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
              <BranchToggle />
            </div>
            <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
              <TrackedLink href={`tel:${branch.contact.phone}`} eventName="phone_click" className="btn btn-primary">
                <PhoneIcon size="sm" />
                {branch.contact.phoneDisplay}
              </TrackedLink>
              <Link href="/book-appointment" className="btn btn-secondary">
                Book appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {branch.media?.hero ? (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "clamp(220px, 42vw, 480px)",
            background: "var(--color-dark-moss)",
          }}
        >
          <Image
            src={branch.media.hero}
            alt="Smile Architects Thrissur branch — reception and waiting area"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(26,57,5,0.55) 0%, transparent 45%)",
            }}
          />
        </div>
      ) : null}

      <section className="section-padding section-light">
        <div className="container-xl">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2.5rem",
              alignItems: "start",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div className="card-warm" style={{ padding: "1.5rem", display: "flex", gap: "1rem" }}>
                <MapPinIcon size="md" />
                <div>
                  <h2 style={{ fontSize: "1rem", color: "var(--color-dark-moss)", marginBottom: "0.5rem" }}>
                    Address
                  </h2>
                  <address style={{ color: "var(--color-olive)", lineHeight: 1.65, margin: 0, fontStyle: "normal" }}>
                    {branch.address.street}
                    <br />
                    {branch.address.landmark}
                    <br />
                    {branch.address.city}, {branch.address.state} – {branch.address.pincode}
                  </address>
                  <a
                    href={branch.maps.shareUrl ?? branch.maps.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                    style={{ marginTop: "0.75rem", display: "inline-flex" }}
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
              <div className="card-warm" style={{ padding: "1.5rem", display: "flex", gap: "1rem" }}>
                <ClockIcon size="md" />
                <div>
                  <h2 style={{ fontSize: "1rem", color: "var(--color-dark-moss)", marginBottom: "0.5rem" }}>
                    Hours
                  </h2>
                  <p style={{ color: "var(--color-olive)", lineHeight: 1.6, margin: 0 }}>
                    {branch.hours.weekdays.label}: {branch.hours.weekdays.open} – {branch.hours.weekdays.close}
                    <br />
                    {branch.hours.sunday.label}: {branch.hours.sunday.status}
                  </p>
                </div>
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--color-moss)", lineHeight: 1.6 }}>
                Also visit our{" "}
                <Link href="/" style={{ color: "var(--color-olive)", fontWeight: 600 }}>
                  Pala, Kottayam
                </Link>{" "}
                centre on Kattakkayam Road (near Federal Bank).
              </p>
            </div>

            <div>
              <div
                className="location-map-frame"
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  minHeight: "320px",
                  border: "1px solid var(--color-tea-green)",
                }}
              >
                <iframe
                  title="Smile Architects Thrissur branch map"
                  src={branch.maps.embedUrl}
                  width="100%"
                  height="360"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ThrissurClinicGallery />

      <SeoTopicCluster pathname="/thrissur" />

      <section className="section-padding section-warm">
        <div className="container-xl" style={{ maxWidth: "560px", margin: "0 auto" }}>
          <AppointmentForm heading="Request an appointment — Thrissur" surface="light" />
        </div>
      </section>
    </>
  );
}
