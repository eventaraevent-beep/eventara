'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import { getWhatsAppLink } from '@/lib/utils';

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
  bestFor: string[];
}

export function VenueDetailSection({ venue }: { venue: Venue }) {
  const whatsappLink = getWhatsAppLink(
    WHATSAPP_NUMBER,
    `Hi Eventara! I'm interested in booking ${venue.name} in ${venue.location}. Can you provide availability, exact pricing, and booking details?`
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
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

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-burgundy-dark via-rich-black to-rich-black px-3 sm:px-4 md:px-8 pt-20 pb-16 sm:pt-24 md:pt-32">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Link href="/venues" className="text-event-gold hover:text-light-gold transition-colors mb-6 inline-block">
              ← Back to Venues
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-event-gold/10 border border-event-gold/30 rounded-full text-event-gold text-sm font-semibold mb-4">
                {venue.type}
              </span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {venue.name}
            </h1>
            <p className="text-lg sm:text-xl text-cream-light/80 mb-6">{venue.location}</p>
            <p className="max-w-2xl text-base sm:text-lg text-cream-light/70 leading-relaxed">{venue.description}</p>
          </motion.div>

          {/* Key Info Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="card-luxury p-6">
              <div className="text-event-gold text-3xl mb-2">👥</div>
              <p className="text-sm text-cream-light/60 mb-1">Capacity</p>
              <p className="text-lg font-semibold text-cream-light">{venue.capacity}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="card-luxury p-6">
              <div className="text-event-gold text-3xl mb-2">💰</div>
              <p className="text-sm text-cream-light/60 mb-1">Price Range</p>
              <p className="text-lg font-semibold text-cream-light">{venue.priceRange}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="card-luxury p-6">
              <div className="text-event-gold text-3xl mb-2">📍</div>
              <p className="text-sm text-cream-light/60 mb-1">Location</p>
              <p className="text-lg font-semibold text-cream-light">{venue.location}</p>
            </motion.div>

            <motion.div variants={itemVariants} className="card-luxury p-6">
              <div className="text-event-gold text-3xl mb-2">🎯</div>
              <p className="text-sm text-cream-light/60 mb-1">Venue Type</p>
              <p className="text-lg font-semibold text-cream-light">{venue.type}</p>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2 px-8 py-4 sm:py-3"
            >
              💬 Chat on WhatsApp
            </a>
            <a
              href="/contact"
              className="btn-secondary flex items-center justify-center gap-2 px-8 py-4 sm:py-3"
            >
              📧 Send Inquiry
            </a>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-rich-black px-3 sm:px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-gradient">{venue.name}</span>
            </h2>
            <p className="text-cream-light/70 text-lg">Premium features and amenities</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {venue.highlights.map((highlight, idx) => (
              <motion.div key={idx} variants={itemVariants} className="card-luxury p-6 sm:p-8">
                <div className="flex gap-4">
                  <div className="text-3xl">✨</div>
                  <div>
                    <p className="text-cream-light font-semibold">{highlight}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-rich-black to-burgundy-dark/20 px-3 sm:px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Available <span className="text-gradient">Amenities</span>
            </h2>
            <p className="text-cream-light/70 text-lg">Complete facilities for your event</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {venue.amenities.map((amenity, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-center gap-3 p-4 bg-burgundy-dark/20 rounded-lg border border-event-gold/10 hover:border-event-gold/30 transition-colors"
              >
                <span className="text-event-gold text-xl">✓</span>
                <span className="text-cream-light">{amenity}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Best For Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-rich-black px-3 sm:px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Perfect For <span className="text-gradient">Events</span>
            </h2>
            <p className="text-cream-light/70 text-lg">Ideal event types for this venue</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {venue.bestFor.map((eventType, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-gradient-to-br from-burgundy-dark/30 to-rich-black border border-event-gold/20 rounded-lg p-4 sm:p-6 text-center hover:border-event-gold/50 transition-colors"
              >
                <p className="text-cream-light font-semibold text-sm sm:text-base">{eventType}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-burgundy-dark via-rich-black to-burgundy-dark px-3 sm:px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Book <span className="text-gradient">{venue.name}</span>?
            </h2>
            <p className="text-cream-light/80 mb-8 text-lg">
              Contact Eventara today for availability, pricing, and booking details. We'll help you plan the perfect event at this stunning venue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 px-8 py-4"
              >
                💬 Chat on WhatsApp
              </a>
              <a href="/contact" className="btn-secondary flex items-center justify-center gap-2 px-8 py-4">
                📧 Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
