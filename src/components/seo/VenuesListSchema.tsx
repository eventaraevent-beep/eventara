import { VENUES } from '@/lib/constants';

export function VenuesListSchema() {
  // Group venues by location for better schema organization
  const venuesByLocation = VENUES.reduce(
    (acc, venue) => {
      if (!acc[venue.location]) {
        acc[venue.location] = [];
      }
      acc[venue.location].push(venue);
      return acc;
    },
    {} as Record<string, typeof VENUES>
  );

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': 'https://eventaraevents.com/venues#collection',
        name: 'Premium Event Venues in Siliguri, Darjeeling & Himalayan Corridor',
        description:
          'Comprehensive directory of 70+ premium banquet halls, resorts, and event venues across Siliguri, Darjeeling, Gangtok, Kalimpong, Jalpaiguri, Mirik, and Dooars',
        url: 'https://eventaraevents.com/venues',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: VENUES.map((venue, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            item: {
              '@type': 'EventVenue',
              '@id': `https://eventaraevents.com/venues/${venue.slug}`,
              name: venue.name,
              description: venue.description,
              url: `https://eventaraevents.com/venues/${venue.slug}`,
              address: {
                '@type': 'PostalAddress',
                addressLocality: venue.location,
                addressRegion: 'West Bengal',
                addressCountry: 'IN',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: venue.coordinates.lat,
                longitude: venue.coordinates.lng,
              },
              accommodationCategory: venue.type,
              priceRange: venue.priceRange,
              amenityFeature: venue.amenities.slice(0, 5).map((amenity) => ({
                '@type': 'Text',
                name: amenity,
              })),
            },
          })),
        },
        breadcrumb: {
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
          ],
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://eventaraevents.com#eventara',
        name: 'Eventara',
        description:
          'Premium wedding and event venue booking platform for Siliguri, Darjeeling, and Himalayan regions',
        url: 'https://eventaraevents.com',
        telephone: '+919876543210',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Siliguri',
          addressRegion: 'West Bengal',
          addressCountry: 'IN',
        },
        areaServed: [
          { '@type': 'City', name: 'Siliguri' },
          { '@type': 'City', name: 'Darjeeling' },
          { '@type': 'City', name: 'Gangtok' },
          { '@type': 'City', name: 'Kalimpong' },
          { '@type': 'City', name: 'Jalpaiguri' },
          { '@type': 'City', name: 'Mirik' },
          { '@type': 'City', name: 'Dooars' },
          { '@type': 'City', name: 'Kurseong' },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '500',
        },
        sameAs: [
          'https://www.google.com/search?q=eventara+wedding+venues',
          'https://eventaraevents.com',
        ],
      },
      {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://eventaraevents.com/venues?q={search_term}',
        },
        query: 'Required',
      },
      // Location-based schemas for better local SEO
      ...Object.entries(venuesByLocation).map(([location, venues]) => ({
        '@type': 'LocalBusiness',
        '@id': `https://eventaraevents.com/venues?location=${location}#location`,
        name: `${location} Wedding Venues | Eventara`,
        description: `${venues.length} premium wedding and event venues in ${location}. Book banquet halls, resorts, and event spaces.`,
        url: `https://eventaraevents.com/venues?location=${location}`,
        address: {
          '@type': 'PostalAddress',
          addressLocality: location,
          addressRegion: 'West Bengal',
          addressCountry: 'IN',
        },
        areaServed: location,
        numberOfItems: venues.length,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${location} Wedding Venues`,
          itemListElement: venues.map((v) => ({
            '@type': 'Offer',
            name: v.name,
            url: `https://eventaraevents.com/venues/${v.slug}`,
            price: v.priceRange,
          })),
        },
      })),
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
