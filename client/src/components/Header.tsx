import { Box, Stack } from '@mui/material';
import MenuBurger from "../components/MenuBuger";
import { useResponsive } from '../hooks/useResponsive';
// import { Button } from '@mui/material';
// import { Link } from 'react-router-dom';

const Header = () => {
  const { isDesktop } = useResponsive();
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
      {!isDesktop && <MenuBurger/>}
      <Box component="img" src="/images/radio_face_b_logo.png" alt="Radio Face B" />
      
    </Stack>
  );
};

export default Header;
