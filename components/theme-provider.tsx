import React from "react";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider
} from "@material-ui/core/styles";

export const theme = createTheme({
  // TODO: Customize theme here
  palette: {
    background: {
      default: "gainsboro"
    }
  }
});

const ThemeProvider: React.FunctionComponent = ({ children }) => {
  const [darkmode, setDarkmode] = React.useState(false);

  return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
};

export default ThemeProvider;
