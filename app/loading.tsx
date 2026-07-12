export default function Loading() {
  return (
    <main className="shell">
      <div className="panel rounded-[38px] p-8">
        <div className="animate-pulse">
          <div className="h-3 w-28 rounded-full bg-black/10" />
          <div className="mt-4 h-12 w-80 rounded-[20px] bg-black/10" />
          <div className="mt-3 h-4 w-full max-w-2xl rounded-full bg-black/8" />
        </div>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="soft-card animate-pulse rounded-[30px]">
            <div className="h-4 w-32 rounded-full bg-black/8" />
            <div className="mt-4 h-10 w-20 rounded-[18px] bg-[#f1c9c4]" />
            <div className="mt-3 h-4 w-40 rounded-full bg-black/8" />
          </div>
        ))}
      </div>
    </main>
  );
}
