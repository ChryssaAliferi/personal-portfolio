"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { trackEvent } from "@/lib/rudderstack";

type EventProperties = Record<string, string | number | boolean | string[]>;

type TrackedLinkProps = Omit<ComponentProps<"a">, "href" | "onClick"> & {
  href: string;
  eventName: string;
  eventProperties?: EventProperties;
  // Opens in a new tab. Defaults to true for http(s) links to other sites.
  external?: boolean;
  onClick?: () => void;
};

// A link that sends a RudderStack track event when clicked. Internal links
// use next/link; external ones open in a new tab.
export function TrackedLink({
  href,
  eventName,
  eventProperties,
  external = /^https?:\/\//.test(href),
  onClick,
  children,
  ...anchorProps
}: TrackedLinkProps) {
  const handleClick = () => {
    trackEvent(eventName, { href, ...eventProperties });
    onClick?.();
  };

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick} {...anchorProps}>
        {children}
      </a>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} onClick={handleClick} {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} {...anchorProps}>
      {children}
    </Link>
  );
}
