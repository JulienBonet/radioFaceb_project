export interface AdminUser {
  id: number;
  name: string;
  is_admin: number;
}

export interface LoginResponse {
  token: string;
  user: AdminUser;
}