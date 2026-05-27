import type { Mixtape }
from '../../types/mixtape';

import { adminFetch }
from './adminFetch';

export const createMixtape =
async (
  data: Partial<Mixtape>
) => {
  const res = await adminFetch(
    '/mixtapes',
    {
      method: 'POST',

      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    throw new Error(
      'Error creating mixtape'
    );
  }

  return res.json();
};

export const updateMixtape =
async (
  id: number,
  data: Partial<Mixtape>
) => {
  const res = await adminFetch(
    `/mixtapes/${id}`,
    {
      method: 'PUT',

      body: JSON.stringify(data),
    }
  );

  if (!res.ok) {
    throw new Error(
      'Error updating mixtape'
    );
  }

  return res.json();
};

export const deleteMixtape =
async (id: number) => {
  const res = await adminFetch(
    `/mixtapes/${id}`,
    {
      method: 'DELETE',
    }
  );

  if (!res.ok) {
    throw new Error(
      'Error deleting mixtape'
    );
  }

  return res.json();
};