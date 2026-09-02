import { Target, Users, ShieldAlert, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const indicators = [
  {
    icon: <Target className="text-gold" size={24} />,
    title: "Strategic PR",
    description: "Data-driven strategies that deliver real impact.",
  },
  {
    icon: <Users className="text-gold" size={24} />,
    title: "Media Network",
    description: "Strong connections with leading media outlets.",
  },
  {
    icon: <ShieldAlert className="text-gold" size={24} />,
    title: "Crisis Management",
    description: "Protecting your brand during critical moments.",
  },
  {
    icon: <BarChart3 className="text-gold" size={24} />,
    title: "Measurable Results",
    description: "Transparent reporting with measurable ROI.",
  },
];

export const TrustIndicators = () => {
  return (
    <section className="bg-dark-navy py-16 border-b border-white/5 relative z-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1920&auto=format&fit=crop" 
          alt="Strategy Background" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-dark-navy/80 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-navy via-transparent to-dark-navy z-20"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 group"
            >
              <div className="mt-1 bg-navy-blue p-3 rounded-sm group-hover:bg-gold/10 transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="text-white font-serif text-lg mb-2 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-white/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
