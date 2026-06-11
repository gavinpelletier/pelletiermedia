"use client";

import { GithubCalendar } from "@/components/ui/github-calendar";

export function ActivitySection() {
  return (
    <section id="activity" className="scroll-mt-24 py-20">
      <div className="container-shell">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-electric">
          Activity
        </p>
        <h2 className="headline mt-2 max-w-3xl text-4xl leading-tight text-ink sm:text-5xl">
          Open source contributions.
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          I build in public. Here&apos;s my GitHub activity — agents, automation
          tools, and integration pipelines.
        </p>
      </div>
      <div className="container-shell mt-10">
        <div className="tactile overflow-hidden rounded-[1.5rem] p-6">
          <GithubCalendar
            username="gavinpelletier"
            variant="city-lights"
            colorSchema="blue"
            showTotal={true}
          />
        </div>
      </div>
    </section>
  );
}
