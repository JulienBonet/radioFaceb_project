// client/src/hooks/usePWAInstall.ts

import { useEffect, useState } from "react";

type InstallPromptEvent = BeforeInstallPromptEvent;

export function usePWAInstall() {
  const [promptEvent, setPromptEvent] = useState<InstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  const isStandalone =
  window.matchMedia("(display-mode: standalone)").matches ||
  ("standalone" in window.navigator && (window.navigator as Navigator & { standalone?: boolean }).standalone === true);

  useEffect(() => {
    const handler = (e: Event) => {
      const event = e as InstallPromptEvent;

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
    const choice = await promptEvent.userChoice;

    setPromptEvent(null);
    setIsInstallable(false);

    return choice;
  };

  return { isInstallable, install, isStandalone };
}