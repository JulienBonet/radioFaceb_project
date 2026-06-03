import { Box, Stack, Typography, Button, Divider } from '@mui/material';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function Presentation() {
  const ecouterTypoSxH2 = {
    fontFamily: 'var(--font_02)',
    fontWeight: 'bold',
    fontSize: { xs: 'large', sm: 'x-large' },
    color: 'black',
  };

  const ecouterTypoSxP = {
    fontFamily: 'var(--font_04)',
    fontSize: 'medium',
  };

  const ecouterDividerSx = {
    borderBottomWidth: 2,
    borderColor: 'var(--color_05)',
    borderStyle: 'dashed',
    my: 4,
  };

  const ecouterLinkStyle = {
    color: 'inherit',
    fontWeight: 'bold',
  };

  return (
    <>
      <Seo
        title="Comment écouter Radio Face B ?"
        description="Comment écouter Radio Face B en toute simplicité ? | Où écouter Radio Face B Facilement ? | lecteur | Deezer | applis"
      />
      <main>
        <Stack sx={{ alignItems: 'center', width: '100%' }}>
          <Box
            sx={{
              backgroundColor: 'white',

              maxWidth: '900px',
              mt: 3,
              mb: '120px',
              mx: 2,
              p: 3,
              borderRadius: '10px',
              boxShadow: 6,

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
            <Box>
              <Typography
              component="h1"
                sx={{
                  fontFamily: 'var(--font_01)',
                  fontWeight: 'bold',
                  fontSize: { xs: 'x-large', sm: 'xx-large' },
                  color: 'var(--color_05)',
                  textAlign: 'center',
                  mb: 1.5,
                }}
              >
                COMMENT ÉCOUTER RADIO FACE B
              </Typography>
              <Typography
                sx={{
                  ...ecouterTypoSxH2,
                  textAlign: 'center',
                  mb: 2,
                }}
              >
                EN TOUTE SIMPLICITÉ
              </Typography>
            </Box>
            <Box
              component="img"
              src="/images/listen_radio_face_b_12_5.jpg"
              alt="écouter Radio Face B"
              sx={{ width: '100%' }}
            />
            <Divider sx={{ my: 3 }} />
            <Stack spacing={1.5} sx={{ my: 2, alignItems: 'flex-start' }}>
              <Typography sx={ecouterTypoSxP}>
                Il est très simple d’écouter Radio Face B.
              </Typography>
              <Typography sx={ecouterTypoSxP}>
                Vous pouvez le faire par différents moyens :
              </Typography>
              <Box
                component="ul"
                sx={{
                  ...ecouterTypoSxP,
                  pl: 4,
                  listStyleType: 'disc',

                  '& li': {
                    mb: 1,
                  },
                }}
              >
                <li>
                  <a href="#site-player" style={ecouterLinkStyle}>
                    Directement sur le site de Radio Face B
                  </a>
                </li>
                <li>
                  <a href="#media-player" style={ecouterLinkStyle}>
                    Dans votre Media Player
                  </a>
                </li>
                <li>
                  <a href="#deezer" style={ecouterLinkStyle}>
                    Sur Deezer
                  </a>
                </li>
              </Box>
            </Stack>

            <Divider sx={ecouterDividerSx} />

            <Stack id="site-player" spacing={1.5} sx={{ my: 2, alignItems: 'flex-start' }}>
              <Typography component="h2" sx={ecouterTypoSxH2}>
                ÉCOUTER RADIO FACE B{' '}
                <Box
                  component="span"
                  sx={{
                    fontWeight: 'bold',
                    color: 'var(--color_07)',
                  }}
                >
                  DIRECTEMENT SUR LE SITE
                </Box>
              </Typography>
              <Typography sx={ecouterTypoSxP}>
                &gt; Il vous suffit d’<strong>enclencher le player</strong> à votre disposition sur
                la
                {'  '}
                <Link to="/" style={ecouterLinkStyle}>
                  page d’accueil du site
                </Link>
                .
              </Typography>
            </Stack>

            <Divider sx={ecouterDividerSx} />

            <Stack id="media-player" spacing={1.5} sx={{ my: 2, alignItems: 'flex-start' }}>
              <Typography component="h2" sx={ecouterTypoSxH2}>
                ÉCOUTER RADIO FACE B{' '}
                <Box
                  component="span"
                  sx={{
                    fontWeight: 'bold',
                    color: 'var(--color_07)',
                  }}
                >
                  DANS VOTRE MEDIA PLAYER
                </Box>
              </Typography>
              <Typography sx={ecouterTypoSxP}>
                &gt; Vous pouvez écouter Radio Face B avec n'importe quel{' '}
                <strong>Media Player</strong> (
                <Box
                  component="span"
                  sx={{
                    fontStyle: 'italic',
                  }}
                >
                  VLC, iTunes, Windows Media Player, ...
                </Box>
                ), en <strong>copiant-collant</strong> l'url du stream directement dans la section
                dédiée de votre lecteur,
              </Typography>
              <Button
                variant="outlined"
                onClick={async () => {
                  await navigator.clipboard.writeText('https://ecmanager6.pro-fhi.net:1405/stream');

                  toast.success('Adresse du stream copiée dans le presse-papiers');
                }}
                sx={{
                  color: 'var(--color_05)',
                  borderColor: 'var(--color_05)',

                  '&:hover': {
                    borderColor: 'var(--color_02)',
                    color: 'var(--color_02)',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                  },
                }}
              >
                📋 Copier l'adresse du stream
              </Button>
            </Stack>

            <Divider sx={ecouterDividerSx} />

            <Stack id="deezer" spacing={1.5} sx={{ my: 2, alignItems: 'flex-start' }}>
              <Typography component="h2" sx={ecouterTypoSxH2}>
                ÉCOUTER RADIO FACE B{' '}
                <Box
                  component="span"
                  sx={{
                    fontWeight: 'bold',
                    color: 'var(--color_07)',
                  }}
                >
                  SUR DEEZER
                </Box>
              </Typography>
              <Typography sx={ecouterTypoSxP}>
                &gt; Vous pouvez écouter Radio Face B sur{' '}
                <a
                  href="https://www.deezer.com/search/radio%20face%20b/livestream"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={ecouterLinkStyle}
                >
                  DEEZER.
                </a>
              </Typography>
              <Typography sx={ecouterTypoSxP}>
                – Soit vous tapez{' '}
                <Box
                  component="span"
                  sx={{
                    fontStyle: 'italic',
                  }}
                >
                  Radio Face B
                </Box>{' '}
                dans la barre de recherche de Deezer et vous retrouverez notre stream dans l’onglet
                radio.
              </Typography>
              <Typography sx={ecouterTypoSxP}>
                – Soit vous cliquez sur le bouton ci dessous et vous y accèderez directement
              </Typography>
              <Stack sx={{ alignItems: 'center', width: '100%', py: 2 }}>
                <Button
                  component="a"
                  href="https://www.deezer.com/search/radio%20face%20b/livestream"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    p: 0,
                    minWidth: 'auto',
                  }}
                >
                  <Box
                    component="img"
                    src="/images/deezer_logo_2_.png"
                    alt="Écouter Radio Face B sur Deezer"
                    sx={{
                      width: 180,
                      height: 'auto',
                    }}
                  />
                </Button>
              </Stack>
            </Stack>
            <Divider sx={{ my: 3 }} />
          </Box>
        </Stack>
      </main>
    </>
  );
}
