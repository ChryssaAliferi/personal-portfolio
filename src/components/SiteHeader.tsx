"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { TrackedLink } from "@/components/TrackedLink";
import { navLinks } from "@/content/site";

const linkClass = "font-primary text-base transition-colors";
const inactiveClass = "text-[var(--text-secondary)] hover:text-[var(--text-primary)]";
const activeClass = "text-[var(--text-primary)] font-medium";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileMenuOpen]);

  const links = (onNavigate?: () => void) =>
    navLinks.map(({ label, href }) => (
      <TrackedLink
        key={href}
        href={href}
        eventName="Nav Link Clicked"
        eventProperties={{ link: label }}
        onClick={onNavigate}
        aria-current={pathname === href ? "page" : undefined}
        className={`${linkClass} ${pathname === href ? activeClass : inactiveClass}`}
      >
        {label}
      </TrackedLink>
    ));

  return (
    <header className="relative flex items-center justify-between px-5 md:px-20 py-5 bg-[var(--card)] border-b border-[var(--border)]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-full focus:bg-[var(--card)] focus:border focus:border-[var(--border)] font-primary text-sm text-[var(--text-primary)]"
      >
        Skip to content
      </a>
      <TrackedLink
        href="/"
        eventName="Logo Clicked"
        eventProperties={{ location: "header" }}
        className="font-serif text-xl md:text-2xl text-[var(--text-primary)] tracking-[-0.5px]"
      >
        Chryssa Aliferi
      </TrackedLink>

      {/* Desktop Navigation */}
      <nav aria-label="Main" className="hidden md:flex items-center gap-10">{links()}</nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 -mr-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-nav"
      >
        <svg aria-hidden="true" className="w-6 h-6 text-[var(--text-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav id="mobile-nav" aria-label="Main" className="absolute top-full left-0 right-0 bg-[var(--card)] border-b border-[var(--border)] flex flex-col p-5 gap-4 md:hidden z-50">
          {links(() => setMobileMenuOpen(false))}
        </nav>
      )}
    </header>
  );
}
