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
import WorkIcon from "@mui/icons-material/Work";
import Avatar from "@mui/material/Avatar";
import FaceIcon from "@mui/icons-material/Face";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Divider from '@mui/material/Divider';
import FestivalIcon from '@mui/icons-material/Festival';
import PetsIcon from '@mui/icons-material/Pets';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import CategoryIcon from '@mui/icons-material/Category';
import { useRecoilState, useSetRecoilState } from "recoil";
import { currentPhoto, filterVal, lightboxOpen, photos } from "../src/recoil/atoms";
import { itemData } from "../src/components/allPhotos";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Head from 'next/head'
import CakeIcon from '@mui/icons-material/Cake';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';

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
                <title>PRICING | Jacob Brown Photos - Lancaster, Ohio Photographer / Videographer</title>
            </Head>
            <Grid container spacing={2} sx={{ m: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Grid xs={12} md={6}>
                    <Stack spacing={2}>
                        <Grow
                            in={true}
                            {...({ timeout: 400 })}
                        >
                            <Stack spacing={1} id='styling'>
                                <Paper elevation={3} sx={{ p: 3, borderRadius: '15px' }}>
                                    <Typography variant='h5' component='h2' sx={{ fontWeight: '600' }} color={titles}>
                                        Styling and What to Expect
                                    </Typography>
                                    <Typography variant='subtitle1' sx={{ fontWeight: '400' }} id='pricing' color='text.secondary'>
                                        if you need something specific, please reach out and let's talk
                                    </Typography>
                                    <Typography variant='subtitle2' color='text.primary' sx={{ mt: 1 }}>
                                        Photography Style
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        My style is generally a clean and natural look. This involves lots of prep/setup on the front end, then color correcting and slight general editing. I tend to not heavily color grade my photos. If you're looking for a specific style, let me know and we can talk.
                                    </Typography>
                                    <Typography variant='subtitle2' color='text.primary' sx={{ mt: 1 }}>
                                        Videography Style
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        It depends. Wedding videos and short films, I usually prefer a filmic, timeless look with a light general color grade. For business promotionals, these are usually bright and polished. We will work out the details before shooting.
                                    </Typography>
                                    <Typography variant='subtitle2' color='text.primary' sx={{ mt: 1 }}>
                                        How you'll get the product
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        Photo deliveries are through an online gallery. Video deliveries may be through Google Drive, YouTube, or OneDrive if the file size is very large.
                                    </Typography>
                                    <Typography variant='subtitle2' color='text.primary' sx={{ mt: 1 }}>
                                        When you'll get the product
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        For small sessions, usually my turnaround time is under a week.
                                        For large events / weddings you can expect two weeks. We will work out these details per session.
                                        Turnaround time on videos can be longer depending on what it is. Weddings generally take two weeks.
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary' sx={{ mt: 3 }}>
                                        If you're curious, I use Canon cameras. I prefer their skin tones straight out of camera and I have the best luck with their colors. Mainly just a personal preference, to be honest.  I'm still using DSLRs, mainly because of how tried and true they are. It also doesn't hurt that mirrorless cameras require a large investment to switch.
                                    </Typography>
                                </Paper>
                            </Stack>
                        </Grow>
                        <Stack spacing={1} id='pricing'>
                            <Grow
                                in={true}
                                {...({ timeout: 400 })}
                            >
                                <Paper elevation={3} sx={{ p: 3, borderRadius: '15px' }}>
                                    <Typography variant='h5' component='h2' sx={{ fontWeight: '600' }} color={titles}>
                                        Pricing Information
                                    </Typography>
                                    <Typography variant='subtitle2' color='text.secondary' sx={{ mt: 1 }}>
                                        Pricing this kind of work is very challenging...
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        It depends how long of a session you want, how long the video needs to be, where the location is, what turnaround time do you need, etc.
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        The prices below are just a starting point for you to reference and compare to other people. If you want an actual estimate, please reach out and I can give you an estimate quickly.
                                    </Typography>
                                    <Stack spacing={0}>
                                        <Stack direction="row" justifyContent='space-between' alignItems='center'>
                                            <Typography variant='subtitle1' sx={{ fontWeight: '400' }} id='pricing' color='text.primary'>
                                                Individuals
                                            </Typography>
                                            <Stack direction='row' alignItems='center' spacing={1}>
                                                <Typography variant='body2' sx={{ fontWeight: '400' }} id='pricing' color='text.disabled'>
                                                    starting at
                                                </Typography>
                                                <Avatar sx={{ bgcolor: 'primary.main', width: 50, height: 50 }}>$150</Avatar>
                                            </Stack>
                                        </Stack>
                                        <Grid container direction='row' spacing={1}>
                                            <Grid xs='auto'>
                                                <Chip
                                                    onClick={() => chipClick('baby')}
                                                    clickable
                                                    variant='outlined'
                                                    color='secondary'
                                                    label="newborn photos"
                                                    icon={<ChildFriendlyIcon />} />
                                            </Grid>
                                            <Grid xs='auto'>
                                                <Chip
                                                    onClick={() => chipClick('pet')}
                                                    clickable
                                                    variant='outlined'
                                                    color='secondary'
                                                    label="pet photos"
                                                    icon={<PetsIcon />} />
                                            </Grid>
                                            <Grid xs='auto'>
                                                <Chip
                                                    onClick={() => chipClick('senior')}
                                                    clickable
                                                    variant='outlined'
                                                    color='secondary'
                                                    label="senior / general portraits"
                                                    icon={<FaceIcon />} />
                                            </Grid>
                                        </Grid>
                                    </Stack>
                                    <Divider sx={{ my: 1 }} />
                                    <Stack spacing={0}>
                                        <Stack direction="row" justifyContent='space-between' alignItems='center'>
                                            <Typography variant='subtitle1' sx={{ fontWeight: '400' }} id='pricing' color='text.primary'>
                                                Groups
                                            </Typography>
                                            <Stack direction='row' alignItems='center' spacing={1}>
                                                <Typography variant='body2' sx={{ fontWeight: '400' }} id='pricing' color='text.disabled'>
                                                    starting at
                                                </Typography>
                                                <Avatar sx={{ bgcolor: 'primary.main', width: 50, height: 50 }}>$200</Avatar>
                                            </Stack>
                                        </Stack>
                                        <Grid container direction='row' spacing={1}>
                                            <Grid xs='auto'>
                                                <Chip
                                                    onClick={() => chipClick('family')}
                                                    clickable
                                                    variant='outlined'
                                                    color='secondary'
                                                    label="family photos"
                                                    icon={<FamilyRestroomIcon />} />
                                            </Grid>
                                            <Grid xs='auto'>
                                                <Chip
                                                    onClick={() => chipClick('engagement')}
                                                    clickable
                                                    variant='outlined'
                                                    color='secondary'
                                                    label="engagement photos"
                                                    icon={<FavoriteIcon />} />
                                            </Grid>
                                        </Grid>
                                    </Stack>
                                    <Divider sx={{ my: 1 }} />
                                    <Stack spacing={0}>
                                        <Stack direction="row" justifyContent='space-between' alignItems='center'>
                                            <Typography variant='subtitle1' sx={{ fontWeight: '400' }} id='pricing' color='text.primary'>
                                                Events
                                            </Typography>
                                            <Stack direction='row' alignItems='center' spacing={1}>
                                                <Typography variant='body2' sx={{ fontWeight: '400' }} id='pricing' color='text.disabled'>
                                                    starting at
                                                </Typography>
                                                <Avatar sx={{ bgcolor: 'primary.main', width: 50, height: 50 }}>$300</Avatar>
                                                <Typography variant='body2' sx={{ fontWeight: '400' }} color='text.secondary'>
                                                    /hr
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                        <Grid container direction='row' spacing={1}>
                                            <Grid xs='auto'>
                                                <Chip
                                                    onClick={() => chipClick('event')}
                                                    variant='outlined'
                                                    color='secondary'
                                                    label="wedding photos / video"
                                                    icon={<CakeIcon />} />
                                            </Grid>
                                            <Grid xs='auto'>
                                                <Chip
                                                    onClick={() => chipClick('event')}
                                                    variant='outlined'
                                                    color='secondary'
                                                    label="event photos / video"
                                                    icon={<FestivalIcon />} />
                                            </Grid>
                                        </Grid>
                                    </Stack>
                                    <Divider sx={{ my: 1 }} />
                                    <Stack spacing={0}>
                                        <Stack direction="row" justifyContent='space-between' alignItems='center'>
                                            <Typography variant='subtitle1' sx={{ fontWeight: '400' }} id='pricing' color='text.primary'>
                                                Other
                                            </Typography>
                                            <Stack direction='row' alignItems='center' spacing={1}>
                                                <Typography variant='body2' sx={{ fontWeight: '400' }} id='pricing' color='text.disabled'>
                                                    starting at
                                                </Typography>
                                                <Avatar sx={{ bgcolor: 'primary.main', width: 50, height: 50 }}>$100</Avatar>
                                            </Stack>
                                        </Stack>
                                        <Grid container direction='row' spacing={1}>
                                            <Grid xs='auto'>
                                                <Chip
                                                    onClick={() => chipClick('headshot')}
                                                    clickable
                                                    variant='outlined'
                                                    color='secondary'
                                                    label="professional headshot"
                                                    icon={<WorkIcon />} />
                                            </Grid>
                                            <Grid xs='auto'>
                                                <Chip
                                                    onClick={() => chipClick('product')}
                                                    clickable
                                                    variant='outlined'
                                                    color='secondary'
                                                    label="product photos"
                                                    icon={<CategoryIcon />} />
                                            </Grid>
                                            <Grid xs='auto'>
                                                <Chip
                                                    onClick={() => chipClick('location')}
                                                    clickable
                                                    variant='outlined'
                                                    color='secondary'
                                                    label="Other - let's talk!"
                                                    icon={<BlurOnIcon />} />
                                            </Grid>
                                        </Grid>
                                    </Stack>
                                </Paper>
                            </Grow>
                        </Stack>
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
                <Grid xs={12} md={6}>
                    <Grow
                        id='samplePic'
                        in={true}
                        {...({ timeout: 400 * 3 })}
                    >
                        <Card id='sampleImage' elevation={3} sx={{ borderRadius: '15px', alignSelf: 'center', justifySelf: 'center' }}>
                            <CardMedia
                                component="img"
                                src='/images/pricingPage.jpeg'
                                title="headshot0"
                                sx={{ maxHeight: 1200 }}
                            />
                        </Card>
                    </Grow>
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
