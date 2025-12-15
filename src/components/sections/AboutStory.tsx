'use client';

import { motion } from 'framer-motion';

export function AboutStory() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
      {/* Mission & Vision Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-rich-black via-burgundy-dark/30 to-rich-black px-3 sm:px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <h2 className="font-playfair text-5xl font-bold">
                <span className="text-gradient">Our Mission</span>
              </h2>

              <div className="space-y-4 font-inter text-cream-light/90">
                <p>
                  At Eventara, we believe every celebration tells a unique story. Our
                  mission is to transform your vision into an unforgettable reality by
                  combining creative excellence with meticulous execution.
                </p>
                <p>
                  From intimate gatherings to grand destination weddings, we bring
                  expertise, luxury, and heart to every event we create.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                {[
                  'Award-winning event designers',
                  'Trusted by 2000+ clients',
                  'Full-service luxury management',
                  'Located across 7 regions',
                ].map((point, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-cream-light/95"
                  >
                    <div className="w-2 h-2 rounded-full bg-event-gold flex-shrink-0" />
                    <span className="font-inter">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="card-luxury p-8 space-y-6"
            >
              <h3 className="font-playfair text-2xl font-bold text-event-gold">
                Why Choose Eventara?
              </h3>
              {[
                {
                  title: 'Luxury Expertise',
                  desc: 'Specializing in high-end destination events',
                },
                {
                  title: 'Local Knowledge',
                  desc: 'Deep connections across the Himalayan region',
                },
                {
                  title: 'Personalized Service',
                  desc: 'Custom solutions for your unique vision',
                },
                {
                  title: '24/7 Support',
                  desc: 'Complete coordination from planning to execution',
                },
              ].map((item, idx) => (
                <div key={idx}>
                  <h4 className="font-playfair text-lg font-bold text-light-gold mb-2">
                    {item.title}
                  </h4>
                  <p className="font-inter text-cream-light/70 text-sm">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-rich-black px-3 sm:px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Expertise & Experience</span>
            </h2>
            <p className="font-inter text-cream-light/70 text-lg max-w-3xl mx-auto">
              With 15+ years of excellence in event management, we've mastered every
              aspect of creating extraordinary celebrations.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: '💍',
                title: 'Wedding Planning',
                desc: 'Complete wedding orchestration from engagement to honeymoon coordination',
              },
              {
                icon: '🎉',
                title: 'Celebration Events',
                desc: 'Birthdays, anniversaries, baby showers, and intimate family gatherings',
              },
              {
                icon: '🏢',
                title: 'Corporate Events',
                desc: 'Conferences, product launches, team building, and professional gatherings',
              },
              {
                icon: '🎭',
                title: 'Cultural Celebrations',
                desc: 'Pandal decorations, festival events, and traditional ceremonies',
              },
              {
                icon: '✈️',
                title: 'Destination Management',
                desc: 'Group tours, holiday packages, and adventure experiences',
              },
              {
                icon: '🌟',
                title: 'Luxury Design',
                desc: 'Bespoke theming, décor, and premium service coordination',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="card-luxury p-6 text-center hover:border-event-gold/60 transition-colors"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-playfair text-xl font-bold text-event-gold mb-3">
                  {item.title}
                </h3>
                <p className="font-inter text-cream-light/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-burgundy-dark/20 to-rich-black px-3 sm:px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="text-center mb-12"
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
                Our <span className="text-gradient">Commitment to Excellence</span>
              </h2>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="card-luxury p-8 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-event-gold mb-4">
                    Quality & Attention to Detail
                  </h3>
                  <p className="font-inter text-cream-light/80">
                    Every element of your event is meticulously planned and executed. From
                    the smallest decoration detail to the grand finale, we ensure perfection.
                  </p>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-event-gold mb-4">
                    Innovation & Creativity
                  </h3>
                  <p className="font-inter text-cream-light/80">
                    We stay ahead of trends and constantly innovate to bring fresh, unique
                    concepts to every celebration. Your event will be distinctly yours.
                  </p>
                </div>
              </div>
              <div className="border-t border-event-gold/20 pt-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-event-gold mb-4">
                    Client-Centric Approach
                  </h3>
                  <p className="font-inter text-cream-light/80">
                    Your vision is our roadmap. We listen, understand, and deliver exactly
                    what you dream of, plus those unexpected magical touches.
                  </p>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-event-gold mb-4">
                    Seamless Coordination
                  </h3>
                  <p className="font-inter text-cream-light/80">
                    With a network of premium vendors and deep local expertise, we orchestrate
                    every element to create a flawless experience.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
