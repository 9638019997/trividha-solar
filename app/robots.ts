import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard/security', '/dashboard/system'],
    },
    sitemap: 'https://trividhasolar.com/sitemap.xml',
  };
}
