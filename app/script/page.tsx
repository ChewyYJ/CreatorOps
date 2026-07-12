import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";

export default function ScriptPage() {
  return (
    <PageShell
      title="Creative Development"
      description="The Creative Agent turns research into hooks, scripts, shot lists, captions, and CTA — then waits for creator approval."
    >
      <PageIntro
        eyebrow="Creative Agent"
        title="Hooks, script, and direction ready for human review"
        description="This stage should feel clearly designed and tangible, not like an unstyled placeholder page."
        badge="Script pending approval"
      />

      <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
        <section className="soft-card rounded-[30px]">
          <p className="eyebrow">Script Pack</p>
          <h2 className="mt-2 text-[2rem] font-semibold tracking-[-0.05em]">Editable UGC script for GlowLab</h2>
          <div className="mt-6 space-y-4">
            {[
              "Hook — ‘My face looked flat every afternoon, so I tested one glow step for a week.’",
              "Problem — ‘I wanted brighter skin without adding a sticky routine.’",
              "Product — ‘GlowLab’s Vitamin C serum gives me that fresher camera-ready finish.’",
              "Proof — ‘My skin looks more awake in natural light and on front-camera footage.’",
              "CTA — ‘If you want a simple glow upgrade, I’d start here.’"
            ].map((item) => (
              <div key={item} className="rounded-[22px] bg-white p-4 text-sm leading-6">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="soft-card rounded-[30px]">
          <p className="eyebrow">Approval Gate</p>
          <h3 className="mt-2 text-[1.9rem] font-semibold tracking-[-0.05em]">The orchestrator waits here</h3>
          <div className="mt-6 space-y-4">
            {[
              "Hook options prepared",
              "Shot list drafted",
              "Caption direction included",
              "CTA aligned to campaign objective"
            ].map((item) => (
              <div key={item} className="rounded-[22px] bg-white p-4 text-sm leading-6">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <button className="button-accent">Approve script</button>
            <button className="button-light">Request revision</button>
          </div>
          <Link href="/invoice" className="button-dark mt-6 gap-2">
            View finance workflow
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </PageShell>
  );
}
