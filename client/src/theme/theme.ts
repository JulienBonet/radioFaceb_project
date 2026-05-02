import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    historyBtn: Palette['primary'];
  }

  interface PaletteOptions {
    historyBtn?: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  palette: {
    historyBtn: {
      main: '#2e6260',
      contrastText: '#fff',
    },
  },

});