import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Show,
  Stack,
  Text,
} from "@chakra-ui/react";

import Social from "./Social";
import NavButtons from "./NavButtons";

const Hero = () => {
  return (
    <Stack>
      <Show above="md">
        <NavButtons />
      </Show>
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "flex-end" }}
      >
        <Image
          filter="drop-shadow(0px 20px 85px rgba(0, 0, 0, 0.6))"
          src="src\assets\icons\Hero\hero.svg"
        />
        <Stack pl={5}>
          <Show above="md">
            <Text fontSize="3xl" fontWeight="semibold">
              Profile
            </Text>
          </Show>
          <Heading fontSize="9xl" letterSpacing="tight">
            Ryan Bitonio
          </Heading>
          <Social />
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Hero;
