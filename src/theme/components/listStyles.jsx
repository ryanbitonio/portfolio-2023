import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { listAnatomy as parts } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const sizes = {
  lg: definePartsStyle({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    item: {
      pl: 25,
      fontWeight: "semibold",
      color: "gray.300",
      fontSize: "4xl",
    },
    icon: { stroke: "gray.300", mr: 5, w: "24px", h: "24px" },
  }),
};

export const listTheme = defineMultiStyleConfig({ sizes });
