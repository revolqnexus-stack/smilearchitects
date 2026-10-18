"use client";

import { useState } from "react";
import Image from "next/image";

type DoctorProfilePortraitProps = {
  name: string;
  photo?: string | null;
  priority?: boolean;
};

export default function DoctorProfilePortrait({ name, photo, priority }: DoctorProfilePortraitProps) {
  const [imageOk, setImageOk] = useState(Boolean(photo));
  const initials = name
    .split(" ")
    .map((p) => p.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");

  return (
    <div className="doctor-profile-hero__photo">
      {photo && imageOk ? (
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, 260px"
          priority={priority}
          className="doctor-profile-hero__img"
          onError={() => setImageOk(false)}
        />
      ) : (
        <span className="doctor-profile-hero__initials" aria-hidden="true">
          {initials}
        </span>
      )}
    </div>
  );
}
