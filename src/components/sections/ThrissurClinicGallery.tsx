import Image from "next/image";
import { BRANCH_THRISSUR } from "@/lib/branches";

export default function ThrissurClinicGallery() {
  const media = BRANCH_THRISSUR.media;
  if (!media?.gallery.length) return null;

  return (
    <section aria-labelledby="thrissur-gallery-heading" className="section-padding section-white">
      <div className="container-xl">
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-olive)",
            fontWeight: 600,
            marginBottom: "0.75rem",
            textAlign: "center",
          }}
        >
          The Clinic
        </p>
        <h2
          id="thrissur-gallery-heading"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            color: "var(--color-dark-moss)",
            fontWeight: 400,
            textAlign: "center",
            marginBottom: "2.5rem",
            lineHeight: 1.15,
          }}
        >
          Inside our Thrissur branch
        </h2>

        <div
          className="thrissur-gallery-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1rem",
          }}
        >
          {media.gallery.map((item, index) => (
            <figure
              key={item.src}
              style={{
                margin: 0,
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid var(--color-tea-green)",
                background: "var(--color-honeydew)",
                gridColumn: index === 0 ? "span 2" : undefined,
                gridRow: index === 0 ? "span 2" : undefined,
                minHeight: index === 0 ? "280px" : "200px",
                position: "relative",
              }}
              className={index === 0 ? "thrissur-gallery-feature" : undefined}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                priority={index === 0}
              />
            </figure>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 640px) {
          .thrissur-gallery-feature {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
            min-height: 220px !important;
          }
        }
      `}</style>
    </section>
  );
}
