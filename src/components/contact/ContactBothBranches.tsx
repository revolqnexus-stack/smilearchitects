"use client";

import Link from "next/link";
import { BRANCH_LIST } from "@/lib/branches";
import ClickToLoadMap from "@/components/ui/ClickToLoadMap";
import TrackedLink from "@/components/ui/TrackedLink";
import { MapPinIcon, PhoneIcon } from "@/components/ui/icons";

export default function ContactBothBranches() {
  return (
    <div className="contact-both-branches">
      {BRANCH_LIST.map((branch) => {
        const detail = branch.id === "pala" ? "/local/pala" : "/thrissur";
        const directions = branch.maps.shareUrl ?? branch.maps.directionsUrl;
        return (
          <div
            key={branch.id}
            className="card-warm"
            style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
              <MapPinIcon size="md" />
              <div>
                <p
                  style={{
                    fontSize: "0.6875rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--color-olive)",
                    fontWeight: 600,
                    marginBottom: "0.25rem",
                  }}
                >
                  {branch.isPrimary ? "Main centre" : "Branch"}
                </p>
                <h2 style={{ fontSize: "1.125rem", color: "var(--color-dark-moss)", margin: 0 }}>
                  {branch.label} — {branch.locationLine}
                </h2>
              </div>
            </div>
            <address style={{ fontStyle: "normal", fontSize: "0.9375rem", color: "var(--color-olive)", lineHeight: 1.65 }}>
              {branch.address.street}
              <br />
              {branch.address.landmark}
              <br />
              {branch.address.city}, {branch.address.state} – {branch.address.pincode}
            </address>
            <ClickToLoadMap
              embedUrl={branch.maps.embedUrl}
              title={`Map — ${branch.label}`}
              height={180}
              previewLabel={`Map — ${branch.label}`}
            />
            <div className="contact-branch-actions" style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <TrackedLink href={`tel:${branch.contact.phone}`} eventName="phone_click" eventParams={{ branch: branch.id, placement: "contact" }} className="btn btn-primary" style={{ fontSize: "0.8125rem" }}>
                <PhoneIcon size="sm" />
                Call
              </TrackedLink>
              <a href={directions} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: "0.8125rem" }}>
                Directions
              </a>
              <Link href={detail} className="btn btn-secondary" style={{ fontSize: "0.8125rem" }}>
                Clinic page
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
