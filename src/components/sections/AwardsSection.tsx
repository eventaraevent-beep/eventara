'use client';

import { motion } from 'framer-motion';

export function AwardsSection() {
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

  const awards = [
    'Best Event Manager - Darjeeling Region 2023',
    'Luxury Wedding Planner Award 2022',
    'Innovation in Event Management 2023',
    'Customer Choice Award 2022',
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-burgundy-dark/30 via-rich-black to-burgundy-dark/30 px-3 sm:px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Awards & <span className="text-gradient">Recognition</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="card-luxury p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
            >
              <div className="text-3xl sm:text-4xl flex-shrink-0">🏆</div>
              <div>
                <p className="font-inter font-semibold text-event-gold">{award}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
