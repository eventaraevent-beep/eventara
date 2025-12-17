import { Metadata } from 'next';
import { ContactSchema } from '@/components/seo/ContactSchema';
import { ContactPageContent } from '@/components/sections/ContactPageContent';
import { InlineLeadMagnet } from '@/components/sections/InlineLeadMagnet';

export const metadata: Metadata = {
  title: 'Contact Eventara | Book Premium Event Planning Services | Darjeeling, Siliguri',
  description: 'Get in touch with Eventara luxury event management. Phone: +91-9332-345023 | WhatsApp available | Email: eventaraevent@gmail.com. Free consultation for weddings, corporate events, and celebrations across Northeast India.',
  keywords: [
    'contact eventara',
    'event planning services',
    'wedding planner contact',
    'Darjeeling event planner',
    'Siliguri event management',
    'book event planner',
    'event coordination',
    'wedding consultant',
    'corporate event services',
    'contact wedding planner',
  ],
  openGraph: {
    title: 'Contact Eventara | Book Event Planning Services',
    description:
      'Connect with our event planning experts for free consultation on your special celebration.',
    type: 'website',
    url: 'https://eventaraevents.com/contact',
  },
  alternates: {
    canonical: 'https://eventaraevents.com/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactSchema />
      <div className="space-y-12">
        <ContactPageContent />
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-playfair font-bold text-event-gold mb-8 text-center">
            Before You Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <InlineLeadMagnet magnet="checklist" layout="vertical" />
            <InlineLeadMagnet magnet="budget" layout="vertical" />
          </div>
        </div>
      </div>
    </>
  );
}
