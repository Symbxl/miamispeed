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
  name: "Timeless Autogroup",
  tagline: "Drive the Extraordinary",
  // Placeholder production domain — swap for the real one before launch.
  url: "https://timelessautogroup.com",
  description:
    "Timeless Autogroup is New York City's concierge exotic and luxury car rental — Lamborghini, Ferrari, McLaren, Porsche and more, fully insured and delivered across NYC and the Tri-State. One text and the keys are yours.",
  instagramHandle: "timelessautogroup",
  instagramUrl: "https://www.instagram.com/timelessautogroup",

  // Contact — leave empty to keep Instagram-only (matches the current bio).
  // Typed as `string` (not the literal "") so the empty-state checks above
  // narrow correctly once a real value is filled in.
  phone: "" as string, // e.g. "+1 (212) 555-0123"
  email: "" as string, // e.g. "book@timelessautogroup.com"

  city: "New York",
  region: "NY",
  regionName: "New York",
  country: "US",

  areaServed: [
    "Manhattan",
    "Brooklyn",
    "Queens",
    "The Bronx",
    "Staten Island",
    "Long Island",
    "Westchester",
    "New Jersey",
    "The Hamptons",
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
    slug: "supercars",
    name: "Supercars",
    short: "The headliners",
    blurb:
      "The cars that stop traffic. Lamborghini, Ferrari and McLaren — meticulously maintained and detailed for the moment you've been picturing. Pull up like the main event.",
    image: "/images/exotic-car-2.jpg",
    imageAlt:
      "Silver Lamborghini Huracán photographed head-on inside a showroom",
    features: ["Lamborghini & Ferrari", "McLaren & more", "Daily & weekly", "Delivery available"],
  },
  {
    slug: "luxury-sedans",
    name: "Luxury Sedans",
    short: "Executive presence",
    blurb:
      "Arrive composed. Porsche Panamera, BMW M5 and the Audi RS line — four doors of understated power for business, dinner or a night across the city.",
    image: "/images/exotic-car.jpg",
    imageAlt: "Black Porsche Panamera Turbo in motion on a highway at dusk",
    features: ["Porsche & BMW M", "Audi RS line", "Business & events", "Chauffeur optional"],
  },
  {
    slug: "sport-coupes",
    name: "Sport Coupes",
    short: "Carve the city",
    blurb:
      "Two doors, all attitude. BMW M, Mercedes-AMG GT and Audi RS coupes built for the drive — quick on the West Side Highway, unforgettable on the FDR.",
    image: "/images/coupe.jpg",
    imageAlt: "Grey BMW M4 coupe parked at golden hour with fog in the distance",
    features: ["BMW M & AMG GT", "Audi RS5", "Hourly & daily", "Unlimited-mile options"],
  },
  {
    slug: "american-muscle",
    name: "American Muscle",
    short: "Loud & proud",
    blurb:
      "Big power, bigger sound. Shelby Mustang, Camaro ZL1 and Corvette for when you want the drive felt as much as seen. A crowd favorite for content.",
    image: "/images/muscle.jpg",
    imageAlt: "Dark Shelby Mustang photographed head-on under moody light",
    features: ["Shelby & Camaro", "Corvette", "Great for content", "Group rates"],
  },
  {
    slug: "jdm-track",
    name: "JDM & Track",
    short: "Cult legends",
    blurb:
      "The icons enthusiasts actually want. Nissan GT-R, Supra and track-focused 911s — engineered for the apex and built to be driven.",
    image: "/images/jdm.jpg",
    imageAlt: "Silver Nissan GT-R on an open road heading into the sunset",
    features: ["Nissan GT-R", "Supra & 911", "Enthusiast favorites", "Track-ready setups"],
  },
  {
    slug: "vip-chauffeur",
    name: "VIP Chauffeur",
    short: "You ride, we drive",
    blurb:
      "Want the experience without the wheel? Book any car with a professional chauffeur for proms, proposals, nights out and airport runs across the city.",
    image: "/images/chauffeur.jpg",
    imageAlt: "New York City skyline and the Williamsburg Bridge lit up at night",
    features: ["Pro chauffeur", "Airport transfers", "Events & nights out", "Any car in the fleet"],
  },
];

export const stats = [
  { value: "Exotic", label: "& luxury, one garage" },
  { value: "Insured", label: "& concierge delivered" },
  { value: "7 days", label: "a week, by appointment" },
  { value: "NYC + Tri-State", label: "delivery available" },
];

export const whyUs = [
  {
    title: "Fully insured & transparent",
    body: "Every rental is fully insured with clear, all-in pricing. We walk you through coverage and deposit up front — no fees sprung on you at pickup.",
  },
  {
    title: "A hand-picked fleet",
    body: "Lamborghini, Ferrari, McLaren, Porsche and more — meticulously maintained and detailed before every single drive.",
  },
  {
    title: "Concierge delivery citywide",
    body: "We bring the car to your door, hotel, office or the airport anywhere in NYC and the Tri-State. Keys in hand, you just drive.",
  },
  {
    title: "Built for the moment",
    body: "Weddings, shoots, birthdays or a weekend away — we match the right car to the occasion and handle the timing for you.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Tell us the car & dates",
    body: "Send the quick form or DM us the car you want, your dates and where you're driving. Takes a minute.",
  },
  {
    n: "02",
    title: "Get your custom quote",
    body: "We confirm availability and send a clear, all-in quote — insurance and delivery included, no surprises.",
  },
  {
    n: "03",
    title: "Get the keys",
    body: "Meet us or we deliver to your door. Quick walkaround, keys in hand, and the city is yours.",
  },
];

export const testimonials = [
  {
    quote:
      "Booked a Lamborghini for our anniversary and they delivered it right to our hotel in Midtown. Flawless from the very first text.",
    origin: "Manhattan",
  },
  {
    quote:
      "Needed a McLaren for a video shoot on two days' notice — Timeless made it happen and the car showed up spotless.",
    origin: "Brooklyn shoot",
  },
  {
    quote:
      "Rented a Porsche for a weekend upstate. Fair price, fully insured, zero hassle. They're my go-to in the city now.",
    origin: "Weekend in NY",
  },
];

export const faqs = [
  {
    q: "What kind of cars can I rent from Timeless Autogroup?",
    a: "Our fleet spans supercars and exotics (Lamborghini, Ferrari, McLaren), luxury sedans (Porsche, BMW M, Audi RS), sport coupes, American muscle and JDM icons — plus VIP chauffeur service. If you have a dream car in mind, just ask.",
  },
  {
    q: "What areas do you serve?",
    a: "All five boroughs of New York City — Manhattan, Brooklyn, Queens, the Bronx and Staten Island — plus Long Island, Westchester, New Jersey and the Hamptons. Delivery is available across the Tri-State area.",
  },
  {
    q: "How do I book?",
    a: "Send the quote form on this page or DM us on Instagram @timelessautogroup with the car, your dates and where you'll be driving. We confirm availability and send an all-in quote, then you're set.",
  },
  {
    q: "Do you deliver the car?",
    a: "Yes. We can deliver to your home, hotel, office or the airport anywhere in NYC and the Tri-State, so you never have to coordinate pickup.",
  },
  {
    q: "What do I need to rent an exotic car?",
    a: "Generally a valid driver's license, meeting the minimum age, and a refundable security deposit. Most exotics require renters to be 25+, though some cars are available at 21+. We confirm the exact requirements in your quote before you book.",
  },
  {
    q: "Do you offer insurance?",
    a: "Yes — we'll walk you through insurance and the security deposit up front so there are no surprises. Bring a valid license and you're set to drive.",
  },
  {
    q: "Can I rent for a photoshoot, wedding or event?",
    a: "Absolutely — a big share of our clients book for weddings, music videos, photoshoots and birthdays. We coordinate the timing, delivery and the right car so your day goes off without a hitch.",
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
