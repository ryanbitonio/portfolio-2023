import { SimpleGrid, Flex } from "@chakra-ui/react";
import useProjects from "../hooks/useProjects";
import ProjectCard from "./ProjectCard";

const ProjectGrid = () => {
  const { data: projects } = useProjects();
  return (
    <Flex h="100%" align={"center"} justify={"center"}>
      <SimpleGrid columns={3} spacing={22}>
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
