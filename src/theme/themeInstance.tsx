import { createTheme } from "@mui/material/styles";

const colorPalette = {
  light: {
    primary: "#1976d2",
    secondary: "#dc004e",
    background: "#fafafa",
    textPrimary: "#000000",
    textSecondary: "#555555",
    header: "#212121",
  },
  dark: {
    primary: "#bb86fc",
    secondary: "#03dac6",
    background: "#121212",
    textPrimary: "#ffffff",
    textSecondary: "#bbbbbb",
    header: "#212121",
  },
};

const themeInstance = (theme: "light" | "dark") =>
  createTheme({
    palette: {
      mode: theme,
      primary: { main: colorPalette[theme].primary },
      secondary: { main: colorPalette[theme].secondary },
      background: { default: colorPalette[theme].background },
      text: {
        primary: colorPalette[theme].textPrimary,
        secondary: colorPalette[theme].textSecondary,
      },
      header: {
        main: colorPalette[theme].header, // Custom header color
      },
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
      allVariants: {
        color: colorPalette[theme].textPrimary,
      },
    },
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: colorPalette[theme].textPrimary, // Default icon color
            "&:hover": {
              backgroundColor: theme === "light" ? "#f0f0f0" : "#333333", // Custom hover color
            },
          },
        },
      },
    },
  });

export default themeInstance;
