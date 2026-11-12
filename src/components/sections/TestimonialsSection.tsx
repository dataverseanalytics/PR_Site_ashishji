import { motion } from "framer-motion";
import { SectionHeader } from "../ui/SectionHeader";
import { Quote } from "lucide-react";

/**
 * PLACEHOLDER COPY — these are illustrative client voices written to show the
 * section working, not real endorsements. Company names are invented. Replace
 * each entry with a genuine, approved client quote before launch.
 *
 * Deliberately no headshots: pairing a stock photo of a real person with a
 * written quote misrepresents them. Monograms carry the same weight honestly.
 */
const testimonials = [
  {
    quote:
      "We had a strong product and no story. AskForPR built the narrative first and pitched second — and it showed. Within a quarter we were being quoted in Mint and YourStory as a category voice, not just another startup.",
    author: "Ananya Iyer",
    role: "Co-founder, Aarambh Labs",
    initials: "AI",
  },
  {
    quote:
      "In financial services, one careless line becomes a regulatory problem. They understood compliance before they understood our pitch. That is rarer than it should be.",
    author: "Rohit Malhotra",
    role: "CEO, Anvaya Capital",
    initials: "RM",
  },
  {
    quote:
      "Our clinical results were genuinely significant and completely unreadable to a general audience. They translated the science without diluting it, and the coverage reached the patients we needed it to reach.",
    author: "Dr. Kavita Desai",
    role: "Director, Sutra Health",
    initials: "KD",
  },
  {
    quote:
      "A handover dispute put us on the front page for the wrong reasons. They had a holding statement out the same morning and a plan by evening. Six months on, the sentiment had genuinely turned.",
    author: "Siddharth Rao",
    role: "Managing Director, Suryodaya Realty",
    initials: "SR",
  },
  {
    quote:
      "They talked us out of a launch campaign we were set on and proposed something quieter and sharper. It worked better. An agency that pushes back is worth paying for.",
    author: "Meera Krishnan",
    role: "Founder, Nimble Kart",
    initials: "MK",
  },
  {
    quote:
      "We make components nobody outside the industry has heard of. They found the angle that made trade press and national business desks care about the same story.",
    author: "Vikram Shetty",
    role: "VP Communications, Bharat Loom Industries",
    initials: "VS",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-deep-navy relative z-20 border-t border-white/5 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          loading="lazy"
          decoding="async"
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1920&auto=format&fit=crop"
          alt="Client Meeting Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-15"
        />
        <div className="absolute inset-0 bg-deep-navy/80 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-deep-navy via-transparent to-deep-navy z-20"></div>
      </div>

      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2 z-10"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-30">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Founders and communications leads across India on what changed once the story was right."
          alignment="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.figure
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="h-full flex flex-col bg-dark-navy/70 backdrop-blur-sm border border-navy-blue rounded-sm p-8 hover:border-gold/50 transition-colors duration-300"
            >
              <Quote size={26} strokeWidth={1.4} className="text-gold/70 mb-6 shrink-0" aria-hidden="true" />

              <blockquote className="text-muted-white/80 leading-[1.8] font-light flex-grow">
                {testimonial.quote}
              </blockquote>

              <figcaption className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
                <span
                  aria-hidden="true"
                  className="shrink-0 w-11 h-11 rounded-full border border-gold/50 text-gold font-serif text-sm flex items-center justify-center tracking-wide"
                >
                  {testimonial.initials}
                </span>
                <span>
                  <span className="block text-white font-medium leading-snug">{testimonial.author}</span>
                  <span className="block text-sm text-muted-white/60 leading-snug">{testimonial.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
