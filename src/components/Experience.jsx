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
    <Stack gap={28} h="100vh" align="center" justify="center" w="60%" m="auto">
      {filteredExperiences.map(({ id, title, status, description }) => (
        <Stack key={id}>
          <HStack>
            <Stack w="55%" mr="auto" h="100%" justify="space-between">
              <NavButtons />
              <Stack>
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
                fontSize="4xl"
                fontWeight="300"
                lineHeight="24px"
                color={secondaryColor}
              >
                {description}
              </Text>
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

              <Button
                fontWeight="600"
                fontSize="2xl"
                w="max-content"
                variant="outline"
              >
                Back to Home
              </Button>
            </Stack>
            <Image src={ExpMedgrocer} />
          </HStack>
        </Stack>
      ))}
      <HStack w="100%" gap={6}>
        {experiences.map(({ id, title, date }) => (
          <Button
            border="1px solid white"
            key={id}
            py={8}
            variant="outline"
            onClick={() => handleButtonClick(id)}
          >
            <Stack gap={0} align="flex-start">
              <Heading fontWeight="400" fontSize="4xl">
                {title}
              </Heading>
              <Text fontWeight="300" fontSize="3xl">
                {date}
              </Text>
            </Stack>
          </Button>
        ))}
      </HStack>
    </Stack>
  );
};

export default Experience;
