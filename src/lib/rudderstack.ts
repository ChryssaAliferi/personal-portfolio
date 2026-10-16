"use client";

import { RudderAnalytics } from "@rudderstack/analytics-js";
import { CONSENT_CATEGORY, getStoredConsent } from "@/lib/consent";

let analyticsInstance: RudderAnalytics | null = null;
// True once the visitor declines; every call below becomes a no-op.
let trackingDisabled = false;

export function initAnalytics(): void {
  if (typeof window === "undefined") return;
  if (analyticsInstance) return;

  const writeKey = process.env.NEXT_PUBLIC_RUDDERSTACK_WRITE_KEY;
  const dataPlaneUrl = process.env.NEXT_PUBLIC_RUDDERSTACK_DATA_PLANE_URL;

  if (!writeKey || !dataPlaneUrl) {
    return;
  }

  const consent = getStoredConsent();

  // Declined on an earlier visit: don't load the SDK at all.
  if (consent === "denied") {
    trackingDisabled = true;
    return;
  }

  analyticsInstance = new RudderAnalytics();
  analyticsInstance.load(writeKey, dataPlaneUrl, {
    integrations: { All: true },
    consentManagement: {
      enabled: true,
      provider: "custom",
      ...(consent === "granted" && {
        allowedConsentIds: [CONSENT_CATEGORY],
        deniedConsentIds: [],
      }),
    },
    // No choice yet: keep events in memory and write nothing to cookies or
    // local storage. Buffered events are sent only if the visitor accepts.
    ...(consent === null && {
      preConsent: {
        enabled: true,
        storage: { strategy: "none" },
        events: { delivery: "buffer" },
      },
    }),
  });
}

// Called by the consent banner after the visitor chooses.
export function applyConsent(choice: "granted" | "denied"): void {
  if (choice === "granted") {
    trackingDisabled = false;
    if (!analyticsInstance) {
      // Previously declined, so the SDK was never loaded.
      initAnalytics();
      return;
    }
    analyticsInstance.consent({
      consentManagement: {
        allowedConsentIds: [CONSENT_CATEGORY],
        deniedConsentIds: [],
      },
      trackConsent: true,
      sendPageEvent: false,
    });
    return;
  }

  // Declined: stop sending anything. Events buffered before the choice are
  // never released, and if the visitor had accepted earlier, reset() clears
  // the anonymous ID and other stored identifiers.
  trackingDisabled = true;
  analyticsInstance?.reset(true);
}

export function getAnalytics(): RudderAnalytics | null {
  return trackingDisabled ? null : analyticsInstance;
}

// Track page views
export function trackPage(name?: string) {
  const analytics = getAnalytics();
  if (analytics) {
    if (name) {
      // Pass the name as a string: page({ name }) would send it as a
      // property and leave the event's page name empty.
      analytics.page(name);
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
