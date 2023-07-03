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
  Link,
} from "@chakra-ui/react";
import { SiJavascript, SiReact, SiChakraui } from "react-icons/si";

const ProjectCard = ({
  title,
  description,
  backgroundImage,
  stack,
  language,
  alt,
  url,
}) => {
  const iconMap = {
    javascript: SiJavascript,
    react: SiReact,
    chakra: SiChakraui,
  };

  return (
    <Link _hover={{ textDecoration: "none" }} href={url} isExternal>
      <Card
        h="100%"
        direction={{ base: "row", md: "column" }}
        align={{ base: "center", md: "flex-start" }}
        overflow="hidden"
        maxW={{ base: "100%", md: "249" }}
        _hover={{
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transform: "translateY(-2px)",
          bg: "gray.600",
        }}
      >
        <Image
          borderRadius={{ base: "0", md: "5" }}
          alignSelf={"center"}
          mt={{ base: "0", md: "5" }}
          w={{ base: "100px", md: "65%" }}
          objectFit="cover"
          src={backgroundImage}
          alt={alt}
        />
        <Stack pl={{ base: "5", md: "0" }}>
          <CardBody p={{ base: "0", md: "5" }}>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              letterSpacing="wide"
              fontWeight="bold"
            >
              {language}
            </Text>
            <Heading py={1.5} fontSize={{ base: "3xl", md: "4xl" }} size="md">
              {title}
            </Heading>
            <Show above="md">
              <Text
                fontSize="3xl"
                fontWeight="300"
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
      </Card>
    </Link>
  );
};

export default ProjectCard;
