import {
  Eye,
  Megaphone,
  ShieldCheck,
  TrendingUp,
  Link2,
  UserRound,
  Rocket,
  Landmark,
  Globe,
  Share2,
} from "lucide-react";
import { EditorialSection, Reveal, SectionLabel } from "../ui/Editorial";

const benefits = [
  { icon: Eye, title: "Media Visibility", body: "Get your story in front of journalists and online readers." },
  { icon: Megaphone, title: "Brand Awareness", body: "Increase recognition and reach of your brand across audiences." },
  { icon: ShieldCheck, title: "Credibility & Trust", body: "Third-party media coverage builds authority and trust with stakeholders." },
  { icon: TrendingUp, title: "SEO Benefits", body: "Press releases with optimized content improve search engine rankings." },
  { icon: Link2, title: "Backlink Opportunities", body: "Quality placements create valuable backlinks to your website." },
  { icon: UserRound, title: "Founder Visibility", body: "Establish your leadership team as industry experts and thought leaders." },
  { icon: Rocket, title: "Product & Service Launches", body: "Generate buzz and media coverage for new offerings and announcements." },
  { icon: Landmark, title: "Investor Credibility", body: "Demonstrate market traction and credibility to investors and partners." },
  { icon: Globe, title: "Digital Footprint", body: "Build your online presence and searchable record of company milestones." },
  { icon: Share2, title: "Shareable Content", body: "Create content that audiences and stakeholders naturally share across networks." },
];

export const PressReleaseBenefits = () => {
  return (
    <EditorialSection>
      <SectionLabel index="02" label="Press Release Benefits" className="mb-14 max-w-2xl" />

      <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-16 gap-y-8 mb-16 items-end">
          <h2 className="lg:col-span-6 font-serif text-white text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.15] tracking-[-0.015em] text-balance">
            What one well-placed release actually returns.
          </h2>
          <p className="lg:col-span-6 text-[clamp(1.02rem,1.4vw,1.15rem)] leading-[1.8] text-muted-white/80 font-light max-w-[54ch]">
            Earned coverage does work that paid media cannot buy. These are the returns we hold
            ourselves accountable for on every distribution.
          </p>
        </div>
      </Reveal>

      {/* Ten items divide evenly at both two and five columns. */}
      <div className="rule-table grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <Reveal
              key={benefit.title}
              delay={Math.min(index * 0.05, 0.25)}
              className="group p-7 lg:p-8 transition-colors duration-500 hover:bg-white/[0.02]"
            >
              <Icon
                size={24}
                strokeWidth={1.4}
                className="text-gold mb-6 transition-transform duration-500 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
              <h3 className="font-serif text-white text-lg leading-snug mb-3 text-balance">
                {benefit.title}
              </h3>
              <p className="text-muted-white/70 text-[0.9rem] leading-[1.75] font-light">
                {benefit.body}
              </p>
            </Reveal>
          );
        })}
      </div>
    </EditorialSection>
  );
};
