import React from 'react';
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { TreeViewBaseItem } from '@mui/x-tree-view/models';

const treeList: TreeViewBaseItem[] = [
    {
        id: 'gettingstarted',
        label: 'Getting Started',
        children: [
            { id: 'what-is-it', label: 'What is WorkingDB?' },
            { id: 'first-open', label: 'First Open' },
            { id: 'basic-layout', label: 'Basic Layout' },
        ],
    },
    {
        id: 'pickers',
        label: 'Searching',
        children: [
            {
                id: 'documents-group',
                label: 'Part Documents',
                children: [
                    { id: 'docu1', label: '@mui/x-date-pickers' },
                    { id: 'docu2', label: '@mui/x-date-pickers-pro' },
                ],
            },
            {
                id: 'oracle-group',
                label: 'Oracle',
                children: [
                    { id: 'oracle1', label: '@mui/x-date-pickers' },
                    { id: 'oracl2', label: '@mui/x-date-pickers-pro' },
                ],
            },
            { id: 'search-bar ', label: 'Search Bar' },
        ],
    },
    {
        id: 'applications',
        label: 'Applications',
        children: [
            {
                id: 'charts-community',
                label: 'Part Projects Tracker',
                children: [
                    { id: 'ppOverview', label: 'Project Tracking Overview' },
                    { id: 'ppView', label: 'Viewing a Project' },
                    { id: 'ppDash', label: 'Part Project Dashboard' },
                    { id: 'ppTrackers', label: 'Project Trackers' },
                    {
                        id: 'ppComps',
                        label: 'Project Components',
                        children: [
                            { id: 'pp3', label: 'Issues' },
                            { id: 'pp4', label: 'Testing' },
                            { id: 'pp5', label: 'Trials' },
                            { id: 'pp6', label: 'Automation' },
                        ],
                    },
                ],
            },
            {
                id: 'programs',
                label: 'Programs'
            },
            {
                id: 'charts-pro',
                label: 'Design WOs'
            },
            {
                id: 'changepoint',
                label: 'ChangePoint Control'
            },
            {
                id: 'new-part-numbers',
                label: 'New Part Numbers'
            },
        ],
    },
];


export default function Gallery() {
    const theme = useTheme();
    return (
        <>
            <Grid container spacing={1} sx={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Grid xs={3} sx={{ bgcolor: 'primary.dark' }}>
                    <Box sx={{ minWidth: 250 }}>
                        <RichTreeView items={treeList} />
                    </Box>
                </Grid>
                <Grid xs={9} sx={{ display: 'block', justifyContent: 'center', textAlign: 'center', }}>
                    <img
                        height='100'
                        src='/images/logo.png'
                        srcSet={`${'/images/logo.png'}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt='logo'
                        loading="lazy"
                    />
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
