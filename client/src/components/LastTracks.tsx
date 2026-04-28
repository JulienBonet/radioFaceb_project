// client/src/components/LastTracks.tsx
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

interface Track {
  id: number;
  title: string;
  author: string;
  img_medium_url: string;
  ts: number;
}

type Props = {
  compact?: boolean;
};

export default function LastTracks({ compact = false }: Props) {
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    const fetchTracks = async () => {
      const res = await fetch(
        'https://ecmanager6.pro-fhi.net:1390/api/v2/history/?limit=6&server=1',
      );
      const data = await res.json();
      setTracks(data.results.slice(1));
    };

    fetchTracks();

    const interval = setInterval(fetchTracks, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        border: '1px dashed #444',
        borderRadius: 2,
        p: 2,
      }}
    >
      <Typography variant="h6" sx={{ color: 'black', mb: 2 }}>
        Derniers titres
      </Typography>

      {tracks.map((t) => (
        <Box
          key={t.id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: compact ? 1 : 2,
            gap: 2,
          }}
        >
          <Box
            component="img"
            src={t.img_medium_url}
            sx={{
              width: compact ? 40 : 50,
              height: compact ? 40 : 50,
              borderRadius: 1,
            }}
          />

          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              sx={{
                color: 'black',
                fontSize: compact ? 12 : 14,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {t.author} — {t.title}
            </Typography>
          </Box>

          <Typography
            sx={{
              color: 'black',
              fontSize: 12,
            }}
          >
            {new Date(t.ts).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
