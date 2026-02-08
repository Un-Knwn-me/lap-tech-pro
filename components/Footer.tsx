import ServiceButton from './ServiceButton';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-purple-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 p-2">
                <svg width="64" height="32" viewBox="0 0 256 143" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.8908 87.671C-6.97529 76.732 16.5858 48.9636 16.5858 48.9636C16.5858 48.9636 -17.9144 70.0002 15.7444 91.8784C49.4031 113.756 163.842 63.2685 163.842 63.2685C163.842 63.2685 68.7568 98.6101 30.8908 87.671Z" fill="#7F41D4" stroke="#760595"/>
                  <path d="M42.6715 103.659H29.208V125.082H203.392V78.4087L190.77 67.4759V109.549H42.6715V103.659Z" fill="#7F41D4" stroke="#7F41D4"/>
                  <path d="M178.989 38.866L242.94 19.5123L178.989 65.7931L178.989 38.866Z" fill="#7F41D4"/>
                  <path d="M178.988 53.1707L189.927 48.1222L194.135 54.8539L178.988 65.7929L178.988 53.1707Z" fill="#760595"/>
                  <path d="M30.0498 1V68.1849L41.8303 78.4087V10.2561L192.453 9.41466V19.5123L159.636 21.1952L178.989 41.3904L246.307 18.6708L189.928 48.9636L207.599 68.3173L254.721 15.3049L204.233 18.6708V1H30.0498Z" fill="#F59A34" stroke="#F59A34"/>
                  <path d="M14.9028 127.517C14.9028 126.423 15.7893 125.537 16.8828 125.537H214.875C215.968 125.537 216.855 126.423 216.855 127.517V127.517C216.855 135.718 210.206 142.366 202.005 142.366H29.7522C21.5511 142.366 14.9028 135.718 14.9028 127.517V127.517Z" fill="#760595"/>
                </svg>
              </div>
              <div className="ml-8">
                <span className="text-white font-bold text-lg">Lap Pro</span>
                <span className="bg-gradient-to-r from-orange-400 to-yellow-500 text-black px-2 py-1 rounded text-sm font-bold ml-1">Tech</span>
              </div>
            </div>
            <p className="text-purple-200 leading-relaxed">
            Your trusted partner for all electronics repair and maintenance services — providing Professional, Reliable, and Affordable solutions
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center">
                  <span className="text-orange-400">📞</span>
                </div>
                <div>
                  <a 
                    href="tel:+919786667567"
                    className="text-white font-semibold hover:text-orange-400 transition-colors duration-300 cursor-pointer"
                  >
                    +91 97866 67567
                  </a>
                  <p className="text-purple-200 text-sm">Primary Contact</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-700 rounded-full flex items-center justify-center">
                  <span className="text-orange-400">📱</span>
                </div>
                <div>
                  <a 
                    href="tel:+919514274567"
                    className="text-white font-semibold hover:text-orange-400 transition-colors duration-300 cursor-pointer"
                  >
                    +91 95142 74567
                  </a>
                  <p className="text-purple-200 text-sm">Secondary Contact</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Social Media</h3>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a 
                href="https://facebook.com/lapprotech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a 
                href="https://instagram.com/lap_pro_tech" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            
            <div className="mt-8">
              <ServiceButton 
                title="Get Quote Now"
                variant="secondary"
                size="md"
              >
                Get Quote Now
              </ServiceButton>
            </div>
          </div>
        </div>
        
        <div className="border-t border-purple-700 mt-12 pt-8 text-center">
          <p className="text-purple-200">
            © {new Date().getFullYear()} Lap Pro Tech. All rights reserved. | Professional Electronics Repair Services.  | Developed by <a href="http://spatialcontinuum.com/" target="_blank" className="text-orange-400 hover:text-orange-500">Spatial Continuum</a>
          </p>
        </div>
      </div>
    </footer>
  );
}