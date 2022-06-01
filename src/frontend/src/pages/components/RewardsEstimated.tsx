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
} from "../../types/project.types";
import { getCurrentFundingGoal, ntoy, yton } from "../../lib/util";
import moment from "moment";
import { useStore } from "../../stores/wallet";
import { getSupporterDetailedList } from "../../lib/icp";

const RewardsEstimated = (props: { kickstarter: KickstarterProps }) => {
  const kickstarter = props.kickstarter;
  const [goalSelected, setGoalSelected] = useState<number>(0);
  const [estimatedRewards, setEstimatedRewards] = useState<number>(0);
  const [amountOfStNear, setAmountOfStNear] = useState<number>(0);
  const { wallet, setWallet } = useStore();
  const [supportedProjets, setSupportedProjets] = useState([])
  const [rewards, setRewards] = useState<string>("");
  const [invested, setInvested] = useState<string>("");
  const [lockupTime, setLockupTime] = useState<string>("");

  useEffect(() => {
    (async () => {
      const result: any = await getSupporterDetailedList(wallet?.getAccountId());
      if (result && result.length) {
        setSupportedProjets(result)
        const winnerGoal: KickstarterGoalProps = getCurrentFundingGoal(
          kickstarter.goals,
          kickstarter.total_deposited
        );
        const supportedProject = result.find(
          (p: SupportedKickstarter) => p.kickstarter_id === kickstarter?.id
        );
        if (winnerGoal) {
          const myRewards =
            yton(winnerGoal.tokens_to_release_per_stnear) *
            yton(supportedProject.supporter_deposit);
          setRewards(ntoy(myRewards));
          setLockupTime(
            moment(winnerGoal.unfreeze_timestamp).format("MMMM Do, YYYY")
          );
        }
        setInvested(yton(supportedProject.supporter_deposit).toString());
      }
    })();
  }, [props]);

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
                          src="/stNEARorig.svg"
                        />
                      </Square>
                      <Text
                        fontSize="md"
                        lineHeight="6"
                        fontWeight="bold"
                        color="gray.900"
                      >
                        stNEAR
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
                        {yton(rewards)}
                      </Text>
                      <Square minW="20px">
                        <Avatar
                          boxSize="20px"
                          objectFit="cover"
                          src={kickstarter?.project_token_icon}
                        />
                      </Square>
                      <Text
                        fontSize="md"
                        lineHeight="6"
                        fontWeight="bold"
                        color="gray.900"
                      >
                        {kickstarter?.project_token_symbol}
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
