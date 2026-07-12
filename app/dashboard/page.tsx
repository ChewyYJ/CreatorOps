import { ApprovalCard } from "@/components/approval-card";
import { PageShell } from "@/components/page-shell";
import { UpdateList } from "@/components/update-list";
import { aiUpdates, dashboardApprovals } from "@/data/demo";

export default function DashboardPage() {
  return (
    <PageShell
      title="Approval Inbox"
      description="Review actions that need your approval."
    >
      <section>
        <div className="flex items-center justify-between gap-4">
          <p className="eyebrow">Human Approvals Required</p>
          <span className="pill">{dashboardApprovals.length} pending</span>
        </div>

        <div className="-mx-2 mt-8 flex snap-x gap-4 overflow-x-auto px-2 pb-4">
          {dashboardApprovals.map((item) => (
            <div key={item.title} className="w-[310px] flex-none snap-start md:w-[360px]">
              <ApprovalCard {...item} />
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <UpdateList items={aiUpdates} />
      </section>
    </PageShell>
  );
}
