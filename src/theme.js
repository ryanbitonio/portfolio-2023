import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    gray: {
      200: "#FFFFFF",
      300: "#F5F5F5",
      400: "rgba(0, 0, 0, 0.65)",
      500: "#252525",
      600: "#4D4D4D",
      700: "#171717",
      800: "#121212",
      900: "#0000",
    },
  },
  fontSizes: {
    xs: "0.313rem",
    sm: "0.438rem",
    md: "0.5rem",
    lg: "0.625rem",
    xl: "0.75rem",
    "2xl": "0.813rem",
    "3xl": "0.938rem",
    "4xl": "1.125rem",
    "5xl": "1.563rem",
    "6xl": "1.875rem",
    "7xl": "2.5rem",
    "8xl": "8rem",
  },
  letterSpacings: {
    tight: "-5%",
    normal: "0",
    wide: "30%",
  },
});

export default theme;
