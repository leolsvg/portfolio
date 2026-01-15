// app/performance-config.ts
// Performance optimization configuration for Next.js 16

export const performanceOptimizations = {
  // Image optimization config
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },

  // Script optimization
  scripts: {
    strategy: "lazyOnload", // Defer non-critical scripts
  },

  // Bundle optimization
  bundle: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        default: false,
        vendors: false,
        // Vendor code splitting
        vendor: {
          filename: "chunks/vendor.js",
          test: /node_modules/,
          priority: 10,
          reuseExistingChunk: true,
        },
      },
    },
  },

  // Cache strategy
  cache: {
    maxAge: 31536000, // 1 year
    sMaxAge: 31536000,
    staleWhileRevalidate: 86400, // 1 day
  },
};

// Font loading optimization
export const fontOptimizations = {
  display: "swap", // Show fallback font immediately
  preload: true,
};

// Animation performance hints
export const animationOptimizations = {
  useGPUAcceleration: true, // Use transform/opacity for better performance
  prefersReducedMotion: true, // Respect user preferences
};
