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
    <Stack h="100%" pl={{ base: "0", md: "25" }} pt={{ md: 8, base: 0 }}>
      <Show above="md">
        <NavButtons />
      </Show>
      <Flex
        flex={1}
        direction={{ md: "row", base: "column" }}
        align={{ base: "center" }}
        justify={{ md: "flex-start", base: "center" }}
        pt={{ md: 5, base: 0 }}
      >
        <Image
          boxSize={{ xl: "221", lg: "200", md: "170", base: "221" }}
          filter="drop-shadow(0px 20px 85px rgba(0, 0, 0, 0.4))"
          src="src\assets\icons\Hero\hero.svg"
        />
        <Stack
          pl={{ md: "5", base: "0" }}
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <Show above="md">
            <Text fontWeight="bold">Profile</Text>
          </Show>
          <Heading
            fontSize={{ xl: "9xl", lg: "8xl", md: "7xl", base: "7xl" }}
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
