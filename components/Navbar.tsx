"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TextRoll } from "@/components/ui/skiper-ui/skiper58";
import { buttonPress } from "@/lib/animations";

const navLinks = [
  { label: "Case Study", href: "#work" },
  { label: "What I Build", href: "#capabilities" },
  { label: "About", href: "#about" },
  { label: "Start a Project", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="container-shell sticky top-3 z-50 pt-3">
      <nav
        aria-label="Main navigation"
        className="glass-panel flex items-center justify-between gap-3 rounded-xl px-4 py-3"
      >
        <a className="focus-ring headline shrink-0 text-2xl leading-none text-ink sm:text-[1.7rem]" href="#top">
          Gavin Pelletier
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              aria-label={link.label}
              className="focus-ring rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-ink"
              href={link.href}
            >
              <TextRoll>{link.label}</TextRoll>
            </a>
          ))}
        </div>
        <motion.a
          className="focus-ring inline-flex shrink-0 items-center gap-2 rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white shadow-blue transition-colors hover:bg-blue-electric"
          href="#contact"
          whileTap={buttonPress}
        >
          Discuss a Workflow
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </motion.a>
      </nav>
    </header>
  );
}