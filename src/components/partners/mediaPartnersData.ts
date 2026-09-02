export interface MediaPartner {
  name: string;
  /** Official logo, self-hosted unmodified in public/media-partners/. */
  logo: string;
  url: string;
}

/**
 * Logos are each publication's own official asset, taken from their site and
 * served unaltered. They sit on a light plate because most are dark-on-
 * transparent and would be invisible against the navy page.
 */
export const mediaPartners: MediaPartner[] = [
  { name: "The Times of India", logo: "/media-partners/times-of-india.png", url: "https://timesofindia.indiatimes.com" },
  { name: "The Economic Times", logo: "/media-partners/economic-times.jpg", url: "https://economictimes.indiatimes.com" },
  { name: "Hindustan Times", logo: "/media-partners/hindustan-times.png", url: "https://www.hindustantimes.com" },
  { name: "Zee News", logo: "/media-partners/zee-news.png", url: "https://zeenews.india.com" },
  { name: "Forbes India", logo: "/media-partners/forbes-india.png", url: "https://www.forbesindia.com" },
  { name: "Moneycontrol", logo: "/media-partners/moneycontrol.png", url: "https://www.moneycontrol.com" },
  { name: "ANI", logo: "/media-partners/ani.png", url: "https://www.aninews.in" },
  { name: "PTI (Press Trust of India)", logo: "/media-partners/pti.png", url: "https://www.ptinews.com" },
  { name: "Outlook India", logo: "/media-partners/outlook-india.svg", url: "https://www.outlookindia.com" },
  { name: "Livemint", logo: "/media-partners/livemint.png", url: "https://www.livemint.com" },
  { name: "ABP", logo: "/media-partners/abp.png", url: "https://news.abplive.com" },
  { name: "Jagran", logo: "/media-partners/jagran.png", url: "https://www.jagran.com" },
  { name: "Live Hindustan", logo: "/media-partners/live-hindustan.webp", url: "https://www.livehindustan.com" },
  { name: "Lokmat", logo: "/media-partners/lokmat.png", url: "https://www.lokmat.com" },
  { name: "Dainik Bhaskar", logo: "/media-partners/dainik-bhaskar.png", url: "https://www.bhaskar.com" },
  { name: "Times Now", logo: "/media-partners/times-now.svg", url: "https://www.timesnownews.com" },
  { name: "TV9", logo: "/media-partners/tv9.png", url: "https://www.tv9hindi.com" },
  { name: "Zee Business", logo: "/media-partners/zee-business.png", url: "https://www.zeebiz.com" },
  { name: "VTV", logo: "/media-partners/vtv.png", url: "https://www.vtvgujarati.com" },
  { name: "NDTV", logo: "/media-partners/ndtv.png", url: "https://www.ndtv.com" },
  { name: "CNBC TV18", logo: "/media-partners/cnbc-tv18.svg", url: "https://www.cnbctv18.com" },
  { name: "YourStory", logo: "/media-partners/yourstory.png", url: "https://yourstory.com" },
  { name: "Entrepreneur", logo: "/media-partners/entrepreneur.png", url: "https://www.entrepreneur.com" },
  { name: "Mid-Day", logo: "/media-partners/mid-day.png", url: "https://www.mid-day.com" },
  { name: "ETV Bharat", logo: "/media-partners/etv-bharat.webp", url: "https://www.etvbharat.com" },
  { name: "afaqs!", logo: "/media-partners/afaqs.png", url: "https://www.afaqs.com" },
  { name: "One India", logo: "/media-partners/one-india.svg", url: "https://www.oneindia.com" },
];
