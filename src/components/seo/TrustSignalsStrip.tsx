import Image from "next/image";
import Link from "next/link";
import { DOCTORS, CLINIC } from "@/lib/site-config";

const TRUST = CLINIC.trust;

const lead = DOCTORS.find((d) => d.id === "dr-jeo-tom-charls");

export default function TrustSignalsStrip() {
  const years =
    TRUST.practicingSince != null
      ? Math.max(1, new Date().getFullYear() - TRUST.practicingSince)
      : null;

  return (
    <aside
      aria-label="Clinic credentials"
      className="trust-signals-strip"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem 1.5rem",
        alignItems: "center",
        padding: "1rem 1.25rem",
        borderRadius: "14px",
        border: "1px solid var(--color-tea-green)",
        background: "rgba(255,255,255,0.85)",
      }}
    >
      {lead?.photo ? (
        <div style={{ position: "relative", width: 56, height: 56, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
          <Image src={lead.photo} alt="" fill sizes="56px" style={{ objectFit: "cover" }} />
        </div>
      ) : null}
      <div style={{ flex: "1 1 200px", minWidth: 0 }}>
        {lead ? (
          <p style={{ margin: 0, fontSize: "0.9375rem", color: "var(--color-dark-moss)", fontWeight: 600 }}>
            {lead.name}
          </p>
        ) : null}
        <p style={{ margin: "0.25rem 0 0", fontSize: "0.8125rem", color: "var(--color-olive)", lineHeight: 1.5 }}>
          {lead?.qualifications} — {lead?.specialty}
          {lead?.registrationNumber ? (
            <>
              <br />
              Kerala Dental Council Reg. {lead.registrationNumber}
              {lead.registrationYear ? ` (${lead.registrationYear})` : ""}
            </>
          ) : null}
        </p>
      </div>
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem 1rem",
          fontSize: "0.8125rem",
          color: "var(--color-olive)",
        }}
      >
        {years != null ? <li>{years}+ years in practice</li> : null}
        <li>MDS specialist team</li>
        <li>Invisalign & Spark provider</li>
        {TRUST.googleReviewCount != null && TRUST.googleRating != null ? (
          <li>
            {TRUST.googleRating}★ · {TRUST.googleReviewCount} Google reviews
          </li>
        ) : null}
      </ul>
      <Link href="/dentists/dr-jeo-tom-charls" className="btn btn-ghost" style={{ fontSize: "0.8125rem", whiteSpace: "nowrap" }}>
        Meet our doctors
      </Link>
    </aside>
  );
}
