export interface CaseStudy {
  slug: string;
  category: string;
  sector: string;
  title: string;
  /** Card summary on the index page. */
  description: string;
  client: string;
  date: string;
  image: string;
  alt: string;
  challenge: string;
  strategy: string;
  results: string[];
}

const photo = (id: string, w = 1200, h = 900) =>
  `https://images.unsplash.com/photo-${id}?q=75&w=${w}&h=${h}&fit=crop&auto=format`;

/**
 * PLACEHOLDER COPY — illustrative engagements written to show the format.
 * Client names are invented and the metrics are representative, not audited.
 * Replace with real, client-approved case studies before launch.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "reputation-turnaround-real-estate",
    category: "Reputation Management",
    sector: "Real Estate & Property",
    title: "Rebuilding Buyer Trust After a Delivery Crisis",
    description:
      "A Pune developer facing possession delays and hostile coverage — and the transparency programme that turned sentiment around.",
    client: "Suryodaya Realty",
    date: "March 2026",
    image: photo("1486406146926-c627a92ad1ab"),
    alt: "Glass office towers seen from street level",
    challenge:
      "Two flagship towers slipped past their committed possession dates. Buyer groups organised on WhatsApp and Twitter, regional dailies picked up the story within a week, and a RERA complaint turned a project problem into a brand problem. Sales enquiries fell sharply and the sales team had no approved line to give walk-ins.",
    strategy:
      "We stopped the reflex to defend. Instead we put the promoter on record with a dated, public completion schedule and committed to publishing progress against it every month whether or not the news was good. We briefed regional property correspondents in person with site access rather than press notes, trained the sales team on a single consistent message, and let the third month's on-time milestone do the arguing for us.",
    results: [
      "Coverage tone moved from predominantly negative to predominantly neutral or positive across regional dailies within two quarters.",
      "Monthly progress disclosures were picked up as a reference point by property desks covering the wider market.",
      "Site visits recovered to pre-crisis levels by the third quarter of the programme.",
    ],
  },
  {
    slug: "media-launch-fintech-startup",
    category: "Digital PR",
    sector: "Finance & Banking",
    title: "A Category Story for a Bengaluru Lending Platform",
    description:
      "Launching into a crowded fintech market by arguing about the category rather than the product.",
    client: "Anvaya Capital",
    date: "January 2026",
    image: photo("1460925895917-afdab827c52f"),
    alt: "Laptop displaying a financial analytics dashboard",
    challenge:
      "A new MSME lending platform was entering a market where every competitor claimed faster approvals and better rates. Their genuine differentiator — an underwriting model built for businesses with thin credit files — was a technical story that no consumer desk wanted to run, and a launch-day press release would have vanished without trace.",
    strategy:
      "We reframed the launch away from the product and onto the problem: why creditworthy small businesses in India are structurally invisible to lenders. That was a story business desks already wanted to tell. We commissioned original data from the client's own loan book, offered it under embargo as a category study rather than a company announcement, and put the founder forward as a commentator on MSME credit rather than as a vendor.",
    results: [
      "Launch coverage ran as a category feature in national business press rather than as a funding brief.",
      "The founder was retained as a recurring commentator on MSME credit by two business channels.",
      "Inbound partnership enquiries from lending partners exceeded the launch target within the first quarter.",
    ],
  },
  {
    slug: "healthcare-summit-national-coverage",
    category: "Press Conference",
    sector: "Healthcare & Pharmaceuticals",
    title: "Getting Clinical Research onto the National Desk",
    description:
      "Turning a specialist oncology summit's findings into a story general health correspondents could actually run.",
    client: "Sutra Health",
    date: "November 2025",
    image: photo("1591115765373-5207764f72e7"),
    alt: "Speaker presenting to a seated audience at a conference",
    challenge:
      "A respected annual oncology summit produced genuinely significant early-detection findings every year and reached almost nobody outside the field. Presentations were written for clinicians, the press material was a copy of the abstract, and health correspondents on deadline had no way in.",
    strategy:
      "We worked with the lead researchers weeks ahead of the summit to identify the one finding with a direct patient consequence, and built the media programme around that alone. Each journalist was offered a pre-briefing under embargo with a clinician who had been media-trained to explain the result without overstating it — the discipline that keeps health coverage accurate and keeps the researchers willing to do it again.",
    results: [
      "The early-detection finding was carried by national broadcast and print health desks on the day of release.",
      "Two clinicians became named sources for ongoing oncology coverage beyond the summit.",
      "Summit registrations for the following year rose substantially on the back of the coverage.",
    ],
  },
  {
    slug: "manufacturing-thought-leadership",
    category: "Thought Leadership",
    sector: "Manufacturing & Industrial",
    title: "Making a Components Manufacturer Worth Quoting",
    description:
      "A Coimbatore precision engineering firm nobody outside the trade had heard of, positioned into the national supply-chain conversation.",
    client: "Bharat Loom Industries",
    date: "August 2025",
    image: photo("1504328345606-18bbc8c9d7d1"),
    alt: "Welder at work with sparks flying",
    challenge:
      "The company supplied precision components to household-name manufacturers and had no public profile at all. That was fine until they began hiring engineers against better-known employers and bidding for contracts where procurement teams had never heard the name. Trade press covered them; nobody else did.",
    strategy:
      "We stopped pitching the company and started pitching its managing director's view on import substitution in precision components — a subject national business desks were actively covering and had few credible operator voices for. A byline programme and a small number of well-chosen panel appearances did more than any product announcement could, because the argument was genuinely theirs to make.",
    results: [
      "Bylines placed in national business press and sustained across a twelve-month programme.",
      "The managing director became a regular panellist on manufacturing policy at industry forums.",
      "Engineering applications rose measurably, with candidates citing the coverage at interview.",
    ],
  },
  {
    slug: "d2c-launch-consumer-brand",
    category: "Influencer Marketing",
    sector: "Consumer Goods & CPG",
    title: "A Quieter Launch That Outperformed the Loud One",
    description:
      "Talking a D2C brand out of a celebrity campaign and into a credibility-led one.",
    client: "Nimble Kart",
    date: "May 2026",
    image: photo("1607082348824-0a96f2a4b9da"),
    alt: "Paper shopping bags arranged in a row",
    challenge:
      "A home-care brand had budget earmarked for a celebrity-led launch in a category where every competitor was doing the same thing. The founder's actual advantage — verifiable ingredient sourcing — was the one thing the proposed campaign would not have communicated.",
    strategy:
      "We advised against the celebrity spend and said so plainly. In its place we built a smaller programme around people whose audiences already cared about ingredient transparency: dermatologists, a handful of genuinely independent reviewers, and regional-language creators whose audiences the brand had written off. Every partner was given full access to the sourcing documentation and no script.",
    results: [
      "Launch delivered against its targets on roughly two-thirds of the originally proposed budget.",
      "Regional-language creators drove a disproportionate share of first-time purchases.",
      "Ingredient-transparency positioning was picked up unprompted in category coverage.",
    ],
  },
  {
    slug: "renewable-energy-narrative",
    category: "Corporate Communications",
    sector: "Renewable Energy & Sustainability",
    title: "A Solar Developer's Case for Its Own Land Record",
    description:
      "Answering local opposition to a Rajasthan solar park with disclosure rather than advertising.",
    client: "Vaayu Renewables",
    date: "February 2026",
    image: photo("1466611653911-95081537e5b7"),
    alt: "Wind turbines standing in a field at sunset",
    challenge:
      "A large solar park faced organised local opposition over land acquisition and water use. National coverage framed it as another renewables project riding roughshod over a farming community, and the company's response so far had been a sustainability brochure that convinced nobody.",
    strategy:
      "We argued that the only credible answer was disclosure, not messaging. The company published its full compensation record and independently verified water-use data, and we arranged site visits for environment correspondents with access to the affected villages and no conditions attached. Where the record was weak, we advised fixing the practice before publishing rather than presenting it well.",
    results: [
      "Environment desks moved from covering the opposition to covering the disclosure itself.",
      "The published compensation record became the reference point in subsequent reporting on the project.",
      "Two further state approvals progressed without the reputational drag that had stalled the first.",
    ],
  },
];

export const getCaseStudy = (slug?: string) =>
  caseStudies.find((study) => study.slug === slug);
