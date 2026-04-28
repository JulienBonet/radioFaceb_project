// client/src/pages/HomePage.tsx
import { Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useAudio } from '../hooks/useAudio';
import LastTracks from '../components/LastTracks';

export default function HomePage() {
  const { track, progress } = useAudio();

  if (!track) return null;

  const progressPercent = Math.min(progress * 100, 100);

  return (
    <Box
      sx={{
        px: 3,
        pt: 4,
        pb: '120px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        spacing={6}
        sx={{ backgroundColor: 'white', padding: 2, borderRadius: '10px' }}
      >
        {/* LEFT */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack
            direction="column"
            spacing={1}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Stack
              direction="column"
              spacing={1}
              sx={{
                width: '100%',
                maxWidth: 500,
              }}
            >
              <Typography sx={{ color: '#ff3b3b', fontWeight: 700 }}>● EN DIRECT</Typography>
            </Stack>
            <Box
              sx={{
                width: '100%',
                maxWidth: 500,
                aspectRatio: '1 / 1',
                overflow: 'hidden',
                borderRadius: 2,
              }}
            >
              <Box
                component="img"
                src={track.img_large_url}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>

            <Stack
              direction="column"
              spacing={0}
              sx={{
                width: '100%',
                maxWidth: 500,
              }}
            >
              <Typography sx={{ color: 'black', fontWeight: 700 }}>{track.title}</Typography>

              <Typography sx={{ color: 'black' }}>{track.author}</Typography>
            </Stack>
            <Box
              sx={{
                height: 4,
                mt: 2,
                width: '100%',
                maxWidth: 500,
                background: 'rgba(0,0,0,0.1)',
                borderRadius: 2,
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  width: `${progressPercent}%`,
                  height: '100%',
                  background: '#ff6b00',
                }}
              />
            </Box>
          </Stack>
        </Grid>

        {/* RIGHT */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 2,
              background: 'rgba(0,0,0,0.04)',
            }}
          >
            <Typography sx={{ fontWeight: 700 }}>Émission en cours</Typography>
            <Typography sx={{ opacity: 0.7 }}>WEEK END — 18h / 20h</Typography>
          </Box>
          <LastTracks compact />
        </Grid>
      </Grid>
    </Box>
  );
}
