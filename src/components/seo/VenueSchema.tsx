interface Venue {
  slug: string;
  name: string;
  location: string;
  type: string;
  capacity: string;
  priceRange: string;
  highlights: string[];
  amenities: string[];
  keywords: string[];
  description: string;
  coordinates: { lat: number; lng: number };
  seoTitle?: string;
  bestFor?: string[];
}

export function VenueSchema({ venue }: { venue: Venue }) {
  // Extract numeric price for schema if available
  const priceMatch = venue.priceRange.match(/₹?(\d+)/);
  const minPrice = priceMatch ? parseInt(priceMatch[1]) : null;

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'EventVenue',
        '@id': `https://eventaraevents.com/venues/${venue.slug}#venue`,
        name: venue.name,
        description: venue.description,
        url: `https://eventaraevents.com/venues/${venue.slug}`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: `${venue.name}, ${venue.location}`,
          addressLocality: venue.location,
          addressRegion: 'West Bengal',
          addressCountry: 'IN',
          postalCode: '00000',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: venue.coordinates.lat,
          longitude: venue.coordinates.lng,
        },
        areaServed: [
          { '@type': 'City', name: venue.location },
          { '@type': 'City', name: 'Siliguri' },
          { '@type': 'City', name: 'Darjeeling' },
          { '@type': 'City', name: 'Gangtok' },
          { '@type': 'City', name: 'West Bengal' },
        ],
        priceRange: venue.priceRange,
        ...(minPrice && { priceCurrency: 'INR', priceRange: `${minPrice}` }),
        accommodationCategory: venue.type,
        amenityFeature: venue.amenities.map((amenity) => ({
          '@type': 'Text',
          name: amenity,
        })),
        potentialAction: {
          '@type': 'ReserveAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://eventaraevents.com/contact',
            actionPlatform: ['DesktopWebPlatform', 'MobileWebPlatform'],
          },
          result: {
            '@type': 'Reservation',
            name: `Reserve ${venue.name}`,
          },
        },
        telephone: '+919876543210',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Booking',
          availableLanguage: ['en', 'hi'],
          telephone: '+919876543210',
        },
        image: `https://eventaraevents.com/og-image.jpg`,
      },
      {
        '@type': 'LocalBusiness',
        '@id': `https://eventaraevents.com/venues/${venue.slug}#business`,
        name: venue.name,
        description: venue.description,
        url: `https://eventaraevents.com/venues/${venue.slug}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: venue.location,
          addressRegion: 'West Bengal',
          addressCountry: 'IN',
        },
        areaServed: [
          { '@type': 'City', name: venue.location },
          { '@type': 'City', name: 'Siliguri' },
          { '@type': 'City', name: 'Darjeeling' },
          { '@type': 'City', name: 'Gangtok' },
          { '@type': 'City', name: 'Kalimpong' },
          { '@type': 'City', name: 'Jalpaiguri' },
          { '@type': 'City', name: 'Mirik' },
          { '@type': 'City', name: 'Dooars' },
        ],
        priceRange: venue.priceRange,
        servesCuisine: ['Indian', 'International', 'Continental'],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '150',
        },
        sameAs: [
          `https://eventaraevents.com/venues/${venue.slug}`,
          `https://www.google.com/search?q=${encodeURIComponent(venue.name + ' ' + venue.location + ' wedding')}`,
        ],
      },
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `https://eventaraevents.com/venues?location=${venue.location}`,
        },
        query: `${venue.name} wedding venue`,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://eventaraevents.com/venues/${venue.slug}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://eventaraevents.com',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Venues',
            item: 'https://eventaraevents.com/venues',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: venue.location,
            item: `https://eventaraevents.com/venues?location=${venue.location}`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: venue.name,
            item: `https://eventaraevents.com/venues/${venue.slug}`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: `What is the capacity of ${venue.name}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: venue.capacity,
            },
          },
          {
            '@type': 'Question',
            name: `What is the price range at ${venue.name}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: venue.priceRange,
            },
          },
          {
            '@type': 'Question',
            name: `What type of venue is ${venue.name}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: venue.type,
            },
          },
          {
            '@type': 'Question',
            name: `What amenities are available at ${venue.name}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: venue.amenities.join(', '),
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}
