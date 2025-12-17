/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable trailing slashes to prevent 404 issues
  trailingSlash: false,

  // Image Optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Compression
  compress: true,
  
  // Optimize for static generation
  staticPageGenerationTimeout: 60,

  // Disable x-powered-by header for security
  poweredByHeader: false,

  // Enable SWR (Stale While Revalidate) for better performance
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },

  // Headers for caching
  headers: async () => {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Content-Type',
            value: 'image/:ext',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
        ],
      },
    ];
  },

  // Redirects for non-existent pages
  redirects: async () => {
    return [
      {
        source: '/privacy',
        destination: '/',
        permanent: false,
      },
      {
        source: '/terms',
        destination: '/',
        permanent: false,
      },
    ];
  },

  // Performance optimizations
  productionBrowserSourceMaps: false,

  // React strict mode for development
  reactStrictMode: true,

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'react-dom',
    ],
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },

  // Webpack optimizations
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;

