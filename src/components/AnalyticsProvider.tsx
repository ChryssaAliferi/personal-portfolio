"use client";

import { useEffect } from "react";
import { initAnalytics, trackPage } from "@/lib/rudderstack";

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize RudderStack SDK
    initAnalytics();

    // Track initial page view after a short delay to ensure SDK is loaded
    const timer = setTimeout(() => {
      trackPage("Home");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return <>{children}</>;
}
