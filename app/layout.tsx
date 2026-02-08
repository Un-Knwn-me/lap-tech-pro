import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ServiceModalProvider from '@/components/ServiceModalProvider';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://lapprotech.com'),
  title: 'Lap Pro Tech - Professional Electronics Repair Services in Coimbatore',
  description: 'Lap Pro Tech is your trusted electronics repair partner in Coimbatore. Expert laptop, TV, projector, CCTV, and electronics repair services. Same-day service, 20+ years experience, original parts warranty.',
  keywords: 'electronics repair, laptop repair, TV repair, projector repair, CCTV installation, chip level service, Coimbatore, Tamil Nadu, electronics service center, computer repair, mobile repair',
  authors: [{ name: 'Lap Pro Tech' }],
  creator: 'Lap Pro Tech',
  publisher: 'Lap Pro Tech',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://lapprotech.com',
    siteName: 'Lap Pro Tech',
    title: 'Lap Pro Tech - Professional Electronics Repair Services in Coimbatore',
    description: 'Expert electronics repair services in Coimbatore. Laptop, TV, projector, CCTV repair with same-day service and warranty.',
    images: [
      {
        url: 'https://lapprotech.com/Logo.svg',
        width: 1200,
        height: 630,
        alt: 'Lap Pro Tech Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lap Pro Tech - Professional Electronics Repair Services',
    description: 'Expert electronics repair services in Coimbatore. Same-day service, warranty, original parts.',
    images: ['https://lapprotech.com/Logo.svg'],
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48', type: 'image/x-icon' },
      { url: '/Logo.svg', type: 'image/svg+xml', sizes: 'any' },
      { url: '/icon1.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
  themeColor: '#7F41D4',
  colorScheme: 'light',
  viewport: 'width=device-width, initial-scale=1',
  alternates: {
    canonical: 'https://lapprotech.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Get it from: https://search.google.com/search-console */}
        <meta name="google-site-verification" content="b3a7ffad10ff9b03" />
        
        {/* Google Analytics - Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y33BRT129M"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Y33BRT129M');
            `,
          }}
        />
        
        {/* Favicon and Logo Meta Tags */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/Logo.svg" />
        <link rel="icon" type="image/png" href="/icon1.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="application-name" content="Lap Pro Tech" />
        <meta name="msapplication-TileColor" content="#7F41D4" />
        <meta name="msapplication-TileImage" content="/Logo.svg" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Lap Pro Tech",
              "description": "Professional electronics repair services in Coimbatore. Expert laptop, TV, projector, CCTV repair with same-day service and warranty.",
              "url": "https://lapprotech.com",
              "logo": "https://lapprotech.com/Logo.svg",
              "image": "https://lapprotech.com/Logo.svg",
              "telephone": ["+919786667567", "+919514274567"],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "158-E, First Floor, Sanganoor Main Road, Rathinapuri",
                "addressLocality": "Coimbatore",
                "addressRegion": "Tamil Nadu",
                "postalCode": "641027",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 11.026544315667724,
                "longitude": 76.96458826950364
              },
              "openingHours": "Mo-Sa 09:00-20:00, Su 10:00-18:00",
              "priceRange": "$$",
              "currenciesAccepted": "INR",
              "paymentAccepted": "Cash, UPI",
              "areaServed": {
                "@type": "City",
                "name": "Coimbatore"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 11.026544315667724,
                  "longitude": 76.96458826950364
                },
                "geoRadius": "20000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Electronics Repair Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Laptop Repair Service"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "TV Repair Service"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Projector Repair Service"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "CCTV Installation and Service"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://facebook.com/lapprotech",
                "https://instagram.com/lap_pro_tech"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <ServiceModalProvider />
        <WhatsAppButton />
      </body>
    </html>
  );
}
