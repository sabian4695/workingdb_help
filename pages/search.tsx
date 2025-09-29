import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grow from '@mui/material/Grow';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { currentPhoto, lightboxOpen, photos, filterVal } from "../src/recoil/atoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import { itemData } from "../src/components/allPhotos";
import Head from 'next/head'
import Image from 'next/image'

const keyStr =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1: number, e2: number, e3: number) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63)

const rgbDataURL = (r: number, g: number, b: number) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

export default function Gallery() {
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.up('md'));
    const setOpenModal = useSetRecoilState(lightboxOpen)
    const setCurPhoto = useSetRecoilState(currentPhoto)
    const [filtVal, setFiltValue] = useRecoilState(filterVal)
    const [photosList, setPhotosList] = useRecoilState(photos)

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

    function openImage(id: number) {
        setCurPhoto(id)
        setOpenModal(true)
    }

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
                <title>GALLERY | Jacob Brown Photos - Lancaster, Ohio Photographer / Videographer</title>
            </Head>
            <Grid container>
                <Grid xs={12} style={{ lineHeight: 0 }} sx={{ overflow: 'hidden' }}>
                    <ImageList sx={{ width: '100%' }} cols={small ? 3 : 2} variant='masonry'>
                        {photosList.map((item, index) => (
                            <Grow
                                in={true}
                                {...({ timeout: 1000 })}
                                key={index}
                            >
                                <ImageListItem key={index}>
                                    <Image
                                        style={{ cursor: 'pointer', objectFit: 'contain', width: '100%', height: 'auto' }}
                                        onClick={() => openImage(index)}
                                        src={item.img}
                                        alt={item.title}
                                        loading="lazy"
                                        placeholder='blur'
                                    />
                                </ImageListItem>
                            </Grow>
                        ))}
                    </ImageList>
                </Grid>
            </Grid>
            <Grid xs={12} sx={{ mt: 1, textAlign: 'center' }}>
                <Grow
                    in={true}
                    {...({ timeout: 2000 })}
                >
                    <Typography variant='caption' color='text.secondary'>website made by &copy; Jacob Brown Photos</Typography>
                </Grow>
            </Grid>
        </>
    )
}
