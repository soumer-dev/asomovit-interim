import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://interim.asomovit.com/",
      lastModified: new Date("2026-05-05"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
