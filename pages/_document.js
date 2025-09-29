import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";

export default function Document() {
  return(
    <Html lang="en">
      <Head charSet="utf-8">
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Script
        strategy="lazyOnload"
        src={"https://www.googletagmanager.com/gtag/js?id=G-NHZWM2TXG5"}
      />

      <Script strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NHZWM2TXG5', {
            page_path: window.location.pathname,
            });
        `}
      </Script>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}