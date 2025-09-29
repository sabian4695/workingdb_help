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
            content="WorkingDB - Your best work friend"
          />
          <meta name="robots" content="index,follow" />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/android-chrome-192x192.png" />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <title>WorkingDB - Help</title>
        </Head>
          <Home/>
    </>
  )
}

reportWebVitals();
