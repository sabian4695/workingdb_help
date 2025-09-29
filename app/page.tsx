import React from 'react';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Image from 'next/image'

export default function App() {
  return (
    <>
      <Stack sx={{ height: '100%' }}>
        <Box sx={{ p: 10 }}>
          <Image
            height='250'
            width='250'
            src='/images/logo.png'
            alt='logo'
            loading="lazy"
          />
          <Typography
            sx={{ fontWeight: '100', letterSpacing: 7 }}
            variant={'h3'}
            color='text.secondary'
          >
            WorkingDB
          </Typography>
        </Box>
      </Stack>
    </>
  );
}
