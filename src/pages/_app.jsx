import React, { useEffect } from 'react';
import '../styles/globals.scss';
import { GoogleAnalytics } from 'nextjs-google-analytics';

export default function Application({ Component, pageProps }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js');
      });
    }
  }, []);


  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
}
