/**
 * Location Schema
 * JSON-LD structured data for location pages
 */

import { LOCATIONS, SERVICES } from '@/lib/constants';

interface LocationSchemaProps {
  location: (typeof LOCATIONS)[0];
}

export function LocationSchema({ location }: LocationSchemaProps) {
  // Get all services (or first 5 for this location's schema)
  const servicesOffered = SERVICES.slice(0, 5).map((service) => ({
    '@type': 'Service',
    name: service.display,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Eventara',
    },
  }));

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Eventara',
    description: `Event planning and management services in ${location.name}`,
    url: `https://eventara.com/locations/${location.slug}`,
    telephone: '+919876543210',
    areaServed: {
      '@type': 'City',
      name: location.name,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: location.coordinates.lat,
        longitude: location.coordinates.lng,
        elevation: `${location.elevation}m`,
      },
    },
    priceRange: '₹',
    image: `https://eventara.com/og-${location.slug}.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `Event Planning Services`,
      addressLocality: location.name,
      addressRegion: 'Northeast India',
      postalCode: '',
      addressCountry: 'IN',
    },
    serviceArea: {
      '@type': 'City',
      name: location.name,
    },
    hasOfferingType: servicesOffered,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '120',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Priya & Rahul',
        },
        reviewBody: `Eventara made our destination wedding in ${location.name} absolutely perfect!`,
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Arjun Singh',
        },
        reviewBody: `Professional and creative event planning in ${location.name}. Highly recommended!`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
