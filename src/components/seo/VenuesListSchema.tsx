import { VENUES } from '@/lib/constants';

export function VenuesListSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Premium Event Venues',
    description: 'Comprehensive directory of premium banquet halls, hotels, and resorts in Siliguri corridor',
    url: 'https://eventaraevents.com/venues',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: VENUES.map((venue, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        item: {
          '@type': 'EventVenue',
          name: venue.name,
          description: venue.description,
          address: {
            '@type': 'PostalAddress',
            addressLocality: venue.location,
            addressCountry: 'IN',
          },
          url: `https://eventaraevents.com/venues/${venue.slug}`,
          capacity: venue.capacity,
          priceRange: venue.priceRange,
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}
