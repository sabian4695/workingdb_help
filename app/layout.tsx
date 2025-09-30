"use client"
import React from "react";
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
import Divider from '@mui/material/Divider';
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

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

type itemWithDis = TreeViewBaseItem<{
  id: string;
  label: string;
  disabled?: boolean;
}>;

const treeList: itemWithDis[] = [
  {
    id: 'gettingstarted',
    label: 'Getting Started',
    children: [
      { id: 'gettingstarted#what-is-workingDB', label: 'What is WorkingDB?' },
      { id: 'gettingstarted#getting-access', label: 'Getting Access' },
      { id: 'gettingstarted#first-open', label: 'First Open' },
      { id: 'gettingstarted#basic-layout', label: 'Basic Layout' },
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
    disabled: true
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
    disabled: true
  },
];

const isItemDisabled = (item: itemWithDis) => !!item.disabled;

export default function Layout({ children }: { children: React.ReactNode }) {
  const router: any = useRouter()
  const pathName: any = usePathname()

  const handleItemSelectionToggle = (event: any, itemId: string) => {
    if (pathName !== '/' + itemId) {
      router.push('/' + itemId)
    }
  };

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <nav>
            <AppBar component="nav" elevation={5} variant='outlined'>
              <Toolbar variant='dense'>
                <Box sx={{ display: 'flex' }}>
                  <Image
                    height='30'
                    width='30'
                    src='/images/logo.png'
                    alt='logo'
                    loading="lazy"
                    onClick={() => router.push('/')}
                  />
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: '200', flexGrow: 1, ml: 1 }}
                  >
                    WorkingDB
                  </Typography>
                </Box>
              </Toolbar>
            </AppBar>
          </nav>
          <Toolbar />
          <Box sx={{ width: '100vw', display: 'flex', flexDirection: 'row' }} component="main">
            <Box sx={{ width: '20vw', p: 1, display: 'flex', overflowY: 'auto', overflowX: 'hidden' }}>
              <RichTreeView sx={{ height: '100%' }} items={treeList} onItemClick={handleItemSelectionToggle} isItemDisabled={isItemDisabled} />
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box sx={{ alignItems: 'top', flexGrow: 1, textAlign: 'center', maxWidth: '80vw', height: '90vh', display: 'flex', overflowY: 'auto', overflowX: 'hidden' }}>
              {children}
            </Box>
          </Box>
        </ThemeProvider>
      </body>

    </html >
  );
}
