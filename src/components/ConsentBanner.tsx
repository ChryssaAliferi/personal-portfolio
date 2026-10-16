"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import {
  type ConsentChoice,
  getStoredConsent,
  storeConsent,
  subscribeToConsent,
  subscribeToOpenRequests,
} from "@/lib/consent";
import { applyConsent } from "@/lib/rudderstack";

// "unknown" on the server, so returning visitors who already chose never
// see the banner flash before hydration.
const getServerSnapshot = (): ConsentChoice | null | "unknown" => "unknown";

export function ConsentBanner() {
  const stored = useSyncExternalStore(subscribeToConsent, getStoredConsent, getServerSnapshot);
  const [reopened, setReopened] = useState(false);

  useEffect(() => subscribeToOpenRequests(() => setReopened(true)), []);

  if (stored === "unknown") return null;
  if (stored !== null && !reopened) return null;

  const choose = (choice: ConsentChoice) => {
    storeConsent(choice);
    applyConsent(choice);
    setReopened(false);
  };

  return (
    <div
      role="region"
      aria-label="Analytics consent"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-[400px] z-50 flex flex-col gap-4 p-5 md:p-6 rounded-[20px] bg-[var(--card)] border border-[var(--border)] shadow-lg"
    >
      <div className="flex flex-col gap-2">
        <span className="font-serif text-lg text-[var(--text-primary)]">Analytics on this site</span>
        <p className="font-primary text-sm text-[var(--text-body)] leading-[1.5]">
          I use RudderStack to see which projects and posts people read. Nothing is sent, and
          no identifiers are stored on your device, unless you allow it.
        </p>
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => choose("granted")}
          className="flex-1 font-primary text-[13px] font-medium text-white bg-[var(--accent-strong)] rounded-full px-5 py-3 hover:opacity-90 transition-opacity"
        >
          Allow analytics
        </button>
        <button
          type="button"
          onClick={() => choose("denied")}
          className="flex-1 font-primary text-[13px] font-medium text-[var(--text-primary)] bg-white rounded-full px-5 py-3 border border-[var(--border)] hover:bg-[var(--surface-tint)] transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
