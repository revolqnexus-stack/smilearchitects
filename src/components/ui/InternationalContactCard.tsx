"use client";

import { useState } from "react";

interface InternationalContactCardProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  target?: string;
  rel?: string;
}

export default function InternationalContactCard({
  href,
  icon,
  label,
  value,
  target,
  rel,
}: InternationalContactCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.625rem",
        backgroundColor: isHovered ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.12)",
        backdropFilter: "blur(10px)",
        border: `1.5px solid ${isHovered ? "var(--color-jonquil)" : "rgba(234,200,0,0.3)"}`,
        borderRadius: "1rem",
        padding: "1.5rem 1.25rem",
        textDecoration: "none",
        transition: "all 0.3s ease",
        transform: isHovered ? "translateY(-2px)" : "translateY(0)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {icon}
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.8125rem",
            fontWeight: 600,
            color: "rgba(237,228,211,0.7)",
            marginBottom: "0.25rem",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: label === "Email" ? "0.9375rem" : "1rem",
            fontWeight: 700,
            color: "var(--color-honeydew)",
            margin: 0,
            wordBreak: label === "Email" ? "break-word" : "normal",
          }}
        >
          {value}
        </p>
      </div>
    </a>
  );
}
