import Hero from "../components/Hero";
import ActiveProject from "../components/ActiveProject";
import Projects from "../components/Projects";
import HowItWorks from "../components/HowItWorks";
import { Box, Container, Text } from "@chakra-ui/react";
import React, {useEffect} from "react";
import ErrorHandlerHash from "../components/ErrorHandlerHash";
import PageLoading from "../components/PageLoading";
import { data} from '../constants/_data'
import { useStore } from "../stores/project";

const Home = () => {
  const {all, currentProject, setAll, setCurrentProject} = useStore();
  useEffect(() => {
    (async () => {
      // ToDo: update after canister function is implemented
      setAll(data);
      setCurrentProject(data.find(p => (p.active === true)))
    })();
  }, []);

  if (!all) return <PageLoading />;

  return (
    <>
      <ErrorHandlerHash></ErrorHandlerHash>
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
              {currentProject && (<ActiveProject data={currentProject} />) }
             {/* </div> */}
          {/* ))} */}
        </Box>
        {all && <Projects data={all} />}
        <HowItWorks />
      </Container>
    </>
  );
};

export default Home;
