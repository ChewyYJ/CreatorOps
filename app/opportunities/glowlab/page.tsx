import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { projectColumns } from "@/data/demo";

export default function OpportunityDetailPage() {
  const project = projectColumns.new[0];

  return (
    <PageShell
      title="GlowLab Opportunity"
      description="This is the pre-acceptance project intake screen: AI shortlisted the brief, explained the fit, and highlighted what needs clarification before you take it on."
    >
      <PageIntro
        eyebrow="Opportunity Detail"
        title="GlowLab is shortlisted for strong creator fit"
        description="Review the agent’s reasoning, then decide whether to trigger the rest of the workflow."
        badge="92% match"
      />

      <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <section className="soft-card rounded-[30px]">
          <p className="eyebrow">Why AI shortlisted it</p>
          <h2 className="mt-2 text-[2.25rem] font-semibold tracking-[-0.05em]">{project.brand}</h2>
          <p className="body-muted mt-5">{project.reason}</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-[22px] bg-white p-4">
              <p className="text-sm text-neutral-500">Budget</p>
              <p className="mt-2 font-medium">{project.budget}</p>
            </div>
            <div className="rounded-[22px] bg-white p-4">
              <p className="text-sm text-neutral-500">Platform</p>
              <p className="mt-2 font-medium">{project.platform}</p>
            </div>
            <div className="rounded-[22px] bg-white p-4">
              <p className="text-sm text-neutral-500">Deadline</p>
              <p className="mt-2 font-medium">{project.deadline}</p>
            </div>
            <div className="rounded-[22px] bg-white p-4">
              <p className="text-sm text-neutral-500">Match score</p>
              <p className="mt-2 font-medium">{project.matchScore}%</p>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="button-accent">Take on this project</button>
            <button className="button-light">Ignore</button>
          </div>
        </section>

        <section className="soft-card rounded-[30px]">
          <p className="eyebrow">Business strategy preview</p>
          <h3 className="mt-2 text-[1.9rem] font-semibold tracking-[-0.05em]">What happens next after acceptance</h3>
          <div className="mt-6 space-y-4">
            {[
              "Business Manager Agent clarifies requirements and negotiates pricing",
              "Research Agent builds audience, competitor, and trend context",
              "Creative Agent generates hooks, scripts, shot lists, captions, and CTA",
              "Creator films and edits the video, then confirms completion"
            ].map((item) => (
              <div key={item} className="rounded-[22px] bg-white p-4 text-sm leading-6">
                {item}
              </div>
            ))}
          </div>
          <Link href="/analysis" className="button-dark mt-6 gap-2">
            View analysis detail
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </PageShell>
  );
}
