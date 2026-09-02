import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { mediaPartners } from "../partners/mediaPartnersData";

/** A subset for the home page; the full network lives on /media-coverage. */
const featured = mediaPartners.slice(0, 10);

export const MediaCoverage = () => {
  return (
    <section className="py-24 bg-dark-navy relative z-20 border-t border-white/5 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1920&auto=format&fit=crop"
          alt="Media Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-dark-navy/80 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-navy via-transparent to-dark-navy z-20"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader
          title="Media Coverage"
          subtitle="We get your story featured in top-tier media outlets."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
          {featured.map((outlet, index) => (
            <motion.div
              key={outlet.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              title={outlet.name}
              className="bg-[#F4F6F8] rounded-sm aspect-[3/2] flex items-center justify-center p-4 hover:shadow-[0_0_20px_rgba(217,165,46,0.3)] transition-all duration-300 border border-transparent hover:border-gold"
            >
              <img
                src={outlet.logo}
                alt={`${outlet.name} logo`}
                loading="lazy"
                decoding="async"
                className="max-h-12 max-w-full w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link to="/media-coverage">
            <Button variant="outline" size="md">View More Coverage</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
