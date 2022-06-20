import dynamic from "next/dynamic";
const ActiveProject = dynamic(() => import("../components/ActiveProject"), {
  ssr: false,
});
const Hero = dynamic(() => import("../components/Hero"), {
  ssr: false,
});
const Projects = dynamic(() => import("../components/Projects"), {
  ssr: false,
});
const HowItWorks = dynamic(() => import("../components/HowItWorks"), {
  ssr: false,
});
const PageLoading = dynamic(() => import("../components/PageLoading"), {
  ssr: false,
});
import { Box, Container, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { data } from "../constants/_data";
import { useStore } from "../stores/project";
import { getKickstarters } from "../lib/icp";

const Home = () => {
  const { all, currentProject, setAll, setCurrentProject } = useStore();
  useEffect(() => {
    (async () => {
      setAll(data);
      setCurrentProject(data.find(p => (p.active === true)))
    })();
  }, []);

  if (!all) return <PageLoading />;

  return (
    <>
      <Container maxW="container.xl">
        <Hero />
        <Box
          id="projects"
          as="section"
          pt={{ base: "50", md: "100" }}
          pb={{ base: "12", md: "24" }}
        >
          <Text fontSize="4xl" lineHeight="10" fontWeight="bold">
            Current Projects
          </Text>
          {/* {currentProject.map((p: any) => ( */}
          {/* <div key={p.kickstarter.id}> */}
          {currentProject && <ActiveProject data={currentProject} />}
          {/* </div> */}
          {/* ))} */}
        </Box>
        {/* {all && <Projects data={all} />} */}
        <HowItWorks />
      </Container>
    </>
  );
};

export default Home;
