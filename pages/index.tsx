import React from 'react';
import Home from '../src/components/Home';
import reportWebVitals from '../src/reportWebVitals';
import Head from 'next/head'

export const eventComing = false

export default function index() {
  return (
    <>
        <Head>
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Jacob Brown Photos - Lancaster, Ohio Professional Photographer / Videographer. Book me for professional headshots, family photos, senior photos, product photos, pet photos, baby photos, and much more."
          />
          <meta name="robots" content="index,follow" />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/android-chrome-192x192.png" />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <title>Jacob Brown Photos - Lancaster, Ohio Photographer / Videographer</title>
        </Head>
          <Home/>
    </>
  )
}

reportWebVitals();
