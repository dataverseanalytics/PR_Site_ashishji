import { EditorialCTA } from "../ui/EditorialCTA";

export const AboutCTA = () => (
  <EditorialCTA
    index="07"
    label="Let's Talk"
    heading="The best partnerships start with a conversation."
    body="If you're ready to tell your story with impact, we're ready to listen and help you succeed. Reach out to discuss your communications goals and explore how AskForPR can help you build the reputation and influence your organization deserves."
    primary={{ label: "Start the conversation", to: "/contact" }}
    secondary={{ label: "Explore our services", to: "/services" }}
  />
);
