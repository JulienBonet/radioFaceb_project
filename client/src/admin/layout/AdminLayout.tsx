import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

export default function AdminLayout() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <AdminSidebar />

      <Box
        component="main"
        sx={{
          flex: 1,
          p: 3,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}