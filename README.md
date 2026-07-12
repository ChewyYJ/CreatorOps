# CreatorOps AI

CreatorOps AI is an AI content operations platform for UGC creators. It helps content creators manage paid content work after an opportunity arrives: briefs, research, scripts, client messages, approvals, payment tracking, and portfolio updates.

The product is designed around two different perspectives:

1. The founder / business owner view — private dashboard for the person running the One Person Company.
2. The content creator / customer view — the product experience used by creators who subscribe to the service.

## Core Positioning

Current creator marketplace tools mostly help brands and companies find UGC creators. CreatorOps AI focuses on what happens after the creator gets the opportunity.

Many UGC creators are students, part-time freelancers, or solo creators juggling content work with school, jobs, and daily life. They still need to turn briefs into content plans, manage revisions, track deadlines, organize scripts, follow up with clients, request payment, and keep portfolios updated.

CreatorOps AI gives creators an approval-based AI workforce, so repetitive content operations move forward while the creator stays in control.

## Founder View

The founder view is for the owner of the One Person Company providing CreatorOps AI as a service.

Route:

- `/customer_dashboard`

Purpose:

- Track how many content creators are using the service.
- Monitor signups, trials, paying subscribers, revenue, and customer health.
- See which social channels and AI marketing efforts are bringing in creator customers.
- Understand how creators are using the platform through projects, approvals, AI tasks, and time saved.
- Identify customers whose usage is dying down so the Customer Health Agent can prepare follow-ups.

Founder operating nodes:

- Marketing Agent — advocates for CreatorOps AI on Instagram, TikTok, LinkedIn, and other social channels.
- Signup Flow — tracks content creators who discover the product and start a trial.
- Activation Agent — helps new creators complete setup and approve their first workflow.
- Usage Monitor — measures approvals, projects, AI tasks, and time saved.
- Customer Health Agent — detects low usage or churn risk and prepares follow-up support.
- Retention Agent — suggests lifecycle emails, product education, and win-back actions.

This dashboard is private and is not part of the content creator user experience.

## Content Creator View

The content creator view is for the creators who subscribe to CreatorOps AI. These creators are the founder’s customers.

Creator-facing routes:

- `/guide` — guide for content creators using the product.
- `/dashboard` — Approval Inbox for review, edit, approve, and human-in-the-loop actions.
- `/projects` — project board for New, In Progress, and Completed creator work.
- `/workforce` — AI Workforce view showing agents, live traces, reasoning, and audit trails.
- `/settings` — creator profile, preferences, pricing, content formats, tone, and agent settings.

Creator-facing workflow:

- Creator receives or accepts a paid content opportunity.
- AI agents analyze the brief, scope, usage rights, pricing, and missing requirements.
- Business Manager Agent drafts client messages and negotiation emails.
- Research Agent prepares product, audience, competitor, and trend context.
- Creative Agent drafts hooks, scripts, captions, shot lists, and creative directions.
- Finance Agent tracks payment status and drafts reminders.
- Website Manager prepares portfolio or personal website updates after completed work.
- The creator approves, edits, or asks the agents to think again before anything important moves forward.

## Human-in-the-Loop Philosophy

CreatorOps AI does not remove the creator from the workflow. The system is designed around approval gates.

Creators stay in control of:

- Client-facing emails.
- Pricing and negotiation decisions.
- Creative ideas and scripts.
- Payment-related messages.
- Final filming and editing.
- Portfolio or website updates.

AI agents handle repetitive operations, but humans approve the important decisions.

## Demo Workflow

The current demo focuses on a UGC creator taking on a skincare campaign.

Example flow:

- A creator accepts a GlowLab content opportunity.
- The orchestrator routes work to specialist agents.
- Business Manager Agent reasons about scope, pricing, and usage rights.
- A human approval is required before the negotiation email is sent.
- Finance Agent checks payment readiness before work starts.
- Research Agent and Creative Agent prepare trend references, hooks, and content ideas.
- The creator reviews, edits, approves, or asks the agent to improve the draft.
- The creator films and edits the video themselves.
- The project moves toward delivery, payment, portfolio update, and completion.

## Key Routes

- `/` — landing page with separate guide paths for founder and content creators.
- `/customer_dashboard` — private founder dashboard for the One Person Company.
- `/guide` — creator-facing guide.
- `/dashboard` — creator Approval Inbox.
- `/projects` — creator project tracking.
- `/workforce` — creator AI Workforce and trace graph.
- `/settings` — creator settings and profile configuration.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Lucide React
- React Hook Form
- Zod

## Local Development

```bash
npm install
npm run dev
```

Default local URL:

```bash
http://localhost:3001
```

## Validation

```bash
npm run lint
npm run build
```

If Next.js chunk errors appear during local development, stop the dev server, remove `.next`, rebuild, then restart:

```bash
rm -rf .next
npm run lint
npm run build
PORT=3001 npm run dev
```
