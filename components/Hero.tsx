"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot } from "lucide-react";
import { HeroNodeGraph } from "@/components/HeroNodeGraph";
import { Reveal } from "@/components/Reveal";
import { buttonPress } from "@/lib/animations";

export function Hero() {
  return (
    <section id="top" className="container-shell scroll-mt-24 grid gap-10 pb-20 pt-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:pb-28 lg:pt-20">
      <div>
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-xl border border-white/75 bg-white/50 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-electric shadow-inset">
            <Bot className="h-3.5 w-3.5" aria-hidden="true" />
            AI Engineer &amp; Co-founder, Kolix AI
          </p>
        </Reveal>
        <Reveal as="h1" className="headline max-w-4xl text-5xl leading-[0.98] text-ink sm:text-6xl lg:text-7xl">
          AI agents inside the tools your team already uses.
        </Reveal>
        <Reveal className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          Custom AI solutions that plug into your existing tools — Discord, ClickUp, Google Drive, ERPs — and handle the repetitive work your team shouldn&apos;t be doing.
        </Reveal>
        <Reveal className="mt-8 flex flex-wrap gap-3">
          <motion.a
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-blue-electric px-5 py-3 text-sm font-semibold text-white shadow-blue transition-colors hover:bg-ink"
            href="#work"
            whileTap={buttonPress}
          >
            See the proof
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </motion.a>
          <motion.a
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/64 px-5 py-3 text-sm font-semibold text-ink shadow-tactile transition-colors hover:text-blue-electric"
            href="#contact"
            whileTap={buttonPress}
          >
            Send a workflow
          </motion.a>
        </Reveal>
      </div>
      <HeroNodeGraph />
    </section>
  );
}
