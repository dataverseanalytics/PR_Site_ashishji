import { EditorialSection, Reveal, SectionLabel } from "../ui/Editorial";

/** Unsplash delivery params kept in one place so every card renders identically. */
const photo = (id: string) =>
  `https://images.unsplash.com/photo-${id}?q=75&w=900&h=675&fit=crop&auto=format`;

const services = [
  {
    title: "Digital PR Articles",
    kicker: "Press Release Distribution",
    description:
      "Distribute your story across digital networks to reach online audiences and secure coverage.",
    image: photo("1451187580459-43490279c0fa"),
    alt: "Global network of city lights seen from orbit at night",
  },
  {
    title: "Print PR",
    kicker: "Newspaper Articles",
    description:
      "Secure newspaper placements that build credibility with established print audiences.",
    image: photo("1504711434969-e33886168f5c"),
    alt: "Stack of folded business newspapers",
  },
  {
    title: "Magazine Placements",
    kicker: "Feature Articles",
    description:
      "Feature your expertise in industry magazines to establish authority and reach engaged readers.",
    image: photo("1524995997946-a1c2e315a42f"),
    alt: "Curved library shelves filled with published volumes",
  },
  {
    title: "Thought Leadership",
    kicker: "Authored Content",
    description:
      "Position yourself as an expert through authored content and published commentary.",
    image: photo("1455390582262-044cdead277a"),
    alt: "Fountain pen resting on a handwritten page",
  },
  {
    title: "Social Media Placements",
    kicker: "Platform Amplification",
    description:
      "Amplify your message across social platforms to increase visibility and audience engagement.",
    image: photo("1611162617213-7d7a39e9b1d7"),
    alt: "Social media application icons rendered in three dimensions",
  },
  {
    title: "SEO PR Articles",
    kicker: "Search Visibility",
    description:
      "Create optimized content that improves search rankings and drives organic traffic.",
    image: photo("1460925895917-afdab827c52f"),
    alt: "Laptop displaying a web analytics dashboard",
  },
  {
    title: "Reputation Management",
    kicker: "Brand Protection",
    description:
      "Build and protect your brand reputation through strategic content and proactive messaging.",
    image: photo("1521791136064-7986c2920216"),
    alt: "Two people shaking hands across a meeting table",
  },
  {
    title: "Crisis PR Articles",
    kicker: "Rapid Response",
    description:
      "Navigate challenging situations with rapid response and strategic crisis communication.",
    image: photo("1517048676732-d65bc937f952"),
    alt: "Team working through documents around a boardroom table",
  },
  {
    title: "Podcasts & Interviews",
    kicker: "Broadcast Appearances",
    description:
      "Establish authority through guest appearances on relevant podcasts and interview shows.",
    image: photo("1478737270239-2f02b77fc618"),
    alt: "Condenser microphone in a recording studio",
  },
  {
    title: "Award & Recognition",
    kicker: "Industry Honours",
    description:
      "Pursue industry awards that validate excellence and enhance credibility.",
    image: photo("1578269174936-2709b6aeb913"),
    alt: "Silver trophy cup standing on a plinth",
  },
  {
    title: "Panels & Speakerships",
    kicker: "Stage Presence",
    description:
      "Build influence through speaking engagements and panel participation at key events.",
    image: photo("1591115765373-5207764f72e7"),
    alt: "Speaker presenting to a seated audience at an event",
  },
  {
    title: "Listicle Articles",
    kicker: "Shareable Formats",
    description:
      "Create shareable content in popular listicle format that drives engagement and reach.",
    image: photo("1499750310107-5fef28a66643"),
    alt: "Writing desk with laptop, notebook and coffee",
  },
  {
    title: "Influencer Marketing",
    kicker: "Creator Partnerships",
    description:
      "Amplify your message through strategic partnerships with relevant influencers.",
    image: photo("1590650153855-d9e808231d41"),
    alt: "Presenter speaking to camera in a modern workspace",
  },
  {
    title: "Press Conference",
    kicker: "Major Announcements",
    description:
      "Generate major media attention and coverage for significant company announcements.",
    image: photo("1475721027785-f74eccf877e2"),
    alt: "Microphone on a stand in front of a gathered crowd",
  },
];

export const ServiceCatalogue = () => {
  return (
    <EditorialSection className="bg-dark-navy border-y border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-8 mb-16 items-end">
        <div className="lg:col-span-7">
          <SectionLabel index="01" label="The Catalogue" className="mb-10 max-w-sm" />
          <h2 className="font-serif text-white text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.15] tracking-[-0.015em] text-balance">
            Fourteen ways to put your story in front of the right audience.
          </h2>
        </div>
        <p className="lg:col-span-5 text-muted-white/75 leading-[1.8] font-light max-w-[48ch]">
          Every engagement draws on the channels that fit the objective — earned, print, digital,
          broadcast and stage. Not a menu to pick from in isolation, but a set of instruments we
          orchestrate together.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-14">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={Math.min((index % 3) * 0.08, 0.16)}>
            <article className="group h-full">
              <div className="relative overflow-hidden aspect-[4/3] bg-navy-blue">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  decoding="async"
                  width={900}
                  height={675}
                  className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.8] transition duration-700 ease-out group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-[1.04]"
                />
                {/* Scrim ties fourteen unrelated photographs into one palette. */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/30 to-transparent"
                  aria-hidden="true"
                />
                <span className="absolute top-0 left-0 bg-deep-navy/90 px-3 py-2 font-serif text-xs text-gold tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <span
                className="block h-px bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                aria-hidden="true"
              />

              <p className="mt-6 text-[0.65rem] uppercase tracking-[0.28em] text-gold/85">
                {service.kicker}
              </p>
              <h3 className="font-serif text-white text-xl leading-snug mt-3 mb-3 text-balance">
                {service.title}
              </h3>
              <p className="text-muted-white/70 text-[0.95rem] leading-[1.75] font-light">
                {service.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </EditorialSection>
  );
};
