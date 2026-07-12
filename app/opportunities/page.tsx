import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { projectColumns } from "@/data/demo";

export default function OpportunitiesPage() {
  return (
    <PageShell
      title="Shortlisted Opportunities"
      description="Shortlisted opportunities live inside the New column in Projects, but this route gives a focused intake view for review and acceptance."
    >
      <PageIntro
        eyebrow="Opportunity Intake"
        title="Your shortlisted opportunities, explained clearly"
        description="These opportunities were filtered and analysed by the discovery and analysis agents before landing here."
        badge={`${projectColumns.new.length} new briefs`}
      />

      <div className="grid gap-6 xl:grid-cols-2">
        {projectColumns.new.map((project) => (
          <section key={project.brand} className="soft-card rounded-[30px]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Opportunity Discovery</p>
                <h2 className="mt-2 text-[2rem] font-semibold tracking-[-0.05em]">{project.brand}</h2>
              </div>
              <span className="pill-accent">{project.matchScore}% match</span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
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
                <p className="text-sm text-neutral-500">Recommendation</p>
                <p className="mt-2 font-medium">{project.recommendation}</p>
              </div>
            </div>
            <p className="body-muted mt-6">{project.reason}</p>
            <Link href="/opportunities/glowlab" className="button-dark mt-6 gap-2">
              Inspect opportunity
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
