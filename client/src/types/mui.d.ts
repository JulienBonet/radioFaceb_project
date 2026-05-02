import '@mui/material/Button';

declare module '@mui/material/styles' {
  interface Palette {
    historyBtn: Palette['primary'];
  }

  interface PaletteOptions {
    lihistoryBtnve?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    historyBtn: true;
  }
}