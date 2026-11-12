import { useSeo } from "../hooks/useSeo";
import { pageSeo } from "../config/seo";
import { AboutHero } from "../components/about/AboutHero";
import { VisionMission } from "../components/about/VisionMission";
import { WhatWeDo } from "../components/about/WhatWeDo";
import { Differentiators } from "../components/about/Differentiators";
import { AboutValues } from "../components/about/AboutValues";
import { WhoWeServe } from "../components/about/WhoWeServe";
import { WhyWeExist } from "../components/about/WhyWeExist";
import { AboutCTA } from "../components/about/AboutCTA";
import { StatsSection } from "../components/sections/StatsSection";

export const About = () => {
  useSeo(pageSeo.about);
  return (
    <div className="bg-deep-navy min-h-screen">
      <AboutHero />
      <StatsSection />
      <VisionMission />
      <WhatWeDo />
      <Differentiators />
      <AboutValues />
      <WhoWeServe />
      <WhyWeExist />
      <AboutCTA />
    </div>
  );
};
