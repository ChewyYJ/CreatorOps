"use client";

import { useState } from "react";
import { ArrowRight, Check, ExternalLink, Paperclip, RefreshCw, Wand2, X } from "lucide-react";

import { glowlabBusinessPlan, glowlabCreativePack, paymentReminderDraft } from "@/lib/agents/templates";
import { ApprovalItem } from "@/types";

export function ApprovalCard({ title, action, due, agent, detail }: ApprovalItem) {
  const [open, setOpen] = useState(false);
  const [approved, setApproved] = useState(false);
  const [editedHook, setEditedHook] = useState(glowlabCreativePack.hooks[0]);
  const [businessEmail, setBusinessEmail] = useState(glowlabBusinessPlan.emailDraft);
  const [paymentEmail, setPaymentEmail] = useState(paymentReminderDraft);
  const [agentComment, setAgentComment] = useState("");

  const isBusinessApproval = action === "Negotiation email";
  const isCreativeApproval = action === "Script approval";
  const isPaymentApproval = action === "Payment reminder";

  const activeEmail = isPaymentApproval ? paymentEmail : businessEmail;
  const setActiveEmail = isPaymentApproval ? setPaymentEmail : setBusinessEmail;

  function improveEmail() {
    const comment = agentComment.trim();
    if (!comment) return;
    setActiveEmail(`${activeEmail}\n\nAgent update based on creator comment: ${comment}`);
    setAgentComment("");
  }

  function approve() {
    setApproved(true);
    if (isBusinessApproval) {
      window.localStorage.setItem(
        "creatorops:glowlab-business-approval",
        JSON.stringify({
          approvedAt: new Date().toISOString(),
          counterAmount: glowlabBusinessPlan.counterAmount,
          emailDraft: glowlabBusinessPlan.emailDraft
        })
      );
    }
    setOpen(false);
  }

  return (
    <>
      <div className="soft-card flex h-[300px] flex-col rounded-lg p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="pill-accent px-3 py-1.5 text-[11px]">Approval</span>
          <span className="text-[11px] uppercase tracking-[0.18em] text-neutral-500">{due}</span>
        </div>

        <h3 className="mt-4 text-xl font-semibold text-black">{title}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="pill px-3 py-1.5 text-[11px]">{action}</span>
          <span className="pill px-3 py-1.5 text-[11px]">{agent}</span>
        </div>

        <p className="mt-4 line-clamp-3 text-sm leading-6 text-neutral-700">{detail}</p>

        <div className="mt-auto grid grid-cols-2 gap-2 pt-5">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center gap-1.5 rounded-md bg-[#e84133] px-3 py-2 text-xs font-medium text-white"
          >
            <ArrowRight className="h-3.5 w-3.5" />
            Review
          </button>
          <button
            type="button"
            onClick={approve}
            className="inline-flex items-center justify-center gap-1.5 rounded-md bg-black px-3 py-2 text-xs font-medium text-white"
          >
            <Check className="h-3.5 w-3.5" />
            {approved ? "Approved" : "Approve"}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4 backdrop-blur-sm">
          <div className="max-h-[86vh] w-full max-w-3xl overflow-y-auto rounded-lg border border-black/15 bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">Approval Review</p>
                <h3 className="mt-2 text-2xl font-semibold text-black">{title}</h3>
                <p className="mt-1 text-sm text-neutral-500">{action} by {agent}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/15"
                aria-label="Close approval review"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {isBusinessApproval ? (
              <div className="mt-6 grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
                <section className="rounded-lg border border-black/15 p-4">
                  <h4 className="text-sm font-semibold">Business plan</h4>
                  <p className="mt-3 text-sm leading-6 text-neutral-700">{glowlabBusinessPlan.recommendation}</p>
                  <p className="mt-4 text-sm font-semibold">Counter amount: {glowlabBusinessPlan.counterAmount}</p>
                  <div className="mt-4 space-y-2">
                    {glowlabBusinessPlan.rationale.map((item) => (
                      <p key={item} className="rounded-md bg-[#f7f5f2] p-3 text-sm leading-6">{item}</p>
                    ))}
                  </div>
                </section>
                <EmailEditor
                  title="Email draft"
                  value={businessEmail}
                  onChange={setBusinessEmail}
                  comment={agentComment}
                  onCommentChange={setAgentComment}
                  onImprove={improveEmail}
                />
              </div>
            ) : null}

            {isCreativeApproval ? (
              <div className="mt-6 grid gap-5 xl:grid-cols-[1fr_0.9fr]">
                <section className="rounded-lg border border-black/15 p-4">
                  <h4 className="text-sm font-semibold">Hook ideas</h4>
                  <div className="mt-3 space-y-2">
                    {glowlabCreativePack.hooks.map((hook) => (
                      <button
                        key={hook}
                        type="button"
                        onClick={() => setEditedHook(hook)}
                        className="w-full rounded-md border border-black/10 p-3 text-left text-sm leading-6"
                      >
                        {hook}
                      </button>
                    ))}
                  </div>
                  <label className="mt-4 block text-sm font-semibold">Edit selected idea</label>
                  <textarea
                    value={editedHook}
                    onChange={(event) => setEditedHook(event.target.value)}
                    rows={4}
                    className="mt-2 w-full rounded-md border border-black/15 p-3 text-sm outline-none"
                  />
                </section>
                <section className="rounded-lg border border-black/15 p-4">
                  <h4 className="text-sm font-semibold">Trend references</h4>
                  <div className="mt-3 space-y-2">
                    {glowlabCreativePack.trendReferences.map((item) => (
                      <a
                        key={item.title}
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between gap-3 rounded-md bg-[#f7f5f2] p-3 text-sm"
                      >
                        <span>{item.title}</span>
                        <ExternalLink className="h-4 w-4 shrink-0" />
                      </a>
                    ))}
                  </div>
                  <h4 className="mt-5 text-sm font-semibold">Do not reuse</h4>
                  <div className="mt-3 space-y-2">
                    {glowlabCreativePack.reuseGuardrails.map((item) => (
                      <p key={item} className="rounded-md border border-black/10 p-3 text-sm">{item}</p>
                    ))}
                  </div>
                  <button className="mt-5 inline-flex items-center gap-2 rounded-md border border-black/15 px-4 py-2 text-sm font-medium">
                    <Paperclip className="h-4 w-4" />
                    Upload visual sample
                  </button>
                </section>
              </div>
            ) : null}

            {isPaymentApproval ? (
              <div className="mt-6">
                <EmailEditor
                  title="Payment reminder draft"
                  value={paymentEmail}
                  onChange={setPaymentEmail}
                  comment={agentComment}
                  onCommentChange={setAgentComment}
                  onImprove={improveEmail}
                />
              </div>
            ) : null}

            {!isBusinessApproval && !isCreativeApproval && !isPaymentApproval ? (
              <div className="mt-6 rounded-lg border border-black/15 p-4">
                <p className="text-sm leading-6 text-neutral-700">{detail}</p>
              </div>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={approve}
                className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-sm font-medium text-white"
              >
                <Check className="h-4 w-4" />
                Approve
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-md border border-black/15 px-4 py-2 text-sm font-medium"
              >
                <RefreshCw className="h-4 w-4" />
                Think again
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function EmailEditor({
  title,
  value,
  onChange,
  comment,
  onCommentChange,
  onImprove
}: {
  title: string;
  value: string;
  onChange: (value: string) => void;
  comment: string;
  onCommentChange: (value: string) => void;
  onImprove: () => void;
}) {
  return (
    <section className="rounded-lg border border-black/15 p-4">
      <h4 className="text-sm font-semibold">{title}</h4>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={12}
        className="mt-3 w-full rounded-md bg-[#f7f5f2] p-4 text-sm leading-6 text-neutral-800 outline-none"
      />
      <label className="mt-4 block text-sm font-semibold">Comment for agent</label>
      <textarea
        value={comment}
        onChange={(event) => onCommentChange(event.target.value)}
        rows={3}
        placeholder="Example: make it warmer, ask for 50% deposit, shorten the email..."
        className="mt-2 w-full rounded-md border border-black/15 p-3 text-sm outline-none"
      />
      <button
        type="button"
        onClick={onImprove}
        className="mt-3 inline-flex items-center gap-2 rounded-md border border-black/15 px-4 py-2 text-sm font-medium"
      >
        <Wand2 className="h-4 w-4" />
        Ask agent to update
      </button>
    </section>
  );
}
