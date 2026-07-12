import Link from "next/link";
import { ReactNode } from "react";
import { Bell, CircleUserRound, Sparkles } from "lucide-react";

import { FloatingAssistant } from "@/components/floating-assistant";
import { TopNavigation } from "@/components/top-navigation";
import { UserMenu } from "@/components/user-menu";

export function PageShell({
  title,
  description,
  children,
  hideNavigation = false
}: {
  title?: string;
  description?: string;
  children: ReactNode;
  hideNavigation?: boolean;
}) {
  return (
    <div className="shell">
      <div className="panel rounded-[38px] px-4 py-4 md:px-8 md:py-6">
        <header className="flex flex-col gap-5 border-b border-black/5 pb-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111111] text-white">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[1.9rem] font-semibold tracking-[-0.06em]">CreatorOps AI</p>
                <p className="body-muted -mt-1">AI executes. Humans approve.</p>
              </div>
            </Link>
          </div>

          {hideNavigation ? null : <TopNavigation />}

          <div className="flex items-center gap-3">
            <UserMenu />
            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
              <Bell className="h-4 w-4" />
            </button>
            <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white">
              <CircleUserRound className="h-4 w-4" />
            </button>
          </div>
        </header>

        {(title || description) && (
          <div className="border-b border-black/5 py-8">
            {title ? <h1 className="section-title">{title}</h1> : null}
            {description ? <p className="body-muted mt-3 max-w-3xl">{description}</p> : null}
          </div>
        )}

        <main className="min-h-[70vh] py-8">{children}</main>
      </div>
      <FloatingAssistant />
    </div>
  );
}
