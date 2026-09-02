import { EditorialSection, Reveal, SectionLabel } from "../ui/Editorial";
import { sectors } from "./sectorsData";

export const SectorsGrid = () => {
  return (
    <EditorialSection className="bg-dark-navy border-y border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-8 mb-16 items-end">
        <div className="lg:col-span-7">
          <SectionLabel index="01" label="The Sectors" className="mb-10 max-w-sm" />
          <h2 className="font-serif text-white text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.15] tracking-[-0.015em] text-balance">
            Fifteen industries. One standard of counsel.
          </h2>
        </div>
        <p className="lg:col-span-5 text-muted-white/75 leading-[1.8] font-light max-w-[48ch]">
          We work with leading organizations across diverse industries. Our cross-sector expertise
          lets us bring best practices, industry insight, and creative strategy to every client,
          whatever their vertical.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {sectors.map((sector, index) => (
          <Reveal key={sector.slug} delay={Math.min((index % 3) * 0.08, 0.16)}>
            {/* scroll-mt clears the fixed navbar when deep-linked from Home. */}
            <article id={sector.slug} className="group h-full scroll-mt-32">
              <div className="relative overflow-hidden aspect-[3/4] bg-navy-blue">
                <img
                  src={sector.image}
                  alt={sector.alt}
                  loading="lazy"
                  decoding="async"
                  width={700}
                  height={933}
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.88] transition duration-700 ease-out group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-[1.04]"
                />
                {/* Scrim is weighted to the bottom so the picture stays bright
                    while the name below it keeps ~14:1 contrast. */}
                <div
                  className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,20,38,0.96)_0%,rgba(6,20,38,0.92)_20%,rgba(6,20,38,0.45)_42%,rgba(6,20,38,0)_70%)]"
                  aria-hidden="true"
                />
                <span className="absolute top-0 left-0 bg-deep-navy/90 px-3 py-2 font-serif text-xs text-gold tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="absolute inset-x-0 bottom-0 p-6 font-serif text-white text-xl leading-tight text-balance">
                  {sector.name}
                </h3>
              </div>

              <span
                className="block h-px bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                aria-hidden="true"
              />

              <p className="mt-5 text-muted-white/70 text-[0.95rem] leading-[1.75] font-light">
                {sector.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-20 border-t border-white/10 pt-10 max-w-[68ch] text-[clamp(1.02rem,1.4vw,1.15rem)] leading-[1.8] text-muted-white/80 font-light">
          Regardless of your industry, we bring strategic thinking, creative excellence, and
          measurable results to every engagement. We understand your sector&rsquo;s unique
          challenges, regulatory landscape, and market dynamics.
        </p>
      </Reveal>
    </EditorialSection>
  );
};
