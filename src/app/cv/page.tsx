"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/rudderstack";

// Experience data
const experiences = [
  {
    company: "RudderStack",
    role: "Engineering Manager",
    type: "Full-time",
    location: "Remote",
    period: "Sep 2023 - Present",
    duration: "2 yrs 7 mos",
    description: [
      "Ownership of 15+ RudderStack SDKs from development to post-production.",
      "Managing the team of developers and working with them to deliver high-quality products.",
      "Mentoring, supporting, and conducting regular 1:1s, providing architectural and technical guidance.",
      "Set up and led mobile end-to-end testing framework for the engineering organisation.",
      "Defining and building a roadmap by collaborating with the product managers.",
    ],
    current: true,
  },
  {
    company: "Plum",
    role: "Head of Mobile",
    type: "Full-time",
    location: "On-site",
    period: "Jun 2019 - Sep 2023",
    duration: "4 yrs 4 mos",
    description: [
      "Led the Mobile Platform team, overseeing both Android and iOS development.",
      "Managed and mentored a growing team, expanding from an initial group to 24 engineers.",
      "Accountable for the architecture, tooling, mobile infrastructure, CI/CD processes, design system, security, and performance of Plum's mobile apps.",
      "Initiated and kick-started the Android application development for Plum.",
      "Led the creation of the Plum Android Design System, adhering to Material Design principles.",
    ],
    current: false,
  },
  {
    company: "Beat",
    role: "Senior Android Engineer",
    type: "Full-time",
    location: "Athens",
    period: "Jun 2017 - May 2019",
    duration: "2 yrs",
    description: [
      "\"Squad launcher\", helped 3 new cross-functional squads to kick-off, leading teams to cultivate product-oriented engineering focus.",
      "Leading role in cross-functional squads responsible for creating end-to-end features in Payments, Analytics, and Growth missions.",
      "Leading Android hiring manager and code reviewer.",
      "Led the investigation, proposal, and presentation of the Android projects' modularization.",
    ],
    current: false,
  },
  {
    company: "Beat",
    role: "Android Developer",
    type: "Full-time",
    location: "Athens",
    period: "Mar 2014 - Jun 2017",
    duration: "3 yrs 4 mos",
    description: [
      "Part of a small mobile team to develop Beat Android passenger and driver apps.",
      "Responsible for setting the architectural re-structure of the projects.",
      "Successfully developed numerous features, from geolocation services to analytics and integration with 3rd party tools, libraries, and APIs.",
      "Direct collaboration with Google to integrate ride-hailing service directly from the Google Maps app.",
    ],
    current: false,
  },
  {
    company: "Intracom Telecom",
    role: "Junior Software Engineer",
    type: "Full-time",
    location: "Greece",
    period: "Apr 2013 - Feb 2014",
    duration: "11 mos",
    description: [
      "OSS/BSS Department working on Billing systems.",
      "Software Architecture design and implementation.",
    ],
    current: false,
  },
  {
    company: "Intracom Telecom",
    role: "Intern",
    type: "Internship",
    location: "Greece",
    period: "Oct 2012 - Mar 2013",
    duration: "6 mos",
    description: [
      "Distributed System for Log File Analysis (Big Data Analytics) using Apache Hadoop.",
      "Creation and installation of the Hadoop distributed environment with local virtual machines.",
      "Implementation of a MapReduce algorithm for analysis of IPTV user log files.",
    ],
    current: false,
  },
];

// Header Component
function Header() {
  return (
    <header className="flex items-center justify-between px-20 py-5 bg-[var(--card)] border-b border-[var(--border)]">
      <Link
        href="/"
        onClick={() => trackEvent("Logo Clicked", { location: "header" })}
        className="font-serif text-2xl text-[var(--text-primary)] tracking-[-0.5px]"
      >
        Chryssa Aliferi
      </Link>
      <nav className="flex items-center gap-10">
        <Link
          href="/#projects"
          onClick={() => trackEvent("Nav Link Clicked", { link: "Projects" })}
          className="font-primary text-base text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          Projects
        </Link>
        <Link
          href="/#blog"
          onClick={() => trackEvent("Nav Link Clicked", { link: "Blog" })}
          className="font-primary text-base text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          Blog
        </Link>
        <Link
          href="/cv"
          onClick={() => trackEvent("Nav Link Clicked", { link: "CV" })}
          className="font-primary text-base text-[var(--text-primary)] font-medium transition-colors"
        >
          CV
        </Link>
      </nav>
    </header>
  );
}

// Experience Card Component
function ExperienceCard({
  company,
  role,
  type,
  location,
  period,
  duration,
  description,
  current,
}: {
  company: string;
  role: string;
  type: string;
  location: string;
  period: string;
  duration: string;
  description: string[];
  current: boolean;
}) {
  return (
    <div className="relative flex gap-8 pb-12 last:pb-0">
      {/* Timeline dot */}
      <div className={`relative z-10 w-4 h-4 rounded-full mt-1.5 flex-shrink-0 ${
        current
          ? "bg-[var(--accent)] ring-4 ring-[var(--accent-tint)]"
          : "bg-[var(--border)] border-2 border-[var(--surface-tint)]"
      }`} />

      {/* Content */}
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <h3 className="font-serif text-xl text-[var(--text-primary)]">{role}</h3>
              {current && (
                <span className="px-2.5 py-1 rounded-full bg-[var(--accent-tint)] font-primary text-xs font-medium text-[var(--accent)]">
                  Current
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-primary text-base font-medium text-[var(--text-secondary)]">
                {company}
              </span>
              <span className="text-[var(--text-muted)]">·</span>
              <span className="font-primary text-sm text-[var(--text-muted)]">{type}</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="font-primary text-sm text-[var(--text-secondary)]">{period}</span>
            <div className="flex items-center gap-2">
              <span className="font-primary text-sm text-[var(--text-muted)]">{duration}</span>
              <span className="text-[var(--text-muted)]">·</span>
              <span className="font-primary text-sm text-[var(--text-muted)]">{location}</span>
            </div>
          </div>
        </div>
        <ul className="flex flex-col gap-2 mt-2">
          {description.map((item, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-[var(--accent)] mt-1.5">•</span>
              <span className="font-primary text-[15px] text-[var(--text-body)] leading-[1.6]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="flex flex-col gap-12 px-20 py-20 bg-[var(--background)] border-t border-[var(--border)]">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4 max-w-[400px]">
          <span className="font-serif text-[28px] text-[var(--text-primary)]">
            Chryssa Aliferi
          </span>
          <p className="font-primary text-[15px] text-[var(--text-body)] leading-[1.6]">
            Engineering &amp; Product Leader building systems that make a difference.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/ChryssaAliferi"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("Social Icon Clicked", { platform: "GitHub", location: "cv-footer" })}
              className="p-3 rounded-xl bg-[var(--surface-tint)] border border-[var(--border)] hover:bg-[var(--surface-muted)] transition-colors"
            >
              <svg className="w-5 h-5 fill-[var(--text-secondary)]" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/chryssaaliferi/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("Social Icon Clicked", { platform: "LinkedIn", location: "cv-footer" })}
              className="p-3 rounded-xl bg-[var(--surface-tint)] border border-[var(--border)] hover:bg-[var(--surface-muted)] transition-colors"
            >
              <svg className="w-5 h-5 fill-[var(--text-secondary)]" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
              </svg>
            </a>
            <a
              href="https://x.com/ChryssaAl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("Social Icon Clicked", { platform: "X", location: "cv-footer" })}
              className="p-3 rounded-xl bg-[var(--surface-tint)] border border-[var(--border)] hover:bg-[var(--surface-muted)] transition-colors"
            >
              <svg className="w-5 h-5 fill-[var(--text-secondary)]" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
              </svg>
            </a>
            <a
              href="mailto:c.aliferi@gmail.com"
              onClick={() => trackEvent("Social Icon Clicked", { platform: "Email", location: "cv-footer" })}
              className="p-3 rounded-xl bg-[var(--surface-tint)] border border-[var(--border)] hover:bg-[var(--surface-muted)] transition-colors"
            >
              <svg className="w-5 h-5 fill-[var(--text-secondary)]" viewBox="0 0 24 24">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-4">
            <span className="font-primary text-sm font-semibold text-[var(--text-primary)]">
              Navigation
            </span>
            <Link
              href="/"
              onClick={() => trackEvent("Footer Nav Clicked", { link: "Home" })}
              className="font-primary text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#projects"
              onClick={() => trackEvent("Footer Nav Clicked", { link: "Projects" })}
              className="font-primary text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/#blog"
              onClick={() => trackEvent("Footer Nav Clicked", { link: "Blog" })}
              className="font-primary text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/cv"
              onClick={() => trackEvent("Footer Nav Clicked", { link: "CV" })}
              className="font-primary text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              CV
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-primary text-sm font-semibold text-[var(--text-primary)]">
              Connect
            </span>
            <a
              href="https://github.com/ChryssaAliferi"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("Social Link Clicked", { platform: "GitHub", location: "cv-footer" })}
              className="font-primary text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/chryssaaliferi/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("Social Link Clicked", { platform: "LinkedIn", location: "cv-footer" })}
              className="font-primary text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/ChryssaAl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("Social Link Clicked", { platform: "X", location: "cv-footer" })}
              className="font-primary text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              X
            </a>
            <a
              href="mailto:c.aliferi@gmail.com"
              onClick={() => trackEvent("Social Link Clicked", { platform: "Email", location: "cv-footer" })}
              className="font-primary text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-[var(--border)]" />
      <span className="font-primary text-[13px] text-[var(--text-muted)]">
        © 2026 Chryssa Aliferi. All rights reserved.
      </span>
    </footer>
  );
}

// Main CV Page
export default function CVPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <main className="px-20 py-16">
        {/* Hero Section - Centered */}
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <span className="font-primary text-xs font-semibold text-[var(--accent)] tracking-[2px]">
            EXPERIENCE
          </span>
          <h1 className="font-serif text-[48px] text-[var(--text-primary)] tracking-[-1px] leading-[1.1]">
            A decade of building products,<br />leading teams, and shipping software.
          </h1>
          <p className="font-primary text-lg text-[var(--text-body)] leading-[1.6] max-w-[700px] mt-2">
            From hands-on Android development to leading mobile platforms and SDK teams.
            Passionate about architecture, developer experience, and building high-performing engineering teams.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/chryssaaliferi/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("CTA Clicked", { cta: "View LinkedIn", location: "cv-hero" })}
              className="font-primary text-[13px] font-medium text-white bg-[var(--accent)] rounded-full px-6 py-3 hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
              </svg>
              View LinkedIn
            </a>
            <a
              href="mailto:c.aliferi@gmail.com"
              onClick={() => trackEvent("CTA Clicked", { cta: "Get in Touch", location: "cv-hero" })}
              className="font-primary text-[13px] font-medium text-[var(--text-primary)] bg-white rounded-full px-6 py-3 border border-[var(--border)] hover:bg-[var(--surface-tint)] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Experience Timeline - Centered Container */}
        <div className="flex justify-center">
          <div className="w-full max-w-[900px]">
            {experiences.map((exp, index) => (
              <ExperienceCard key={`${exp.company}-${exp.role}-${index}`} {...exp} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
