"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import ReactLenis from "lenis/react";
import React, { useRef } from "react";

export type Skiper16Project = {
  title: string;
  src: string;
  eyebrow?: string;
  detail?: string;
};

const projects: Skiper16Project[] = [
  {
    title: "Document intake",
    src: "/workflow-cards/manual-search.svg",
    eyebrow: "01",
    detail: "Manuals, SOPs, and PDFs become traceable source material.",
  },
  {
    title: "Interpreter layer",
    src: "/workflow-cards/circuitry-interpreter.svg",
    eyebrow: "02",
    detail: "Specialized tools handle schematics and machine-specific context.",
  },
  {
    title: "Action routing",
    src: "/workflow-cards/action-routing.svg",
    eyebrow: "03",
    detail: "Answers turn into tasks, status logs, and routed alerts.",
  },
  {
    title: "Operator interface",
    src: "/workflow-cards/operator-interface.svg",
    eyebrow: "04",
    detail: "Teams work from the chat or dashboard they can actually adopt.",
  },
];

const StickyCard_001 = ({
  i,
  title,
  src,
  eyebrow,
  detail,
  progress,
  range,
  targetScale,
}: Skiper16Project & {
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex items-center justify-center"
    >
      <motion.article
        style={{
          scale,
          top: `calc(-5vh + ${i * 20 + 250}px)`,
        }}
        className="relative -top-1/4 flex h-[320px] w-[min(560px,calc(100vw-32px))] origin-top flex-col overflow-hidden rounded-xl border border-white/70 bg-white shadow-[0_24px_70px_rgba(23,24,29,0.18)]"
      >
        <img src={src} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.86))]" />
        <div className="relative z-10 mt-auto p-6 sm:p-8">
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-electric">
              {eyebrow}
            </p>
          )}
          <h3 className="headline max-w-md text-4xl leading-none text-ink sm:text-5xl">
            {title}
          </h3>
          {detail && (
            <p className="mt-4 max-w-md text-sm leading-6 text-muted sm:text-base sm:leading-7">
              {detail}
            </p>
          )}
        </div>
      </motion.article>
    </div>
  );
};

const Skiper16 = ({
  cards = projects,
  intro = "scroll through the operating system",
}: {
  cards?: Skiper16Project[];
  intro?: string;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <ReactLenis root>
      <main
        ref={container}
        className="relative flex w-full flex-col items-center justify-center pb-[90vh] pt-[34vh]"
      >
        <div className="absolute left-1/2 top-[8%] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center">
          <span className="relative max-w-[18ch] text-xs font-semibold uppercase leading-tight tracking-[0.18em] text-muted after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-blue-electric after:to-transparent after:content-['']">
            {intro}
          </span>
        </div>
        {cards.map((project, i) => {
          const targetScale = Math.max(
            0.58,
            1 - (cards.length - i - 1) * 0.08,
          );
          return (
            <StickyCard_001
              key={`${project.title}-${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * (1 / Math.max(cards.length - 1, 1)), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </ReactLenis>
  );
};

export { Skiper16, StickyCard_001 };

/**
 * Skiper 16 StickyCard_001 — React + Framer Motion
 * Source component installed from Skiper UI and adapted to this portfolio's
 * content, image assets, and warm light visual system.
 */
