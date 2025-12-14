/**
 * Malda Location Landing Page
 * SEO-Optimized for affordable premium and local wedding events
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

const location = LOCATIONS.find((l) => l.slug === 'malda')!;

export const metadata: Metadata = {
  title: 'Malda Wedding Planner | Affordable Premium Weddings & Events | Eventara',
  description:
    'Professional wedding planner in Malda. Affordable premium events, strong local traditions, excellent vendor coordination. Weddings, corporate, celebrations. Growing professional services. Get free quote.',
  keywords: [
    'wedding planner Malda',
    'event organizer Malda',
    'affordable wedding Malda',
    'event planner Malda',
    'wedding coordinator Malda',
    'Malda wedding service',
    'professional event Malda',
    'local wedding planner',
    'premium event Malda',
    'wedding management Malda',
  ],
  openGraph: {
    title: 'Wedding Planner Malda | Affordable Premium Events',
    description: 'Professional event planning in Malda with affordable premium pricing. Strong local traditions, excellent services.',
    url: 'https://eventara.com/locations/malda',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://eventara.com/locations/malda',
  },
};

export default function MaldaPage() {
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
