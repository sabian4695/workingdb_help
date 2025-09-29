import React from 'react';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';


export default function App() {
  return (
    <>
      <Stack sx={{ height: '100%' }}>
        <Box>
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
        </Box>
      </Stack>
    </>
  );
}
