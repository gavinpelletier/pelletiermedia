"use client";

import { useState } from "react";
import { Bot, FileSearch, ListChecks, MessageSquare } from "lucide-react";
import {
  OrbitCardStack,
  type OrbitStackItem,
} from "@/components/ui/orbit-card-stack";

const projects: OrbitStackItem[] = [
  {
    name: "OpenClaw",
    role: "Agent Platform",
    description: "AI agent orchestration, task delegation, retries, and workflow control.",
    initials: "OC",
    stat: "Active",
    accent: "#2563eb",
  },
  {
    name: "Onyx",
    role: "Knowledge Index",
    description: "Semantic search across machine manuals, PDFs, and internal docs.",
    initials: "ON",
    stat: "Indexed",
    accent: "#5aa7ff",
  },
  {
    name: "ClickUp MCP",
    role: "Task System",
    description: "Bidirectional task management — create, update, and query tasks from chat.",
    initials: "CU",
    stat: "Connected",
    accent: "#8b5cf6",
  },
  {
    name: "Discord",
    role: "Interface",
    description: "Where the team already works. Agents live in channels, not separate apps.",
    initials: "DC",
    stat: "Live",
    accent: "#5865f2",
  },
  {
    name: "Google Drive",
    role: "File Storage",
    description: "Documents, spreadsheets, and assets indexed and searchable by the agent.",
    initials: "GD",
    stat: "Synced",
    accent: "#34a853",
  },
];

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(projects[0]!);

  return (
    <section id="projects" className="scroll-mt-24 py-20">
      <div className="container-shell">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-electric">
          Stack
        </p>
        <h2 className="headline mt-2 max-w-3xl text-4xl leading-tight text-ink sm:text-5xl">
          The tools I connect.
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          Every agent I build stitches together the tools your team already uses.
          Hover through the stack to explore each piece.
        </p>
        <div className="mt-2 flex items-center gap-2 text-sm text-muted">
          <span>Currently viewing:</span>
          <span className="font-semibold text-ink">{activeProject.name}</span>
          <span className="text-xs text-blue-electric">— {activeProject.role}</span>
        </div>
      </div>
      <div className="container-shell mt-6 h-[540px]">
        <OrbitCardStack
          items={projects}
          defaultActiveIndex={0}
          spread={160}
          lift={36}
          onActiveChange={(item) => setActiveProject(item)}
        />
      </div>
    </section>
  );
}
