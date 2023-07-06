import { listAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const sizes = {
  lg: definePartsStyle({
    container: {},
    item: {
      fontWeight: "semibold",
      color: "gray.300",
    },
    icon: {
      mr: 5,
    },
  }),
};

export const listTheme = defineMultiStyleConfig({ sizes });
