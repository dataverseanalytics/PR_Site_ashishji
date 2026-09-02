import { EditorialSection, Reveal, SectionLabel } from "../ui/Editorial";

const capabilities = [
  "Strategic communications planning",
  "Media relations & press release distribution",
  "Corporate & executive communications",
  "Crisis management & reputation protection",
  "Thought leadership development",
  "Digital & social media advocacy",
  "Investor relations & financial communications",
  "Product launch campaigns",
  "Brand positioning & narrative development",
  "Stakeholder engagement strategies",
  "Integrated communications campaigns",
];

export const WhatWeDo = () => {
  return (
    <EditorialSection>
      <SectionLabel index="02" label="What We Do" className="mb-16 max-w-2xl" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-14">
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <h2 className="font-serif text-white text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.15] tracking-[-0.015em] mb-8 text-balance">
              A full-service practice, built for every industry.
            </h2>
            <p className="text-muted-white/75 leading-[1.8] font-light max-w-[52ch] mb-6">
              AskForPR offers a comprehensive suite of communications services designed for
              organizations across all industries — spanning traditional media, digital platforms,
              and direct stakeholder outreach.
            </p>
            <p className="text-muted-white/75 leading-[1.8] font-light max-w-[52ch]">
              We work with startups, scale-ups, established enterprises, and everything in
              between — bringing the same level of strategic sophistication and creative
              excellence to every client.
            </p>
          </div>
        </Reveal>

        {/* Read as a table of contents rather than a grid of cards. */}
        <Reveal delay={0.1} className="lg:col-span-7">
          <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 border-t border-white/10">
            {capabilities.map((capability, index) => (
              <li
                key={capability}
                className="flex items-baseline gap-5 py-5 border-b border-white/10"
              >
                <span className="font-serif text-gold/80 text-xs tabular-nums shrink-0 pt-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-muted-white/90 leading-snug">{capability}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </EditorialSection>
  );
};
