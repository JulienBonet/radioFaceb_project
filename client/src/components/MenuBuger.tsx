import { useState } from 'react';
import {
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Divider,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

type MenuItem = {
  label: string;
  path: string;
};

const MenuBurger = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems: MenuItem[] = [
    { label: 'Player', path: '/' },
    { label: "C'était quoi ce titre ?", path: '/historique' },
    { label: 'Les mixtapes', path: '/mixtapes' },
    { label: 'grille des programmes', path: '/grille' },
    { label: 'La radio', path: '/presentation' },
    { label: 'Comment écouter ?', path: '/comment_ecouter' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      {/* BURGER */}
      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          color: '#fff',
          position: 'absolute',
          left: 12,
          zIndex: 5000,
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* DRAWER */}
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        anchor="left"
        slotProps={{
          root: {
            sx: {
              zIndex: 4500,
            },
          },
          paper: {
            sx: {
              width: 260,
              backgroundColor: '#000',
              color: 'white',
              borderRight: '1px solid #222',
              position: 'fixed',
              top: 60, // sous ton header
              left: 0,
              height: 'auto',
              maxHeight: 'calc(100vh - 60px)',
              fontFamily: 'var(--font_01)',
            },
          },
        }}
      >
        <Box sx={{ pt: 1 }}>
          <List sx={{ p: 0 }}>
            {menuItems.map((item, index) => (
              <Box key={item.path}>
                <ListItemButton onClick={() => handleNavigate(item.path)}>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontFamily: 'var(--font_01)',
                          fontWeight: 500,
                          color: 'white',
                        }}
                      >
                        {item.label}
                      </Typography>
                    }
                  />
                </ListItemButton>
                {index !== menuItems.length - 1 && <Divider sx={{ borderColor: '#222' }} />}
              </Box>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default MenuBurger;
