import { PageShell } from "@/components/page-shell";
import { ProjectBoard } from "@/components/project-board";
import { workflowStages } from "@/data/demo";

export default function ProjectsPage() {
  return (
    <PageShell
      title="Projects"
      description="Track shortlisted, active, and completed creator work."
    >
      <section className="soft-card rounded-[32px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Lifecycle</p>
            <h2 className="mt-2 text-xl font-semibold text-black">Project progress is orchestrated, not manually managed</h2>
          </div>
          <span className="pill">Multi-project support enabled</span>
        </div>
        <div className="mt-8 grid gap-4 border-t border-black/25 pt-5 md:grid-cols-4 xl:grid-cols-8">
          {workflowStages.map((stage, index) => (
            <div key={stage} className="rounded-[24px] bg-white p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-400">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-3 text-sm font-medium leading-6">{stage}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <ProjectBoard />
      </section>
    </PageShell>
  );
}
