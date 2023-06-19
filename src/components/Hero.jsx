import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ReactComponent as BackIcon } from "../assets/icons/Hero/back.svg";
import { ReactComponent as NextIcon } from "../assets/icons/Hero/next.svg";
import Social from "./Social";

const Hero = () => {
  return (
    <Stack pl={25} pt={8}>
      <HStack>
        <Icon as={BackIcon} boxSize={34} />
        <Icon as={NextIcon} boxSize={34} />
      </HStack>
      <HStack pt={5}>
        <Image src="src\assets\icons\Hero\hero.svg" />
        <Stack pl={5}>
          <Text fontWeight="bold">Profile</Text>
          <Heading fontSize="8xl" letterSpacing="tight">
            Ryan Bitonio
          </Heading>
          <Social />
        </Stack>
      </HStack>
    </Stack>
  );
};

export default Hero;
