import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

export default function AdminLayout() {
  return (
    <Box sx={{ display: 'flex', minHeight: 'calc(100vh - 60px)' }}>
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