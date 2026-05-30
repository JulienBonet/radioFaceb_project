// client/src/admin/api/adminGenreApi.ts
import { adminFetch } from './adminFetch';
import type { Genre } from '../../types/genre';

const API_URL =
  import.meta.env.VITE_API_URL;

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

  export const createGenre = async (
  data: Partial<Genre>
) => {
  const res = await adminFetch('/genres', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Error creating genre');
  }

  return res.json();
};

export const updateGenre = async (
  id: number,
  data: Partial<Genre>
) => {
  const res = await adminFetch(`/genres/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Error updating genre');
  }

  return res.json();
};

export const deleteGenre = async (
  id: number
) => {
  const res = await adminFetch(`/genres/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('Error deleting genre');
  }

  return res.json();
};