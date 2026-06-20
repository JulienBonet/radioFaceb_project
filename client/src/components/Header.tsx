import { Box, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuBurger from '../components/MenuBuger';
import { useResponsive } from '../hooks/useResponsive';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { usePWAInstall } from '../hooks/usePWAInstall';

const Header = () => {
  const { isDesktop } = useResponsive();
  const { isInstallable, install, isStandalone } = usePWAInstall();

  return (
    <Stack direction="row" sx={{ height: 60, backgroundColor: 'black', position: 'sticky', top: 0, zIndex: 1300, }}>
      {/* LEFT */}
      <Box sx={{ width: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {!isDesktop && <MenuBurger />}
      </Box>

      {/* CENTER */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Box
            component="img"
            src="/images/radio_face_b_logo.png"
            alt="Radio Face B"
            sx={{ height: 40 }}
          />
        </Link>
      </Box>

      {/* RIGHT */}
      <Box
        sx={{
          width: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isInstallable && !isStandalone && (
          <Tooltip title="Installer la Web App Radio Face B">
            <IconButton
              onClick={install}
              sx={{
                color: 'white',
                '&:hover': {
                  color: 'var(--color_06)',
                },
              }}
            >
              <InstallMobileIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </Stack>
  );
};

export default Header;
