import React, { useEffect, useState } from "react";
import {
  Box,
  VStack,
  Stack,
  Tag,
  Text,
  useColorModeValue,
  Wrap,
  useBreakpointValue,
  Flex,
  Circle,
  Image,
  Avatar,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ProjectProps } from "../types/project.types";
import {
  getPeriod,
  isOpenPeriod,
  PERIOD,
  timeLeftToFund,
  yoctoToDollarStr,
} from "../lib/util";
import { fetchstICPPrice } from "../queries/prices";
import FundButton from "./FundButon";
import { getKickstarters, getProjectDetails } from "../lib/icp";
import { useStore as projectStore } from "../stores/project";
import PageLoading from "./PageLoading";
const ActiveProject = (props: { data: ProjectProps }) => {
  const projectStaticData = props.data;
  const { all, currentProject, setAll, setCurrentProject } = projectStore();
  const [totalRaised, setTotalRaised] = useState(0);
  const tagColor = useColorModeValue("gray.600", "gray.300");
  const router = useRouter();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [projectData, setProjectData] = useState<any>();
  const [projectDetails, setProjectDetails] = useState<any>();

  useEffect(() => {
    (async () => {
      // TODO MOVE TO A COMMON FUNCTION TO REUSE
      const details = await getProjectDetails(projectStaticData.id);
      setProjectDetails(details)
      const projects = await getKickstarters();

      setProjectData({
        ...projectStaticData,
        kickstarter: {
          ...details
        },
      });
      setCurrentProject({
        ...projectStaticData,
        kickstarter: {
          ...details
        },
      });

      const stICPPrice = await fetchstICPPrice();
      setTotalRaised(details.total_deposited ? 
        parseInt(details.total_deposited) * stICPPrice : 0
      );
    })();
  }, []);

  if (!projectData) return <PageLoading />;

  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      key={projectData.slug}
      p={0}
      mt={10}
      boxShadow="sm"
      rounded="lg"
    >
      <Flex
        borderRadius={{ base: "md", md: "lg" }}
        minW={{ base: "100%", lg: "300px", xl: "400px" }}
        minH={210}
        backgroundColor={"black"}
        alignItems={"center"}
      >
        <Image
          src={projectData.imageUrl}
          alt="project"
          borderRadius="xl"
          fit="cover"
          maxWidth={{ base: "100%", lg: "300px", xl: "400px" }}
        />
      </Flex>
      <Box
        pr={{ base: "4", lg: "4", xl: "10" }}
        pb={{ base: "4", lg: "4", xl: "10" }}
        pl={{ base: "4", lg: "4", xl: "10" }}
      >
        <Stack
          spacing={{ base: "1", md: "2" }}
          direction={{ base: "column", md: "row" }}
          hidden={isMobile}
        >
          <Circle boxShadow="xl" ml={{ base: 0, lg: "0", xl: "-8" }} mb="2">
            <Circle m="2" overflow={"hidden"}>
              {projectData.avatarUrl && (
                <Avatar src={projectData.avatarUrl} boxSize="10" />
              )}
            </Circle>
          </Circle>
        </Stack>
        <Stack
          spacing={{ base: "1", md: "2" }}
          direction={{ base: "column", md: "row" }}
        >
          <Text as="h2" mr={"10px"} fontWeight="bold" fontSize="2xl">
            {projectData.name}
          </Text>
          {/* {project?.verified && (
              <Image
                src={"/check.svg"}
                alt="check"
                width={"16px"}
                height={"16px"}
              />
            )} */}
        </Stack>
        <Text mt="2">{projectData.description}</Text>
        <Wrap shouldWrapChildren mt="5" fontWeight={700} color={tagColor}>
          {projectData.tags &&
            projectData.tags.map((tag: string) => (
              <Tag key={tag} color="inherit" px="3">
                {tag}
              </Tag>
            ))}
        </Wrap>
      </Box>
      <Flex alignItems={"center"} pb={{ base: "2rem", md: 0 }}>
        <Stack minW={{ base: 160, xl: 190 }} spacing="10" w="full">
          <VStack
            align={{ base: "center", lg: "flex-start" }}
            spacing="1"
            w="full"
          >
            {getPeriod(projectData.kickstarter) === PERIOD.OPEN &&
              timeLeftToFund(projectData.kickstarter?.close_timestamp) && (
                <Stack
                  align={{ base: "center", lg: "flex-start" }}
                  spacing="4"
                  p="1rem"
                >
                  <Text fontSize="xs" fontWeight="700">
                    {" "}
                    TIME LEFT
                  </Text>
                  <Text fontSize="md" color="emphasized">
                    {timeLeftToFund(projectDetails.close_timestamp)}
                  </Text>
                </Stack>
              )}

            {getPeriod(projectData.kickstarter) === PERIOD.NOT_OPEN &&
              timeLeftToFund(projectData.kickstarter?.open_timestamp) && (
                <Stack
                  align={{ base: "center", lg: "flex-start" }}
                  spacing="4"
                  p="1rem"
                >
                  <Text fontSize="xs" fontWeight="700">
                    {" "}
                    OPEN IN
                  </Text>
                  <Text fontSize="md" color="emphasized">
                    {timeLeftToFund(projectData.kickstarter?.open_timestamp)}
                  </Text>
                </Stack>
              )}

            <Stack
              align={{ base: "center", lg: "flex-start" }}
              spacing="4"
              p="1rem"
            >
              <Text mt={5} fontSize="xs" fontWeight="700">
                TOKENOMICS
              </Text>
              <Text mt={14} fontSize="md" color="emphasized">
                <b>${totalRaised} </b> raised
              </Text>
              <Text mt={14} color="emphasized" fontSize="md">
                <b>{projectDetails.total_supporters ? parseInt(projectDetails.total_supporters) : 0}</b>{" "}
                supporters
              </Text>
              {
                // projectData?.verified && <CircleWavyCheck size={24} />
              }
            </Stack>

            <Stack
              mt={"2rem"}
              align={{ base: "center", lg: "flex-start" }}
              spacing="4"
              w="full"
              maxW="sm"
              p="1rem"
            >
              <FundButton
                show={true}
                completed={!!projectData.kickstarter?.active}
                onClick={() => router.push(`/project/${projectData.id}`)}
              ></FundButton>
            </Stack>
          </VStack>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default ActiveProject;
