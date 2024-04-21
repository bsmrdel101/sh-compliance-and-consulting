import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Compliance & Consulting</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Compliance & Consulting services for companies and individuals." />
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
