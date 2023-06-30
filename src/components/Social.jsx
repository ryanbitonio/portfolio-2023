import { Box, HStack, Icon, Link } from "@chakra-ui/react";
import { ReactComponent as RedirectIcon } from "../assets/icons/Hero/redirect.svg";

const Social = () => {
  return (
    <HStack
      justify={{ base: "center", md: "flex-start" }}
      align={"center"}
      fontSize="2xl"
      spacing={5}
      color="gray.300"
    >
      <Icon as={RedirectIcon} />
      <Link>Facebook</Link>
      <Icon as={RedirectIcon} />
      <Link>Github</Link>
    </HStack>
  );
};

export default Social;
