"use client";

import Link from "next/link";
import { useBranch } from "@/components/providers/BranchProvider";
import { PhoneIcon } from "@/components/ui/icons";

export default function FooterContactBlock() {
  const { branch } = useBranch();

  return (
    <>
      <address
        style={{
          fontStyle: "normal",
          fontSize: "0.875rem",
          lineHeight: 1.7,
          color: "var(--color-honeydew)",
          opacity: 0.8,
        }}
      >
        {branch.address.street}
        <br />
        {branch.address.city}, {branch.address.district}
        <br />
        {branch.address.state}
        {branch.address.pincode ? ` – ${branch.address.pincode}` : ""}
        <br />
        {branch.address.landmark ? (
          <span style={{ fontSize: "0.8125rem", opacity: 0.7 }}>{branch.address.landmark}</span>
        ) : null}
      </address>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <a
          href={`tel:${branch.contact.phone}`}
          style={{
            fontSize: "0.9rem",
            color: "var(--color-jonquil)",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <PhoneIcon size="sm" color="var(--color-jonquil)" />
          {branch.contact.phoneDisplay}
        </a>
        <a
          href={`mailto:${branch.contact.email}`}
          style={{ fontSize: "0.8125rem", color: "var(--color-honeydew)", opacity: 0.7 }}
        >
          {branch.contact.email}
        </a>
        <div
          style={{
            marginTop: "0.75rem",
            fontSize: "0.8125rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.35rem 0.75rem",
          }}
        >
          <Link href="/local/pala" className="footer-link">
            Pala clinic →
          </Link>
          <Link href="/thrissur" className="footer-link">
            Thrissur branch →
          </Link>
        </div>
      </div>
    </>
  );
}
