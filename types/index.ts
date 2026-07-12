export type TopNavItem = {
  href: string;
  label: string;
};

export type ApprovalItem = {
  title: string;
  action: string;
  due: string;
  agent: string;
  detail: string;
};

export type AiUpdateItem = {
  title: string;
  detail: string;
  project: string;
};

export type AgentNode = {
  name: string;
  state: "active" | "complete" | "upcoming";
  currentAction: string;
  reasoning: string;
  source: string;
  inputs: string;
  outputs: string;
  timestamp: string;
  project: string;
  nextAgent: string;
};
