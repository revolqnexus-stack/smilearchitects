"use client";

/**
 * HomeReviews
 * Google rating hero → review cards → "View all on Google" → Instagram carousel
 */

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { CLINIC } from "@/lib/site-config";
import { RevealUp, RevealFade } from "@/components/motion/REVOLQComponents";

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const GOOGLE_RATING = 4.9;
const GOOGLE_REVIEW_COUNT = "50+";
const GOOGLE_REVIEWS_URL = CLINIC.platforms.googleMaps.reviewsUrl;

// Practo verified patient reviews — top 10 from patient stories page
const REVIEWS = [
  {
    id: 1,
    name: "GREESHMA ANGELOSE",
    time: "6 years ago",
    rating: 5,
    text: "I've never had such an awesome experience in any hospitals. The ambience and doctors of the clinic are really superb. I felt like being in a home rather than being in a hospital set up. The treatment is effective and cost effective. I would recommend this place to all of my Kith and kin.",
  },
  {
    id: 2,
    name: "Renjan sreejith",
    time: "3 years ago",
    rating: 5,
    text: "Very friendly approach and he explained everything properly. Nice behavior proper guidence from him.",
  },
  {
    id: 3,
    name: "ANEES LESLY DEVASSY",
    time: "3 years ago",
    rating: 5,
    text: "Excellent experience. The doctor explains everything in very details. Overall Friendly atmosphere and thanks to the team.",
  },
  {
    id: 4,
    name: "Joseph jacob",
    time: "3 years ago",
    rating: 5,
    text: "Reminders given on previously days is very effective I felt. There will be no delay once we reach at the clinic as they maintain the correct time schedule. Staffs are very patient and caring. Good experience within the doctor too. 👌",
  },
  {
    id: 5,
    name: "LUCY JOHN",
    time: "2 years ago",
    rating: 5,
    text: "Very good behaviour, and friendly. No waiting, and everything on time. I am very satisfied with the treatment.",
  },
  {
    id: 6,
    name: "CELINAMMA STEPHEN",
    time: "3 years ago",
    rating: 5,
    text: "Thank you so much for your kind and thoughtful concern in regard to my health and providing me with excellent medical and physical care. I am most grateful for your kindness whenever I see you.",
  },
  {
    id: 7,
    name: "ASHISH M.M",
    time: "5 years ago",
    rating: 5,
    text: "Doctor is very friendly and compassionate. I was Very comfortable. Sterile Articles are using for the procedure. Cleanliness is one of the best thing I have experienced in this clinic. Overall it was a great experience.",
  },
  {
    id: 8,
    name: "Jose p manuel",
    time: "2 years ago",
    rating: 5,
    text: "This was a 12-15 yr old cap replacement. I live abroad. When ever I come to India, usually visit smile dental clinic. Flexibility is the major reason. Always happy 😊. Thanks",
  },
  {
    id: 9,
    name: "Verified Patient",
    time: "1 year ago",
    rating: 5,
    text: "Dr. Jeo Tom Charls From the moment I walked in, their entire team made me feel comfortable. Dr. Jeo Tom Charls has a incredibly gentle touch and explained every step of my procedure in a way that was easy to understand, alleviating all my anxieties. I'm thrilled with the results and truly appreciate their patience and skill.",
  },
  {
    id: 10,
    name: "DIYA ANN JUSTINE",
    time: "3 years ago",
    rating: 5,
    text: "I had crooked teeth and it was then I approached Dr.Jeo Tom Charles. After I had my braces on, I was checked by the doctor each month. He was so nice, that he explained everything in detail, so that we could understand. Right now my teeth are right in shape... Well Recommeded Doctor🙂",
  },
];

/**
 * Instagram posts — replace src values with real exported images from the clinic's IG.
 * Place images in /public/instagram/ and update the src paths below.
 * alt text should describe what's actually in the photo.
 */
const IG_POSTS = [
  { id: 1, src: "/instagram/post-1.jpg", alt: "Smile Architects clinic — patient smile transformation" },
  { id: 2, src: "/instagram/post-2.jpg", alt: "Orthodontic braces treatment at Smile Architects, Pala" },
  { id: 3, src: "/instagram/post-3.jpg", alt: "Clear aligners consultation at Smile Architects" },
  { id: 4, src: "/instagram/post-4.jpg", alt: "Smile Architects dental clinic interior, Maharani Jn., Pala" },
  { id: 5, src: "/instagram/post-5.jpg", alt: "Patient smile result after orthodontic treatment" },
  { id: 6, src: "/instagram/post-6.jpg", alt: "Dr. Jeo Tom Charls at Smile Architects, Pala" },
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

function IgIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

/* ─── Instagram Carousel ───────────────────────────────────────────────────── */

function InstagramCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const CARD_WIDTH = 300; // px — approximate card + gap
  const GAP = 20;
  const STEP = CARD_WIDTH + GAP;

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  const scroll = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "next" ? STEP : -STEP, behavior: "smooth" });
    setTimeout(updateArrows, 350);
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Prev arrow */}
      <button
        onClick={() => scroll("prev")}
        disabled={!canPrev}
        aria-label="Previous Instagram posts"
        style={{
          position: "absolute",
          left: -20,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          width: 44,
          height: 44,
          borderRadius: "50%",
          backgroundColor: canPrev ? "#ffffff" : "rgba(255,255,255,0.5)",
          border: "1px solid rgba(0,0,0,0.12)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: canPrev ? "pointer" : "default",
          transition: "opacity 0.2s",
          opacity: canPrev ? 1 : 0.4,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        onScroll={updateArrows}
        style={{
          display: "flex",
          gap: `${GAP}px`,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
          paddingBottom: "4px", // prevent shadow clip
        }}
      >
        {IG_POSTS.map((post) => (
          <a
            key={post.id}
            href={CLINIC.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={post.alt}
            style={{
              flexShrink: 0,
              width: "clamp(240px, 28vw, 320px)",
              aspectRatio: "1 / 1",
              borderRadius: "1rem",
              overflow: "hidden",
              scrollSnapAlign: "start",
              position: "relative",
              display: "block",
              backgroundColor: "var(--color-tea-green)",
            }}
          >
            <Image
              src={post.src}
              alt={post.alt}
              fill
              style={{ objectFit: "cover", transition: "transform 0.35s ease" }}
              sizes="(max-width: 768px) 60vw, 300px"
              onError={(e) => {
                // Hide broken images gracefully — placeholder shows through
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            {/* Hover overlay */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0)",
                transition: "background 0.25s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="ig-card-overlay"
            />
            {/* Placeholder shown when image not yet loaded */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: -1,
              }}
            >
              <IgIcon size={36} />
            </div>
          </a>
        ))}
      </div>

      {/* Next arrow */}
      <button
        onClick={() => scroll("next")}
        disabled={!canNext}
        aria-label="Next Instagram posts"
        style={{
          position: "absolute",
          right: -20,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          width: 44,
          height: 44,
          borderRadius: "50%",
          backgroundColor: canNext ? "#ffffff" : "rgba(255,255,255,0.5)",
          border: "1px solid rgba(0,0,0,0.12)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: canNext ? "pointer" : "default",
          transition: "opacity 0.2s",
          opacity: canNext ? 1 : 0.4,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <style>{`
        div::-webkit-scrollbar { display: none; }
        .ig-card-overlay:hover { background: rgba(0,0,0,0.15) !important; }
      `}</style>
    </div>
  );
}

/* ─── Main export ──────────────────────────────────────────────────────────── */

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

      {/* ── REVIEW CARDS — Horizontal Animated Carousel ───────── */}
      <section
        aria-label="Patient reviews"
        style={{ backgroundColor: "#ffffff", padding: "2rem 0 3rem" }}
      >
        <div className="container-xl">
          {/* Practo badge */}
          <RevealFade>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
              <div style={{
                padding: "0.625rem 1.25rem",
                background: "linear-gradient(135deg, #1abc9c 0%, #16a085 100%)",
                borderRadius: "999px",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/>
                </svg>
                <span style={{ 
                  color: "white", 
                  fontFamily: "var(--font-sans)", 
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}>
                  Verified on Practo
                </span>
              </div>
            </div>
          </RevealFade>

          {/* Horizontal animated carousel */}
          <div className="reviews-carousel-wrapper">
            <div className="reviews-carousel">
              {/* Render reviews twice for seamless loop */}
              {[...REVIEWS, ...REVIEWS].map((review, idx) => (
                <article
                  key={`${review.id}-${idx}`}
                  className="review-card"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "1.25rem",
                    padding: "1.75rem 2rem",
                    boxShadow: "0 2px 20px rgba(0,0,0,0.07)",
                    border: "1px solid rgba(0,0,0,0.06)",
                    minWidth: "420px",
                    maxWidth: "420px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                    <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
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
                        <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1.0625rem", color: "var(--color-dark-moss)" }}>
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "0.9375rem", color: "var(--color-dark-moss)", margin: 0 }}>
                          {review.name}
                        </p>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "var(--color-cafe-noir)", margin: 0, opacity: 0.65 }}>
                          {review.time}
                        </p>
                      </div>
                    </div>
                    <Stars rating={review.rating} size={16} />
                  </div>
                  <blockquote style={{ margin: 0 }}>
                    <p style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.0625rem",
                      color: "var(--color-cafe-noir)",
                      lineHeight: 1.75,
                      fontStyle: "italic",
                      margin: 0,
                    }}>
                      <span style={{ fontSize: "1.75rem", lineHeight: 0, verticalAlign: "-0.35em", marginRight: "0.2em", color: "var(--color-jonquil)", fontStyle: "normal" }} aria-hidden="true">
                        &ldquo;
                      </span>
                      {review.text}
                    </p>
                  </blockquote>
                </article>
              ))}
            </div>
          </div>

          <style>{`
            .reviews-carousel-wrapper {
              overflow: hidden;
              width: 100%;
              margin: 0 auto;
            }
            
            .reviews-carousel {
              display: flex;
              gap: 1.25rem;
              animation: scroll-left 60s linear infinite;
              will-change: transform;
            }
            
            .reviews-carousel:hover {
              animation-play-state: paused;
            }
            
            @keyframes scroll-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-420px * ${REVIEWS.length} - 1.25rem * ${REVIEWS.length}));
              }
            }
            
            @media (prefers-reduced-motion: reduce) {
              .reviews-carousel {
                animation: none;
              }
            }
            
            @media (max-width: 768px) {
              .review-card {
                min-width: 340px !important;
                max-width: 340px !important;
                padding: 1.5rem 1.75rem !important;
              }
              
              @keyframes scroll-left {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(calc(-340px * ${REVIEWS.length} - 1.25rem * ${REVIEWS.length}));
                }
              }
            }
          `}</style>

          {/* View all CTA */}
          <RevealUp delay={0.1}>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "2.5rem", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="https://www.practo.com/kottayam/clinic/smile-architects-pala-town"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "#1abc9c",
                  color: "white",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  padding: "0.875rem 1.75rem",
                  borderRadius: "9999px",
                  textDecoration: "none",
                }}
                aria-label="View all Smile Architects reviews on Practo"
              >
                View 219+ reviews on Practo
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
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
                }}
                aria-label="View all Smile Architects reviews on Google"
              >
                View on Google
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </RevealUp>
        </div>
      </section>

      {/* ── INSTAGRAM CAROUSEL ─────────────────────────────────── */}
      <section
        aria-label="Follow on Instagram"
        style={{ backgroundColor: "var(--color-honeydew)", padding: "4rem 0 4.5rem" }}
      >
        <div className="container-xl">
          {/* Header row — mirrors French Toast layout exactly */}
          <RevealFade>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "2rem",
            }}>
              {/* Left: IG icon + label */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
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
                  <IgIcon size={22} />
                </div>
                <span style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
                  color: "var(--color-dark-moss)",
                  fontWeight: 400,
                }}>
                  Follow Us on Instagram
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
                  backgroundColor: "var(--color-jonquil)",
                  color: "var(--color-dark-moss)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "9999px",
                  textDecoration: "none",
                }}
                aria-label="Follow Smile Architects on Instagram"
              >
                {CLINIC.social.instagramHandle}
              </a>
            </div>
          </RevealFade>

          {/* Carousel — padded so arrows don't clip */}
          <RevealUp delay={0.1}>
            <div style={{ padding: "0 24px", margin: "0 -24px" }}>
              <InstagramCarousel />
            </div>
          </RevealUp>
        </div>
      </section>
    </>
  );
}
