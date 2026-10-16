// Stores the visitor's analytics choice and lets components react to it.

export type ConsentChoice = "granted" | "denied";

// Consent category ID passed to RudderStack's custom consent provider.
export const CONSENT_CATEGORY = "analytics";

const STORAGE_KEY = "analytics-consent";
const CHANGE_EVENT = "analytics-consent-change";
const OPEN_EVENT = "analytics-consent-open";

export function getStoredConsent(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    // Storage can be blocked (private mode, strict browser settings).
    return null;
  }
}

export function storeConsent(choice: ConsentChoice): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Ignore: the choice still applies for this page view.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function subscribeToConsent(callback: () => void): () => void {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

// Re-opens the banner, e.g. from a "Cookie preferences" link in the footer.
export function openConsentPreferences(): void {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function subscribeToOpenRequests(callback: () => void): () => void {
  window.addEventListener(OPEN_EVENT, callback);
  return () => window.removeEventListener(OPEN_EVENT, callback);
}
