"use client";

import { useState } from "react";
import { CheckCircle2, Clock3, ExternalLink, FolderOpen, Search, X } from "lucide-react";

import { projectColumns } from "@/data/demo";
import { agentTemplates, glowlabBusinessPlan, glowlabCreativePack } from "@/lib/agents/templates";

type ProjectTab = "new" | "inProgress" | "completed";

const tabs: Array<{ id: ProjectTab; label: string; count: number }> = [
  { id: "new", label: "New", count: projectColumns.new.length },
  { id: "inProgress", label: "In Progress", count: projectColumns.inProgress.length },
  { id: "completed", label: "Completed", count: projectColumns.completed.length }
];

export function ProjectBoard() {
  const [activeTab, setActiveTab] = useState<ProjectTab>("new");
  const [selectedProject, setSelectedProject] = useState(projectColumns.inProgress[0]);
  const [sourceProject, setSourceProject] = useState<(typeof projectColumns.new)[number] | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [selectedAgentId, setSelectedAgentId] = useState("business-manager");
  const selectedAgent = agentTemplates.find((agent) => agent.id === selectedAgentId) ?? agentTemplates[2];

  return (
    <div>
      <div className="mb-5 flex flex-wrap items-center gap-2 border-b border-black/15 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium ${
              activeTab === tab.id ? "bg-black text-white" : "border border-black/15 bg-white text-black"
            }`}
          >
            {tab.label}
            <span className={activeTab === tab.id ? "text-white/70" : "text-neutral-500"}>{tab.count}</span>
          </button>
        ))}
      </div>

      {activeTab === "new" && (
        <div className="grid gap-4 xl:grid-cols-2">
          {projectColumns.new.map((project) => (
            <article key={project.brand} className="rounded-lg border border-black/15 bg-white p-5 transition hover:border-[#e84133]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{project.brand}</h3>
                  <p className="mt-1 text-sm text-neutral-500">{project.platform}</p>
                </div>
                <span className="pill-accent px-3 py-1.5 text-[11px]">{project.matchScore}% match</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-neutral-500">Budget</p>
                  <p className="font-medium">{project.budget}</p>
                </div>
                <div>
                  <p className="text-neutral-500">Deadline</p>
                  <p className="font-medium">{project.deadline}</p>
                </div>
              </div>
              <div className="mt-4 grid gap-3 text-sm md:grid-cols-2">
                <div className="rounded-md border border-black/10 bg-[#f7f5f2] p-3">
                  <p className="text-neutral-500">Content type</p>
                  <p className="mt-1 font-medium leading-6">{project.contentType}</p>
                </div>
                <div className="rounded-md border border-black/10 bg-[#f7f5f2] p-3">
                  <p className="text-neutral-500">Deliverables</p>
                  <p className="mt-1 font-medium leading-6">{project.deliverables}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-neutral-700">{project.recommendation}</p>
              <div className="mt-4 rounded-md border border-black/10 bg-white p-4 text-sm leading-6 text-neutral-700">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">AI shortlist reason</p>
                {project.reason}
              </div>
              <div className="mt-5 flex gap-2">
                <button className="inline-flex items-center gap-2 rounded-md bg-[#e84133] px-4 py-2 text-sm font-medium text-white">
                  <FolderOpen className="h-4 w-4" />
                  Take on this project
                </button>
                <button
                  type="button"
                  onClick={() => setSourceProject(project)}
                  className="rounded-md border border-black/15 bg-white px-4 py-2 text-sm font-medium"
                >
                  View details
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {activeTab === "inProgress" && (
        <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            {projectColumns.inProgress.map((project) => (
              <button
                key={project.brand}
                type="button"
                onClick={() => setSelectedProject(project)}
                className={`w-full rounded-lg border bg-white p-5 text-left transition ${
                  selectedProject.brand === project.brand ? "border-[#e84133]" : "border-black/15"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{project.brand}</h3>
                    <p className="mt-1 text-sm text-neutral-500">{project.stage}</p>
                  </div>
                  <span className="pill px-3 py-1.5 text-[11px]">{project.agent}</span>
                </div>
                <div className="mt-4 rounded-full border border-black/20 bg-white p-0.5">
                  <div className="h-2 rounded-full bg-[#e84133]" style={{ width: `${project.progress}%` }} />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-neutral-500">Approval</p>
                    <p className="font-medium">{project.approval}</p>
                  </div>
                  <div>
                    <p className="text-neutral-500">Budget</p>
                    <p className="font-medium">{project.budget}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <aside className="rounded-lg border border-black/15 bg-white p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Agent timeline</p>
                <h3 className="mt-2 text-xl font-semibold">{selectedProject.brand}</h3>
              </div>
              <span className="pill px-3 py-1.5 text-[11px]">{selectedProject.progress}% complete</span>
            </div>
            <div className="mt-5 space-y-4 border-l border-black/20 pl-4">
              {selectedProject.auditTrail.map((item, index) => (
                <div key={item} className="relative">
                  <span className="absolute -left-[23px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white">
                    {index === selectedProject.auditTrail.length - 1 ? (
                      <Clock3 className="h-4 w-4 text-[#e84133]" />
                    ) : (
                      <CheckCircle2 className="h-4 w-4 text-black" />
                    )}
                  </span>
                  <p className="text-sm leading-6 text-neutral-800">{item}</p>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setDetailOpen(true)}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white"
            >
              <Search className="h-4 w-4" />
              Learn more
            </button>
          </aside>
        </div>
      )}

      {activeTab === "completed" && (
        <div className="grid gap-4 xl:grid-cols-2">
          {projectColumns.completed.map((project) => (
            <article key={project.brand} className="rounded-lg border border-black/15 bg-white p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold">{project.brand}</h3>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-black/15 px-3 py-1.5 text-xs">
                  <X className="h-3.5 w-3.5" />
                  {project.status}
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-neutral-700">{project.summary}</p>
            </article>
          ))}
        </div>
      )}

      {sourceProject ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-lg border border-black/15 bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Opportunity Source</p>
                <h3 className="mt-2 text-2xl font-semibold">{sourceProject.brand}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSourceProject(null)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/15"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-5 space-y-3 text-sm leading-6">
              <p><span className="text-neutral-500">Source:</span> {sourceProject.source}</p>
              <p><span className="text-neutral-500">Content type:</span> {sourceProject.contentType}</p>
              <p><span className="text-neutral-500">Deliverables:</span> {sourceProject.deliverables}</p>
              <p><span className="text-neutral-500">Why shortlisted:</span> {sourceProject.reason}</p>
              <a
                href={sourceProject.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-black/15 px-4 py-2 font-medium"
              >
                Open source link
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      ) : null}

      {detailOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 backdrop-blur-sm">
          <div className="max-h-[86vh] w-full max-w-4xl overflow-y-auto rounded-lg border border-black/15 bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Project Audit</p>
                <h3 className="mt-2 text-2xl font-semibold">{selectedProject.brand}</h3>
              </div>
              <button
                type="button"
                onClick={() => setDetailOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/15"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 grid gap-5 xl:grid-cols-[0.75fr_1.25fr]">
              <div className="space-y-2">
                {agentTemplates.map((agent) => (
                  <button
                    key={agent.id}
                    type="button"
                    onClick={() => setSelectedAgentId(agent.id)}
                    className={`w-full rounded-md border px-4 py-3 text-left text-sm ${
                      selectedAgentId === agent.id ? "border-[#e84133] bg-[#fff2f0]" : "border-black/15"
                    }`}
                  >
                    {agent.role}
                  </button>
                ))}
              </div>

              <section className="rounded-lg border border-black/15 p-5">
                <p className="eyebrow">Agent Decision</p>
                <h4 className="mt-2 text-xl font-semibold">{selectedAgent.role}</h4>
                <p className="mt-3 text-sm leading-6 text-neutral-700">{selectedAgent.objective}</p>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold">Outputs</p>
                    <div className="mt-2 space-y-2">
                      {selectedAgent.outputs.map((item) => (
                        <p key={item} className="rounded-md bg-[#f7f5f2] p-3 text-sm">{item}</p>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Human review</p>
                    <div className="mt-2 space-y-2">
                      <p className="rounded-md bg-[#f7f5f2] p-3 text-sm">
                        Approved: {selectedAgent.id === "business-manager" ? glowlabBusinessPlan.counterAmount : "Pending or not required"}
                      </p>
                      <p className="rounded-md bg-[#f7f5f2] p-3 text-sm">
                        Changed by human: {selectedAgent.id === "creative" ? "Hook can be edited before approval" : "None in current demo"}
                      </p>
                      <p className="rounded-md bg-[#f7f5f2] p-3 text-sm">
                        Executed: {selectedAgent.approvalGate ? "Waiting for approval gate" : "Logged to audit trail"}
                      </p>
                    </div>
                  </div>
                </div>

                {selectedAgent.id === "business-manager" ? (
                  <div className="mt-5 rounded-lg border border-black/15 p-4">
                    <p className="text-sm font-semibold">Business email draft</p>
                    <pre className="mt-3 whitespace-pre-wrap text-sm leading-6 text-neutral-800">{glowlabBusinessPlan.emailDraft}</pre>
                  </div>
                ) : null}

                {selectedAgent.id === "creative" ? (
                  <div className="mt-5 rounded-lg border border-black/15 p-4">
                    <p className="text-sm font-semibold">Creative hook pack</p>
                    <div className="mt-3 space-y-2">
                      {glowlabCreativePack.hooks.map((hook) => (
                        <p key={hook} className="rounded-md bg-[#f7f5f2] p-3 text-sm">{hook}</p>
                      ))}
                    </div>
                  </div>
                ) : null}
              </section>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
