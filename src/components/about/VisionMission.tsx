import { EditorialSection, Reveal, SectionLabel } from "../ui/Editorial";

const pillars = [
  {
    label: "Our Vision",
    heading: "The most trusted strategic communications partner for organizations that refuse to be overlooked.",
    body: [
      "We envision a world where every brand — regardless of size or industry — has access to world-class PR expertise that transforms their story into market momentum.",
      "Our vision is to elevate the practice of public relations from reactive crisis management to proactive strategic advantage, enabling our clients to lead conversations, shape perceptions, and build lasting influence.",
    ],
  },
  {
    label: "Our Mission",
    heading: "To deliver strategic communications that drive real business outcomes.",
    body: [
      "We work closely with our clients to develop comprehensive PR strategies that align with their business objectives, build credibility with key stakeholders, and create competitive advantage in their markets. We combine deep industry insight, media expertise, and creative storytelling to craft narratives that resonate, inspire action, and create lasting impact.",
      "Whether it's launching a new product, managing reputation during challenging times, or establishing thought leadership, we approach every engagement with strategic rigor and creative excellence.",
    ],
  },
];

export const VisionMission = () => {
  return (
    <EditorialSection className="bg-dark-navy border-y border-white/5">
      <SectionLabel index="01" label="Vision & Mission" className="mb-16 max-w-2xl" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-x-20 relative">
        {/* Hairline that divides the diptych. */}
        <div
          className="hidden lg:block absolute left-1/2 inset-y-0 w-px bg-gradient-to-b from-transparent via-gold/25 to-transparent"
          aria-hidden="true"
        />

        {pillars.map((pillar, index) => (
          <Reveal key={pillar.label} delay={index * 0.1}>
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gold mb-6">
              {pillar.label}
            </p>
            <h2 className="font-serif text-white text-[clamp(1.6rem,2.6vw,2.25rem)] leading-[1.25] tracking-[-0.01em] mb-8 text-balance">
              {pillar.heading}
            </h2>
            <div className="space-y-5 max-w-[58ch]">
              {pillar.body.map((paragraph) => (
                <p key={paragraph} className="text-muted-white/75 leading-[1.8] font-light">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </EditorialSection>
  );
};
