import type { Metadata } from "next";
import { ExperienceCard } from "@/components/ExperienceCard";
import { LinkedInIcon } from "@/components/icons";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TrackedLink } from "@/components/TrackedLink";
import { experiences } from "@/content/experience";

const description =
  "Work experience of Chryssa Aliferi: Product Manager and Engineering Manager at RudderStack, Head of Mobile at Plum, and Android engineering at Beat.";

export const metadata: Metadata = {
  title: "CV",
  description,
  alternates: { canonical: "/cv" },
  // openGraph replaces the layout's object rather than merging, so repeat the shared fields.
  openGraph: {
    type: "website",
    url: "/cv",
    siteName: "Chryssa Aliferi",
    title: "CV | Chryssa Aliferi",
    description,
    locale: "en_US",
  },
};

// Main CV Page
export default function CVPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <SiteHeader />
      <main id="main" className="px-5 md:px-20 py-10 md:py-16">
        {/* Hero Section - Centered */}
        <div className="flex flex-col items-center gap-3 md:gap-4 mb-10 md:mb-16 text-center">
          <span className="font-primary text-xs font-semibold text-[var(--accent-strong)] tracking-[2px]">
            EXPERIENCE
          </span>
          <h1 className="font-serif text-[28px] md:text-[40px] lg:text-[48px] text-[var(--text-primary)] tracking-[-0.5px] md:tracking-[-1px] leading-[1.2] md:leading-[1.1]">
            A decade of building products,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>leading teams, and shipping software.
          </h1>
          <p className="font-primary text-base md:text-lg text-[var(--text-body)] leading-[1.6] max-w-[700px] mt-1 md:mt-2">
            From hands-on Android development to leading mobile platforms and SDK teams.
            Passionate about architecture, developer experience, and building high-performing engineering teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-3 md:mt-4 w-full sm:w-auto">
            <TrackedLink
              href="https://www.linkedin.com/in/chryssaaliferi/"
              eventName="CTA Clicked"
              eventProperties={{ cta: "View LinkedIn", location: "cv-hero" }}
              className="font-primary text-[13px] font-medium text-white bg-[var(--accent-strong)] rounded-full px-6 py-3 hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
            >
              <LinkedInIcon className="w-4 h-4 fill-white" />
              View LinkedIn
            </TrackedLink>
            <TrackedLink
              href="mailto:c.aliferi@gmail.com"
              eventName="CTA Clicked"
              eventProperties={{ cta: "Get in Touch", location: "cv-hero" }}
              className="font-primary text-[13px] font-medium text-[var(--text-primary)] bg-white rounded-full px-6 py-3 border border-[var(--border)] hover:bg-[var(--surface-tint)] transition-colors text-center"
            >
              Get in Touch
            </TrackedLink>
          </div>
        </div>

        {/* Experience Timeline - Centered Container */}
        <div className="flex justify-center">
          <div className="w-full max-w-[900px]">
            <h2 className="sr-only">Work experience</h2>
            {experiences.map((exp, index) => (
              <ExperienceCard key={`${exp.company}-${exp.role}-${index}`} {...exp} />
            ))}
          </div>
        </div>
      </main>
      <SiteFooter location="cv-footer" />
    </div>
  );
}
