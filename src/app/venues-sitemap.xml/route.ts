import { VENUES } from '@/lib/constants';

export async function GET() {
  const baseUrl = 'https://eventaraevents.com';
  const currentDate = new Date().toISOString().split('T')[0];

  // Build venue URLs
  const venueUrls = VENUES.map((venue) => `
  <url>
    <loc>${baseUrl}/venues/${venue.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  `).join('');

  // Build location-based venue URLs
  const locations = [...new Set(VENUES.map((v) => v.location))];
  const locationUrls = locations
    .map(
      (location) => `
  <url>
    <loc>${baseUrl}/venues?location=${encodeURIComponent(location)}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  `
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/venues</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  ${venueUrls}
  ${locationUrls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
