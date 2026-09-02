import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink, PHONE_DISPLAY } from "../../config/contact";

/**
 * Persistent WhatsApp action, rendered once in the Layout so it is available
 * on every page. Sits above page content but clear of the viewport edges.
 */
export const WhatsAppButton = () => (
  <a
    href={whatsappLink()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Chat with AskForPR on WhatsApp at ${PHONE_DISPLAY}`}
    className="group fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40 flex items-center gap-3 rounded-full bg-[#25D366] pl-4 pr-5 h-14 text-deep-navy shadow-lg shadow-black/30 hover:bg-[#1FBF5B] transition-colors duration-300"
  >
    <FaWhatsapp size={26} aria-hidden="true" />
    <span className="hidden sm:inline text-sm font-semibold whitespace-nowrap">
      Chat on WhatsApp
    </span>
  </a>
);
