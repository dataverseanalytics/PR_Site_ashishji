import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Button } from "../components/ui/Button";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    slug: "how-pr-can-transform-public-image",
    category: "PR Strategy",
    date: "18 May 2026",
    title: "Why Silence Isn't a Strategy for Indian Brands",
    description: "Reputation in India is now built in real time, in public, and often in a language your comms team doesn't monitor.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=75&w=1200&h=800&fit=crop&auto=format",
  },
  {
    slug: "top-pr-trends-2026",
    category: "Industry Trends",
    date: "12 May 2026",
    title: "What Actually Changed in Indian Media This Year",
    description: "Wire syndication, regional-language scale and the collapse of the embargo — what shifted, and what it means for your pitch.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=75&w=1200&h=800&fit=crop&auto=format",
  },
  {
    slug: "crisis-communication-protecting-brand",
    category: "Crisis Management",
    date: "05 May 2026",
    title: "The First Six Hours: Crisis Response in the WhatsApp Era",
    description: "By the time a story reaches a national desk it has already been on forwarded messages for hours. Plan for that window.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=75&w=1200&h=800&fit=crop&auto=format",
  },
  {
    slug: "ceo-activism-navigating-social-issues",
    category: "Thought Leadership",
    date: "28 Apr 2026",
    title: "When Should an Indian Founder Speak Publicly?",
    description: "Founder visibility is an asset until it becomes a liability. A practical test for when to put your name to something.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=75&w=1200&h=800&fit=crop&auto=format",
  },
  {
    slug: "measuring-pr-roi-beyond-vanity-metrics",
    category: "Data & Analytics",
    date: "15 Apr 2026",
    title: "Measuring PR Beyond AVE and Impression Counts",
    description: "Ad Value Equivalency flatters everyone and proves nothing. What to measure instead when the goal is credibility.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=75&w=1200&h=800&fit=crop&auto=format",
  },
  {
    slug: "influencer-marketing-b2b-brands",
    category: "Digital PR",
    date: "02 Apr 2026",
    title: "Why B2B Brands in India Are Backing Niche Industry Voices",
    description: "In sectors where ten buyers matter more than ten million readers, a trade newsletter beats a national front page.",
    image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=75&w=1200&h=800&fit=crop&auto=format",
  }
];

export const Blog = () => {
  return (
    <div className="bg-deep-navy min-h-screen pt-20 pb-24 relative overflow-hidden">
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
          title="Insights"
          subtitle="News, Trends, and Resources."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 mb-20">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card overflow-hidden group flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-navy-blue/30 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gold text-xs uppercase tracking-wider font-semibold">
                    {article.category}
                  </span>
                  <span className="text-muted-white/60 text-xs">
                    {article.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-serif text-white mb-4 group-hover:text-gold transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-muted-white/80 leading-relaxed text-sm mb-6 flex-grow">
                  {article.description}
                </p>
                
                <Link to={`/blog/${article.slug}`} className="flex items-center text-gold text-sm font-medium hover:text-white transition-colors mt-auto w-fit">
                  Read More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button variant="primary" size="lg">View All Posts</Button>
        </div>
      </div>
    </div>
  );
};
