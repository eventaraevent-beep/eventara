/**
 * Lead Capture Form
 * Collects email addresses and event preferences for lead magnets
 */
'use client';

import { useState } from 'react';

interface LeadCaptureFormProps {
  magnetType: 'checklist' | 'budget' | 'calculator';
  title?: string;
  description?: string;
  buttonText?: string;
}

export function LeadCaptureForm({
  magnetType,
  title = 'Get Your Free Resource',
  description = 'Enter your email to download instantly',
  buttonText = 'Get Free Download',
}: LeadCaptureFormProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [eventType, setEventType] = useState('wedding');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Send to backend/email service
      const response = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          name,
          eventType,
          magnetType,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitted(true);

      // Track GA4 event
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'lead_magnet_download', {
          magnet_type: magnetType,
          event_type: eventType,
        });
      }

      // Reset form after 2 seconds
      setTimeout(() => {
        setEmail('');
        setName('');
        setEventType('wedding');
        setSubmitted(false);
      }, 2000);
    } catch (err) {
      setError('Failed to submit. Please try again or contact us directly.');
      console.error('Lead capture error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-gradient-to-r from-event-gold/10 to-light-gold/5 border-2 border-event-gold/50 rounded-xl p-6 md:p-8 text-center">
        <h3 className="text-xl md:text-2xl font-playfair font-bold text-event-gold mb-3">
          ✓ Thank You!
        </h3>
        <p className="text-cream-light mb-2">Your download has been sent to {email}</p>
        <p className="text-cream-light/70 text-sm">Check your inbox and spam folder</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-burgundy-card to-rich-black border border-event-gold/30 rounded-xl p-6 md:p-8">
      <h3 className="text-xl md:text-2xl font-playfair font-bold text-event-gold mb-2">
        {title}
      </h3>
      <p className="text-cream-light/80 text-sm md:text-base mb-6">{description}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-3 bg-rich-black/50 border border-event-gold/30 rounded-lg text-cream-light placeholder-cream-light/50 focus:outline-none focus:border-event-gold focus:ring-1 focus:ring-event-gold"
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3 bg-rich-black/50 border border-event-gold/30 rounded-lg text-cream-light placeholder-cream-light/50 focus:outline-none focus:border-event-gold focus:ring-1 focus:ring-event-gold"
          />
        </div>

        <div>
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            aria-label="Type of event"
            className="w-full px-4 py-3 bg-rich-black/50 border border-event-gold/30 rounded-lg text-cream-light focus:outline-none focus:border-event-gold focus:ring-1 focus:ring-event-gold"
          >
            <option value="wedding">Wedding</option>
            <option value="corporate">Corporate Event</option>
            <option value="engagement">Engagement</option>
            <option value="birthday">Birthday/Celebration</option>
            <option value="destination">Destination Event</option>
            <option value="other">Other</option>
          </select>
        </div>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full px-6 py-3 bg-gradient-to-r from-event-gold to-light-gold text-rich-black font-semibold rounded-lg hover:shadow-lg hover:shadow-event-gold/50 disabled:opacity-50 transition-all duration-300 font-playfair text-lg"
        >
          {loading ? 'Sending...' : buttonText}
        </button>

        <p className="text-cream-light/50 text-xs text-center">
          We'll send you the download link and event planning tips. No spam, ever.
        </p>
      </form>
    </div>
  );
}
