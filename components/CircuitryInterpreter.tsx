"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Cpu, FileText, ListChecks, SearchCheck, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Card } from "@/components/ui/Card";
import { CircuitBoard } from "@/components/ui/circuit-board";

const readoutSteps = [
  {
    label: "Fault note",
    value: "Feed motor trips during startup",
    icon: Zap,
  },
  {
    label: "Matched source",
    value: "Manual section: starter circuit + safety relay",
    icon: FileText,
  },
  {
    label: "Interpreter pass",
    value: "Trace relay path, terminal block, overload reset",
    icon: Cpu,
  },
  {
    label: "Next action",
    value: "Inspect K2 relay contacts and log ClickUp task",
    icon: ListChecks,
  },
];

export function CircuitryInterpreter() {
  const boardShellRef = useRef<HTMLDivElement>(null);
  const [boardWidth, setBoardWidth] = useState(520);

  useEffect(() => {
    if (!boardShellRef.current) return;

    const updateWidth = () => {
      const width = boardShellRef.current?.clientWidth ?? 520;
      setBoardWidth(Math.max(300, Math.min(520, width - 24)));
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(boardShellRef.current);

    return () => observer.disconnect();
  }, []);

  const boardHeight = boardWidth < 380 ? 270 : 320;
  const nodes = useMemo(() => {
    const right = boardWidth - 48;
    const middle = boardWidth / 2;
    const lower = boardHeight - 88;

    return [
      { id: "fault", x: 48, y: 86, label: "Fault", status: "active" as const, icon: <Zap className="h-4 w-4" aria-hidden="true" /> },
      { id: "manual", x: middle - 86, y: 56, label: "Manual", status: "active" as const, icon: <FileText className="h-4 w-4" aria-hidden="true" /> },
      { id: "relay", x: middle, y: 118, label: "Relay", status: "processing" as const, size: "lg" as const, icon: <Cpu className="h-5 w-5" aria-hidden="true" /> },
      { id: "source", x: middle - 92, y: lower, label: "Source", status: "active" as const, icon: <SearchCheck className="h-4 w-4" aria-hidden="true" /> },
      { id: "answer", x: middle + 84, y: lower, label: "Answer", status: "active" as const, icon: <FileText className="h-4 w-4" aria-hidden="true" /> },
      { id: "task", x: right, y: 122, label: "Task", status: "active" as const, icon: <ListChecks className="h-4 w-4" aria-hidden="true" /> },
    ];
  }, [boardHeight, boardWidth]);

  const connections = [
    { from: "fault", to: "relay", animated: true },
    { from: "manual", to: "relay", animated: true },
    { from: "relay", to: "source", animated: true },
    { from: "relay", to: "answer", animated: true },
    { from: "answer", to: "task", animated: true },
  ];

  return (
    <Reveal className="mt-6">
      <Card className="overflow-hidden p-5 sm:p-6">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-blue-electric shadow-inset">
              <SearchCheck className="h-5 w-5" aria-hidden="true" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-electric">
              Custom-built tool
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-ink">
              Circuitry Interpreter
            </h3>
            <p className="mt-3 leading-7 text-muted">
              For the wood-flooring plant, ordinary document search was not
              enough. I added a purpose-built interpreter that helps read machine
              circuitry and schematic references alongside the sourced manual text.
            </p>
            <div className="mt-5 grid gap-3">
              {readoutSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.label}
                    className="rounded-lg border border-white/70 bg-white/50 p-3 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-blue-electric shadow-inset">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                          {step.label}
                        </p>
                        <p className="mt-1 text-sm font-semibold leading-6 text-ink">
                          {step.value}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            ref={boardShellRef}
            aria-label="Circuitry interpreter example flow"
            className="relative min-h-[380px] overflow-hidden rounded-xl border border-white/70 bg-white/35 p-4 shadow-inset sm:p-5"
          >
            <div className="absolute inset-0 opacity-60 [background-image:radial-gradient(rgba(37,99,235,0.18)_1px,transparent_1px)] [background-size:18px_18px]" />
            <CircuitBoard
              className="relative z-10 mx-auto"
              connections={connections}
              gridColor="rgba(37,99,235,0.12)"
              height={boardHeight}
              nodeColor="rgba(37,99,235,0.62)"
              nodes={nodes}
              pulseColor="rgba(37,99,235,0.84)"
              pulseSpeed={2.35}
              showGrid={false}
              traceColor="rgba(37,99,235,0.24)"
              traceWidth={2}
              variant="light"
              width={boardWidth}
            />

            <div className="absolute bottom-5 left-5 right-5 z-20 rounded-lg border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-electric">
                Example output
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                “The startup fault points to the safety relay path. Check the K2
                contacts, verify overload reset, then attach the manual section
                to the maintenance task.”
              </p>
            </div>
          </div>
        </div>
      </Card>
    </Reveal>
  );
}
