import { TrackedLink } from "@/components/TrackedLink";
import type { Project } from "@/content/projects";

export function ProjectCard({ tag, tagColor, title, description, stars, forks, url }: Project) {
  return (
    <TrackedLink
      href={url}
      eventName="Project Clicked"
      eventProperties={{ project: title, url, tag }}
      className="flex-1 bg-white rounded-[20px] border border-[var(--border)] overflow-hidden hover:shadow-lg hover:border-[var(--accent)] transition-all duration-200"
    >
      <div className="flex flex-col gap-3 p-6 pb-5">
        <div className={`w-fit px-3 py-1.5 rounded-lg text-[12px] font-medium ${tagColor}`}>{tag}</div>
        <h3 className="font-serif text-xl text-[var(--text-primary)]">{title}</h3>
        <p className="font-primary text-sm text-[var(--text-body)] leading-[1.5]">{description}</p>
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
    </TrackedLink>
  );
}
