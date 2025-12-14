module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': '#3A0D16', // Deep Maroon/Wine - Primary Background
        'burgundy-dark': '#4D0F1D', // Rich Plum - Secondary Background
        'burgundy-card': '#55141F', // Soft Burgundy - Cards/Panels
        'event-gold': '#D4AF37', // Classic Gold - Accent
        'light-gold': '#F1C40F', // Light Gold - Highlights
        'cream-light': '#F4EDE3', // Light Cream - Primary Text
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
