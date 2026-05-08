import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography, Divider } from '@mui/material';
import { useMixtape } from '../hooks/useMixtape';
import { useAudio } from '../hooks/useAudio';
import MixtapePlayer from '../components/players/MixtapePlayer';

const CLOUDINARY_BASE_URL = import.meta.env.VITE_CLOUDINARY_BASE_URL as string;

export default function MixtapeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { mixtape, loading, error } = useMixtape(Number(id));
  const { stop, setAudioMode } = useAudio();
  const [playerStarted, setPlayerStarted] = useState(false);

  // stop radio flux
  useEffect(() => {
    return () => {
      setAudioMode(null);
    };
  }, [setAudioMode]);

  if (loading) return <div>Loading...</div>;
  if (error || !mixtape) return <div>Error</div>;

  return (
    <Box sx={{ px: 2, py: 3 }}>
      <Stack
        sx={{
          maxWidth: 800,
          mx: 'auto',
          backgroundColor: 'white',
          padding: 2,
          mb: '120px',
          borderRadius: '10px',
          boxShadow: 6,

          animation: 'contentFade 0.35s ease',

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
        {/* BTN retour */}
        <Box
          onClick={() => navigate(-1)}
          sx={{
            mb: 2,
            cursor: 'pointer',
            width: 'fit-content',

            fontFamily: 'var(--font_04)',
            fontSize: '0.9rem',
            color: 'gray',

            transition: '0.2s',

            '&:hover': {
              opacity: 0.7,
              transform: 'translateX(-2px)',
            },
          }}
        >
          ← Back
        </Box>

        {/* COVER */}
        <Stack
          sx={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: `${mixtape.genre_color}`,
            py: 1,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
        >
          <Box
            component="img"
            src={`${CLOUDINARY_BASE_URL}/radio/mixtapes/${mixtape.cover}`}
            sx={{
              width: '100%',
              maxWidth: '300px',
              borderRadius: 2,
              objectFit: 'cover',
            }}
          />
        </Stack>
        <Stack
          spacing={1}
          sx={{
            mt: 0,
            borderLeft: `1px dashed ${mixtape.genre_color}`,
            borderRight: `1px dashed ${mixtape.genre_color}`,
            borderBottom: `1px dashed ${mixtape.genre_color}`,
            padding: 2,
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          }}
        >
          {/* TITLE + GENRE */}
          <Stack sx={{ alignItems: 'center', justifyContent: 'center' }}>
            <Typography
              sx={{
                fontFamily: 'var(--font_01)',
                fontSize: 'xx-large',
              }}
            >
              {mixtape.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'var(--font_05)',
                fontSize: 'large',
                textAlign: 'center',
              }}
            >
              Mixtape: {mixtape.genre_name}
            </Typography>
            <Divider sx={{ my: 2, width: '100%' }} />
          </Stack>

          <Stack spacing={2}>
            {/* PRESENTATION */}
            <Typography
              sx={{
                fontFamily: 'var(--font_04)',
                lineHeight: 1.6,
                pb: 1,
              }}
              dangerouslySetInnerHTML={{ __html: mixtape.presentation }}
            />

            {/* PLAYER */}
            {!playerStarted ? (
              <Box
                onClick={() => {
                  stop();
                  setAudioMode('mixtape');
                  setPlayerStarted(true);
                }}
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: 120,
                  overflow: 'hidden',
                  borderRadius: 2,
                  cursor: 'pointer',

                  transition: '0.25s',

                  '&:hover .mixtape-overlay': {
                    backgroundColor: 'rgba(0,0,0,0.45)',
                  },

                  '&:hover .mixtape-play': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                {/* BG COVER */}
                <Box
                  component="img"
                  src={`${CLOUDINARY_BASE_URL}/radio/mixtapes/${mixtape.cover}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(0.4) blur(2px)',
                    transform: 'scale(1.05)',
                  }}
                />

                {/* OVERLAY */}
                <Stack
                  className="mixtape-overlay"
                  sx={{
                    position: 'absolute',
                    inset: 0,

                    backgroundColor: 'rgba(0,0,0,0.6)',
                    transition: '0.25s',

                    justifyContent: 'center',
                    alignItems: 'center',

                    color: 'white',
                  }}
                >
                  {/* PLAY BUTTON */}
                  <Box
                    className="mixtape-play"
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',

                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',

                      backgroundColor: mixtape.genre_color,

                      fontSize: '2rem',
                      mb: 1,

                      transition: '0.25s',
                      boxShadow: 4,
                    }}
                  >
                    ▶
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: 'var(--font_04)',
                      fontWeight: 'bold',
                      letterSpacing: 1,
                    }}
                  >
                    LISTEN TO MIXTAPE
                  </Typography>
                </Stack>
              </Box>
            ) : (
              <MixtapePlayer platform={mixtape.platform} embedUrl={mixtape.embed_url} />
            )}

            {/* TRACKLIST */}
            <Divider sx={{ my: 2, width: '100%' }} />
            <Box>
              <Typography
                sx={{
                  fontFamily: 'var(--font_04)',
                  fontWeight: 'bold',
                  mb: 1,
                }}
              >
                Tracklist :
              </Typography>

              <Typography
                sx={{ fontFamily: 'var(--font_05)' }}
                dangerouslySetInnerHTML={{ __html: mixtape.tracklist }}
              />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
