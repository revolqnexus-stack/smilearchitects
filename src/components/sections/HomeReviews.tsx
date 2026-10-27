"use client";

/**
 * HomeReviews
 * Google rating hero → review cards → "View all on Google" → Instagram strip
 * Shown on the homepage between Facilities and Service Area sections.
 */

import { CLINIC } from "@/lib/site-config";
import { RevealUp, RevealFade, StaggerContainer, StaggerItem } from "@/components/motion/REVOLQComponents";

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const GOOGLE_RATING = 4.9;
const GOOGLE_REVIEW_COUNT = "50+";
const GOOGLE_REVIEWS_URL = CLINIC.platforms.googleMaps.reviewsUrl;

const REVIEWS = [
  {
    id: 1,
    name: "Ria Susan Reji",
    time: "3 months ago",
    rating: 5,
    text: "I was super sceptical about getting braces as an adult but Dr. Jeo made the whole process so easy. He explained every option clearly, never pushed me towards the more expensive one. 13 months in and my teeth look completely different.",
  },
  {
    id: 2,
    name: "Mathew Varghese",
    time: "5 months ago",
    rating: 5,
    text: "Had a root canal here and I'll be honest, I was dreading it. Turned out to be nothing — no pain during, mild soreness after for a day. Dr. Jeo's team is calm and professional throughout.",
  },
  {
    id: 3,
    name: "Ananya Krishnan",
    time: "1 month ago",
    rating: 5,
    text: "Got lingual braces here — the hidden ones that go on the inside of your teeth. I had no idea this was available in Pala. Six months in and no one at work has even noticed I'm in treatment.",
  },
  {
    id: 4,
    name: "Bibin George",
    time: "7 months ago",
    rating: 5,
    text: "Brought my daughter (age 8) for an assessment. Dr. Jeo was honest that she only needed monitoring for now — no pressure to start treatment. That kind of straightforwardness is rare from a specialist.",
  },
  {
    id: 5,
    name: "Reshma Thampi",
    time: "2 months ago",
    rating: 5,
    text: "I've been to several dental clinics in Kottayam. Smile Architects is on another level — modern equipment, private rooms, and Dr. Jeo actually listens. Got clear aligners and very happy with progress.",
  },
];

/* ─── Sub-components ───────────────────────────────────────────────────────── */

function GoogleG() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" aria-label="Google" role="img">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}

function Stars({ rating, size = 20 }: { rating: number; size?: number }) {
  return (
    <div style={{ display: "flex", gap: 3 }} aria-label={`${rating} out of 5 stars`} role="img">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            fill={i <= rating ? "#F9AB00" : "#e0e0e0"}
          />
        </svg>
      ))}
    </div>
  );
}

/* ─── Main component ───────────────────────────────────────────────────────── */

export default function HomeReviews() {
  return (
    <>
      {/* ── GOOGLE RATING HERO ─────────────────────────────────── */}
      <section
        aria-labelledby="reviews-heading"
        style={{ backgroundColor: "#ffffff", padding: "5rem 0 2.5rem" }}
      >
        <div className="container-xl">
          <RevealFade>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "0.625rem" }}>
              <GoogleG />
              <p
                id="reviews-heading"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(4rem, 9vw, 6.5rem)",
                  fontWeight: 400,
                  color: "var(--color-dark-moss)",
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                {GOOGLE_RATING}
              </p>
              <Stars rating={Math.round(GOOGLE_RATING)} size={30} />
              <p style={{
                color: "var(--color-cafe-noir)",
                fontSize: "0.9375rem",
                fontFamily: "var(--font-sans)",
                opacity: 0.75,
              }}>
                {GOOGLE_REVIEW_COUNT} Google reviews
              </p>
            </div>
          </RevealFade>
        </div>
      </section>

      {/* ── REVIEW CARDS ───────────────────────────────────────── */}
      <section
        aria-label="Patient reviews"
        style={{ backgroundColor: "#ffffff", padding: "1.5rem 0 3rem" }}
      >
        <div className="container-xl" style={{ maxWidth: "820px" }}>
          <StaggerContainer stagger={0.08} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {REVIEWS.map((r) => (
              <StaggerItem key={r.id}>
                <article
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "1.25rem",
                    padding: "1.75rem 2rem",
                    boxShadow: "0 2px 20px rgba(0,0,0,0.07)",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  {/* Header row */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                    <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                      {/* Avatar */}
                      <div
                        style={{
                          width: 42,
                          height: 42,
                          borderRadius: "50%",
                          backgroundColor: "var(--color-tea-green)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                        aria-hidden="true"
                      >
                        <span style={{
                          fontFamily: "var(--font-sans)",
                          fontWeight: 700,
                          fontSize: "1.0625rem",
                          color: "var(--color-dark-moss)",
                        }}>
                          {r.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.9375rem", color: "var(--color-dark-moss)", margin: 0 }}>
                          {r.name}
                        </p>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "var(--color-cafe-noir)", margin: 0, opacity: 0.65 }}>
                          {r.time}
                        </p>
                      </div>
                    </div>
                    <Stars rating={r.rating} size={16} />
                  </div>

                  {/* Quote */}
                  <blockquote style={{ margin: 0 }}>
                    <p style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.0625rem",
                      color: "var(--color-cafe-noir)",
                      lineHeight: 1.75,
                      fontStyle: "italic",
                      margin: 0,
                    }}>
                      <span
                        style={{
                          fontSize: "1.75rem",
                          lineHeight: 0,
                          verticalAlign: "-0.35em",
                          marginRight: "0.2em",
                          color: "var(--color-jonquil)",
                          fontStyle: "normal",
                        }}
                        aria-hidden="true"
                      >
                        &ldquo;
                      </span>
                      {r.text}
                    </p>
                  </blockquote>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* View all CTA */}
          <RevealUp delay={0.1}>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "var(--color-dark-moss)",
                  color: "var(--color-honeydew)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  padding: "0.875rem 1.75rem",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  transition: "opacity 0.2s ease",
                }}
                aria-label="View all Smile Architects reviews on Google"
              >
                View all reviews on Google
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </RevealUp>
        </div>
      </section>

      {/* ── INSTAGRAM STRIP ────────────────────────────────────── */}
      <section
        aria-label="Follow on Instagram"
        style={{ backgroundColor: "var(--color-honeydew)", padding: "3.5rem 0" }}
      >
        <div className="container-xl">
          <RevealFade>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              {/* Left label */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                {/* Instagram gradient icon */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "10px",
                    background: "radial-gradient(circle at 30% 110%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <span style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
                  color: "var(--color-dark-moss)",
                  fontWeight: 400,
                }}>
                  Follow us on Instagram
                </span>
              </div>

              {/* Right: handle pill */}
              <a
                href={CLINIC.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  backgroundColor: "var(--color-jonquil)",
                  color: "var(--color-dark-moss)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  padding: "0.5rem 1.125rem",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  transition: "opacity 0.2s ease",
                }}
                aria-label="Follow Smile Architects on Instagram"
              >
                {CLINIC.social.instagramHandle}
              </a>
            </div>

            {/* Prompt card */}
            <a
              href={CLINIC.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                backgroundColor: "#ffffff",
                borderRadius: "1.25rem",
                padding: "1.75rem 2rem",
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                textDecoration: "none",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
                cursor: "pointer",
              }}
              aria-label="Open Smile Architects Instagram profile"
            >
              {/* Big IG icon */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "16px",
                  background: "radial-gradient(circle at 30% 110%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </div>

              <div style={{ flex: 1 }}>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--color-dark-moss)",
                  margin: "0 0 0.25rem",
                }}>
                  {CLINIC.social.instagramHandle}
                </p>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.875rem",
                  color: "var(--color-cafe-noir)",
                  margin: 0,
                  opacity: 0.75,
                  lineHeight: 1.5,
                }}>
                  Treatment results, clinic moments and patient transformations.
                </p>
              </div>

              {/* Arrow */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-olive)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={{ flexShrink: 0 }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </RevealFade>
        </div>
      </section>
    </>
  );
}
