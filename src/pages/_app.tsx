import React from 'react'
import type { AppProps } from 'next/app'
import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material'
import '../styles/index.css'
import "../styles/global.css";
import { lightTheme, darkTheme } from '../themes/theme';
import { ColorContext } from "../utils/ColorContext";
import { SwitchModeButton } from '../components/buttons/switch-mode/SwitchModeButton';

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = React.useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );
  const AnyComponent = Component as any;


  return (

    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {/* <SwitchModeButton/> */}
        <AnyComponent {...pageProps}/>
      </ThemeProvider>
      </ColorContext.Provider>
  )
  
}

export default MyApp;