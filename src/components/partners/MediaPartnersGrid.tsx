import { EditorialSection, Reveal } from "../ui/Editorial";
import { mediaPartners } from "./mediaPartnersData";

export const MediaPartnersGrid = () => {
  return (
    <EditorialSection className="bg-dark-navy border-y border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-8 mb-16 items-end">
        <div className="lg:col-span-7">
          <h2 className="font-serif text-white text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.15] tracking-[-0.015em] text-balance">
            The mastheads that carry our clients&rsquo; stories.
          </h2>
        </div>
        <p className="lg:col-span-5 text-muted-white/75 leading-[1.8] font-light max-w-[48ch]">
          Print, digital, broadcast and wire — national dailies, business press, regional
          language leaders and the agencies that syndicate to all of them.
        </p>
      </div>

      {/* Logos sit on a light plate: most are dark-on-transparent brand assets and
          would disappear against the navy page. */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
        {mediaPartners.map((partner, index) => (
          <Reveal key={partner.name} delay={Math.min((index % 5) * 0.05, 0.2)}>
            <li className="list-none h-full">
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                title={partner.name}
                className="group flex h-28 items-center justify-center rounded-sm bg-[#F4F6F8] px-5 py-4 border border-transparent hover:border-gold transition-colors duration-300"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  loading="lazy"
                  decoding="async"
                  className="max-h-14 w-auto max-w-full object-contain"
                />
              </a>
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal>
        <p className="mt-14 text-center text-[0.7rem] uppercase tracking-[0.3em] text-muted-white/50">
          And many more
        </p>
      </Reveal>

      <Reveal>
        <p className="mt-16 border-t border-white/10 pt-10 max-w-[68ch] text-[clamp(1.02rem,1.4vw,1.15rem)] leading-[1.8] text-muted-white/80 font-light">
          Our established relationships with these leading publications ensure your story reaches
          the right audiences. We understand each publication&rsquo;s editorial priorities, audience
          demographics, and coverage focus — enabling strategic placements that maximize impact.
        </p>
      </Reveal>
    </EditorialSection>
  );
};
