// client/src/context/AudioProvider.tsx
import { useEffect, useRef, useState } from 'react';
import { AudioContext } from './AudioContext';
import type { ReactNode } from 'react';
import type { Track } from '../types/audio';
import { getCurrentEmission } from '../utils/getCurrentEmission';
import { trackEvent } from '../utils/matomo';

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const STREAM_URL = 'https://ecmanager6.pro-fhi.net:1400/stream';
  type AudioMode = 'radio' | 'mixtape' | null;

  const audioRef = useRef<HTMLAudioElement>(new Audio());
  const listeningStartRef = useRef<number | null>(null);
  const milestonesRef = useRef(new Set<number>());

  const [isConnecting, setIsConnecting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [track, setTrack] = useState<Track | null>(null);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [prevVolume, setPrevVolume] = useState(1);
  const [audioMode, setAudioMode] = useState<AudioMode>(null);
  const [emission, setEmission] = useState(getCurrentEmission());

  const createAudio = () => {
    const audio = new Audio();
    audio.src = `${STREAM_URL}?t=${Date.now()}`;
    audio.preload = 'none';
    return audio;
  };

  const play = async () => {
    try {
      setIsConnecting(true);

      if (audioRef.current) {
        audioRef.current.pause();
      }

      audioRef.current = createAudio();
      audioRef.current.volume = volume;

      await audioRef.current.play();

      listeningStartRef.current = Date.now();
      milestonesRef.current.clear();

      setAudioMode('radio');
      setIsPlaying(true);
    } finally {
      setIsConnecting(false);
    }
  };

  const stop = () => {
    console.log('STOP RADIO');

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
      audioRef.current.load();
    }

    listeningStartRef.current = null;
    milestonesRef.current.clear();

    setIsPlaying(false);
  };

  // EVENTS MATOMO STREAM
  useEffect(() => {
    if (!isPlaying || audioMode !== 'radio') return;

    const interval = setInterval(() => {
      if (!listeningStartRef.current) return;

      const minutes = Math.floor((Date.now() - listeningStartRef.current) / 60000);

      [1, 5, 10, 15, 30, 60, 90, 120, 240].forEach((threshold) => {
        if (minutes >= threshold && !milestonesRef.current.has(threshold)) {
          milestonesRef.current.add(threshold);

          trackEvent('Stream', `play_${threshold}min`);
        }
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [isPlaying, audioMode]);

  // MUTE
  const toggleMute = () => {
    if (volume > 0) {
      setPrevVolume(volume);
      setVolume(0);
    } else {
      setVolume(prevVolume);
    }
  };

  // 🎧 TRACK
  useEffect(() => {
    const loadTrack = async () => {
      const res = await fetch(
        'https://ecmanager6.pro-fhi.net:1390/api/v2/history/?limit=1&server=1',
      );
      const data = await res.json();
      setTrack(data.results[0]);
    };

    loadTrack();
    const interval = setInterval(loadTrack, 5000);

    return () => clearInterval(interval);
  }, []);

  // ⏱ PROGRESS
  useEffect(() => {
    const interval = setInterval(() => {
      if (track) {
        const p = (Date.now() - track.ts) / track.length;
        setProgress(Math.min(p, 1));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [track]);

  // 🔊 VOLUME
  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  // 🎨 EMISSION AUTO UPDATE
  useEffect(() => {
    const interval = setInterval(() => {
      setEmission(getCurrentEmission());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        isConnecting,
        play,
        stop,
        track,
        progress,
        volume,
        setVolume,
        toggleMute,
        emission,
        audioMode,
        setAudioMode,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
