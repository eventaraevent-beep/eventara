import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Event Planning Blog | Wedding Ideas, Corporate Tips & Celebration Guides',
  description:
    'Expert event planning blog featuring wedding ideas, corporate event guides, decoration tips, vendor advice, and luxury celebration insights for Darjeeling, Siliguri, and Northeast India.',
  keywords: [
    'event planning blog',
    'wedding ideas',
    'wedding planning tips',
    'event decoration ideas',
    'catering guide',
    'corporate event tips',
    'celebration ideas',
    'wedding blog',
    'destination wedding guide',
    'luxury wedding tips',
    'wedding planner guide',
    'event management blog',
    'destination wedding blog',
    'Darjeeling wedding blog',
    'Siliguri event tips',
  ],
  openGraph: {
    title: 'Event Planning Blog | Wedding & Event Ideas',
    description:
      'Discover expert tips and guides for planning the perfect wedding or corporate event.',
    type: 'website',
    url: 'https://eventaraevents.com/blog',
  },
  alternates: {
    canonical: 'https://eventaraevents.com/blog',
  },
};

import { BlogHero } from '@/components/sections/BlogHero';
import { BlogGrid } from '@/components/sections/BlogGrid';

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
    </>
  );
}
