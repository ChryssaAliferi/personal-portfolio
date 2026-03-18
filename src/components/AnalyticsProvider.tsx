"use client";

import { useEffect } from "react";
import { trackPage } from "@/lib/rudderstack";

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Track initial page view
    trackPage("Home");
  }, []);

  return <>{children}</>;
}
