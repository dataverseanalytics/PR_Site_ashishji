import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 9, suffix: "+", label: "Years of Experience" },
  { value: 1000, suffix: "+", label: "Media Connections" },
  { value: 350, suffix: "+", label: "Happy Customers" },
  { value: 500, suffix: "+", label: "Successful Campaigns" },
];

const Counter = ({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function (easeOutExpo)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeProgress * (to - from) + from));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
};

export const StatsSection = () => {
  return (
    <section className="bg-dark-navy py-20 border-y border-white/5 relative z-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&auto=format&fit=crop" 
          alt="Data and Stats Background" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-dark-navy/80 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark-navy via-transparent to-dark-navy z-20"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/5">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`text-center ${index !== 0 ? "pl-8" : ""}`}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-gold font-bold mb-2 flex justify-center">
                <Counter to={stat.value} />
                {stat.suffix}
              </div>
              <p className="text-sm md:text-base text-muted-white/80 uppercase tracking-wider font-light">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
