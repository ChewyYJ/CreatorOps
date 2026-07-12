import Link from "next/link";

export default function NotFound() {
  return (
    <main className="shell">
      <div className="panel mx-auto flex min-h-[70vh] max-w-2xl items-center rounded-[38px] px-8 py-10 text-center">
        <div className="w-full">
        <p className="eyebrow">404</p>
        <h1 className="mt-2 text-[3rem] font-semibold tracking-[-0.06em]">That route isn’t part of the live workflow</h1>
        <p className="body-muted mt-3">
          The product is built around orchestrated creator workflows, so this page may sit outside the current premium demo path.
        </p>
        <Link href="/dashboard" className="button-accent mt-6 inline-flex">
          Back to dashboard
        </Link>
        </div>
      </div>
    </main>
  );
}
