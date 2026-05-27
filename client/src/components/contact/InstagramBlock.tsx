import { Button, Paper, Stack, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function InstagramBlock() {
  return (
    <Paper
      elevation={8}
      sx={{
        p: 4,
        borderRadius: 4,
        width: '90%',
        maxWidth: 900,
        mt: 4,
        textAlign: 'center',
      }}
    >
      <Stack spacing={2} sx={{ alignItems: 'center' }}>
        <Typography
          sx={{
            fontFamily: 'var(--font_01)',
            fontWeight: 'bold',
            fontSize: 'x-large',
            color: 'var(--color_05)',
          }}
        >
          SUIVEZ NOUS SUR INSTAGRAM
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
    </Paper>
  );
}
