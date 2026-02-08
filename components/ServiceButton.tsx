'use client';

import { useServiceModal } from '@/hooks/useServiceModal';
import { useAnalytics } from '@/hooks/useAnalytics';

interface ServiceButtonProps {
  children: React.ReactNode;
  title?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function ServiceButton({ 
  children, 
  title = 'Book Service Now',
  variant = 'primary',
  size = 'md',
  className = ''
}: ServiceButtonProps) {
  const { openModal } = useServiceModal();
  const { trackServiceButtonClick } = useAnalytics();

  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white hover:from-purple-800 hover:via-purple-700 hover:to-purple-600 shadow-md',
    secondary: 'bg-gradient-to-r from-orange-400 to-yellow-500 text-black hover:from-orange-500 hover:to-yellow-600 shadow-md',
    outline: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const handleClick = () => {
    // Track button click
    trackServiceButtonClick(title);
    
    // Open modal
    openModal(title);
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}
