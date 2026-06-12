"use client";

import HeroGeometric from "@/components/ui/hero-geometric";

const proofItems = [
  "Manufacturing maintenance",
  "Discord + Onyx + ClickUp",
  "Sourced answers + task updates",
  "Built and maintained by Kolix AI",
];

export function HeroSection() {
  return (
    <section id="top" className="scroll-mt-24">
      <HeroGeometric
        eyebrow="AI Engineer & Co-founder, Kolix AI"
        title1="AI agents inside the tools"
        title2="your team already uses."
        description="Discord, ClickUp, Google Drive, ERPs, manuals, and task systems - connected into one working operator interface."
        proofItems={proofItems}
        primaryHref="#work"
        primaryLabel="See the maintenance proof"
        secondaryHref="mailto:gavin@kolix.ai"
        secondaryLabel="Send a workflow"
        color1="#2563eb"
        color2="#f8fbff"
        speed={0.55}
      />
    </section>
  );
}
