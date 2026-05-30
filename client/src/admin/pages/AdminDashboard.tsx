// client/src/admin/pages/AdminDashboard.tsx

import { Box, Typography, Stack, Paper } from '@mui/material';

import { useEffect, useState } from 'react';

import { getAdminStats } from '../api/adminStatsApi';

import type { AdminStats } from '../types/adminStats';

export default function AdminDashboard() {
  const [stats, setStats] = useState<AdminStats | null>(null);

  console.info(stats);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getAdminStats();

        setStats(data);
      } catch (err) {
        console.error(err);
      }
    };

    void fetchStats();
  }, []);

  if (!stats) {
    return <Typography>Loading...</Typography>;
  }

  const statsSxBox = {
    m: 1,
    p: 3,
    flex: 1,
    Width: 220,
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <Box>
      <Typography
        sx={{ mb: 3, fontFamily: 'var(--font_05)', fontSize: 'xx-large', fontWeight: 'bold' }}
      >
        Dashboard
      </Typography>

      <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Paper sx={statsSxBox}>
          <Typography variant="h4">{stats.mixtapes}</Typography>

          <Typography>Mixtapes</Typography>
        </Paper>

        <Paper sx={statsSxBox}>
          <Typography variant="h4">{stats.publishedMixtapes}</Typography>

          <Typography sx={{ textAlign: 'center' }}>Mixtapes Published</Typography>
        </Paper>

        <Paper sx={statsSxBox}>
          <Typography variant="h4">{stats.draftMixtapes}</Typography>

          <Typography sx={{ textAlign: 'center' }}>Mixtapes draft</Typography>
        </Paper>

        <Paper sx={statsSxBox}>
          <Typography variant="h4">{stats.genres}</Typography>

          <Typography>Genres</Typography>
        </Paper>

        <Paper sx={statsSxBox}>
          <Typography variant="h4">{stats.users}</Typography>

          <Typography>Users</Typography>
        </Paper>
      </Stack>
    </Box>
  );
}
