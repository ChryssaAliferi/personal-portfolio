import { Duration } from "@/components/Duration";
import type { Experience } from "@/content/experience";
import { formatPeriod } from "@/lib/dates";

export function ExperienceCard({
  company,
  role,
  type,
  location,
  start,
  end,
  description,
  current,
}: Experience) {
  return (
    <div className="relative flex gap-4 md:gap-8 pb-10 md:pb-12 last:pb-0">
      {/* Timeline dot */}
      <div aria-hidden="true" className={`relative z-10 w-3 md:w-4 h-3 md:h-4 rounded-full mt-2 md:mt-1.5 flex-shrink-0 ${
        current
          ? "bg-[var(--accent)] ring-4 ring-[var(--accent-tint)]"
          : "bg-[var(--border)] border-2 border-[var(--surface-tint)]"
      }`} />

      {/* Content */}
      <div className="flex-1 flex flex-col gap-2 md:gap-3">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <h3 className="font-serif text-lg md:text-xl text-[var(--text-primary)]">{role}</h3>
              {current && (
                <span className="px-2 md:px-2.5 py-0.5 md:py-1 rounded-full bg-[var(--accent-tint)] font-primary text-[10px] md:text-xs font-medium text-[var(--accent-strong)]">
                  Current
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-1.5 md:gap-2">
              <span className="font-primary text-sm md:text-base font-medium text-[var(--text-secondary)]">
                {company}
              </span>
              <span aria-hidden="true" className="text-[var(--text-muted)]">·</span>
              <span className="font-primary text-xs md:text-sm text-[var(--text-muted)]">{type}</span>
            </div>
          </div>
          <div className="flex flex-col md:items-end gap-0.5 md:gap-1 mt-1 md:mt-0">
            <span className="font-primary text-xs md:text-sm text-[var(--text-secondary)]">{formatPeriod(start, end)}</span>
            <div className="flex items-center gap-1.5 md:gap-2">
              <Duration
                start={start}
                end={end}
                className="font-primary text-xs md:text-sm text-[var(--text-muted)]"
              />
              <span aria-hidden="true" className="text-[var(--text-muted)]">·</span>
              <span className="font-primary text-xs md:text-sm text-[var(--text-muted)]">{location}</span>
            </div>
          </div>
        </div>
        <ul className="flex flex-col gap-1.5 md:gap-2 mt-1 md:mt-2">
          {description.map((item, index) => (
            <li key={index} className="flex gap-2 md:gap-3">
              <span aria-hidden="true" className="text-[var(--accent-strong)] mt-1 md:mt-1.5">•</span>
              <span className="font-primary text-[13px] md:text-[15px] text-[var(--text-body)] leading-[1.5] md:leading-[1.6]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
