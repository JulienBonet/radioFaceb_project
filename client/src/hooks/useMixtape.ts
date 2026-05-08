import { useEffect, useState } from "react";
import type { Mixtape } from "../api/mixtape.api";
import { getMixtapeById } from "../api/mixtape.api";

export const useMixtape = (id: number) => {
  const [mixtape, setMixtape] = useState<Mixtape | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const load = async () => {
      try {
        setLoading(true);
        const data = await getMixtapeById(id);
        setMixtape(data);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  return { mixtape, loading, error };
};