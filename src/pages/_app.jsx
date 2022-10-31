import React from 'react';
import '../styles/globals.scss';
import { GoogleAnalytics } from 'nextjs-google-analytics';

export default function Application({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
}
