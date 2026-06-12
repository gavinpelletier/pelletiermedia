import type { ReactNode } from "react";

export function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 inline-flex items-center rounded-xl border border-slate-900/10 bg-white/70 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-electric shadow-inset">
      {children}
    </p>
  );
}
