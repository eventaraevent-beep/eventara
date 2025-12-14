import { Metadata } from 'next';
import { ContactSchema } from '@/components/seo/ContactSchema';

export const metadata: Metadata = {
  title: 'Contact Eventara | Book Event Planning Services | Darjeeling, Siliguri',
  description: 'Contact Eventara luxury event management. Phone: +91-9332-345023 | WhatsApp available | Email: info@eventara.com. Free consultation for weddings & corporate events in Darjeeling, Siliguri.',
  keywords: [
    'contact eventara',
    'event planning services',
    'wedding planner contact',
    'Darjeeling event planner',
    'Siliguri event management',
    'book event planner',
    'event coordination',
  ],
};

import { ContactPageContent } from '@/components/sections/ContactPageContent';

export default function ContactPage() {
  return (
    <>
      <ContactSchema />
      <ContactPageContent />
    </>
  );
}
