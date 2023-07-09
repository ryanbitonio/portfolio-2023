import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

const ColorSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const hoverColor = colorMode === "dark" ? "#ffffff1c" : "#00000016";

  return (
    <IconButton
      _hover={{
        bg: hoverColor,
      }}
      onClick={toggleColorMode}
      fontSize="5xl"
      variant="outline"
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
    >
      ColorSwitch
    </IconButton>
  );
};

export default ColorSwitch;
