import { CookiePreferencesButton } from "@/components/CookiePreferencesButton";
import { EmailIcon, GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { TrackedLink } from "@/components/TrackedLink";
import { navLinks, socialLinks, type SocialPlatform } from "@/content/site";

const ICONS: Record<SocialPlatform, typeof GitHubIcon> = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  X: XIcon,
  Email: EmailIcon,
};

const footerLinkClass =
  "font-primary text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors";

// `location` is sent with click events so footer clicks can be told apart by page.
export function SiteFooter({ location }: { location: "footer" | "cv-footer" }) {
  return (
    <footer
      id="about"
      className="flex flex-col gap-8 md:gap-12 px-5 md:px-20 py-12 md:py-20 bg-[var(--background)] border-t border-[var(--border)]"
    >
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-8">
        <div className="flex flex-col gap-4 max-w-[400px]">
          <span className="font-serif text-[24px] md:text-[28px] text-[var(--text-primary)]">
            Chryssa Aliferi
          </span>
          <p className="font-primary text-[14px] md:text-[15px] text-[var(--text-body)] leading-[1.6]">
            Engineering &amp; Product Leader building systems that make a difference.
          </p>
          <div className="flex gap-3 md:gap-4 pt-2">
            {socialLinks.map(({ platform, href }) => {
              const Icon = ICONS[platform];
              return (
                <TrackedLink
                  key={platform}
                  href={href}
                  eventName="Social Icon Clicked"
                  eventProperties={{ platform, location }}
                  aria-label={platform === "Email" ? "Email Chryssa" : `Chryssa on ${platform}`}
                  className="p-2.5 md:p-3 rounded-xl bg-[var(--surface-tint)] border border-[var(--border)] hover:bg-[var(--surface-muted)] transition-colors"
                >
                  <Icon className="w-5 h-5 fill-[var(--text-secondary)]" />
                </TrackedLink>
              );
            })}
          </div>
        </div>
        <div className="flex gap-12 md:gap-20">
          <div className="flex flex-col gap-3 md:gap-4">
            <span className="font-primary text-sm font-semibold text-[var(--text-primary)]">Navigation</span>
            {[{ label: "Home", href: "/" }, ...navLinks].map(({ label, href }) => (
              <TrackedLink
                key={href}
                href={href}
                eventName="Footer Nav Clicked"
                eventProperties={{ link: label }}
                className={footerLinkClass}
              >
                {label}
              </TrackedLink>
            ))}
          </div>
          <div className="flex flex-col gap-3 md:gap-4">
            <span className="font-primary text-sm font-semibold text-[var(--text-primary)]">Connect</span>
            {socialLinks.map(({ platform, href }) => (
              <TrackedLink
                key={platform}
                href={href}
                eventName="Social Link Clicked"
                eventProperties={{ platform, location }}
                className={footerLinkClass}
              >
                {platform}
              </TrackedLink>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-[var(--border)]" />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Year comes from the build; suppress the warning if a visitor's clock is in a newer year. */}
        <span className="font-primary text-[12px] md:text-[13px] text-[var(--text-muted)]" suppressHydrationWarning>
          © {new Date().getFullYear()} Chryssa Aliferi. All rights reserved.
        </span>
        <CookiePreferencesButton />
      </div>
    </footer>
  );
}
