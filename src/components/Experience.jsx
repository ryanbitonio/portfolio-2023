import {
  Stack,
  HStack,
  Heading,
  Tag,
  TagLabel,
  Text,
  Button,
  Image,
  Box,
  Flex,
  Divider,
} from "@chakra-ui/react";
import NavButtons from "./NavButtons";
import ExpMedgrocer from "../assets/thumbnails/Experience/exp-medgrocer.svg";
import experiences from "../../data/experience";
import { useState } from "react";

const Experience = ({ secondaryColor }) => {
  const [selectedExperience, setSelectedExperience] = useState(1);

  const handleButtonClick = value => {
    setSelectedExperience(value);
  };

  const filteredExperiences = experiences.filter(
    experience => experience.id === selectedExperience
  );

  return (
    <Box
      bg={
        "radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)"
      }
    >
      {filteredExperiences.map(({ id, title, status, description }) => (
        <HStack h="100vh" w="60%" m="auto" key={id}>
          <Stack mr={6} h="100%" justify="center" gap={8}>
            <Button
              justifySelf="flex-start"
              fontWeight="600"
              fontSize="2xl"
              w="max-content"
              variant="outline"
            >
              Back to Home
            </Button>
            <Stack gap={0}>
              <Heading fontSize="7xl">{title}</Heading>
              <Text
                pb={{ base: "1", md: "0" }}
                fontSize={{ base: "md", md: "xl" }}
                letterSpacing="wide"
                fontWeight="bold"
              >
                {status}
              </Text>
            </Stack>
            <Text
              w="70%"
              fontSize="4xl"
              fontWeight="300"
              lineHeight="25px"
              color={secondaryColor}
              noOfLines={5}
            >
              {description}
            </Text>
            <Divider width="61.5%" />
            {filteredExperiences.map(
              ({ id, tags: { location, role, output } }) => (
                <HStack key={id}>
                  <Tag
                    size="lg"
                    borderRadius="full"
                    variant="solid"
                    letterSpacing="wide"
                    fontWeight="bold"
                  >
                    <TagLabel fontSize="xl">{location}</TagLabel>
                  </Tag>
                  <Tag
                    size="lg"
                    borderRadius="full"
                    variant="solid"
                    letterSpacing="wide"
                    fontWeight="bold"
                  >
                    <TagLabel fontSize="xl">{role}</TagLabel>
                  </Tag>
                  <Tag
                    size="lg"
                    borderRadius="full"
                    variant="solid"
                    letterSpacing="wide"
                    fontWeight="bold"
                  >
                    <TagLabel fontSize="xl">{output}</TagLabel>
                  </Tag>
                </HStack>
              )
            )}
          </Stack>
          <HStack flexDir="column" align="stretch" gap={6}>
            {experiences.map(({ id, title, date }) => (
              <Button
                py={8}
                px={12}
                border="1px solid #ffffffb2"
                key={id}
                variant="outline"
                onClick={() => handleButtonClick(id)}
              >
                <Stack gap={1}>
                  <Heading fontWeight="400" fontSize="4xl">
                    {title}
                  </Heading>
                  <Text fontWeight="300" fontSize="xl">
                    {date}
                  </Text>
                </Stack>
              </Button>
            ))}
          </HStack>
        </HStack>
      ))}
    </Box>
  );
};

export default Experience;
