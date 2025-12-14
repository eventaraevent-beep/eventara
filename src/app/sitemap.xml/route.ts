/**
 * Sitemap Route
 * Serves XML sitemap for Google and other crawlers
 * Optimized caching for search engine efficiency
 */

import { generateXMLSitemap } from '@/lib/sitemapGenerator';

export async function GET() {
  const xml = generateXMLSitemap();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
      'X-Content-Type-Options': 'nosniff',
      'ETag': `"${Buffer.from(xml).toString('base64').slice(0, 32)}"`,
    },
  });
}
