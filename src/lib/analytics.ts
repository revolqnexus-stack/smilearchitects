type EventParams = Record<string, string | number | boolean | undefined>;

/** GA4 / gtag — safe no-op when analytics is not loaded */
export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (!gtag) return;
  const page = window.location.pathname;
  gtag("event", eventName, {
    page_path: page,
    ...params,
  });
}

export function whatsAppUrl(phoneE164: string, message: string) {
  const digits = phoneE164.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function buildLeadWhatsAppMessage(fields: {
  name: string;
  phone: string;
  treatment?: string;
  branchLabel: string;
}) {
  let msg = "Hi Smile Architects, I'd like to book an appointment.\n\n";
  msg += `Name: ${fields.name}\n`;
  msg += `Phone: ${fields.phone}\n`;
  msg += `Preferred branch: ${fields.branchLabel}\n`;
  if (fields.treatment) msg += `Treatment: ${fields.treatment}\n`;
  return msg;
}
