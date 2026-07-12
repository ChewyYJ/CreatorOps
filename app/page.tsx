import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { HeroCollage } from "@/components/hero-collage";
import { PageShell } from "@/components/page-shell";
import { creatorProfile } from "@/data/demo";

export default function HomePage() {
  return (
    <PageShell>
      <section className="hero-card px-6 py-10 text-center md:px-14 md:py-16">
        <p className="eyebrow">Premium AI Business Manager</p>
        <h1 className="display mx-auto mt-6 max-w-5xl">
          Run your creator business with an AI workforce that executes while you approve.
        </h1>
        <p className="body-muted mx-auto mt-6 max-w-2xl text-base">
          CreatorOps AI orchestrates opportunity discovery, pricing, research, scripts, finance, and website
          updates across multiple projects without turning the creator into a project manager.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/guide" className="button-dark gap-2">
            Read guide
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <HeroCollage />

        <div className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-3">
          {creatorProfile.platforms.map((platform) => (
            <span key={platform} className="pill">
              {platform}
            </span>
          ))}
          {creatorProfile.niches.map((niche) => (
            <span key={niche} className="pill">
              {niche}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-lg border border-black/15 bg-white p-6 md:p-8">
        <p className="eyebrow">Why We Are Creating This</p>
        <h2 className="mt-3 max-w-4xl text-2xl font-semibold text-black md:text-3xl">
          Current solutions mostly help brands and companies find UGC creators. CreatorOps AI helps creators run the business after the opportunity arrives.
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-700">
          Freelance creators still have to manage pricing, negotiation, research, scripts, payment tracking,
          portfolio updates, and client follow-ups on their own. This product gives the creator an approval-based
          AI workforce, so the repetitive business work moves forward without losing human control.
        </p>
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-4">
        {[
          ["Approval Inbox", "Review pricing, script, video, and payment actions that need human signoff."],
          ["Projects", "Move between New, In Progress, and Completed work without crowding the screen."],
          ["AI Workforce", "Inspect each agent and trace how the orchestrator moves work through the system."],
          ["Settings", "Configure creator profile, pricing, formats, tone, languages, and agent behavior."]
        ].map(([title, body]) => (
          <div key={title} className="rounded-lg border border-black/15 bg-white p-5">
            <h2 className="text-base font-semibold">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-700">{body}</p>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
