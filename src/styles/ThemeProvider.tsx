import { ThemeProvider as StyledThemeProvider } from "styled-components";

interface ThemeInterface {
  colors: {
    primary: {
      main: string;
      dark: string;
      light: string;
      text: string;
    };
    danger: {
      main: string;
      dark: string;
      text: string;
    };
  };
}

const theme: ThemeInterface = {
  colors: {
    primary: {
      main: "#ffc107",
      dark: "#c79100",
      light: "#fff350",
      text: "#212121",
    },
    danger: {
      main: "#ff3d00",
      dark: "#b22a00",
      text: "#212121",
    },
  },
};

function ThemeProvider({ children }) {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}

export default ThemeProvider;
