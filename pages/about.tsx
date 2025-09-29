import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { useRecoilState, useSetRecoilState } from "recoil";
import { currentPhoto, filterVal, lightboxOpen, photos } from "../src/recoil/atoms";
import { itemData } from "../src/components/allPhotos";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Head from 'next/head'

const titles = 'primary.dark'

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
                <Grid id='aboutMe' xs={12} md={5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Grow
                        in={true}
                        {...({ timeout: 400 })}
                    >
                        <Card id='about' elevation={3} sx={{ borderRadius: '15px', alignSelf: 'center', justifySelf: 'center' }}>
                            <CardMedia
                                component="img"
                                src='/images/headshot0.jpeg'
                                title="headshot0"
                                sx={{ minHeight: 300 }}
                            />
                        </Card>
                    </Grow>
                </Grid>
                <Grid xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} spacing={2}>
                    <Stack spacing={2}>
                        <Grow
                            id='aboutMeText'
                            in={true}
                            {...({ timeout: 400 })}
                        >
                            <Paper elevation={3} sx={{ p: 3, borderRadius: '15px' }}>
                                <Stack spacing={1}>
                                    <Typography variant='h6' component='h1' sx={{ fontWeight: '600' }} display='inline' color={titles}>
                                        Hi! Nice to have you here.
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        I am a wedding and lifestyle photographer & videographer in the South-Eastern part of the Columbus, Ohio area.
                                        I have had the pleasure of being a photographer & videographer for about five years now.
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        I've been taking photos and making videos since I got my first phone. I really started to develop my skills in 2017 with my first DSLR.
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        I started this professionally for two reasons: so I can help small businesses improve their online presence, and so I can help people have moments they can look back on with love.
                                        I love local businesses and believe photography can affect growth dramatically.
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        This is my side business. I work full time as an engineer in the automotive industry.
                                        My engineering background helps me keep a strong attention to detail and sustain a methodical approach to photography.
                                        I know the in's and out's of how my cameras/lenses work. That gives me a unique take on capturing powerful moments technically.
                                    </Typography>
                                    <div>
                                        <Typography display='inline'>
                                            Please
                                        </Typography>
                                        <Button
                                            color='primary'
                                            disableElevation
                                            variant='text'
                                            component='a'
                                            href='#contact'
                                        >
                                            contact me
                                        </Button>
                                        <Typography display='inline'>
                                            for inquiries!
                                        </Typography>
                                    </div>
                                </Stack>
                            </Paper>
                        </Grow>
                        <Grow
                            id='moreAboutMe'
                            in={true}
                            {...({ timeout: 400 })}
                        >
                            <Paper elevation={3} sx={{ p: 3, borderRadius: '15px' }}>
                                <Stack spacing={0}>
                                    <Typography variant='h6' component='h1' sx={{ fontWeight: '600' }} display='inline' color={titles}>
                                        A little more about me!
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        I have two crazy boys and a beautiful wife at home. They inspire me every day to help others remember these special times.
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        I am a full-time engineer by day, so as you can guess I'm a giant nerd and handy-man.
                                        I love to fix things, learn how things work, and build things.
                                        I have a 3D Printer and Laser Engraver and really enjoy creating things.
                                        I also built this website from scratch! I used NextJs and Material UI if you're curious.
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        I also love to play electric guitar and drums. In high school I played Saxophone and was in Drumline.
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        Oh, I'm also a coffee nerd (espresso all the way!) and enjoy hiking with my family.
                                    </Typography>
                                </Stack>
                            </Paper>
                        </Grow>
                        <Grow
                            id='servingAreas'
                            in={true}
                            {...({ timeout: 400 })}
                        >
                            <Paper elevation={3} sx={{ p: 3, borderRadius: '15px' }}>
                                <Stack spacing={1}>
                                    <Typography variant='h6' component='h1' sx={{ fontWeight: '600' }} display='inline' color={titles}>
                                        Where do I work?
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontWeight: '400' }} color='text.secondary'>
                                        I am located in Lancaster, but I service all the surrounding areas including Canal Winchester, Baltimore, Carrol, Pickerington, etc. If you need something done farther than a 30 minute drive from Lancaster, there may be a small fee included.
                                    </Typography>
                                    <Typography variant='body1' sx={{ fontWeight: '400' }} color='text.secondary'>
                                        Areas I service:
                                    </Typography>
                                    <Grid container spacing={1}>
                                        <Grid>
                                            <Chip
                                                variant='outlined'
                                                clickable
                                                component='a'
                                                target='blank'
                                                href='https://maps.app.goo.gl/fEogNooVrrt2kNd69'
                                                color='secondary'
                                                label='Lancaster' />
                                        </Grid>
                                        <Grid>
                                            <Chip
                                                variant='outlined'
                                                clickable
                                                component='a'
                                                href='https://goo.gl/maps/TEt1tz22ZZFeGAnS8'
                                                target='blank'
                                                color='secondary'
                                                label='Canal Winchester' />
                                        </Grid>
                                        <Grid>
                                            <Chip
                                                variant='outlined'
                                                clickable
                                                component='a'
                                                target='blank'
                                                href='https://maps.app.goo.gl/1jPuNSwWgxV3n3yr6'
                                                color='secondary'
                                                label='Carroll' />
                                        </Grid>
                                        <Grid>
                                            <Chip
                                                variant='outlined'
                                                clickable
                                                component='a'
                                                target='blank'
                                                href='https://maps.app.goo.gl/gQm7DvqULoasH5PD8'
                                                color='secondary'
                                                label='Lithopolis' />
                                        </Grid>
                                        <Grid>
                                            <Chip
                                                variant='outlined'
                                                clickable
                                                component='a'
                                                target='blank'
                                                href='https://maps.app.goo.gl/joM1baK3LXKCA8Lg8'
                                                color='secondary'
                                                label='Baltimore' />
                                        </Grid>
                                        <Grid>
                                            <Chip
                                                variant='outlined'
                                                clickable
                                                component='a'
                                                target='blank'
                                                href='https://goo.gl/maps/uTXtgAcmXNW39pXT7'
                                                color='secondary'
                                                label='Pickerington' />
                                        </Grid>
                                    </Grid>
                                </Stack>
                            </Paper>
                        </Grow>
                        <Grow
                            id='contact'
                            in={true}
                            {...({ timeout: 400 * 3 })}
                        >
                            <Paper elevation={3} sx={{ p: 3, borderRadius: '15px' }}>
                                <Grid container spacing={1}>
                                    <Grid xs={12}>
                                        <Typography variant='h5' component='h2' sx={{ fontWeight: '600' }} color={titles}>
                                            Contact
                                        </Typography>
                                    </Grid>
                                    <Grid xs={12}>
                                        <Typography variant='body1' color='text.secondary'>
                                            Please text or email me. If you call, please leave me a voicemail. I look forward to meeting you and helping you capture something special!
                                        </Typography>
                                    </Grid>
                                    <Grid xs={12} lg='auto'>
                                        <Button
                                            color='secondary'
                                            fullWidth
                                            disableElevation
                                            variant='contained'
                                            href="tel:6148595782"
                                            endIcon={<PhoneAndroidIcon />}
                                        >
                                            (614) 859-5782
                                        </Button>
                                    </Grid>
                                    <Grid xs={12} lg='auto'>
                                        <Button
                                            color='secondary'
                                            fullWidth
                                            disableElevation
                                            variant='contained'
                                            href="mailto:jacobbrownphotos@gmail.com"
                                            endIcon={<EmailIcon />}
                                        >
                                            jacobbrownphotos@gmail.com
                                        </Button>
                                    </Grid>
                                    <Grid xs={12} lg='auto'>
                                        <IconButton component='a' href='https://www.facebook.com/jacobbrownphoto/' target='blank'>
                                            <FacebookIcon />
                                        </IconButton>
                                        <IconButton component='a' href='https://www.instagram.com/_jacobbrownphotos/' target='blank'>
                                            <InstagramIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grow>
                    </Stack>
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
