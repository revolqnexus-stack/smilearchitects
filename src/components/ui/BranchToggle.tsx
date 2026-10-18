"use client";

import { usePathname, useRouter } from "next/navigation";
import { useBranch } from "@/components/providers/BranchProvider";
import { BRANCH_LIST, type BranchId } from "@/lib/branches";
import { scrollToBranchLocation } from "@/lib/branch-ui";
import { trackEvent } from "@/lib/analytics";

type BranchToggleProps = {
  /** Light strip above navbar; dark for mobile menu panel */
  variant?: "light" | "dark";
  /** Hide "Your clinic" label on very small screens */
  compact?: boolean;
};

export default function BranchToggle({
  variant = "light",
  compact = false,
}: BranchToggleProps) {
  const { branchId, setBranchId } = useBranch();
  const pathname = usePathname();
  const router = useRouter();
  const isDark = variant === "dark";

  const handleSelect = (id: BranchId) => {
    if (id === branchId) return;
    setBranchId(id);
    trackEvent("branch_select", { branch: id, page: pathname });

    if (pathname === "/") {
      scrollToBranchLocation();
      return;
    }
    if (pathname === "/contact" || pathname === "/book-appointment") {
      scrollToBranchLocation();
      return;
    }
    if (pathname === "/thrissur" || pathname === "/local/thrissur") {
      if (id === "pala") router.push("/");
      return;
    }
    if (pathname === "/local/pala" || pathname === "/local/kottayam") {
      if (id === "thrissur") router.push("/thrissur");
      return;
    }
  };

  return (
    <div
      role="group"
      aria-label="Choose which clinic you want directions and booking for"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: compact ? "0.5rem" : "0.625rem",
        flexWrap: "wrap",
        maxWidth: "100%",
      }}
    >
      {!compact && (
        <span
          style={{
            fontSize: "0.6875rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: isDark ? "rgba(236,245,226,0.65)" : "var(--color-olive)",
            fontFamily: "var(--font-sans)",
            whiteSpace: "nowrap",
          }}
        >
          Your clinic
        </span>
      )}
      <div
        style={{
          display: "inline-flex",
          padding: "3px",
          borderRadius: "9999px",
          background: isDark ? "rgba(0,0,0,0.25)" : "rgba(223,210,188,0.45)",
          border: isDark
            ? "1px solid rgba(223,210,188,0.2)"
            : "1px solid rgba(126,132,7,0.25)",
          maxWidth: "100%",
        }}
      >
        {BRANCH_LIST.map((b) => {
          const selected = branchId === b.id;
          return (
            <button
              key={b.id}
              type="button"
              aria-pressed={selected}
              aria-label={`${b.label}, ${b.toggleHint}`}
              onClick={() => handleSelect(b.id as BranchId)}
              style={{
                border: "none",
                cursor: "pointer",
                borderRadius: "9999px",
                padding: "0.4375rem 0.875rem",
                fontSize: "0.8125rem",
                fontWeight: selected ? 700 : 600,
                fontFamily: "var(--font-sans)",
                lineHeight: 1.2,
                minHeight: "34px",
                transition: "background 0.2s, color 0.2s, box-shadow 0.2s",
                background: selected
                  ? isDark
                    ? "var(--color-jonquil)"
                    : "var(--color-white)"
                  : "transparent",
                color: selected
                  ? "var(--color-dark-moss)"
                  : isDark
                    ? "var(--color-honeydew)"
                    : "var(--color-dark-moss)",
                boxShadow: selected && !isDark ? "0 1px 4px rgba(37,78,6,0.12)" : "none",
              }}
            >
              {b.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
