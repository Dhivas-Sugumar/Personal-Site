import { createTheme } from '@mui/material'
declare module '@mui/material/styles' {
    interface Palette {
      HBPNavy: Palette['primary'];
      Mist: Palette['primary'];
      DarkGreen: Palette['primary'];
      HBPBlue: Palette['primary'];
      YellowGreen: Palette['primary'];
      SproutGreen: Palette['primary'];
      White: Palette['primary'];
      Red: Palette ['primary'];
      HBPCTA: Palette ['primary'];
      Teal: Palette ['primary'];
    }
    interface PaletteOptions {
      HBPNavy: PaletteOptions['primary'];
      Mist: PaletteOptions['primary'];
      DarkGreen: PaletteOptions['primary'];
      HBPBlue: PaletteOptions['primary'];
      YellowGreen: PaletteOptions['primary'];
      SproutGreen: PaletteOptions['primary'];
      White: PaletteOptions['primary'];
      Red: PaletteOptions ['primary'];
      HBPCTA: PaletteOptions ['primary'];
      Teal: PaletteOptions ['primary'];
    }
  }
  