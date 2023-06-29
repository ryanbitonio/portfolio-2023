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
      w={249}
    >
      <CardBody>
        <Image m="auto" src={backgroundImage} alt={alt} borderRadius="lg" />
        <Stack mt="6">
          <Text fontSize="lg" letterSpacing="wide" fontWeight="bold">
            {language}
          </Text>
          <Heading fontSize="4xl" size="md">
            {title}
          </Heading>
          <Text
            fontSize="3xl"
            fontWeight="normal"
            lineHeight="18px"
            opacity="60%"
          >
            {description}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter pt={0}>
        <HStack>
          {Object.keys(stack).map((icon, index) => (
            <Icon key={index} as={iconMap[icon]} />
          ))}
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
