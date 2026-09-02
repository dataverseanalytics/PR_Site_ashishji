import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { Target, Globe, ShieldAlert, LineChart } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-deep-navy">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          alt="Corporate PR Office Background" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-deep-navy/80 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/90 to-transparent z-20"></div>
        {/* Subtle glow effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] z-30 pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] z-30 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-4">
              We Build Reputation.<br />
              <span className="text-gold mt-2 block">You Build Legacy.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-white/90 mb-10 max-w-lg font-light leading-relaxed">
              A full-service public relations agency working across India's national, business and regional press. We start with your business problem, not a press release — because silence isn't a strategy.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-16">
              <Link to="/services">
                <Button variant="primary" size="lg">Our Services</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">Get in Touch</Button>
              </Link>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
              <div className="flex items-start gap-4 group">
                <div className="text-gold mt-1 group-hover:scale-110 transition-transform">
                  <Target size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Strategy First</h4>
                  <p className="text-sm text-muted-white/70 leading-relaxed">Every tactic follows the business objective, never the other way round.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="text-gold mt-1 group-hover:scale-110 transition-transform">
                  <Globe size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">India-Wide Network</h4>
                  <p className="text-sm text-muted-white/70 leading-relaxed">National dailies, business press, broadcast, wire and regional language media.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="text-gold mt-1 group-hover:scale-110 transition-transform">
                  <ShieldAlert size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Crisis Response</h4>
                  <p className="text-sm text-muted-white/70 leading-relaxed">Rapid, candid counsel when reputation is the thing at stake.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="text-gold mt-1 group-hover:scale-110 transition-transform">
                  <LineChart size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Outcomes, Not Clippings</h4>
                  <p className="text-sm text-muted-white/70 leading-relaxed">Measured on credibility and perception shift, not impression counts.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Composition - Large Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center lg:justify-end relative items-center"
          >
            <div className="relative w-full max-w-[500px] flex items-center justify-center p-8">
              <img 
                src="/askforpr_logo_white_reversed.svg" 
                alt="AskForPR Large Logo" 
                className="w-full h-auto drop-shadow-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/askforpr_logo_color.svg";
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
