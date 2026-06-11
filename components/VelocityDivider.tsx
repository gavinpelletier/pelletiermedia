"use client";

import { ScrollBasedVelocity } from "@/components/ui/scroll-based-velocity";

export function VelocityDivider() {
  return (
    <div className="overflow-hidden border-y border-black/5 bg-paper/50 py-8">
      <ScrollBasedVelocity
        text="AI AGENTS · AUTOMATION · SYSTEMS · DISCORD · OPENCLAW · ONYX · CLICKUP · INTEGRATIONS ·"
        default_velocity={3}
        className="font-display text-center text-3xl font-bold tracking-[-0.02em] text-ink/20 md:text-5xl"
      />
    </div>
  );
}
