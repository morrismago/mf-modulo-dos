import { Head, Html, Main, NextScript } from "next/document";
import { randomBytes } from "crypto";

export default function Document() {
  const nonce = randomBytes(128).toString("base64");
  const csp = `object-src 'none'; base-uri 'none'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https: http: 'nonce-${nonce}' 'strict-dynamic'`;
  return (
    <Html>
      <Head nonce={nonce}>
        <meta httpEquiv="Content-Security-Policy" content={csp} />
        <link rel="apple-touch-icon" href="icons/icon-192x192.png"></link>
        <meta name="theme-color" content="#87a62e" />
        <link href="" rel="./favicon.ico" />
      </Head>
      <body>
        <div basePath=""></div>
        <Main />
        <NextScript nonce={nonce} />
      </body>
    </Html>
  );
}
