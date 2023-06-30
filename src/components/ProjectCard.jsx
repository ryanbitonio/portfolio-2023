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
} from "@chakra-ui/react";
import { SiJavascript, SiReact, SiChakraui } from "react-icons/si";

const ProjectCard = ({
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
      _hover={{
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transform: "translateY(-2px)",
        bg: "gray.600",
      }}
      borderRadius={10}
      maxW={{ base: "200", md: "249" }}
      direction={{ base: "row", md: "column" }}
      placeItems={{ base: "center", md: "normal" }}
      overflow="hidden"
    >
      <CardHeader p={{ base: "0", md: "5" }}>
        <Image
          maxW="100%"
          m="auto"
          objectFit="cover"
          src={backgroundImage}
          alt={alt}
          borderRadius="lg"
        />
      </CardHeader>
      <Stack>
        <CardBody>
          <Stack>
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
          </Stack>
          <Hide above="md">
            <HStack pt={3}>
              {Object.keys(stack).map((icon, index) => (
                <Icon key={index} as={iconMap[icon]} />
              ))}
            </HStack>
          </Hide>
        </CardBody>
        <Show above="md">
          <CardFooter pt={0}>
            <HStack>
              {Object.keys(stack).map((icon, index) => (
                <Icon key={index} as={iconMap[icon]} />
              ))}
            </HStack>
          </CardFooter>
        </Show>
      </Stack>
    </Card>
  );
};

export default ProjectCard;
