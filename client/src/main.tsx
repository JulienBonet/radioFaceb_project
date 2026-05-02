// client/src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme/theme';
import { ResponsiveProvider } from "./context/ResponsiveProvider";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResponsiveProvider>
      <App />
      </ResponsiveProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
