"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Rocket } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionBadge } from "@/components/SectionBadge";
import { revealVariants, staggerContainer } from "@/lib/animations";

const highlights = [
  {
    icon: Code2,
    label: "Developer",
    detail: "I build and ship production AI systems, not slide decks.",
  },
  {
    icon: Cpu,
    label: "Co-founder",
    detail: "Co-owner of Kolix AI, where we deploy custom AI into real businesses.",
  },
  {
    icon: Rocket,
    label: "Operator",
    detail: "I care about whether the thing actually gets used, not just whether it works.",
  },
];

export function About() {
  return (
    <section className="container-shell py-20" id="about">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <SectionBadge>About</SectionBadge>
          <h2 className="headline max-w-3xl text-4xl leading-tight text-ink sm:text-5xl">
            I build AI that people actually use.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-8 text-muted">
            <p>
              I&apos;m Gavin Pelletier — a developer and co-owner of{" "}
              <span className="font-semibold text-ink">Kolix AI</span>. We
              develop, deploy, and maintain custom AI applications inside the
              businesses we work with.
            </p>
            <p>
              Most of what I build are AI agents that live inside the tools a
              team already uses — Discord, ClickUp, Google Drive, ERPs — and
              remove the repetitive work that slows operations down.
            </p>
            <p>
              I&apos;m not interested in building things that look good in a
              demo. I build systems that maintenance techs, operators, and
              managers actually rely on every day.
            </p>
          </div>
        </Reveal>

        <motion.div
          className="grid gap-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.label}
                className="tactile flex items-start gap-4 rounded-[1.35rem] p-5"
                variants={revealVariants}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-electric shadow-inset">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-base font-semibold text-ink">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    {item.detail}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
