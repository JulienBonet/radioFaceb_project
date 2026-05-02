import { useState } from 'react';
import { Grid, Box, Stack, Button, ButtonGroup, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import { getScheduleByDay } from '../utils/getScheduleByDay';
import EmissionBlock from '../components/EmissionBlock';
// import { Link } from 'react-router-dom';

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

  return (
    <Box>
      {/* MENU JOURS */}
      <Stack
        direction="row"
        sx={{
          height: 50,
          backgroundColor: 'var(--color_05)',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'sticky',
          top: 60,
          zIndex: 1300,
        }}
      >
        <ButtonGroup
          variant="text"
          aria-label="Menu Grille"
          sx={{
            '& .MuiButton-root': {
              fontFamily: 'var(--font_04)',
              fontWeight: 'bold',
              color: 'white',
              textTransform: 'none',
            },
            '& .MuiButtonGroup-grouped': {
              borderColor: 'white',
            },
          }}
        >
          {DAYS.map((day) => {
            const isActive = selectedDay === day.value;

            return (
              <Button
                key={day.label}
                variant={isActive ? 'contained' : 'text'}
                onClick={() => setSelectedDay(day.value)}
                sx={{
                  ...(isActive && {
                    backgroundColor: 'white',
                    color: '#000',
                    WebkitTextFillColor: 'black',
                    '&:hover': {
                      backgroundColor: '#f0f0f0',
                    },
                  }),
                }}
              >
                {day.label}
              </Button>
            );
          })}
        </ButtonGroup>
      </Stack>

      {/* LISTE DES EMISSIONS */}
      <Stack
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Stack
          sx={{
            backgroundColor: 'white',
            mt: 2,
            mb: '120px',
            p: 3,
            borderRadius: '10px',
            boxShadow: 6,
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
          <Box
            sx={{
              maxWidth: '900px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 3,
              mx: 'auto',
            }}
          >
            <Grid container spacing={3}>
              {schedule.map((block, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                  <EmissionBlock block={block} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
