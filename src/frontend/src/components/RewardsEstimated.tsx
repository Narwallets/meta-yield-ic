import React, { useEffect, useState, ChangeEvent } from "react";
import {
  Stack,
  Text,
  Box,
  Flex,
  Divider,
  Spacer,
  Wrap,
  Square,
  Avatar,
} from "@chakra-ui/react";
import {
  KickstarterGoalProps,
  KickstarterProps,
  SupportedKickstarter,
} from "../types/project.types";
import { getCurrentFundingGoal } from "../lib/util";
import moment from "moment";
import { useStore as useAuth } from "../stores/auth";
import { useStore as useProject } from "../stores/project";
import { getMyProjectsFounded, getProjectDetails } from "../lib/icp";

const RewardsEstimated = (props: { kickstarter: any }) => {
  // const kickstarter = props.kickstarter;
  const {currentProject: project, updateCurrentProject} = useProject()
  const [goalSelected, setGoalSelected] = useState<number>(0);
  const [estimatedRewards, setEstimatedRewards] = useState<number>(0);
  const [amountOfStNear, setAmountOfStNear] = useState<number>(0);
  const { loggedIn, principal, setLoggedIn, setPrincipal } = useAuth();
  const [supportedProjets, setSupportedProjets] = useState([])
  const [rewards, setRewards] = useState<string>("");
  const [invested, setInvested] = useState<string>("");
  const [lockupTime, setLockupTime] = useState<string>("");

  useEffect(() => {
    (async () => {
      const result: any = await getMyProjectsFounded(project.kickstarter?.id, principal.toString());
      if (result && project.kickstarter.goals) {
        setSupportedProjets(result)

        const winnerGoal = getCurrentFundingGoal(
          project.kickstarter.goals,
          project.kickstarter.total_deposited
        );
        const supportedProject =  result;
        if (winnerGoal) {
          const myRewards =
            parseInt(winnerGoal.tokens_to_release_per_sticp) *
            parseInt(supportedProject.supporter_deposit);
          setRewards(myRewards.toString());
          setLockupTime(
            moment(parseInt(winnerGoal.unfreeze_timestamp)).format("MMMM Do, YYYY")
          );
        }
     
        setInvested(supportedProject.supporter_deposit.toString());
      }
    })();
  }, [project.kickstarter]);

  return (
    <Stack>
      <Text fontSize="sm" fontWeight="subtle">
        YOUR INVESTMENT
      </Text>
      <Flex >
        <Box>
          <Stack minW={"580px"}>
            <Stack>
              <Box p={"40px"} bg="light">
                <Stack spacing="4">
                  <Flex>
                    <Text
                      fontSize="md"
                      lineHeight="6"
                      fontWeight="semibold"
                      color="gray.500"
                    >
                      Funded amount
                    </Text>
                    <Spacer />
                    <Wrap>
                      <Text
                        fontSize="md"
                        lineHeight="6"
                        fontWeight="bold"
                        color="gray.900"
                      >
                        {invested}
                      </Text>
                      <Square minW="20px">
                        <Avatar
                          boxSize="20px"
                          objectFit="cover"
                          src="/sticporig.svg"
                        />
                      </Square>
                      <Text
                        fontSize="md"
                        lineHeight="6"
                        fontWeight="bold"
                        color="gray.900"
                      >
                        stICP
                      </Text>
                    </Wrap>
                  </Flex>
                  <Divider />
                  <Flex>
                    <Text
                      fontSize="md"
                      lineHeight="6"
                      fontWeight="semibold"
                      color="gray.500"
                    >
                      Tokens Rewards
                    </Text>
                    <Spacer />
                    <Wrap>
                      <Text
                        fontSize="md"
                        lineHeight="6"
                        fontWeight="bold"
                        color="gray.900"
                      >
                        {rewards}
                      </Text>
                      <Square minW="20px">
                        <Avatar
                          boxSize="20px"
                          objectFit="cover"
                          src={project.kickstarter?.project_token_icon}
                        />
                      </Square>
                      <Text
                        fontSize="md"
                        lineHeight="6"
                        fontWeight="bold"
                        color="gray.900"
                      >
                        {project.kickstarter?.project_token_symbol}
                      </Text>
                    </Wrap>

                    
               
                  </Flex>
                  <Divider />
                  <Flex>
                    <Text
                      fontSize="md"
                      lineHeight="6"
                      fontWeight="semibold"
                      color="gray.500"
                    >
                      Lockup end date
                    </Text>
                    <Spacer />
                    <Text
                      fontSize="md"
                      lineHeight="6"
                      fontWeight="bold"
                      color="gray.900"
                    >
                      {lockupTime}
                    </Text>
                  </Flex>
                </Stack>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Flex>
    </Stack>
  );
};

export default RewardsEstimated;
