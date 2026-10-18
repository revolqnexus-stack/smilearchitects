"use client";

import { useBranch } from "@/components/providers/BranchProvider";
import { branchDirectionsUrl } from "@/lib/branch-ui";
import TrackedLink from "@/components/ui/TrackedLink";

export default function HeroLocationEyebrow() {
  const { branch } = useBranch();
  const directions = branchDirectionsUrl(branch);

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
      Directions &amp; booking for{" "}
      <strong style={{ fontWeight: 600, color: "rgba(255,255,255,0.95)" }}>
        {branch.label}
      </strong>
      <span style={{ opacity: 0.85 }}> · {branch.toggleHint}</span>
      {" — "}
      <TrackedLink
        href={directions}
        eventName="directions_click"
        eventParams={{ branch: branch.id, placement: "hero_eyebrow" }}
        target="_blank"
        rel="noopener noreferrer"
        className="sa-prose-link sa-prose-link--hero"
      >
        Open map
      </TrackedLink>
    </p>
  );
}
