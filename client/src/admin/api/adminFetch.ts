// client/src/admin/api/adminFetch.ts
import { getAdminToken } from '../auth/adminAuthService';

const API_URL =
  import.meta.env.VITE_API_URL;

export const adminFetch = async (
  endpoint: string,
  options: RequestInit = {}
) => {
  const token = getAdminToken();

  const response = await fetch(
     `${API_URL}${endpoint}`,
    {
      ...options,

      headers: {
        'Content-Type': 'application/json',

        Authorization: `Bearer ${token}`,

        ...options.headers,
      },
    }
  );

  if (response.status === 401) {
    localStorage.removeItem('admin_token');

    window.location.href = '/admin/login';

    throw new Error('Unauthorized');
  }

  return response;
};