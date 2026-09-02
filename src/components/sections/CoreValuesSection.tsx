import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { Compass, Scale, Zap } from "lucide-react";

const values = [
  {
    icon: <Compass size={32} />,
    title: "Strategic Integrity",
    desc: "We don't spin. We strategize. Every campaign is built on a foundation of truth and transparency to ensure long-term brand equity.",
  },
  {
    icon: <Scale size={32} />,
    title: "Unwavering Advocacy",
    desc: "When crises hit, we are the shield. We protect our clients' interests fiercely while maintaining constructive media dialogue.",
  },
  {
    icon: <Zap size={32} />,
    title: "Relentless Innovation",
    desc: "The media landscape changes daily. We leverage data, AI, and emerging platforms to stay three steps ahead of the conversation.",
  },
];

export const CoreValuesSection = () => {
  return (
    <section className="py-24 bg-dark-navy relative z-20 border-t border-white/5 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920&auto=format&fit=crop" 
          alt="Core Values Background" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-dark-navy/85 z-10"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader
          title="Our Core Values"
          subtitle="The principles that drive our national success."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {values.map((val, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-deep-navy border border-navy-blue rounded-sm p-10 group hover:-translate-y-2 transition-all duration-300 relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-light-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="w-16 h-16 bg-navy-blue rounded-sm flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {val.icon}
              </div>
              
              <h3 className="text-xl font-serif text-white mb-4 group-hover:text-gold transition-colors">{val.title}</h3>
              <p className="text-muted-white/70 leading-relaxed text-sm">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
