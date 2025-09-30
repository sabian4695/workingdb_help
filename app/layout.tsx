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
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { helpContent } from '../misc/helpdata'

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
    id: 'getting-started',
    label: 'Getting Started',
    children: [
      { id: 'getting-started#what-is-workingDB', label: 'What is WorkingDB?' },
      { id: 'getting-started#getting-access', label: 'Getting Access' },
      { id: 'getting-started#first-open', label: 'First Open' },
      { id: 'getting-started#basic-layout', label: 'Basic Layout' },
    ],
  },
  {
    id: 'searching',
    label: 'Searching',
    children: [
      {
        id: 'searching/part-documents',
        label: 'Part Documents',
        children: [
          { id: 'searching/part-documents#1', label: '@mui/x-date-pickers' },
          { id: 'searching/part-documents#2', label: '@mui/x-date-pickers-pro' },
        ],
      },
      {
        id: 'searching/oracle',
        label: 'Oracle',
        children: [
          { id: 'searching/oracle#1', label: '@mui/x-date-pickers' },
          { id: 'searching/oracle#2', label: '@mui/x-date-pickers-pro' },
        ],
      },
      { id: 'searching/search-bar ', label: 'Search Bar' },
    ],
  },
  {
    id: 'applications',
    label: 'Applications',
    children: [
      {
        id: 'applications/part-projects-tracker',
        label: 'Part Projects Tracker',
        children: [
          { id: 'applications/part-projects-tracker#project-tracking-overview', label: 'Project Tracking Overview' },
          { id: 'applications/part-projects-tracker#viewing-a-project', label: 'Viewing a Project' },
          { id: 'applications/part-projects-tracker#part-project-dashboard', label: 'Part Project Dashboard' },
          { id: 'applications/part-projects-tracker#project-trackers', label: 'Project Trackers' },
        ],
      },
      {
        id: 'applications/part-project-sub-apps',
        label: 'Part Project Sub-Applications',
        children: [
          { id: 'applications/part-project-sub-app#part-issues', label: 'Issues' },
          { id: 'applications/part-project-sub-app#part-testing', label: 'Testing' },
          { id: 'applications/part-project-sub-app#part-trials', label: 'Trials' },
          { id: 'applications/part-project-sub-app#part-automation', label: 'Automation' },
        ],
      },
      {
        id: 'applications#programs',
        label: 'Programs'
      },
      {
        id: 'applications#design-wos',
        label: 'Design WOs'
      },
      {
        id: 'applications#changepoint',
        label: 'ChangePoint Control'
      },
      {
        id: 'applications#new-part-numbers',
        label: 'New Part Numbers'
      },
    ],
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
  const [searchText, setSearchText] = React.useState('')
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSearchClick = (itemId: string) => {
    setOpen(false);
    router.push('/' + itemId)
  };
  function setText(event: any) {
    setSearchText(event.target.value)
    filterItems(event.target.value)
  }

  const [filterResults, setFilterResults] = React.useState(helpContent);

  const filterItems = (targetText: string) => {
    if (targetText.length > 0) {
      const filtered = helpContent.filter((data) => JSON.stringify(data).toLowerCase().indexOf(targetText.toLowerCase()) !== -1);
      setFilterResults(filtered)
    } else {
      setFilterResults(helpContent)
    }
  }

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <nav>
            <AppBar component="nav" elevation={5} variant='outlined'>
              <Toolbar variant='dense'>
                <Box sx={{ display: 'flex', flexGrow: 1 }}>
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
                <Button variant="contained" startIcon={<SearchIcon />} onClick={handleClickOpen}>
                  Open Search
                </Button>
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
          <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
          >
            <DialogTitle>Search All Help Contents</DialogTitle>
            <DialogContent dividers>
              <Stack spacing={3}>
                <DialogContentText>
                  Type in the search bar, then click a result to go to that page.
                </DialogContentText>
                <TextField
                  value={searchText}
                  onChange={(event: any) => setText(event)}
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    },
                  }}
                  variant="standard"
                />
                <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
                  {filterResults.map(x => (
                    <ListItemButton onClick={() => handleSearchClick(x.pageId)} key={x.pageId}>
                      <ListItemText primary={x.pageName} secondary={x.sections[0].sectionTitle} />
                    </ListItemButton>
                  ))}
                </List>
              </Stack>

            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </Dialog>
        </ThemeProvider>
      </body>

    </html >
  );
}
