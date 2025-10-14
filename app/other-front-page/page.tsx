import React from 'react';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Image from 'next/image'
import { helpContent } from '../../misc/helpdata'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grow from '@mui/material/Grow';
import { highStackStyles, paperStyles, contentTextStyles, cardMediaStyles, cardStyles } from '@/misc/globalStyles';

export default function App() {
    const helpText = helpContent.filter(x => x.pageId === 'other-front-page')
    return (
        <>
            <Stack sx={highStackStyles}>
                {helpText[0].sections.map((row, rowIndex) => (
                    <Box key={row.sectionId + rowIndex}>
                        <Divider variant="middle" flexItem sx={{ m: 5 }} />
                        <Grow in={true}>
                            <Typography id={row.sectionId} variant="h3">
                                {row.sectionTitle}
                            </Typography>
                        </Grow>
                        {row.cards.map((y, yIndex) => (
                            <Grow key={y.title + yIndex} in={true}>
                                <Paper elevation={3} sx={paperStyles}>
                                    <Stack spacing={3}>
                                        <Typography variant="h5" color='text.secondary'>{y.title}</Typography>
                                        {y.contents.map((x, xIndex) => (
                                            <Box key={xIndex} >
                                                <Typography color={x.color} variant={x.variant} sx={contentTextStyles} >{x.text}</Typography>
                                                {x.image !== undefined ?
                                                    <Card elevation={1} sx={cardStyles}>
                                                        <CardMedia
                                                            component="img"
                                                            src={x.image}
                                                            sx={cardMediaStyles}
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