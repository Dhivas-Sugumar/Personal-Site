import React from "react";
import { IconButton, useTheme } from "@mui/material";
import { Sun, Moon } from 'react-feather'
import { ColorContext } from "../../../utils/ColorContext";


export const SwitchModeButton = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorContext);

  return (
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? <Sun /> : <Moon />}
      </IconButton>
  );
};
