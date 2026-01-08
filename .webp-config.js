// Image optimization configuration
// Ensures all images are served in WebP/AVIF with fallbacks
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};
