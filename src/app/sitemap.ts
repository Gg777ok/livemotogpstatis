// src/app/sitemap.ts

import type { MetadataRoute } from "next"
import { DataStreams } from "../../lib/streams"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://livemotogp.com"

  // Homepage only
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
  ]

  // Dynamic stream pages
  const streamRoutes = DataStreams.map((stream) => ({
    url: `${baseUrl}/live/${stream.slug}`,
    lastModified: new Date(stream.date),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }))

  return [...staticRoutes, ...streamRoutes]
}