"use client";

import { Reveal } from "@/components/Reveal";
import { SectionBadge } from "@/components/SectionBadge";
import { CircuitryInterpreter } from "@/components/CircuitryInterpreter";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { ArrowRight } from "lucide-react";

const maintenanceMailto = "mailto:gavin@kolix.ai?subject=Custom%20AI%20System%20%2D%20Wood%20Flooring%20Manufacturer";

export function CaseStudySection() {
  return (
    <section id="work" className="scroll-mt-24 py-20">
      <div className="container-shell">
        <Reveal>
          <SectionBadge>Case Study</SectionBadge>
          <h2 className="headline mt-2 max-w-3xl text-4xl leading-tight text-ink sm:text-5xl">
            A maintenance copilot for a custom wood flooring plant.
          </h2>
          <p className="mt-3 text-sm font-medium text-blue-electric">
            Large custom wood flooring manufacturer — Southern California
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
          {/* Before */}
          <Reveal>
            <div className="rounded-xl border border-white/70 bg-white/50 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Before</p>
              <h3 className="mt-2 text-xl font-semibold text-ink">Paper manuals and scattered context</h3>
              <p className="mt-3 leading-7 text-muted">
                Maintenance technicians dug through paper binders and spreadsheets to log machine statuses. 
                Critical context lived in different places, and routine work depended on whoever remembered what.
              </p>
            </div>
          </Reveal>

          {/* What I Built */}
          <Reveal>
            <div className="rounded-xl border border-white/70 bg-white/50 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-electric">What I built</p>
              <h3 className="mt-2 text-xl font-semibold text-ink">An AI-powered maintenance system that works where the team already is</h3>
              <p className="mt-3 leading-7 text-muted">
                A Discord-based AI agent that indexes every machine manual via Onyx, connects to ClickUp for task 
                management, and lets technicians ask questions, log statuses, and manage preventive maintenance — 
                all in one conversation. I also built a custom circuitry interpreter for schematic-heavy 
                documentation where ordinary search falls short.
              </p>
              <ShimmerButton
                className="mt-5 rounded-lg px-5 py-2.5 text-sm font-semibold"
                background="#2563eb"
                shimmerColor="rgba(255,255,255,0.6)"
                borderRadius="8px"
                onClick={() => { window.location.href = maintenanceMailto; }}
              >
                <span className="flex items-center gap-2">
                  Ask about this project <ArrowRight className="h-4 w-4" />
                </span>
              </ShimmerButton>
            </div>
          </Reveal>
        </div>

        {/* After */}
        <Reveal className="mt-6">
          <div className="rounded-xl border border-white/70 bg-ink p-6 text-white shadow-lg sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-glow">After</p>
            <h3 className="mt-2 text-xl font-semibold">Maintenance runs on a system, not memory</h3>
            <p className="mt-3 leading-7 text-white/72">
              Technicians get sourced answers in seconds instead of digging through paper binders. Preventive 
              maintenance tasks get logged, tracked, and surfaced automatically — no more chasing down clipboards. 
              The circuitry interpreter handles machine-specific schematic questions that generic search can't answer.
            </p>
          </div>
        </Reveal>

        {/* Circuitry Interpreter — custom-built tool */}
        <CircuitryInterpreter />
      </div>
    </section>
  );
}