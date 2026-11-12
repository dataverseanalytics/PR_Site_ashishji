import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export const AboutSnippet = () => {
  return (
    <section className="py-24 bg-deep-navy relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          loading="lazy"
          decoding="async"
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop" 
          alt="Office Background" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-deep-navy/80 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-transparent to-deep-navy z-20"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6">
              Your Reputation.<br />
              <span className="text-gold">Our Responsibility.</span>
            </h2>
            <p className="text-lg text-muted-white/80 leading-relaxed mb-8">
              AskForPR is a full-service public relations agency for organizations that refuse to be overlooked. We combine strategic counsel, media expertise and creative storytelling to turn a story into market momentum.
            </p>
            <p className="text-lg text-muted-white/80 leading-relaxed mb-10">
              We work across fifteen sectors and fourteen placement formats — from startups building their first credibility to enterprises navigating transformation. We function as an extension of your team, not a vendor executing requests.
            </p>
            <Link to="/about">
              <Button variant="primary">Read our story</Button>
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gold/5 blur-3xl -z-10 rounded-full"></div>
            <div className="relative rounded-lg overflow-hidden border border-white/5 shadow-2xl group">
              <div className="absolute inset-0 bg-navy-blue/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                loading="lazy"
                decoding="async"
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=75&w=1000&h=750&fit=crop&auto=format" 
                alt="Communications team working together around a table" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
