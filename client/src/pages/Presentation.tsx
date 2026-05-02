import { Box, Typography } from '@mui/material';

export default function Presentation() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'black',
          mt: 15,
        }}
      >
        <Typography
          sx={{
            fontize: 'xxx-large',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            height: '40px',
          }}
        >
          PAGE PRESENTATION
        </Typography>
      </Box>
    </>
  );
}