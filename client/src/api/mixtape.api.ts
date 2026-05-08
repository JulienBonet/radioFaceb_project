const API_URL = import.meta.env.VITE_API_URL as string;

export type Mixtape = {
  id: number;
  title: string;
  presentation: string;
  cover: string;

  genre_id: number;
  genre_name: string;
  genre_color: string;

  tracklist: string;

  platform: string;
  embed_url: string;

  created_at: string;
  updated_at: string;

  keywords?: {
    id: number;
    name: string;
  }[];
};

export const getAllMixtapes = async (): Promise<Mixtape[]> => {
  const res = await fetch(`${API_URL}/mixtapes`);

  if (!res.ok) {
    throw new Error('Error fetching mixtapes');
  }

  return res.json();
};

export const getMixtapeById = async (id: number): Promise<Mixtape> => {
  const res = await fetch(`${API_URL}/mixtapes/${id}`);

  if (!res.ok) {
    throw new Error('Error fetching mixtape');
  }

  return res.json();
};

export const createMixtape = async (data: Partial<Mixtape>) => {
  const res = await fetch(`${API_URL}/mixtapes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Error creating mixtape');
  }

  return res.json();
};

export const updateMixtape = async (id: number, data: Partial<Mixtape>) => {
  const res = await fetch(`${API_URL}/mixtapes/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Error updating mixtape');
  }

  return res.json();
};

export const deleteMixtape = async (id: number) => {
  const res = await fetch(`${API_URL}/mixtapes/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('Error deleting mixtape');
  }

  return res.json();
};
