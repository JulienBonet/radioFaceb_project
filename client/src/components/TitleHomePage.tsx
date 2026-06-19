import { Typography, Divider } from '@mui/material';

const TitleHomePage = () => {
  return (
    <>
      <Typography
        component="h1"
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
        component="h2"
        sx={{
          color: 'var(--color_05)',
          fontFamily: 'var(--font_02)',
          fontSize: 'large',
          fontWeight: 'bold',
          textAlign: 'center',
          display: {
            xs: 'none',
            sm: 'block',
          },
        }}
      >
        groove, chill, unexpected
      </Typography>
      <Divider sx={{ my: 2 }} />
    </>
  );
};

export default TitleHomePage;
