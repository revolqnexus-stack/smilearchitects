import type { CSSProperties } from "react";
import Link from "next/link";
import type { LinkSegment } from "@/lib/seo/internal-links";

type LinkRichTextProps = {
  segments: LinkSegment[];
  className?: string;
  style?: CSSProperties;
  /** Hero / dark backgrounds use gold links without underlines */
  variant?: "default" | "hero";
};

export default function LinkRichText({
  segments,
  className,
  style,
  variant = "default",
}: LinkRichTextProps) {
  const linkClass = variant === "hero" ? "sa-prose-link sa-prose-link--hero" : "sa-prose-link";

  return (
    <p className={className} style={style}>
      {segments.map((segment, i) =>
        segment.type === "text" ? (
          <span key={i}>{segment.value}</span>
        ) : (
          <Link key={i} href={segment.href} className={linkClass}>
            {segment.label}
          </Link>
        )
      )}
    </p>
  );
}
