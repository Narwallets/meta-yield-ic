import { Box, Text, Stack } from "@chakra-ui/react";
import * as React from "react";
import ProjectCard from "./ProjectCard";
import ProjectGrid from "./ProjectGrid";
import { ProjectProps } from "../types/project.types";

const Projects = (props: { data: ProjectProps[] }) => {
  // const { data, isLoading } = useGetProjects();
  const data = props.data;
  if (!props.data) return <></>;

  return (
    <Box
      mx="auto"
      py={{ base: "6", md: "8", lg: "12" }}
      as="section"
      id="projects"
    >
      <Stack spacing="10">
        <Text fontSize="4xl" lineHeight="10" fontWeight="bold">
          Other Projects
        </Text>
        <ProjectGrid>
          {data?.map((project: ProjectProps) => (
            <ProjectCard
              key={project.kickstarter && project.kickstarter.id}
              project={project}
            />
          ))}
        </ProjectGrid>
      </Stack>
    </Box>
  );
};

export default Projects;
