import { MetadataRoute } from 'next'

// Only routes that actually exist — the old sitemap also listed /logs, which is gone.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: 'https://kalehub.com',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://kalehub.com/projects',
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}
