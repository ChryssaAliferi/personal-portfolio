"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/rudderstack";

// Project data
const projects = [
  {
    tag: "Kotlin",
    tagColor: "bg-[#A97BFF15] text-[#A97BFF]",
    title: "rudder-sdk-kotlin",
    description:
      "Kotlin Android SDK and Kotlin JVM for RudderStack — the Customer Data Platform for Developers. Contributed to core SDK features.",
    stars: 0,
    forks: 0,
    url: "https://github.com/ChryssaAliferi/rudder-sdk-kotlin",
  },
  {
    tag: "Android",
    tagColor: "bg-[#A97BFF15] text-[#A97BFF]",
    title: "AndroidxBiometric",
    description:
      "Example demonstrating the AndroidX Biometric API with a utility class for building biometric prompts on Android.",
    stars: 17,
    forks: 1,
    url: "https://github.com/ChryssaAliferi/AndroidxBiometric",
  },
  {
    tag: "Kotlin",
    tagColor: "bg-[#A97BFF15] text-[#A97BFF]",
    title: "StateStore-Kotlin",
    description:
      "State Management library for Kotlin projects. Simple, lightweight architecture for managing UI state in Android and JVM applications.",
    stars: 0,
    forks: 0,
    url: "https://github.com/ChryssaAliferi/StateStore-Kotlin",
  },
];

// Blog data
const blogPosts = [
  {
    date: "Feb 22, 2021",
    title: "Leveraging the Power of Android Design Language",
    excerpt:
      "How Plum translated its brand personality into a cohesive Android design system using Material Design themes and reusable components.",
    tags: ["Android", "Design Systems"],
    url: "https://medium.com/plum-fintech/leveraging-the-power-of-android-design-language-3e931bc4c58",
  },
  {
    date: "Oct 14, 2016",
    title: "Android Architecture with Multi-Screen MVP (Part 2)",
    excerpt:
      "Practical implementation of MVP pattern for complex Android apps using Screens and Flows as conceptual units.",
    tags: ["Architecture", "MVP"],
    url: "https://medium.com/taxibeat/android-architecture-with-multi-screen-mvp-part-2-f4b008bda020",
  },
  {
    date: "Sep 21, 2016",
    title: "Android Architecture with Multi-Screen MVP (Part 1)",
    excerpt:
      "Taxibeat's shift from traditional Android architecture toward Model-View-Presenter pattern with cleaner separation of concerns.",
    tags: ["Architecture", "Android"],
    url: "https://medium.com/taxibeat/android-architecture-with-multi-screen-mvp-46d3ccafa7b9",
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
          href="#projects"
          onClick={() => trackEvent("Nav Link Clicked", { link: "Projects" })}
          className="font-primary text-base text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          Projects
        </Link>
        <Link
          href="#blog"
          onClick={() => trackEvent("Nav Link Clicked", { link: "Blog" })}
          className="font-primary text-base text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          Blog
        </Link>
        <Link
          href="#about"
          onClick={() => trackEvent("Nav Link Clicked", { link: "About" })}
          className="font-primary text-base text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          About
        </Link>
        <Link
          href="#contact"
          onClick={() => trackEvent("CTA Clicked", { cta: "Work with me", location: "header" })}
          className="font-primary text-[13px] font-medium text-white bg-[var(--accent)] rounded-full px-6 py-3 hover:opacity-90 transition-opacity"
        >
          Work with me
        </Link>
      </nav>
    </header>
  );
}

// Hero Component
function Hero() {
  return (
    <section className="flex flex-col items-center gap-8 px-20 py-[100px] bg-[var(--background)]">
      <div className="px-4 py-2 rounded-full bg-[var(--accent-tint)] border border-[rgba(124,144,130,0.19)]">
        <span className="font-primary text-[13px] font-medium text-[var(--accent)]">
          Engineering &amp; Product Leader
        </span>
      </div>
      <h1 className="font-serif text-[56px] text-[var(--text-primary)] text-center leading-[1.1] tracking-[-1.2px]">
        Designing systems that power products
        <br />
        — and the teams behind them.
      </h1>
      <p className="font-primary text-lg text-[var(--text-body)] text-center leading-[1.6] max-w-[600px]">
        Engineering &amp; Product Leader at RudderStack, focused on SDKs, integrations, and data platforms used in production.
      </p>
      <div className="flex gap-4 pt-6">
        <Link
          href="#projects"
          onClick={() => trackEvent("CTA Clicked", { cta: "View Projects", location: "hero" })}
          className="font-primary text-[13px] font-medium text-white bg-[var(--accent)] rounded-full px-8 py-4 hover:opacity-90 transition-opacity"
        >
          View Projects
        </Link>
        <Link
          href="#blog"
          onClick={() => trackEvent("CTA Clicked", { cta: "Read Blog", location: "hero" })}
          className="font-primary text-[13px] font-medium text-[var(--text-primary)] bg-white rounded-full px-8 py-4 border border-[var(--border)] hover:bg-[var(--surface-tint)] transition-colors"
        >
          Read Blog
        </Link>
      </div>
    </section>
  );
}

// Project Card Component
function ProjectCard({
  tag,
  tagColor,
  title,
  description,
  stars,
  forks,
  url,
}: {
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  stars: number;
  forks: number;
  url: string;
}) {
  const handleClick = () => {
    trackEvent("Project Clicked", { project: title, url, tag });
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex-1 bg-white rounded-[20px] border border-[var(--border)] overflow-hidden hover:shadow-lg hover:border-[var(--accent)] transition-all duration-200">
      <div className="flex flex-col gap-3 p-6 pb-5">
        <div className={`w-fit px-3 py-1.5 rounded-lg text-[12px] font-medium ${tagColor}`}>
          {tag}
        </div>
        <h3 className="font-serif text-xl text-[var(--text-primary)]">{title}</h3>
        <p className="font-primary text-sm text-[var(--text-body)] leading-[1.5]">
          {description}
        </p>
        <div className="flex items-center gap-4 pt-2">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 fill-[var(--text-secondary)]" viewBox="0 0 16 16">
              <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
            </svg>
            <span className="font-primary text-sm text-[var(--text-secondary)]">{stars}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 fill-[var(--text-secondary)]" viewBox="0 0 16 16">
              <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z" />
            </svg>
            <span className="font-primary text-sm text-[var(--text-secondary)]">{forks}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

// Projects Section
function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-12 px-20 py-20 bg-[var(--background)]">
      <div className="flex flex-col items-center gap-4">
        <span className="font-primary text-xs font-semibold text-[var(--accent)] tracking-[2px]">
          SELECTED WORK
        </span>
        <h2 className="font-serif text-4xl text-[var(--text-primary)] tracking-[-0.8px]">
          Products, Platforms &amp; Experiments
        </h2>
      </div>
      <div className="flex gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

// Blog Post Card Component
function BlogPostCard({
  date,
  title,
  excerpt,
  tags,
  url,
}: {
  date: string;
  title: string;
  excerpt: string;
  tags: string[];
  url: string;
}) {
  const handleClick = () => {
    trackEvent("Blog Post Clicked", { title, url, tags });
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="flex-1 flex flex-col gap-4 p-6 rounded-[20px] bg-[var(--background)] border border-[var(--border)] hover:shadow-lg hover:border-[var(--accent)] transition-all duration-200">
      <span className="font-primary text-[13px] font-medium text-[var(--text-muted)]">
        {date}
      </span>
      <h3 className="font-serif text-xl text-[var(--text-primary)] leading-[1.3]">
        {title}
      </h3>
      <p className="font-primary text-[15px] text-[var(--text-body)] leading-[1.5]">
        {excerpt}
      </p>
      <div className="flex gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-lg bg-[var(--surface-tint)] font-primary text-xs text-[var(--text-secondary)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

// Blog Section
function Blog() {
  return (
    <section id="blog" className="flex flex-col gap-12 px-20 py-20 bg-white border-t border-[var(--border)]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-4">
          <span className="font-primary text-xs font-semibold text-[var(--accent)] tracking-[2px]">
            THOUGHTS
          </span>
          <h2 className="font-serif text-4xl text-[var(--text-primary)] tracking-[-0.8px]">
            On building products, scaling systems, and the future of software.
          </h2>
        </div>
        <a
          href="https://medium.com/@califeri"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("External Link Clicked", { link: "View All Posts", platform: "Medium" })}
          className="flex items-center gap-2 font-primary text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          View all posts
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
      <div className="flex gap-6">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.title} {...post} />
        ))}
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer id="about" className="flex flex-col gap-12 px-20 py-20 bg-[var(--background)] border-t border-[var(--border)]">
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
              onClick={() => trackEvent("Social Icon Clicked", { platform: "GitHub", location: "footer" })}
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
              onClick={() => trackEvent("Social Icon Clicked", { platform: "LinkedIn", location: "footer" })}
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
              onClick={() => trackEvent("Social Icon Clicked", { platform: "X", location: "footer" })}
              className="p-3 rounded-xl bg-[var(--surface-tint)] border border-[var(--border)] hover:bg-[var(--surface-muted)] transition-colors"
            >
              <svg className="w-5 h-5 fill-[var(--text-secondary)]" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
              </svg>
            </a>
            <a
              href="mailto:c.aliferi@gmail.com"
              onClick={() => trackEvent("Social Icon Clicked", { platform: "Email", location: "footer" })}
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
              href="#projects"
              onClick={() => trackEvent("Footer Nav Clicked", { link: "Projects" })}
              className="font-primary text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#blog"
              onClick={() => trackEvent("Footer Nav Clicked", { link: "Blog" })}
              className="font-primary text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="#about"
              onClick={() => trackEvent("Footer Nav Clicked", { link: "About" })}
              className="font-primary text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              About
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
              onClick={() => trackEvent("Social Link Clicked", { platform: "GitHub", location: "footer" })}
              className="font-primary text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/chryssaaliferi/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("Social Link Clicked", { platform: "LinkedIn", location: "footer" })}
              className="font-primary text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/ChryssaAl"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("Social Link Clicked", { platform: "X", location: "footer" })}
              className="font-primary text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              X
            </a>
            <a
              href="mailto:c.aliferi@gmail.com"
              onClick={() => trackEvent("Social Link Clicked", { platform: "Email", location: "footer" })}
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

// Main Page
export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
