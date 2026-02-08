'use client';

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

export const useAnalytics = () => {
  const trackEvent = (
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  const trackPageView = (pageTitle: string, pagePath: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'G-Y33BRT129M', {
        page_title: pageTitle,
        page_location: pagePath,
      });
    }
  };

  const trackServiceButtonClick = (serviceType: string) => {
    trackEvent('service_button_click', 'engagement', serviceType);
  };

  const trackContactClick = (method: string) => {
    trackEvent('contact_click', 'engagement', method);
  };

  const trackFormSubmission = (formType: string) => {
    trackEvent('form_submission', 'conversion', formType);
  };

  const trackPhoneCall = (phoneNumber: string) => {
    trackEvent('phone_call', 'conversion', phoneNumber);
  };

  const trackDirectionClick = () => {
    trackEvent('get_directions', 'engagement', 'location');
  };

  return {
    trackEvent,
    trackPageView,
    trackServiceButtonClick,
    trackContactClick,
    trackFormSubmission,
    trackPhoneCall,
    trackDirectionClick,
  };
};
