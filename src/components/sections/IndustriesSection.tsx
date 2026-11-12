import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MonitorSmartphone, Landmark, HeartPulse, Building2, ShoppingBag, Zap, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { sectors } from "../sectors/sectorsData";

/** Six of the fifteen sectors, surfaced on the home page. Names and slugs are
 *  pulled from sectorsData so this can never drift from the Sectors page. */
const featured = [
  { slug: "technology-saas", icon: <MonitorSmartphone size={32} />, desc: "Positioning innovators as market leaders." },
  { slug: "finance-banking", icon: <Landmark size={32} />, desc: "Building trust in complex financial markets." },
  { slug: "healthcare-pharmaceuticals", icon: <HeartPulse size={32} />, desc: "Navigating regulations while amplifying breakthroughs." },
  { slug: "real-estate-property", icon: <Building2 size={32} />, desc: "Driving visibility for major developments." },
  { slug: "consumer-goods-cpg", icon: <ShoppingBag size={32} />, desc: "Creating cultural moments that drive sales." },
  { slug: "renewable-energy-sustainability", icon: <Zap size={32} />, desc: "Shaping the narrative for a greener future." },
].map((item) => ({
  ...item,
  name: sectors.find((s) => s.slug === item.slug)!.name,
}));

export const IndustriesSection = () => {
  return (
    <section className="py-24 bg-dark-navy relative z-20 border-t border-white/5 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          loading="lazy"
          decoding="async"
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1920&auto=format&fit=crop"
          alt="City Skyline Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-dark-navy/80 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-navy via-transparent to-dark-navy z-20"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader
          title="Industries We Serve"
          subtitle="Specialized PR expertise across key national sectors."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {featured.map((ind, index) => (
            <motion.div
              key={ind.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/sectors#${ind.slug}`}
                className="block h-full bg-deep-navy border border-navy-blue rounded-sm p-8 group hover:border-gold/50 transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500 pointer-events-none"></div>
                <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                  {ind.icon}
                </div>
                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-gold transition-colors flex items-center gap-2">
                  {ind.name}
                  <ArrowUpRight
                    size={18}
                    className="text-gold opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0"
                    aria-hidden="true"
                  />
                </h3>
                <p className="text-muted-white/70 text-sm leading-relaxed">{ind.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/sectors"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 border border-white/15 text-muted-white hover:text-gold hover:border-gold/50 transition-colors duration-300 rounded-sm text-base font-medium"
          >
            View all {sectors.length} sectors we serve
            <ArrowUpRight size={18} strokeWidth={1.6} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};
