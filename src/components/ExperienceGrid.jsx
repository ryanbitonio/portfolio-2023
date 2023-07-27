import { Flex, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import experiences from "../../data/experience";
import ProjectCard from "./ProjectCard";

const ExperienceGrid = ({ color, secondaryColor, title }) => {
  return (
    <Flex direction="column" align={{ base: "space-around", md: "default" }}>
      <HStack pb={5}>
        <Text fontWeight="semibold" fontSize="5xl" letterSpacing="tight">
          {title}
        </Text>
      </HStack>
      <SimpleGrid
        gridTemplateColumns="repeat(auto-fill, minmax(220px, 1fr))"
        spacing={3}
      >
        {experiences?.map(({ id, title, year, thumbnail, url }) => (
          <ProjectCard
            color={color}
            secondaryColor={secondaryColor}
            key={id}
            title={title}
            description={year}
            backgroundImage={thumbnail}
            url={url}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default ExperienceGrid;
