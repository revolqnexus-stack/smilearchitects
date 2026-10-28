import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { DOCTORS } from "@/lib/site-config";
import Breadcrumb from "@/components/ui/Breadcrumb";
import {
  RevealUp,
  RevealFade,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/REVOLQComponents";

export const metadata: Metadata = buildMetadata({
  title: "Our Dentists | Pala, Kottayam | Smile Architects",
  description:
    "Meet the dentists at Smile Architects, Pala — Dr. Jeo Tom Charls (MDS Orthodontics) and specialist team. Dental clinic in Pala, Kottayam, Kerala.",
  canonical: "/dentists",
});

export default function DentistsPage() {
  const core = DOCTORS.filter((d) => !d.visiting);
  const visiting = DOCTORS.filter((d) => d.visiting);

  return (
    <>
      {/* ── HEADER ─────────────────────────────────────────────── */}
      <div className="section-padding section-warm">
        <div className="container-xl">
          <RevealFade>
            <Breadcrumb items={[{ label: "Our Doctors", href: "/dentists" }]} />
          </RevealFade>
          <RevealUp delay={0.05}>
            <div style={{ marginTop: "1.5rem", maxWidth: "560px" }}>
              <div className="accent-line" />
              <p className="eyebrow">Our Doctors</p>
              <h1 style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                color: "var(--color-dark-moss)",
                fontWeight: 400,
                lineHeight: 1.1,
                marginBottom: "1rem",
              }}>
                Meet the specialists behind your smile
              </h1>
              <p style={{
                color: "var(--color-cafe-noir)",
                fontSize: "1.0625rem",
                lineHeight: 1.65,
                fontFamily: "var(--font-sans)",
              }}>
                A multidisciplinary team providing comprehensive dental care under one roof in Pala, Kottayam.
              </p>
            </div>
          </RevealUp>
        </div>
      </div>

      {/* ── CORE TEAM ──────────────────────────────────────────── */}
      <section className="section-padding section-white">
        <div className="container-xl">
          <StaggerContainer stagger={0.1} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {core.map((doctor) => (
              <StaggerItem key={doctor.id}>
                <DoctorCard doctor={doctor} featured={doctor.id === "dr-jeo-tom-charls"} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── VISITING CONSULTANTS ───────────────────────────────── */}
      <section className="section-padding section-light">
        <div className="container-xl">
          <RevealUp>
            <div style={{ marginBottom: "2.5rem" }}>
              <div className="accent-line" />
              <p className="eyebrow">Visiting Consultants</p>
              <h2 style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "var(--color-dark-moss)",
                fontWeight: 400,
                lineHeight: 1.15,
              }}>
                Specialist consultants at Smile Architects
              </h2>
            </div>
          </RevealUp>
          <StaggerContainer
            stagger={0.08}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1rem",
            }}
          >
            {visiting.map((doctor) => (
              <StaggerItem key={doctor.id}>
                <VisitingCard doctor={doctor} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="section-dark" style={{ padding: "3.5rem 0" }}>
        <div className="container-xl" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)", color: "var(--color-honeydew)", fontWeight: 400 }}>
            Book a consultation at Smile Architects
          </h2>
          <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/book-appointment" className="btn btn-secondary">Book Appointment</Link>
            <Link href="/contact" className="btn btn-ghost-light">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Core doctor card — horizontal, editorial ─────────────────────────────── */

function DoctorCard({ doctor, featured }: { doctor: typeof DOCTORS[number]; featured?: boolean }) {
  return (
    <Link href={`/dentists/${doctor.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "clamp(160px, 22vw, 260px) 1fr",
          borderRadius: "1.5rem",
          overflow: "hidden",
          border: featured
            ? "1.5px solid rgba(234,200,0,0.4)"
            : "1.5px solid var(--color-tea-green)",
          backgroundColor: "#fff",
          boxShadow: featured
            ? "0 4px 32px rgba(37,78,6,0.07)"
            : "0 2px 16px rgba(37,78,6,0.04)",
          transition: "box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease",
        }}
        className="doctor-list-card"
      >
        {/* Photo */}
        <div style={{
          position: "relative",
          backgroundColor: "var(--color-tea-green)",
          background: "linear-gradient(160deg, #e8eed8 0%, #c8d9a0 45%, #a8bf5b 100%)",
          overflow: "hidden",
          minHeight: "clamp(220px, 28vw, 320px)",
        }}>
          {doctor.photo && (
            <Image
              src={doctor.photo}
              alt={doctor.name}
              fill
              sizes="(max-width: 768px) 160px, 260px"
              priority={featured}
              style={{
                objectFit: "cover",
                objectPosition: doctor.photoPosition ?? "50% 12%",
                transition: "transform 0.45s ease",
              }}
              className="doctor-list-card__img"
            />
          )}
          {!doctor.photo && (
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(37,78,6,0.25)" strokeWidth="1.2">
                <circle cx="12" cy="8.5" r="3.25"/>
                <path d="M5.5 19.5c.85-3.2 3.35-5 6.5-5s5.65 1.8 6.5 5" strokeLinecap="round"/>
              </svg>
            </div>
          )}
          {/* Featured gold bar */}
          {featured && (
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              height: "3px",
              background: "linear-gradient(90deg, var(--color-jonquil), rgba(234,200,0,0.3))",
            }} />
          )}
        </div>

        {/* Info */}
        <div style={{
          padding: "clamp(1.25rem, 3vw, 2rem)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "1rem",
        }}>
          <div>
            {/* Visiting badge */}
            {doctor.visiting && (
              <span style={{
                display: "inline-block",
                fontFamily: "var(--font-sans)",
                fontSize: "0.625rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-dark-moss)",
                backgroundColor: "rgba(234,200,0,0.25)",
                padding: "0.2rem 0.5rem",
                borderRadius: "4px",
                marginBottom: "0.625rem",
              }}>
                Visiting Consultant
              </span>
            )}

            {/* Name */}
            <h2 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)",
              fontWeight: 400,
              color: "var(--color-dark-moss)",
              lineHeight: 1.15,
              marginBottom: "0.375rem",
            }}>
              {doctor.name}
            </h2>

            {/* Qualifications + specialty */}
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              color: "var(--color-cafe-noir)",
              marginBottom: "0.25rem",
            }}>
              <strong style={{ color: "var(--color-dark-moss)", fontWeight: 700 }}>{doctor.qualifications}</strong>
              {" · "}
              {doctor.specialty}
            </p>

            {/* Primary role */}
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8125rem",
              color: "var(--color-olive)",
              fontWeight: 500,
              marginBottom: "1.25rem",
            }}>
              {doctor.roles[0]}
            </p>

            {/* Bio excerpt */}
            <p style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.9375rem",
              color: "var(--color-cafe-noir)",
              lineHeight: 1.7,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}>
              {doctor.bio}
            </p>
          </div>

          {/* Expertise pills + CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {doctor.areasOfExpertise.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                {doctor.areasOfExpertise.slice(0, 4).map((area) => (
                  <span key={area} style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.6875rem",
                    fontWeight: 500,
                    color: "var(--color-dark-moss)",
                    backgroundColor: "var(--color-honeydew)",
                    border: "1px solid var(--color-tea-green)",
                    padding: "0.25rem 0.625rem",
                    borderRadius: "9999px",
                  }}>
                    {area}
                  </span>
                ))}
                {doctor.areasOfExpertise.length > 4 && (
                  <span style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.6875rem",
                    color: "var(--color-olive)",
                    padding: "0.25rem 0.375rem",
                  }}>
                    +{doctor.areasOfExpertise.length - 4} more
                  </span>
                )}
              </div>
            )}

            <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "var(--color-dark-moss)", fontFamily: "var(--font-sans)", fontSize: "0.875rem", fontWeight: 600 }}>
              View full profile
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .doctor-list-card:hover {
          box-shadow: 0 8px 40px rgba(37,78,6,0.1) !important;
          transform: translateY(-2px);
          border-color: var(--color-olive) !important;
        }
        .doctor-list-card:hover .doctor-list-card__img {
          transform: scale(1.04);
        }
        @media (max-width: 560px) {
          .doctor-list-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </Link>
  );
}

/* ─── Visiting consultant card — compact ────────────────────────────────────── */

function VisitingCard({ doctor }: { doctor: typeof DOCTORS[number] }) {
  return (
    <Link href={`/dentists/${doctor.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
      <div style={{
        backgroundColor: "#fff",
        borderRadius: "1.125rem",
        border: "1.5px solid var(--color-tea-green)",
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease",
      }}
        className="visiting-card"
      >
        {/* Photo strip */}
        <div style={{
          position: "relative",
          aspectRatio: "4/3",
          backgroundColor: "var(--color-tea-green)",
          background: "linear-gradient(160deg, #e8eed8 0%, #c8d9a0 55%, #a8bf5b 100%)",
          overflow: "hidden",
          flexShrink: 0,
        }}>
          {doctor.photo && (
            <Image
              src={doctor.photo}
              alt={doctor.name}
              fill
              sizes="300px"
              style={{
                objectFit: "cover",
                objectPosition: doctor.photoPosition ?? "50% 12%",
              }}
            />
          )}
          {!doctor.photo && (
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(37,78,6,0.25)" strokeWidth="1.2">
                <circle cx="12" cy="8.5" r="3.25"/>
                <path d="M5.5 19.5c.85-3.2 3.35-5 6.5-5s5.65 1.8 6.5 5" strokeLinecap="round"/>
              </svg>
            </div>
          )}
          {/* Visiting badge */}
          <div style={{
            position: "absolute", top: "0.625rem", left: "0.625rem",
            fontFamily: "var(--font-sans)",
            fontSize: "0.5625rem",
            fontWeight: 700,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            color: "var(--color-dark-moss)",
            backgroundColor: "rgba(234,200,0,0.85)",
            backdropFilter: "blur(8px)",
            padding: "0.2rem 0.5rem",
            borderRadius: "4px",
          }}>
            Visiting
          </div>
        </div>

        {/* Info */}
        <div style={{ padding: "1.125rem 1.25rem 1.25rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <h3 style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.0625rem",
            fontWeight: 400,
            color: "var(--color-dark-moss)",
            lineHeight: 1.2,
            margin: 0,
          }}>
            {doctor.name}
          </h3>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.8125rem",
            color: "var(--color-cafe-noir)",
            margin: 0,
            lineHeight: 1.4,
          }}>
            <span style={{ fontWeight: 700, color: "var(--color-dark-moss)" }}>{doctor.qualifications}</span>
            {" · "}{doctor.specialty}
          </p>
          <p style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.8125rem",
            color: "var(--color-olive)",
            fontWeight: 500,
            margin: 0,
          }}>
            {doctor.roles[0]}
          </p>
          <div style={{ marginTop: "auto", paddingTop: "0.75rem", display: "flex", alignItems: "center", gap: "0.375rem", color: "var(--color-dark-moss)", fontFamily: "var(--font-sans)", fontSize: "0.8125rem", fontWeight: 600 }}>
            View profile
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        .visiting-card:hover {
          box-shadow: 0 6px 28px rgba(37,78,6,0.09);
          transform: translateY(-2px);
          border-color: var(--color-olive) !important;
        }
      `}</style>
    </Link>
  );
}
