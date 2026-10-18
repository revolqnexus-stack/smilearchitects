"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@/components/ui/icons";

export type DoctorBleedCardProps = {
  name: string;
  photo?: string | null;
  qualifications: string;
  specialty: string;
  role?: string;
  visiting?: boolean;
  priority?: boolean;
};

/** Compact team card — photo strip + light body (readable on mobile). */
export default function DoctorBleedCard({
  name,
  photo,
  qualifications,
  specialty,
  role,
  visiting,
  priority = false,
}: DoctorBleedCardProps) {
  const [imageOk, setImageOk] = useState(Boolean(photo));

  const initials = name
    .split(" ")
    .map((p) => p.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");

  const showPhoto = photo && imageOk;

  return (
    <article className="doctor-team-card">
      <div className="doctor-team-card__photo">
        {showPhoto ? (
          <Image
            src={photo}
            alt=""
            fill
            sizes="(max-width: 640px) 50vw, 280px"
            priority={priority}
            className="doctor-team-card__img"
            onError={() => setImageOk(false)}
          />
        ) : (
          <span className="doctor-team-card__initials" aria-hidden="true">
            {initials}
          </span>
        )}
      </div>

      <div className="doctor-team-card__body">
        {visiting ? <span className="doctor-team-card__tag">Visiting</span> : null}
        <h3 className="doctor-team-card__name">{name}</h3>
        <p className="doctor-team-card__meta">
          {qualifications} · {specialty}
        </p>
        {role ? <p className="doctor-team-card__role">{role}</p> : null}
        <span className="card-learn-more">
          View profile <ArrowRightIcon size="sm" />
        </span>
      </div>
    </article>
  );
}
