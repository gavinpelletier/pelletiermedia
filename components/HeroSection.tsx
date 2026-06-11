"use client";

import HeroGeometric from "@/components/ui/hero-geometric";

export function HeroSection() {
  return (
    <section id="top" className="scroll-mt-24">
      <HeroGeometric
        title1="I build AI agents"
        title2="that save companies time"
        description="Custom AI solutions that plug into your existing tools — Discord, ClickUp, Google Drive, ERPs — and handle the repetitive work your team shouldn't be doing."
        color1="#2563eb"
        color2="#f0f6ff"
        speed={0.8}
      />
    </section>
  );
}
