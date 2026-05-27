// client/src/admin/auth/adminAuthService.ts
import type { LoginResponse } from '../types/auth';
import { jwtDecode } from 'jwt-decode';

const API_URL = import.meta.env.VITE_API_URL as string;

type JwtPayload = {
  exp: number;
};

export const loginAdmin = async (
  name: string,
  password: string
): Promise<LoginResponse> => {
  const response = await fetch(`${API_URL}/admin/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Login failed');
  }

  localStorage.setItem('admin_token', data.token);

  return data;
};

export const logoutAdmin = (): void => {
  localStorage.removeItem('admin_token');

  window.location.href = '/admin/login';
};

export const getAdminToken = (): string | null => {
  return localStorage.getItem('admin_token');
};

// helper interne
const isTokenExpired = (token: string): boolean => {
  try {
    const decoded = jwtDecode<JwtPayload>(token);
    return decoded.exp * 1000 < Date.now();
  } catch {
    return true;
  }
};

export const isAdminAuthenticated = (): boolean => {
  const token = getAdminToken();

  if (!token) return false;

  if (isTokenExpired(token)) {
    localStorage.removeItem('admin_token');
    return false;
  }

  return true;
};