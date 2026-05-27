import { List, ListItemText, Box, Button, ListItemButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { logoutAdmin } from '../auth/adminAuthService';

const menu = [
  { label: 'Dashboard', path: '/admin' },
  { label: 'Mixtapes', path: '/admin/mixtapes' },
];

export default function AdminSidebar() {
  return (
    <Box sx={{ width: 240, borderRight: '1px solid #ddd', backgroundColor: 'white', p: 2 }}>
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

      <Button fullWidth variant="outlined" color="error" onClick={logoutAdmin}>
        Logout
      </Button>
    </Box>
  );
}