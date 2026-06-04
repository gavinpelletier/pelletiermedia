"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { buttonPress } from "@/lib/animations";

export function CTASection() {
  return (
    <section className="container-shell py-20" id="contact">
      <Reveal className="overflow-hidden rounded-[2rem] bg-ink p-8 text-white shadow-[0_30px_80px_rgba(23,24,29,0.28)] sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-glow">
              Get In Touch
            </p>
            <h2 className="headline max-w-3xl text-4xl leading-tight sm:text-6xl">
              Have a workflow that needs fixing?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              Tell me about the repetitive work eating your team&apos;s time. I&apos;ll tell you if AI can solve it.
            </p>
          </div>
          <motion.a
            className="focus-ring inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-blue-glow"
            href="mailto:gavin@kolix.ai"
            whileTap={buttonPress}
          >
            Email Gavin
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </motion.a>
        </div>
      </Reveal>
    </section>
  );
}
