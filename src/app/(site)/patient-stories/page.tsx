import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { buildMetadata } from "@/lib/metadata";
import { CLINIC } from "@/lib/site-config";
import { buildReviewSchema, buildAggregateRatingSchema, type ReviewData } from "@/lib/seo/schema";
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
   PRACTO REVIEWS — real verified patient reviews from Practo
   These are authentic patient testimonials from the Practo platform
───────────────────────────────────────────────────────────────── */
const PRACTO_REVIEWS: ReviewData[] = [
  {
    id: 1,
    name: "GREESHMA ANGELOSE",
    time: "6 years ago",
    rating: 5,
    datePublished: "2020-11-01",
    text: "I've never had such an awesome experience in any hospitals. The ambience and doctors of the clinic are really superb. I felt like being in a home rather than being in a hospital set up. The treatment is effective and cost effective. I would recommend this place to all of my Kith and kin.",
  },
  {
    id: 2,
    name: "Renjan sreejith",
    time: "3 years ago",
    rating: 5,
    datePublished: "2023-11-01",
    text: "Very friendly approach and he explained everything properly. Nice behavior proper guidence from him.",
  },
  {
    id: 3,
    name: "ANEES LESLY DEVASSY",
    time: "3 years ago",
    rating: 5,
    datePublished: "2023-11-01",
    text: "Excellent experience. The doctor explains everything in very details. Overall Friendly atmosphere and thanks to the team.",
  },
  {
    id: 4,
    name: "Joseph jacob",
    time: "3 years ago",
    rating: 5,
    datePublished: "2023-11-01",
    text: "Reminders given on previously days is very effective I felt. There will be no delay once we reach at the clinic as they maintain the correct time schedule. Staffs are very patient and caring. Good experience within the doctor too. 👌",
  },
  {
    id: 5,
    name: "LUCY JOHN",
    time: "2 years ago",
    rating: 5,
    datePublished: "2024-11-01",
    text: "Very good behaviour, and friendly. No waiting, and everything on time. I am very satisfied with the treatment.",
  },
  {
    id: 6,
    name: "CELINAMMA STEPHEN",
    time: "3 years ago",
    rating: 5,
    datePublished: "2023-11-01",
    text: "Thank you so much for your kind and thoughtful concern in regard to my health and providing me with excellent medical and physical care. I am most grateful for your kindness whenever I see you.",
  },
  {
    id: 7,
    name: "ASHISH M.M",
    time: "5 years ago",
    rating: 5,
    datePublished: "2021-11-01",
    text: "Doctor is very friendly and compassionate. I was Very comfortable. Sterile Articles are using for the procedure. Cleanliness is one of the best thing I have experienced in this clinic. Overall it was a great experience.",
  },
  {
    id: 8,
    name: "Jose p manuel",
    time: "2 years ago",
    rating: 5,
    datePublished: "2024-11-01",
    text: "This was a 12-15 yr old cap replacement. I live abroad. When ever I come to India, usually visit smile dental clinic. Flexibility is the major reason. Always happy 😊. Thanks",
  },
  {
    id: 9,
    name: "Verified Patient",
    time: "1 year ago",
    rating: 5,
    datePublished: "2025-11-01",
    text: "Dr. Jeo Tom Charls From the moment I walked in, their entire team made me feel comfortable. Dr. Jeo Tom Charls has a incredibly gentle touch and explained every step of my procedure in a way that was easy to understand, alleviating all my anxieties. I'm thrilled with the results and truly appreciate their patience and skill.",
  },
  {
    id: 10,
    name: "Verified Patient",
    time: "5 years ago",
    rating: 5,
    datePublished: "2021-11-01",
    text: "He is so polite. He frankly said about the consequences that I had to face when I change to other hospital if I get college admission in another state. So he suggested to think it over whether I want to do it here or any other places where I am getting my college admission.",
  },
  {
    id: 11,
    name: "DIYA ANN JUSTINE",
    time: "3 years ago",
    rating: 5,
    datePublished: "2023-11-01",
    text: "I had crooked teeth and it was then I approached Dr.Jeo Tom Charles. After I had my braces on, I was checked by the doctor each month. He was so nice, that he explained everything in detail, so that we could understand. Right now my teeth are right in shape... Well Recommeded Doctor🙂",
  },
  {
    id: 12,
    name: "Devassia",
    time: "3 years ago",
    rating: 5,
    datePublished: "2023-11-01",
    text: "Explained regarding the possible complications and better treatment options. Explained prior to do the procedure.",
  },
  {
    id: 13,
    name: "T P AYUSH",
    time: "4 years ago",
    rating: 5,
    datePublished: "2022-11-01",
    text: "Simplicity and very friendly way of expressing the factual course of treatment to be availed alongwith the time taken & the cost involved on treatment.",
  },
  {
    id: 14,
    name: "ROSAMMA MATHEW",
    time: "3 years ago",
    rating: 5,
    datePublished: "2023-11-01",
    text: "My experience with Dr jeo Tom Charles was great, doctor managed to Pluck the tooth upper and lower jaw without any pain and shake, very good approach and great explanation.",
  },
  {
    id: 15,
    name: "Bobin James",
    time: "6 years ago",
    rating: 5,
    datePublished: "2020-11-01",
    text: "Doctor managed to pluck the tooth from upper right corner, without pain and Shake even though slight complication was there. He adviced about the do's and don'ts in detail.",
  },
  {
    id: 16,
    name: "Deepu Krishnan",
    time: "5 years ago",
    rating: 5,
    datePublished: "2021-11-01",
    text: "I strongly recommend. Last week my wife's took veneer treatment, the result was awesome. Doctor is so friendly and informative.",
  },
  {
    id: 17,
    name: "AMITH VIJAY",
    time: "5 years ago",
    rating: 5,
    datePublished: "2021-11-01",
    text: "We can see the Dr at the correct booking time. Everything will be explained. Dr is good friendly nature.",
  },
  {
    id: 18,
    name: "MANU SOORYA",
    time: "6 years ago",
    rating: 5,
    datePublished: "2020-11-01",
    text: "Doctor takes his time answering and explaining all your doubts. Friendly and calm doctor.",
  },
  {
    id: 19,
    name: "Malavika k",
    time: "5 years ago",
    rating: 5,
    datePublished: "2021-11-01",
    text: "Doctor has explained the cause of teeth disorder and honestly suggested the prompt remedy.",
  },
  {
    id: 20,
    name: "PAVAN S",
    time: "5 years ago",
    rating: 5,
    datePublished: "2021-11-01",
    text: "The doctor was very friendly and I am satisfied with the treatment. And also, I'm satisfied with the explanation of the health issue.",
  },
  {
    id: 21,
    name: "BINOY JOSEPH",
    time: "6 years ago",
    rating: 5,
    datePublished: "2020-11-01",
    text: "I really appreciate Dr.Jeo because of his attitude and his service is very very much better than other clinic Doctors. It's my life experiences. onece I give him thanks alots of. I wish all the very best in his career.",
  },
];

/* ─────────────────────────────────────────────────────────────────
   PRACTO INFO — Smile Architects Practo profile
   Reviews come from: https://www.practo.com/kottayam/clinic/smile-architects-pala-town
───────────────────────────────────────────────────────────────── */
const PRACTO_PROFILE_URL = "https://www.practo.com/kottayam/clinic/smile-architects-pala-town";
const PRACTO_REVIEW_COUNT = "219+"; // As of Nov 2026

/* ─────────────────────────────────────────────────────────────────
   GOOGLE RATING — displayed at top for credibility
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
  // Build schema for all reviews
  const aggregateRatingSchema = buildAggregateRatingSchema({
    ratingValue: GOOGLE_RATING,
    reviewCount: 50, // Update this when you have exact count from Google
    bestRating: 5,
    worstRating: 1,
  });

  return (
    <>
      {/* ── STRUCTURED DATA: Aggregate Rating ──────────────────── */}
      <Script
        id="aggregate-rating-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />

      {/* ── STRUCTURED DATA: Individual Reviews ────────────────── */}
      {PRACTO_REVIEWS.map((review) => (
        <Script
          key={`review-schema-${review.id}`}
          id={`review-schema-${review.id}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildReviewSchema(review)) }}
        />
      ))}

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
              Verified patient reviews from Practo — across orthodontics, implants,
              smile design and everyday dental care at Smile Architects, Pala.
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

      {/* ── REVIEWS FROM PRACTO ────────────────────────────────── */}
      <section className="section-padding section-white" style={{ paddingTop: "1rem" }} aria-label="Patient reviews from Practo">
        <div className="container-xl" style={{ maxWidth: "780px" }}>
          
          {/* Practo source label */}
          <div style={{ 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            gap: "0.75rem",
            marginBottom: "2rem",
          }}>
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

          <StaggerContainer stagger={0.08} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {PRACTO_REVIEWS.map((review) => (
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

          {/* View all on Practo */}
          <RevealUp delay={0.1}>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "2.5rem", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
              <p style={{ 
                color: "var(--color-olive)", 
                fontSize: "0.9375rem",
                fontFamily: "var(--font-sans)",
                textAlign: "center",
              }}>
                Showing 21 of {PRACTO_REVIEW_COUNT} verified reviews
              </p>
              <a
                href={PRACTO_PROFILE_URL}
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
                  transition: "opacity 0.2s ease",
                }}
                aria-label="View all Smile Architects reviews on Practo"
              >
                View all reviews on Practo
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
