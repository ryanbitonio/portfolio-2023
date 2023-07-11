import { listAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const sizes = {
  lg: definePartsStyle({
    container: {},
    item: {},
    icon: {
      mr: 5,
    },
  }),
};

export const listTheme = defineMultiStyleConfig({ sizes });
