"use client";

import { CheckCircle2, ClipboardCheck, FileSearch, MessageSquare } from "lucide-react";

const proofRows = [
  {
    label: "Interface",
    value: "Discord",
    detail: "Technicians ask questions and log machine status in the channel they already use.",
    icon: MessageSquare,
  },
  {
    label: "Knowledge",
    value: "Onyx",
    detail: "Machine manuals, PDFs, and internal docs are indexed for sourced answers.",
    icon: FileSearch,
  },
  {
    label: "Action layer",
    value: "ClickUp MCP",
    detail: "Preventive maintenance tasks can be created, updated, and checked from chat.",
    icon: ClipboardCheck,
  },
];

export function CaseStudySection() {
  return (
    <section id="work" className="scroll-mt-24 py-20">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-electric">
              Case Study
            </p>
            <h2 className="headline mt-2 max-w-3xl text-4xl leading-tight text-ink sm:text-5xl">
              Manufacturing maintenance, automated.
            </h2>
            <p className="mt-3 text-sm font-semibold text-blue-electric">
              Large custom wood flooring manufacturer - Southern California
            </p>
            <p className="mt-5 text-lg leading-8 text-muted">
              The goal was not a new app. It was a durable agent that could answer maintenance questions with sources, update the operating system of record, and stay where technicians already work.
            </p>
          </div>

          <div className="space-y-5">
            <article className="tactile rounded-[1.5rem] p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Before
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-ink">
                Context lived in binders, spreadsheets, and memory.
              </h3>
              <p className="mt-3 leading-7 text-muted">
                Maintenance technicians were digging through paper manuals and scattered spreadsheets to log machine statuses. Routine work depended on whoever remembered the latest process.
              </p>
            </article>

            <article className="overflow-hidden rounded-[1.5rem] border border-blue-electric/20 bg-ink text-white shadow-[0_26px_70px_rgba(15,23,42,0.22)]">
              <div className="grid gap-0 md:grid-cols-[0.92fr_1.08fr]">
                <div className="p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-glow">
                    Agent transcript
                  </p>
                  <div className="mt-5 space-y-3 text-sm leading-6">
                    <div className="rounded-2xl bg-white/10 p-4">
                      &ldquo;What does line 3 mean when the sander reports E-17?&rdquo;
                    </div>
                    <div className="rounded-2xl border border-white/12 bg-white p-4 text-ink">
                      <p className="font-semibold">Answer with source</p>
                      <p className="mt-1 text-muted">
                        E-17 indicates belt tracking drift. Check sensor alignment before restart. Source: Sander Manual, section 4.2.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-blue-glow/30 bg-blue-glow/12 p-4">
                      ClickUp task prepared: inspect belt sensor on Line 3.
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 text-ink sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-electric">
                    What changed
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">
                    Sourced answers and task updates in one conversation.
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {proofRows.map((item) => {
                      const Icon = item.icon;
                      return (
                        <li key={item.value} className="flex gap-3">
                          <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-electric/10 text-blue-electric">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <span>
                            <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-muted">{item.label}</span>
                            <span className="block font-semibold text-ink">{item.value}</span>
                            <span className="mt-1 block text-sm leading-6 text-muted">{item.detail}</span>
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </article>

            <article className="tactile rounded-[1.5rem] p-6 sm:p-7">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-electric" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    Result
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-ink">
                    Maintenance runs on a system, not memory.
                  </h3>
                  <p className="mt-3 leading-7 text-muted">
                    Technicians can get sourced answers without hunting through binders, and preventive maintenance work can move into ClickUp without leaving the conversation.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
