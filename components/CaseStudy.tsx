"use client";

import { motion } from "framer-motion";
import {
  Bot,
  FileSearch,
  ListChecks,
  MessageSquare,
  Wrench,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionBadge } from "@/components/SectionBadge";
import { cardHover, revealVariants, staggerContainer } from "@/lib/animations";

const stack = [
  {
    label: "Agent Platform",
    value: "OpenClaw",
    icon: Bot,
  },
  {
    label: "Knowledge Index",
    value: "Onyx",
    icon: FileSearch,
  },
  {
    label: "Task System",
    value: "ClickUp MCP",
    icon: ListChecks,
  },
  {
    label: "Interface",
    value: "Discord",
    icon: MessageSquare,
  },
  {
    label: "File Storage",
    value: "Google Drive",
    icon: FileSearch,
  },
];

export function CaseStudy() {
  return (
    <section className="container-shell scroll-mt-24 py-20" id="work">
      <Reveal>
        <SectionBadge>Case Study</SectionBadge>
        <h2 className="headline max-w-3xl text-4xl leading-tight text-ink sm:text-5xl">
          Manufacturing maintenance, automated.
        </h2>
        <p className="mt-2 text-sm font-medium text-blue-electric">
          Large custom wood flooring manufacturer — Southern California
        </p>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
          Built an AI agent for a manufacturing facility that gives maintenance
          technicians instant access to machine manuals, task tracking, and
          operational context — all through a Discord chat.
        </p>
      </Reveal>

      <motion.div
        className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.article
          className="tactile rounded-[1.5rem] p-6 sm:p-8"
          variants={revealVariants}
        >
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-electric shadow-inset">
            <Wrench className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-semibold text-ink">The Problem</h3>
          <p className="mt-3 leading-7 text-muted">
            Maintenance technicians were digging through paper manuals and
            spreadsheets to log machine statuses and track preventive maintenance
            tasks. Critical context lived in different places, and routine work
            depended on whoever remembered what.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-ink">The Solution</h3>
          <p className="mt-3 leading-7 text-muted">
            A Discord-based AI agent that indexes every machine manual via Onyx,
            connects to ClickUp for task management, and lets technicians ask
            questions, log statuses, and manage preventive maintenance — all in
            one conversation.
          </p>

          <h3 className="mt-8 text-xl font-semibold text-ink">The Result</h3>
          <p className="mt-3 leading-7 text-muted">
            Technicians get sourced answers in seconds instead of digging through
            paper binders across a floor of heavy machinery. Preventive maintenance
            tasks get logged, tracked, and surfaced automatically — no more chasing
            down clipboards or relying on whoever happens to remember the last
            service date. Maintenance runs on a system, not memory.
          </p>
        </motion.article>

        <motion.div
          className="grid gap-3 content-start"
          variants={staggerContainer}
        >
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-electric">
            Stack
          </p>
          {stack.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.label}
                className="tactile flex items-center gap-4 rounded-[1.35rem] p-4"
                variants={revealVariants}
                whileHover={cardHover}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-electric shadow-inset">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-base font-semibold text-ink">
                    {item.value}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
