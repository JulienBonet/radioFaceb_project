/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    _paq?: any[];
  }
}

export default function MatomoTracker() {
  const location = useLocation();

  useEffect(() => {
    window._paq = window._paq || [];

    window._paq.push(['setTrackerUrl', 'https://stats.radiofaceb.org/matomo.php']);
    window._paq.push(['setSiteId', '1']);

    const existingScript = document.getElementById('matomo-script');

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'matomo-script';
      script.async = true;
      script.src = 'https://stats.radiofaceb.org/matomo.js';

      document.head.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (!window._paq) return;

    window._paq.push([
      'setCustomUrl',
      window.location.pathname + window.location.search,
    ]);

    window._paq.push(['setDocumentTitle', document.title]);

    window._paq.push(['trackPageView']);
  }, [location]);

  return null;
}