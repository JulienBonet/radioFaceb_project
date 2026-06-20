import React, { useEffect, useState } from "react";
import { PWAContext, type BeforeInstallPromptEvent } from "./pwaContext";

export function PWAProvider({ children }: { children: React.ReactNode }) {
  const [promptEvent, setPromptEvent] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  const isStandalone =
  window.matchMedia("(display-mode: standalone)").matches ||
  ("standalone" in window.navigator && (window.navigator as Navigator & { standalone?: boolean }).standalone === true);

  useEffect(() => {
    const handler = (e: Event) => {
      const event = e as BeforeInstallPromptEvent;
      event.preventDefault();

      setPromptEvent(event);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const install = async () => {
    if (!promptEvent) return;

    promptEvent.prompt();
    await promptEvent.userChoice;

    setPromptEvent(null);
    setIsInstallable(false);
  };

  return (
    <PWAContext.Provider value={{ isInstallable, isStandalone, install }}>
      {children}
    </PWAContext.Provider>
  );
}