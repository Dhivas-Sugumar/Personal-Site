import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  typography: {
    fontFamily: "SourceCode, 'Nunito Sans' sans-serif",
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#f9f5f1"
    },
    secondary: {
      main: "#005e78"
    },
    background: {
      default: "#000000"  
    },
    common: {
      black: "#000000",
      white: "#ffffff"
    }
  }
})
const lightTheme = createTheme({
  typography: {
    fontFamily: "SourceCode, sans-serif",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#000000"
    },
    secondary: {
      main: "#005e78"
    },
    background: {
      default: "#f9f5f1"  
    },
    common: {
      black: "#000000",
      white: "#ffffff"
    }
  }
})

export { darkTheme, lightTheme }
  