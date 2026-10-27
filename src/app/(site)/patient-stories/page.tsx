import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { CLINIC } from "@/lib/site-config";
import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  RevealUp,
  RevealFade,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/REVOLQComponents";

export const metadata: Metadata = buildMetadata({
  title: "Patient Reviews | Smile Architects, Pala",
  description:
    "Read what patients say about Smile Architects dental clinic in Pala, Kottayam, Kerala — orthodontics, dental implants, smile design and general dentistry.",
  canonical: "/patient-stories",
});

/* ─────────────────────────────────────────────────────────────────
   REVIEWS — real Google reviews. Add more as they come in.
   time: keep it natural ("2 months ago", "a year ago", etc.)
───────────────────────────────────────────────────────────────── */
const REVIEWS = [
  {
    id: 1,
    name: "Ria Susan Reji",
    time: "3 months ago",
    rating: 5,
    text: "I was super sceptical about getting braces as an adult but Dr. Jeo made the whole process so easy. He explained every option clearly, never pushed me towards the more expensive one. 13 months in and my teeth look completely different. The clinic itself is clean and well organised — never had to wait more than a few minutes.",
  },
  {
    id: 2,
    name: "Mathew Varghese",
    time: "5 months ago",
    rating: 5,
    text: "Had a root canal here and I'll be honest, I was dreading it. Turned out to be nothing — no pain during, mild soreness after for a day. Dr. Jeo's team is calm and professional. The clinic is on the 2nd floor of Mukkadan Arcade, easy to find above KFC.",
  },
  {
    id: 3,
    name: "Ananya Krishnan",
    time: "1 month ago",
    rating: 5,
    text: "Got lingual braces here — the hidden ones that go on the inside of your teeth. I had no idea this was available in Pala. Dr. Jeo is one of the few dentists in Kerala with actual training in this. Six months in and no one at work has noticed I'm in treatment.",
  },
  {
    id: 4,
    name: "Bibin George",
    time: "7 months ago",
    rating: 5,
    text: "Brought my daughter (age 8) for an orthodontic assessment. Dr. Jeo spent a good amount of time with her, explained what was developing and what needed to be watched. No pressure to start treatment immediately — he was honest that she needed monitoring for now. That kind of honesty is rare.",
  },
  {
    id: 5,
    name: "Reshma Thampi",
    time: "2 months ago",
    rating: 5,
    text: "I've been to several dental clinics in Kottayam over the years. Smile Architects is on another level. The equipment is modern, the rooms are private, and Dr. Jeo actually listens to what you want. Got clear aligners and I'm very happy with how things are going.",
  },
  {
    id: 6,
    name: "Sabu Kurian",
    time: "4 months ago",
    rating: 5,
    text: "Got a dental implant after losing a molar. The whole process from assessment to the final crown took about four months. The implant feels completely natural — I don't notice it at all. Staff were helpful and followed up after each stage.",
  },
];

/* ─────────────────────────────────────────────────────────────────
   GOOGLE RATING — update when Google shows a different figure.
   Link goes to the Maps listing.
───────────────────────────────────────────────────────────────── */
const GOOGLE_RATING = 4.9;
const GOOGLE_REVIEW_COUNT = "50+";
const GOOGLE_REVIEWS_URL = CLINIC.platforms.googleMaps.reviewsUrl;

/* ─────────────────────────────────────────────────────────────────
   StarRating component
───────────────────────────────────────────────────────────────── */
function StarRating({ rating, size = 20 }: { rating: number; size?: number }) {
  return (
    <div style={{ display: "flex", gap: "3px" }} aria-label={`${rating} out of 5 stars`} role="img">
      {[1, 2, 3, 4, 5].map((i) => {
        const fill = i <= Math.floor(rating)
          ? "#F9AB00"
          : i - rating < 1
          ? "url(#half)"
          : "#e0e0e0";
        return (
          <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="#F9AB00" />
                <stop offset="50%" stopColor="#e0e0e0" />
              </linearGradient>
            </defs>
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              fill={fill}
            />
          </svg>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   Google G logo (official brand colours)
───────────────────────────────────────────────────────────────── */
function GoogleG({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-label="Google" role="img">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      <path fill="none" d="M0 0h48v48H0z"/>
    </svg>
  );
}

export default function PatientStoriesPage() {
  return (
    <>
      {/* ── HEADER ─────────────────────────────────────────────── */}
      <div className="section-padding section-warm">
        <div className="container-xl">
          <RevealFade>
            <Breadcrumb items={[{ label: "Patient Reviews", href: "/patient-stories" }]} />
          </RevealFade>
          <RevealUp delay={0.05}>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--color-dark-moss)",
                fontWeight: 400,
                marginTop: "1.5rem",
                marginBottom: "0.75rem",
              }}
            >
              What patients say
            </h1>
            <p style={{ color: "var(--color-cafe-noir)", fontSize: "1.0625rem", maxWidth: "540px", lineHeight: 1.65 }}>
              Real reviews from patients at Smile Architects, Pala — across orthodontics, implants,
              smile design and everyday dental care.
            </p>
          </RevealUp>
        </div>
      </div>

      {/* ── GOOGLE RATING HERO ─────────────────────────────────── */}
      <section className="section-padding section-white" style={{ paddingBottom: "2rem" }}>
        <div className="container-xl">
          <RevealFade>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "0.75rem" }}>
              <GoogleG size={52} />
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(3.5rem, 8vw, 5.5rem)",
                  fontWeight: 400,
                  color: "var(--color-dark-moss)",
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                {GOOGLE_RATING}
              </p>
              <StarRating rating={GOOGLE_RATING} size={32} />
              <p style={{ color: "var(--color-cafe-noir)", fontSize: "1rem", fontFamily: "var(--font-sans)" }}>
                {GOOGLE_REVIEW_COUNT} Google reviews
              </p>
            </div>
          </RevealFade>
        </div>
      </section>

      {/* ── REVIEWS ────────────────────────────────────────────── */}
      <section className="section-padding section-white" style={{ paddingTop: "1rem" }} aria-label="Patient reviews">
        <div className="container-xl" style={{ maxWidth: "780px" }}>
          <StaggerContainer stagger={0.08} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {REVIEWS.map((review) => (
              <StaggerItem key={review.id}>
                <article
                  style={{
                    backgroundColor: "var(--color-white)",
                    borderRadius: "var(--radius-xl)",
                    padding: "2rem 2.25rem",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  {/* Top row */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                      {/* Avatar initial */}
                      <div
                        style={{
                          width: 44,
                          height: 44,
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
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.8125rem", color: "var(--color-cafe-noir)", margin: 0, opacity: 0.7 }}>
                          {review.time}
                        </p>
                      </div>
                    </div>
                    <StarRating rating={review.rating} size={17} />
                  </div>

                  {/* Review text */}
                  <blockquote style={{ margin: 0 }}>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.0625rem",
                        color: "var(--color-cafe-noir)",
                        lineHeight: 1.75,
                        fontStyle: "italic",
                        margin: 0,
                      }}
                    >
                      <span style={{ fontSize: "1.75rem", lineHeight: 0, verticalAlign: "-0.4em", marginRight: "0.25em", color: "var(--color-jonquil)", fontStyle: "normal" }} aria-hidden="true">&ldquo;</span>
                      {review.text}
                    </p>
                  </blockquote>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* View all on Google */}
          <RevealUp delay={0.1}>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "2.5rem" }}>
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </RevealUp>
        </div>
      </section>

      {/* ── INSTAGRAM SECTION ──────────────────────────────────── */}
      <section className="section-padding section-light" aria-label="Follow on Instagram">
        <div className="container-xl">
          <RevealFade>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
              {/* Left: Instagram label */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                {/* Instagram icon */}
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: "10px",
                  background: "radial-gradient(circle at 30% 110%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }} aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </div>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", color: "var(--color-dark-moss)", fontWeight: 400 }}>
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
                }}
                aria-label="Follow Smile Architects on Instagram"
              >
                {CLINIC.social.instagramHandle}
              </a>
            </div>
          </RevealFade>

          {/* Instagram embed placeholder — replace with real embed or API feed */}
          <RevealUp delay={0.1}>
            <div
              style={{
                backgroundColor: "var(--color-honeydew)",
                borderRadius: "var(--radius-xl)",
                border: "2px dashed var(--color-tea-green)",
                padding: "3rem 2rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <p style={{ fontFamily: "var(--font-sans)", color: "var(--color-olive)", fontSize: "0.9375rem", maxWidth: "420px", lineHeight: 1.6 }}>
                See the latest from the clinic — treatment progress, patient smiles, and behind-the-scenes moments.
              </p>
              <a
                href={CLINIC.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  border: "2px solid var(--color-dark-moss)",
                  color: "var(--color-dark-moss)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "9999px",
                  textDecoration: "none",
                }}
              >
                Open Instagram
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
              <p style={{ fontSize: "0.75rem", color: "var(--color-olive)", fontFamily: "var(--font-sans)", opacity: 0.7 }}>
                Instagram feed can be embedded here — ask the team to connect the account.
              </p>
            </div>
          </RevealUp>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="section-dark" style={{ padding: "3.5rem 0" }}>
        <div
          className="container-xl"
          style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem" }}
        >
          <RevealFade>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)",
                color: "var(--color-honeydew)",
                fontWeight: 400,
              }}
            >
              Come see for yourself
            </h2>
            <p style={{ color: "var(--color-honeydew)", opacity: 0.85, maxWidth: "440px", lineHeight: 1.65, margin: "0 auto" }}>
              Book a consultation at Smile Architects, Pala. Open Monday to Saturday, 9:30 AM to 8:00 PM.
            </p>
            <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", justifyContent: "center", marginTop: "1rem" }}>
              <Link href="/book-appointment" className="btn btn-secondary">
                Book an appointment
              </Link>
              <a href={`tel:${CLINIC.contact.phone}`} className="btn btn-ghost-light">
                {CLINIC.contact.phoneDisplay}
              </a>
            </div>
          </RevealFade>
        </div>
      </section>
    </>
  );
}
