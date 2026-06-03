import { Box, Stack, Typography } from '@mui/material';
import HistoryTrack from '../components/HistoryTracks';
import Seo from '../components/Seo';

export default function Historique() {


  return (
    <>
      <Seo
        title="Radio Face B | Historique des titres diffusés"
        description="Retrouvez un titre diffusé sur Radio Face B"
      />
      <main>
        <Stack
          sx={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            px: { xs: 2, sm: 3 },
            pb: '120px',
            boxSizing: 'border-box',
          }}
        >
          <Box
            sx={{
              width: { xs: '90%', sm: '100%' },
              maxWidth: '900px',
              p: 2,
              my: 3,
              borderRadius: 3,
              background: 'white',
              boxShadow: { xs: 'none', sm: 6 },

              animation: 'contentFade 1s ease',

              '@keyframes contentFade': {
                from: {
                  opacity: 0,
                  transform: 'translateY(8px)',
                },
                to: {
                  opacity: 1,
                  transform: 'translateY(0)',
                },
              },
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontFamily: 'var(--font_01)',
                fontWeight: 'bold',
                fontSize: { xs: 'large', sm: 'x-large' },
                color: 'var(--color_05)',
                textAlignLast: 'center',
                mb: 2,
              }}
            >
              C'ÉTAIT QUOI CE TITRE ?
            </Typography>
            <HistoryTrack />
          </Box>
        </Stack>
      </main>
    </>
  );
}
