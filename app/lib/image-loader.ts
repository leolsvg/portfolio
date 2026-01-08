// app/lib/image-loader.ts
// Optimized image loader configuration for Next.js

export const imageLoader = ({ src, width, quality }: {
  src: string;
  width: number;
  quality?: number;
}): string => {
  // Use Vercel's image optimization or local Next.js optimization
  return `${src}?w=${width}&q=${quality || 75}&auto=webp`;
};

// Image dimensions to prevent layout shift
export const imageDimensions = {
  profileImage: {
    width: 450,
    height: 450,
  },
  projectCard: {
    width: 288,
    height: 384,
  },
  thumbnail: {
    width: 192,
    height: 192,
  },
};

// Responsive image sizes configuration
export const responsiveImageSizes = {
  default: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  profile: '(max-width: 768px) 256px, 450px',
  projectCard: '(max-width: 768px) 288px, 288px',
  full: '100vw',
};
