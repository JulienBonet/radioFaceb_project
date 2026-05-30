// client/src/admin/api/adminStatsApi.ts

import { adminFetch } from './adminFetch';
import type { AdminStats } from '../types/adminStats';

export const getAdminStats =
  async (): Promise<AdminStats> => {
    const res =
      await adminFetch('/stats');

    if (!res.ok) {
      throw new Error(
        'Erreur récupération stats'
      );
    }

    return res.json();
  };