import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceButton from '@/components/ServiceButton';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <section className="pt-24 pb-8 bg-white fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
            About Us
          </h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 fade-in-delay-1">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Since 2006, we are a trusted name in mobile, laptop, and TV servicing with over 20 years of hands-on experience. Based in the heart of Coimbatore, our 20-member expert team delivers reliable, affordable, and professional repair solutions across the city.
              </p>
              
              <p className="text-lg">
                We specialize in laptop repairs using 100% original spare parts, Laptop repairs with original spare parts, TV & projector servicing, CCTV installation & maintenance, CNC machine repairs, Home appliance servicing (AC, washing machine, fridge, microwave, etc.).
              </p>
              
              <p className="text-lg">
                We offer same-day service within 20 km. For areas beyond, service is arranged based on technician availability. Every replaced part comes with a 10-day service warranty, ensuring peace of mind.
              </p>
              
              <p className="text-lg">
                We also offer refurbished laptops and desktops with up to 3 years warranty, making quality tech more accessible to everyone.
              </p>
              
              <p className="text-lg">
                Visit us between 9:30 AM and 8:00 PM (closed on Sundays).
              </p>
              
              <p className="text-lg">
                We accept payments via UPI and cash.
              </p>
              
              <p className="text-lg">
                A minimum visiting charge applies for inspections.
              </p>
              
              <p className="text-lg font-semibold text-gray-800">
                Experience service that values your time, trust, and technology. Serving all over Coimbatore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">20+ Years Experience</h3>
              <p className="text-gray-600">Trusted service since 2006</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Same-Day Service</h3>
              <p className="text-gray-600">Within 20 km radius</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">10-Day Warranty</h3>
              <p className="text-gray-600">On all replaced parts</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Original Parts</h3>
              <p className="text-gray-600">100% genuine spare parts</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Team</h3>
              <p className="text-gray-600">20-member professional team</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Easy Payment</h3>
              <p className="text-gray-600">UPI and cash accepted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours & Contact */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in">
            <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Working Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Monday - Saturday:</span>
                  <span className="font-semibold text-gray-800">9:30 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Sunday:</span>
                  <span className="font-semibold text-red-600">Closed</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Service Area
              </h3>
              <p className="text-gray-700 mb-4">
                Serving all over Coimbatore with same-day service within 20 km radius.
              </p>
              <div className="flex flex-col space-y-2">
                <a 
                  href="tel:+919786667567"
                  className="bg-gradient-to-r from-orange-400 to-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:from-orange-500 hover:to-yellow-600 transition-all duration-300 inline-block text-center"
                >
                  Call: +91 97866 67567
                </a>
                <a 
                  href="tel:+919514274567"
                  className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 inline-block text-center"
                >
                  Call: +91 95142 74567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Booking CTA */}
      <section className="py-12 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Book your service appointment or get a quote for your electronics repair needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      <Footer />
    </main>
  );
}