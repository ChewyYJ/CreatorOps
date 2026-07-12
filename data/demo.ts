import { AgentNode } from "@/types";

export const topNavigation = [
  { href: "/dashboard", label: "Approval Inbox" },
  { href: "/projects", label: "Projects" },
  { href: "/workforce", label: "AI Workforce" },
  { href: "/settings", label: "Settings" }
];

export const creatorProfile = {
  name: "Jamie Tan",
  location: "Singapore",
  platforms: ["TikTok", "Instagram", "YouTube Shorts"],
  niches: ["Skincare", "Beauty", "Lifestyle"],
  formats: ["UGC Ads", "Product Demo", "Voiceover"],
  portfolioUrl: "jamietan.co/ugc",
  experience: "3 years"
};

export const landingCards = [
  { title: "Approvals", subtitle: "Creator in control", tone: "red", rotate: -10 },
  { title: "Projects", subtitle: "Multi-brand orchestration", tone: "white", rotate: -3 },
  { title: "Research", subtitle: "Audience and trends", tone: "sand", rotate: 4 },
  { title: "Creative", subtitle: "Hooks and scripts", tone: "black", rotate: 8 },
  { title: "Finance", subtitle: "Invoices and reminders", tone: "red", rotate: 14 }
];

export const dashboardApprovals = [
  {
    title: "GlowLab / Vitamin C Serum",
    action: "Negotiation email",
    due: "Today, 2:00 PM",
    agent: "Business Manager Agent",
    detail: "AI clarified usage rights questions and raised the quote from SGD 250 to SGD 320."
  },
  {
    title: "L'Oreal / Elseve Serum",
    action: "Script approval",
    due: "Today, 4:30 PM",
    agent: "Creative Agent",
    detail: "Three hook options, one 30-second script, and a shot list are ready for sign-off."
  },
  {
    title: "SkinPure / April Retainer",
    action: "Payment reminder",
    due: "Tomorrow, 10:00 AM",
    agent: "Finance Agent",
    detail: "Invoice is 9 days overdue. AI drafted a friendly first reminder based on your preferred tone."
  },
  {
    title: "Nuvia / SPF Mist Launch",
    action: "Film upload checklist",
    due: "Tomorrow, 1:00 PM",
    agent: "Human task",
    detail: "AI prepared filming inspiration and a checklist. Jamie confirms once filming and editing are done."
  },
  {
    title: "Ever Dew / Barrier Cream",
    action: "Project acceptance",
    due: "Fri, 11:30 AM",
    agent: "Opportunity Analysis Agent",
    detail: "AI shortlisted this project with an 88% fit score and clean deliverables."
  }
];

export const aiUpdates = [
  {
    title: "New opportunity shortlisted",
    detail: "Opportunity Discovery found a high-fit skincare brief from GlowLab on Telegram.",
    project: "GlowLab"
  },
  {
    title: "Research completed",
    detail: "Audience pain points, competitor angles, and TikTok hooks prepared for L'Oréal.",
    project: "L'Oréal"
  },
  {
    title: "Filming checklist prepared",
    detail: "Creative Agent prepared inspiration and a creator-owned filming checklist for Nuvia.",
    project: "Nuvia"
  },
  {
    title: "Invoice overdue",
    detail: "Finance Agent flagged SkinPure invoice as overdue and prepared a reminder draft.",
    project: "SkinPure"
  }
];

export const projectColumns = {
  new: [
    {
      brand: "GlowLab",
      budget: "SGD 250",
      platform: "TikTok",
      deadline: "18 Jul 2026",
      matchScore: 92,
      source: "Telegram: @sgcreatorbriefs",
      sourceUrl: "https://t.me/sgcreatorbriefs",
      contentType: "Skincare UGC product demo",
      deliverables: "1 x 30-second TikTok video, raw footage, 2 revisions",
      recommendation: "Take on after clarifying paid usage countries and payment timeline.",
      reason:
        "High skincare fit, Singapore-based requirement matches profile, but raw footage and paid usage are undervalued."
    },
    {
      brand: "Ever Dew",
      budget: "SGD 420",
      platform: "Instagram Reels",
      deadline: "21 Jul 2026",
      matchScore: 88,
      source: "Telegram: @beautybrandbriefs",
      sourceUrl: "https://t.me/beautybrandbriefs",
      contentType: "Barrier cream testimonial reel",
      deliverables: "2 x Instagram Reels, 1 usage cutdown, 1 revision",
      recommendation: "Take on. Strong budget with clean deliverables.",
      reason: "Beauty niche overlap, premium skincare positioning, and no exclusivity conflicts detected."
    }
  ],
  inProgress: [
    {
      brand: "GlowLab",
      progress: 32,
      stage: "Business Strategy",
      agent: "Business Manager Agent",
      approval: "Email approval required",
      deadline: "18 Jul 2026",
      budget: "SGD 320 proposed",
      auditTrail: [
        "Opportunity accepted and routed by Orchestrator",
        "Usage rights risk identified by Opportunity Analysis Agent",
        "Negotiation email drafted by Business Manager Agent",
        "Finance Agent prepared deposit verification checklist"
      ]
    },
    {
      brand: "L'Oreal",
      progress: 58,
      stage: "Creative Development",
      agent: "Creative Agent",
      approval: "Script approval required",
      deadline: "25 Jul 2026",
      budget: "SGD 780 confirmed",
      auditTrail: [
        "Research Agent completed audience and competitor analysis",
        "Creative Agent generated three hooks",
        "Shot list and CTA are waiting for approval"
      ]
    },
    {
      brand: "Nuvia",
      progress: 76,
      stage: "Video Production",
      agent: "Human task",
      approval: "Creator filming confirmation pending",
      deadline: "14 Jul 2026",
      budget: "SGD 540 confirmed",
      auditTrail: [
        "Script approved by creator",
        "Filming inspiration prepared by Creative Agent",
        "Waiting for creator to confirm filming and editing are complete"
      ]
    }
  ],
  completed: [
    {
      brand: "SkinPure",
      status: "Delivered and paid",
      summary: "UGC bundle delivered, invoice cleared, and case study queued for website update."
    },
    {
      brand: "Maison Rue",
      status: "Archived",
      summary: "Whitelisting campaign completed and archived after final reporting."
    }
  ]
};

export const workflowStages = [
  "Opportunity Accepted",
  "Business Strategy",
  "Research",
  "Creative Development",
  "Human Video Creation",
  "Client Delivery",
  "Finance",
  "Website Update"
];

export const workforceAgents = [
  {
    name: "Opportunity Scout",
    role: "Opportunity Discovery Agent",
    description: "Monitors Telegram, email, and inbound sources for relevant creator opportunities.",
    status: "Active",
    activeProject: "GlowLab",
    completedProjects: ["SkinPure", "Maison Rue"]
  },
  {
    name: "Opportunity Analyst",
    role: "Opportunity Analysis Agent",
    description: "Scores creator fit, extracts risk, and highlights missing information.",
    status: "Active",
    activeProject: "Ever Dew",
    completedProjects: ["GlowLab", "Nuvia"]
  },
  {
    name: "Business Manager",
    role: "Business Manager Agent",
    description: "Handles pricing logic, negotiation drafts, delivery email drafts, and revisions.",
    status: "Active",
    activeProject: "GlowLab",
    completedProjects: ["SkinPure", "Maison Rue"]
  },
  {
    name: "Market Researcher",
    role: "Research Agent",
    description: "Builds product, audience, trend, and competitor context before creative work begins.",
    status: "Active",
    activeProject: "L'Oreal",
    completedProjects: ["GlowLab", "SkinPure"]
  },
  {
    name: "Creative Director",
    role: "Creative Agent",
    description: "Generates hooks, scripts, shot lists, captions, and CTA suggestions.",
    status: "Active",
    activeProject: "L'Oreal",
    completedProjects: ["GlowLab", "Maison Rue"]
  },
  {
    name: "Finance Manager",
    role: "Finance Agent",
    description: "Tracks invoice states, payment delays, and drafts reminders for approval.",
    status: "Active",
    activeProject: "SkinPure",
    completedProjects: ["GlowLab", "Maison Rue"]
  },
  {
    name: "Website Manager",
    role: "Website Manager Agent",
    description: "Maintains the creator portfolio website with approved projects, proof points, and case studies.",
    status: "Active",
    activeProject: "Jamie portfolio",
    completedProjects: ["SkinPure", "Maison Rue"]
  }
];

export const traceNodes: AgentNode[] = [
  {
    name: "Orchestrator",
    state: "active",
    currentAction: "Routing GlowLab project to Business Manager Agent.",
    reasoning:
      "GlowLab has been accepted, so the next safest step is to clarify scope and pricing before any research or creative work begins.",
    source: "Opportunity acceptance",
    inputs: "Creator pricing preferences, analysis output, budget details",
    outputs: "Negotiation brief and clarification checklist",
    timestamp: "12 Jul 2026, 12:41 PM",
    project: "GlowLab",
    nextAgent: "Business Manager Agent"
  },
  {
    name: "Opportunity Discovery",
    state: "complete",
    currentAction: "Pulled new Telegram opportunities.",
    reasoning:
      "GlowLab matches Jamie's skincare niche, Singapore location, and preferred TikTok format.",
    source: "Telegram source monitor",
    inputs: "Creator preferences and location filters",
    outputs: "GlowLab shortlist",
    timestamp: "12 Jul 2026, 12:10 PM",
    project: "GlowLab",
    nextAgent: "Opportunity Analysis Agent"
  },
  {
    name: "Opportunity Analysis",
    state: "complete",
    currentAction: "Calculated creator match and risk summary.",
    reasoning:
      "The project is high fit, but paid usage, raw footage, and payment timeline need clarification.",
    source: "Project intake brief",
    inputs: "Campaign description and creator profile",
    outputs: "92% fit and risk notes",
    timestamp: "12 Jul 2026, 12:18 PM",
    project: "GlowLab",
    nextAgent: "Business Manager Agent"
  },
  {
    name: "Business Manager",
    state: "active",
    currentAction: "Drafting clarification and negotiation email.",
    reasoning:
      "The customer budget is below the creator's preferred value once usage rights and raw footage are included.",
    source: "Orchestrator handoff",
    inputs: "Pricing preferences, usage rights, raw footage request",
    outputs: "Approval draft ready",
    timestamp: "12 Jul 2026, 12:41 PM",
    project: "GlowLab",
    nextAgent: "Human approval"
  },
  {
    name: "Finance",
    state: "active",
    currentAction: "Preparing deposit and receipt verification checklist.",
    reasoning:
      "Work should not start until payment terms are confirmed and the creator has a clear receipt trail.",
    source: "Business Manager handoff",
    inputs: "Counter amount, payment timeline, creator payment preference",
    outputs: "Deposit request checklist",
    timestamp: "12 Jul 2026, 12:45 PM",
    project: "GlowLab",
    nextAgent: "Research Agent"
  },
  {
    name: "Pricing",
    state: "complete",
    currentAction: "Proposed SGD 320 with explanation.",
    reasoning:
      "SGD 320 accounts for paid usage, raw footage, and two rounds of revision without overpricing the brief.",
    source: "Business rules",
    inputs: "Usage, revisions, raw footage",
    outputs: "Negotiation range",
    timestamp: "12 Jul 2026, 12:33 PM",
    project: "GlowLab",
    nextAgent: "Business Manager Agent"
  },
  {
    name: "Research",
    state: "active",
    currentAction: "Preparing product, audience, competitor, and trend context.",
    reasoning:
      "Research and creative can run in parallel after business terms are approved, but output still waits for creator review.",
    source: "Workflow stage planner",
    inputs: "Approved business scope and brand brief",
    outputs: "Audience insights and trend references",
    timestamp: "12 Jul 2026, 1:02 PM",
    project: "GlowLab",
    nextAgent: "Creative Agent"
  },
  {
    name: "Creative",
    state: "active",
    currentAction: "Generating hook ideas, shot outline, and CTA options.",
    reasoning:
      "The hooks must feel distinct from Jamie's previous skincare videos and match current TikTok proof-shot formats.",
    source: "Workflow graph",
    inputs: "Research output",
    outputs: "Creative pack",
    timestamp: "—",
    project: "GlowLab",
    nextAgent: "Human video creation"
  },
  {
    name: "Human Video Creation",
    state: "upcoming",
    currentAction: "Waiting for creator to film and edit the final video.",
    reasoning:
      "Creator-owned filming and editing preserves human style and avoids taking control of personal social accounts.",
    source: "Creator task",
    inputs: "Approved creative plan and creator footage",
    outputs: "Creator-confirmed final video",
    timestamp: "—",
    project: "GlowLab",
    nextAgent: "Business Manager Agent"
  },
  {
    name: "Website Manager",
    state: "upcoming",
    currentAction: "Will prepare a portfolio update after delivery approval.",
    reasoning:
      "The creator website should only be updated with approved work, proof points, and public-facing claims.",
    source: "Workflow graph",
    inputs: "Approved case study and creator website settings",
    outputs: "Website improvement draft",
    timestamp: "—",
    project: "GlowLab",
    nextAgent: "Project archive"
  }
];

export const traceProjects = [
  { id: "glowlab", label: "GlowLab", status: "In progress" },
  { id: "loreal", label: "L'Oreal", status: "In progress" },
  { id: "nuvia", label: "Nuvia", status: "In progress" },
  { id: "skinpure", label: "SkinPure", status: "Completed" },
  { id: "maison-rue", label: "Maison Rue", status: "Completed" }
];

export const onboardingSections = [
  {
    title: "Creator Profile",
    items: [
      "Name",
      "Location",
      "Preferred platforms",
      "Content niches",
      "Content formats",
      "Portfolio URL",
      "Social media accounts",
      "Experience level"
    ]
  },
  {
    title: "Business Preferences",
    items: [
      "Minimum project price",
      "Preferred project price",
      "Raw footage pricing",
      "Paid usage pricing",
      "Revision pricing"
    ]
  },
  {
    title: "Creative Preferences",
    items: [
      "Video style",
      "Tone of voice",
      "Typical video length",
      "Preferred editing style",
      "On-camera preference",
      "Preferred languages"
    ]
  }
];

export const settingsGroups = [
  {
    title: "Business Manager",
    fields: ["Minimum pricing", "Negotiation style", "Email tone", "Follow-up frequency"]
  },
  {
    title: "Creative",
    fields: ["Hook style", "Tone", "Video length"]
  },
  {
    title: "Research",
    fields: ["Preferred sources", "Research depth"]
  }
];
