import { Box, Stack, Typography, Button, Divider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

export default function Presentation() {
  const radioTypoSxH2 = {
    fontFamily: 'var(--font_02)',
    fontWeight: 'bold',
    fontSize: { xs: 'large', sm: 'x-large' },
    color: 'var(--color_05)',
  };

  const radioTypoSxP = {
    fontFamily: 'var(--font_04)',
    fontSize: 'medium',
  };

  const radioDividerSx = {
    my: 3,
  };

  return (
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
            sx={{
              fontFamily: 'var(--font_01)',
              fontWeight: 'bold',
              fontSize: { xs: 'x-large', sm: 'xx-large' },
              color: 'var(--color_05)',
              textAlign: 'center',
              mb: 1.5,
            }}
          >
            BIENVENUE SUR RADIO FACE B
          </Typography>
        </Box>
        <Box
          component="img"
          src="/images/david-bowie-DJ-1200-500px.jpg"
          alt="Radio Face B"
          sx={{ width: '100%' }}
        />
        <Divider sx={radioDividerSx} />
        <Stack spacing={1.5} sx={{ my: 2, alignItems: 'flex-start' }}>
          <Typography sx={radioTypoSxH2}>UNE WEB RADIO DE OUF</Typography>
          <Typography sx={radioTypoSxP}>
            <strong>Radio Face B</strong> est une web-radio <strong>Groove, Chill, Inattendu</strong>
          </Typography>
          <Typography sx={radioTypoSxP}>
            📻 100 % Musicale, 7 jours sur 7, 24 heures sur 24, garantie <strong>sans publicité</strong> 💥 Pour
            groover où vous voulez ! Quand vous voulez ! 🌴 .
          </Typography>
          <Typography sx={radioTypoSxP}>
            ✊ Indépendante, made in Aubervilliers (93), faites à la main par <strong>BIG Julius</strong>, DJ et
            digger obsessionnel de musique.
          </Typography>
          <Box sx={{ pt: 2 }}>
            <Button
              variant="outlined"
              component={Link}
              to="/comment_ecouter"
              sx={{
                color: 'var(--color_04)',
                borderColor: 'var(--color_04)',

                '&:hover': {
                  borderColor: 'var(--color_05)',
                  color: 'var(--color_05)',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                },
              }}
            >
              COMMENT ECOUTER FACE B ?
            </Button>
          </Box>
        </Stack>

        <Divider sx={radioDividerSx} />

        <Stack spacing={1.5} sx={{ my: 2, alignItems: 'flex-start' }}>
          <Typography sx={radioTypoSxH2}>👨‍🎤 UNE PROGRAMMATION ÉCLECTIQUE GROOVE</Typography>
          <Typography sx={radioTypoSxP}>
            Une programmation <strong>mijotée avec beaucoup d’Amour</strong> qui explore tous les territoires du 
            <strong> groove</strong> :
          </Typography>
          <Typography
            sx={{
              ...radioTypoSxP,
              whiteSpace: 'pre-line',
            }}
          >
            {`> Soul, Funk
              >> Rap, Hip-Hop
              >>> Blues, Jazz
              >>>> Reggae, Dub
              >>>>> Afro, Latino
              >>>>>> Pop, Folk
              >>>>>>> Rock, Punk
              >>>>>>>> Disco, House
              >>>>>>>>> Techno, Downtempo
              >>>>>>>>>> et bien plus si affinités...
            `}
          </Typography>
          <Typography sx={radioTypoSxP}>
            Un programmation humaine qui suit un cycle circadien parfait pour vous accompagner tout
            au long de votre journée
          </Typography>

          <Box sx={{ pt: 2 }}>
            <Button
              variant="outlined"
              component={Link}
              to="/grille"
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
              DÉCOUVRIR LA GRILLE DES PROGRAMMES
            </Button>
          </Box>
        </Stack>

        <Divider sx={radioDividerSx} />

        <Stack spacing={1.5} sx={{ my: 2, alignItems: 'flex-start' }}>
          <Typography sx={radioTypoSxH2}>🖭 DES MIXTAPES IRRÉSISTIBLES</Typography>
          <Typography sx={radioTypoSxP}>
            🎧 Radio Face B, c’est également un réservoir de <strong>Mixtapes</strong> toutes plus <strong>délicieuses</strong> à
            écouter les unes que les autres.
          </Typography>
          <Typography sx={radioTypoSxP}>
            Classée par styles, <strong>vous trouverez votre groove</strong> 😎 Ne boudez pas votre plaisir ! It’s
            <strong> only for your ears</strong> !
          </Typography>
          <Box sx={{ pt: 2 }}>
            <Button
              variant="outlined"
              component={Link}
              to="/mixtapes"
              sx={{
                color: 'var(--color_03)',
                borderColor: 'var(--color_03)',

                '&:hover': {
                  borderColor: 'var(--color_05)',
                  color: 'var(--color_05)',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                },
              }}
            >
              EXPLORER LES MIXTAPES
            </Button>
          </Box>
        </Stack>

        <Divider sx={radioDividerSx} />

        <Stack
          spacing={1.5}
          sx={{
            my: 2,
            py: 2,
            px: 2,
            alignItems: 'center',
            border: '1px dashed black',
            borderRadius: 2,
          }}
        >
          <Typography sx={radioTypoSxH2}>RESTONS CONNECTÉS</Typography>
          <Typography
            sx={{
              ...radioTypoSxP,
              textAlign: 'center',
            }}
          >
            Pour <strong>rester informé de nos actualités</strong>, inscrivez vous à notre newsletter
          </Typography>
          <Box sx={{ py: 1 }}>
            <Button
              variant="outlined"
              component={Link}
              to="/newsletter"
              sx={{
                color: 'var(--color_02)',
                borderColor: 'var(--color_02)',

                '&:hover': {
                  borderColor: 'var(--color_05)',
                  color: 'var(--color_05)',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                },
              }}
            >
              S’INSCRIRE A LA NEWSLETTER
            </Button>
          </Box>
          <Typography sx={{
              ...radioTypoSxP,
              textAlign: 'center',
            }}>
            Pour que les Groove se propage, <strong>suivez nous sur Instagram</strong>
          </Typography>

          <Button
            component="a"
            href="https://www.instagram.com/radiofaceb/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#C13584',
            }}
          >
            <InstagramIcon sx={{ fontSize: 60 }} />
          </Button>
        </Stack>

        <Divider sx={radioDividerSx} />


      </Box>
    </Stack>
  );
}
