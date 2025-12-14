/**
 * Dooars Location Landing Page
 * SEO-Optimized for jungle-tea region events and adventure weddings
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

const location = LOCATIONS.find((l) => l.slug === 'dooars')!;

export const metadata: Metadata = {
  title: 'Dooars Event Planner | Jungle & Tea Region Weddings | Eventara',
  description:
    'Adventure event planning in Dooars. Jungle backdrop venues, elephant encounters, river activities, tea plantations. Unique destination weddings. Professional coordination. Free consultation.',
  keywords: [
    'event planner Dooars',
    'wedding planner Dooars',
    'jungle wedding Dooars',
    'adventure wedding destination',
    'tea plantation event',
    'Dooars event organizer',
    'unique wedding venue',
    'elephant encounter event',
    'nature wedding Dooars',
    'destination event planner',
  ],
  openGraph: {
    title: 'Dooars Adventure Wedding Planner | Jungle Events',
    description: 'Adventure weddings in Dooars jungle region. Tea plantations, elephant encounters, unique nature venues, professional planning.',
    url: 'https://eventara.com/locations/dooars',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://eventara.com/locations/dooars',
  },
};

export default function DooarsPage() {
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
