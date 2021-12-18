import Document, { Head, Html, Main, NextScript } from "next/document";

import { ReactElement } from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={"en"}>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="Content-Language" content={"en"} />
          <meta name="keywords" content="Bello Ololade, Freelancer, Web designer, Website, landing pages" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="1 days" />
          <meta name="author" content="Bello Ololade" />
          <link rel="shortcut icon" href="/hero.png" />
        </Head>
        <body style={{position: "relative"}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}