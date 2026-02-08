'use client';

import { useState } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

interface ServiceFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function ServiceFormModal({ isOpen, onClose, title = "Book Service Now" }: ServiceFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    issues: ''
  });
  const { trackFormSubmission, trackEvent } = useAnalytics();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track form submission
    trackFormSubmission(title || 'service_form');
    trackEvent('form_submit', 'conversion', title, 1);
    
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add API call here to send the data
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', phone: '', service: '', issues: '' });
    onClose();
  };

  const handleClose = () => {
    trackEvent('modal_close', 'engagement', title);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors text-2xl font-bold"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Service/Product Dropdown Field */}
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Product/Service *
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white"
            >
              <option value="">Select a service/product</option>
              <option value="laptop-repair">Laptop Repair</option>
              <option value="tv-repair">TV Repair</option>
              <option value="projector-repair">Projector Repair</option>
              <option value="cctv-installation">CCTV Installation</option>
              <option value="chip-level-service">Chip Level Service</option>
              <option value="cnc-repair">CNC Machine Repair</option>
              <option value="home-appliances">Home Appliances Repair</option>
              <option value="custom-pc">Custom PC Building</option>
              <option value="refurbished-laptops">Refurbished Laptops</option>
              <option value="server-building">Server Building</option>
              <option value="audio-systems">Audio Systems</option>
              <option value="cctv-installation">CCTV Installation</option>
              <option value="other">Other Service</option>
            </select>
          </div>

          {/* Issues Field */}
          <div>
            <label htmlFor="issues" className="block text-sm font-medium text-gray-700 mb-2">
              Your Issues *
            </label>
            <textarea
              id="issues"
              name="issues"
              value={formData.issues}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              placeholder="Describe your issue or service requirement"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 text-white py-3 px-6 rounded-md hover:from-purple-800 hover:via-purple-700 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md font-semibold"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
