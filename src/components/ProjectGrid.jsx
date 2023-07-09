import {
  Alert,
  AlertIcon,
  Flex,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import useProjects from "../hooks/useProjects";
import ProjectCard from "./ProjectCard";
import ProjectCardSkeleton from "./ProjectCardSkeleton";

const ProjectGrid = ({ color, secondaryColor }) => {
  const { data: projects, error, isLoading } = useProjects();
  const skeletons = [...Array(11).keys()].map(i => i + 1);

  if (error)
    return (
      <Alert bg="#E53E3E" color="white" status="error">
        <AlertIcon color="white" />
        There was an error processing your request
      </Alert>
    );

  return (
    <Flex direction="column" align={{ base: "space-around", md: "default" }}>
      <HStack pb={5}>
        <Text fontWeight="semibold" fontSize="5xl" letterSpacing="tight">
          Featured Projects Today
        </Text>
      </HStack>

      <SimpleGrid
        // gridTemplateColumns="repeat(auto-fit, minmax(195px, 1fr))"
        gridTemplateColumns={{
          base: "repeat(auto-fit, minmax(195px, 1fr))",
          md: "repeat(auto-fit, minmax(165px, 1fr))",
          lg: "repeat(auto-fit, minmax(185px, 1fr))",
          xl: "repeat(auto-fit, minmax(195px, 1fr))",
        }}
        spacing={3}
      >
        {isLoading &&
          skeletons.map(skeleton => <ProjectCardSkeleton key={skeleton} />)}
        {projects?.map(project => (
          <ProjectCard
            color={color}
            secondaryColor={secondaryColor}
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
