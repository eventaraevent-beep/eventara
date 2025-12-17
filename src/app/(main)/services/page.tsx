import { Metadata } from 'next';
import { ServiceCatalog } from '@/components/sections/ServiceCatalog';
import { EnhancedServicesSchema } from '@/components/seo/EnhancedServicesSchema';
import { EventManagementFAQSchema } from '@/components/seo/EventManagementFAQSchema';
import { LeadMagnetsSection } from '@/components/sections/LeadMagnetsSection';

export const metadata: Metadata = {
  title: 'Event Planning Services | Wedding & Corporate Events | Eventara',
  description:
    'Comprehensive event planning services including wedding planning, corporate events, destination management, and luxury celebrations across Siliguri, Darjeeling, and Northeast India.',
  keywords: [
    'event planning services',
    'wedding planning',
    'corporate event management',
    'destination events',
    'event management',
    'Siliguri events',
    'Darjeeling events',
    'wedding services',
    'corporate event services',
    'event coordination',
    'premium events',
    'luxury event services',
  ],
  openGraph: {
    title: 'Event Planning Services | Eventara',
    description:
      'Premium event management services for weddings, corporate events, and celebrations',
    type: 'website',
    url: 'https://eventaraevents.com/services',
  },
  alternates: {
    canonical: 'https://eventaraevents.com/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <EnhancedServicesSchema />
      <EventManagementFAQSchema />
      <ServiceCatalog />
      <LeadMagnetsSection />
    </>
  );
}
