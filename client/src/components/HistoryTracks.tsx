import { Box, Grid, Typography, Select, MenuItem, Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useEffect, useMemo, useState } from 'react';

interface Track {
  id: number;
  title: string;
  author: string;
  img_medium_url: string;
  ts: number;
}

export default function HistoryTracks() {
  const [grouped, setGrouped] = useState<Record<string, Record<string, Track[]>>>({});

  const [days, setDays] = useState<string[]>([]);
  const [selectedDay, setSelectedDay] = useState('');

  const [selectedHourManual, setSelectedHourManual] = useState<string | null>(null);

  const [mode, setMode] = useState<'live' | 'browse'>('live');

  const [initialized, setInitialized] = useState(false);

  // 🧠 GROUPING day -> hour
  const groupTracks = (tracks: Track[]) => {
    const result: Record<string, Record<string, Track[]>> = {};

    tracks.forEach((track) => {
      const d = new Date(track.ts);

      const dayKey = `${d.getFullYear()}-${(d.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${d.getDate().toString().padStart(2, '0')}`;

      const hourKey = d.getHours().toString().padStart(2, '0');

      if (!result[dayKey]) result[dayKey] = {};
      if (!result[dayKey][hourKey]) result[dayKey][hourKey] = [];

      result[dayKey][hourKey].push(track);
    });

    return result;
  };

  // 📡 FETCH + POLLING
  useEffect(() => {
    const fetchTracks = async () => {
      const res = await fetch(
        'https://ecmanager6.pro-fhi.net:1390/api/v2/history/?limit=500&server=1',
      );

      const data = await res.json();
      const tracks = data.results.slice(1);

      const groupedData = groupTracks(tracks);

      const sortedDays = Object.keys(groupedData).sort(
        (a, b) => new Date(b).getTime() - new Date(a).getTime(),
      );

      setGrouped(groupedData);
      setDays(sortedDays);

      // 🟢 INIT (une seule fois)
      if (!initialized) {
        const now = new Date();

        const currentDay = `${now.getFullYear()}-${(now.getMonth() + 1)
          .toString()
          .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;

        setSelectedDay(currentDay);
        setInitialized(true);
      }
    };

    fetchTracks();

    const interval = setInterval(fetchTracks, 5000);
    return () => clearInterval(interval);
  }, [initialized]);

  // 🕒 HOURS dérivées
  const hours = useMemo(() => {
    if (!selectedDay || !grouped[selectedDay]) return [];

    return Object.keys(grouped[selectedDay]).sort((a, b) => Number(b) - Number(a));
  }, [selectedDay, grouped]);

  // 🟢 LIVE TRACKS (10 derniers)
  const liveTracks = useMemo(() => {
    const all: Track[] = [];

    Object.values(grouped).forEach((day) => {
      Object.values(day).forEach((hourTracks) => {
        all.push(...hourTracks);
      });
    });

    return all.sort((a, b) => b.ts - a.ts).slice(0, 10);
  }, [grouped]);

  // 🟡 selected hour (browse mode safe)
  const selectedHour = useMemo(() => {
    if (!hours.length) return '';
    if (selectedHourManual && hours.includes(selectedHourManual)) {
      return selectedHourManual;
    }
    return hours[0];
  }, [hours, selectedHourManual]);

  // 🎵 TRACKS FINAL
  const tracks = mode === 'live' ? liveTracks : grouped[selectedDay]?.[selectedHour] || [];

  // 🎨 FORMATTERS
  const formatDay = (day: string) => {
    const d = new Date(day);
    return d.toLocaleDateString();
  };

  const formatHour = (hour: string) => {
    return `${hour}h - ${hour}h59`;
  };

  return (
    <Box
      sx={{
        border: '1px dashed #444',
        borderRadius: 2,
        p: 2,
        transition: 'all 300ms ease',
      }}
    >
      {/* 🎛 MODE SWITCH */}
      <Grid container spacing={1} sx={{ width: '100%' }}>
        <Grid size={{ xs: 12, md: 6 }} sx={{ minWidth: 0 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' },
              gap: 2,
              mb: 2,
            }}
          >
            <Button
              variant={mode === 'live' ? 'contained' : 'outlined'}
              onClick={() => setMode('live')}
              color="historyBtn"
            >
              Derniers Titres
            </Button>

            <Button
              variant={mode === 'browse' ? 'contained' : 'outlined'}
              onClick={() => setMode('browse')}
              color="historyBtn"
            >
              🔍 Rechercher
            </Button>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ minWidth: 0 }}>
          {mode === 'browse' && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-end' },
                gap: 2,
                mb: 2,
              }}
            >
              {/* DAY */}
              <Select
                value={selectedDay}
                onChange={(e) => {
                  setSelectedDay(e.target.value);
                  setSelectedHourManual(null);
                }}
                size="small"
              >
                {days.map((day) => (
                  <MenuItem key={day} value={day}>
                    {formatDay(day)}
                  </MenuItem>
                ))}
              </Select>

              {/* HOUR */}
              <Select
                value={selectedHour}
                onChange={(e) => setSelectedHourManual(e.target.value)}
                size="small"
                MenuProps={{
                  slotProps: {
                    paper: {
                      sx: { maxHeight: 300 },
                    },
                  },
                }}
              >
                {hours.map((h) => (
                  <MenuItem key={h} value={h}>
                    {formatHour(h)}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          )}
        </Grid>
      </Grid>

      <Divider sx={{ my: 1 }} />

      {/* 🎵 TRACK LIST */}
      {tracks.map((t) => (
        <Box key={t.id}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: { xs: 1, sm: 2} ,
              gap: 2,
            }}
          >
            <Box
              component="img"
              src={t.img_medium_url || '/images/cover_default.jpg'}
              sx={{
                width: { xs: 40, sm: 60, md: 100 },
                height: { xs: 40, sm: 60, md: 100 },
                borderRadius: 1,
              }}
            />

            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography noWrap sx={{ fontSize: { xs: 12, sm: 14 }}}>
                {t.author} — {t.title}
              </Typography>
            </Box>

            <Typography sx={{ fontSize: 12 }}>
              {new Date(t.ts).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Typography>
          </Box>

          <Divider sx={{ my: 1 }} />
        </Box>
      ))}

    
    </Box>
  );
}
