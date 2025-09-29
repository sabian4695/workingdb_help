import React from 'react';
import Head from 'next/head'
import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

export default function About() {

    return (
        <>
            <Head>
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="Jacob Brown Photos - Lancaster, Ohio Professional Photographer / Videographer. Book me for professional headshots, family photos, senior photos, product photos, pet photos, baby photos, and much more."
                />
                <meta name="robots" content="index,follow" />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/android-chrome-192x192.png" />
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                <title>ABOUT | Jacob Brown Photos - Lancaster, Ohio Photographer / Videographer</title>
            </Head>
            <Box
                sx={{
                    width: 300,
                    height: '100%',
                    bgcolor: 'primary.main',
                }}
            >
                <Box sx={{ minHeight: 352, minWidth: 250 }}>
                    <SimpleTreeView>
                        <TreeItem itemId="grid" label="Data Grid">
                            <TreeItem itemId="grid-community" label="@mui/x-data-grid" />
                            <TreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" />
                            <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
                        </TreeItem>
                        <TreeItem itemId="pickers" label="Date and Time Pickers">
                            <TreeItem itemId="pickers-community" label="@mui/x-date-pickers" />
                            <TreeItem itemId="pickers-pro" label="@mui/x-date-pickers-pro" />
                        </TreeItem>
                        <TreeItem itemId="charts" label="Charts">
                            <TreeItem itemId="charts-community" label="@mui/x-charts" />
                            <TreeItem itemId="charts-pro" label="@mui/x-charts-pro" />
                        </TreeItem>
                        <TreeItem itemId="tree-view" label="Tree View">
                            <TreeItem itemId="tree-view-community" label="@mui/x-tree-view" />
                            <TreeItem itemId="tree-view-pro" label="@mui/x-tree-view-pro" />
                        </TreeItem>
                    </SimpleTreeView>
                </Box>
            </Box>
        </>
    )
}
