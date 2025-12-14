/**
 * Kalimpong Location Landing Page
 * SEO-Optimized for heritage venues and intimate celebrations
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

const location = LOCATIONS.find((l) => l.slug === 'kalimpong')!;

export const metadata: Metadata = {
  title: 'Kalimpong Wedding Planner | Heritage Venues & Intimate Events | Eventara',
  description:
    'Heritage wedding planner in Kalimpong. Unique colonial venues, intimate garden spaces, boutique event experiences. Destination weddings with character. Expert coordination. Free consultation.',
  keywords: [
    'wedding planner Kalimpong',
    'heritage venue Kalimpong',
    'intimate wedding Kalimpong',
    'event planner Kalimpong',
    'colonial wedding venue',
    'garden event Kalimpong',
    'boutique wedding service',
    'unique venue Kalimpong',
    'wedding coordinator Kalimpong',
    'heritage wedding destination',
  ],
  openGraph: {
    title: 'Heritage Wedding Planner Kalimpong | Unique Venues',
    description: 'Kalimpong weddings in heritage colonial buildings. Intimate garden venues with unique character and scenic beauty.',
    url: 'https://eventara.com/locations/kalimpong',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://eventara.com/locations/kalimpong',
  },
};

export default function KalimpongPage() {
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
