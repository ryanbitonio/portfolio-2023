import { HStack, Icon } from "@chakra-ui/react";
import { ReactComponent as BackIcon } from "../assets/icons/Hero/back.svg";
import { ReactComponent as NextIcon } from "../assets/icons/Hero/next.svg";

const NavButtons = () => {
  return (
    <HStack>
      <Icon as={BackIcon} boxSize={34} />
      <Icon as={NextIcon} boxSize={34} />
    </HStack>
  );
};

export default NavButtons;
