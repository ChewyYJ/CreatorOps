"use client";

import { useState } from "react";
import { X } from "lucide-react";

import { traceNodes, traceProjects } from "@/data/demo";
import { AgentNode } from "@/types";

function nodeClass(state: AgentNode["state"]) {
  if (state === "active") return "node-active";
  if (state === "complete") return "node-complete";
  return "node-upcoming";
}

export function TraceGraph() {
  const [selected, setSelected] = useState<AgentNode | null>(traceNodes[0]);
  const [projectId, setProjectId] = useState(traceProjects[0].id);
  const selectedProject = traceProjects.find((project) => project.id === projectId) ?? traceProjects[0];

  return (
    <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
      <section className="soft-card rounded-[30px]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="eyebrow">Live Agent Trace</p>
            <h3 className="mt-2 text-[1.9rem] font-semibold tracking-[-0.05em]">Real-time workflow graph</h3>
          </div>
          <label className="flex items-center gap-2 rounded-md border border-black/15 bg-white px-3 py-2 text-sm">
            <span className="text-neutral-500">Project</span>
            <select
              value={projectId}
              onChange={(event) => setProjectId(event.target.value)}
              className="bg-transparent text-sm font-medium outline-none"
            >
              {traceProjects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.label} · {project.status}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid-lines mt-8 rounded-[30px] p-6">
          <div className="space-y-5">
            {traceNodes.map((node, index) => (
              <div key={node.name}>
                <div className="flex justify-center">
                  <button
                    onClick={() => setSelected(node)}
                    className={`min-w-[240px] rounded-[18px] border bg-white px-5 py-4 text-center font-medium ${nodeClass(node.state)}`}
                  >
                    {node.name}
                  </button>
                </div>
                {index < traceNodes.length - 1 ? <div className="mx-auto h-7 w-px bg-black/20" /> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="soft-card rounded-[30px]">
        {selected ? (
          <>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="eyebrow">Node Detail</p>
                <h3 className="mt-2 text-[1.8rem] font-semibold tracking-[-0.05em]">{selected.name}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/8 bg-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-8 space-y-4">
              {[
                ["Current action", selected.currentAction],
                ["Reasoning", selected.reasoning],
                ["Source", selected.source],
                ["Inputs", selected.inputs],
                ["Outputs", selected.outputs],
                ["Timestamp", selected.timestamp],
                ["Related project", selectedProject.label],
                ["Next agent", selected.nextAgent]
              ].map(([label, value]) => (
                <div key={label} className="rounded-[24px] bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-neutral-400">{label}</p>
                  <p className="mt-2 text-sm leading-7 text-neutral-800">{value}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex h-full min-h-[420px] items-center justify-center rounded-[24px] border border-dashed border-black/10 text-center">
            <div>
              <p className="text-lg font-semibold">Select a node</p>
              <p className="body-muted mt-2">Click any stage to inspect its source, inputs, outputs, and next handoff.</p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
