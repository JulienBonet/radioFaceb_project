import { Box, Typography } from '@mui/material';
import MenuDesktop from '../components/MenuDesktop';

export default function Historique() {
  return (
    <>
      <MenuDesktop />
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
          PAGE HISTORIQUE
        </Typography>
      </Box>
    </>
  );
}