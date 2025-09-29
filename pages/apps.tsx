import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { useRecoilState, useSetRecoilState } from "recoil";
import { currentPhoto, filterVal, lightboxOpen, photos } from "../src/recoil/atoms";
import { itemData } from "../src/components/allPhotos";
import Head from 'next/head'
import Box from '@mui/material/Box';

const keyStr =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1: number, e2: number, e3: number) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63)

export default function About() {
    const [openModal, setOpenModal] = useRecoilState(lightboxOpen)
    const [filtVal, setFiltValue] = useRecoilState(filterVal)
    const [photosList, setPhotosList] = useRecoilState(photos)
    const setCurPhoto = useSetRecoilState(currentPhoto)
    function chipClick(title: string) {
        setFiltValue(title)
        setOpenModal(true)
    }

    React.useEffect(() => {
        if (filtVal !== '') {
            let shuffled = itemData
                .map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)
                .filter(x => x.category === filtVal)
            setPhotosList(shuffled)
        } else {
            let shuffled = itemData
                .map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)
            setPhotosList(shuffled)
        }
        setCurPhoto(0)
    }, [filtVal])
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
                <Box
                    sx={{
                        width: 100,
                        height: 100,
                        borderRadius: 1,
                        bgcolor: 'primary.main',
                        '&:hover': {
                        bgcolor: 'primary.dark',
                        },
                    }}
                    />
            </Grid>
        </>
    )
}
