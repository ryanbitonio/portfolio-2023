import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  Icon,
  HStack,
  Show,
  CardHeader,
  Hide,
  Box,
} from "@chakra-ui/react";
import { SiJavascript, SiReact, SiChakraui } from "react-icons/si";

const ProjectCards = ({
  title,
  description,
  backgroundImage,
  stack,
  language,
  alt,
}) => {
  const iconMap = {
    javascript: SiJavascript,
    react: SiReact,
    chakra: SiChakraui,
  };

  return (
    <Card
      direction={{ base: "row", sm: "column" }}
      overflow="hidden"
      maxW={{ base: "100%", md: "249" }}
      justify={"flex-start"}
      _hover={{
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transform: "translateY(-2px)",
        bg: "gray.600",
      }}
    >
      <Image
        borderRadius={5}
        alignSelf={"center"}
        mt={5}
        maxW="80%"
        objectFit="cover"
        src={backgroundImage}
        alt={alt}
      />
      <Stack>
        <CardBody>
          <Text fontSize="lg" letterSpacing="wide" fontWeight="bold">
            {language}
          </Text>
          <Heading fontSize={{ base: "3xl", md: "4xl" }} size="md">
            {title}
          </Heading>
          <Show above="md">
            <Text
              fontSize="3xl"
              fontWeight="normal"
              lineHeight="18px"
              opacity="60%"
            >
              {description}
            </Text>
          </Show>
          <Hide above="md">
            <HStack pt={3}>
              {Object.keys(stack).map((icon, index) => (
                <Icon key={index} as={iconMap[icon]} />
              ))}
            </HStack>
          </Hide>
        </CardBody>
      </Stack>
      <Show above="md">
        <CardFooter h="100%" alignItems={"flex-end"}>
          <HStack>
            {Object.keys(stack).map((icon, index) => (
              <Icon key={index} as={iconMap[icon]} />
            ))}
          </HStack>
        </CardFooter>
      </Show>
    </Card>
  );
};

export default ProjectCards;
