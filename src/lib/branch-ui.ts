import type { ClinicBranch } from "./branches";

/** Scroll target for homepage / contact maps when the user picks a clinic. */
export const BRANCH_LOCATION_SECTION_ID = "branch-location";

export function branchDirectionsUrl(branch: ClinicBranch): string {
  return branch.maps.shareUrl ?? branch.maps.directionsUrl;
}

export function branchWhatsAppEnquiryMessage(branch: ClinicBranch): string {
  return `Hi Smile Architects, I'd like to book at your ${branch.label} clinic (${branch.address.city}).`;
}

export function scrollToBranchLocation(): void {
  if (typeof document === "undefined") return;
  const el = document.getElementById(BRANCH_LOCATION_SECTION_ID);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
