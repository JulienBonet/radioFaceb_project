import { Stack } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const MenuDesktop = () => {
  return (
    <Stack
      direction="row"
      sx={{
        height: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'sticky',
        top: 60,
        zIndex: 1300,
      }}
    >
      <ButtonGroup
        variant="text"
        aria-label="Menu principal"
        sx={{
          '& .MuiButton-root': {
            fontFamily: 'var(--font_01)',
            fontWeight: 'bold',

            color: 'white',
            textTransform: 'none',

          },
          '& .MuiButtonGroup-grouped': {
            borderColor: 'white', // <-- ça corrige les séparateurs
          },
        }}
      >
        <Button component={Link} to="/">
          PLAYER
        </Button>
        <Button component={Link} to="/grille">
          GRILLE
        </Button>
        <Button component={Link} to="/historique">
          C'ETAIT QUOI ?
        </Button>
        <Button component={Link} to="/mixtapes">
          MIXTAPES
        </Button>
        <Button component={Link} to="/presentation">
          LA RADIO
        </Button>
        <Button component={Link} to="/comment_ecouter">
          COMMENT ECOUTER
        </Button>
        <Button component={Link} to="/contact">
          CONTACT
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

export default MenuDesktop;
