import type { MetadataRoute } from "next";
import { site } from "./components/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-28");
  return [
    { url: site.url, lastModified, changeFrequency: "weekly", priority: 1 },
    ...["fleet", "why", "how", "area", "faq"].map((id) => ({
      url: `${site.url}/#${id}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
