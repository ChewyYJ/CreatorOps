export function PageIntro({
  eyebrow,
  title,
  description,
  badge
}: {
  eyebrow: string;
  title: string;
  description: string;
  badge?: string;
}) {
  return (
    <section className="hero-card mb-8 px-6 py-8 md:px-10 md:py-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 text-[2.5rem] font-semibold tracking-[-0.06em] text-black md:text-[4rem] md:leading-[0.92]">
            {title}
          </h2>
          <p className="body-muted mt-4 max-w-2xl">{description}</p>
        </div>
        {badge ? <span className="pill-accent w-fit">{badge}</span> : null}
      </div>
    </section>
  );
}
