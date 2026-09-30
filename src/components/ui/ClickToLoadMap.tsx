"use client";

import { useState } from "react";
import { MapPinIcon } from "@/components/ui/icons";

type ClickToLoadMapProps = {
  embedUrl: string;
  title: string;
  /** Static preview label when map not loaded */
  previewLabel?: string;
  height?: number;
};

export default function ClickToLoadMap({
  embedUrl,
  title,
  previewLabel = "Tap to load map",
  height = 280,
}: ClickToLoadMapProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title={title}
        src={embedUrl}
        width="100%"
        height={height}
        style={{ border: 0, display: "block", borderRadius: "12px" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      style={{
        width: "100%",
        minHeight: height,
        borderRadius: "12px",
        border: "1px solid var(--color-tea-green)",
        background: "linear-gradient(135deg, var(--color-honeydew), var(--color-vanilla))",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        padding: "1.5rem",
        fontFamily: "var(--font-sans)",
      }}
    >
      <MapPinIcon size="lg" />
      <span style={{ fontWeight: 600, color: "var(--color-dark-moss)" }}>{previewLabel}</span>
      <span style={{ fontSize: "0.8125rem", color: "var(--color-olive)" }}>Loads Google Maps (saves mobile data)</span>
    </button>
  );
}
