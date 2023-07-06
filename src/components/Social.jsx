import { Flex, HStack, Link } from "@chakra-ui/react";
import { HiOutlineExternalLink } from "react-icons/hi";

const Social = () => {
  return (
    <HStack
      justify={{ base: "center", md: "flex-start" }}
      fontSize="2xl"
      color="gray.300"
      spacing={5}
    >
      <Link
        _hover={{
          color: "white",
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
          color: "white",
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
