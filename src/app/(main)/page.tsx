import { Metadata } from 'next';
import { FAQSchema } from '@/components/seo/FAQSchema';

export const metadata: Metadata = {
  title: 'Luxury Event Management in Darjeeling & Siliguri | Eventara',
  description:
    'Transform your vision into reality with Eventara. Premium event planning for weddings, corporate events, and destination experiences in Darjeeling, Siliguri, Gangtok, and Northeast India. Expert coordination, stunning venues, professional service.',
  keywords: [
    'event management',
    'luxury events',
    'wedding planning',
    'corporate events',
    'destination events',
    'Darjeeling event planner',
    'Siliguri wedding planner',
    'event coordination',
  ],
};

import { HomepageHero } from '@/components/sections/HomepageHero';
import { ServiceGrid } from '@/components/sections/ServiceGrid';
import { LocationGrid } from '@/components/sections/LocationGrid';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { FAQSection } from '@/components/sections/FAQSection';

const homepageFAQs = [
  {
    question: 'How far in advance should I book Eventara?',
    answer: 'We recommend booking 3-6 months in advance for weddings and major events to ensure venue availability and perfect coordination. However, we can accommodate shorter timelines for corporate events.',
  },
  {
    question: 'Which locations do you serve?',
    answer: 'We serve 7 prime locations: Siliguri, Darjeeling, Gangtok, Kalimpong, Kurseong, Bagdogra, and Mirik. Our local expertise spans the entire Darjeeling Corridor and Northeast region.',
  },
  {
    question: 'What services can be customized?',
    answer: 'All our services are fully customizable. From pandal decoration themes to multi-cuisine catering menus, DJ music playlists to venue logistics—we tailor everything to your vision and budget.',
  },
  {
    question: 'Do you handle destination weddings?',
    answer: 'Absolutely! We specialize in destination weddings. Our DMC services include accommodation coordination, travel logistics, vendor management, and full event planning.',
  },
];

export default function Home() {
  return (
    <>
      <FAQSchema faqs={homepageFAQs} />
      <HomepageHero />
      <ServiceGrid />
      <LocationGrid />
      <TestimonialSection />
      <FAQSection />
    </>
  );
}
