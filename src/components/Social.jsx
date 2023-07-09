import { Flex, HStack, Link, useColorMode } from "@chakra-ui/react";
import { HiOutlineExternalLink } from "react-icons/hi";

const Social = ({ tertiaryColor }) => {
  const { colorMode } = useColorMode();
  const hoverColor = colorMode === "dark" ? "white" : "gray.800";

  return (
    <HStack
      justify={{ base: "center", md: "flex-start" }}
      fontSize="2xl"
      color={tertiaryColor}
      spacing={5}
    >
      <Link
        _hover={{
          color: hoverColor,
        }}
        href="https://www.facebook.com/ryan.bitonio/"
        isExternal
      >
        <Flex>
          <HiOutlineExternalLink style={{ marginRight: "13" }} size={18} />
          Facebook
        </Flex>
      </Link>
      <Link
        _hover={{
          color: hoverColor,
        }}
        href="https://github.com/ryanbitonio"
        isExternal
      >
        <Flex>
          <HiOutlineExternalLink size={18} style={{ marginRight: "13" }} />
          Github
        </Flex>
      </Link>
    </HStack>
  );
};

export default Social;
