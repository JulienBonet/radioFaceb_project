import { Box, Typography, Divider } from '@mui/material';
import type { Mixtape } from '../../api/mixtape.api';
import MixtapeCard from './MixtapeCard';

type Props = {
  title: string;
  mixtapes: Mixtape[];
  onSelect?: (id: number) => void;
};

const MixtapeRow = ({ title, mixtapes, onSelect }: Props) => {
  return (
    <Box sx={{ mb: 3,}}>
      <Typography
        sx={{
          fontFamily: 'var(--font_02)',
          fontWeight: 'bold',
          mb: 1,
          px: 1,
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: 1.5,
          overflowX: 'auto',
          px: 1,
          width: '100%',
          maxWidth: '100%', 

          WebkitOverflowScrolling: 'touch', 
          scrollBehavior: 'smooth',
          scrollSnapType: 'x mandatory',

          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {mixtapes.map((m) => (
          <Box
            key={m.id}
            sx={{
              scrollSnapAlign: 'start',
            }}
          >
            <MixtapeCard mixtape={m} onClick={onSelect} />
          </Box>
        ))}
        
      </Box>
      <Divider sx={{ my: 2 }} />
    </Box>
  );
};

export default MixtapeRow;
