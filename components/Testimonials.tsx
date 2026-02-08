'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

interface Review {
  name: string;
  message: string;
  avatar: string;
  rating: number;
  date: string;
  verified: boolean;
  googleReviewId?: number;
}

interface GoogleReviewsData {
  reviews: Review[];
  overallRating: number;
  totalReviews: number;
}

export default function Testimonials() {
  const [reviewsData, setReviewsData] = useState<GoogleReviewsData>({
    reviews: [],
    overallRating: 0,
    totalReviews: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGoogleReviews = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/google-reviews');
        
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }
        
        const data = await response.json();
        setReviewsData(data);
      } catch (err) {
        console.error('Error fetching Google Reviews:', err);
        setError('Failed to load reviews');
        // Fallback to static data if API fails
        setReviewsData({
          reviews: [
            {
              name: "Sharan. R",
              message: "Fast and professional service - they revived my dead laptop! The team was knowledgeable and provided excellent customer support throughout the repair process.",
              avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
              rating: 5,
              date: "2 weeks ago",
              verified: true
            },
            {
              name: "Priya M",
              message: "Excellent TV repair service. Quick turnaround and fair pricing! They diagnosed the issue accurately and fixed it within the promised timeframe.",
              avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
              rating: 5,
              date: "1 month ago",
              verified: true
            },
            {
              name: "Rajesh K",
              message: "Outstanding chip-level repair service! They fixed my laptop motherboard when others said it was beyond repair. Highly recommended for complex electronics issues.",
              avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
              rating: 5,
              date: "3 weeks ago",
              verified: true
            },
            {
              name: "Meera S",
              message: "Great experience with projector repair. Professional staff, transparent pricing, and quality work. My projector works like new now!",
              avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
              rating: 5,
              date: "1 week ago",
              verified: true
            }
          ],
          overallRating: 5,
          totalReviews: 4
        });
      } finally {
        setLoading(false);
      }
    };

    fetchGoogleReviews();
  }, []);

  const { reviews, overallRating, totalReviews } = reviewsData;

  // Calculate total slides needed for 2 testimonials per view
  const totalSlides = Math.ceil(reviews.length / 2); // Changed to 2 testimonials per view
  const maxIndex = Math.max(0, totalSlides - 1);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const startAutoScroll = () => {
      if (isAutoScrolling && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const slideWidth = containerWidth / (reviews.length / 2); // Adjust for 2 testimonials per view
        const newIndex = (currentIndex + 1) % totalSlides;
        setCurrentIndex(newIndex);
      }
    };

    if (isAutoScrolling) {
      scrollIntervalRef.current = setInterval(startAutoScroll, 5000); // Auto-scroll every 5 seconds
    }

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };
  }, [currentIndex, isAutoScrolling, totalSlides, reviews.length]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent mb-4">
            What Our Customers Say
          </h2>
          
          {/* Google Reviews Summary */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                <svg viewBox="0 0 24 24" className="w-6 h-6">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              {loading ? (
                <div className="animate-pulse">
                  <div className="h-8 w-16 bg-gray-300 rounded"></div>
                </div>
              ) : (
                <>
                  <span className="text-2xl font-bold text-gray-800">{overallRating.toFixed(1)}</span>
                  <div className="flex text-yellow-400 text-xl">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(overallRating) ? 'text-yellow-400' : 'text-gray-300'}>
                        ⭐
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-600">({totalReviews} reviews)</span>
                </>
              )}
            </div>
          </div>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by hundreds of satisfied customers across Coimbatore
          </p>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonials"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Next testimonials"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Testimonials Container */}
          <div 
            ref={containerRef}
            className="overflow-hidden"
          >
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${totalSlides * 100}%`
              }}
            >
              {/* Generate slides with 2 testimonials each */}
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div 
                  key={slideIndex}
                  className="flex-shrink-0 w-full px-4"
                  style={{ width: `${100 / totalSlides}%` }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reviews.slice(slideIndex * 2, slideIndex * 2 + 2).map((testimonial: Review, index: number) => (
                      <div key={`${slideIndex}-${index}`} className="bg-gray-50 p-8 rounded-2xl shadow-lg hover-scale border border-gray-100 h-full">
                        <div className="flex items-start space-x-4">
                          <Image
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            width={64}
                            height={64}
                            className="rounded-full object-cover flex-shrink-0"
                          />
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                                {testimonial.verified && (
                                  <div className="flex items-center space-x-1">
                                    <span className="text-blue-500 text-sm">✓</span>
                                    <span className="text-xs text-gray-500">Verified</span>
                                  </div>
                                )}
                              </div>
                              <span className="text-sm text-gray-500">{testimonial.date}</span>
                            </div>
                            
                            <div className="flex text-yellow-400 mb-3">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <span key={i} className="text-lg">⭐</span>
                              ))}
                            </div>
                            
                            <p className="text-gray-700 leading-relaxed">
                              &quot;{testimonial.message}&quot;
                            </p>
                            
                            <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-gray-200">
                              <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                                <svg viewBox="0 0 24 24" className="w-3 h-3">
                                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                </svg>
                              </div>
                              <span className="text-xs text-gray-500">Posted on Google</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-orange-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* View More Reviews Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Google Reviews
          </button>
        </div>
        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Had a great experience with us?
          </h3>
          <p className="text-gray-600 mb-6">
            Share your feedback and help others discover our quality service
          </p>
          <button className="bg-gradient-to-r from-orange-400 to-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-orange-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105">
            Leave a Google Review
          </button>
        </div>
      </div>
    </section>
  );
}