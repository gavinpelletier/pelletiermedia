"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Rocket } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionBadge } from "@/components/SectionBadge";
import { revealVariants, staggerContainer } from "@/lib/animations";

const highlights = [
  {
    icon: Code2,
    label: "Builder",
    detail: "Production software, from prototype through deployment and maintenance.",
  },
  {
    icon: Cpu,
    label: "Integrator",
    detail: "Agents connected to real documents, data, and the business systems your team already runs on.",
  },
  {
    icon: Rocket,
    label: "Operator-minded",
    detail: "Designed around adoption, reliability, and clear human control — not AI hype.",
  },
];

export function About() {
  return (
    <section className="container-shell scroll-mt-24 py-20" id="about">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <Reveal>
          <SectionBadge>About</SectionBadge>
          <h2 className="headline max-w-3xl text-4xl leading-tight text-ink sm:text-5xl">
            I build the whole operational system.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-8 text-muted">
            <p>
              I'm Gavin Pelletier, an AI engineer and co-founder of{" "}
              <span className="font-semibold text-ink">Kolix AI</span>. I design,
              build, deploy, and maintain custom software for teams doing real
              operational work.
            </p>
            <p>
              That means combining AI with document retrieval, system
              integrations, purpose-built tools, and a simple interface the team
              can adopt without changing how the business runs.
            </p>
            <p>
              The standard isn't whether it works in a demo. It's whether
              operators trust it, maintain it, and use it during a normal workday.
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
                className="tactile flex items-start gap-4 rounded-xl p-5"
                variants={revealVariants}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-electric shadow-inset">
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