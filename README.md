# CreatorOps AI

Premium SaaS-style web app for freelance UGC creators. The product is framed as an AI business manager where one orchestrator coordinates a specialist workforce, while the creator only steps in for approvals.

## Product model

- One central orchestrator
- Eight specialist agents
- Multi-project support
- Approval-first dashboard
- Human-in-the-loop workflow gates
- Premium red / black / white visual system

## Key routes

- `/` — premium landing page
- `/dashboard` — approval inbox
- `/projects` — new, in-progress, and completed work
- `/workforce` — agent cards plus live trace graph
- `/onboarding` — creator, business, and creative setup
- `/settings` — agent configuration overview

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- Lucide React

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint
npm run build
```
