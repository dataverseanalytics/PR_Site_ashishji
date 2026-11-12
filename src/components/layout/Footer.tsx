import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Phone, Mail } from "lucide-react";
import { PHONE_TEL, PHONE_DISPLAY, EMAIL, whatsappLink } from "../../config/contact";
import { Button } from "../ui/Button";

export const Footer = () => {
  return (
    <footer className="bg-deep-navy border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <img
                loading="lazy"
                decoding="async"
                src="/ask_for_pr_logo_reverse.svg"
                alt="Ask For PR"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-white max-w-sm mb-6">
              Let's build your brand's reputation together. Strategic PR solutions that shape perception and amplify your story.
            </p>

            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-3 text-muted-white hover:text-gold transition-colors text-sm"
                >
                  <Phone size={16} className="text-gold shrink-0" aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-muted-white hover:text-gold transition-colors text-sm"
                >
                  <FaWhatsapp size={16} className="text-gold shrink-0" aria-hidden="true" />
                  WhatsApp us
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-3 text-muted-white hover:text-gold transition-colors text-sm"
                >
                  <Mail size={16} className="text-gold shrink-0" aria-hidden="true" />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Sectors", path: "/sectors" },
                { name: "Media Coverage", path: "/media-coverage" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-white hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Our Services</h4>
            <ul className="flex flex-col gap-3">
              {[
                "Media Relations",
                "Press Release Distribution",
                "Crisis Management",
                "Event PR",
                "Digital PR",
                "Brand Reputation",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to={`/services`}
                    className="text-muted-white hover:text-gold transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h4 className="text-white font-serif text-lg mb-6">Stay Connected</h4>
            <p className="text-sm text-muted-white mb-4">
              Subscribe to our newsletter for updates.
            </p>
            <div className="flex gap-2 mb-6">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-dark-navy border border-navy-blue rounded-sm px-4 py-2 text-sm w-full focus:outline-none focus:border-gold text-white"
              />
              <Button variant="primary" size="sm">
                Subscribe
              </Button>
            </div>
            <div className="flex gap-4">
              <a href="#" aria-label="AskForPR on LinkedIn" className="text-muted-white hover:text-gold transition-colors">
                <FaLinkedin size={20} aria-hidden="true" />
              </a>
              <a href="#" aria-label="AskForPR on Instagram" className="text-muted-white hover:text-gold transition-colors">
                <FaInstagram size={20} aria-hidden="true" />
              </a>
              <a href="#" aria-label="AskForPR on Facebook" className="text-muted-white hover:text-gold transition-colors">
                <FaFacebook size={20} aria-hidden="true" />
              </a>
              <a href="#" aria-label="AskForPR on Twitter" className="text-muted-white hover:text-gold transition-colors">
                <FaTwitter size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-white/60">
            © 2026 AskForPR. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-white/60">
            <Link to="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
