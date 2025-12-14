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
}

export function VenueSchema({ venue }: { venue: Venue }) {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Place',
        '@id': `https://eventaraevents.com/venues/${venue.slug}#place`,
        name: venue.name,
        description: venue.description,
        address: {
          '@type': 'PostalAddress',
          addressLocality: venue.location,
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: venue.coordinates.lat,
          longitude: venue.coordinates.lng,
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': `https://eventaraevents.com/venues/${venue.slug}#business`,
        name: venue.name,
        description: venue.description,
        address: {
          '@type': 'PostalAddress',
          addressLocality: venue.location,
          addressCountry: 'IN',
        },
        areaServed: [
          { '@type': 'City', name: venue.location },
          { '@type': 'City', name: 'Siliguri' },
          { '@type': 'City', name: 'Darjeeling' },
        ],
        sameAs: `https://eventaraevents.com/venues/${venue.slug}`,
      },
      {
        '@type': 'EventVenue',
        name: venue.name,
        description: venue.description,
        address: {
          '@type': 'PostalAddress',
          addressLocality: venue.location,
          addressCountry: 'IN',
        },
        areaServed: venue.location,
      },
      {
        '@type': 'BreadcrumbList',
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
            name: venue.name,
            item: `https://eventaraevents.com/venues/${venue.slug}`,
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
