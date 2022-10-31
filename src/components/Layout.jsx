import React from 'react';
import Head from 'next/head';
import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Compliance & Consulting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      { children }
    </div>
  );
}
