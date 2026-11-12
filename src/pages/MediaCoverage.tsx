import { useSeo } from "../hooks/useSeo";
import { pageSeo } from "../config/seo";
import { MediaPartnersGrid } from "../components/partners/MediaPartnersGrid";

export const MediaCoverage = () => {
  useSeo(pageSeo.media);
  return (
    <div className="bg-deep-navy min-h-screen pt-16 pb-24">
      <MediaPartnersGrid />
    </div>
  );
};
