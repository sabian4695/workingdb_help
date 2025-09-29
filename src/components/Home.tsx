import React from 'react';
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

export default function Gallery() {
    const theme = useTheme();
    
    return (
        <>
            <Grid container spacing={2} sx={{
                m: 1,
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'success'
            }}>
                <Grid xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        height='100'
                        src='/images/logo.png'
                        srcSet={`${'/images/logo.png'}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt='logo'
                        loading="lazy"
                    />
                </Grid>
                <Grid xs={12}>
                    <Typography
                        sx={{ fontWeight: '100', letterSpacing: 10 }}
                        variant={'h5'}
                        color='text.secondary'
                    >
                        WorkingDB
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}
