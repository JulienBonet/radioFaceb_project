import { Typography, Divider } from '@mui/material';

const TitleHomePage = () => {
  return (
    <>
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
    </>
  );
};

export default TitleHomePage;
