// client/src/admin/routes/AdminRoutes.tsx
import { Routes, Route } from 'react-router-dom';

import AdminLogin from '../auth/AdminLogin';
import AdminRoute from '../auth/AdminRoute';

import AdminLayout from '../layout/AdminLayout';

import AdminDashboard from '../pages/AdminDashboard';
import AdminMixtapes from '../pages/AdminMixtapes';
import AdminGenres from '../pages/AdminGenres'

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin/login" element={<AdminLogin />} />

      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }
      >
        <Route index element={<AdminDashboard />} />

        <Route path="mixtapes" element={<AdminMixtapes />} />

        <Route path="genres" element={<AdminGenres />} />
      </Route>
    </Routes>
  );
}
