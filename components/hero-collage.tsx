import { landingCards } from "@/data/demo";

const toneMap: Record<string, string> = {
  red: "bg-[#e84133] text-white",
  white: "bg-white text-black",
  sand: "bg-[#f4ecdf] text-black",
  black: "bg-[#111111] text-white"
};

export function HeroCollage() {
  return (
    <div className="relative mt-10 h-[280px] md:h-[360px]">
      {landingCards.map((card, index) => (
        <div
          key={card.title}
          className={`absolute left-1/2 top-1/2 flex h-[180px] w-[160px] -translate-y-1/2 rounded-[30px] border border-black/5 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] md:h-[240px] md:w-[220px] ${toneMap[card.tone]}`}
          style={{
            transform: `translate(-50%, -50%) translateX(${(index - 2) * 110}px) rotate(${card.rotate}deg)`,
            zIndex: 10 + index
          }}
        >
          <div className="mt-auto">
            <p className="text-lg font-semibold tracking-[-0.04em] md:text-[1.7rem]">{card.title}</p>
            <p className="mt-2 text-sm opacity-80">{card.subtitle}</p>
          </div>
        </div>
      ))}

      <div className="absolute left-[14%] top-6 rounded-full bg-white px-5 py-3 text-lg font-medium shadow-lg">
        @glowlab
      </div>
      <div className="absolute right-[10%] top-10 rounded-full bg-[#e6f5ed] px-5 py-3 text-lg font-medium text-[#2c8c62] shadow-lg">
        @jamietan
      </div>
    </div>
  );
}
