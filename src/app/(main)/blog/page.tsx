import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Event Planning Blog | Wedding Ideas & Corporate Event Tips | Eventara',
  description:
    'Expert event planning blog: wedding ideas, corporate event guides, decoration tips, catering advice, and luxury celebration insights for Darjeeling, Siliguri, and Northeast India.',
  keywords: [
    'event planning blog',
    'wedding ideas',
    'wedding planning tips',
    'event decoration',
    'catering guide',
    'corporate event tips',
    'celebration ideas',
    'wedding blog',
    'destination wedding guide',
    'luxury wedding tips',
    'wedding planner guide',
    'event management blog',
    'destination wedding blog',
    'Darjeeling wedding',
  ],
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
