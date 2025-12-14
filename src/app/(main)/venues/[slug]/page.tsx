import { Metadata } from 'next';
import { VENUES } from '@/lib/constants';
import { VenueDetailSection } from '@/components/sections/VenueDetailSection';
import { VenueSchema } from '@/components/seo/VenueSchema';

// Generate static params for all venues
export async function generateStaticParams() {
  return VENUES.map((venue) => ({
    slug: venue.slug,
  }));
}

// Generate metadata for each venue
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const venue = VENUES.find((v) => v.slug === slug);

  if (!venue) {
    return {
      title: 'Venue Not Found',
      description: 'The requested venue page does not exist.',
    };
  }

  return {
    title: venue.seoTitle || `${venue.name} - ${venue.location}`,
    description: venue.description,
    keywords: [
      ...venue.keywords,
      'Eventara',
      'wedding venue',
      'event space',
      venue.location,
      venue.type,
    ],
    openGraph: {
      title: venue.seoTitle || venue.name,
      description: venue.description,
      type: 'website',
      url: `https://eventaraevents.com/venues/${slug}`,
    },
    alternates: {
      canonical: `https://eventaraevents.com/venues/${slug}`,
    },
  };
}

interface Params {
  slug: string;
}

export default async function VenueDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const venue = VENUES.find((v) => v.slug === slug);

  if (!venue) {
    return (
      <div className="min-h-screen bg-rich-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-cream-light mb-4">Venue Not Found</h1>
          <p className="text-cream-light/70">The venue you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <VenueDetailSection venue={venue} />
      <VenueSchema venue={venue} />
    </>
  );
}
