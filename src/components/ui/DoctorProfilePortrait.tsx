"use client";

import { useState } from "react";
import Image from "next/image";

type DoctorProfilePortraitProps = {
  name: string;
  photo?: string | null;
  photoPosition?: string;
  priority?: boolean;
};

function PortraitFallback() {
  return (
    <div className="doctor-profile-hero__fallback" aria-hidden="true">
      <svg className="doctor-profile-hero__fallback-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8.5" r="3.25" stroke="currentColor" strokeWidth="1.25" />
        <path
          d="M5.5 19.5c.85-3.2 3.35-5 6.5-5s5.65 1.8 6.5 5"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
      </svg>
      <span className="doctor-profile-hero__fallback-label">Portrait coming soon</span>
    </div>
  );
}

export default function DoctorProfilePortrait({
  name,
  photo,
  photoPosition = "50% 12%",
  priority,
}: DoctorProfilePortraitProps) {
  const [imageOk, setImageOk] = useState(Boolean(photo));
  const photoSrc = photo && imageOk ? photo : null;

  return (
    <div className="doctor-profile-hero__photo">
      {photoSrc ? (
        <Image
          src={photoSrc}
          alt={name}
          fill
          sizes="(max-width: 640px) 320px, 260px"
          priority={priority}
          className="doctor-profile-hero__img"
          style={{ objectPosition: photoPosition }}
          onError={() => setImageOk(false)}
        />
      ) : (
        <PortraitFallback />
      )}
    </div>
  );
}
