import { AiUpdateItem } from "@/types";

export function UpdateList({ items }: { items: AiUpdateItem[] }) {
  return (
    <div className="soft-card rounded-[30px]">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="eyebrow">AI Updates</p>
          <h3 className="mt-2 text-[1.9rem] font-semibold tracking-[-0.05em]">Work completed in the background</h3>
        </div>
        <span className="pill">Autonomous unless approval is needed</span>
      </div>
      <div className="mt-8 space-y-4">
        {items.map((item) => (
          <div key={`${item.project}-${item.title}`} className="rounded-[26px] border border-black/5 bg-white/80 p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h4 className="text-lg font-semibold tracking-[-0.04em]">{item.title}</h4>
              <span className="pill">{item.project}</span>
            </div>
            <p className="body-muted mt-3">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
