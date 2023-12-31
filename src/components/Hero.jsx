import {
  Flex,
  Heading,
  Hide,
  Image,
  Show,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import heroImage from "../assets/icons/Hero/hero.svg";
import AppContext from "./AppContext";
import ColorSwitch from "./ColorSwitch";
import Menu from "./Menu";
import NavButtons from "./NavButtons";
import Social from "./Social";

const Hero = () => {
  const { tertiaryColor } = useContext(AppContext);

  return (
    <Stack>
      <Flex justify="space-between">
        <Show above="md">
          <NavButtons />
        </Show>
        <Flex gap={3}>
          <Show>
            <ColorSwitch />
          </Show>
          <Hide above="md">
            <Menu />
          </Hide>
        </Flex>
      </Flex>
      <Flex
        pt={{ base: "0", md: "7" }}
        direction={{ base: "column", md: "row" }}
        align={{ base: "center", md: "center" }}
      >
        <Image
          borderRadius="full"
          mb={{ base: "3", md: "0" }}
          boxSize={`clamp(160px, 18vw, 235px)`}
          // filter="drop-shadow(0px 20px 85px rgba(0, 0, 0, 0.6))"
          src={heroImage}
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
            fontWeight={800}
          >
            Ryan Bitonio
          </Heading>
          <Social tertiaryColor={tertiaryColor} />
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Hero;
