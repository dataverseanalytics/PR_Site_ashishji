export interface Sector {
  /** Anchor id — Home's industry cards deep-link to these. */
  slug: string;
  name: string;
  body: string;
  image: string;
  alt: string;
}

const photo = (id: string) =>
  `https://images.unsplash.com/photo-${id}?q=75&w=700&h=933&fit=crop&auto=format`;

export const sectors: Sector[] = [
  {
    slug: "technology-saas",
    name: "Technology & SaaS",
    body: "We help software companies, startups, and tech innovators build awareness, establish thought leadership, and navigate market competition. From product launches to positioning in crowded markets, we drive credibility and market penetration.",
    image: photo("1518770660439-4636190af475"),
    alt: "Close view of a circuit board",
  },
  {
    slug: "finance-banking",
    name: "Finance & Banking",
    body: "We support fintech companies, financial services firms, and investment organizations with regulatory-compliant communications, investor relations, and thought leadership. We help build trust in the financial sector through credible, authentic storytelling.",
    image: photo("1611974789855-9c2a0a7236a3"),
    alt: "Candlestick trading chart on a dark screen",
  },
  {
    slug: "healthcare-pharmaceuticals",
    name: "Healthcare & Pharmaceuticals",
    body: "We work with healthcare providers, medical device companies, and pharma organizations to communicate complex information clearly. Our expertise includes patient advocacy, clinical communications, and navigating healthcare regulatory environments.",
    image: photo("1579154204601-01588f351e67"),
    alt: "Laboratory corridor lined with research equipment",
  },
  {
    slug: "ecommerce-retail",
    name: "E-commerce & Retail",
    body: "We help e-commerce brands, retailers, and consumer marketplaces build brand awareness, launch new products, and engage customers. We create campaigns that drive traffic, build loyalty, and establish market leadership.",
    image: photo("1607082348824-0a96f2a4b9da"),
    alt: "Paper shopping bags arranged in a row",
  },
  {
    slug: "manufacturing-industrial",
    name: "Manufacturing & Industrial",
    body: "We support manufacturers, industrial companies, and B2B enterprises in building reputation, thought leadership, and industry influence. We communicate technical expertise in accessible ways to diverse audiences.",
    image: photo("1504328345606-18bbc8c9d7d1"),
    alt: "Welder at work with sparks flying",
  },
  {
    slug: "real-estate-property",
    name: "Real Estate & Property",
    body: "We work with real estate developers, property companies, and construction firms to build reputation, announce major projects, and establish market presence. We create compelling narratives around developments and investment opportunities.",
    image: photo("1486406146926-c627a92ad1ab"),
    alt: "Glass office towers seen from street level",
  },
  {
    slug: "education-edtech",
    name: "Education & EdTech",
    body: "We support educational institutions, edtech companies, and learning platforms in building awareness, thought leadership, and community engagement. We help communicate educational innovation and impact.",
    image: photo("1503676260728-1c00da094a0b"),
    alt: "Stacked books with an apple and alphabet blocks",
  },
  {
    slug: "hospitality-travel",
    name: "Hospitality & Travel",
    body: "We work with hotels, resorts, travel companies, and hospitality brands to build awareness, drive bookings, and establish destination leadership. We create campaigns that inspire travel and showcase unique experiences.",
    image: photo("1566073771259-6a8506099945"),
    alt: "Resort poolside with loungers and parasols",
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    body: "We help food companies, beverage brands, and restaurants build brand reputation, launch new products, and engage customers. We create compelling storytelling around ingredients, sourcing, and culinary innovation.",
    image: photo("1517248135467-4c7edcad34c4"),
    alt: "Interior of a restaurant dining room",
  },
  {
    slug: "consumer-goods-cpg",
    name: "Consumer Goods & CPG",
    body: "We support consumer brands in building market presence, launching products, and establishing consumer loyalty. We create campaigns that resonate with target audiences and drive market share growth.",
    image: photo("1604719312566-8912e9227c6a"),
    alt: "Stocked aisle in a supermarket",
  },
  {
    slug: "renewable-energy-sustainability",
    name: "Renewable Energy & Sustainability",
    body: "We work with clean energy companies, sustainability innovators, and green technology firms to communicate environmental impact and market opportunity. We help position your organization as a leader in the sustainability movement.",
    image: photo("1466611653911-95081537e5b7"),
    alt: "Wind turbines standing in a field at sunset",
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    body: "We support consulting firms, law practices, accounting firms, and professional service providers in building thought leadership and industry reputation. We help establish partners as trusted advisors.",
    image: photo("1573164574572-cb89e39749b4"),
    alt: "Colleagues meeting around a boardroom table",
  },
  {
    slug: "non-profit-social-impact",
    name: "Non-profit & Social Impact",
    body: "We work with non-profits, NGOs, and social enterprises to build awareness, raise funds, and communicate mission impact. We amplify your social impact message and build stakeholder support.",
    image: photo("1593113646773-028c64a8f1b8"),
    alt: "Volunteers distributing supplies to a community",
  },
  {
    slug: "media-entertainment",
    name: "Media & Entertainment",
    body: "We support media companies, entertainment firms, production houses, and content creators in building audience, launching projects, and establishing industry presence. We create campaigns that drive viewership and engagement.",
    image: photo("1485846234645-a62644f84728"),
    alt: "Film clapperboard held on a production set",
  },
  {
    slug: "automotive-mobility",
    name: "Automotive & Mobility",
    body: "We work with automotive companies, mobility startups, and transportation innovators in building brand reputation, launching vehicles, and positioning in a rapidly evolving industry.",
    image: photo("1560958089-b8a1929cea89"),
    alt: "Electric car travelling along a coastal road",
  },
];
