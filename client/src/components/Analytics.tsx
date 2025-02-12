// src/components/GoogleAnalytics.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    dataLayer: Record<string, any>[] | undefined;
    gtag: (...args: any[]) => void;
  }
}

const GA_TRACKING_ID = process.env.GTAG_ID;

export const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Tipagem para a função gtag
    if (GA_TRACKING_ID && import.meta.env.PROD) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer?.push(arguments);
      }

      window.gtag('js', new Date());
      window.gtag('config', GA_TRACKING_ID);
    }
  }, []);

  useEffect(() => {
    if (GA_TRACKING_ID && import.meta.env.PROD && window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};