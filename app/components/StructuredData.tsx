import { faqs, services, site } from "./site-config";

/**
 * JSON-LD structured data. This is the backbone of both classic SEO and
 * "LLM SEO": it states the business entity, what it rents, where it serves
 * and answers common questions in a machine-readable graph so search engines
 * and AI assistants can describe Miami Speed Rentals accurately.
 */
export default function StructuredData() {
  const graph: Record<string, unknown>[] = [
    {
      "@type": ["LocalBusiness", "AutomotiveBusiness"],
      "@id": `${site.url}/#business`,
      name: site.name,
      description: site.description,
      url: site.url,
      image: `${site.url}/images/slingshot.jpg`,
      slogan: site.tagline,
      sameAs: [site.instagramUrl],
      areaServed: site.areaServed.map((name) => ({ "@type": "City", name })),
      address: {
        "@type": "PostalAddress",
        addressLocality: site.city,
        addressRegion: site.region,
        addressCountry: site.country,
      },
      ...(site.phone ? { telephone: site.phone } : {}),
      ...(site.email ? { email: site.email } : {}),
      knowsAbout: services.map((s) => s.name),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Miami Speed Rentals Fleet",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.name,
            description: s.blurb,
            areaServed: site.city,
            provider: { "@id": `${site.url}/#business` },
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
      publisher: { "@id": `${site.url}/#business` },
      inLanguage: "en-US",
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  const json = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
