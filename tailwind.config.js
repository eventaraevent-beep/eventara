module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode palette
        'maroon': {
          950: '#3A0D16', // Primary dark background
          900: '#4D0F1D', // Secondary dark background
          800: '#55141F', // Card/panel background
          700: '#6E1425', // Headings in light mode
        },
        // Light mode palette
        'cream': {
          50: '#F8F5F0',  // Primary light background
          100: '#F4EDE3', // Light text (dark mode)
          200: '#EDE3D9', // Secondary light background
          300: '#EBDDD0', // Body text (dark mode)
        },
        // Legacy colors (kept for compatibility)
        'rich-black': '#3A0D16', // Updated to maroon
        'event-gold': '#D4AF37',
        'light-gold': '#F1C40F',
        'subtle-gold': '#C9A86A',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
