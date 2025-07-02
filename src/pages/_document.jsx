import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Compliance & Consulting services for companies and individuals." />
          <meta name="theme-color" content="#317EFB" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
