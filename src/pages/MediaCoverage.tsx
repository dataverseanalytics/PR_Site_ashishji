import { SectionHeader } from "../components/ui/SectionHeader";
import { Button } from "../components/ui/Button";
import { MediaPartnersGrid } from "../components/partners/MediaPartnersGrid";

export const MediaCoverage = () => {
  return (
    <div className="bg-deep-navy min-h-screen pt-16 pb-24">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader
          as="h1"
          title="Featured In"
          subtitle="Our clients are consistently featured in the world's most influential media outlets."
        />
        
        <div className="mt-16 bg-navy-blue/30 rounded-lg p-8 md:p-12 border border-white/5 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-serif text-xl italic mb-4 block">"The premier PR agency for brands seeking authentic visibility."</span>
              <p className="text-muted-white/80 leading-relaxed mb-6">
                We have built deep, lasting relationships with journalists, editors, and producers across top-tier publications, broadcast networks, and digital media platforms.
              </p>
              <Button variant="outline">Download Media Kit</Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-dark-navy p-6 rounded-sm border border-white/5 flex flex-col justify-center items-center text-center">
                <div className="text-3xl font-serif text-gold mb-2">500+</div>
                <div className="text-xs text-muted-white uppercase tracking-wider">Features Secured</div>
              </div>
              <div className="bg-dark-navy p-6 rounded-sm border border-white/5 flex flex-col justify-center items-center text-center">
                <div className="text-3xl font-serif text-gold mb-2">50M+</div>
                <div className="text-xs text-muted-white uppercase tracking-wider">Audience Reached</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <MediaPartnersGrid />
    </div>
  );
};
