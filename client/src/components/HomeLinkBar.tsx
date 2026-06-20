import { Box, Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function HomeLinkBar() {

  return (
    <Stack
      sx={{
        mt: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
      }}
    >
      {/* Instagram */}
      <Button
        component="a"
        href="https://www.instagram.com/radiofaceb/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          color: '#C13584',
        }}
      >
        <InstagramIcon sx={{ fontSize: { xs: 28, sm: 24, md: 20 }, }} />
      </Button>

      {/* Deezer */}
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
          src="/images/deezer_logo.png"
          alt="Écouter Radio Face B sur Deezer"
          sx={{
            width: 'auto',
            height: { xs: 26, sm: 22, md: 18 },
          }}
        />
      </Button>

      {/* Newsletter */}
      <Button component={Link} to="/newsletter">
        <EmailOutlinedIcon sx={{ fontSize: { xs: 28, sm: 24, md: 20 }, }} />
      </Button>

    </Stack>
  );
}
