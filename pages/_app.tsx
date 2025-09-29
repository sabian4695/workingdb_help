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
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { eventComing } from "./index";
import { RecoilRoot } from "recoil";
import Image from 'next/image'
import HomeIcon from '@mui/icons-material/Home';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const primaryMain = '#314247ff'
export const secondaryMain = '#2d3a34ff'
export const primaryRGB = '103, 155, 172'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: primaryMain
    },
    secondary: {
      main: secondaryMain
    },
  }
})

export default function App({ Component, pageProps }) {
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
          <AppBar component="nav" elevation={5} variant='outlined'>
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
                sx={{ fontWeight: '200', flexGrow: 1, ml: 0.5 }}
              >
                WorkingDB
              </Typography>
            </Toolbar>
          </AppBar>
          <Box component="main" sx={{ width: '100%' }}>
            <Toolbar />
            <Component {...pageProps} />
          </Box>
          <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
            <Alert onClose={handleCloseSnack} severity="info" sx={{ width: '100%' }}>
              Test Alert!
              <Button sx={{ mx: 1 }} color='inherit' variant='outlined' size='small' component={Link} href="events">CLICK HERE</Button>
              to learn more!
            </Alert>
          </Snackbar>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}