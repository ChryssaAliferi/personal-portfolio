import { BlogPostCard } from "@/components/BlogPostCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TrackedLink } from "@/components/TrackedLink";
import { blogPosts } from "@/content/blog";
import { projects } from "@/content/projects";

// Hero Component
function Hero() {
  return (
    <section className="flex flex-col items-center gap-6 md:gap-8 px-5 md:px-20 py-16 md:py-[100px] bg-[var(--background)]">
      <div className="px-4 py-2 rounded-full bg-[var(--accent-tint)] border border-[rgba(124,144,130,0.19)]">
        <span className="font-primary text-[12px] md:text-[13px] font-medium text-[var(--accent-strong)]">
          Engineering &amp; Product Leader
        </span>
      </div>
      <h1 className="font-serif text-[32px] md:text-[48px] lg:text-[56px] text-[var(--text-primary)] text-center leading-[1.15] md:leading-[1.1] tracking-[-0.8px] md:tracking-[-1.2px]">
        Designing systems that power products
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>— and the teams behind them.
      </h1>
      <p className="font-primary text-base md:text-lg text-[var(--text-body)] text-center leading-[1.6] max-w-[600px]">
        Engineering &amp; Product Leader at RudderStack, focused on SDKs, integrations, and data platforms used in production.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4 md:pt-6 w-full sm:w-auto">
        <TrackedLink
          href="#projects"
          eventName="CTA Clicked"
          eventProperties={{ cta: "View Projects", location: "hero" }}
          className="font-primary text-[13px] font-medium text-white bg-[var(--accent-strong)] rounded-full px-8 py-4 hover:opacity-90 transition-opacity text-center"
        >
          View Projects
        </TrackedLink>
        <TrackedLink
          href="#blog"
          eventName="CTA Clicked"
          eventProperties={{ cta: "Read Blog", location: "hero" }}
          className="font-primary text-[13px] font-medium text-[var(--text-primary)] bg-white rounded-full px-8 py-4 border border-[var(--border)] hover:bg-[var(--surface-tint)] transition-colors text-center"
        >
          Read Blog
        </TrackedLink>
      </div>
    </section>
  );
}

// Projects Section
function Projects() {
  return (
    <section id="projects" className="flex flex-col gap-8 md:gap-12 px-5 md:px-20 py-12 md:py-20 bg-[var(--background)]">
      <div className="flex flex-col items-center gap-3 md:gap-4">
        <span className="font-primary text-xs font-semibold text-[var(--accent-strong)] tracking-[2px]">
          SELECTED WORK
        </span>
        <h2 className="font-serif text-2xl md:text-4xl text-[var(--text-primary)] tracking-[-0.5px] md:tracking-[-0.8px] text-center">
          Products, Platforms &amp; Experiments
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

// Blog Section
function Blog() {
  return (
    <section id="blog" className="flex flex-col gap-8 md:gap-12 px-5 md:px-20 py-12 md:py-20 bg-white border-t border-[var(--border)]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8">
        <div className="flex flex-col gap-3 md:gap-4">
          <span className="font-primary text-xs font-semibold text-[var(--accent-strong)] tracking-[2px]">
            THOUGHTS
          </span>
          <h2 className="font-serif text-2xl md:text-4xl text-[var(--text-primary)] tracking-[-0.5px] md:tracking-[-0.8px]">
            On building products, scaling systems, and the future of software.
          </h2>
        </div>
        <TrackedLink
          href="https://medium.com/@califeri"
          eventName="External Link Clicked"
          eventProperties={{ link: "View All Posts", platform: "Medium" }}
          className="flex items-center gap-2 font-primary text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors shrink-0"
        >
          View all posts
          <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </TrackedLink>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.title} {...post} />
        ))}
      </div>
    </section>
  );
}

// Main Page
export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <SiteHeader />
      <main id="main">
        <Hero />
        <Projects />
        <Blog />
      </main>
      <SiteFooter location="footer" />
    </div>
  );
}
