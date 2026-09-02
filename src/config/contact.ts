/**
 * Single source of truth for how the business is reached.
 * Change the number here and it updates everywhere on the site.
 */

/** Digits only, with country code — the format wa.me requires. */
export const WHATSAPP_NUMBER = "919116180227";

/** For tel: links. */
export const PHONE_TEL = "+919116180227";

/** For display to humans. */
export const PHONE_DISPLAY = "+91 91161 80227";

export const EMAIL = "hello@askforpr.com";

/** Used when someone taps WhatsApp without having filled anything in. */
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hi AskForPR, I'd like to discuss a PR requirement.";

/**
 * Builds a wa.me deep link. Works on mobile (opens the app) and desktop
 * (opens WhatsApp Web), so it is safe to use as a plain href everywhere.
 */
export const whatsappLink = (message: string = WHATSAPP_DEFAULT_MESSAGE): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export interface EnquiryFields {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}

/** Turns a submitted enquiry into a readable WhatsApp message. */
export const buildEnquiryMessage = (fields: EnquiryFields): string => {
  const lines = [
    "New enquiry from the AskForPR website",
    "",
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
  ];
  if (fields.phone?.trim()) lines.push(`Phone: ${fields.phone.trim()}`);
  if (fields.company?.trim()) lines.push(`Company: ${fields.company.trim()}`);
  if (fields.service?.trim()) lines.push(`Service required: ${fields.service.trim()}`);
  lines.push("", "Message:", fields.message.trim());
  return lines.join("\n");
};
