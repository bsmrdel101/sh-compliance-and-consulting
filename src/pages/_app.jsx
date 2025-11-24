import { useEffect } from 'react';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import Head from 'next/head';
import '../styles/globals.scss';


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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
}
