import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Head from 'next/head'

const titles = 'primary.dark'

const keyStr =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1: number, e2: number, e3: number) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63)

export default function About() {

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
                <title>ABOUT | Jacob Brown Photos - Lancaster, Ohio Photographer / Videographer</title>
            </Head>
            <Grid container spacing={2} sx={{ m: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            </Grid>
        </>
    )
}
