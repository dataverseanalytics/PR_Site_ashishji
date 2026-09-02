import { Compass, Gem, HeartHandshake, Eye, Lightbulb, Users } from "lucide-react";
import { EditorialSection, Reveal, SectionLabel } from "../ui/Editorial";

const values = [
  {
    icon: Compass,
    title: "Strategic Integrity",
    body: "We recommend only what we believe will drive results for your business. We won't inflate metrics, oversell capabilities, or promise outcomes we can't deliver. Our reputation is built on honest assessment and authentic results.",
  },
  {
    icon: Gem,
    title: "Excellence in Execution",
    body: "From strategy development to media outreach to campaign management, we bring meticulous attention to detail and a commitment to excellence in everything we do. Your brand deserves exceptional execution, and that's what we deliver.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Centric Approach",
    body: "Your success is our success. We invest deeply in understanding your business, your challenges, and your aspirations. We're responsive, accessible, and genuinely invested in helping you achieve your goals.",
  },
  {
    icon: Eye,
    title: "Transparency and Honesty",
    body: "We communicate with candor. We share both good news and difficult truths. We explain our recommendations, acknowledge challenges, and maintain complete transparency about what we're seeing in the market and media landscape.",
  },
  {
    icon: Lightbulb,
    title: "Innovation and Creativity",
    body: "The communications landscape evolves constantly. We stay ahead of trends, experiment with new platforms and strategies, and bring creative thinking to every challenge. We help you stand out in crowded markets through unexpected, effective storytelling.",
  },
  {
    icon: Users,
    title: "Inclusivity and Diversity",
    body: "We believe that better teams deliver better work. We're committed to building a diverse organization that brings multiple perspectives to client challenges, ensuring our strategies reflect the diversity of the audiences we're trying to reach.",
  },
];

export const AboutValues = () => {
  return (
    <EditorialSection>
      <SectionLabel index="04" label="Our Core Values" className="mb-14 max-w-2xl" />

      <Reveal>
        <h2 className="font-serif text-white text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.15] tracking-[-0.015em] max-w-[20ch] mb-16 text-balance">
          Six commitments we hold ourselves to.
        </h2>
      </Reveal>

      {/* True hairline grid: cells share edges rather than float as cards. */}
      <div className="rule-table grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <Reveal
              key={value.title}
              delay={Math.min(index * 0.06, 0.24)}
              className="group p-8 lg:p-10 transition-colors duration-500 hover:bg-white/[0.02]"
            >
              <Icon
                size={26}
                strokeWidth={1.4}
                className="text-gold mb-7 transition-transform duration-500 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
              <h3 className="font-serif text-white text-xl leading-snug mb-4">{value.title}</h3>
              <p className="text-muted-white/70 text-[0.95rem] leading-[1.8] font-light">
                {value.body}
              </p>
            </Reveal>
          );
        })}
      </div>
    </EditorialSection>
  );
};
