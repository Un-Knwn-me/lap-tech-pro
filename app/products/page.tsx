import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const products = [
  {
    title: "Custom PC Building",
    price: "Custom / Price on Request",
    image: "/images/Custom PC Building.png",
    description: "High-performance custom gaming and workstation PCs"
  },
  {
    title: "All Brand TVs",
    price: "Custom / Price on Request", 
    image: "/images/All Brand TVs.png",
    description: "LED, OLED, Smart TVs from all major brands"
  },
  {
    title: "Refurbished Laptops",
    price: "Custom / Price on Request",
    image: "/images/Refurbished Laptops.png",
    description: "Quality refurbished laptops with warranty"
  },
  {
    title: "All Brand CCTV Cameras",
    price: "Custom / Price on Request",
    image: "/images/All Brand CCTV Camera.png",
    description: "Complete CCTV surveillance systems"
  },
  {
    title: "Server Building",
    price: "Custom / Price on Request",
    image: "/images/image server.png",
    description: "Enterprise server solutions and builds"
  },
  {
    title: "All Brand Projectors", 
    price: "Custom / Price on Request",
    image: "/images/projector.png",
    description: "Professional and home projectors"
  },
  {
    title: "Audio Systems",
    price: "Custom / Price on Request",
    image: "/images/All Brand CCTV Cameras.png",
    description: "High-quality audio systems and speakers"
  }
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen mt-10 bg-white">
      <Header />
      
      {/* Page Header */}
      <section className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500">
            Our Products
          </h1>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-orange-300 via-orange-100 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
              >
                {/* Product Image with Gradient Background */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="p-4"
                  />
                </div>
                
                {/* Product Info */}
                <div className="p-6 pb-0 flex-1">
                  <h3 className="text-xl font-bold text-black mb-3">
                    {product.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-4">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-gray-700">Price: </span>
                    <span className="text-sm text-gray-600">{product.price}</span>
                  </div>
                </div>
                
                {/* Enquiry Button - Flush with bottom edge */}
                <button className="w-full bg-gradient-to-r from-purple-900 to-purple-600 text-purple-100 py-3 px-4 rounded-b-2xl font-semibold hover:from-purple-800 hover:to-purple-700 hover:scale-105 transition-all duration-300 mt-auto transform">
                  Enquiry Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-12 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Looking for Custom Solutions?
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            We provide customized electronics solutions tailored to your specific needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-orange-400 to-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-orange-500 hover:to-yellow-600 transition-all duration-300 shadow-lg">
              Request Quote
            </button>
            <a 
              href="tel:+919786667567"
              className="bg-gradient-to-l from-purple-600 to-purple-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg inline-block text-center"
            >
              Call: +91 97866 67567
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}