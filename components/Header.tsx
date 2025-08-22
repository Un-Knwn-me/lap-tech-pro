'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const handleContactClick = () => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      // If on home page, scroll to contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // If on other pages, navigate to home page with hash
      router.push('/#contact');
    }
  };

  return (
    <header className="bg-black/90 backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
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
              <span className="text-white font-bold text-lg">LAP PRO</span>
              <span className="bg-gradient-to-r from-orange-400 to-yellow-500 text-black px-2 py-1 rounded text-sm font-bold ml-1">TECH</span>
            </div>
          </Link>

          {/* Navigation and Contact Button - Right Aligned */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <Link 
                href="/" 
                className={`transition-colors ${
                  pathname === '/' ? 'text-orange-400' : 'text-white hover:text-orange-400'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className={`transition-colors ${
                  pathname === '/services' ? 'text-orange-400' : 'text-white hover:text-orange-400'
                }`}
              >
                Our Services
              </Link>
              <Link 
                href="/products" 
                className={`transition-colors ${
                  pathname === '/products' ? 'text-orange-400' : 'text-white hover:text-orange-400'
                }`}
              >
                Our Products
              </Link>
              <Link 
                href="/about" 
                className={`transition-colors ${
                  pathname === '/about' ? 'text-orange-400' : 'text-white hover:text-orange-400'
                }`}
              >
                About Us
              </Link>
            </nav>

            {/* Contact Button */}
            <button 
              onClick={handleContactClick}
              className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white px-6 py-2 rounded-lg hover:from-purple-800 hover:via-purple-700 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}