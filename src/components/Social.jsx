import { Flex, HStack, Link, useColorMode } from "@chakra-ui/react";
import { HiOutlineExternalLink } from "react-icons/hi";

const Social = ({ tertiaryColor }) => {
  const { colorMode } = useColorMode();
  const hoverColor = colorMode === "dark" ? "white" : "gray.800";

  return (
    <HStack
      justify={{ base: "center", md: "flex-start" }}
      color={tertiaryColor}
      spacing={5}
    >
      <Link
        fontSize="2xl"
        fontWeight="semibold"
        _hover={{
          color: hoverColor,
        }}
        href="https://www.facebook.com/ryan.bitonio/"
        isExternal
      >
        <Flex alignItems="center">
          <HiOutlineExternalLink style={{ marginRight: "13" }} size={13} />
          Facebook
        </Flex>
      </Link>
      <Link
        fontSize="2xl"
        fontWeight="semibold"
        _hover={{
          color: hoverColor,
        }}
        href="https://github.com/ryanbitonio"
        isExternal
      >
        <Flex alignItems="center">
          <HiOutlineExternalLink size={13} style={{ marginRight: "13" }} />
          Github
        </Flex>
      </Link>
    </HStack>
  );
};

export default Social;
