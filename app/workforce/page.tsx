import { PageShell } from "@/components/page-shell";
import { TraceGraph } from "@/components/trace-graph";
import { WorkforceGrid } from "@/components/workforce-grid";

export default function WorkforcePage() {
  return (
    <PageShell
      title="AI Workforce"
      description="Review agent status, configuration, and project audit traces."
    >
      <WorkforceGrid />
      <div className="mt-8">
        <TraceGraph />
      </div>
    </PageShell>
  );
}
