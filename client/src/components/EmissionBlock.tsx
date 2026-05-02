import { useState } from 'react';
import { Box, Typography, Stack, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { ScheduleBlock } from '../config/schedule';

export default function EmissionBlock({ block }: { block: ScheduleBlock }) {
  const { emission, start, end } = block;
  const [open, setOpen] = useState(false);

  return (
    <Stack
      spacing={2}
      sx={{
        background: emission.background_color,
        borderRadius: '10px',
        p: 2,
        alignItems: 'center',
      }}
    >
      {/* IMAGE */}
      <Box
        component="img"
        src={emission.image}
        alt={emission.name}
        sx={{
          width: '100%',
          objectFit: 'cover',
          borderRadius: 2,
          boxShadow: 4,
          filter: 'brightness(1.05)',
          display: 'block',
        }}
      />

      {/* CONTENU */}
      <Stack spacing={1} sx={{ alignItems: 'center', color: 'white' }}>
        <Typography sx={{ fontSize: 'large', fontWeight: 700 }}>
          {start} - {end}
        </Typography>

        <Typography
          sx={{
            fontFamily: 'var(--font_04)',
            fontSize: 'x-large',
            fontWeight: 'bold',
            textShadow: '0 2px 1px rgba(0,0,0,0.6)',
          }}
        >
          {emission.name}
        </Typography>

        {/* COLLAPSE */}
        <Collapse
          in={open}
          timeout={300}
          sx={{
            '& .MuiCollapse-wrapperInner': {
              animation: open ? 'fadeIn 0.3s ease' : 'none',
            },
            '@keyframes fadeIn': {
              from: {
                opacity: 0,
                transform: 'translateY(-5px)',
              },
              to: {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
        >
          <Stack
            sx={{
              border: '1px dashed white',
              borderRadius: 1,
              p: 1,
              boxShadow: 1,
              mt: 1,
            }}
          >
            <Typography
              sx={{
                fontFamily: 'var(--font_05)',
                fontSize: 'small',
                fontWeight: 500,
                textAlign: 'center',
              }}
            >
              {emission.styles}
            </Typography>
          </Stack>
        </Collapse>

        {/* ICON */}
        <IconButton
          onClick={() => setOpen(!open)}
          sx={{
            color: 'white',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <ExpandMoreIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}
