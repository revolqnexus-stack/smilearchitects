/**
 * DOCTOR PHOTO COMPONENT
 *
 * Shows the actual photo when a `photo` path is provided.
 * Falls back to a styled initials avatar if no photo exists.
 */

import Image from "next/image";

interface DoctorPhotoProps {
  name: string;
  photo?: string | null;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  priority?: boolean;
  /** Fine-tune crop for tall clinic portraits (default: face-focused) */
  objectPosition?: string;
}

const SIZE_MAP = {
  sm: { px: 64, font: "1.125rem", badge: 16, badgeIcon: 8, zoom: 1.55 },
  md: { px: 96, font: "1.625rem", badge: 20, badgeIcon: 10, zoom: 1.65 },
  lg: { px: 132, font: "2.25rem", badge: 24, badgeIcon: 12, zoom: 1.85 },
  xl: { px: 200, font: "3rem", badge: 32, badgeIcon: 16, zoom: 1.75 },
};

export default function DoctorPhoto({
  name,
  photo,
  size = "md",
  className = "",
  priority = false,
  objectPosition = "50% 8%",
}: DoctorPhotoProps) {
  const { px, font, badge, badgeIcon, zoom } = SIZE_MAP[size];
  const initials = name
    .split(" ")
    .map((p) => p.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");

  return (
    <div
      className={`doctor-photo doctor-photo--${size} ${className}`.trim()}
      style={{
        width: px,
        height: px,
        borderRadius: "50%",
        border: "3px solid var(--color-olive)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
        boxShadow: "var(--shadow-sm)",
        backgroundColor: "var(--color-tea-green)",
      }}
    >
      {photo ? (
        <Image
          src={photo}
          alt={`Photo of ${name}`}
          fill
          sizes={`(max-width: 768px) 180px, ${px}px`}
          priority={priority}
          className="doctor-photo-image"
          style={{
            objectFit: "cover",
            objectPosition,
            transform: `scale(${zoom})`,
            transformOrigin: "center center",
          }}
        />
      ) : (
        <span
          style={{
            fontSize: font,
            fontFamily: "var(--font-serif)",
            fontWeight: 600,
            color: "var(--color-dark-moss)",
            lineHeight: 1,
            userSelect: "none",
          }}
        >
          {initials}
        </span>
      )}

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: badge,
          height: badge,
          backgroundColor: "var(--color-jonquil)",
          border: "2px solid white",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <svg width={badgeIcon} height={badgeIcon} viewBox="0 0 24 24" fill="none">
          <path
            d="M9 12L11 14L15 10"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
