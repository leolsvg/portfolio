// app/metadata-config.ts
// Comprehensive metadata and viewport configuration for Core Web Vitals

export const viewportConfig = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover" as const,
};

export const metadataConfig = {
  // Prevent layout shift from font loading
  fontDisplay: "swap",

  // Preload critical resources
  preloadFonts: [
    {
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.1.0/webfonts/fa-solid-900.woff2",
      type: "font/woff2",
      crossOrigin: true,
    },
    {
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.1.0/webfonts/fa-brands-400.woff2",
      type: "font/woff2",
      crossOrigin: true,
    },
  ],

  // Image optimization hints
  imageOptimization: {
    formats: ["image/avif", "image/webp"],
    sizes: {
      default: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    },
  },

  // Core Web Vitals optimization
  coreWebVitals: {
    // LCP (Largest Contentful Paint) target: < 2.5s
    // Optimize by preloading critical resources
    // FID (First Input Delay) target: < 100ms
    // Optimize by splitting large JS bundles
    // CLS (Cumulative Layout Shift) target: < 0.1
    // Optimize by reserving space for images
  },
};
