import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";

export default function ProposalPage() {
  return (
    <PageShell
      title="Business Strategy"
      description="The Business Manager Agent handles clarification, negotiation, and pricing — then pauses for human approval before the orchestrator can continue."
    >
      <PageIntro
        eyebrow="Business Manager Agent"
        title="Pricing and negotiation drafts prepared for approval"
        description="The AI handles the heavy lifting, but the final outreach still waits for the creator."
        badge="Approval gate"
      />

      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <section className="soft-card rounded-[30px]">
          <p className="eyebrow">Pricing Logic</p>
          <h2 className="mt-2 text-[2rem] font-semibold tracking-[-0.05em]">Suggested rate: SGD 320</h2>
          <div className="mt-6 space-y-4">
            {[
              "3 months paid usage increases scope value",
              "Raw footage should not be bundled into the base rate",
              "2 revision rounds add admin and production time"
            ].map((item) => (
              <div key={item} className="rounded-[22px] bg-white p-4 text-sm leading-6">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="soft-card rounded-[30px]">
          <p className="eyebrow">Approval Draft</p>
          <h3 className="mt-2 text-[1.9rem] font-semibold tracking-[-0.05em]">Negotiation email ready for Jamie</h3>
          <div className="mt-6 rounded-[26px] bg-white p-6 text-sm leading-7 text-neutral-700">
            Hi GlowLab team,
            <br />
            <br />
            Thanks for reaching out. I’d love to explore this campaign.
            Before confirming, could you clarify exclusivity, paid usage countries, and the payment timeline?
            Based on the requested deliverables, my rate for this scope would be SGD 320.
            <br />
            <br />
            Best,
            <br />
            Jamie
          </div>
          <div className="mt-6 flex gap-3">
            <button className="button-accent">Approve draft</button>
            <button className="button-light">Edit draft</button>
          </div>
          <Link href="/research" className="button-dark mt-6 gap-2">
            Continue to research
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </PageShell>
  );
}
