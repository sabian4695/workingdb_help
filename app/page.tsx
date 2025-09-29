import React from 'react';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';

export default function App() {
  return (
    <>
      <img
        height='100'
        src='/images/logo.png'
        srcSet={`${'/images/logo.png'}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt='logo'
        loading="lazy"
      />
      <Typography
        sx={{ fontWeight: '100', letterSpacing: 7 }}
        variant={'h5'}
        color='text.secondary'
      >
        WorkingDB
      </Typography>
    </>
  );
}
