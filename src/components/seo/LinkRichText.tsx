import type { CSSProperties } from "react";
import Link from "next/link";
import type { LinkSegment } from "@/lib/seo/internal-links";

type LinkRichTextProps = {
  segments: LinkSegment[];
  className?: string;
  style?: CSSProperties;
};

export default function LinkRichText({ segments, className, style }: LinkRichTextProps) {
  return (
    <p className={className} style={style}>
      {segments.map((segment, i) =>
        segment.type === "text" ? (
          <span key={i}>{segment.value}</span>
        ) : (
          <Link
            key={i}
            href={segment.href}
            style={{ color: "var(--color-dark-moss)", fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "2px" }}
          >
            {segment.label}
          </Link>
        )
      )}
    </p>
  );
}
