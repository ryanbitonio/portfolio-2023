import { Box, HStack, Icon, Link } from "@chakra-ui/react";
import { ReactComponent as RedirectIcon } from "../assets/icons/Hero/redirect.svg";

const Social = () => {
  return (
    <HStack
      justify={{ base: "center", md: "flex-start" }}
      align={"center"}
      fontSize="2xl"
      color="gray.300"
      spacing={5}
    >
      <Link href="https://www.facebook.com/ryan.bitonio/" isExternal>
        <Icon mr={5} as={RedirectIcon} />
        Facebook
      </Link>
      <Link href="https://github.com/ryanbitonio" isExternal>
        <Icon mr={5} as={RedirectIcon} />
        Github
      </Link>
    </HStack>
  );
};

export default Social;
