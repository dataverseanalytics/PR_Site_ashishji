import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, Globe, BarChart } from "lucide-react";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";

const processSteps = [
  {
    icon: <Search size={24} />,
    title: "Research",
    description: "We analyze your brand, industry and target audience.",
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Strategy",
    description: "We create a customized PR strategy that aligns with your goals.",
  },
  {
    icon: <Rocket size={24} />,
    title: "Execution",
    description: "We implement the plan and connect with right journalists.",
  },
  {
    icon: <Globe size={24} />,
    title: "Coverage",
    description: "We secure media coverage and maximize visibility.",
  },
  {
    icon: <BarChart size={24} />,
    title: "Results",
    description: "We measure impact and deliver transparent reports.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-24 bg-deep-navy relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&auto=format&fit=crop" 
          alt="Team Process Background" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-deep-navy/80 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-transparent to-deep-navy z-20"></div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[150px] rounded-full pointer-events-none z-10"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader
          title="Our Process"
          subtitle="A proven approach to deliver impactful PR results."
          alignment="center"
        />

        <div className="relative mt-20 mb-16">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-white/10 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Connecting Arrow for Desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 -right-4 md:-right-2 lg:-right-6 text-gold/30 z-20">
                    →
                  </div>
                )}
                
                {/* Vertical Line for Mobile */}
                {index < processSteps.length - 1 && (
                  <div className="md:hidden absolute top-24 bottom-[-3rem] left-1/2 w-px bg-white/10 z-0 -translate-x-1/2"></div>
                )}

                <div className="w-24 h-24 rounded-full border-2 border-white/10 bg-deep-navy flex items-center justify-center mb-6 group-hover:border-gold/50 group-hover:bg-navy-blue transition-all duration-300 relative z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <div className="text-gold group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-gold text-deep-navy font-serif font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-deep-navy">
                    0{index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-serif text-white mb-3 group-hover:text-gold transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-white/70 max-w-[200px] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link to="/contact">
            <Button variant="primary" size="lg">Let's Start Your Project</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
