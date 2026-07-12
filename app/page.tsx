import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { HeroCollage } from "@/components/hero-collage";
import { PageShell } from "@/components/page-shell";
import { creatorProfile } from "@/data/demo";

export default function HomePage() {
  return (
    <PageShell>
      <section className="hero-card px-6 py-10 text-center md:px-14 md:py-16">
        <p className="eyebrow">AI Content Operations For Creators</p>
        <h1 className="display mx-auto mt-6 max-w-5xl">
          Help creators manage content work from opportunity to delivery.
        </h1>
        <p className="body-muted mx-auto mt-6 max-w-2xl text-base">
          CreatorOps AI gives UGC creators an approval-based AI workforce for briefs, research, scripts,
          client messages, payment tracking, and portfolio updates, so they can spend more time creating.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/customer_dashboard" className="button-dark gap-2">
            Read guide for me as the founder
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/guide" className="button-dark gap-2">
            Read guide for content creators (my customers)
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
          Current solutions mostly help brands find UGC creators. CreatorOps AI helps creators manage the content work after the opportunity arrives.
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-700">
          Many UGC creators are students, part-time freelancers, or solo creators juggling content work with school,
          jobs, and daily life. They still have to turn briefs into content plans, manage revisions, track deadlines,
          organize scripts, follow up with clients, request payment, and keep portfolios updated. CreatorOps AI gives
          them an approval-based content operations team, so repetitive workflow tasks move forward without losing
          human control.
        </p>
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-4">
        {[
          ["Approval Inbox", "Review content ideas, scripts, client messages, and payment actions that need human signoff."],
          ["Projects", "Track each content job from new brief to in-progress creation to completed delivery."],
          ["AI Workforce", "Inspect each agent and trace how content work moves from brief to approved output."],
          ["Settings", "Configure creator profile, content formats, tone, rates, languages, and agent behavior."]
        ].map(([title, body]) => (
          <div key={title} className="rounded-lg border border-black/15 bg-white p-5">
            <h2 className="text-base font-semibold">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-700">{body}</p>
          </div>
        ))}
      </section>

      <section className="mt-8 rounded-[32px] border border-black/10 bg-white p-6 md:p-8">
        <div>
          <p className="eyebrow">One Person Company</p>
          <h2 className="mt-3 max-w-4xl text-2xl font-semibold text-black md:text-3xl">
            This is my One Person Company: I use AI agents to advocate for CreatorOps AI on social media, attract content creators, and track how many customers are using the service.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-700">
            The creators use the main app to manage their content workflows. The customer dashboard is only for me as
            the business owner, so I can see how many content creators signed up, which channels brought them in, how
            they are using the service, and whether the AI growth agents are helping me reach more creators.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            ["AI advocates online", "Marketing agents post and explain CreatorOps AI across social channels."],
            ["Creators discover us", "Content creators arrive from Instagram, TikTok, LinkedIn, and referrals."],
            ["Customers sign up", "Customers means content creators subscribing to use the service."],
            ["Owner tracks growth", "The private customer dashboard shows signups, usage, revenue, and customer health."]
          ].map(([title, body]) => (
            <div key={title} className="rounded-[24px] border border-black/10 bg-neutral-50 p-4">
              <p className="font-semibold">{title}</p>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{body}</p>
            </div>
          ))}
        </div>
        <Link href="/customer_dashboard" className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white">
          See the dashboard I see
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </PageShell>
  );
}
