/**
 * Siliguri Location Landing Page
 * SEO-Optimized for location-specific event searches
 */

import { Metadata } from 'next';
import { LOCATIONS } from '@/lib/constants';
import { LocationHero } from '@/components/sections/LocationHero';
import { LocationHighlights } from '@/components/sections/LocationHighlights';
import { LocationServices } from '@/components/sections/LocationServices';
import { LocationTestimonials } from '@/components/sections/LocationTestimonials';
import { LocationFAQ } from '@/components/sections/LocationFAQ';
import { LocationCTA } from '@/components/sections/LocationCTA';
import { LocationSchema } from '@/components/seo/LocationSchema';

const location = LOCATIONS.find((l) => l.slug === 'siliguri')!;

export const metadata: Metadata = {
  title: 'Siliguri Event Planner | Affordable Wedding & Corporate Events | Eventara',
  description:
    'Premier event planning in Siliguri. Affordable luxury weddings, corporate events, and destination celebrations. 500+ events delivered. Expert coordination and premium vendors. Get free consultation today.',
  keywords: [
    'event planner Siliguri',
    'wedding planner Siliguri',
    'affordable wedding Siliguri',
    'corporate event Siliguri',
    'event organizer Siliguri',
    'venue booking Siliguri',
    'wedding coordinator Siliguri',
    'catering services Siliguri',
    'event management Siliguri',
    'destination event planner',
  ],
  openGraph: {
    title: 'Siliguri Event Planner | Premium Weddings & Corporate Events',
    description: 'Affordable luxury events in Siliguri. 500+ successful celebrations. Expert coordination.',
    url: 'https://eventara.com/locations/siliguri',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://eventara.com/locations/siliguri',
  },
};

export default function SiligiriPage() {
  return (
    <>
      <LocationSchema location={location} />
      <LocationHero location={location} />
      <LocationHighlights location={location} />
      <LocationServices location={location} />
      <LocationTestimonials location={location} />
      <LocationFAQ location={location} />
      <LocationCTA location={location} />
    </>
  );
}
