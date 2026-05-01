import { Box, Stack } from '@mui/material';
// import { Button } from '@mui/material';
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Stack
      direction="row"
      sx={{
        height: 60,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1300,
      }}
    >
      <Box component="img" src="/images/radio_face_b_logo.png" alt="Radio Face B" />
    </Stack>
  );
};

export default Header;
