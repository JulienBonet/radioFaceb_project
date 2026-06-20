import { createContext, useContext } from "react";

export type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

export type PWAContextType = {
  isInstallable: boolean;
  isStandalone: boolean;
  install: () => Promise<void> | void;
};

export const PWAContext = createContext<PWAContextType | undefined>(undefined);

export function usePWAContext() {
  const ctx = useContext(PWAContext);

  if (!ctx) {
    throw new Error("usePWAContext must be used within PWAProvider");
  }

  return ctx;
}