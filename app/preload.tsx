// app/preload.tsx
// Centralized preloading strategy for better performance

export function PreloadCriticalResources() {
  return (
    <>
      {/* Preload critical fonts */}
      <link
        rel="preload"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.1.0/webfonts/fa-solid-900.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.1.0/webfonts/fa-brands-400.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      
      {/* Preload critical images */}
      <link rel="preload" as="image" href="/me.jpg" type="image/jpeg" />
      
      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
      <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
    </>
  );
}
