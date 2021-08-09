import { ThemeProvider as StyledThemeProvider } from "styled-components";

export const ThemeNames = ["light", "ocean"];

interface ColorInterface {
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
interface ThemeInterface {
  light: ColorInterface;
  ocean: ColorInterface;
}

const light: ColorInterface = {
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

const allThemes: ThemeInterface = {
  light,
  ocean: {
    ...light,
    colors: {
      ...light.colors,
      primary: {
        main: "#2196f3",
        dark: "#1769aa",
        light: "#4dabf5",
        text: "#fff",
      },
    },
  },
};

function ThemeProvider({ theme = "light", children }) {
  return (
    <StyledThemeProvider theme={allThemes[theme]}>
      {children}
    </StyledThemeProvider>
  );
}

export default ThemeProvider;
