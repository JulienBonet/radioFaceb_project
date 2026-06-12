// client/src/router/Router.tsx
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Grille from '../pages/Grille';
import CommentEcouter from '../pages/CommentEcouter';
import Newsletter from '../pages/Newsletter';
import Contact from '../pages/Contact';
import Historique from '../pages/Historique';
import Mixtapes from '../pages/Mixtapes';
import Presentation from '../pages/Presentation';
import MixtapeDetail from '../pages/MixtapeDetail';

import AdminLogin from '../admin/auth/AdminLogin';
import AdminRoute from '../admin/auth/AdminRoute';

import AdminLayout from '../admin/layout/AdminLayout';

import AdminDashboard from '../admin/pages/AdminDashboard';
import AdminMixtapes from '../admin/pages/AdminMixtapes';
import AdminGenres from '../admin/pages/AdminGenres';

export default function Router() {
  return (
    <Routes>
      {/* PUBLIC */}

      <Route path="/" element={<HomePage />} />
      <Route path="/grille" element={<Grille />} />
      <Route path="/comment_ecouter" element={<CommentEcouter />} />
      <Route path="/newsletter" element={<Newsletter />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/historique" element={<Historique />} />
      <Route path="/mixtapes" element={<Mixtapes />} />
      <Route path="/presentation" element={<Presentation />} />
      <Route path="/mixtapes/:id/:slug" element={<MixtapeDetail />} />

      {/* ADMIN */}

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
