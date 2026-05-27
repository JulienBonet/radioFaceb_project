import { Box, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuBurger from '../components/MenuBuger';
import { useResponsive } from '../hooks/useResponsive';

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
      {!isDesktop && <MenuBurger />}

      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <Box
          component="img"
          src="/images/radio_face_b_logo.png"
          alt="Radio Face B"
        />
      </Link>
    </Stack>
  );
};

export default Header;