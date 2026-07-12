import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageShell } from "@/components/page-shell";

export default function LoginPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-2xl">
        <section className="hero-card px-8 py-10 text-center md:px-12 md:py-14">
          <p className="eyebrow">Demo access</p>
          <h1 className="section-title mt-2">Enter the premium demo workspace</h1>
          <p className="body-muted mx-auto mt-4 max-w-xl">
            Use the demo account to review approvals, inspect the orchestrator workflow, and walk through the multi-agent creator operating system.
          </p>

          <div className="mx-auto mt-8 max-w-md space-y-4 text-left">
            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>
              <div className="rounded-[22px] border border-black/8 bg-white px-4 py-3">jamie@creatorops.ai</div>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Password</label>
              <div className="rounded-[22px] border border-black/8 bg-white px-4 py-3">••••••••••••</div>
            </div>
          </div>

          <Link href="/dashboard" className="button-accent mx-auto mt-8 inline-flex gap-2">
            Enter approval inbox
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </PageShell>
  );
}
