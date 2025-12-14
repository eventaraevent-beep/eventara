'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-rich-black text-cream-light flex flex-col items-center justify-center px-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* 404 Text */}
        <motion.div
          className="mb-6"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <h1 className="text-9xl font-bold text-event-gold mb-2">404</h1>
          <p className="text-2xl font-playfair text-cream-light mb-4">
            Page Not Found
          </p>
        </motion.div>

        {/* Description */}
        <p className="text-cream-light/70 text-lg max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>

        {/* Quick Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="px-8 py-3 bg-event-gold text-rich-black font-semibold rounded-lg hover:bg-light-gold transition-colors inline-block"
          >
            Go Home
          </Link>
          <Link
            href="/services"
            className="px-8 py-3 border-2 border-event-gold text-event-gold font-semibold rounded-lg hover:bg-event-gold/10 transition-colors inline-block"
          >
            Browse Services
          </Link>
        </div>

        {/* Popular Links */}
        <div className="text-sm text-cream-light/60">
          <p className="mb-3">Popular Searches:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="text-event-gold hover:text-light-gold transition-colors underline"
            >
              Wedding Planner
            </Link>
            <span>•</span>
            <Link
              href="/siliguri"
              className="text-event-gold hover:text-light-gold transition-colors underline"
            >
              Siliguri
            </Link>
            <span>•</span>
            <Link
              href="/contact"
              className="text-event-gold hover:text-light-gold transition-colors underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-event-gold/5 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-event-gold/5 rounded-full blur-3xl opacity-20" />
      </div>
    </div>
  );
}
