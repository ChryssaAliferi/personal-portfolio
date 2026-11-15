import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TrackedLink } from "@/components/TrackedLink";
import { blogPosts, postSource, postYear, type BlogPost } from "@/content/blog";

const description =
  "Everything Chryssa Aliferi has written: RudderStack product launches, mobile SDKs, integrations, and Android architecture.";

export const metadata: Metadata = {
  title: "Writing",
  description,
  alternates: { canonical: "/writing" },
  // openGraph replaces the layout's object rather than merging, so repeat the shared fields.
  openGraph: {
    type: "website",
    url: "/writing",
    siteName: "Chryssa Aliferi",
    title: "Writing | Chryssa Aliferi",
    description,
    locale: "en_US",
  },
};

// Posts grouped by year, newest year first (blogPosts is already newest first).
function groupByYear(posts: BlogPost[]) {
  const groups = new Map<string, BlogPost[]>();
  for (const post of posts) {
    const year = postYear(post.date);
    groups.set(year, [...(groups.get(year) ?? []), post]);
  }
  return [...groups.entries()];
}

function PostRow({ date, title, excerpt, tags, url }: BlogPost) {
  return (
    <li>
      <TrackedLink
        href={url}
        eventName="Blog Post Clicked"
        eventProperties={{ title, url, tags, location: "writing" }}
        className="group flex flex-col gap-2 py-6 border-b border-[var(--border)]"
      >
        <span className="font-primary text-[13px] font-medium text-[var(--text-muted)]">
          {date.slice(0, -6)} · {postSource(url)}
        </span>
        <h3 className="font-serif text-xl text-[var(--text-primary)] leading-[1.3] group-hover:text-[var(--accent-strong)] transition-colors">
          {title}
        </h3>
        <p className="font-primary text-[15px] text-[var(--text-body)] leading-[1.5]">{excerpt}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg bg-[var(--surface-tint)] font-primary text-xs text-[var(--text-secondary)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </TrackedLink>
    </li>
  );
}

export default function WritingPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <SiteHeader />
      <main id="main" className="px-5 md:px-20 py-10 md:py-16">
        <div className="flex flex-col items-center gap-3 md:gap-4 mb-10 md:mb-16 text-center">
          <span className="font-primary text-xs font-semibold text-[var(--accent-strong)] tracking-[2px]">
            WRITING
          </span>
          <h1 className="font-serif text-[28px] md:text-[40px] lg:text-[48px] text-[var(--text-primary)] tracking-[-0.5px] md:tracking-[-1px] leading-[1.2] md:leading-[1.1]">
            Everything I&apos;ve written, in one place.
          </h1>
          <p className="font-primary text-base md:text-lg text-[var(--text-body)] leading-[1.6] max-w-[700px] mt-1 md:mt-2">
            Product launches from the RudderStack blog and older engineering posts on Medium.
          </p>
        </div>
        <div className="max-w-[800px] mx-auto flex flex-col gap-10 md:gap-14">
          {groupByYear(blogPosts).map(([year, posts]) => (
            <section key={year} aria-labelledby={`year-${year}`} className="flex flex-col">
              <h2 id={`year-${year}`} className="font-serif text-2xl md:text-3xl text-[var(--text-primary)]">
                {year}
              </h2>
              <ul>
                {posts.map((post) => (
                  <PostRow key={post.url} {...post} />
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter location="footer" />
    </div>
  );
}
