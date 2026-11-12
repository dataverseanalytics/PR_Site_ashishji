/**
 * Site-wide SEO settings. If the live domain changes, update SITE_URL here
 * and in index.html, public/robots.txt and public/sitemap.xml.
 */
export const SITE_URL = "https://askforpr.com";
export const SITE_NAME = "Ask For PR";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export interface PageSeo {
  title: string;
  description: string;
  /** Path beginning with "/" — used for the canonical URL. */
  path: string;
  /** Set for pages that should not appear in search results (e.g. 404). */
  noindex?: boolean;
}

export const pageSeo = {
  home: {
    title: "Ask For PR | PR Agency in Ahmedabad, Gujarat",
    description:
      "Ask For PR is a public relations agency in Ahmedabad, Gujarat offering media relations, press release distribution, crisis management, event PR and digital PR for brands across India.",
    path: "/",
  },
  about: {
    title: "About Us | Ask For PR",
    description:
      "Learn about Ask For PR — our vision, mission, values and the strategic approach we bring to building brand reputation through earned media.",
    path: "/about",
  },
  services: {
    title: "PR Services | Media Relations, Press Releases & Crisis PR | Ask For PR",
    description:
      "Explore Ask For PR's services: media relations, press release distribution, crisis management, event PR, digital PR and brand reputation management.",
    path: "/services",
  },
  sectors: {
    title: "Sectors We Serve | Ask For PR",
    description:
      "Specialised PR expertise across fifteen sectors, from technology and finance to healthcare, consumer goods and manufacturing.",
    path: "/sectors",
  },
  media: {
    title: "Media Coverage | Ask For PR",
    description:
      "The national news, business and broadcast outlets that have carried our clients' stories.",
    path: "/media-coverage",
  },
  contact: {
    title: "Contact Us | Ask For PR, Ahmedabad",
    description:
      "Get in touch with Ask For PR in Ahmedabad, Gujarat. Call or WhatsApp +91 91161 80227 or email hello@askforpr.com to discuss your PR requirements.",
    path: "/contact",
  },
  notFound: {
    title: "Page Not Found | Ask For PR",
    description: "The page you are looking for does not exist.",
    path: "/404",
    noindex: true,
  },
} satisfies Record<string, PageSeo>;
