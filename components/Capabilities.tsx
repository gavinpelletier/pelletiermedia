"use client";

import { motion } from "framer-motion";
import { Bot, LayoutDashboard, Plug } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionBadge } from "@/components/SectionBadge";
import { cardHover, revealVariants, staggerContainer } from "@/lib/animations";

const capabilities = [
  {
    title: "Discord AI Agents",
    copy: "Custom AI agents that live where your team already works. They handle questions, route tasks, and pull context from your existing tools — so your team gets answers without switching apps.",
    icon: Bot,
  },
  {
    title: "System Integrations",
    copy: "Connect your AI agent to anything — project management, file storage, ERPs, email, CRMs. The agent becomes the interface between your team and your tools.",
    icon: Plug,
  },
  {
    title: "Dashboards & UI",
    copy: "When a chat interface isn't enough, I build custom dashboards and frontends for ERP systems, reporting, and operational visibility.",
    icon: LayoutDashboard,
  },
];

export function Capabilities() {
  return (
    <section className="container-shell scroll-mt-24 py-20" id="capabilities">
      <Reveal>
        <SectionBadge>Capabilities</SectionBadge>
        <h2 className="headline max-w-3xl text-4xl leading-tight text-ink sm:text-5xl">
          What I build.
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
          AI solutions that slot into how your team already operates — not another tool they have to learn.
        </p>
      </Reveal>
      <motion.div
        className="mt-10 grid gap-5 md:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {capabilities.map((item) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              className="tactile rounded-[1.5rem] p-6"
              variants={revealVariants}
              whileHover={cardHover}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-electric shadow-inset">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 leading-7 text-muted">{item.copy}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
