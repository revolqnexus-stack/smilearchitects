"use client";

import Link from "next/link";
import { useBranch } from "@/components/providers/BranchProvider";
import { PhoneIcon, WhatsAppIcon, CalendarIcon } from "@/components/ui/icons";
import { trackEvent, whatsAppUrl } from "@/lib/analytics";
import { branchWhatsAppEnquiryMessage } from "@/lib/branch-ui";

/**
 * Compact floating actions for mobile — fixed above safe-area, low visual weight.
 */
export default function MobileAppointmentBar() {
  const { branch } = useBranch();

  return (
    <nav
      aria-label="Quick actions"
      className="mobile-action-bar"
    >
      <a
        href={`tel:${branch.contact.phone}`}
        className="mobile-action-bar__btn mobile-action-bar__btn--call"
        onClick={() => trackEvent("phone_click", { branch: branch.id, placement: "mobile_bar" })}
        aria-label={`Call ${branch.contact.phoneDisplay}`}
      >
        <PhoneIcon size="sm" />
        <span>Call</span>
      </a>

      <a
        href={whatsAppUrl(branch.contact.phone, branchWhatsAppEnquiryMessage(branch))}
        className="mobile-action-bar__btn mobile-action-bar__btn--whatsapp"
        onClick={() => trackEvent("whatsapp_click", { branch: branch.id, placement: "mobile_bar" })}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size="sm" />
        <span>WhatsApp</span>
      </a>

      <Link
        href={`/book-appointment?branch=${branch.id}`}
        className="mobile-action-bar__btn mobile-action-bar__btn--book"
        onClick={() => trackEvent("book_click", { branch: branch.id, placement: "mobile_bar" })}
        aria-label="Book appointment"
      >
        <CalendarIcon size="sm" />
        <span>Book</span>
      </Link>
    </nav>
  );
}
