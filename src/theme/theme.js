import { extendTheme } from "@chakra-ui/react";
import { listTheme as List } from "./components/listStyles";

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
      },
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "none",
        },
      },
    },
  },
  colors: {
    gradient: {
      xl_primary:
        "linear-gradient(180deg, rgba(113, 247, 206, 0.8) -7.68%, rgba(44, 85, 72, 0) 117.6%)",
      xl_secondary:
        "linear-gradient(180deg, rgba(131, 131, 131, 0.8) -7.68%, rgba(44, 85, 72, 0) 117.6%)",
      base_primary:
        "linear-gradient(180deg, rgba(113, 247, 206, 0.8) -7.68%, rgba(44, 85, 72, 0) 101.68%)",
      base_secondary:
        "linear-gradient(180deg, rgba(131, 131, 131, 0.8) -7.68%, rgba(44, 85, 72, 0) 102.93%)",
    },
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    gray: {
      100: "#FFFFFF",
      200: "#F5F5F5",
      300: "#B3B3B3",
      400: "rgba(0, 0, 0, 0.65)",
      500: "#4D4D4D",
      600: "#252525",
      700: "#171717",
      800: "#121212",
      900: "#000000",
    },
  },
  fontSizes: {
    xs: "0.313rem", // 5px
    sm: "0.438rem", // 7px
    md: "0.5rem", // 8px
    lg: "0.625rem", // 10px
    xl: "0.75rem", // 12px
    "2xl": "0.813rem", // 13px
    "3xl": "0.938rem", // 15px
    "4xl": "1.125rem", //18px
    "5xl": "1.563rem", //25px
    "6xl": "1.875rem", //30px
    "7xl": "3.5rem", // 56px
    "8xl": "5rem", // 80px
    "9xl": "6rem", // 96px
  },
  letterSpacings: {
    tight: "-0.05em",
    normal: "0",
    wide: "0.3em",
  },
  components: {
    List,
  },
});

export default theme;
