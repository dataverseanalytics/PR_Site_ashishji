import { EditorialSection, Reveal, SectionLabel } from "../ui/Editorial";

const differentiators = [
  {
    title: "Strategy First, Tactics Second",
    body: "We don't start with press releases or media lists. We begin with deep strategic analysis — understanding your business, competitive landscape, stakeholder ecosystem, and long-term objectives. Every tactic we recommend flows from a clear strategic foundation, ensuring your PR investments drive business results, not just media mentions.",
  },
  {
    title: "Partnership Over Vendor Relationship",
    body: "We're not simply an outside contractor executing your requests. We function as an extension of your team, bringing strategic counsel, industry perspective, and candid advice to every client relationship. We challenge assumptions when necessary, celebrate successes together, and maintain transparency throughout every engagement.",
  },
  {
    title: "Industry Agnostic, Insight Rich",
    body: "While we serve all industries, we bring deep expertise across sectors — from technology and finance to healthcare, consumer goods, manufacturing, and beyond. This cross-industry perspective gives us unique insight into what works, allowing us to innovate and adapt strategies that transcend industry boundaries.",
  },
  {
    title: "Data-Informed, Creative-Driven",
    body: "We measure success beyond impressions and clips. Our approach combines quantifiable metrics with qualitative insight, ensuring your PR strategy is grounded in data while remaining creative and unexpected. We focus on outcomes that matter to your business — credibility, audience engagement, market perception shift, and stakeholder alignment.",
  },
  {
    title: "Full-Service Integrated Approach",
    body: "Rather than compartmentalizing your communications into silos, we develop integrated campaigns that leverage the full spectrum of PR and communications channels. Your story is consistent, your messaging is unified, and your impact is multiplied across media, digital, social, and stakeholder touchpoints.",
  },
  {
    title: "Speed and Agility Without Sacrificing Quality",
    body: "In today's fast-moving media landscape, timing matters. We're structured for speed without compromising quality. Whether you need rapid response in a crisis or thoughtful strategy development over time, we bring both velocity and excellence to every project.",
  },
];

export const Differentiators = () => {
  return (
    <EditorialSection className="bg-dark-navy border-y border-white/5">
      <SectionLabel index="03" label="What Sets Us Apart" className="mb-14 max-w-2xl" />

      <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-8 mb-16 items-end">
          <h2 className="lg:col-span-6 font-serif text-white text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.15] tracking-[-0.015em] text-balance">
            Strategic counsel, never cookie-cutter.
          </h2>
          <p className="lg:col-span-6 text-[clamp(1.02rem,1.4vw,1.15rem)] leading-[1.8] text-muted-white/80 font-light max-w-[54ch]">
            In an industry crowded with transaction-based firms and cookie-cutter approaches,
            AskForPR stands out through our commitment to strategic counsel and authentic
            partnership.
          </p>
        </div>
      </Reveal>

      {/* Spec-table rows: index, title, argument. */}
      <div className="border-t border-white/10">
        {differentiators.map((item, index) => (
          <Reveal key={item.title} delay={Math.min(index * 0.06, 0.24)}>
            <article className="group grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-4 py-9 md:py-10 border-b border-white/10 transition-colors duration-500 hover:bg-white/[0.02]">
              <div className="md:col-span-1">
                <span className="font-serif text-2xl leading-none text-white/40 tabular-nums transition-colors duration-500 group-hover:text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="md:col-span-4 font-serif text-white text-xl md:text-2xl leading-[1.3] tracking-[-0.01em] text-balance">
                {item.title}
              </h3>
              <p className="md:col-span-7 text-muted-white/70 leading-[1.8] font-light max-w-[62ch]">
                {item.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </EditorialSection>
  );
};
