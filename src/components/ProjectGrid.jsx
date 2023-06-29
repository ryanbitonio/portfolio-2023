import { SimpleGrid, Flex, Text, Icon, HStack } from "@chakra-ui/react";
import useProjects from "../hooks/useProjects";
import ProjectCard from "./ProjectCard";
import { ReactComponent as ProjectIcon } from "../assets/icons/Project/project.svg";

const ProjectGrid = () => {
  const { data: projects } = useProjects();
  return (
    <Flex direction="column" align={"center"} justify={"center"}>
      <HStack alignSelf="flex-start">
        <Icon mr={3} as={ProjectIcon} />
        <Text fontWeight="semibold">Projects</Text>
      </HStack>
      <SimpleGrid columns={{ base: "2", md: "2", lg: "3" }} spacing={22}>
        {projects?.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            backgroundImage={project.background_image}
            stack={project.stack}
            language={project.language}
            alt={project.alt}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default ProjectGrid;
