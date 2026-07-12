"use client";

import { useState } from "react";
import { CheckCircle2, Info, X } from "lucide-react";

import { workforceAgents } from "@/data/demo";

type Agent = (typeof workforceAgents)[number];

export function WorkforceGrid() {
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">AI Workforce</p>
          <h2 className="mt-2 text-xl font-semibold text-black">Your team</h2>
        </div>
        <span className="pill">{workforceAgents.length} agents</span>
      </div>

      <div className="-mx-2 flex snap-x gap-4 overflow-x-auto px-2 pb-4">
        {workforceAgents.map((agent) => (
          <article
            key={agent.role}
            className="w-[320px] flex-none snap-start rounded-lg border border-black/15 bg-white p-5 md:w-[360px]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-black">{agent.name}</h3>
                <p className="mt-1 text-sm text-neutral-500">{agent.role}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAgent(agent)}
                aria-label={`View ${agent.name} details`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/15 bg-white text-black"
              >
                <Info className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-4 min-h-[72px] text-sm leading-6 text-neutral-700">{agent.description}</p>

            <div className="mt-5 grid grid-cols-3 overflow-hidden rounded-lg border border-black/15">
              <div className="border-r border-black/15 p-3">
                <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-500">Status</p>
                <p className={`mt-2 text-sm font-medium ${agent.status === "Active" ? "text-[#e84133]" : "text-neutral-500"}`}>
                  {agent.status}
                </p>
              </div>
              <div className="border-r border-black/15 p-3">
                <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-500">Active</p>
                <p className="mt-2 text-sm font-medium">{agent.activeProject}</p>
              </div>
              <div className="p-3">
                <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-500">Completed</p>
                <div className="mt-2 space-y-1.5">
                  {agent.completedProjects.slice(0, 2).map((project) => (
                    <p key={project} className="flex items-center gap-1.5 text-sm font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-black" />
                      {project}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedAgent ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-lg border border-black/15 bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-black">{selectedAgent.name}</h3>
                <p className="mt-1 text-sm text-neutral-500">{selectedAgent.role}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAgent(null)}
                aria-label="Close agent details"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/15 bg-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-5 text-sm leading-7 text-neutral-700">{selectedAgent.description}</p>

            <div className="mt-6 grid grid-cols-3 overflow-hidden rounded-lg border border-black/15">
              <div className="border-r border-black/15 p-4">
                <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-500">Status</p>
                <p className="mt-2 text-sm font-medium">{selectedAgent.status}</p>
              </div>
              <div className="border-r border-black/15 p-4">
                <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-500">Active</p>
                <p className="mt-2 text-sm font-medium">{selectedAgent.activeProject}</p>
              </div>
              <div className="p-4">
                <p className="text-[10px] uppercase tracking-[0.16em] text-neutral-500">Completed</p>
                <div className="mt-2 space-y-2">
                  {selectedAgent.completedProjects.map((project) => (
                    <p key={project} className="flex items-center gap-1.5 text-sm font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      {project}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedAgent(null)}
              className="mt-6 rounded-md bg-black px-4 py-2 text-sm font-medium text-white"
            >
              Done
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
