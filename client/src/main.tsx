// client/src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme';
import { ResponsiveProvider } from './context/ResponsiveProvider';
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResponsiveProvider>
        <Toaster richColors position="top-right" />
        <App />
      </ResponsiveProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
