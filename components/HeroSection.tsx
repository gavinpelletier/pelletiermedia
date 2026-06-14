"use client";

import HeroGeometric from "@/components/ui/hero-geometric";
import { TextAnimate } from "@/components/ui/text-animate";

export function HeroSection() {
  return (
    <section id="top" className="scroll-mt-24">
      <HeroGeometric
        title1="I build AI systems"
        title2="for the work between your tools."
        description="Custom agents, integrations, and interfaces that turn scattered documents, tasks, and tools into one operational system — without changing how your team works."
        color1="#2563eb"
        color2="#f4f1eb"
        speed={0.8}
      />
    </section>
  );
}