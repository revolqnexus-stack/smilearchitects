import LinkRichText from "@/components/seo/LinkRichText";
import type { LinkSegment } from "@/lib/seo/internal-links";

function segmentsForTreatment(slug: string): LinkSegment[] {
  const ortho = new Set([
    "orthodontics",
    "braces",
    "clear-aligners",
  ]);
  if (slug.includes("orthodont") || slug.includes("brace") || slug.includes("aligner")) {
    return [
      { type: "text", value: "Planning orthodontic care? Compare " },
      { type: "link", href: "/orthodontics/braces", label: "braces" },
      { type: "text", value: ", " },
      { type: "link", href: "/orthodontics/clear-aligners", label: "clear aligners" },
      { type: "text", value: ", and " },
      { type: "link", href: "/orthodontics/lingual-braces", label: "lingual braces" },
      { type: "text", value: ". Care in " },
      { type: "link", href: "/local/pala", label: "Pala" },
      { type: "text", value: " and " },
      { type: "link", href: "/thrissur", label: "Thrissur" },
      { type: "text", value: ". " },
      { type: "link", href: "/patient-guide/braces-and-aligners", label: "Patient guide: braces & aligners" },
      { type: "text", value: "." },
    ];
  }
  if (slug.includes("implant") || slug.includes("smile") || slug.includes("cosmetic")) {
    return [
      { type: "text", value: "Explore related " },
      { type: "link", href: "/treatments/dental-implants", label: "dental implants" },
      { type: "text", value: ", " },
      { type: "link", href: "/treatments/smile-design", label: "smile design" },
      { type: "text", value: ", and " },
      { type: "link", href: "/dental-guides/dental-implants-guide", label: "implants guide" },
      { type: "text", value: ". Available in " },
      { type: "link", href: "/local/pala", label: "Pala" },
      { type: "text", value: " & " },
      { type: "link", href: "/local/thrissur", label: "Thrissur" },
      { type: "text", value: " — " },
      { type: "link", href: "/patient-guide/implants-and-smile-design", label: "implants & smile design guide" },
      { type: "text", value: "." },
    ];
  }
  return [
    { type: "text", value: "Smile Architects offers this treatment at our " },
    { type: "link", href: "/local/pala", label: "Pala, Kottayam clinic" },
    { type: "text", value: " and " },
    { type: "link", href: "/thrissur", label: "Thrissur branch" },
    { type: "text", value: ". Browse " },
    { type: "link", href: "/treatments", label: "all treatments" },
    { type: "text", value: ", " },
    { type: "link", href: "/dental-guides", label: "patient guides" },
    { type: "text", value: ", or " },
    { type: "link", href: "/book-appointment", label: "book an appointment" },
    { type: "text", value: "." },
  ];
}

export default function TreatmentContextLinks({ slug }: { slug: string }) {
  return (
    <LinkRichText
      segments={segmentsForTreatment(slug)}
      style={{
        color: "var(--color-olive)",
        fontSize: "0.9375rem",
        lineHeight: 1.75,
        marginTop: "1rem",
        padding: "1rem 1.25rem",
        background: "rgba(243,248,233,0.6)",
        borderRadius: "12px",
        border: "1px solid var(--color-tea-green)",
      }}
    />
  );
}
