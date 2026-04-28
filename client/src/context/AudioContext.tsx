// client/src/context/AudioContext.tsx
import { createContext } from "react";

export interface Track {
  title: string;
  author: string;
  ts: number;
  length: number;
  img_medium_url: string;
  img_large_url: string;
}

export interface AudioContextType {
  isPlaying: boolean;
  play: () => void;
  stop: () => void;
  track: Track | null;
  progress: number;
  setVolume: (v: number) => void;
}

export const AudioContext = createContext<AudioContextType | null>(null);