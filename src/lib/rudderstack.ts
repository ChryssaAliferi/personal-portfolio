"use client";

import { RudderAnalytics } from "@rudderstack/analytics-js";

let analyticsInstance: RudderAnalytics | null = null;
let isReady = false;

export function initAnalytics(): void {
  if (typeof window === "undefined") return;
  if (analyticsInstance) return;

  const writeKey = process.env.NEXT_PUBLIC_RUDDERSTACK_WRITE_KEY;
  const dataPlaneUrl = process.env.NEXT_PUBLIC_RUDDERSTACK_DATA_PLANE_URL;

  console.log("[RudderStack] Initializing...", { writeKey: !!writeKey, dataPlaneUrl: !!dataPlaneUrl });

  if (!writeKey || !dataPlaneUrl) {
    console.warn("[RudderStack] Credentials not configured");
    return;
  }

  analyticsInstance = new RudderAnalytics();
  analyticsInstance.load(writeKey, dataPlaneUrl, {
    integrations: { All: true },
  });

  analyticsInstance.ready(() => {
    isReady = true;
    console.log("[RudderStack] SDK Ready!");
  });
}

export function getAnalytics(): RudderAnalytics | null {
  return analyticsInstance;
}

// Track page views
export function trackPage(name?: string) {
  const analytics = getAnalytics();
  if (analytics) {
    console.log("[RudderStack] Tracking page:", name ?? "Home");
    if (name) {
      analytics.page({ name });
    } else {
      analytics.page();
    }
  }
}

// Track custom events
export function trackEvent(
  event: string,
  properties?: Record<string, string | number | boolean | string[]>
) {
  const analytics = getAnalytics();
  if (analytics) {
    console.log("[RudderStack] Tracking event:", event, properties);
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
