import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Button } from "../components/ui/Button";
import { useState } from "react";
import {
  PHONE_TEL,
  PHONE_DISPLAY,
  EMAIL,
  whatsappLink,
  buildEnquiryMessage,
} from "../config/contact";

export const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sentLink, setSentLink] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = whatsappLink(buildEnquiryMessage(formState));

    // Opened synchronously inside the submit handler so the browser treats it
    // as user-initiated and does not block it. The confirmation panel repeats
    // the link in case a blocker still intervenes.
    window.open(link, "_blank", "noopener,noreferrer");

    setSentLink(link);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", phone: "", company: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

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
        {/* Background glow */}
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-gold/5 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6">
              Let's Build Your Brand's Presence Together.
            </h1>
            <p className="text-lg text-muted-white/80 mb-12 max-w-md">
              Ready to elevate your PR strategy? Get in touch with us to discuss how we can help you achieve your goals.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4 group">
                <div className="bg-navy-blue p-3 rounded-sm group-hover:bg-gold/10 transition-colors">
                  <Phone className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-serif mb-1">Phone</h4>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="text-muted-white/80 hover:text-gold transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-navy-blue p-3 rounded-sm group-hover:bg-gold/10 transition-colors">
                  <FaWhatsapp className="text-gold" size={24} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-white font-serif mb-1">WhatsApp</h4>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-white/80 hover:text-gold transition-colors"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-navy-blue p-3 rounded-sm group-hover:bg-gold/10 transition-colors">
                  <Mail className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-serif mb-1">Email</h4>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-muted-white/80 hover:text-gold transition-colors"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="bg-navy-blue p-3 rounded-sm group-hover:bg-gold/10 transition-colors">
                  <MapPin className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-serif mb-1">Office Address</h4>
                  <p className="text-muted-white/80 max-w-[250px]">
                    Ahmedabad, Gujarat
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-serif mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-navy-blue flex items-center justify-center rounded-sm text-muted-white hover:text-deep-navy hover:bg-gold transition-all">
                  <FaLinkedin size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-navy-blue flex items-center justify-center rounded-sm text-muted-white hover:text-deep-navy hover:bg-gold transition-all">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-navy-blue flex items-center justify-center rounded-sm text-muted-white hover:text-deep-navy hover:bg-gold transition-all">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-navy-blue flex items-center justify-center rounded-sm text-muted-white hover:text-deep-navy hover:bg-gold transition-all">
                  <FaTwitter size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 md:p-12"
          >
            <h3 className="text-2xl font-serif text-white mb-8">Send us a message</h3>
            
            {isSubmitted ? (
              <div className="border border-gold/40 bg-gold/5 rounded-sm p-8 text-center">
                <FaWhatsapp className="text-[#25D366] mx-auto mb-4" size={40} aria-hidden="true" />
                <h4 className="text-white font-serif text-xl mb-3">Opening WhatsApp…</h4>
                <p className="text-muted-white/80 leading-relaxed mb-6">
                  Your enquiry has been prefilled as a WhatsApp message to {PHONE_DISPLAY}.
                  Press send in WhatsApp and we&rsquo;ll pick it up from there.
                </p>
                <a
                  href={sentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-sm bg-[#25D366] text-deep-navy font-semibold hover:bg-[#1FBF5B] transition-colors"
                >
                  <FaWhatsapp size={20} aria-hidden="true" />
                  Didn&rsquo;t open? Tap here
                </a>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="block mx-auto mt-5 text-sm text-muted-white/70 hover:text-gold transition-colors"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-muted-white/80 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full bg-deep-navy border border-navy-blue rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-muted-white/80 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full bg-deep-navy border border-navy-blue rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-muted-white/80 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full bg-deep-navy border border-navy-blue rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="+91 90000 00000"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-muted-white/80 mb-2">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleChange}
                      className="w-full bg-deep-navy border border-navy-blue rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-muted-white/80 mb-2">Service Required</label>
                  <select
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full bg-deep-navy border border-navy-blue rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors appearance-none"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="Digital PR Articles">Digital PR Articles</option>
                    <option value="Print PR">Print PR (Newspaper Articles)</option>
                    <option value="Magazine Placements">Magazine Placements</option>
                    <option value="Thought Leadership">Thought Leadership</option>
                    <option value="Social Media Placements">Social Media Placements</option>
                    <option value="SEO PR Articles">SEO PR Articles</option>
                    <option value="Reputation Management">Reputation Management</option>
                    <option value="Crisis PR">Crisis PR</option>
                    <option value="Podcasts &amp; Interviews">Podcasts &amp; Interviews</option>
                    <option value="Award &amp; Recognition">Award &amp; Recognition</option>
                    <option value="Panels &amp; Speakerships">Panels &amp; Speakerships</option>
                    <option value="Influencer Marketing">Influencer Marketing</option>
                    <option value="Press Conference">Press Conference</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted-white/80 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-deep-navy border border-navy-blue rounded-sm px-4 py-3 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" className="w-full" size="lg">
                  Send via WhatsApp
                </Button>
                <p className="text-xs text-muted-white/60 text-center leading-relaxed">
                  Submitting opens WhatsApp with your details prefilled, so you can send
                  them to us in one tap.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
