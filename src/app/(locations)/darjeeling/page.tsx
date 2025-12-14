/**
 * Darjeeling Location Landing Page
 * SEO-Optimized for destination wedding and luxury event searches
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

const location = LOCATIONS.find((l) => l.slug === 'darjeeling')!;

export const metadata: Metadata = {
  title: 'Destination Wedding Planner Darjeeling | Luxury Events with Kanchenjunga Views | Eventara',
  description:
    'Premier destination wedding planner in Darjeeling. Tea garden venues, Kanchenjunga backdrops, luxury hospitality. Perfect for destination weddings & premium celebrations. 500+ events. Free consultation.',
  keywords: [
    'destination wedding Darjeeling',
    'wedding planner Darjeeling',
    'luxury wedding Darjeeling',
    'tea garden venues Darjeeling',
    'destination event planner',
    'Darjeeling wedding coordinator',
    'premium wedding services Darjeeling',
    'Kanchenjunga wedding venue',
    'mountain wedding Darjeeling',
    'romantic wedding destination',
  ],
  openGraph: {
    title: 'Destination Wedding Planner Darjeeling | Luxury Mountain Weddings',
    description: 'Darjeeling destination weddings with stunning mountain views. Tea garden venues, luxury hospitality, expert planning.',
    url: 'https://eventara.com/locations/darjeeling',
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: 'https://eventara.com/locations/darjeeling',
  },
};

export default function DarjeelingPage() {
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
