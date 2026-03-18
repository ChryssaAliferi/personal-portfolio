"use client";

import { trackEvent } from "@/lib/rudderstack";
import Link from "next/link";

type EventProperties = Record<string, string | number | boolean | string[]>;

interface TrackedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  eventName: string;
  eventProperties?: EventProperties;
  external?: boolean;
}

export function TrackedLink({
  href,
  children,
  className,
  eventName,
  eventProperties,
  external = false,
}: TrackedLinkProps) {
  const handleClick = () => {
    trackEvent(eventName, {
      href,
      ...eventProperties,
    });
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

interface TrackedButtonProps {
  children: React.ReactNode;
  className?: string;
  eventName: string;
  eventProperties?: EventProperties;
  onClick?: () => void;
}

export function TrackedButton({
  children,
  className,
  eventName,
  eventProperties,
  onClick,
}: TrackedButtonProps) {
  const handleClick = () => {
    trackEvent(eventName, eventProperties);
    onClick?.();
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
