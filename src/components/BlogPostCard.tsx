import { TrackedLink } from "@/components/TrackedLink";
import type { BlogPost } from "@/content/blog";

export function BlogPostCard({ date, title, excerpt, tags, url }: BlogPost) {
  return (
    <TrackedLink
      href={url}
      eventName="Blog Post Clicked"
      eventProperties={{ title, url, tags }}
      className="flex-1 flex flex-col gap-4 p-6 rounded-[20px] bg-[var(--background)] border border-[var(--border)] hover:shadow-lg hover:border-[var(--accent)] transition-all duration-200"
    >
      <span className="font-primary text-[13px] font-medium text-[var(--text-muted)]">{date}</span>
      <h3 className="font-serif text-xl text-[var(--text-primary)] leading-[1.3]">{title}</h3>
      <p className="font-primary text-[15px] text-[var(--text-body)] leading-[1.5]">{excerpt}</p>
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
    </TrackedLink>
  );
}
