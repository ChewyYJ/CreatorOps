"use client";

import { useState } from "react";
import { ExternalLink, Globe2, Settings, Wand2, X } from "lucide-react";

import { creatorProfile } from "@/data/demo";

export function UserMenu() {
  const [open, setOpen] = useState(false);
  const [websitePanel, setWebsitePanel] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="hidden rounded-full border border-black/10 bg-white px-4 py-2 text-left md:block"
      >
        <p className="text-sm font-medium">{creatorProfile.name}</p>
        <p className="text-xs text-neutral-500">{creatorProfile.location}</p>
      </button>

      {open ? (
        <div className="absolute right-0 top-14 z-50 w-64 rounded-lg border border-black/15 bg-white p-2 shadow-2xl">
          <a
            href="/settings"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-[#f7f5f2]"
          >
            <Settings className="h-4 w-4" />
            User settings
          </a>
          <button
            type="button"
            onClick={() => setWebsitePanel(true)}
            className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-medium hover:bg-[#f7f5f2]"
          >
            <Globe2 className="h-4 w-4" />
            Personal website
          </button>
          <button
            type="button"
            onClick={() => setWebsitePanel(true)}
            className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-medium hover:bg-[#f7f5f2]"
          >
            <Wand2 className="h-4 w-4" />
            Rework my website
          </button>
        </div>
      ) : null}

      {websitePanel ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-lg border border-black/15 bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Website Manager Agent</p>
                <h3 className="mt-2 text-2xl font-semibold">Jamie portfolio</h3>
              </div>
              <button
                type="button"
                onClick={() => setWebsitePanel(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/15"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 space-y-3 text-sm leading-6 text-neutral-700">
              <p>
                The website agent can update a creator portfolio only if the user connects a managed website,
                CMS, or hosting integration. For the demo, it prepares copy and layout recommendations for approval.
              </p>
              <p className="rounded-md bg-[#f7f5f2] p-3">
                Suggested update: add GlowLab as a skincare case study after delivery and payment confirmation.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={`https://${creatorProfile.portfolioUrl}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-black/15 px-4 py-2 text-sm font-medium"
              >
                Open website
                <ExternalLink className="h-4 w-4" />
              </a>
              <button className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white">
                <Wand2 className="h-4 w-4" />
                Draft rework plan
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
