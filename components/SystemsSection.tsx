"use client";

import {
  Bot,
  Database,
  FileSearch,
  MessageSquare,
  Wrench,
} from "lucide-react";
import { CircuitBoard } from "@/components/ui/circuit-board";

const agentNodes = [
  {
    id: "user",
    x: 60,
    y: 200,
    label: "User",
    icon: <MessageSquare className="h-4 w-4" />,
  },
  {
    id: "discord",
    x: 210,
    y: 200,
    label: "Discord",
    icon: <MessageSquare className="h-4 w-4" />,
  },
  {
    id: "agent",
    x: 360,
    y: 120,
    label: "AI Agent",
    icon: <Bot className="h-4 w-4" />,
  },
  {
    id: "knowledge",
    x: 360,
    y: 280,
    label: "Knowledge",
    icon: <FileSearch className="h-4 w-4" />,
  },
  {
    id: "tools",
    x: 510,
    y: 120,
    label: "Tools",
    icon: <Wrench className="h-4 w-4" />,
  },
  {
    id: "data",
    x: 510,
    y: 280,
    label: "Storage",
    icon: <Database className="h-4 w-4" />,
  },
  {
    id: "result",
    x: 660,
    y: 200,
    label: "Result",
    icon: <Bot className="h-4 w-4" />,
  },
];

const agentConnections = [
  { from: "user", to: "discord", animated: true },
  { from: "discord", to: "agent", animated: true },
  { from: "agent", to: "knowledge", animated: true, bidirectional: true },
  { from: "agent", to: "tools", animated: true, bidirectional: true },
  { from: "tools", to: "data", animated: true, bidirectional: true },
  { from: "agent", to: "result", animated: true },
  { from: "knowledge", to: "result", animated: true },
  { from: "result", to: "discord", animated: true },
];

export function SystemsSection() {
  return (
    <section id="systems" className="scroll-mt-24 py-20">
      <div className="container-shell">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-electric">
          Architecture
        </p>
        <h2 className="headline mt-2 max-w-3xl text-4xl leading-tight text-ink sm:text-5xl">
          Every agent shares the same proven structure.
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          Chat interface, intelligent routing, knowledge index, tool connections, and 
          measurable output back to the user — connected in a loop that operators can see and trust.
        </p>
      </div>
      <div className="container-shell mt-10">
        <div className="tactile overflow-hidden rounded-xl p-4 sm:p-8">
          <CircuitBoard
            nodes={agentNodes}
            connections={agentConnections}
            width={720}
            height={340}
            showGrid={true}
            pulseSpeed={2.5}
            traceWidth={2.5}
          />
        </div>
      </div>
    </section>
  );
}