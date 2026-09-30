"use client";

import Image from "next/image";
import Link from "next/link";
import { BRANCH_LIST, type ClinicBranch } from "@/lib/branches";
import TrackedLink from "@/components/ui/TrackedLink";
import { PhoneIcon } from "@/components/ui/icons";

type ClinicsTwoLocationsProps = {
  title?: string;
  showHeading?: boolean;
};

export default function ClinicsTwoLocations({
  title = "Pala & Thrissur",
  showHeading = true,
}: ClinicsTwoLocationsProps) {
  return (
    <div className="clinics-two-locations">
      {showHeading ? (
        <>
          <h2
            className="clinics-two-locations-title"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "var(--color-dark-moss)",
              fontWeight: 400,
              textAlign: "center",
              marginBottom: "0.5rem",
              lineHeight: 1.2,
            }}
          >
            {title}
          </h2>
          <p
            style={{
              textAlign: "center",
              maxWidth: "520px",
              margin: "0 auto 1.75rem",
              color: "var(--color-olive)",
              fontSize: "0.9375rem",
              lineHeight: 1.65,
            }}
          >
            Same team and phone at both addresses. Pick the clinic closest to you.
          </p>
        </>
      ) : null}

      <div className="clinics-two-locations-grid">
        {BRANCH_LIST.map((branch) => (
          <ClinicBranchCard key={branch.id} branch={branch} />
        ))}
      </div>

      <style>{`
        .clinics-two-locations-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          align-items: stretch;
        }
        @media (min-width: 640px) {
          .clinics-two-locations-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        .clinic-branch-card-actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        @media (min-width: 400px) {
          .clinic-branch-card-actions {
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}

function ClinicBranchCard({ branch }: { branch: ClinicBranch }) {
  const detailHref = branch.id === "pala" ? "/local/pala" : "/thrissur";
  const directions = branch.maps.shareUrl ?? branch.maps.directionsUrl;

  return (
    <article
      className="card-warm"
      style={{
        padding: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ position: "relative", height: "140px", background: "var(--color-dark-moss)" }}>
        {branch.media?.hero ? (
          <Image
            src={branch.media.hero}
            alt={`Smile Architects ${branch.label}`}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, var(--color-olive) 0%, var(--color-dark-moss) 100%)",
            }}
          />
        )}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent 50%)",
          }}
        />
        <div style={{ position: "absolute", bottom: "12px", left: "14px", right: "14px" }}>
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-serif)",
              fontSize: "1.25rem",
              color: "#fff",
              lineHeight: 1.15,
            }}
          >
            {branch.label}
            {branch.isPrimary ? (
              <span style={{ fontSize: "0.75rem", fontWeight: 600, marginLeft: "0.5rem", opacity: 0.9 }}>
                (main centre)
              </span>
            ) : null}
          </p>
          <p style={{ margin: "0.2rem 0 0", fontSize: "0.8125rem", color: "rgba(255,255,255,0.88)" }}>
            {branch.locationLine}
          </p>
        </div>
      </div>

      <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
        <address style={{ fontStyle: "normal", fontSize: "0.875rem", color: "var(--color-olive)", lineHeight: 1.6 }}>
          {branch.address.street}
          <br />
          {branch.address.landmark}
          <br />
          {branch.address.city} – {branch.address.pincode}
        </address>

        <div className="clinic-branch-card-actions" style={{ marginTop: "auto" }}>
          <Link href={detailHref} className="btn btn-primary" style={{ fontSize: "0.8125rem", flex: "1 1 auto", textAlign: "center" }}>
            Clinic details
          </Link>
          <TrackedLink
            href={directions}
            eventName="directions_click"
            eventParams={{ branch: branch.id, placement: "clinic_card" }}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ fontSize: "0.8125rem", flex: "1 1 auto", textAlign: "center" }}
          >
            Directions
          </TrackedLink>
          <TrackedLink
            href={`tel:${branch.contact.phone}`}
            eventName="phone_click"
            eventParams={{ branch: branch.id, placement: "clinic_card" }}
            className="btn btn-ghost"
            style={{
              fontSize: "0.8125rem",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.35rem",
              flex: "1 1 auto",
            }}
          >
            <PhoneIcon size="sm" />
            Call
          </TrackedLink>
        </div>
      </div>
    </article>
  );
}
