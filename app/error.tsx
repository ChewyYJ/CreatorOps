"use client";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="shell">
      <div className="panel mx-auto max-w-2xl rounded-[38px] p-8">
        <p className="eyebrow">Something went wrong</p>
        <h1 className="mt-2 text-[3rem] font-semibold tracking-[-0.06em]">The workflow hit an unexpected issue</h1>
        <p className="body-muted mt-3">
          {error.message || "Please retry the action. The demo keeps the experience recoverable."}
        </p>
        <button
          type="button"
          onClick={reset}
          className="button-accent mt-6"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
