"use client";

import { useRef } from "react";
import { ScrollSplitCard } from "@/components/ui/scroll-split-card";

export function CaseStudySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="work" className="scroll-mt-24 py-20">
      <div className="container-shell mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-electric">
          Case Study
        </p>
        <h2 className="headline mt-2 max-w-3xl text-4xl leading-tight text-ink sm:text-5xl">
          Manufacturing maintenance, automated.
        </h2>
        <p className="mt-3 text-sm font-medium text-blue-electric">
          Large custom wood flooring manufacturer — Southern California
        </p>
      </div>

      <div
        ref={containerRef}
        className="h-[700px] w-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <ScrollSplitCard
          containerRef={containerRef}
          imageSrc="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
          cards={[
            {
              title: "The Problem",
              description:
                "Maintenance technicians were digging through paper manuals and spreadsheets to log machine statuses. Critical context lived in different places, and routine work depended on whoever remembered what.",
              bgColor: "#f4f1eb",
              textColor: "#17181d",
            },
            {
              title: "The Solution",
              description:
                "A Discord-based AI agent that indexes every machine manual via Onyx, connects to ClickUp for task management, and lets technicians ask questions, log statuses, and manage preventive maintenance — all in one conversation.",
              bgColor: "#2563eb",
              textColor: "#ffffff",
            },
            {
              title: "The Result",
              description:
                "Technicians get sourced answers in seconds instead of digging through paper binders. Preventive maintenance tasks get logged, tracked, and surfaced automatically — no more chasing down clipboards. Maintenance runs on a system, not memory.",
              bgColor: "#17181d",
              textColor: "#ffffff",
            },
          ]}
        />
      </div>
    </section>
  );
}
