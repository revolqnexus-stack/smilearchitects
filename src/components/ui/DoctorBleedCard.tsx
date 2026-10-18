"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/ui/icons";

export type DoctorBleedCardProps = {
  name: string;
  photo?: string | null;
  /** CSS object-position for portrait crop (e.g. `50% 8%`) */
  photoPosition?: string;
  qualifications: string;
  specialty: string;
  role?: string;
  visiting?: boolean;
  priority?: boolean;
};

function PortraitPlaceholder() {
  return (
    <div className="doctor-team-card__placeholder" aria-hidden="true">
      <svg className="doctor-team-card__placeholder-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8.5" r="3.25" stroke="currentColor" strokeWidth="1.25" />
        <path
          d="M5.5 19.5c.85-3.2 3.35-5 6.5-5s5.65 1.8 6.5 5"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
      <span className="doctor-team-card__placeholder-label">Portrait coming soon</span>
    </div>
  );
}

/** Editorial portrait card — full-bleed photo with liquid-glass info overlay. */
export default function DoctorBleedCard({
  name,
  photo,
  photoPosition = "50% 12%",
  qualifications,
  specialty,
  role,
  visiting,
  priority = false,
}: DoctorBleedCardProps) {
  const [imageOk, setImageOk] = useState(Boolean(photo));
  const photoSrc = photo && imageOk ? photo : null;

  return (
    <article className="doctor-team-card">
      {photoSrc ? (
        <Image
          src={photoSrc}
          alt=""
          fill
          sizes="(max-width: 560px) 100vw, (max-width: 1100px) 50vw, 340px"
          priority={priority}
          className="doctor-team-card__img"
          style={{ objectPosition: photoPosition }}
          onError={() => setImageOk(false)}
        />
      ) : (
        <PortraitPlaceholder />
      )}

      <div className="doctor-team-card__scrim" aria-hidden="true" />

      <div className="doctor-team-card__glass">
        {visiting ? <span className="doctor-team-card__tag">Visiting</span> : null}
        <h3 className="doctor-team-card__name">{name}</h3>
        <p className="doctor-team-card__meta">
          <span className="doctor-team-card__qual">{qualifications}</span>
          <span className="doctor-team-card__sep" aria-hidden="true">
            ·
          </span>
          <span className="doctor-team-card__specialty">{specialty}</span>
        </p>
        {role ? <p className="doctor-team-card__role">{role}</p> : null}
        <span className="card-learn-more doctor-team-card__cta">
          View profile <ArrowRightIcon size="sm" />
        </span>
      </div>
    </article>
  );
}
