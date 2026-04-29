// client/src/components/FooterPlayer.tsx
import { Box, Stack, Slider, IconButton, Typography } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { VolumeUp, VolumeOff } from '@mui/icons-material';
import { useAudio } from '../hooks/useAudio';
import { useState } from 'react';
import ExpandedPlayer from './ExpandedPlayer';

export default function FooterPlayer() {
  const { isPlaying, play, stop, track, setVolume, volume, toggleMute, } = useAudio();
  const [open, setOpen] = useState(false);

  if (!track) return null;

  return (
    <>
      <Box
        onClick={() => setOpen(true)}
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 80,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
          boxSizing: 'border-box',
          overflow: 'hidden',
          background: 'rgba(10,10,10,0.7)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* 🎨 Background */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${track.img_medium_url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(40px)',
            opacity: 0.2,
          }}
        />

        {/* CONTENU */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            // maxWidth: 900,
          }}
        >
          {/* 🟠 LEFT : INFOS */}
          <Box
            sx={{
              flex: 1,
              minWidth: 0,
              overflow: 'hidden',
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: '#ff3b3b',
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              ● EN DIRECT
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: 'white',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {track.author} — {track.title}
            </Typography>
          </Box>

          {/* ▶️ CENTER : PLAY */}
          <Box
            sx={{
              flexShrink: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: 80,
            }}
          >
            <IconButton
              onClick={(e) => {
                e.stopPropagation();

                if (isPlaying) {
                  stop();
                } else {
                  play();
                }
              }}
              sx={{
                width: 56,
                height: 56,
                background: '#ff6b00',
                color: 'white',
                '&:hover': {
                  background: '#ff7b1a',
                  transform: 'scale(1.05)',
                },
              }}
            >
              {isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
          </Box>

          {/* RIGHT (vide pour équilibre) */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}
          >
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                setOpen((prev) => !prev);
              }}
              sx={{
                color: '#ff6b00',
                opacity: 0.8,
                transition: 'all 0.2s ease',
                '&:hover': {
                  opacity: 1,
                  transform: 'translateY(-2px)',
                },
              }}
            >
              {open ? <ExpandMore /> : <ExpandLess />}
            </IconButton>
            {/* <Slider
              defaultValue={100}
              onChange={(_, value) => {
                const v = (value as number) / 100;
                setVolume(v);
              }}
              size="small"
              sx={{ width: 80, color: 'white' }}
            /> */}
            <Stack direction="row"
              spacing={1}
              sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              sx={{ color: 'white' }}
            >
              {volume === 0 ? <VolumeOff /> : <VolumeUp />}
            </IconButton>

            {/* 🎚️ SLIDER */}
            <Slider
              value={volume * 100}
              onChange={(_, value) => {
                const v = (value as number) / 100;
                setVolume(v);
              }}
              size="small"
              sx={{
                width: 90,
                color: 'white',
              }}
            />
            </Stack>
          </Box>
        </Box>
      </Box>

      {/* 🎧 EXPANDED */}
      <ExpandedPlayer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
