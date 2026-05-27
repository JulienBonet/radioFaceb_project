const API_URL =
  import.meta.env.VITE_API_URL;

export type Genre = {
  id: number;
  name: string;
  color: string;
};

export const getAllGenres =
  async (): Promise<Genre[]> => {
    const res = await fetch(
      `${API_URL}/genres`
    );

    if (!res.ok) {
      throw new Error(
        'Erreur fetch genres'
      );
    }

    return res.json();
  };