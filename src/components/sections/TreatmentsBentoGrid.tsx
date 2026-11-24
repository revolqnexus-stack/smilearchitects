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
───────────────────────────────────────────────────────────────── */
const TREATMENT_IMAGES: Record<
  string,
  { imagePath: string; alt: string }
> = {
  "smile-design": {
    imagePath: "/images/treatments/01-smile-design.webp",
    alt: "Digital smile design transformation at Smile Architects",
  },
  orthodontics: {
    imagePath: "/images/treatments/02-orthodontics.webp",
    alt: "Orthodontic treatment with braces at Smile Architects Pala",
  },
  braces: {
    imagePath: "/images/treatments/03-braces.webp",
    alt: "Dental braces treatment - metal and ceramic options",
  },
  "clear-aligners": {
    imagePath: "/images/treatments/04-clear-aligners.webp",
    alt: "Clear aligner treatment - invisible orthodontics",
  },
  "lingual-braces": {
    imagePath: "/images/treatments/05-lingual-braces.webp",
    alt: "Lingual braces - hidden orthodontic treatment",
  },
  "cosmetic-dentistry": {
    imagePath: "/images/treatments/06-cosmetic-dentistry.webp",
    alt: "Cosmetic dentistry and smile enhancement services",
  },
  "dental-implants": {
    imagePath: "/images/treatments/07-dental-implants.webp",
    alt: "Dental implants - permanent tooth replacement solution",
  },
  "general-dentistry": {
    imagePath: "/images/treatments/08-general-dentistry.webp",
    alt: "General dentistry and preventive dental care",
  },
  "pediatric-dentistry": {
    imagePath: "/images/treatments/09-pediatric-dentistry.webp",
    alt: "Pediatric dentistry - gentle dental care for children",
  },
  "root-canal-treatment": {
    imagePath: "/images/treatments/10-root-canal-treatment.webp",
    alt: "Root canal treatment - saving infected teeth",
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
  const [isHovered, setIsHovered] = useState(false);
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
            setTimeout(() => setIsVisible(true), index * 70); // stagger delay
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
      className={`treatment-tile treatment-tile-${size} ${
        isVisible ? "is-visible" : ""
      }`}
      style={{
        gridColumn: BENTO_LAYOUT.desktop[treatment.slug as keyof typeof BENTO_LAYOUT.desktop]?.col,
        gridRow: BENTO_LAYOUT.desktop[treatment.slug as keyof typeof BENTO_LAYOUT.desktop]?.row,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      aria-label={`Learn about ${treatment.title}`}
    >
      {/* Background Image */}
      <Image
        src={imageData.imagePath}
        alt={imageData.alt}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="treatment-tile-image"
        style={{ objectFit: "cover" }}
        loading={index > 2 ? "lazy" : "eager"}
      />

      {/* Gradient scrim for text legibility */}
      <div className="treatment-tile-scrim" aria-hidden="true" />

      {/* Number badge */}
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
        }

        .treatment-tile.is-visible {
          opacity: 1;
          transform: translateY(0);
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

        /* Background image */
        .treatment-tile-image {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .treatment-tile:hover .treatment-tile-image {
          transform: scale(1.05);
        }

        /* Darker gradient scrim - matches reference */
        .treatment-tile-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.75) 0%,
            rgba(0, 0, 0, 0.4) 40%,
            rgba(0, 0, 0, 0.1) 70%,
            transparent 100%
          );
          transition: background 0.3s ease;
        }

        .treatment-tile:hover .treatment-tile-scrim {
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.85) 0%,
            rgba(0, 0, 0, 0.5) 40%,
            rgba(0, 0, 0, 0.15) 70%,
            transparent 100%
          );
        }

        /* Number badge - top left corner */
        .treatment-tile-badge {
          position: absolute;
          top: 1.25rem;
          left: 1.25rem;
          font-family: var(--font-utility);
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.75);
          letter-spacing: 0.05em;
          z-index: 2;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(8px);
          padding: 0.375rem 0.75rem;
          border-radius: 6px;
        }

        /* Content - bottom left positioning */
        .treatment-tile-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.75rem;
          z-index: 1;
        }

        .treatment-tile-title {
          font-family: var(--font-serif);
          font-size: 1.75rem;
          font-weight: 400;
          color: #ffffff;
          margin: 0 0 0.5rem 0;
          line-height: 1.15;
        }

        .treatment-tile-description {
          font-family: var(--font-sans);
          font-size: 0.9375rem;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.5;
          margin: 0 0 1rem 0;
        }

        .treatment-tile-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-utility);
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-olive);
          transition: gap 0.3s ease, color 0.3s ease;
          padding: 0.5rem 0;
        }

        .treatment-tile:hover .treatment-tile-cta,
        .treatment-tile:focus-visible .treatment-tile-cta {
          gap: 0.75rem;
          color: var(--color-jonquil);
        }

        /* Size-specific adjustments */
        .treatment-tile-hero .treatment-tile-title {
          font-size: 2.25rem;
        }

        .treatment-tile-medium .treatment-tile-title {
          font-size: 1.5rem;
        }

        .treatment-tile-small .treatment-tile-title {
          font-size: 1.25rem;
        }

        .treatment-tile-small .treatment-tile-content {
          padding: 1.25rem;
        }

        .treatment-tile-small .treatment-tile-description {
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
        }

        .treatment-tile-small .treatment-tile-badge {
          top: 1rem;
          left: 1rem;
          font-size: 0.6875rem;
          padding: 0.3125rem 0.625rem;
        }

        /* Tablet: 6 columns */
        @media (max-width: 1023px) {
          .treatments-bento-grid {
            grid-template-columns: repeat(6, 1fr);
            grid-auto-rows: 90px;
            gap: 12px;
          }

          ${Object.entries(BENTO_LAYOUT.tablet)
            .map(
              ([slug, layout]) => `
            .treatment-tile[href="/treatments/${slug}"] {
              grid-column: ${layout.col};
              grid-row: ${layout.row};
            }
          `
            )
            .join("")}

          .treatment-tile-title {
            font-size: 1.375rem;
          }

          .treatment-tile-hero .treatment-tile-title {
            font-size: 1.875rem;
          }

          .treatment-tile-content {
            padding: 1.5rem;
          }
        }

        /* Mobile: 2 columns */
        @media (max-width: 639px) {
          .treatments-bento-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: minmax(220px, auto);
            gap: 10px;
          }

          ${Object.entries(BENTO_LAYOUT.mobile)
            .map(
              ([slug, layout]) => `
            .treatment-tile[href="/treatments/${slug}"] {
              grid-column: ${layout.col};
              grid-row: ${layout.row};
            }
          `
            )
            .join("")}

          .treatment-tile-content {
            padding: 1.25rem;
          }

          .treatment-tile-title {
            font-size: 1.125rem;
          }

          .treatment-tile-hero .treatment-tile-title {
            font-size: 1.5rem;
          }

          .treatment-tile-description {
            font-size: 0.8125rem;
            margin-bottom: 0.75rem;
          }

          .treatment-tile-cta {
            font-size: 0.6875rem;
          }

          .treatment-tile-badge {
            font-size: 0.625rem;
            padding: 0.25rem 0.5rem;
            top: 0.875rem;
            left: 0.875rem;
          }
        }

        /* Reduced motion */
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
