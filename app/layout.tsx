"use client"
import type { Metadata } from "next";
import "./globals.css";
import { createTheme } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Image from 'next/image'
import Box from '@mui/material/Box';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { TreeViewBaseItem } from '@mui/x-tree-view/models';

export const primaryMain = '#415d66ff'
export const secondaryMain = '#51695eff'
export const primaryRGB = '103, 155, 172'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: primaryMain
    },
    secondary: {
      main: secondaryMain
    },
  }
})

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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <nav>
            <AppBar component="nav" elevation={5} variant='outlined'>
              <Toolbar variant='dense'>
                <Image
                  height='30'
                  width='30'
                  src='/images/logo.png'
                  alt='logo'
                  loading="lazy"
                />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: '200', flexGrow: 1, ml: 1 }}
                >
                  WorkingDB
                </Typography>
              </Toolbar>
            </AppBar>
          </nav>
          <Toolbar />
          <Box sx={{ bgcolor: 'secondary.dark', width: 300, height: 'auto' }}>
            <RichTreeView items={treeList} />
          </Box>
          <Box sx={{ ml: 39, mr: 1, position: 'absolute', top: 60, alignItems: 'center', textAlign: 'center', bgcolor: 'primary.main', width: 'auto', height: 'auto', borderLeft: 3 }}>
            {children}
          </Box>
        </ThemeProvider>
      </body>

    </html>
  );
}
