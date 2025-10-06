import React from 'react';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Image from 'next/image'
import { helpContent } from '../../../misc/helpdata'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grow from '@mui/material/Grow';

export default function App() {
    const helpText = helpContent.filter(x => x.pageId === 'general-search-layout')
    return (
        <>
            <Stack sx={{ flexGrow: 0 }}>
                {helpText[0].sections.map(row => (
                    <Box key={row.sectionId}>
                        <Divider variant="middle" flexItem sx={{ m: 5 }} />
                        <Grow in={true}>
                            <Typography id={row.sectionId} variant="h3">
                                {row.sectionTitle}
                            </Typography>
                        </Grow>
                        {row.cards.map(y => (
                            <Grow key={y.title} in={true}>
                                <Paper elevation={3} sx={{ borderRadius: '10px', p: 3, m: 5 }}>
                                    <Stack spacing={3}>
                                        <Typography variant="h5" color='text.secondary'>{y.title}</Typography>
                                        {y.contents.map(x => (
                                            <Box key={x.text}>
                                                <Typography color={x.color} variant={x.variant} >{x.text}</Typography>
                                                {x.image !== undefined ?
                                                    <Card elevation={1} sx={{ borderRadius: '10px', alignSelf: 'center', justifySelf: 'center' }}>
                                                        <CardMedia
                                                            component="img"
                                                            src={x.image}
                                                            sx={{ minHeight: 300 }}
                                                        />
                                                    </Card>
                                                    : null}
                                            </Box>
                                        ))}
                                    </Stack>
                                </Paper>
                            </Grow>
                        ))}
                    </Box>
                ))}
            </Stack>
        </>
    );
}
