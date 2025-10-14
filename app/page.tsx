"use client"
import React from 'react';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Image from 'next/image'
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import Grow from '@mui/material/Grow';

export default function App() {
  return (
    <>
      <Stack sx={{ width: '100%', maxWidth: '1200px', alignSelf: 'center' }}>
        <Grow in={true}>
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
        </Grow>
        <Box>
          <Divider variant="middle" flexItem sx={{ m: 5 }} />
          <Grow in={true}>
            <Typography variant="h3">
              Welcome to the WorkingDB Help Site
            </Typography>
          </Grow>
          <Grow in={true}>
            <Paper elevation={3} sx={{ borderRadius: '10px', p: 3, m: 5 }}>
              <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} spacing={3}>
                <Typography variant="h5" color='text.secondary'>There are three main ways to navigate</Typography>
                <Box>
                  <List sx={{ bgcolor: 'background.paper' }}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <InsertLinkIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Click a link from WorkingDB or elsewhere" secondary="Every page and header has a direct link" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <AccountTreeIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="The Tree" secondary="Use the tree on the left to navigate to a specific page or just browse" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <SearchIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Search" secondary="Just start typing in the search bar on the top right and go!" />
                    </ListItem>
                  </List>
                </Box>
              </Stack>
            </Paper>
          </Grow>
        </Box>
      </Stack>
    </>
  );
}
