import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Eventara | Premium Luxury Event Management Since 2010',
  description:
    'Discover Eventara\'s journey in luxury event management across Siliguri, Darjeeling, and Himalayan region. Specializing in weddings, corporate events, and destination celebrations with expertise in cultural traditions and premium service delivery.',
  keywords: [
    'about eventara',
    'luxury event management',
    'event planning company',
    'wedding planner team',
    'corporate event specialist',
    'event management expertise',
    'Siliguri event company',
    'Darjeeling event organizer',
  ],
  openGraph: {
    title: 'About Eventara | Premium Event Management',
    description:
      'Learn about our luxury event management services and commitment to creating unforgettable celebrations.',
    type: 'website',
    url: 'https://eventaraevents.com/about',
  },
  alternates: {
    canonical: 'https://eventaraevents.com/about',
  },
};

import { AboutHero } from '@/components/sections/AboutHero';
import { AboutStory } from '@/components/sections/AboutStory';
import { AwardsSection } from '@/components/sections/AwardsSection';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AwardsSection />
    </>
  );
}
