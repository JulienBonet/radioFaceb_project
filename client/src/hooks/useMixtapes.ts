import { useEffect, useState } from "react";
import type { Mixtape } from "../api/mixtape.api";
import { getAllPublishedMixtapes } from "../api/mixtape.api";

export const useMixtapes = () => {
  const [mixtapes, setMixtapes] = useState<Mixtape[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await getAllPublishedMixtapes();
        setMixtapes(data);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return {
    mixtapes,
    loading,
    error,
    setMixtapes,
  };
};