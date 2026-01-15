import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light",
  themeColor: "#C07B60",
};

export const metadata: Metadata = {
  title: "Léo Renouf - Développeur Freelance Caen | Web & Applications",
  description:
    "Développeur freelance à Caen spécialisé en développement web moderne (Next.js, React, TypeScript). Création de sites sur-mesure, applications web et solutions digitales pour votre entreprise.",
  keywords: [
    "développeur freelance Caen",
    "développeur web Caen",
    "freelance Caen",
    "Next.js Caen",
    "React développeur",
    "création site web Caen",
    "développeur TypeScript",
    "application web Caen",
    "Léo Renouf",
  ],
  authors: [{ name: "Léo Renouf" }],
  creator: "Léo Renouf",
  publisher: "Léo Renouf",
  metadataBase: new URL("https://www.leorenouf.fr"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.leorenouf.fr",
    title: "Léo Renouf - Développeur Freelance Caen",
    description:
      "Développeur freelance à Caen spécialisé en développement web moderne. Création de sites sur-mesure et applications web.",
    siteName: "Léo Renouf Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Léo Renouf - Développeur Freelance Caen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Léo Renouf - Développeur Freelance Caen",
    description:
      "Développeur freelance à Caen spécialisé en développement web moderne.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
  },
  // Performance hints
  manifest: "/manifest.json",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Léo Renouf",
              jobTitle: "Développeur Freelance",
              description:
                "Développeur freelance à Caen spécialisé en développement web moderne",
              url: "https://www.leorenouf.fr",
              image: "https://www.leorenouf.fr/me.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Caen",
                addressRegion: "Normandie",
                addressCountry: "FR",
              },
              sameAs: [
                "https://github.com/leolsvg",
                "https://linkedin.com/in/leo-renouf",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Supinfo",
              },
              knowsAbout: [
                "Développement Web",
                "Next.js",
                "React",
                "TypeScript",
                "JavaScript",
                "Tailwind CSS",
                "Développement Frontend",
              ],
              workExample: [
                {
                  "@type": "WebSite",
                  name: "Joséphine",
                  url: "https://www.josephine-cherbourg.fr",
                  description: "Site sur-mesure avec système de réservation",
                },
                {
                  "@type": "WebSite",
                  name: "Twodevly",
                  url: "https://twodevly.com",
                  description: "Site vitrine",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
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
        {children}

        {/* FontAwesome CSS with deferred loading */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.1.0/css/all.min.css"
          integrity="sha512-dBVJIzjqdarzcErjActive5oHUE4projokon87g00OoUAu+LInQ1/z7zaZ42qnqVVAIkKJVrgZH+63MnztyxItzR4gFWQC64"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Import Three.js et Vanta via CDN - deferred */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta/dist/vanta.waves.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
