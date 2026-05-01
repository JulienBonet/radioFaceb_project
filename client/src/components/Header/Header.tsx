import { Box, Stack } from '@mui/material';

const Header = () => {
  return (
    <Stack
      direction="row"
      sx={{
        height: 50,
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
