import { useSeo } from "../hooks/useSeo";
import { pageSeo } from "../config/seo";
import { HeroSection } from "../components/sections/HeroSection";
import { TrustIndicators } from "../components/sections/TrustIndicators";
import { AboutSnippet } from "../components/sections/AboutSnippet";
import { StatsSection } from "../components/sections/StatsSection";
import { ProcessSection } from "../components/sections/ProcessSection";
import { IndustriesSection } from "../components/sections/IndustriesSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { MediaCoverage } from "../components/sections/MediaCoverage";

export const Home = () => {
  useSeo(pageSeo.home);
  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <AboutSnippet />
      <IndustriesSection />
      <StatsSection />
      <ProcessSection />
      <TestimonialsSection />
      <MediaCoverage />
    </>
  );
};
