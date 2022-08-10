import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
} from '@mui/material';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const DrawerMenu = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <React.Fragment>
      <Drawer
        open={openDrawer}
        anchor="right"
        onClose={() => setOpenDrawer(false)}
      >
        <Box
          sx={{
            width: '100vw',
            padding: '20px 20px',
            height: '100vh',
            background: '#e3f4ec',
          }}
        >
          <List
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <ListItemButton
              onClick={() => setOpenDrawer(false)}
              style={{ marginBottom: '15px' }}
            >
              <ListItemIcon>
                <CloseIcon />
              </ListItemIcon>
            </ListItemButton>

            <ListItemButton
              style={{ marginBottom: '15px' }}
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemIcon>
                <ListItemText>
                  <Link href="/">Home</Link>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton
              style={{ marginBottom: '15px' }}
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemIcon>
                <ListItemText>
                  <Link href="/about">About</Link>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
            <ListItemButton
              style={{ marginBottom: '15px' }}
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemIcon>
                <ListItemText>
                  <Link href="/contact">Contact</Link>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerMenu;
