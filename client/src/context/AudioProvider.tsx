// client/src/context/AudioProvider.tsx
import { useEffect, useRef, useState } from "react";
import { AudioContext } from "./AudioContext";
import type { ReactNode } from "react";
import type { Track } from "../types/audio";
import { getCurrentEmission } from "../utils/getCurrentEmission";

export const AudioProvider = ({ children }: { children: ReactNode }) => {
  const STREAM_URL = "http://ecmanager6.pro-fhi.net:1400/stream";

  const audioRef = useRef<HTMLAudioElement>(new Audio());

  const [isPlaying, setIsPlaying] = useState(false);
  const [track, setTrack] = useState<Track | null>(null);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [prevVolume, setPrevVolume] = useState(1);

  const [emission, setEmission] = useState(getCurrentEmission());

  const createAudio = () => {
    const audio = new Audio();
    audio.src = `${STREAM_URL}?t=${Date.now()}`; // 🔥 anti-buffer cache
    audio.preload = "none";
    return audio;
  };

  const play = async () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    audioRef.current = createAudio();
    audioRef.current.volume = volume;

    await audioRef.current.play();

    setIsPlaying(true);
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
      audioRef.current.load();
    }

    setIsPlaying(false);
  };

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
        "https://ecmanager6.pro-fhi.net:1390/api/v2/history/?limit=1&server=1"
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
        play,
        stop,
        track,
        progress,
        volume,
        setVolume,
        toggleMute,
        emission,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};