import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";

export default function InvoicePage() {
  return (
    <PageShell
      title="Finance"
      description="The Finance Agent handles invoice tracking and reminder drafting, but reminders still stop for creator approval before anything is sent."
    >
      <PageIntro
        eyebrow="Finance Agent"
        title="Payment status stays visible without clutter"
        description="Overdue reminders are drafted automatically, but never sent until the creator approves them."
        badge="1 overdue invoice"
      />

      <div className="grid gap-6 xl:grid-cols-[0.78fr_1.22fr]">
        <section className="soft-card rounded-[30px]">
          <p className="eyebrow">Overdue invoice</p>
          <h2 className="mt-2 text-[2rem] font-semibold tracking-[-0.05em]">SkinPure / INV-1048</h2>
          <div className="mt-6 grid gap-4">
            {[
              ["Amount", "SGD 620"],
              ["Due date", "2 Jul 2026"],
              ["Status", "9 days overdue"],
              ["Next action", "Reminder approval needed"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-[22px] bg-white p-4">
                <p className="text-sm text-neutral-500">{label}</p>
                <p className="mt-2 font-medium">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="soft-card rounded-[30px]">
          <p className="eyebrow">Reminder draft</p>
          <h3 className="mt-2 text-[1.9rem] font-semibold tracking-[-0.05em]">Ready for approval</h3>
          <div className="mt-6 rounded-[26px] bg-white p-6 text-sm leading-7 text-neutral-700">
            Hi SkinPure team,
            <br />
            <br />
            Just a friendly reminder that invoice INV-1048 for SGD 620 was due on 2 July 2026.
            Please let me know if payment is already in progress.
            <br />
            <br />
            Thank you,
            <br />
            Jamie
          </div>
          <div className="mt-6 flex gap-3">
            <button className="button-accent">Approve reminder</button>
            <button className="button-light">Edit tone</button>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
