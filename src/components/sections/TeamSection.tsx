import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const team = [
  {
    name: "Eleanor Sterling",
    role: "Founder & CEO",
    bio: "Former lead correspondent with 15+ years experience in corporate reputation.",
    image: "https://picsum.photos/seed/team1/400/500",
  },
  {
    name: "Marcus Vance",
    role: "Head of National Strategy",
    bio: "Mastermind behind some of the most successful tech IPO PR campaigns.",
    image: "https://picsum.photos/seed/team2/400/500",
  },
  {
    name: "Priya Patel",
    role: "Director of Media Relations",
    bio: "Unmatched network of global editors and producers across broadcast and print.",
    image: "https://picsum.photos/seed/team3/400/500",
  },
];

export const TeamSection = () => {
  return (
    <section className="py-24 bg-deep-navy relative z-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop" 
          alt="Team Working Background" 
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-deep-navy/85 z-10"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader
          title="National Leadership"
          subtitle="Guided by industry veterans who understand the media landscape inside and out."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="overflow-hidden rounded-sm relative aspect-[4/5] mb-6">
                <div className="absolute inset-0 bg-navy-blue/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Hover overlay with social links */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end justify-end p-6">
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 bg-gold text-deep-navy flex items-center justify-center rounded-sm hover:bg-white transition-colors transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300 delay-100">
                      <FaLinkedin size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-gold text-deep-navy flex items-center justify-center rounded-sm hover:bg-white transition-colors transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300 delay-150">
                      <FaTwitter size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-serif text-white mb-1 group-hover:text-gold transition-colors">{member.name}</h3>
              <p className="text-gold text-sm uppercase tracking-wider font-semibold mb-3">{member.role}</p>
              <p className="text-muted-white/70 leading-relaxed text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
