import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { listAnatomy as parts } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  item: {
    pl: 25,
    fontWeight: "semibold",
    color: "gray.300",
  },
  icon: { stroke: "gray.300" },
});

export const listTheme = defineMultiStyleConfig({ baseStyle });
