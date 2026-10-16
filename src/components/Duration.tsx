"use client";

import { useSyncExternalStore } from "react";
import { formatDuration } from "@/lib/dates";

const noopSubscribe = () => () => {};
// Snapshot is a string so it stays referentially stable between renders.
const getCurrentMonth = () => {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}`;
};
const getServerCurrentMonth = () => null;

// Shows how long a role lasted. Finished roles render the same everywhere.
// For an ongoing role ("Present") the value depends on today's date, so it is
// only rendered in the browser; otherwise the static page would keep showing
// the duration from the day it was last deployed.
export function Duration({
  start,
  end,
  className,
}: {
  start: string;
  end: string | null;
  className?: string;
}) {
  const currentMonth = useSyncExternalStore(noopSubscribe, getCurrentMonth, getServerCurrentMonth);

  if (end === null && currentMonth === null) return null;

  const [year, month] = (currentMonth ?? "").split("-").map(Number);
  const now = currentMonth ? new Date(year, month - 1, 1) : undefined;
  return <span className={className}>{formatDuration(start, end, now)}</span>;
}
