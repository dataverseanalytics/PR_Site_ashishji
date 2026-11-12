import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "../../config/contact";
import { Button } from "../ui/Button";
import { cn } from "../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Media Coverage", path: "/media-coverage" },
  { name: "Contact Us", path: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-deep-navy/90 backdrop-blur-md border-white/5 py-4 shadow-lg"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center relative z-50">
            <img 
              src="/ask_for_pr_logo_reverse.svg"
              alt="Ask For PR"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-base font-medium transition-colors hover:text-gold",
                  location.pathname === link.path
                    ? "text-gold"
                    : "text-muted-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden xl:flex items-center gap-5">
            <Link to="/contact">
              <Button variant="primary" size="sm">Get in Touch</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden text-white z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-deep-navy pt-24 px-6 flex flex-col xl:hidden"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "text-2xl font-serif transition-colors",
                    location.pathname === link.path
                      ? "text-gold"
                      : "text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                <Link to="/contact" className="block w-full">
                  <Button variant="primary" className="w-full" size="lg">Get in Touch</Button>
                </Link>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full h-14 rounded-sm bg-[#25D366] text-deep-navy font-semibold"
                >
                  <FaWhatsapp size={22} aria-hidden="true" />
                  WhatsApp us
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
