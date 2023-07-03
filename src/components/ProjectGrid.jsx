import { SimpleGrid, Flex, Text, Icon, HStack } from "@chakra-ui/react";
import useProjects from "../hooks/useProjects";
import ProjectCard from "./ProjectCard";

const ProjectGrid = () => {
  const { data: projects } = useProjects();
  return (
    <Flex direction="column" align={{ base: "space-around", md: "default" }}>
      <HStack pb={5}>
        <Text fontWeight="semibold" fontSize="5xl" letterSpacing="tight">
          Featured Projects Today
        </Text>
      </HStack>
      <SimpleGrid
        gridTemplateColumns="repeat(auto-fit, minmax(202px, 1fr))"
        spacing={3}
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
