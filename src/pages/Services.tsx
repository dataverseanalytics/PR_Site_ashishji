import { ServicesHero } from "../components/services/ServicesHero";
import { ServiceCatalogue } from "../components/services/ServiceCatalogue";
import { PressReleaseBenefits } from "../components/services/PressReleaseBenefits";
import { WhyChooseUs } from "../components/services/WhyChooseUs";
import { EditorialCTA } from "../components/ui/EditorialCTA";

export const Services = () => {
  return (
    <div className="bg-deep-navy min-h-screen">
      <ServicesHero />
      <ServiceCatalogue />
      <PressReleaseBenefits />
      <WhyChooseUs />
      <EditorialCTA
        index="04"
        label="Let's Talk"
        heading="Tell us the outcome. We'll build the programme."
        body="Whether you need a single launch covered or a twelve-month programme across print, digital and stage, the conversation starts the same way — with your objective, not our rate card."
        primary={{ label: "Discuss your PR needs", to: "/contact" }}
        secondary={{ label: "See the sectors we serve", to: "/sectors" }}
      />
    </div>
  );
};
