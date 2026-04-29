// client/src/context/AudioProvider.tsx
import { useEffect, useRef, useState } from 'react';
import { AudioContext } from './AudioContext';
import type { ReactNode } from 'react';
import type { Track } from '../types/audio';

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const STREAM_URL = 'http://ecmanager6.pro-fhi.net:1400/stream';

  const audioRef = useRef<HTMLAudioElement>(new Audio());

  const [isPlaying, setIsPlaying] = useState(false);
  const [track, setTrack] = useState<Track | null>(null);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [prevVolume, setPrevVolume] = useState(1);

  const createAudio = () => {
    const audio = new Audio();

    // 💥 évite le cache / reuse buffer
    audio.src = `${STREAM_URL}?t=${Date.now()}`;

    audio.preload = 'none';

    return audio;
  };

  const play = async () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    audioRef.current = createAudio();

    await audioRef.current.play();

    setIsPlaying(true);
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
      audioRef.current.load();
    }

    setIsPlaying(false);
  };

  useEffect(() => {
    let isMounted = true;

    const loadTrack = async () => {
      const res = await fetch(
        'https://ecmanager6.pro-fhi.net:1390/api/v2/history/?limit=1&server=1',
      );
      const data = await res.json();

      if (isMounted) {
        setTrack(data.results[0]);
      }
    };

    loadTrack();
    const interval = setInterval(loadTrack, 5000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (track) {
        const p = (Date.now() - track.ts) / track.length;
        setProgress(Math.min(p, 1));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [track]);

  const toggleMute = () => {
  if (volume > 0) {
    setPrevVolume(volume);
    setVolume(0);
  } else {
    setVolume(prevVolume);
  }
};

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  return (
    <AudioContext.Provider value={{ isPlaying, play, stop, track, progress, volume, setVolume, toggleMute }}>
      {children}
    </AudioContext.Provider>
  );
};
