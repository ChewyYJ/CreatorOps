import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageShell } from "@/components/page-shell";
import { workflowStages } from "@/data/demo";

export default function GuidePage() {
  return (
    <PageShell
      title="Guide"
      description="A quick map of how CreatorOps AI works before users enter the operating tabs."
    >
      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-black/15 bg-white p-6">
          <p className="eyebrow">Core idea</p>
          <h2 className="mt-2 text-2xl font-semibold text-black">AI executes. Humans approve.</h2>
          <p className="mt-4 text-sm leading-7 text-neutral-700">
            The creator does not manually manage every task. Agents monitor opportunities, analyze briefs,
            draft business actions, research ideas, prepare creative work, track payment status,
            and improve the creator website. The user steps in when approval matters.
          </p>
          <Link href="/dashboard" className="mt-6 inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white">
            Go to Approval Inbox
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="rounded-lg border border-black/15 bg-white p-6">
          <p className="eyebrow">Project workflow</p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {workflowStages.map((stage, index) => (
              <div key={stage} className="rounded-lg border border-black/10 p-4">
                <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-sm font-semibold">{stage}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-4">
        {[
          ["Approval Inbox", "Focused approval queue. No extra dashboard clutter."],
          ["Projects", "Toggle between New, In Progress, and Completed work."],
          ["AI Workforce", "View agent status and inspect trace history per project."],
          ["Settings", "Edit profile, pricing, creative preferences, and agent settings."]
        ].map(([title, body]) => (
          <div key={title} className="rounded-lg border border-black/15 bg-white p-5">
            <h3 className="text-base font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-neutral-700">{body}</p>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
