import { EditorialSection, Reveal, SectionLabel } from "../ui/Editorial";

export const WhyWeExist = () => {
  return (
    <EditorialSection className="overflow-hidden">
      {/* The single light source on the page's one moment of scale drama. */}
      <div
        className="absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.06] blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <SectionLabel index="06" label="Why We Exist" className="mb-20 max-w-2xl" />

      <Reveal>
        <h2 className="font-serif italic text-gold text-[clamp(2.1rem,6vw,4.5rem)] leading-[1.1] tracking-[-0.02em] max-w-[16ch] mx-auto text-center text-balance">
          We exist because silence isn&rsquo;t strategy.
        </h2>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-5xl mx-auto">
          <p className="text-muted-white/80 leading-[1.85] font-light">
            In a world where reputation is built in real time, where stakeholders expect
            authenticity and consistency, and where the most compelling brands are those that speak
            clearly about who they are and what they stand for, great PR is more critical than
            ever.
          </p>
          <p className="text-muted-white/80 leading-[1.85] font-light">
            We&rsquo;re here to help you break through the noise, tell your story authentically, and
            build the influence and credibility you deserve. Whether you&rsquo;re launching something
            new, navigating uncertainty, or cementing market leadership, we&rsquo;re the strategic
            partner you need in your corner.
          </p>
        </div>
      </Reveal>
    </EditorialSection>
  );
};
