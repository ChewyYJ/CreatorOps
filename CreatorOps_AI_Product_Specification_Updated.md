# CreatorOps AI -- Claude Code Product Specification (Updated)

# Mission

Build **CreatorOps AI**, a premium SaaS web application that acts as an
**AI Business Manager for freelance UGC creators**.

The application should feel like a real startup product, not a hackathon
prototype.

The core philosophy is:

> **AI executes. Humans approve.**

The creator focuses on creativity while AI handles repetitive business
operations.

------------------------------------------------------------------------

# Core Architecture

## Orchestrator + Specialist Agents

The platform follows an **Orchestrator-based Multi-Agent Architecture**.

There is **one central Orchestrator** that coordinates all workflows.

The Orchestrator:

-   Receives new events
-   Tracks every project's lifecycle
-   Decides which specialist agent should execute next
-   Passes context between agents
-   Executes independent tasks in parallel where possible
-   Waits for human approval before continuing
-   Maintains complete audit logs

Agents do not communicate directly with one another. All communication
flows through the Orchestrator.

------------------------------------------------------------------------

# High-Level Architecture

``` text
Creator
    │
Human Approval
    │
Orchestrator
├── Opportunity Discovery Agent
├── Opportunity Analysis Agent
├── Business Manager Agent
├── Research Agent
├── Creative Agent
├── Video Editing Agent
├── Analytics Agent
└── Finance Agent
```

------------------------------------------------------------------------

# Multi-Project Support

The same specialist agent can work on multiple projects simultaneously.

Example:

Business Manager Agent

-   GlowLab → Drafting clarification email
-   L'Oréal → Negotiating pricing
-   SkinPure → Following up overdue invoice

Each task has its own state and runs independently.

------------------------------------------------------------------------

# Design System

Theme:

-   White background
-   Black typography
-   Red accent colour
-   Important actions highlighted in red
-   Rounded cards
-   Premium SaaS layout
-   Spacious, minimal UI
-   No dark theme

------------------------------------------------------------------------

# Pages

## 1. Onboarding

Collect:

### Creator Profile

-   Name
-   Location
-   Preferred platforms
-   Content niches
-   Content formats
-   Portfolio URL
-   Social media accounts
-   Experience level

### Business Preferences

-   Minimum project price
-   Preferred project price
-   Raw footage pricing
-   Paid usage pricing
-   Revision pricing

### Creative Preferences

-   Video style
-   Tone of voice
-   Typical video length
-   Preferred editing style
-   On-camera preference
-   Preferred languages

These settings should be editable later.

------------------------------------------------------------------------

## 2. Dashboard

The dashboard is an **Approval Inbox**, not an admin dashboard.

Display only:

### Human Approvals Required

Examples:

-   Approve proposal
-   Approve negotiation email
-   Approve script
-   Approve edited video
-   Approve payment reminder

### AI Updates

-   New opportunity shortlisted
-   Research completed
-   Script generated
-   Invoice overdue

If there are no opportunities:

"Your AI workforce is still monitoring your selected sources."

------------------------------------------------------------------------

## 3. Projects

Tabs:

-   New
-   In Progress
-   Completed

### New

Display shortlisted opportunities.

Each card:

-   Brand
-   Budget
-   Platform
-   Deadline
-   Match score
-   AI recommendation

Hover:

Explain why AI shortlisted it.

Buttons:

-   Take on this project
-   Ignore

Selecting "Take on this project" triggers the workflow.

### In Progress

Each active project is displayed as a folder.

Example:

GlowLab

Show:

-   Progress
-   Current stage
-   Current working agent
-   Human approval indicator
-   Deadline
-   Budget

### Completed

Display projects that are:

-   Delivered
-   Paid
-   Archived

------------------------------------------------------------------------

# Project Workflow

Each project follows this lifecycle.

Opportunity Accepted

↓

Business Strategy (Business Manager Agent)

-   Clarify requirements
-   Negotiate pricing
-   Request missing information

↓

Research (Research Agent)

-   Product
-   Audience
-   Pain points
-   Competitors
-   Trends
-   Creative recommendations

↓

Creative Development (Creative Agent)

-   Hooks
-   Script
-   Shot list
-   CTA
-   Captions

Creator approves.

↓

Video Production (Video Editing Agent)

-   Process uploaded footage
-   Captions
-   Music suggestions
-   Initial edit

Creator edits and approves.

↓

Client Delivery (Business Manager Agent)

-   Draft delivery email
-   Deliver assets
-   Manage revisions
-   Optional publishing

↓

Analytics (Analytics Agent)

-   Analyse performance
-   Learn from successful content
-   Recommend improvements

↓

Finance (Finance Agent)

-   Track invoices
-   Track payments
-   Detect overdue invoices
-   Draft reminders

Creator approves reminders.

Display a progress bar showing completed, active and upcoming stages.

------------------------------------------------------------------------

# AI Workforce

(Previously "View Your Team")

Display horizontal cards for:

1.  Opportunity Discovery Agent
2.  Opportunity Analysis Agent
3.  Business Manager Agent
4.  Research Agent
5.  Creative Agent
6.  Video Editing Agent
7.  Analytics Agent
8.  Finance Agent

Each card shows:

-   Description
-   Current status
-   Active tasks
-   Completed tasks
-   Configure button

Example settings:

Business Manager

-   Minimum pricing
-   Negotiation style
-   Email tone
-   Follow-up frequency

Creative

-   Hook style
-   Tone
-   Video length

Research

-   Preferred sources
-   Research depth

------------------------------------------------------------------------

# Live Agent Trace

Below the AI Workforce cards, display a real-time workflow graph.

Orchestrator

↓

Opportunity Discovery

↓

Opportunity Analysis

↓

Business Manager

↙ ↘

Research Pricing

↓

Creative

↓

Video Editing

↓

Business Manager

↓

Analytics

↓

Finance

When active:

-   Yellow glow
-   Red border
-   Pulse animation

Clicking any node opens a modal displaying:

-   Current action
-   Source
-   Inputs
-   Outputs
-   Timestamp
-   Related project
-   Next agent

Example:

Opportunity Discovery Agent

Current Action: Pulled opportunities from Telegram.

Reason: Matches creator preferences.

Output: Created GlowLab project.

Forwarded to: Opportunity Analysis Agent.

------------------------------------------------------------------------

# Dashboard Philosophy

The creator should never manually manage tasks.

AI continuously works in the background.

The creator only intervenes for:

-   Pricing approvals
-   Script approvals
-   Video approvals
-   Payment approvals

Everything else is autonomous.

------------------------------------------------------------------------

# Definition of Done

The MVP demonstrates:

-   Creator onboarding
-   Approval-first dashboard
-   Multi-project support
-   Orchestrator architecture
-   Eight specialist agents
-   AI Workforce page
-   Live agent trace
-   Project progress tracking
-   Human-in-the-loop approvals
-   Premium red, black and white SaaS UI
