export default function GoogleMap() {
  return (
    <section id="contact" className="py-20 bg-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent mb-4">
            Find Us Here
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Visit our service center for all your electronics repair needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center fade-in-delay-1">
          {/* Map */}
          <div className="relative">
            <div className="bg-white p-4 rounded-2xl shadow-lg hover-scale">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d979.0402509254045!2d76.96458826950364!3d11.026544315667724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDAxJzM1LjYiTiA3NsKwNTcnNTQuOCJF!5e0!3m2!1sen!2sin!4v1755792732034!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
          
          {/* Location Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Service Center Location
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">
                      158-E, First Floor, Sanganoor Main Road,<br/>
                      Rathinapuri, Coimbatore, Tamil Nadu 641027
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Working Hours</h4>
                    <p className="text-gray-600">
                      Monday - Saturday: 9:00 AM - 8:00 PM<br />
                      Sunday: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Contact</h4>
                    <div className="text-gray-600">
                      <a 
                        href="tel:+919786667567"
                        className="hover:text-orange-600 transition-colors duration-300 cursor-pointer"
                      >
                        Primary: +91 97866 67567
                      </a>
                      <br />
                      <a 
                        href="tel:+919514274567"
                        className="hover:text-orange-600 transition-colors duration-300 cursor-pointer"
                      >
                        Secondary: +91 95142 74567
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <button className="bg-gradient-to-r from-orange-400 to-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:from-orange-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 w-full">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}