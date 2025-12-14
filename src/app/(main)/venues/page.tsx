import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium Event Venues in Siliguri, Darjeeling & Himalayan Corridor | Eventara',
  description:
    'Browse 20+ premium banquet halls, hotels, and resorts in Siliguri, Darjeeling, Kalimpong, and nearby areas. Perfect for weddings, corporate events, and celebrations. Book now with Eventara.',
  keywords: [
    'event venues',
    'wedding venues',
    'banquet halls',
    'wedding banquet hall',
    'Siliguri venue',
    'Darjeeling venue',
    'hotel with banquet',
    'resort wedding',
    'event space',
    'convention center',
    'garden venue',
    'wedding hall near me',
    'affordable wedding venue',
    'luxury event space',
  ],
  openGraph: {
    title: 'Premium Event Venues | Eventara',
    description:
      'Discover premium banquet halls, hotels, and resorts for your wedding or corporate event across the Siliguri corridor.',
    type: 'website',
    url: 'https://eventaraevents.com/venues',
  },
  alternates: {
    canonical: 'https://eventaraevents.com/venues',
  },
};

import { VenuesHero } from '@/components/sections/VenuesHero';
import { VenuesGrid } from '@/components/sections/VenuesGrid';
import { VenuesListSchema } from '@/components/seo/VenuesListSchema';

export default function VenuesPage() {
  return (
    <>
      <VenuesHero />
      <VenuesGrid />
      <VenuesListSchema />
    </>
  );
}
