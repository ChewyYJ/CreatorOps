"use client";

import { useState } from "react";
import { Bot, Send, X } from "lucide-react";

export function FloatingAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {open ? (
        <div className="mb-3 w-[320px] rounded-lg border border-black/15 bg-white p-4 shadow-2xl">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-black text-white">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold">CreatorOps Assistant</p>
                <p className="text-xs text-neutral-500">Ask about projects, agents, or approvals</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-black/15"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 rounded-lg bg-[#f7f5f2] p-3 text-sm leading-6 text-neutral-700">
            What would you like to understand about your workflow?
          </div>

          <div className="mt-3 flex gap-2">
            <input
              placeholder="Ask anything..."
              className="min-w-0 flex-1 rounded-md border border-black/15 px-3 py-2 text-sm outline-none focus:border-black"
            />
            <button
              type="button"
              aria-label="Send question"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#e84133] text-white"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Open assistant"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white shadow-2xl"
      >
        <Bot className="h-6 w-6" />
      </button>
    </div>
  );
}
