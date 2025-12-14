'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { VENUES } from '@/lib/constants';

export function VenuesGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Group venues by location for better organization
  const venuesByLocation = VENUES.reduce(
    (acc, venue) => {
      if (!acc[venue.location]) acc[venue.location] = [];
      acc[venue.location].push(venue);
      return acc;
    },
    {} as Record<string, typeof VENUES>
  );

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-rich-black px-3 sm:px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Introduction */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Premium <span className="text-gradient">Venues</span> Across Siliguri Corridor
          </h2>
          <p className="text-cream-light/70 text-lg max-w-2xl mx-auto">
            Explore our curated collection of banquet halls, hotels, resorts, and unique event spaces perfect for your celebration.
          </p>
        </motion.div>

        {/* Venues by Location */}
        {Object.entries(venuesByLocation).map(([location, locationVenues]) => (
          <div key={location} className="mb-16">
            <motion.h3
              className="font-playfair text-2xl sm:text-3xl font-bold text-event-gold mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {location}
            </motion.h3>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {locationVenues.map((venue) => (
                <motion.div
                  key={venue.slug}
                  variants={itemVariants}
                  whileHover={{ translateY: -8 }}
                  className="card-luxury p-6 hover:border-event-gold/60 transition-all group h-full flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-playfair text-lg font-bold text-event-gold mb-1 group-hover:text-light-gold transition-colors">
                        {venue.name}
                      </h3>
                      <p className="font-inter text-sm text-cream-light/70">{venue.location}</p>
                    </div>
                    <span className="text-3xl ml-2">🏛️</span>
                  </div>

                  <p className="font-inter text-sm text-cream-light/80 mb-4 flex-grow">
                    {venue.description}
                  </p>

                  <div className="space-y-3 mb-4 pt-4 border-t border-event-gold/20">
                    <div>
                      <p className="font-inter text-xs text-cream-light/50">Type</p>
                      <p className="font-inter text-sm text-cream-light/90">{venue.type}</p>
                    </div>
                    <div>
                      <p className="font-inter text-xs text-cream-light/50">Capacity</p>
                      <p className="font-inter text-sm text-cream-light/90">{venue.capacity}</p>
                    </div>
                    <div>
                      <p className="font-inter text-xs text-cream-light/50">Price Range</p>
                      <p className="font-inter text-sm text-cream-light/90">{venue.priceRange}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href={`/venues/${venue.slug}`}
                      className="flex-1 py-2 border border-event-gold text-event-gold rounded font-inter text-sm hover:bg-event-gold/10 transition-colors text-center"
                    >
                      View Details
                    </Link>
                    <a
                      href={`https://wa.me/919332345023?text=Hi%20Eventara,%20I'm%20interested%20in%20${encodeURIComponent(
                        venue.name
                      )}%20for%20my%20event.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 bg-event-gold text-rich-black rounded font-inter text-sm hover:bg-light-gold transition-colors text-center"
                    >
                      Inquire
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}

        {/* CTA */}
        <motion.div
          className="mt-16 card-luxury p-8 sm:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-event-gold mb-4">
            Can't Find Your Perfect Venue?
          </h3>
          <p className="font-inter text-cream-light/70 mb-6 max-w-2xl mx-auto text-base sm:text-lg">
            We have access to many more premium venues across the Siliguri corridor and nearby regions. Contact us to discuss your specific requirements and budget.
          </p>
          <a
            href="https://wa.me/919332345023?text=Hi%20Eventara,%20I%20need%20help%20finding%20the%20perfect%20venue%20for%20my%20event.%20Can%20you%20share%20recommendations%20within%20my%20budget?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 sm:py-4 bg-event-gold text-rich-black font-semibold rounded-lg hover:bg-light-gold transition-colors"
          >
            Get Venue Recommendations
          </a>
        </motion.div>
      </div>
    </section>
  );
}
