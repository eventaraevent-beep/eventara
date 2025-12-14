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

  // Generate SEO-optimized title with location and type for better rankings
  const seoTitle = `${venue.name} ${venue.location} - Premium ${venue.type} Wedding Venue | Eventara`;
  
  // Generate comprehensive meta description with key details
  const seoDescription = `${venue.name} wedding venue in ${venue.location}. ${venue.type} for ${venue.capacity} guests. ${venue.priceRange}. Book now for your destination wedding.`;

  // Build comprehensive keyword list for venue-specific and local searches
  const baseKeywords = [
    `${venue.name}`,
    `${venue.name} wedding`,
    `${venue.name} venue`,
    `wedding venue ${venue.location}`,
    `${venue.location} wedding venue`,
    `${venue.type} ${venue.location}`,
    `${venue.type} wedding venue`,
    `wedding banquet hall ${venue.location}`,
    `destination wedding ${venue.location}`,
    `wedding resort ${venue.location}`,
    `event space ${venue.location}`,
    `marriage venue ${venue.location}`,
    ...venue.keywords,
  ];

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: baseKeywords,
    authors: [{ name: 'Eventara' }],
    creator: 'Eventara',
    publisher: 'Eventara',
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      type: 'website',
      url: `https://eventaraevents.com/venues/${slug}`,
      siteName: 'Eventara',
      locale: 'en_IN',
      images: [
        {
          url: 'https://eventaraevents.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: venue.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      creator: '@eventara',
    },
    alternates: {
      canonical: `https://eventaraevents.com/venues/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    verification: {
      google: 'google-site-verification-code',
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
