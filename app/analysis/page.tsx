import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";

export default function AnalysisPage() {
  return (
    <PageShell
      title="Opportunity Analysis"
      description="The Opportunity Analysis Agent scores creator fit, extracts risks, and prepares the business strategy handoff for the orchestrator."
    >
      <PageIntro
        eyebrow="Analysis Agent"
        title="Risk, fit, and missing details surfaced before work begins"
        description="The analysis layer exists to protect creator time and margin before the business manager steps in."
        badge="GlowLab analysis"
      />

      <div className="grid gap-6 xl:grid-cols-2">
        <section className="soft-card rounded-[30px]">
          <p className="eyebrow">Analysis Output</p>
          <h2 className="mt-2 text-[2rem] font-semibold tracking-[-0.05em]">GlowLab scored 92% creator fit</h2>
          <div className="mt-6 space-y-4">
            {[
              "Strong niche fit for skincare-focused content.",
              "Singapore creator requirement is satisfied.",
              "Brief includes raw footage and paid usage, which increases commercial value."
            ].map((item) => (
              <div key={item} className="rounded-[22px] bg-white p-4 text-sm leading-6">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="soft-card rounded-[30px]">
          <p className="eyebrow">Risk Extraction</p>
          <h3 className="mt-2 text-[1.9rem] font-semibold tracking-[-0.05em]">Clarify before progressing</h3>
          <div className="mt-6 space-y-4">
            {[
              "Paid usage countries are undefined.",
              "Payment timeline is missing.",
              "Raw footage scope likely exceeds the listed budget."
            ].map((item) => (
              <div key={item} className="rounded-[22px] bg-[#fff2f0] p-4 text-sm leading-6">
                {item}
              </div>
            ))}
          </div>
          <Link href="/proposal" className="button-accent mt-6 gap-2">
            Move to business strategy
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </PageShell>
  );
}
