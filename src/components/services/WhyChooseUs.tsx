import { EditorialSection, Reveal, SectionLabel } from "../ui/Editorial";

const reasons = [
  {
    title: "Unmatched Media Relationships",
    body: "Our rolodex includes the most influential journalists, producers, and editors across the country.",
  },
  {
    title: "Senior-Level Attention",
    body: "Unlike other agencies, your account is managed day-to-day by senior strategists, not junior associates.",
  },
];

export const WhyChooseUs = () => {
  return (
    <EditorialSection className="bg-dark-navy border-t border-white/5">
      <SectionLabel index="03" label="Why Choose Us" className="mb-16 max-w-2xl" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-14 items-center">
        <Reveal className="lg:col-span-6">
          <h2 className="font-serif text-white text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.15] tracking-[-0.015em] mb-8 text-balance">
            A national footprint with local relationships.
          </h2>
          <p className="text-muted-white/75 leading-[1.8] font-light max-w-[54ch] mb-12">
            In a fragmented media landscape, you need an agency that can connect the dots. Our
            national footprint means we have local relationships in every major market, backed by
            the strategic firepower of a global agency.
          </p>

          <div className="border-t border-white/10">
            {reasons.map((reason, index) => (
              <div key={reason.title} className="grid grid-cols-12 gap-x-6 py-7 border-b border-white/10">
                <span className="col-span-2 md:col-span-1 font-serif text-xl leading-none text-white/40 tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="col-span-10 md:col-span-11">
                  <h3 className="font-serif text-white text-lg leading-snug mb-2">{reason.title}</h3>
                  <p className="text-muted-white/70 text-[0.95rem] leading-[1.75] font-light">
                    {reason.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden bg-navy-blue">
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=75&w=1100&h=825&fit=crop&auto=format"
              alt="Strategy team working through a campaign plan at a whiteboard"
              loading="lazy"
              decoding="async"
              width={1100}
              height={825}
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.85]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
        </Reveal>
      </div>
    </EditorialSection>
  );
};
