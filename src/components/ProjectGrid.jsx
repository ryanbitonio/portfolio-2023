import { SimpleGrid, Flex, Text, Icon, HStack } from "@chakra-ui/react";
import useProjects from "../hooks/useProjects";
import ProjectCard from "./ProjectCard";
import { ReactComponent as ProjectIcon } from "../assets/icons/Project/project.svg";

const ProjectGrid = () => {
  const { data: projects } = useProjects();
  return (
    <Flex
      direction="column"
      align={{ base: "space-around", md: "flex-start" }}
      justify={"center"}
    >
      <HStack alignSelf="flex-start" pb={5}>
        <Icon boxSize={5} mr={3} as={ProjectIcon} />
        <Text fontWeight="semibold">Projects</Text>
      </HStack>
      <SimpleGrid
        columns={{ base: "1", sm: "2", md: "2", lg: "3" }}
        spacing={{ base: "11", md: "22" }}
      >
        {projects?.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            backgroundImage={project.background_image}
            stack={project.stack}
            language={project.language}
            alt={project.alt}
            url={project.url}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default ProjectGrid;
