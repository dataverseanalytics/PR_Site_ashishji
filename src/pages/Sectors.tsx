import { useSeo } from "../hooks/useSeo";
import { pageSeo } from "../config/seo";
import { SectorsHero } from "../components/sectors/SectorsHero";
import { SectorsGrid } from "../components/sectors/SectorsGrid";
import { EditorialCTA } from "../components/ui/EditorialCTA";

export const Sectors = () => {
  useSeo(pageSeo.sectors);
  return (
    <div className="bg-deep-navy min-h-screen">
      <SectorsHero />
      <SectorsGrid />
      <EditorialCTA
        index="02"
        label="Let's Talk"
        heading="Tell us your sector. We'll tell you what works in it."
        body="Every engagement starts with your market, not our template. Reach out and we'll walk you through what has moved the needle for organizations facing the same regulators, buyers and news cycle as you."
        primary={{ label: "Start the conversation", to: "/contact" }}
        secondary={{ label: "Explore our services", to: "/services" }}
      />
    </div>
  );
};
