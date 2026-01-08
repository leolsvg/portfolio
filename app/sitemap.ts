import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.leorenouf.fr";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/developper-freelance-caen-guide`,
      lastModified: new Date("2026-01-08"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/nextjs-react-avantages`,
      lastModified: new Date("2026-01-05"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/seo-site-vitrine`,
      lastModified: new Date("2025-12-28"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
