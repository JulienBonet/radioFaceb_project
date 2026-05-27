import { Box, Typography, Stack, Paper } from '@mui/material';

export default function AdminDashboard() {
  return (
    <Box>
      <Typography variant="h5" sx={{mb:2}}>
        Dashboard
      </Typography>

      <Stack direction="row" spacing={2}>
        <Paper sx={{ p: 2, flex: 1 }}>Mixtapes</Paper>
        <Paper sx={{ p: 2, flex: 1 }}>Genres</Paper>
        <Paper sx={{ p: 2, flex: 1 }}>Users</Paper>
      </Stack>
    </Box>
  );
}