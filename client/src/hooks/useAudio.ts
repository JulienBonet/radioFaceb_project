// client/src/hooks/useAudio.ts
import { useContext } from "react";
import { AudioContext } from "../context/AudioContext";

export const useAudio = () => {
  const context = useContext(AudioContext);

  if (!context) {
    throw new Error("useAudio must be used inside AudioProvider");
  }

  return context;
};