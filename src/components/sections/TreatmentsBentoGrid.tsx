"use client";

import Link from "next/link";
import Image from "next/image";
import { TreatmentIconFor, ArrowRightIcon } from "@/components/ui/icons";
import { TREATMENTS } from "@/lib/site-config";
import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────────────
   TREATMENT IMAGES MAP
   
   Real clinic photography for all treatments.
   Images optimized in WebP format for best performance.
   object-position helps focus the crop on faces/teeth above text zone.
───────────────────────────────────────────────────────────────── */
const TREATMENT_IMAGES: Record<
  string,
  { imagePath: string; alt: string; objectPosition?: string }
> = {
  "smile-design": {
    imagePath: "/images/treatments/01-smile-design.webp",
    alt: "Digital smile design transformation at Smile Architects",
    objectPosition: "center 30%", // Focus on face, avoid watermark
  },
  orthodontics: {
    imagePath: "/images/treatments/02-orthodontics.webp",
    alt: "Orthodontic treatment with braces at Smile Architects Pala",
    objectPosition: "center center",
  },
  braces: {
    imagePath: "/images/treatments/03-braces.webp",
    alt: "Dental braces treatment - metal and ceramic options",
    objectPosition: "center center",
  },
  "clear-aligners": {
    imagePath: "/images/treatments/04-clear-aligners.webp",
    alt: "Clear aligner treatment - invisible orthodontics",
    objectPosition: "center 40%", // Focus on face
  },
  "lingual-braces": {
    imagePath: "/images/treatments/05-lingual-braces.webp",
    alt: "Lingual braces - hidden orthodontic treatment",
    objectPosition: "center center",
  },
  "cosmetic-dentistry": {
    imagePath: "/images/treatments/06-cosmetic-dentistry.webp",
    alt: "Cosmetic dentistry and smile enhancement services",
    objectPosition: "center 35%", // Focus on smile
  },
  "dental-implants": {
    imagePath: "/images/treatments/07-dental-implants.webp",
    alt: "Dental implants - permanent tooth replacement solution",
    objectPosition: "center center",
  },
  "general-dentistry": {
    imagePath: "/images/treatments/08-general-dentistry.webp",
    alt: "General dentistry and preventive dental care",
    objectPosition: "center center",
  },
  "pediatric-dentistry": {
    imagePath: "/images/treatments/09-pediatric-dentistry.webp",
    alt: "Pediatric dentistry - gentle dental care for children",
    objectPosition: "center 35%", // Focus on child's face
  },
  "root-canal-treatment": {
    imagePath: "/images/treatments/10-root-canal-treatment.webp",
    alt: "Root canal treatment - saving infected teeth",
    objectPosition: "center center",
  },
};

/* ─────────────────────────────────────────────────────────────────
   GRID LAYOUT CONFIG
   
   Each treatment gets explicit grid placement at desktop, tablet, mobile.
   The 10 featured treatments are hard-coded in the display order.
───────────────────────────────────────────────────────────────── */
const BENTO_LAYOUT = {
  desktop: {
    // 12-column grid, 8 row units (~96px each, 16px gap)
    "smile-design": { col: "1 / 7", row: "1 / 5" }, // hero landscape
    orthodontics: { col: "7 / 10", row: "1 / 3" }, // medium
    braces: { col: "10 / 13", row: "1 / 3" }, // medium
    "clear-aligners": { col: "7 / 13", row: "3 / 5" }, // wide panoramic
    "cosmetic-dentistry": { col: "1 / 3", row: "5 / 9" }, // tall portrait
    "lingual-braces": { col: "3 / 5", row: "5 / 7" }, // small
    "general-dentistry": { col: "5 / 7", row: "5 / 7" }, // small
    "pediatric-dentistry": { col: "3 / 5", row: "7 / 9" }, // small
    "root-canal-treatment": { col: "5 / 7", row: "7 / 9" }, // small
    "dental-implants": { col: "7 / 13", row: "5 / 9" }, // second hero
  },
  tablet: {
    // 6-column grid
    "smile-design": { col: "1 / 7", row: "1 / 4" }, // 6×3
    orthodontics: { col: "1 / 4", row: "4 / 6" }, // 3×2
    braces: { col: "4 / 7", row: "4 / 6" }, // 3×2
    "clear-aligners": { col: "1 / 7", row: "6 / 8" }, // 6×2
    "dental-implants": { col: "1 / 7", row: "8 / 11" }, // 6×3
    "cosmetic-dentistry": { col: "1 / 7", row: "11 / 13" }, // 6×2
    "lingual-braces": { col: "1 / 4", row: "13 / 15" }, // 3×2
    "general-dentistry": { col: "4 / 7", row: "13 / 15" }, // 3×2
    "pediatric-dentistry": { col: "1 / 4", row: "15 / 17" }, // 3×2
    "root-canal-treatment": { col: "4 / 7", row: "15 / 17" }, // 3×2
  },
  mobile: {
    // 2-column grid
    "smile-design": { col: "1 / 3", row: "auto" }, // full width
    "clear-aligners": { col: "1 / 3", row: "auto" }, // full width
    "dental-implants": { col: "1 / 3", row: "auto" }, // full width
    "root-canal-treatment": { col: "1 / 3", row: "auto" }, // full width
    orthodontics: { col: "1 / 2", row: "auto" }, // half
    braces: { col: "2 / 3", row: "auto" }, // half (same row)
    "lingual-braces": { col: "1 / 2", row: "auto" }, // half
    "cosmetic-dentistry": { col: "2 / 3", row: "auto" }, // half (same row)
    "general-dentistry": { col: "1 / 2", row: "auto" }, // half
    "pediatric-dentistry": { col: "2 / 3", row: "auto" }, // half (same row)
  },
};

/* ─────────────────────────────────────────────────────────────────
   TILE SIZE CATEGORIES
   Used to determine which tiles show descriptions, icons, etc.
───────────────────────────────────────────────────────────────── */
const TILE_SIZES = {
  hero: ["smile-design", "dental-implants"],
  medium: ["orthodontics", "braces", "clear-aligners", "cosmetic-dentistry"],
  small: [
    "lingual-braces",
    "general-dentistry",
    "pediatric-dentistry",
    "root-canal-treatment",
  ],
};

/* ─────────────────────────────────────────────────────────────────
   TREATMENT TILE COMPONENT
───────────────────────────────────────────────────────────────── */
interface TreatmentTileProps {
  treatment: (typeof TREATMENTS)[number];
  size: "hero" | "medium" | "small";
  index: number;
}

function TreatmentTile({ treatment, size, index }: TreatmentTileProps) {
  const imageData = TREATMENT_IMAGES[treatment.slug];
  const [isVisible, setIsVisible] = useState(false);
  const tileRef = useRef<HTMLAnchorElement>(null);

  // Get total count of featured treatments
  const totalCount = 10;
  const displayNumber = (index + 1).toString().padStart(2, "0");

  // Intersection observer for stagger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), index * 70);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (tileRef.current) {
      observer.observe(tileRef.current);
    }

    return () => {
      if (tileRef.current) {
        observer.unobserve(tileRef.current);
      }
    };
  }, [index]);

  return (
    <Link
      ref={tileRef}
      href={`/treatments/${treatment.slug}`}
      className={`treatment-tile treatment-tile-${size} treatment-tile-${treatment.slug} ${
        isVisible ? "is-visible" : ""
      }`}
      aria-label={`Learn about ${treatment.title}`}
    >
      {/* Background Image */}
      <Image
        src={imageData.imagePath}
        alt={imageData.alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="treatment-tile-image"
        style={{ 
          objectFit: "cover",
          objectPosition: imageData.objectPosition || "center center"
        }}
        loading={index > 2 ? "lazy" : "eager"}
      />

      {/* Green tint overlay */}
      <div className="treatment-tile-tint" aria-hidden="true" />

      {/* Gradient scrim for text legibility */}
      <div className="treatment-tile-scrim" aria-hidden="true" />

      {/* Number badge - hidden on small tiles */}
      <div className="treatment-tile-badge" aria-hidden="true">
        {displayNumber} / {totalCount}
      </div>

      {/* Content */}
      <div className="treatment-tile-content">
        <h3 className="treatment-tile-title">{treatment.title}</h3>
        <p className="treatment-tile-description">{treatment.shortDescription}</p>
        <span className="treatment-tile-cta">
          LEARN MORE <ArrowRightIcon size="sm" />
        </span>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────────────────────────────
   MAIN BENTO GRID COMPONENT
───────────────────────────────────────────────────────────────── */
export default function TreatmentsBentoGrid() {
  // Get the 10 featured treatments in display order
  const featuredTreatments = TREATMENTS.filter((t) => t.featured);

  // Determine size for each treatment
  const getTreatmentSize = (slug: string): "hero" | "medium" | "small" => {
    if (TILE_SIZES.hero.includes(slug)) return "hero";
    if (TILE_SIZES.medium.includes(slug)) return "medium";
    return "small";
  };

  return (
    <>
      <div className="treatments-bento-grid">
        {featuredTreatments.map((treatment, index) => (
          <TreatmentTile
            key={treatment.id}
            treatment={treatment}
            size={getTreatmentSize(treatment.slug)}
            index={index}
          />
        ))}
      </div>

      <style jsx global>{`
        /* ═══════════════════════════════════════════════════════════
           TREATMENTS BENTO GRID - RESPONSIVE LAYOUT
           No inline styles, proper media query support
        ═══════════════════════════════════════════════════════════ */

        .treatments-bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: 96px;
          gap: 16px;
          margin-bottom: 3rem;
        }

        .treatment-tile {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          display: block;
          text-decoration: none;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
          opacity: 0;
          transform: translateY(20px);
          /* Prevent grid blowout */
          min-width: 0;
          min-height: 0;
        }

        .treatment-tile.is-visible {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.6s ease, transform 0.6s ease,
            box-shadow 0.4s ease;
        }

        .treatment-tile:hover,
        .treatment-tile:focus-visible {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
        }

        .treatment-tile:focus-visible {
          outline: 3px solid var(--color-jonquil);
          outline-offset: 4px;
        }

        /* ─────────────────────────────────────────────────────────
           DESKTOP LAYOUT (≥1024px) - 12 columns
        ───────────────────────────────────────────────────────── */
        @media (min-width: 1024px) {
          .treatment-tile-smile-design {
            grid-column: 1 / 7;
            grid-row: 1 / 5;
          }
          .treatment-tile-orthodontics {
            grid-column: 7 / 10;
            grid-row: 1 / 3;
          }
          .treatment-tile-braces {
            grid-column: 10 / 13;
            grid-row: 1 / 3;
          }
          .treatment-tile-clear-aligners {
            grid-column: 7 / 13;
            grid-row: 3 / 5;
          }
          .treatment-tile-cosmetic-dentistry {
            grid-column: 1 / 3;
            grid-row: 5 / 9;
          }
          .treatment-tile-lingual-braces {
            grid-column: 3 / 5;
            grid-row: 5 / 7;
          }
          .treatment-tile-general-dentistry {
            grid-column: 5 / 7;
            grid-row: 5 / 7;
          }
          .treatment-tile-pediatric-dentistry {
            grid-column: 3 / 5;
            grid-row: 7 / 9;
          }
          .treatment-tile-root-canal-treatment {
            grid-column: 5 / 7;
            grid-row: 7 / 9;
          }
          .treatment-tile-dental-implants {
            grid-column: 7 / 13;
            grid-row: 5 / 9;
          }
        }

        /* ─────────────────────────────────────────────────────────
           TABLET LAYOUT (640px – 1023px) - 6 columns
        ───────────────────────────────────────────────────────── */
        @media (min-width: 640px) and (max-width: 1023px) {
          .treatments-bento-grid {
            grid-template-columns: repeat(6, 1fr);
            grid-auto-rows: 90px;
            gap: 12px;
          }

          .treatment-tile-smile-design {
            grid-column: 1 / 7;
            grid-row: 1 / 4;
          }
          .treatment-tile-orthodontics {
            grid-column: 1 / 4;
            grid-row: 4 / 6;
          }
          .treatment-tile-braces {
            grid-column: 4 / 7;
            grid-row: 4 / 6;
          }
          .treatment-tile-clear-aligners {
            grid-column: 1 / 7;
            grid-row: 6 / 8;
          }
          .treatment-tile-dental-implants {
            grid-column: 1 / 7;
            grid-row: 8 / 11;
          }
          .treatment-tile-cosmetic-dentistry {
            grid-column: 1 / 7;
            grid-row: 11 / 13;
          }
          .treatment-tile-lingual-braces {
            grid-column: 1 / 4;
            grid-row: 13 / 15;
          }
          .treatment-tile-general-dentistry {
            grid-column: 4 / 7;
            grid-row: 13 / 15;
          }
          .treatment-tile-pediatric-dentistry {
            grid-column: 1 / 4;
            grid-row: 15 / 17;
          }
          .treatment-tile-root-canal-treatment {
            grid-column: 4 / 7;
            grid-row: 15 / 17;
          }
        }

        /* ─────────────────────────────────────────────────────────
           MOBILE LAYOUT (<640px) - 2 columns with aspect-ratio
        ───────────────────────────────────────────────────────── */
        @media (max-width: 639px) {
          .treatments-bento-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-auto-rows: auto;
            gap: 12px;
          }

          /* Full width tiles (4:3 ratio) */
          .treatment-tile-smile-design,
          .treatment-tile-clear-aligners,
          .treatment-tile-dental-implants,
          .treatment-tile-root-canal-treatment {
            grid-column: span 2;
            aspect-ratio: 4 / 3;
          }

          /* Half width tiles (1:1 ratio) */
          .treatment-tile-orthodontics,
          .treatment-tile-braces,
          .treatment-tile-lingual-braces,
          .treatment-tile-cosmetic-dentistry,
          .treatment-tile-general-dentistry,
          .treatment-tile-pediatric-dentistry {
            grid-column: span 1;
            aspect-ratio: 1 / 1;
          }
        }

        /* ─────────────────────────────────────────────────────────
           IMAGE & OVERLAYS
        ───────────────────────────────────────────────────────── */
        .treatment-tile-image {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .treatment-tile:hover .treatment-tile-image {
          transform: scale(1.05);
        }

        /* Green tint overlay (~18% opacity) */
        .treatment-tile-tint {
          position: absolute;
          inset: 0;
          background: rgba(31, 58, 20, 0.18);
          pointer-events: none;
          z-index: 1;
        }

        /* Gradient scrim for legibility */
        .treatment-tile-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(31, 58, 20, 0.92) 0%,
            rgba(31, 58, 20, 0.65) 40%,
            rgba(31, 58, 20, 0.15) 75%,
            transparent 100%
          );
          transition: background 0.3s ease;
          pointer-events: none;
          z-index: 2;
        }

        .treatment-tile:hover .treatment-tile-scrim {
          background: linear-gradient(
            to top,
            rgba(31, 58, 20, 0.95) 0%,
            rgba(31, 58, 20, 0.72) 40%,
            rgba(31, 58, 20, 0.2) 75%,
            transparent 100%
          );
        }

        /* ─────────────────────────────────────────────────────────
           NUMBER BADGE
        ───────────────────────────────────────────────────────── */
        .treatment-tile-badge {
          position: absolute;
          top: clamp(12px, 2vw, 20px);
          left: clamp(12px, 2vw, 20px);
          font-family: var(--font-utility);
          font-size: 0.6875rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          letter-spacing: 0.05em;
          z-index: 3;
          background: rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(8px);
          padding: 0.3125rem 0.625rem;
          border-radius: 6px;
          line-height: 1;
        }

        /* Hide badge on small tiles (desktop) and mobile half tiles */
        @media (min-width: 1024px) {
          .treatment-tile-small .treatment-tile-badge {
            display: none;
          }
        }

        @media (max-width: 639px) {
          .treatment-tile-orthodontics .treatment-tile-badge,
          .treatment-tile-braces .treatment-tile-badge,
          .treatment-tile-lingual-braces .treatment-tile-badge,
          .treatment-tile-cosmetic-dentistry .treatment-tile-badge,
          .treatment-tile-general-dentistry .treatment-tile-badge,
          .treatment-tile-pediatric-dentistry .treatment-tile-badge {
            display: none;
          }
        }

        /* ─────────────────────────────────────────────────────────
           CONTENT CONTAINER
        ───────────────────────────────────────────────────────── */
        .treatment-tile-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: clamp(12px, 2vw, 24px);
          z-index: 3;
          overflow: hidden;
        }

        /* ─────────────────────────────────────────────────────────
           TITLE
        ───────────────────────────────────────────────────────── */
        .treatment-tile-title {
          font-family: var(--font-serif);
          font-weight: 400;
          color: var(--color-honeydew);
          margin: 0 0 0.375rem 0;
          line-height: 1.1;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Hero tiles */
        .treatment-tile-hero .treatment-tile-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
        }

        /* Medium tiles */
        .treatment-tile-medium .treatment-tile-title {
          font-size: clamp(1.25rem, 2vw, 1.75rem);
        }

        /* Small tiles */
        .treatment-tile-small .treatment-tile-title {
          font-size: clamp(1rem, 1.4vw, 1.25rem);
        }

        /* Mobile half tiles: fixed 1rem */
        @media (max-width: 639px) {
          .treatment-tile-orthodontics .treatment-tile-title,
          .treatment-tile-braces .treatment-tile-title,
          .treatment-tile-lingual-braces .treatment-tile-title,
          .treatment-tile-cosmetic-dentistry .treatment-tile-title,
          .treatment-tile-general-dentistry .treatment-tile-title,
          .treatment-tile-pediatric-dentistry .treatment-tile-title {
            font-size: 1rem;
          }
        }

        /* ─────────────────────────────────────────────────────────
           DESCRIPTION
        ───────────────────────────────────────────────────────── */
        .treatment-tile-description {
          font-family: var(--font-sans);
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.5;
          margin: 0 0 0.75rem 0;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Hero tiles: always show, 3 lines */
        .treatment-tile-hero .treatment-tile-description {
          -webkit-line-clamp: 3;
        }

        /* Medium tiles: always show, 2 lines */
        .treatment-tile-medium .treatment-tile-description {
          -webkit-line-clamp: 2;
        }

        /* Small tiles: hidden by default, show on hover */
        .treatment-tile-small .treatment-tile-description {
          display: none;
        }

        @media (min-width: 1024px) {
          .treatment-tile-small:hover .treatment-tile-description,
          .treatment-tile-small:focus-visible .treatment-tile-description {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }

        /* Mobile half tiles: NO description ever */
        @media (max-width: 639px) {
          .treatment-tile-orthodontics .treatment-tile-description,
          .treatment-tile-braces .treatment-tile-description,
          .treatment-tile-lingual-braces .treatment-tile-description,
          .treatment-tile-cosmetic-dentistry .treatment-tile-description,
          .treatment-tile-general-dentistry .treatment-tile-description,
          .treatment-tile-pediatric-dentistry .treatment-tile-description {
            display: none !important;
          }

          /* Mobile full-width tiles: show description */
          .treatment-tile-smile-design .treatment-tile-description,
          .treatment-tile-clear-aligners .treatment-tile-description,
          .treatment-tile-dental-implants .treatment-tile-description,
          .treatment-tile-root-canal-treatment .treatment-tile-description {
            display: -webkit-box;
            font-size: 0.875rem;
            -webkit-line-clamp: 2;
          }
        }

        /* ─────────────────────────────────────────────────────────
           CTA
        ───────────────────────────────────────────────────────── */
        .treatment-tile-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-utility);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-jonquil);
          transition: gap 0.3s ease, color 0.3s ease;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
          line-height: 1;
        }

        .treatment-tile:hover .treatment-tile-cta,
        .treatment-tile:focus-visible .treatment-tile-cta {
          gap: 0.75rem;
        }

        @media (max-width: 639px) {
          .treatment-tile-cta {
            font-size: 0.6875rem;
          }
        }

        /* ─────────────────────────────────────────────────────────
           REDUCED MOTION
        ───────────────────────────────────────────────────────── */
        @media (prefers-reduced-motion: reduce) {
          .treatment-tile,
          .treatment-tile-image,
          .treatment-tile-cta {
            transition: none;
          }

          .treatment-tile:hover .treatment-tile-image {
            transform: none;
          }

          .treatment-tile.is-visible {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </>
  );
}
