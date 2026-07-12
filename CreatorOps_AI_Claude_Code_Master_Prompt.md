# CreatorOps AI --- Claude Code Master Prompt (Hackathon MVP)

> **Mission:** Build a polished hackathon MVP called **CreatorOps AI**,
> an AI Business Manager for freelance UGC creators. Focus on one
> impressive end-to-end journey instead of many incomplete features.

## Core Principles

-   Build production-quality, maintainable code.
-   Do **not** make the app look AI-generated.
-   Prioritize UX over feature count.
-   Human-in-the-loop for important actions.
-   Use realistic data and copy.
-   If an integration cannot be completed, simulate it cleanly.

## Product Vision

CreatorOps AI helps freelance creators spend less time on business
administration and more time creating content.

Instead of helping brands find creators, it helps creators run their own
one-person business.

## Demo Story

The demo should follow exactly this journey:

1.  User logs into a demo account.
2.  Dashboard shows a new Telegram opportunity from GlowLab.
3.  User opens the opportunity.
4.  AI analyses the brief.
5.  AI extracts requirements.
6.  AI calculates a creator match score.
7.  AI identifies missing information and risks.
8.  AI recommends a price.
9.  AI drafts a clarification / negotiation email.
10. User approves.
11. AI researches the product and audience.
12. AI generates creative angles.
13. AI generates an editable UGC script.
14. User approves the script.
15. Project is marked Ready to Film.
16. Optional: Invoice page demonstrates an overdue payment reminder.

Everything should support this single journey.

## Tech Stack

-   Next.js
-   TypeScript
-   React
-   Tailwind CSS
-   shadcn/ui
-   Lucide Icons
-   Zod
-   React Hook Form
-   Recharts
-   Anthropic Claude API or OpenAI API
-   Mock responses if API unavailable

## Design System

-   White background
-   Modern SaaS design
-   Rounded cards
-   Large spacing
-   Soft purple primary colour
-   No dark theme
-   Responsive
-   Loading, error and empty states

## Pages

-   Landing Page
-   Login (Demo Login)
-   Dashboard
-   Opportunities
-   Opportunity Detail
-   AI Analysis
-   Proposal Builder
-   Research
-   Script Builder
-   Projects
-   Invoice
-   Settings (minimal)

## Dashboard

Show:

-   New Opportunities
-   High Match Opportunities
-   Active Projects
-   Outstanding Payments
-   AI Activity Feed

## Opportunity Agent

Responsibilities:

-   Summarise campaign
-   Extract requirements
-   Detect missing information
-   Estimate difficulty
-   Recommend apply / skip
-   Calculate creator match score

Output includes:

-   Summary
-   Deliverables
-   Platform
-   Usage rights
-   Budget
-   Deadline
-   Risks
-   Questions
-   Suggested pricing

## Pricing Agent

Reason about:

-   Deliverables
-   Revisions
-   Paid usage
-   Raw footage
-   Creator profile

Recommend a negotiation price with explanation.

## Communication Agent

Generate:

-   Clarification email
-   Negotiation email

User must approve before marking as sent.

## Research Agent

Research:

-   Product
-   Pain points
-   Audience
-   Competitors
-   Messaging angles
-   TikTok trends
-   Hook ideas

## Script Agent

Generate:

-   Hook
-   Scene-by-scene script
-   CTA

Editable by the user before approval.

## Finance Agent

Track:

-   Invoice status
-   Due date
-   Overdue invoices

Generate payment reminder.

Do not actually send emails.

## Demo Data

Creator:

Jamie Tan

Niches:

-   Beauty
-   Skincare
-   Lifestyle

Preferred Platforms:

-   TikTok
-   Instagram

Minimum Rate:

SGD 150

### GlowLab Opportunity

Brand: GlowLab

Budget: SGD 250

Platform: TikTok

Description:

Looking for a Singapore-based skincare creator to create one authentic
30-second TikTok promoting our Vitamin C serum. Includes raw footage,
two revisions and three months paid advertising usage.

Expected AI:

Match: 92%

Recommendation:

Apply after clarifying usage rights.

Suggested Rate:

SGD 320

Questions:

-   Is exclusivity required?
-   Which countries are included?
-   Payment timeline?
-   Is raw footage included?

## Architecture

components/ app/ lib/ types/ data/

Keep components reusable.

## Rules

-   Never say "As an AI..."
-   Do not generate placeholder lorem ipsum.
-   Every button should do something.
-   No fake broken UI.
-   Use believable copy.
-   Avoid overengineering.

## Roadmap (Do NOT Build)

-   Video editing
-   Automatic publishing
-   Real Telegram scraping
-   Cold email automation
-   Analytics integrations

Show these only as future features.

## Definition of Done

The MVP is complete when:

-   Demo login works.
-   Dashboard loads.
-   Opportunity analysis works.
-   AI recommendation works.
-   Pricing recommendation works.
-   Email generation works.
-   Research works.
-   Script generation works.
-   Project becomes Ready to Film.
-   Invoice reminder is demonstrated.
-   UI looks like a real SaaS product.
-   Entire demo can be completed in under five minutes.

## Final Instruction

Optimize every design and engineering decision for a polished hackathon
demo rather than feature completeness. If there is a trade-off between
adding another feature and making the existing flow smoother, always
choose polish.
