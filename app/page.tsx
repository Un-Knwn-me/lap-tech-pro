'use client';

import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import GoogleMap from '@/components/GoogleMap';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Handle hash navigation on page load
    if (window.location.hash === '#contact') {
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <GoogleMap />
      <Footer />
    </main>
  );
}