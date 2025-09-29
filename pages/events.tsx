import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {CardContent} from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Chip from '@mui/material/Chip';
import EventIcon from '@mui/icons-material/Event';
import Avatar from "@mui/material/Avatar";
import Head from 'next/head'

const titles = 'primary.dark'

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
          <title>EVENTS | Jacob Brown Photos - Lancaster, Ohio Photographer / Videographer</title>
        </Head>
            <Grid container spacing={2} sx={{m:1}}>
                <Grid xs={12} sx={{mb:3, display:'flex',alignItems:'center', justifyContent:'center'}} id='CHECK'>
                    <Grow
                        in={true}
                        {...({ timeout: 400 })}
                    >
                        <Card id='about' elevation={5} sx={{maxWidth: 400, borderRadius:'15px', alignSelf:'center', justifySelf:'center'}}>
                            
                            <CardContent>
                                <Stack spacing={1}>
                                    <Stack direction="row" justifyContent='space-between' alignItems='center'>
                                        <Typography variant='h6' sx={{ fontWeight: '600'}} display='inline' color={titles}>
                                            Professional Headshot Event
                                        </Typography>
                                        <Avatar sx={{ bgcolor: 'primary.main', width: 50, height: 50 }}>$75</Avatar>
                                    </Stack>
                                    <Chip
                                        label='May 27th, 2023 | 9:30AM - 12:30PM'
                                        icon={<EventIcon/>}
                                        color='secondary'
                                        variant='outlined'
                                    />
                                    <Typography variant='body1' color='text.secondary'>
                                        Do you need an updated headshot for LinkedIn?
                                        Whether you are just entering the professional world or have been in a career for decades, an updated
                                        professional headshot is a great way show people who you are. It's perfect for LinkedIn, email signatures,
                                        and much more.
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        I'm offering mini 15 - minute sessions from 9:30AM-12:30PM. There aren't many spots, so sign up now!
                                    </Typography>
                                    <Typography variant='subtitle2' color='text.secondary'>
                                        Photos will use a grey backdrop
                                    </Typography>
                                    <Typography variant='body1' color='text.secondary'>
                                        Grab a spot via the link below
                                    </Typography>
                                    <Button color='secondary'
                                            variant='contained'
                                            component='a'
                                            target='blank'
                                            endIcon={<ExitToAppIcon/>}
                                            href='https://squareup.com/appointments/book/k825d7pagz5h33/LB1MVWYW2084G/start'>
                                        Book Now
                                    </Button>
                                </Stack>
                            </CardContent>
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