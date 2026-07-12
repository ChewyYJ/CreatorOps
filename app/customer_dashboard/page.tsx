import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Bot,
  CircleDollarSign,
  Clock3,
  Crown,
  Megaphone,
  ShieldCheck,
  Sparkles,
  UserPlus,
  UsersRound
} from "lucide-react";

import { PageShell } from "@/components/page-shell";
import { customerDashboard } from "@/data/demo";

const statusStyles: Record<string, string> = {
  Healthy: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Growing: "bg-blue-50 text-blue-700 border-blue-200",
  "At risk": "bg-amber-50 text-amber-700 border-amber-200"
};

const summaryIcons = [UsersRound, Crown, CircleDollarSign, Clock3];
const nodeIcons = [Megaphone, UserPlus, Sparkles, Activity, ShieldCheck, Bot];

const nodeStyles: Record<string, string> = {
  active: "border-[#e84133]/30 bg-[#fff7f5]",
  warning: "border-amber-300 bg-amber-50",
  idle: "border-black/10 bg-neutral-50"
};

export default function CustomerDashboardPage() {
  const topRevenue = customerDashboard.revenue[customerDashboard.revenue.length - 1];

  return (
    <PageShell
      title="Private Customer Dashboard"
      description="Owner-only view for the One Person Company: track content creator customers, social acquisition, usage, revenue, and customer health."
      hideNavigation
    >
      <section className="mb-6 grid gap-6 rounded-[32px] border border-black/10 bg-white p-6 md:p-8 xl:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="eyebrow">Owner Guide</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">
            This page is only for me to see how my One Person Company is performing.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-700">
            Content creators do not use this dashboard. I use it to check how many creators are signing up, how they
            are using CreatorOps AI, which social channels are bringing customers in, and whether my AI agents need to
            take action to improve acquisition or retention.
          </p>
        </div>
        <div className="grid gap-3">
          {[
            ["Marketing Agent", "Advocates on Instagram, TikTok, LinkedIn, and other social channels to attract content creators."],
            ["Customer Health Agent", "Follows up when customers stop using the platform, go quiet, or look likely to churn."],
            ["Usage Monitor", "Tracks approvals, projects, AI tasks, time saved, and whether creators are getting value."],
            ["Owner Review", "Shows the stats I need to decide what to improve next in the service."]
          ].map(([title, body]) => (
            <div key={title} className="rounded-[22px] border border-black/10 bg-neutral-50 p-4">
              <p className="font-semibold">{title}</p>
              <p className="mt-2 text-sm leading-6 text-neutral-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {customerDashboard.summary.map((item, index) => {
          const Icon = summaryIcons[index] ?? Activity;

          return (
            <div key={item.label} className="soft-card rounded-[28px] bg-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-neutral-500">{item.label}</p>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.05em]">{item.value}</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <p className={item.tone === "warning" ? "mt-5 text-sm font-medium text-amber-700" : "mt-5 text-sm font-medium text-emerald-700"}>
                {item.change}
              </p>
            </div>
          );
        })}
      </section>

      <section className="mt-6 soft-card rounded-[32px] bg-white">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="eyebrow">Owner Operating Nodes</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">How my AI agents help me acquire and monitor creator customers</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-600">
              This dashboard is not for content creators. It is for me as the business owner to see which AI agents are
              advocating on social media, how many creators become customers, and how they are using the service.
            </p>
          </div>
          <Link href="/" className="button-dark gap-2 px-5 py-2">
            Back to landing
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {customerDashboard.ownerNodes.map((node, index) => {
            const Icon = nodeIcons[index] ?? Bot;

            return (
              <div key={node.name} className={`relative rounded-[28px] border p-5 ${nodeStyles[node.state] ?? nodeStyles.idle}`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">{node.name}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-neutral-500">{node.state}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold">{node.metric}</span>
                </div>
                <p className="mt-5 text-sm leading-6 text-neutral-700">{node.description}</p>
                <div className="mt-4 rounded-[20px] border border-black/10 bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">Fake demo data</p>
                  <p className="mt-2 text-sm font-medium">{node.fakeData}</p>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  Next
                  <ArrowRight className="h-3.5 w-3.5" />
                  {node.next}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="soft-card rounded-[32px] bg-white">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="eyebrow">Customer Funnel</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">From interest to paid creators</h2>
            </div>
            <div className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium">
              {topRevenue.customers} paying customers
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {customerDashboard.funnel.map((stage) => (
              <div key={stage.stage}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{stage.stage}</span>
                  <span className="text-neutral-500">{stage.count.toLocaleString()} · {stage.percent}%</span>
                </div>
                <div className="mt-2 h-3 rounded-full border border-black/10 bg-neutral-100">
                  <div className="h-full rounded-full bg-black" style={{ width: `${stage.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="soft-card rounded-[32px] bg-[#111111] text-white">
          <p className="eyebrow text-white/55">Owner Snapshot</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">Creators are using AI to keep content work moving.</h2>
          <p className="mt-4 text-sm leading-7 text-white/65">
            This dashboard is for the one-person company: monitor customer growth, spot creators who need help,
            and understand whether CreatorOps AI is becoming part of their weekly content workflow.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {customerDashboard.activity.map((item) => (
              <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/8 p-4">
                <p className="text-2xl font-semibold tracking-[-0.04em]">{item.value}</p>
                <p className="mt-1 text-sm font-medium">{item.label}</p>
                <p className="mt-2 text-xs leading-5 text-white/55">{item.helper}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
        <div className="soft-card rounded-[32px] bg-white">
          <p className="eyebrow">Customer Segments</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">Who is using the service</h2>
          <div className="mt-6 space-y-3">
            {customerDashboard.segments.map((segment) => (
              <div key={segment.label} className="rounded-[24px] border border-black/10 bg-neutral-50 p-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-medium">{segment.label}</p>
                  <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold">{segment.count}</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{segment.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="soft-card rounded-[32px] bg-white">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="eyebrow">Customer Health</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">Who needs attention</h2>
            </div>
            <button className="button-light gap-2 px-4 py-2">
              Export CSV
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-6 overflow-x-auto">
            <div className="min-w-[760px] space-y-3">
              {customerDashboard.customers.map((customer) => (
                <div key={customer.name} className="grid grid-cols-[1.2fr_0.9fr_0.8fr_0.8fr_1fr] items-center gap-4 rounded-[24px] border border-black/10 bg-neutral-50 p-4">
                  <div>
                    <p className="font-semibold">{customer.name}</p>
                    <p className="mt-1 text-xs text-neutral-500">{customer.note}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">Plan</p>
                    <p className="mt-1 text-sm font-medium">{customer.plan}</p>
                  </div>
                  <span className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[customer.status] ?? statusStyles.Growing}`}>
                    {customer.status}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">Usage</p>
                    <div className="mt-2 h-2 rounded-full border border-black/10 bg-white">
                      <div className="h-full rounded-full bg-[#e84133]" style={{ width: `${customer.usage}%` }} />
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{customer.projects} projects</p>
                    <p className="mt-1 text-xs text-neutral-500">{customer.approvals} approvals · {customer.lastActive}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 soft-card rounded-[32px] bg-white">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="eyebrow">Revenue Trend</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">Subscription growth</h2>
          </div>
          <p className="rounded-full border border-black/10 px-4 py-2 text-sm text-neutral-600">
            Latest: {topRevenue.revenue} MRR
          </p>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-5">
          {customerDashboard.revenue.map((month) => (
            <div key={month.month} className="rounded-[24px] border border-black/10 bg-neutral-50 p-4">
              <p className="text-sm font-medium">{month.month}</p>
              <div className="mt-12 flex h-28 items-end rounded-[18px] bg-white p-2">
                <div
                  className="w-full rounded-[14px] bg-black"
                  style={{ height: `${Math.min(100, month.customers + 10)}%` }}
                />
              </div>
              <p className="mt-4 text-lg font-semibold tracking-[-0.04em]">{month.revenue}</p>
              <p className="text-xs text-neutral-500">{month.customers} customers</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
