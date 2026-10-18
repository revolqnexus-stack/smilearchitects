import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { DOCTORS } from "@/lib/site-config";
import Breadcrumb from "@/components/ui/Breadcrumb";
import DoctorBleedCard from "@/components/ui/DoctorBleedCard";
import {
  RevealUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/REVOLQComponents";

export const metadata: Metadata = buildMetadata({
  title: "Our Dentists | Pala, Kottayam | Smile Architects",
  description:
    "Meet the dentists at Smile Architects, Pala — Dr. Jeo Tom Charls (MDS Orthodontics), Dr. Jintu Joan Jose and Dr. Ann Tresa T. Srambickal. Dental clinic in Pala, Kottayam, Kerala.",
  canonical: "/dentists",
});

export default function DentistsPage() {
  return (
    <>
      <div className="section-padding section-warm">
        <div className="container-xl">
          <Breadcrumb items={[{ label: "Our Doctors", href: "/dentists" }]} />

          <RevealUp delay={0.1}>
            <div className="doctors-page-intro">
              <p className="eyebrow">Our Doctors</p>
              <h1 className="doctors-page-title">Meet the specialists behind your smile</h1>
              <p className="doctors-page-description">
                A multidisciplinary team of dental specialists providing comprehensive care under one roof in Pala,
                Kottayam, Kerala.
              </p>
            </div>
          </RevealUp>
        </div>
      </div>

      <section className="section-padding section-light">
        <div className="container-xl">
          <StaggerContainer stagger={0.12} className="doctors-portrait-grid">
            {DOCTORS.map((doctor) => {
              const schema = {
                "@context": "https://schema.org",
                "@type": "Physician",
                name: doctor.name,
                description: doctor.bio,
                worksFor: { "@type": "MedicalOrganization", name: "Smile Architects" },
                medicalSpecialty: doctor.specialty,
                honorificSuffix: doctor.qualifications,
                ...(doctor.registrationNumber
                  ? {
                      identifier: {
                        "@type": "PropertyValue",
                        name: doctor.registrationBody,
                        value: doctor.registrationNumber,
                      },
                    }
                  : {}),
              };

              return (
                <StaggerItem key={doctor.id}>
                  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
                  <Link
                    href={`/dentists/${doctor.slug}`}
                    className="doctor-team-card-link"
                    aria-label={`View profile of ${doctor.name}`}
                  >
                    <DoctorBleedCard
                      name={doctor.name}
                      photo={doctor.photo}
                      photoPosition={doctor.photoPosition}
                      qualifications={doctor.qualifications}
                      specialty={doctor.specialty}
                      role={doctor.roles[0]}
                      visiting={doctor.visiting}
                      priority={doctor.id === "dr-jeo-tom-charls"}
                    />
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <section className="section-dark" style={{ padding: "3.5rem 0" }}>
        <div className="container-xl" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)", color: "var(--color-honeydew)", fontWeight: 400 }}>
            Book a consultation at Smile Architects, Pala
          </h2>
          <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/book-appointment" className="btn btn-secondary">
              Book Appointment
            </Link>
            <Link href="/contact" className="btn btn-ghost-light">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
