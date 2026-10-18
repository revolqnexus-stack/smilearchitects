"use client";

import Link from "next/link";
import { useBranch } from "@/components/providers/BranchProvider";
import { branchDirectionsUrl } from "@/lib/branch-ui";
import TrackedLink from "@/components/ui/TrackedLink";

export default function HomeHeroCTAs() {
  const { branch } = useBranch();
  const directions = branchDirectionsUrl(branch);

  return (
    <div className="hero-cta-row">
      <Link href="/treatments" className="hero-btn-primary">
        Explore Treatments
      </Link>
      <Link href={`/book-appointment?branch=${branch.id}`} className="hero-btn-ghost">
        Book at {branch.label} →
      </Link>
      <TrackedLink
        href={directions}
        eventName="directions_click"
        eventParams={{ branch: branch.id, placement: "hero" }}
        target="_blank"
        rel="noopener noreferrer"
        className="hero-btn-ghost"
        style={{ fontSize: "0.875rem" }}
      >
        Directions to {branch.label}
      </TrackedLink>
    </div>
  );
}
