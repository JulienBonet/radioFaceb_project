import { useState, useEffect, useRef } from 'react';
import { Grid, Box, Stack, Button, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { getScheduleByDay } from '../utils/getScheduleByDay';
import EmissionBlock from '../components/EmissionBlock';

const DAYS = [
  { label: 'LUNDI', value: 1 },
  { label: 'MARDI', value: 2 },
  { label: 'MERCREDI', value: 3 },
  { label: 'JEUDI', value: 4 },
  { label: 'VENDREDI', value: 5 },
  { label: 'SAMEDI', value: 6 },
  { label: 'DIMANCHE', value: 0 },
];

export default function Grille() {
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());

  const schedule = getScheduleByDay(selectedDay);
  const selectedDayLabel = DAYS.find((d) => d.value === selectedDay)?.label;

  const buttonRefs = useRef(new Map<number, HTMLButtonElement | null>());

  const setButtonRef = (index: number) => (el: HTMLButtonElement | null) => {
    buttonRefs.current.set(index, el);
  };

  const selectedDayIndex = DAYS.findIndex((d) => d.value === selectedDay);

  // ⭐ Auto-center fiable
  useEffect(() => {
    const el = buttonRefs.current.get(selectedDayIndex);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, [selectedDay, selectedDayIndex]);

  return (
    <Box>
      {/* MENU JOURS */}

      <Stack
        direction="row"
        sx={{
          height: 50,
          backgroundColor: 'var(--color_05)',
          alignItems: 'center',
          position: 'sticky',
          top: 60,
          zIndex: 1300,

          overflowX: 'auto',
          whiteSpace: 'nowrap',

          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth',

          px: 1,

          '&::-webkit-scrollbar': {
            display: 'none',
          },

          justifyContent: { xs: 'flex-start', md: 'center' },

          // ✅ keyframes ici
          '@keyframes fadeSlide': {
            from: {
              opacity: 0,
              transform: 'translateY(-6px)',
            },
            to: {
              opacity: 1,
              transform: 'translateY(0)',
            },
          },
        }}
      >
        <Stack direction="row" spacing={1}>
          {DAYS.map((day, index) => {
            const isActive = selectedDay === day.value;

            return (
              <Button
                key={day.label}
                ref={setButtonRef(index)}
                onClick={() => setSelectedDay(day.value)}
                sx={{
                  flexShrink: 0,
                  minWidth: 90,
                  fontFamily: 'var(--font_04)',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  color: isActive ? 'var(--color_05)' : '#fff',
                  backgroundColor: isActive ? '#fff' : 'transparent',
                  borderRadius: 0,

                  // ⭐ animation cascade
                  animation: 'fadeSlide 0.4s ease-out',
                  animationFillMode: 'both',
                  animationDelay: `${index * 40}ms`,
                }}
              >
                {day.label}
              </Button>
            );
          })}
        </Stack>
      </Stack>

      {/* CONTENT */}
      <Stack sx={{ alignItems: 'center', width: '100%' }}>
        <Stack
          sx={{
            backgroundColor: 'white',
            maxWidth: '900px',
            mt: 3,
            mb: '120px',
            mx: 2,
            p: 3,
            borderRadius: '10px',
            boxShadow: 6,

            animation: 'contentFade 0.35s ease',

            '@keyframes contentFade': {
              from: {
                opacity: 0,
                transform: 'translateY(8px)',
              },
              to: {
                opacity: 1,
                transform: 'translateY(0)',
              },
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: 'var(--font_01)',
              fontWeight: 'bold',
              color: 'var(--color_05)',
              fontSize: 'x-large',
              textAlign: 'center',
            }}
          >
            {selectedDayLabel}
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Grid container spacing={3}>
            {schedule.map((block, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <EmissionBlock block={block} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Box>
  );
}
