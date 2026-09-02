import { Reveal, SectionLabel } from "../ui/Editorial";

const meta = [
  { key: "Channels", value: "Print, digital, broadcast, stage" },
  { key: "Formats", value: "14 distinct placement types" },
  { key: "Model", value: "Orchestrated, never à la carte" },
];

export const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 pb-[clamp(4rem,9vw,7rem)]">
      <div className="absolute inset-0 rule-grid opacity-70" aria-hidden="true" />
      <div
        className="absolute -top-52 right-[-14%] h-[44rem] w-[44rem] rounded-full bg-gold/[0.07] blur-[150px]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" aria-hidden="true" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-14 items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <SectionLabel index="00" label="Our Services" className="mb-10 max-w-sm" />
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-serif text-white text-[clamp(2.75rem,7.2vw,5.5rem)] leading-[1.03] tracking-[-0.02em] text-balance">
                Coverage that <span className="text-gold italic font-normal">compounds.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-10 max-w-[62ch] text-[clamp(1.05rem,1.6vw,1.3rem)] leading-[1.75] text-muted-white/80 font-light">
                A single placement is a moment. A programme of them is a reputation. We build
                across print, digital, social, broadcast and the stage, so each story reinforces
                the last and your name accumulates authority rather than spending it.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.24} className="lg:col-span-4">
            <dl className="border-t border-white/10">
              {meta.map((item) => (
                <div key={item.key} className="border-b border-white/10 py-5">
                  <dt className="text-[0.65rem] uppercase tracking-[0.3em] text-gold/85 mb-2">
                    {item.key}
                  </dt>
                  <dd className="font-serif text-white text-lg leading-snug">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
