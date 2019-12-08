import React from "react";
import {
  createMuiTheme,
  ThemeProvider as MUIThemeProvider
} from "@material-ui/core/styles";

export const getTheme = (opt?: { darkmode?: boolean }) =>
  createMuiTheme({
    // TODO: Customize theme here
    palette: {
      type: opt && opt.darkmode ? "dark" : "light"
    }
  });

const DarkModeContext = React.createContext({
  darkmode: false,
  setDarkmode: (darkmode: boolean) => {}
});

export const useDarkmode = () => React.useContext(DarkModeContext);

const ThemeProvider: React.FunctionComponent = ({ children }) => {
  const [darkmode, setDarkmode] = React.useState(false);

  const theme = getTheme({ darkmode });

  return (
    <DarkModeContext.Provider value={{ darkmode, setDarkmode }}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </DarkModeContext.Provider>
  );
};

export default ThemeProvider;
