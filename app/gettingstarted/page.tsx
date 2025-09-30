import React from 'react';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Image from 'next/image'
import { helpContent } from '../../misc/helpdata'

export default function App() {
    const helpText = helpContent.filter(x => x.pageId === 'gettingstarted')
    return (
        <>
            <Stack>
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
                {helpText[0].sections.map(row => (
                    <Box key={row.sectionId}>
                        <Divider variant="middle" flexItem sx={{ m: 5 }} />
                        <Typography id={row.sectionId} variant="h3">
                            {row.sectionTitle}
                        </Typography>
                        <Paper elevation={3} sx={{ p: 3, m: 5 }}>
                            <Stack spacing={3}>
                                <Typography variant="h5" color='text.secondary'>{row.cards.title}</Typography>
                                {row.cards.contents.map(x => (
                                    <Box key={x.text}>
                                        <Typography color={x.color} variant={x.variant} >{x.text}</Typography>
                                        {x.image !== undefined ?
                                            <Image
                                                height='250'
                                                width='250'
                                                src={x.image}
                                                alt='image1'
                                                loading="lazy"
                                            />

                                            : null}
                                    </Box>
                                ))}
                            </Stack>
                        </Paper>
                    </Box>
                ))}
            </Stack>
        </>
    );
}