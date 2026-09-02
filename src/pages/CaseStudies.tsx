import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Button } from "../components/ui/Button";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "../components/caseStudies/caseStudiesData";


export const CaseStudies = () => {
  return (
    <div className="bg-deep-navy min-h-screen pt-16 pb-24 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop" 
          alt="Office Background" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-deep-navy/85 z-10"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader
          as="h1"
          title="Case Studies"
          subtitle="Six engagements, and the reasoning behind each one. Every brief starts with the business problem, not the press release."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 mb-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card overflow-hidden group flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-navy-blue/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={study.image} 
                  alt={study.alt} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2 pr-4">
                  <span className="bg-dark-navy/85 backdrop-blur-md text-xs text-gold uppercase tracking-wider px-3 py-1 rounded-sm border border-gold/30">
                    {study.category}
                  </span>
                  <span className="bg-dark-navy/85 backdrop-blur-md text-xs text-muted-white/80 uppercase tracking-wider px-3 py-1 rounded-sm border border-white/10">
                    {study.sector}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-serif text-white mb-4 group-hover:text-gold transition-colors leading-snug">
                  {study.title}
                </h3>
                <p className="text-muted-white/80 leading-relaxed text-sm mb-6 flex-grow">
                  {study.description}
                </p>
                
                <Link to={`/case-studies/${study.slug}`} className="flex items-center text-gold text-sm font-medium hover:text-white transition-colors mt-auto w-fit">
                  Read More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link to="/contact">
            <Button variant="primary" size="lg">Discuss a brief like these</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
