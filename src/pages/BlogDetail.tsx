import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

// Mock data (in a real app, this would be fetched from an API/CMS based on the slug)
const blogData: Record<string, any> = {
  "how-pr-can-transform-public-image": {
    category: "PR Strategy",
    date: "18 May 2026",
    author: "Sarah Jenkins",
    title: "Why Silence Isn't a Strategy for Indian Brands",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=75&w=1200&h=800&fit=crop&auto=format",
    content: `
      <p class="mb-6">In today's hyper-connected world, a brand is no longer just what a company tells consumers it is—it's what consumers tell each other it is. Public Relations plays a foundational role in shaping this narrative.</p>
      
      <h3 class="text-2xl font-serif text-white mb-4 mt-8">The Power of Perception</h3>
      <p class="mb-6">Public image is everything. A single viral tweet can elevate a brand to new heights or bring it crashing down. Strategic PR ensures that you are actively managing your reputation, rather than letting the internet manage it for you.</p>
      
      <p class="mb-6">By securing third-party validation from trusted media outlets, brands can establish a level of credibility that traditional advertising simply cannot buy. When a respected journalist writes positively about your product, it acts as a powerful endorsement.</p>
      
      <h3 class="text-2xl font-serif text-white mb-4 mt-8">Building Long-Term Trust</h3>
      <p class="mb-6">PR is a marathon, not a sprint. Consistency in messaging, transparency during crises, and continuous engagement with your audience are key components to building long-term trust.</p>
      
      <blockquote class="border-l-4 border-gold pl-6 py-2 my-8 text-xl font-serif italic text-white">
        "PR is about creating a consistent, authentic voice that resonates with your audience and stands the test of time."
      </blockquote>
      
      <p>Investing in a solid PR strategy now means you have a reservoir of goodwill to draw upon when challenges arise in the future.</p>
    `
  },
  "top-pr-trends-2026": {
    category: "Industry Trends",
    date: "12 May 2026",
    author: "Michael Chen",
    title: "What Actually Changed in Indian Media This Year",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=75&w=1200&h=800&fit=crop&auto=format",
    content: `
      <p class="mb-6">As the media landscape continues to evolve, PR professionals must adapt to new technologies and changing consumer behaviors. Here are the top trends shaping the PR industry in 2026.</p>
      
      <h3 class="text-2xl font-serif text-white mb-4 mt-8">1. AI-Driven Storytelling</h3>
      <p class="mb-6">Artificial Intelligence is no longer just a buzzword; it's a critical tool for PR professionals. From analyzing media sentiment to generating initial drafts of press materials, AI is streamlining workflows and allowing agencies to focus on high-level strategy.</p>
      
      <h3 class="text-2xl font-serif text-white mb-4 mt-8">2. Hyper-Personalized Media Pitching</h3>
      <p class="mb-6">The "spray and pray" approach to media relations is dead. Journalists expect pitches tailored specifically to their beat and recent coverage. Data analytics tools are making it easier to identify the perfect reporter for every story.</p>
      
      <h3 class="text-2xl font-serif text-white mb-4 mt-8">3. Authentic Executive Branding</h3>
      <p class="mb-6">Consumers want to know the people behind the brands they buy from. Establishing founders and C-suite executives as thought leaders on platforms like LinkedIn has become a core component of modern PR strategies.</p>
    `
  },
  "crisis-communication-protecting-brand": {
    category: "Crisis Management",
    date: "05 May 2026",
    author: "Elena Rodriguez",
    title: "The First Six Hours: Crisis Response in the WhatsApp Era",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=75&w=1200&h=800&fit=crop&auto=format",
    content: `
      <p class="mb-6">No brand is immune to a crisis. Whether it's a product recall, an executive scandal, or a social media misstep, how a company responds in the first 24 hours often dictates the long-term impact on its reputation.</p>
      
      <h3 class="text-2xl font-serif text-white mb-4 mt-8">The Golden Rules of Crisis PR</h3>
      
      <ol class="list-decimal pl-6 space-y-4 mb-8">
        <li><strong>Act Quickly but Strategically:</strong> Silence allows others to control the narrative. Acknowledge the issue immediately, even if you don't have all the answers yet.</li>
        <li><strong>Take Responsibility:</strong> If your company is at fault, apologize sincerely. Avoid non-apologies like "We're sorry if anyone was offended."</li>
        <li><strong>Communicate the Fix:</strong> Outline exactly what steps are being taken to resolve the issue and ensure it never happens again.</li>
      </ol>
      
      <p class="mb-6">Having a comprehensive crisis communication plan in place before disaster strikes is the best insurance policy a brand can have. Preparedness turns potential catastrophes into manageable hurdles.</p>
    `
  },
  "ceo-activism-navigating-social-issues": {
    category: "Thought Leadership",
    date: "28 Apr 2026",
    author: "Marcus Vance",
    title: "When Should an Indian Founder Speak Publicly?",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=75&w=1200&h=800&fit=crop&auto=format",
    content: `
      <p class="mb-6">The era of the silent CEO is over. Today's consumers, employees, and investors expect corporate leaders to take a stand on pressing national and global issues. However, CEO activism requires careful navigation.</p>
      
      <h3 class="text-2xl font-serif text-white mb-4 mt-8">Alignment with Core Values</h3>
      <p class="mb-6">Before speaking out on a social issue, executives must ensure their stance aligns with the company's core values. Authentic activism resonates; performative activism—often termed 'woke-washing'—will be quickly dismantled by the public.</p>
      
      <blockquote class="border-l-4 border-gold pl-6 py-2 my-8 text-xl font-serif italic text-white">
        "Your external voice can only be as strong as your internal culture."
      </blockquote>
      
      <h3 class="text-2xl font-serif text-white mb-4 mt-8">The Risk of Alienation</h3>
      <p class="mb-6">Taking a stand inevitably means alienating a segment of the audience. PR strategists must weigh the risk of losing some customers against the benefit of deepening loyalty with others. The key is to act on conviction, not convenience.</p>
    `
  },
  "measuring-pr-roi-beyond-vanity-metrics": {
    category: "Data & Analytics",
    date: "15 Apr 2026",
    author: "David Kim",
    title: "Measuring PR Beyond AVE and Impression Counts",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=75&w=1200&h=800&fit=crop&auto=format",
    content: `
      <p class="mb-6">For decades, PR was considered a 'dark art' that was impossible to measure. Today, relying on vanity metrics like 'Advertising Value Equivalency' (AVE) or raw impression counts is no longer sufficient.</p>
      
      <h3 class="text-2xl font-serif text-white mb-4 mt-8">Connecting PR to Business Outcomes</h3>
      <p class="mb-6">Modern PR measurement must tie media efforts directly to business goals. This involves looking at:</p>
      
      <ul class="list-disc pl-6 space-y-4 mb-8">
        <li><strong>Share of Voice:</strong> How much are you being talked about compared to your competitors?</li>
        <li><strong>Sentiment Analysis:</strong> Are the mentions positive, negative, or neutral?</li>
        <li><strong>Referral Traffic:</strong> Are PR placements driving qualified traffic to your website?</li>
        <li><strong>Message Pull-Through:</strong> Are publications actually repeating your key brand messages?</li>
      </ul>
      
      <p class="mb-6">By utilizing advanced analytics and custom tracking parameters, agencies can finally prove the tangible ROI of their strategic communication efforts.</p>
    `
  },
  "influencer-marketing-b2b-brands": {
    category: "Digital PR",
    date: "02 Apr 2026",
    author: "Priya Patel",
    title: "Why B2B Brands in India Are Backing Niche Industry Voices",
    image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?q=75&w=1200&h=800&fit=crop&auto=format",
    content: `
      <p class="mb-6">When we hear 'influencer marketing,' we often think of fashion bloggers on Instagram or gamers on YouTube. However, the most significant shift in digital PR is the rise of B2B influencer marketing.</p>
      
      <h3 class="text-2xl font-serif text-white mb-4 mt-8">Niche Voices Drive High Value</h3>
      <p class="mb-6">In the B2B space, the goal isn't necessarily massive reach; it's deep trust. An industry analyst, a respected academic, or a successful SaaS founder with 10,000 highly engaged LinkedIn followers can drive more enterprise sales than a lifestyle influencer with a million followers.</p>
      
      <h3 class="text-2xl font-serif text-white mb-4 mt-8">Co-Creation over Sponsorships</h3>
      <p class="mb-6">B2B influencer campaigns perform best when they focus on co-creation. Think joint webinars, co-authored whitepapers, or in-depth podcast interviews, rather than simple sponsored posts. This approach positions your brand alongside an industry authority, leveraging their credibility to validate your expertise.</p>
    `
  }
};

export const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? blogData[slug] : null;

  if (!article) {
    return (
      <div className="bg-deep-navy min-h-screen pt-32 pb-24 text-center text-white">
        <h1 className="text-4xl font-serif mb-4">Article Not Found</h1>
        <Link to="/blog" className="text-gold hover:underline">Return to Blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-deep-navy min-h-screen pt-20 pb-24">
      {/* Hero Header */}
      <div className="container mx-auto px-6 lg:px-12 pt-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Link to="/blog" className="inline-flex items-center text-muted-white hover:text-gold transition-colors mb-8 text-sm uppercase tracking-wider">
            <ArrowLeft size={16} className="mr-2" /> Back to Insights
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-white/60 mb-6">
            <span className="flex items-center text-gold font-medium uppercase tracking-wider">
              <Tag size={16} className="mr-2" /> {article.category}
            </span>
            <span className="flex items-center">
              <Calendar size={16} className="mr-2" /> {article.date}
            </span>
            <span className="flex items-center">
              <User size={16} className="mr-2" /> By {article.author}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8">
            {article.title}
          </h1>
        </motion.div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-[50vh] md:h-[70vh] rounded-lg overflow-hidden border border-white/10 shadow-2xl"
        >
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-lg text-muted-white/90 leading-relaxed font-light prose prose-invert prose-headings:font-serif prose-headings:text-white prose-a:text-gold hover:prose-a:text-white prose-blockquote:border-gold prose-blockquote:bg-navy-blue/30 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-white"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </div>
  );
};
