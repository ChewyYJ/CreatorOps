export type AgentTemplate = {
  id: string;
  role: string;
  objective: string;
  inputs: string[];
  outputs: string[];
  approvalGate?: string;
};

export const orchestratorTemplate = {
  objective:
    "Coordinate project lifecycle, route context to specialist agents, pause at human approval gates, and write audit events.",
  rules: [
    "Agents do not communicate directly with each other.",
    "Pricing, client messages, creative direction, website updates, and payment reminders require human approval.",
    "Human-owned work such as filming, editing, and social posting is tracked but not automated."
  ]
};

export const agentTemplates: AgentTemplate[] = [
  {
    id: "opportunity-discovery",
    role: "Opportunity Discovery Agent",
    objective: "Find and import relevant UGC opportunities from approved sources.",
    inputs: ["Creator niches", "Preferred platforms", "Location", "Source monitors"],
    outputs: ["Shortlisted opportunity", "Source link", "Shortlisting reason"]
  },
  {
    id: "opportunity-analysis",
    role: "Opportunity Analysis Agent",
    objective: "Summarize brief, extract requirements, identify missing information, and score creator fit.",
    inputs: ["Campaign brief", "Creator profile", "Pricing preferences"],
    outputs: ["Match score", "Requirements", "Risks", "Clarifying questions"]
  },
  {
    id: "business-manager",
    role: "Business Manager Agent",
    objective: "Draft client communication, negotiate terms, and prepare delivery messages.",
    inputs: ["Analysis output", "Creator pricing floor", "Usage rights", "Revision policy"],
    outputs: ["Business plan", "Counter-offer rationale", "Client email draft"],
    approvalGate: "Creator approves before any message is sent."
  },
  {
    id: "finance",
    role: "Finance Agent",
    objective: "Verify deposit/payment status before work begins and track invoices after delivery.",
    inputs: ["Negotiated amount", "Payment terms", "Invoice status"],
    outputs: ["Payment checklist", "Invoice reminder draft", "Receipt verification status"],
    approvalGate: "Creator confirms receipt or approves reminder."
  },
  {
    id: "research",
    role: "Research Agent",
    objective: "Research product, audience, competitors, pain points, and trend context.",
    inputs: ["Approved brief", "Brand category", "Past creator content notes"],
    outputs: ["Audience insights", "Trend notes", "Creative recommendations"]
  },
  {
    id: "creative",
    role: "Creative Agent",
    objective: "Generate hook ideas, shot outline, CTA, captions, and creator-editable direction.",
    inputs: ["Research output", "Brand requirements", "Creator style preferences"],
    outputs: ["Hook pack", "Script outline", "Shot list", "Caption ideas"],
    approvalGate: "Creator edits or approves ideas before filming."
  },
  {
    id: "website-manager",
    role: "Website Manager Agent",
    objective: "Keep the creator's portfolio website updated with approved projects, rates, and proof points.",
    inputs: ["Creator profile", "Approved case studies", "Portfolio settings"],
    outputs: ["Website improvement plan", "Portfolio copy draft", "Case study update"],
    approvalGate: "Creator approves before website changes are published."
  }
];

export const glowlabBusinessPlan = {
  project: "GlowLab / Vitamin C Serum",
  recommendation: "Proceed after payment terms and paid usage scope are clarified.",
  counterAmount: "SGD 320",
  rationale: [
    "The brief includes raw footage, which increases reuse value for the brand.",
    "Three months paid usage should be priced separately from the base deliverable.",
    "Two revision rounds add production and admin time."
  ],
  emailDraft: `Hi GlowLab team,

Thanks for reaching out. I would love to explore this campaign.

Before confirming, could you clarify whether exclusivity is required, which countries are covered under the three-month paid usage, and your payment timeline after approval?

Given the requested TikTok, raw footage, two revisions, and paid usage, my rate for this scope would be SGD 320.

Best,
Jamie`
};

export const glowlabCreativePack = {
  hooks: [
    "My skin looked flat by 3pm, so I changed one step.",
    "The glow test I use before filming skincare content.",
    "If your serum looks good only in bathroom lighting, try this check."
  ],
  trendReferences: [
    {
      title: "Get ready with me skincare proof shot",
      url: "https://www.tiktok.com/search?q=skincare%20grwm%20proof%20shot"
    },
    {
      title: "One product, one week glow diary",
      url: "https://www.tiktok.com/search?q=one%20week%20skincare%20diary"
    },
    {
      title: "Front-camera skin check in natural daylight",
      url: "https://www.tiktok.com/search?q=natural%20light%20skin%20check"
    }
  ],
  reuseGuardrails: [
    "Do not reuse the SkinPure sink-side intro.",
    "Avoid the Nuvia SPF mirror transition.",
    "Keep this concept distinct from Jamie's previous Vitamin C comparison video."
  ]
};

export const paymentReminderDraft = `Hi SkinPure team,

Just a friendly reminder that invoice INV-1048 for SGD 620 was due on 2 July 2026.

Please let me know if payment is already in progress, or if you need me to resend the invoice.

Thank you,
Jamie`;
