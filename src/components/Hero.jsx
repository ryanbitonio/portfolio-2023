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
          boxSize={`clamp(177px, 18vw, 221px)`}
          // boxSize={{ base: "177", md: "177", lg: "221" }}
          filter="drop-shadow(0px 20px 85px rgba(0, 0, 0, 0.6))"
          src="src/assets/icons/Hero/hero.svg"
        />
        <Stack pl={5}>
          <Show above="md">
            <Text fontSize="3xl" fontWeight="semibold">
              Profile
            </Text>
          </Show>
          <Heading
            fontSize={"clamp(3.8rem, 70% + 5vw, 6rem)"}
            // fontSize={{ base: "7xl", md: "8xl", lg: "9xl" }}
            letterSpacing="tight"
          >
            Ryan Bitonio
          </Heading>
          <Social />
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Hero;
