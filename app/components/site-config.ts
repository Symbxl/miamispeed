/**
 * Single source of truth for the whole site: business facts (NAP), the fleet,
 * FAQ and social proof. The same data renders the UI *and* the JSON-LD
 * structured data, so search engines and LLMs see exactly what visitors see.
 *
 * TO GO LIVE: fill in `phone`, `email` and `url`. While `phone`/`email` are
 * empty the UI falls back to Instagram (as the current bio does) and footer
 * shows a clearly-marked placeholder.
 */

export const site = {
  name: "Miami Speed Rentals",
  tagline: "All Things Miami",
  // Placeholder production domain — swap for the real one before launch.
  url: "https://miamispeedrentals.com",
  description:
    "Miami Speed Rentals is a veteran-owned, one-stop concierge for renting Polaris slingshots, luxury yachts, jet skis, exotic cars and jet cars across Miami and Broward. One text and we handle the rest.",
  instagramHandle: "_miamispeedrentals",
  instagramUrl: "https://www.instagram.com/_miamispeedrentals",

  // Contact — leave empty to keep Instagram-only (matches the current bio).
  phone: "", // e.g. "+1 (305) 555-0123"
  email: "", // e.g. "book@miamispeedrentals.com"

  city: "Miami",
  region: "FL",
  regionName: "Florida",
  country: "US",

  areaServed: [
    "Miami",
    "Miami Beach",
    "South Beach",
    "Brickell",
    "Wynwood",
    "Downtown Miami",
    "Kendall",
    "Fort Lauderdale",
    "Broward County",
  ],

  hoursNote: "Open 7 days · By appointment · DM anytime",
} as const;

export type Service = {
  slug: string;
  name: string;
  short: string;
  blurb: string;
  image: string;
  imageAlt: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "slingshots",
    name: "Polaris Slingshots",
    short: "Our signature 3-wheel ride",
    blurb:
      "The Miami Speed Rentals signature. Turn every street into a show in a Polaris Slingshot — open-air, head-turning and built for the causeway. Multiple colors available.",
    image: "/images/slingshot.jpg",
    imageAlt:
      "Red Polaris Slingshot parked in front of a colorful Wynwood mural in Miami",
    features: ["Multiple colors", "Easy to drive", "Unlimited miles", "Delivery available"],
  },
  {
    slug: "yachts",
    name: "Luxury Yachts",
    short: "Day charters on the bay",
    blurb:
      "Step aboard for a private day on Biscayne Bay. Captained luxury yacht charters for birthdays, proposals, bachelor/bachelorette trips and corporate days out.",
    image: "/images/yacht.jpg",
    imageAlt: "Large luxury motor yacht cruising on open blue water",
    features: ["Captain included", "Custom routes", "Onboard hosting", "Sunset charters"],
  },
  {
    slug: "jet-skis",
    name: "Jet Skis",
    short: "Best prices on the water",
    blurb:
      "Hit the water on late-model jet skis with the best prices in Miami. Singles or groups, hourly or all day — life vests and a quick briefing included.",
    image: "/images/jetski.jpg",
    imageAlt: "Rider catching air on a yellow jet ski over open water",
    features: ["Hourly & daily", "Groups welcome", "Gear included", "Best price guarantee"],
  },
  {
    slug: "exotic-cars",
    name: "Exotic & Luxury Cars",
    short: "Arrive like a local legend",
    blurb:
      "Roll up in something unforgettable. A curated line of exotic and luxury cars for events, shoots, weddings and weekends — chosen to match the moment.",
    image: "/images/exotic-car.jpg",
    imageAlt: "Blacked-out luxury sports car in motion at dusk with glowing taillights",
    features: ["Daily & weekly", "Event & photo shoots", "Delivery available", "Hand-picked fleet"],
  },
  {
    slug: "jet-cars",
    name: "Jet Cars",
    short: "The viral water toy",
    blurb:
      "The thing everyone films. Jet cars are the wildest way to ride the bay — half watercraft, half spectacle. A Miami Speed Rentals favorite for content and adrenaline.",
    image: "/images/jetski-2.jpg",
    imageAlt: "Two riders speeding across the water throwing a wall of spray",
    features: ["Guided sessions", "Unreal for content", "Beginner friendly", "Group rates"],
  },
  {
    slug: "concierge",
    name: "VIP Concierge",
    short: "You name it, we have it",
    blurb:
      "Planning the whole trip? We handle the rest — Airbnbs, transport, tables and the lineup of toys above. One contact for your entire Miami itinerary.",
    image: "/images/miami-beach.jpg",
    imageAlt: "Aerial view of Biscayne Bay with yachts and the Miami skyline",
    features: ["Airbnb & stays", "Full itineraries", "Out-of-town clients", "One point of contact"],
  },
];

export const stats = [
  { value: "All Things", label: "Miami, one contact" },
  { value: "Veteran", label: "owned & operated" },
  { value: "7 days", label: "a week, by appointment" },
  { value: "Miami + Broward", label: "delivery available" },
];

export const whyUs = [
  {
    title: "Veteran-owned & operated",
    body: "Discipline, accountability and respect — a business run with the standards you'd expect from those who served.",
  },
  {
    title: "Truly one-stop",
    body: "Slingshots, yachts, jet skis, exotic cars and stays. Stop juggling five vendors — text us once and it's handled.",
  },
  {
    title: "Best prices, guaranteed",
    body: "Local rates with no tourist markup. Fair, upfront pricing on everything we rent across Miami and Broward.",
  },
  {
    title: "Built for visitors",
    body: "Flying in from out of state or abroad? We coordinate delivery, timing and logistics so you just show up and ride.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Tell us your dates",
    body: "Send the quick form or DM us what you want, when, and how many people. Takes a minute.",
  },
  {
    n: "02",
    title: "Get your custom quote",
    body: "We confirm availability and send a clear, all-in quote — no surprises, no tourist markup.",
  },
  {
    n: "03",
    title: "Show up & ride",
    body: "Meet us or we deliver. Quick briefing, keys in hand, and your Miami day is on.",
  },
];

export const testimonials = [
  {
    quote:
      "Flew in from New York and they had us fully set for the weekend. Easy from the first text — we'll only rent with them.",
    origin: "Visiting from New York",
  },
  {
    quote:
      "Came all the way from Arizona and trusted them with everything. Smooth, professional and exactly what they promised.",
    origin: "Out-of-state client",
  },
  {
    quote:
      "International clients and they treated us like VIPs. Slingshots, the bay, the whole itinerary — one contact handled it all.",
    origin: "International client",
  },
];

export const faqs = [
  {
    q: "What can I rent from Miami Speed Rentals?",
    a: "We're a one-stop Miami concierge: Polaris slingshots, luxury yachts, jet skis, exotic and luxury cars, jet cars, plus Airbnbs and full trip planning. If it's a 'Miami experience,' we can usually arrange it.",
  },
  {
    q: "What areas do you serve?",
    a: "All of Miami and Broward County — including Miami Beach, South Beach, Brickell, Wynwood, Downtown, Kendall and Fort Lauderdale. Delivery is available across the service area.",
  },
  {
    q: "How do I book?",
    a: "Send the quote form on this page or DM us on Instagram @_miamispeedrentals with your dates and group size. We confirm availability and send an all-in quote, then you're set.",
  },
  {
    q: "Do you offer delivery?",
    a: "Yes. For most rentals we can deliver to your hotel, Airbnb or marina within the Miami–Broward area so you don't have to coordinate pickup.",
  },
  {
    q: "Are you good for out-of-town and international visitors?",
    a: "Absolutely — a big share of our clients fly in from out of state and abroad. We coordinate timing, delivery and logistics so visitors can just show up and enjoy Miami.",
  },
  {
    q: "What do I need to rent a slingshot or car?",
    a: "Generally a valid driver's license, meeting the minimum age, and a refundable deposit. Exact requirements depend on the vehicle — we'll confirm everything in your quote before you book.",
  },
  {
    q: "Is Miami Speed Rentals really veteran-owned?",
    a: "Yes. Miami Speed Rentals is proudly veteran-owned and operated, and we run the business with the standards and accountability that come with it.",
  },
];

/** Anchor nav for the single-page experience. */
export const nav = [
  { label: "Fleet", href: "#fleet" },
  { label: "Why Us", href: "#why" },
  { label: "How It Works", href: "#how" },
  { label: "Area", href: "#area" },
  { label: "FAQ", href: "#faq" },
];
