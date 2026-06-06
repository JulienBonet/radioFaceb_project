import { BrowserRouter, useLocation } from 'react-router-dom';

import { AudioProvider } from './context/AudioProvider';

import Header from './components/Header';
import MenuDesktop from './components/MenuDesktop';
import FooterPlayer from './components/FooterPlayer';

import Router from './router/Router';

import { useResponsive } from './hooks/useResponsive';

function AppContent() {
  const { isMobile, isTablet } = useResponsive();

  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <AudioProvider>
       {!isAdminRoute && <Header />}

      {!isAdminRoute && !isMobile && !isTablet && <MenuDesktop />}

      <Router />

      {!isAdminRoute && <FooterPlayer />}
    </AudioProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
