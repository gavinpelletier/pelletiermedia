"use client";

import { motion } from "framer-motion";
import { Bot, Cable, FileCog, LayoutDashboard } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionBadge } from "@/components/SectionBadge";
import { SpotlightCard, SpotlightCardContent } from "@/components/ui/spotlight-card";
import { cardHover, revealVariants, staggerContainer } from "@/lib/animations";

const capabilities = [
  {
    title: "Operational AI Agents",
    copy: "Agents that answer with sources, work within guardrails, and carry the next action into ClickUp, Discord, Drive, and your existing stack — not a separate dashboard.",
    icon: Bot,
  },
  {
    title: "Technical & Circuitry Tools",
    copy: "Custom interpreters for manuals, schematics, and specialized documentation. When ordinary search is not enough, I build the tool that is.",
    icon: FileCog,
  },
  {
    title: "System Integrations",
    copy: "Reliable connections across project management, storage, ERPs, email, CRMs, and internal APIs. Your tools talk to each other without fragile middleware.",
    icon: Cable,
  },
  {
    title: "Operator Interfaces",
    copy: "Interfaces built around the decisions operators need to make — not every field in the database. Chat, dashboard, or both — designed for adoption, not demos.",
    icon: LayoutDashboard,
  },
];

export function Capabilities() {
  return (
    <section className="container-shell scroll-mt-24 py-20" id="capabilities">
      <Reveal>
        <SectionBadge>What I Build</SectionBadge>
        <h2 className="headline max-w-3xl text-4xl leading-tight text-ink sm:text-5xl">
          Intelligence, connections, and interface — delivered as one system.
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">
          Every project ships as a complete operational whole: the agent logic, the tool integrations, 
          and the interface your team will actually keep open.
        </p>
      </Reveal>
      <motion.div
        className="mt-10 grid gap-5 md:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {capabilities.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div key={item.title} variants={revealVariants} whileHover={cardHover}>
              <SpotlightCard
                borderColor="linear-gradient(135deg, rgba(255,255,255,0.9), rgba(37,99,235,0.24), rgba(255,255,255,0.55))"
                borderRadius={16}
                className="h-full border border-white/70 bg-[linear-gradient(145deg,rgba(255,255,255,0.76),rgba(236,232,224,0.9))] shadow-tactile"
                glowIntensity={0.22}
                spotlightColor="rgba(37,99,235,0.18)"
              >
                <SpotlightCardContent className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-electric shadow-inset">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{item.copy}</p>
                </SpotlightCardContent>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}