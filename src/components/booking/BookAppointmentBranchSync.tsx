"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useBranch } from "@/components/providers/BranchProvider";
import BranchToggle from "@/components/ui/BranchToggle";
import { isBranchId } from "@/lib/branches";
import { BRANCH_LOCATION_SECTION_ID } from "@/lib/branch-ui";

/** Reads ?branch= from URL and shows which clinic forms & WhatsApp will use. */
export default function BookAppointmentBranchSync() {
  const searchParams = useSearchParams();
  const { branch, setBranchId } = useBranch();

  useEffect(() => {
    const fromQuery = searchParams.get("branch");
    if (fromQuery && isBranchId(fromQuery)) {
      setBranchId(fromQuery);
    }
  }, [searchParams, setBranchId]);

  return (
    <div
      id={BRANCH_LOCATION_SECTION_ID}
      className="card-warm"
      style={{
        scrollMarginTop: "100px",
        marginTop: "1.5rem",
        marginBottom: "0.5rem",
        padding: "1rem 1.25rem",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        maxWidth: "640px",
      }}
    >
      <div>
        <p
          style={{
            margin: 0,
            fontSize: "0.6875rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--color-olive)",
          }}
        >
          Preferred clinic
        </p>
        <p style={{ margin: "0.25rem 0 0", fontSize: "0.9375rem", color: "var(--color-dark-moss)", lineHeight: 1.5 }}>
          {branch.locationLine}
        </p>
      </div>
      <BranchToggle compact />
    </div>
  );
}
