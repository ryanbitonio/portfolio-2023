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
        pt={14}
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "center" }}
      >
        <Image
          boxSize={`clamp(177px, 18vw, 221px)`}
          filter="drop-shadow(0px 20px 85px rgba(0, 0, 0, 0.6))"
          src="src/assets/icons/Hero/hero.svg"
        />
        <Stack pl={{ base: "0", md: "5" }}>
          <Show above="md">
            <Text fontSize="3xl" fontWeight="semibold">
              Profile
            </Text>
          </Show>
          <Heading
            fontSize={"clamp(2.5rem, 70% + 5vw, 6rem)"}
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
