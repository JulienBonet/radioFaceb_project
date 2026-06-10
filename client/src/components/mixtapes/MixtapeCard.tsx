// client/src/components/mixtapes/MixtapeCard.tsx
const CLOUDINARY_BASE_URL = import.meta.env.VITE_CLOUDINARY_BASE_URL as string;
import { Box, Stack, Typography } from '@mui/material';
import type { Mixtape } from '../../types/mixtape';

type Props = {
  mixtape: Mixtape;
  onClick?: (id: number) => void;
};

const MixtapeCard = ({ mixtape, onClick }: Props) => {
  return (
    <Box
      onClick={() => onClick?.(mixtape.id)}
      sx={{
        width: 200,
        flexShrink: 0,
        cursor: 'pointer',
        borderRadius: 2,
        overflow: 'hidden',
        backgroundColor: `${mixtape.genre_color}`,
        border: '1px solid grey',
        transition: '0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      {/* COVER */}
      <Box
        component="img"
        src={`${CLOUDINARY_BASE_URL}/radio/mixtapes/${mixtape.cover}`}
        alt={mixtape.title}
        sx={{
          width: '100%',
          height: 200,
          objectFit: 'cover',
        }}
      />

      {/* INFO */}
      <Stack
        direction="column"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          py: 1,
          minHeight: 75,
        }}
      >
        <Typography variant="subtitle2" sx={{ color: 'white', fontFamily: 'var(--font_04)', px: 1, textAlign: 'center', fontWeight: 'bold' }}>
          {mixtape.title}
        </Typography>

        <Typography variant="caption" sx={{ color: 'white', fontFamily: 'var(--font_05)' }}>
          {mixtape.genre_name}
        </Typography>
      </Stack>
    </Box>
  );
};

export default MixtapeCard;
