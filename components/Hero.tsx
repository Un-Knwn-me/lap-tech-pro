export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/images/hero-bg.png')"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight fade-in-delay-1">
            Your Trusted Partner in{' '}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
              Electronics
            </span>{' '}
            Solutions!
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto fade-in-delay-2">
            Laptop, TV, Projector, Chip, Level & More - We&apos;ve Got You Covered.
          </p>
          
          <button className="bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-900 hover:via-purple-800 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg fade-in-delay-3">
            Book & Service now
          </button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-orange-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}