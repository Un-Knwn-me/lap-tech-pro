'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import GoogleMap from '@/components/GoogleMap';
import Footer from '@/components/Footer';
import ServiceButton from '@/components/ServiceButton';
import { useAnalytics } from '@/hooks/useAnalytics';

export default function Home() {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    // Track page view
    trackPageView('Lap Pro Tech - Home', window.location.pathname);
    
    // Handle hash navigation on page load
    if (window.location.hash === '#find-us-here') {
      setTimeout(() => {
        const findUsSection = document.getElementById('find-us-here');
        if (findUsSection) {
          findUsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [trackPageView]);

  return (
    <>
      {/* Page-specific structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Lap Pro Tech - Electronics Repair Services in Coimbatore",
            "description": "Professional electronics repair services in Coimbatore. Expert laptop, TV, projector, CCTV repair with same-day service and warranty.",
            "url": "https://lapprotech.com",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Lap Pro Tech",
              "description": "Your trusted partner for laptop, TV, projector, and electronics repair services in Coimbatore."
            }
          })
        }}
      />
      
      <main className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        
        {/* Contact Section */}
        <section id="service-cta" className="py-10 bg-gradient-to-r from-gray-900 via-black to-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Fix Your Electronics?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get in touch with us for professional electronics repair services. We are here to help!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <ServiceButton 
                title="Book Service Now"
                variant="primary"
                size="lg"
              >
                Book Service Now
              </ServiceButton>
              <ServiceButton 
                title="Get Quote Now"
                variant="secondary"
                size="lg"
              >
                Get Quote Now
              </ServiceButton>
            </div>
            
          </div>
        </section>
        
        <Testimonials />
        <GoogleMap />
        <Footer />
      </main>
    </>
  );
}