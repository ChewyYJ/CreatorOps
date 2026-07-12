"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { topNavigation } from "@/data/demo";

export function TopNavigation() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center gap-2 lg:justify-center">
      {topNavigation.map((item) => {
        const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              active ? "bg-black text-white" : "text-black hover:bg-black hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
