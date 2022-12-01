import { createTheme } from '@mui/material/styles';

const baseTheme = createTheme({
  typography: {
    fontFamily: "'Nunito Sans',Work Sans', sans-serif",
    fontSize: 14,
  }
})
​
const darkTheme = createTheme({
  ...baseTheme,
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
  ...baseTheme,
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
​
export { darkTheme, lightTheme }
  