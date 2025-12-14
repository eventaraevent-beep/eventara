module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      // Generate prefixes for modern browsers
      overrideBrowserslist: ['> 1%', 'last 2 versions', 'Firefox ESR'],
    },
  },
};
