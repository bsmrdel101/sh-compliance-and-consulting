import React from 'react';
import Head from 'next/head';

export default function Layout({ title, children }) {
  const titleName = `${title} | Next.js Starter!`;

  return (
    <div>
      <Head>
        <title>{ titleName }</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      { children }
    </div>
  );
}
