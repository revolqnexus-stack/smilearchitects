"use client";

import Link from "next/link";
import { useBranch } from "@/components/providers/BranchProvider";

export default function HeroLocationEyebrow() {
  const { branchId } = useBranch();

  return (
    <p className="hero-eyebrow">
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        style={{ display: "inline", marginRight: "6px", verticalAlign: "middle" }}
      >
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
          fill="rgba(255,255,255,0.7)"
        />
      </svg>
      Clinics in{" "}
      <Link
        href="/local/pala"
        className="hero-eyebrow-link"
        aria-current={branchId === "pala" ? "page" : undefined}
      >
        Pala, Kottayam
      </Link>
      {" & "}
      <Link
        href="/thrissur"
        className="hero-eyebrow-link"
        aria-current={branchId === "thrissur" ? "page" : undefined}
      >
        Thrissur
      </Link>
    </p>
  );
}
