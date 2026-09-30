import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ClinicsTwoLocations from "@/components/sections/ClinicsTwoLocations";
import { CLINIC } from "@/lib/site-config";
import SeoTopicCluster from "@/components/seo/SeoTopicCluster";

export const metadata: Metadata = buildMetadata({
  title: "Clinic Locations — Pala, Kottayam & Thrissur",
  description:
    "Smile Architects has two clinics: main centre in Pala, Kottayam District and a branch in Punkunnam, Thrissur. Addresses, directions, phone +91 9446 999 333.",
  canonical: "/locations",
});

export default function LocationsPage() {
  return (
    <>
      <div className="section-padding section-warm">
        <div className="container-xl">
          <Breadcrumb items={[{ label: "Our clinics", href: "/locations" }]} />
          <div className="locations-page-hero">
            <h1 className="locations-page-title">Our clinics</h1>
            <p className="locations-page-lead">
              {CLINIC.name} in <strong>Pala, Kottayam District</strong> and{" "}
              <strong>Punkunnam, Thrissur</strong>. One team, same phone:{" "}
              <a href={`tel:${CLINIC.contact.phone}`}>{CLINIC.contact.phoneDisplay}</a>.
            </p>
          </div>
        </div>
      </div>

      <section className="section-padding section-white">
        <div className="container-xl">
          <ClinicsTwoLocations showHeading={false} />
        </div>
      </section>

      <section className="section-padding section-light">
        <div className="container-xl locations-page-guide">
          <h2 className="locations-page-subtitle">Which should I visit?</h2>
          <ul className="locations-page-list">
            <li>
              <strong>Pala</strong> — Main centre for Pala, Meenachil, and Kottayam District.{" "}
              <Link href="/local/pala">About Pala →</Link>
            </li>
            <li>
              <strong>Thrissur</strong> — Branch at Ephphatha Medical Complex, Opp. St. Joseph&apos;s
              Church, Punkunnam.{" "}
              <Link href="/thrissur" style={{ fontWeight: 700 }}>
                Open Thrissur branch page (photos &amp; map) →
              </Link>
            </li>
          </ul>
          <Link href="/book-appointment" className="btn btn-primary">
            Book an appointment
          </Link>
        </div>
      </section>

      <SeoTopicCluster pathname="/locations" />

      <style>{`
        .locations-page-hero {
          max-width: 640px;
          margin: 1.5rem auto 0;
          text-align: center;
        }
        .locations-page-title {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 5vw, 2.75rem);
          color: var(--color-dark-moss);
          font-weight: 400;
          line-height: 1.12;
          margin: 0 0 1rem;
        }
        .locations-page-lead {
          color: var(--color-olive);
          font-size: clamp(0.9375rem, 2.5vw, 1.0625rem);
          line-height: 1.7;
          margin: 0;
        }
        .locations-page-lead a {
          color: var(--color-dark-moss);
          font-weight: 600;
          text-decoration: none;
        }
        .locations-page-guide {
          max-width: 640px;
          margin: 0 auto;
          text-align: center;
        }
        .locations-page-subtitle {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          color: var(--color-dark-moss);
          font-weight: 400;
          margin: 0 0 1rem;
        }
        .locations-page-list {
          text-align: left;
          color: var(--color-olive);
          line-height: 1.7;
          font-size: 0.9375rem;
          padding-left: 1.25rem;
          margin: 0 0 1.5rem;
        }
        .locations-page-list li {
          margin-bottom: 0.75rem;
        }
      `}</style>
    </>
  );
}
