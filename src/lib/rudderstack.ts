"use client";

import { RudderAnalytics } from "@rudderstack/analytics-js";

let analyticsInstance: RudderAnalytics | null = null;

export function getAnalytics(): RudderAnalytics | null {
  if (typeof window === "undefined") return null;

  if (!analyticsInstance) {
    const writeKey = process.env.NEXT_PUBLIC_RUDDERSTACK_WRITE_KEY;
    const dataPlaneUrl = process.env.NEXT_PUBLIC_RUDDERSTACK_DATA_PLANE_URL;

    if (!writeKey || !dataPlaneUrl) {
      console.warn("RudderStack credentials not configured");
      return null;
    }

    analyticsInstance = new RudderAnalytics();
    analyticsInstance.load(writeKey, dataPlaneUrl, {
      integrations: { All: true },
    });
  }

  return analyticsInstance;
}

// Track page views
export function trackPage(name?: string) {
  const analytics = getAnalytics();
  if (analytics && name) {
    analytics.page(name);
  } else if (analytics) {
    analytics.page();
  }
}

// Track custom events
export function trackEvent(
  event: string,
  properties?: Record<string, string | number | boolean | string[]>
) {
  const analytics = getAnalytics();
  if (analytics) {
    analytics.track(event, properties);
  }
}

// Identify users (optional)
export function identifyUser(
  userId: string,
  traits?: Record<string, string | number | boolean>
) {
  const analytics = getAnalytics();
  if (analytics) {
    analytics.identify(userId, traits);
  }
}
