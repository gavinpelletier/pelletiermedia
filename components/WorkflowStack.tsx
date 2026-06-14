"use client";

import { Reveal } from "@/components/Reveal";
import { SectionBadge } from "@/components/SectionBadge";
import { Skiper16 } from "@/components/ui/skiper-ui/skiper16";

const cards = [
  {
    title: "Document intake",
    src: "/workflow-cards/manual-search.svg",
    eyebrow: "01",
    detail: "Manuals, SOPs, and PDFs become traceable source material.",
  },
  {
    title: "Interpreter layer",
    src: "/workflow-cards/circuitry-interpreter.svg",
    eyebrow: "02",
    detail: "Specialized tools handle schematics and machine-specific context.",
  },
  {
    title: "Action routing",
    src: "/workflow-cards/action-routing.svg",
    eyebrow: "03",
    detail: "Answers turn into tasks, status logs, and routed alerts.",
  },
  {
    title: "Operator interface",
    src: "/workflow-cards/operator-interface.svg",
    eyebrow: "04",
    detail: "Teams work from the chat or dashboard they can actually adopt.",
  },
];

export function WorkflowStack() {
  return (
    <section className="container-shell scroll-mt-24 py-20" id="workflow">
      <Reveal>
        <SectionBadge>Workflow Stack</SectionBadge>
        <h2 className="headline max-w-3xl text-4xl leading-tight text-ink sm:text-5xl">
          The system is more than a chatbot.
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
          A useful agent needs source material, custom interpretation, reliable
          actions, and an interface operators will actually keep open.
        </p>
      </Reveal>
      <div className="mt-8 overflow-hidden rounded-xl border border-white/70 bg-white/30 shadow-inset">
        <Skiper16 cards={cards} />
      </div>
    </section>
  );
}
