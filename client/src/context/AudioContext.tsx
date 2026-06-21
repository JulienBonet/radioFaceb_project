// client/src/context/AudioContext.tsx
import { createContext } from 'react';
import type { EmissionConfig } from '../config/emissions';

export interface Track {
  title: string;
  author: string;
  ts: number;
  length: number;
  img_medium_url: string;
  img_large_url: string;
  playlist_title: string;
  dj_name: string;
}

export interface AudioContextType {
  isPlaying: boolean;
  isConnecting: boolean;
  play: () => void;
  stop: () => void;
  track: Track | null;
  progress: number;
  volume: number;
  setVolume: (v: number) => void;
  toggleMute: () => void;
  audioMode: 'radio' | 'mixtape' | null;
  setAudioMode: React.Dispatch<React.SetStateAction<'radio' | 'mixtape' | null>>;
  emission: EmissionConfig;
}

export const AudioContext = createContext<AudioContextType | null>(null);
