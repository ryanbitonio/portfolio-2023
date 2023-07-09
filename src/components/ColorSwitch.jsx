import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

const ColorSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      fontSize="5xl"
      variant="outline"
      icon={<SunIcon />}
    >
      ColorSwitch
    </IconButton>
  );
};

export default ColorSwitch;
