/**
 * Gangtok Location Landing Page
 * SEO-Optimized for modern luxury and premium events
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

const location = LOCATIONS.find((l) => l.slug === 'gangtok')!;

export const metadata: Metadata = {
  title: 'Gangtok Event Planner | Modern Luxury Weddings & Premium Events | Eventara',
  description:
    'Modern luxury event planning in Gangtok. Premium 5-star venues, international-standard services, mountain backdrop weddings. Destination events, corporate, celebrations. Get free consultation.',
  keywords: [
    'event planner Gangtok',
    'wedding planner Gangtok',
    'luxury wedding Gangtok',
    'modern event Gangtok',
    '5-star venue Gangtok',
    'destination wedding planner',
    'Gangtok event organizer',
    'premium wedding Gangtok',
    'corporate event Gangtok',
    'mountain wedding venue',
  ],
  openGraph: {
    title: 'Modern Luxury Wedding Planner Gangtok | Premium Events',
    description: 'Premium event planning in Gangtok with 5-star venues and international services. Perfect destination for luxury weddings.',
    url: 'https://eventara.com/locations/gangtok',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://eventara.com/locations/gangtok',
  },
};

export default function GangtokPage() {
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
