import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";

export default function ResearchPage() {
  return (
    <PageShell
      title="Research"
      description="Once pricing is approved, the Research Agent builds the strategic context that powers stronger scripts and better-performing creative."
    >
      <PageIntro
        eyebrow="Research Agent"
        title="Trend, audience, and product context assembled for creative"
        description="This stage translates the brief into sharper strategic direction before scripts are generated."
        badge="Research complete"
      />

      <div className="grid gap-6 xl:grid-cols-2">
        <section className="soft-card rounded-[30px]">
          <p className="eyebrow">Audience + Product</p>
          <h2 className="mt-2 text-[2rem] font-semibold tracking-[-0.05em]">Context prepared for creative development</h2>
          <div className="mt-6 space-y-4">
            {[
              "GlowLab’s serum is positioned around visible brightness and confidence on camera.",
              "Audience wants simple glow upgrades, not complex skincare rituals.",
              "Competitor creative leans clinical; a more human creator-led angle is an opportunity."
            ].map((item) => (
              <div key={item} className="rounded-[22px] bg-white p-4 text-sm leading-6">
                {item}
              </div>
            ))}
          </div>
        </section>
        <section className="soft-card rounded-[30px]">
          <p className="eyebrow">Trend + Creative Direction</p>
          <h3 className="mt-2 text-[1.9rem] font-semibold tracking-[-0.05em]">Hook and messaging opportunities</h3>
          <div className="mt-6 space-y-4">
            {[
              "Hook idea: ‘My face looked flat by 3pm — until I changed one step.’",
              "Pain point: skin looks dull on camera even when makeup is done.",
              "Creative recommendation: combine proof shots with calm premium voiceover."
            ].map((item) => (
              <div key={item} className="rounded-[22px] bg-white p-4 text-sm leading-6">
                {item}
              </div>
            ))}
          </div>
          <Link href="/script" className="button-accent mt-6 gap-2">
            Move to creative development
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </PageShell>
  );
}
