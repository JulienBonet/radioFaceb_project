// client/src/pages/HomePage.tsx
import { Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import { useAudio } from '../hooks/useAudio';
import LastTracks from '../components/LastTracks';

export default function HomePage() {
  const { track, progress, emission } = useAudio();

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
        sx={{ backgroundColor: 'white', padding: 2, borderRadius: '10px', boxShadow: 6}}
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
                border: '1px solid #444',
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
          <Typography
            sx={{
              color: 'var(--color_05)',
              fontFamily: 'var(--font_01)',
              fontSize: 'x-large',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            RADIO FACE B
          </Typography>
          <Typography
            sx={{
              color: 'var(--color_05)',
              fontFamily: 'var(--font_02)',
              fontSize: 'large',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            groove, chill, unexpected
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Box
            sx={{
              mb: 3,
              borderRadius: 3,
              backdropFilter: 'blur(10px)',
              transition: 'all 0.6s ease',
            }}
          >
            <Stack
              direction="row"
              sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
                background: `${emission.background_color}`,
                border: '1px solid white',
                borderRadius: 2,
                padding: 1,
                px:2,
                mt: 1,
              }}
            >
              <Box
                component="img"
                src={emission.image}
                sx={{
                  width: '10%',
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />

              <Stack
                direction="column"
                sx={{
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                }}
              >
                <Typography
                  sx={{ color: 'white', fontWeight: 700, textShadow: '0 2px 2px rgba(0,0,0,0.6)' }}
                >
                  {emission.name}
                </Typography>
                <Typography sx={{ color: 'white', opacity: 0.8 }}>{emission.schedule}</Typography>
              </Stack>
            </Stack>
          </Box>
          <LastTracks compact />
        </Grid>
      </Grid>
    </Box>
  );
}
