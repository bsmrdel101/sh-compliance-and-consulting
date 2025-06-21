import React, { useEffect } from 'react';
import '../styles/globals.scss';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import Head from 'next/head';

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
      <Head>
        <title>Compliance & Consulting</title>
      </Head>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
}
