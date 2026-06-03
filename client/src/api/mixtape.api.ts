// client/src/api/mixtape.api.ts
import type { Mixtape } from '../types/mixtape';

const API_URL = import.meta.env.VITE_API_URL as string;

export const getAllMixtapes = async (): Promise<Mixtape[]> => {
  const res = await fetch(`${API_URL}/mixtapes`);

  if (!res.ok) {
    throw new Error('Error fetching mixtapes');
  }

  return res.json();
};

export const getAllPublishedMixtapes = async (): Promise<Mixtape[]> => {
  const res = await fetch(`${API_URL}/mixtapes/published`);

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