import type { ReactNode } from 'react';

import { Navigate } from 'react-router-dom';

import { isAdminAuthenticated } from './adminAuthService';

interface Props {
  children: ReactNode;
}

export default function AdminRoute({
  children,
}: Props) {
  if (!isAdminAuthenticated()) {
    return (
      <Navigate
        to="/admin/login"
        replace
      />
    );
  }

  return children;
}