/**
 * Jalpaiguri Location Landing Page
 * SEO-Optimized for tea garden events and authentic northeastern experiences
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

const location = LOCATIONS.find((l) => l.slug === 'jalpaiguri')!;

export const metadata: Metadata = {
  title: 'Jalpaiguri Event Planner | Tea Garden Weddings & Authentic Events | Eventara',
  description:
    'Event planner in Jalpaiguri for authentic northeastern experiences. Tea garden venues, unique celebrations, professional coordination. Weddings, corporate, destination events. Expert local services.',
  keywords: [
    'event planner Jalpaiguri',
    'wedding planner Jalpaiguri',
    'tea garden event Jalpaiguri',
    'Jalpaiguri wedding venue',
    'authentic event Jalpaiguri',
    'northeast wedding planner',
    'Jalpaiguri event organizer',
    'unique wedding destination',
    'professional event Jalpaiguri',
    'tea region wedding',
  ],
  openGraph: {
    title: 'Jalpaiguri Event Planner | Tea Garden Weddings',
    description: 'Authentic northeastern events in Jalpaiguri. Tea garden venues, professional coordination, unique celebration spaces.',
    url: 'https://eventara.com/locations/jalpaiguri',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://eventara.com/locations/jalpaiguri',
  },
};

export default function JalpaiguriPage() {
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
