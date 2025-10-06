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
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { helpContent } from '../misc/helpdata'
import { styled, alpha } from '@mui/material/styles';
import ArticleIcon from '@mui/icons-material/Article';
import FolderRounded from '@mui/icons-material/FolderRounded';
import ImageIcon from '@mui/icons-material/Image';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { useTreeItem, UseTreeItemParameters } from '@mui/x-tree-view/useTreeItem';
import {
  TreeItemIconContainer,
  TreeItemLabel,
} from '@mui/x-tree-view/TreeItem';
import { TreeItemIcon } from '@mui/x-tree-view/TreeItemIcon';
import { TreeItemProvider } from '@mui/x-tree-view/TreeItemProvider';
import { useTreeItemModel } from '@mui/x-tree-view/hooks';
import { TransitionProps } from '@mui/material/transitions';
import { useSpring, animated } from '@react-spring/web';
import Collapse from '@mui/material/Collapse';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import HomeIcon from '@mui/icons-material/Home';

export const primaryMain = '#65bae0'
export const secondaryMain = '#698679ff'
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

const drawerWidth = 250;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

type FileType = 'image' | 'pdf' | 'doc' | 'video' | 'folder' | 'pinned' | 'trash' | 'home';

const getIconFromFileType = (fileType: FileType) => {
  switch (fileType) {
    case 'image':
      return ImageIcon;
    case 'pdf':
      return PictureAsPdfIcon;
    case 'doc':
      return ArticleIcon;
    case 'folder':
      return FolderRounded;
    case 'home':
      return HomeIcon;
    default:
      return ArticleIcon;
  }
};

type itemWithDis = TreeViewBaseItem<{
  id: string;
  label: string;
  disabled?: boolean;
  subHeader?: string;
  fileType?: FileType;
}>;


const treeList: itemWithDis[] = [
  {
    id: '',
    label: 'Home',
    fileType: 'home'
  },
  {
    id: 'getting-started',
    label: 'Getting Started',
    children: [
      { id: 'getting-started#what-is-workingdb', label: 'What is WorkingDB?' },
      { id: 'getting-started#getting-access', label: 'Getting Access' },
      { id: 'getting-started#first-open', label: 'First Open' },
      { id: 'getting-started#basic-layout', label: 'Basic Layout' },
    ],
  },
  {
    id: 'searching',
    label: 'Searching / Reports',
    children: [
      { id: 'searching/general-search-layout', label: 'Part Search Overview', subHeader: "Part Search Overview" },
      { id: 'searching/general-search-layout#general-search-layout', label: 'General Search Layout' },
      { id: 'searching/general-search-layout#search-bar', label: 'File Search Bar' },
      { id: 'searching/general-search-layout#misc-items', label: 'Miscellaneous' },

      { id: 'searching/oracle', label: 'Oracle', subHeader: "Oracle" },
      { id: 'searching/oracle#ecos', label: 'ECOs' },
      { id: 'searching/oracle#sifs', label: 'SIFs (Sales Information Form)' },
      { id: 'searching/oracle#item-categories', label: 'Item Categories' },
      { id: 'searching/oracle#customer-item-xref', label: 'Customer Item Cross Reference' },
      { id: 'searching/oracle#on-hand-quantity', label: 'On Hand Quantity' },
      { id: 'searching/oracle#bom', label: 'BOM / Item Where Used' },
      { id: 'searching/oracle#forecast', label: 'Forecast Orders' },
      { id: 'searching/oracle#open-orders', label: 'Open Orders' },
      { id: 'searching/oracle#cost', label: 'Cost' },
      { id: 'searching/oracle#pos', label: 'POs' },
      { id: 'searching/oracle#material-search', label: 'Material Search' },
      { id: 'searching/oracle#search-by-description', label: 'Search By Description' },
      { id: 'searching/oracle#routing', label: 'Tool -> Part Number Routing' },
      { id: 'searching/oracle#sif-item-report', label: 'Part SIF Item Report' },

      { id: 'searching/other-search', label: 'Other', subHeader: "Other Reports" },
      { id: 'searching/other-search#cnl-lab-wos', label: 'CNL Lab WOs' },
      { id: 'searching/other-search#slb-tooling-notes', label: 'SLB Tooling DB Notes' },
      { id: 'searching/other-search#open-itrs', label: 'Open ITRs' },
    ],
  },
  // {
  //   id: 'applications',
  //   label: 'Applications',
  //   children: [
  //     { id: 'applications/part-projects-tracker', label: 'Part Projects Tracker', subHeader: "Part Projects Tracker" },
  //     { id: 'applications/part-projects-tracker#project-tracking-overview', label: 'Project Tracking Overview' },
  //     { id: 'applications/part-projects-tracker#viewing-a-project', label: 'Viewing a Project' },
  //     { id: 'applications/part-projects-tracker#part-project-dashboard', label: 'Part Project Dashboard' },
  //     { id: 'applications/part-projects-tracker#project-trackers', label: 'Project Trackers' },
  //     { id: 'applications/part-projects-sub-apps', label: 'Part Projects Sub-Applications', subHeader: "Part Projects Sub-Applications" },
  //     { id: 'applications/part-projects-sub-app#part-issues', label: 'Issues' },
  //     { id: 'applications/part-projects-sub-app#part-testing', label: 'Testing' },
  //     { id: 'applications/part-projects-sub-app#part-trials', label: 'Trials' },
  //     { id: 'applications/part-projects-sub-app#part-automation', label: 'Automation' },
  //     { id: 'applications#programs', label: 'Programs' },
  //     { id: 'applications#design-wos', label: 'Design WOs' },
  //     { id: 'applications#changepoint', label: 'ChangePoint Control' },
  //     { id: 'applications#new-part-numbers', label: 'New Part Numbers' },
  //   ],
  // },
];

const TreeItemRoot = styled('li')(({ theme }) => ({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  outline: 0,
  color: theme.palette.grey[400],
  ...theme.applyStyles('light', {
    color: theme.palette.grey[800],
  }),
}));

const TreeItemContent = styled('div')(({ theme }) => ({
  padding: theme.spacing(0.5),
  paddingRight: theme.spacing(1),
  paddingLeft: `calc(${theme.spacing(1)} + var(--TreeView-itemChildrenIndentation) * var(--TreeView-itemDepth))`,
  width: '100%',
  boxSizing: 'border-box', // prevent width + padding to overflow
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
  flexDirection: 'row-reverse',
  borderRadius: theme.spacing(0.7),
  marginBottom: theme.spacing(0.5),
  marginTop: theme.spacing(0.5),
  fontWeight: 500,
  '&[data-expanded]:not([data-focused], [data-selected]) .labelIcon': {
    color: theme.palette.primary.dark,
    ...theme.applyStyles('light', {
      color: theme.palette.primary.main,
    }),
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      left: '16px',
      top: '44px',
      height: 'calc(100% - 48px)',
      width: '1.5px',
      backgroundColor: theme.palette.grey[700],
      ...theme.applyStyles('light', {
        backgroundColor: theme.palette.grey[300],
      }),
    },
  },
  [`&[data-focused], &[data-selected]`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    ...theme.applyStyles('light', {
      backgroundColor: theme.palette.secondary.main,
    }),
  },
  '&:not([data-focused], [data-selected]):hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    color: 'white',
    ...theme.applyStyles('light', {
      color: theme.palette.primary.main,
    }),
  },
}));

const CustomCollapse = styled(Collapse)({
  padding: 0,
});

const AnimatedCollapse = animated(CustomCollapse);

function TransitionComponent(props: TransitionProps) {
  const style = useSpring({
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(0,${props.in ? 0 : 20}px,0)`,
    },
  });

  return <AnimatedCollapse style={style} {...props} />;
}

interface CustomTreeItemProps
  extends Omit<UseTreeItemParameters, 'rootRef'>,
  Omit<React.HTMLAttributes<HTMLLIElement>, 'onFocus'> { }

const isItemDisabled = (item: itemWithDis) => !!item.disabled;

const CustomTreeItem = React.forwardRef(function CustomTreeItem(
  props: CustomTreeItemProps,
  ref: React.Ref<HTMLLIElement>,
) {
  const { id, itemId, label, disabled, children, ...other } = props;

  const {
    getContextProviderProps,
    getRootProps,
    getContentProps,
    getIconContainerProps,
    getGroupTransitionProps,
    status,
  } = useTreeItem({ id, itemId, children, label, disabled, rootRef: ref });

  const item = useTreeItemModel<itemWithDis>(itemId)!;

  let icon;
  if (status.expandable) {
    icon = FolderRounded;
  } else if (item.fileType) {
    icon = getIconFromFileType(item.fileType);
  }

  return (
    <>
      <TreeItemProvider {...getContextProviderProps()}>
        <TreeItemRoot {...getRootProps(other)}>
          <TreeItemContent {...getContentProps()}>
            <TreeItemIconContainer {...getIconContainerProps()}>
              <TreeItemIcon status={status} />
            </TreeItemIconContainer>
            <TreeItemLabel
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {icon && (
                <Box
                  component={icon}
                  className="labelIcon"
                  sx={{ mr: 1, fontSize: '1.2rem' }}
                />
              )}
              {'subHeader' in item ?
                <Typography color="secondary" variant='overline'>{item.subHeader}</Typography>
                : <Typography color="textPrimary">{label}</Typography>}
              {status.expandable && status.expanded}
            </TreeItemLabel>
          </TreeItemContent>
          {children && <TransitionComponent {...getGroupTransitionProps()} />}
        </TreeItemRoot>
      </TreeItemProvider>
    </>
  );
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const router: any = useRouter()
  const pathName: any = usePathname()
  const largerScreen = useMediaQuery(theme.breakpoints.up('md'));

  const [openDrawer, setOpenDrawer] = React.useState(largerScreen);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

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
  const handleSearchClick = (route: string) => {
    setOpen(false);
    router.push('/' + route)
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
            <AppBar component="nav" elevation={5} variant='outlined' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
              <Toolbar variant='dense'>
                <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
                  <IconButton
                    color="inherit"
                    onClick={toggleDrawer}
                    edge="start"
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
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
          <Box component="main" sx={{ width: '100vw', display: 'flex' }}>
            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                },
              }}
              variant="persistent"
              anchor="left"
              open={openDrawer}
            >
              <Toolbar />
              <Box>
                <RichTreeView
                  sx={{ height: '100%', width: '100%' }}
                  items={treeList}
                  onItemClick={handleItemSelectionToggle}
                  isItemDisabled={isItemDisabled}
                  slots={{ item: CustomTreeItem }}
                  itemChildrenIndentation={24}
                />
              </Box>
            </Drawer>
            <Main open={openDrawer} sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'top',
              textAlign: 'center',
              overflowY: 'auto',
              overflowX: 'hidden',
            }}
            >
              {children}
            </Main>
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
                    <ListItemButton onClick={() => handleSearchClick(x.route)} key={x.pageId}>
                      <ListItemText primary={x.pageName} />
                      {/* <ListItemText primary={x.pageName} secondary={x.sections[0].sectionTitle} /> */}
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
