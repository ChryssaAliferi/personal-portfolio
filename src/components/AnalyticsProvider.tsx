"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initAnalytics, trackPage } from "@/lib/rudderstack";

// Readable page names for the RudderStack `page` call. Unknown routes fall
// back to their path so new pages are still tracked.
const PAGE_NAMES: Record<string, string> = {
  "/": "Home",
  "/cv": "CV",
};

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    initAnalytics();
  }, []);

  // Runs on first load and on every client-side navigation, because the
  // root layout (and this provider) stays mounted between routes.
  useEffect(() => {
    // Short delay to ensure the SDK is loaded
    const timer = setTimeout(() => {
      trackPage(PAGE_NAMES[pathname] ?? pathname);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <>{children}</>;
}
