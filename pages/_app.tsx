import React from 'react';
import Link from 'next/link'
import { createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Lightbox from "../src/components/Lightbox";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import EventIcon from '@mui/icons-material/Event';
import {eventComing} from "./index";
import HomeIcon from '@mui/icons-material/Home';
import {RecoilRoot} from "recoil";
import Image from 'next/image'
import SellIcon from '@mui/icons-material/Sell';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const primaryMain = '#679bac'
export const secondaryMain = '#648777'
export const primaryRGB = '103, 155, 172'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: primaryMain
    },
    secondary: {
      main: secondaryMain
    },
    background: {
      default: '#f5faf8',
      paper: '#fcfdfd',
    },
    text: {
      primary: '#679bac'
    },
  }
})

export default function App({ Component, pageProps }) {
  const theme1 = useTheme();
  const bigger = useMediaQuery(theme1.breakpoints.up('sm'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);
  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const [openSnack, setOpenSnack] = React.useState(eventComing);
  const handleCloseSnack = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnack(false);
  };
  return (
    <>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar component="nav" elevation={5} variant='outlined' sx={{backgroundColor:'background.paper', color:'primary.main'}}>
          <Toolbar variant='dense'>
            <Image
                height='30'
                width='30'
                src='/images/logo.png'
                alt='logo'
                loading="lazy"
            />
            <Typography
                variant="h6"
                component="div"
                sx={{fontWeight: '200', flexGrow: 1, ml:0.5}}
            >
              photos
            </Typography>
            <Box sx={bigger ? {display:'flex'} : null}>
              {bigger ?
                  <>
                    <Button color='inherit' variant='text' sx={{mx:1}} component={Link} href="/" startIcon={<HomeIcon />}>
                      Home
                    </Button>
                    <Button color='inherit' variant='text' sx={{mx:1}} component={Link} href="gallery" startIcon={<CameraRollIcon />}>
                      Gallery
                    </Button>
                    <Button color='inherit' variant='text' sx={{mx:1}} component={Link} href="pricing" startIcon={<SellIcon />}>
                      Pricing
                    </Button>
                    <Button color='inherit' variant='text' sx={{mx:1}} component={Link} href="about" startIcon={<InfoIcon />}>
                      About
                    </Button>
                    {eventComing ?
                        <Button color='inherit' variant='text' sx={{mx:1}} component={Link} href="events" startIcon={<EventIcon />}>
                          Events
                        </Button>
                        :
                        null}

                  </>
                  :
                  <>
                    <IconButton
                        sx={{alignSelf: 'flex-end'}}
                        aria-controls={openMenu ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openMenu ? 'true' : undefined}
                        onClick={handleOpenMenu}
                    >
                      <MenuIcon/>
                    </IconButton>
                  </>
              }
            </Box>
          </Toolbar>
        </AppBar>
          <Box component="main"
            sx={{p: 1, width:'100%'}}>
            <Toolbar/>
            <Component {...pageProps} />
          </Box>
        <Lightbox/>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleCloseMenu}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
        >
          <MenuItem onClick={handleCloseMenu} component={Link} href="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>
              Home
            </ListItemText>
          </MenuItem>
          <MenuItem onClick={handleCloseMenu} component={Link} href="gallery">
            <ListItemIcon>
              <CameraRollIcon />
            </ListItemIcon>
            <ListItemText>
              Gallery
            </ListItemText>
          </MenuItem>
          <MenuItem onClick={handleCloseMenu} component={Link} href="pricing">
            <ListItemIcon>
              <SellIcon />
            </ListItemIcon>
            <ListItemText>
              Pricing
            </ListItemText>
          </MenuItem>
          <MenuItem onClick={handleCloseMenu} component={Link} href="about">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText>
              About
            </ListItemText>
          </MenuItem>
          {eventComing ?
              <MenuItem onClick={handleCloseMenu} component={Link} href="events">
                <ListItemIcon>
                  <EventIcon />
                </ListItemIcon>
                <ListItemText>
                  Events
                </ListItemText>
              </MenuItem>
              : null
          }

        </Menu>
        <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
          <Alert onClose={handleCloseSnack} severity="info" sx={{ width: '100%' }}>
            Hey, there's a headshot event coming up on May 27th!
            <Button sx={{mx:1}} color='inherit' variant='outlined' size='small' component={Link} href="events">CLICK HERE</Button>
            to learn more!
          </Alert>
        </Snackbar>
      </ThemeProvider>
      </RecoilRoot>
    </>
  );
}