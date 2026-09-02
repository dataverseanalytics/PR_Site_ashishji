import { EditorialSection, Reveal, SectionLabel } from "../ui/Editorial";

const audiences = [
  {
    title: "Startups & Scale-Ups",
    body: "Ambitious companies looking to build awareness and credibility as they grow.",
  },
  {
    title: "Established Enterprises",
    body: "Organizations navigating transformation and market change.",
  },
  {
    title: "Innovators & Disruptors",
    body: "Companies reshaping their industries and defining new categories.",
  },
  {
    title: "Leaders & Founders",
    body: "Individuals building personal thought leadership and public influence.",
  },
  {
    title: "Reputation at Risk",
    body: "Organizations managing challenging periods and seeking to protect or rebuild trust.",
  },
];

/* Deliberate diagonal stagger — the section's composition is its character. */
const offsets = ["xl:mt-0", "xl:mt-10", "xl:mt-20", "xl:mt-30", "xl:mt-40"];

export const WhoWeServe = () => {
  return (
    <EditorialSection className="bg-dark-navy border-y border-white/5 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-10 items-end mb-16">
        <div className="lg:col-span-7">
          <SectionLabel index="05" label="Who We Serve" className="mb-10 max-w-sm" />
          <Reveal>
            <h2 className="font-serif text-white text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.15] tracking-[-0.015em] text-balance">
              Organizations that understand the power of strategic communication.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="lg:col-span-5">
          <p className="text-muted-white/75 leading-[1.8] font-light max-w-[48ch]">
            Regardless of size or industry, our clients share a commitment to excellence and a
            recognition that their story matters.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-x-8 gap-y-12">
        {audiences.map((audience, index) => (
          <Reveal
            key={audience.title}
            delay={Math.min(index * 0.08, 0.32)}
            className={offsets[index]}
          >
            <div className="group border-l border-white/10 pl-6 h-full transition-colors duration-500 hover:border-gold">
              <span className="block font-serif text-gold/80 text-xs tabular-nums mb-6">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-serif text-white text-xl leading-snug mb-4 text-balance">
                {audience.title}
              </h3>
              <p className="text-muted-white/70 text-[0.95rem] leading-[1.75] font-light">
                {audience.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </EditorialSection>
  );
};
