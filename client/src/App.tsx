// client/src/App.tsx
import { BrowserRouter } from 'react-router-dom';

import { AudioProvider } from './context/AudioProvider';
import Header from './components/Header';
import MenuDesktop from './components/MenuDesktop';
import FooterPlayer from './components/FooterPlayer';
import Router from './router/Router';
import { useResponsive } from './hooks/useResponsive';

export default function App() {
  const { isMobile, isTablet  } = useResponsive();
  return (
    <BrowserRouter>
      <AudioProvider>
        <Header />

        {!isMobile && !isTablet && <MenuDesktop />}
        <Router />

        <FooterPlayer />
      </AudioProvider>
    </BrowserRouter>
  );
}
