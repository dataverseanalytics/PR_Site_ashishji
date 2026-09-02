import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { getCaseStudy } from "../components/caseStudies/caseStudiesData";


export const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = getCaseStudy(slug);

  if (!study) {
    return (
      <div className="bg-deep-navy min-h-screen pt-32 pb-24 text-center text-white">
        <h1 className="text-4xl font-serif mb-4">Case Study Not Found</h1>
        <Link to="/case-studies" className="text-gold hover:underline">Return to Case Studies</Link>
      </div>
    );
  }

  return (
    <div className="bg-deep-navy min-h-screen pb-24">
      {/* Hero Image */}
      <div className="relative h-[40vh] md:h-[60vh] w-full">
        <div className="absolute inset-0 bg-deep-navy/70 mix-blend-multiply z-10"></div>
        <img 
          src={study.image} 
          alt={study.alt} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/case-studies" className="inline-flex items-center text-muted-white hover:text-gold transition-colors mb-6 text-sm uppercase tracking-wider">
                <ArrowLeft size={16} className="mr-2" /> Back to Case Studies
              </Link>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="bg-gold text-deep-navy text-xs uppercase tracking-wider px-3 py-1 rounded-sm font-semibold">
                  {study.category}
                </span>
                <span className="bg-deep-navy/85 backdrop-blur-md text-xs text-muted-white uppercase tracking-wider px-3 py-1 rounded-sm border border-white/15">
                  {study.sector}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight max-w-4xl">
                {study.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif text-white mb-6">The Challenge</h2>
              <p className="text-lg text-muted-white/80 leading-relaxed">
                {study.challenge}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif text-white mb-6">Our Strategy</h2>
              <p className="text-lg text-muted-white/80 leading-relaxed">
                {study.strategy}
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif text-white mb-6">The Results</h2>
              <ul className="space-y-4">
                {study.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gold mr-3 mt-1 text-xl leading-none">•</span>
                    <span className="text-lg text-muted-white/80">{result}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-card p-8 sticky top-32">
              <h3 className="text-xl font-serif text-white mb-6 border-b border-white/10 pb-4">Project Details</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm text-muted-white/60 uppercase tracking-wider mb-1">Client</h4>
                  <p className="text-white font-medium">{study.client}</p>
                </div>
                <div>
                  <h4 className="text-sm text-muted-white/60 uppercase tracking-wider mb-1">Category</h4>
                  <p className="text-white font-medium">{study.category}</p>
                </div>
                <div>
                  <h4 className="text-sm text-muted-white/60 uppercase tracking-wider mb-1">Sector</h4>
                  <p className="text-white font-medium">{study.sector}</p>
                </div>
                <div>
                  <h4 className="text-sm text-muted-white/60 uppercase tracking-wider mb-1">Date</h4>
                  <p className="text-white font-medium">{study.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
