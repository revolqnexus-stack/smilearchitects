"use client";

import { trackEvent } from "@/lib/analytics";

interface TrackedLinkProps {
  href: string;
  eventName: string;
  eventParams?: Record<string, string>;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

/**
 * Client component wrapper for links that need Google Analytics tracking.
 * Use this for external links or actions where you need to track user interactions.
 */
export default function TrackedLink({
  href,
  eventName,
  eventParams,
  children,
  className,
  style,
  target,
  rel,
  "aria-label": ariaLabel,
}: TrackedLinkProps) {
  const handleClick = () => {
    trackEvent(eventName, eventParams);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      style={style}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
