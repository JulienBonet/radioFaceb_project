// client/src/admin/layout/AdminSidebar.tsx
import { List, ListItemText, Box, Button, ListItemButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { logoutAdmin } from '../auth/adminAuthService';

const menu = [
  { label: 'Dashboard', path: '/admin' },
  { label: 'Mixtapes', path: '/admin/mixtapes' },
  { label: 'Genres', path: '/admin/genres' },
];

export default function AdminSidebar() {
  return (
    <Box
      sx={{
        width: 240,
        borderRight: '1px solid #ddd',
        backgroundColor: 'white',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        component="a"
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 3,
        }}
      >
        <Box
          component="img"
          src="/images/radio_face_b_logo.png"
          alt="Radio Face B"
          sx={{
            width: 120,
            height: 'auto',
          }}
        />
      </Box>

      <List>
        {menu.map((item) => (
          <ListItemButton
            key={item.path}
            component={NavLink}
            to={item.path}
            end={item.path === '/admin'}
            sx={{
              '&.active': {
                backgroundColor: '#eee',
                fontWeight: 600,
                borderLeft: '3px solid black',
              },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>

      <Button fullWidth variant="outlined" color="error" onClick={logoutAdmin} sx={{ mt: 'auto' }}>
        Logout
      </Button>
    </Box>
  );
}
