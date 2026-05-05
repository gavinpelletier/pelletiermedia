"use client";

import { motion } from "framer-motion";
import {
  BellRing,
  BrainCircuit,
  CheckCircle2,
  Database,
  FileInput,
  GitBranch,
  Inbox,
  Route,
  Workflow,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { revealVariants, staggerContainer } from "@/lib/animations";

const inputs = ["Ideas", "Tasks", "Leads", "Vendors", "Margins", "Reports"];
const controls = ["Agents", "Memory", "Rules", "Workflows"];
const outputs = ["Follow-ups", "Decisions", "SOPs", "Dashboards"];

export function HeroNodeGraph() {
  return (
    <Reveal className="relative overflow-hidden rounded-[2rem] p-5 tactile">
      <div className="absolute inset-5 rounded-[1.5rem] inset-panel" />
      <div className="relative z-10 min-h-[520px] rounded-[1.35rem] border border-white/70 bg-white/35 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:p-5">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-electric">
              OpenClaw operating surface
            </p>
            <p className="mt-1 text-sm text-muted">Messy inputs routed into clean execution.</p>
          </div>
          <div className="flex items-center gap-2 rounded-xl border border-white/75 bg-white/58 px-3 py-2 text-xs font-semibold text-muted shadow-inset">
            <span className="h-2 w-2 rounded-full bg-blue-electric shadow-[0_0_14px_rgba(37,99,235,0.75)]" />
            live workflow
          </div>
        </div>

        <motion.div
          className="grid gap-4 lg:grid-cols-[1fr_1.06fr_1fr]"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.section className="rounded-[1.2rem] p-4 inset-panel" variants={revealVariants}>
            <div className="mb-4 flex items-center gap-2">
              <Inbox className="h-4 w-4 text-blue-electric" aria-hidden="true" />
              <h3 className="text-sm font-semibold text-ink">Inputs</h3>
            </div>
            <div className="grid gap-2">
              {inputs.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl border border-white/70 bg-white/54 px-3 py-2 text-sm font-semibold text-ink shadow-sm"
                >
                  {item}
                  <FileInput className="h-3.5 w-3.5 text-muted" aria-hidden="true" />
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="relative overflow-hidden rounded-[1.35rem] border border-blue-electric/20 bg-[linear-gradient(145deg,#ffffff,#e8f1ff)] p-4 shadow-blue"
            variants={revealVariants}
          >
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-glow/20 blur-3xl" />
            <div className="relative">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-blue-electric shadow-inset">
                    <GitBranch className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="headline text-3xl leading-none text-ink">OpenClaw</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-electric">
                      routing core
                    </p>
                  </div>
                </div>
                <BrainCircuit className="h-5 w-5 text-blue-electric" aria-hidden="true" />
              </div>

              <div className="grid grid-cols-2 gap-2">
                {controls.map((item) => (
                  <div key={item} className="rounded-xl border border-white/75 bg-white/58 px-3 py-3 shadow-inset">
                    <p className="text-sm font-semibold text-ink">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-white/75 bg-white/60 p-3 shadow-inset">
                <div className="mb-2 flex items-center gap-2">
                  <Route className="h-4 w-4 text-blue-electric" aria-hidden="true" />
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">decision path</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs font-semibold text-ink">
                  <span className="rounded-lg bg-white px-2 py-2 shadow-sm">capture</span>
                  <span className="rounded-lg bg-white px-2 py-2 shadow-sm">route</span>
                  <span className="rounded-lg bg-white px-2 py-2 shadow-sm">execute</span>
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section className="rounded-[1.2rem] p-4 inset-panel" variants={revealVariants}>
            <div className="mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-electric" aria-hidden="true" />
              <h3 className="text-sm font-semibold text-ink">Outputs</h3>
            </div>
            <div className="grid gap-2">
              {outputs.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl border border-white/70 bg-white/54 px-3 py-2 text-sm font-semibold text-ink shadow-sm"
                >
                  {item}
                  <BellRing className="h-3.5 w-3.5 text-muted" aria-hidden="true" />
                </div>
              ))}
            </div>
          </motion.section>
        </motion.div>

        <motion.div
          className="mt-4 grid gap-3 rounded-[1.2rem] border border-white/70 bg-white/42 p-3 shadow-inset sm:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            ["Lead intake", "source, urgency, next action"],
            ["Order review", "cost, fee, margin study"],
            ["Daily pulse", "stuck work and decisions"],
          ].map(([title, copy]) => (
            <motion.div key={title} variants={revealVariants} className="rounded-xl bg-white/62 p-3 shadow-sm">
              <div className="mb-2 flex items-center gap-2">
                <Workflow className="h-3.5 w-3.5 text-blue-electric" aria-hidden="true" />
                <p className="text-sm font-semibold text-ink">{title}</p>
              </div>
              <p className="text-xs leading-5 text-muted">{copy}</p>
            </motion.div>
          ))}
        </motion.div>

        <Database className="absolute bottom-6 right-6 h-5 w-5 text-blue-electric/40" aria-hidden="true" />
      </div>
    </Reveal>
  );
}
