import React from 'react';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Image from 'next/image'

export default function App() {
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

                <Divider variant="middle" flexItem sx={{ m: 5 }} />
                <Typography id="what-is-workingDB" variant="h3">
                    What is WorkingDB?
                </Typography>
                <Paper elevation={3} sx={{ p: 3, m: 5 }}>
                    <Stack spacing={3}>
                        <Typography variant="h5" color='text.secondary'>Purpose & History</Typography>
                        <Typography variant="body1">
                            WorkingDB is a Microsoft Access Database, created in 2021 in Design by Jacob Brown.
                            The original purpose was to simplify navigation across the various file systems across NAM and NCM.
                            We started pulling data from different databases as read-only to bring more information in and simplify tracking our work.
                            Eventually, we got permission to write data to various databases. This is where it started to take off.
                        </Typography>
                        <Typography>
                            With much refinement, WorkingDB turned into the primary data source and front end for Design WO tracking, and finally our PLM for Pre-Production and ChangePoint.
                        </Typography>
                        <Typography>
                            Now, the WorkingDB is a widely used tool across NAM and NCM for many purposes. You probably use it to view data or track your work.
                            Or at the very least, look up information.
                        </Typography>
                    </Stack>
                </Paper>

                <Divider variant="middle" flexItem sx={{ m: 5 }} />
                <Typography id="getting-access" variant="h3">
                    Getting Access
                </Typography>
                <Paper elevation={3} sx={{ p: 3, m: 5 }}>
                    <Stack spacing={3}>
                        <Typography variant="h5" color='text.secondary'>Typical Method</Typography>
                        <Typography variant="body1">
                            Never used WorkingDB before? Ask your supervisor or manager to send you the link.
                            There is a standard/automated email that can be sent that has the link and first time instructions included.
                        </Typography>
                        <Typography variant="body1">
                            Oh right, I can just give you the link here. My bad.
                        </Typography>
                        <Typography variant="body1" color='info'>
                            \\nas01\allshare\wdbLink
                        </Typography>
                        <Typography variant="body1">
                            You&aposll need to copy and paste that link into file explorer.
                        </Typography>
                    </Stack>
                </Paper>

                <Divider variant="middle" flexItem sx={{ m: 5 }} />
                <Typography id="first-open" variant="h3">
                    First Time Opening WorkingDB
                </Typography>
                <Paper elevation={3} sx={{ p: 3, m: 5 }}>
                    <Stack spacing={3}>
                        <Typography variant="h5" color='text.secondary'>Typical Method</Typography>
                        <Typography variant="body1">
                            The first time you open WorkingDB, you may get a few popups.
                        </Typography>
                        <Box>
                            <Typography variant="body2" color='text.secondary'>
                                First one - the &apos;Enable Content&apos; popup
                            </Typography>
                            <Typography variant="body1">
                                Just click &apos;Enable Content&apos; - it&apos;s that easy.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="body2" color='text.secondary'>
                                Next One - it may ask if you want to &apos;Trust&apos; this file.
                            </Typography>
                            <Typography variant="body1">
                                Click &apos;Yes&apos;. Trust me.
                            </Typography>
                        </Box>
                    </Stack>
                </Paper>

                <Divider variant="middle" flexItem sx={{ m: 5 }} />
                <Typography id="basic-layout" variant="h3">
                    Basic Layout
                </Typography>
                <Paper elevation={3} sx={{ p: 3, m: 5 }}>
                    <Stack spacing={3}>
                        <Typography variant="h5" color='text.secondary'>Typical Method</Typography>
                        <Typography variant="body1">
                            I&apos;ll put some nice pictures here for you, eventually.
                        </Typography>
                    </Stack>
                </Paper>
            </Stack>
        </>
    );
}