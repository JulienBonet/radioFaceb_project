import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import { usePWAInstall } from "../hooks/usePWAInstall";

export default function InstallPWAButton() {
    const { install } = usePWAInstall();

  return (
    <Button
      onClick={install}
      startIcon={<DownloadIcon />}
      sx={{
        color: 'var(--color_02)',
        border: '1px solid var(--color_02)',
        textTransform: 'none',
        fontWeight: 500,
        borderRadius: 2,

        '&:hover': {
          backgroundColor: 'rgba(0,0,0,0.04)',
        },
      }}
    >
      INSTALLER LA WEB APP
    </Button>
  );
}
