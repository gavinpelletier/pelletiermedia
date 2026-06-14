"use client";

import { Reveal } from "@/components/Reveal";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const workflowMailto = "mailto:gavin@kolix.ai?subject=Workflow%20for%20a%20custom%20AI%20system";

export function CTASection() {
  return (
    <section className="container-shell scroll-mt-24 py-20" id="contact">
      <Reveal className="overflow-hidden rounded-2xl bg-ink p-8 text-white shadow-[0_30px_80px_rgba(23,24,29,0.28)] sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-blue-glow">
              Start With One Workflow
            </p>
            <h2 className="headline max-w-3xl text-4xl leading-tight sm:text-6xl">
              Show me the workflow that shouldn't be manual.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              Send me the steps, tools, and bottleneck. I'll map where an
              agent, integration, or custom interface can take work off your
              team — and where a human should stay in control.
            </p>
          </div>
          <InteractiveHoverButton
            aria-label="Send the workflow by email"
            className="focus-ring min-h-12 w-auto min-w-[12rem] rounded-xl border-white bg-white px-5 py-3 text-sm text-ink shadow-none [&>div:nth-of-type(1)]:text-ink [&>div:nth-of-type(2)]:bg-blue-glow [&>div:nth-of-type(2)]:group-hover:bg-blue-glow [&_svg]:h-4 [&_svg]:w-4"
            onClick={() => {
              window.location.href = workflowMailto;
            }}
            text="Send the Workflow"
            type="button"
          />
        </div>
      </Reveal>
    </section>
  );
}