"use client";

import { openConsentPreferences } from "@/lib/consent";

export function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={openConsentPreferences}
      className="w-fit font-primary text-[12px] md:text-[13px] text-[var(--text-muted)] hover:text-[var(--text-primary)] underline underline-offset-2 transition-colors"
    >
      Cookie preferences
    </button>
  );
}
