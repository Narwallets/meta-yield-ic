import React, { useEffect, useState } from "react";
import {
  Stack,
  Text,
  Flex,
  Spacer,
  Tag,
  Container,
  Progress,
  Box,
} from "@chakra-ui/react";
import Card from "./Card";
import {
  KickstarterGoalProps,
  KickstarterProps,
} from "../types/project.types";
import Goal from "./Goal";
import { useGoal } from "../hooks/useGoal";
import moment from "moment";
import { isOpenPeriod } from "../lib/util";

const GoalsProgressCard = (props: { kickstarter: any }) => {
  const kickstarter = props.kickstarter as any;
  const getCurrentFundingGoal = () => {
    if (kickstarter && kickstarter.goals) {
      const [current] = kickstarter.goals.filter(
        (g: any) =>
          g.desired_amount > kickstarter.total_deposited
      );
      if (!current) {
        return kickstarter?.goals[kickstarter.goals.length - 1];
      }

      return current;
    }

    return undefined;
  };

  const getCurrentGoalId = () => {
    if (kickstarter?.active) {
      const currentFundingGoal = getCurrentFundingGoal()?.id
      return currentFundingGoal
    }
    if (kickstarter?.successful) {
      return kickstarter?.winner_goal_id
  
    }
    return undefined;
  }
  
  const [goal, setGoal] = useState<KickstarterGoalProps>();
  const [goalRaised, setGoalRaised] = useState(0);
  const [goalProgress, setGoalProgress] = useState(0);
  const [goalStatus, setGoalStatus] = useState<string | undefined>(undefined);
  const [currentGoalId, { setGoalId }] = useGoal({
    maxGoal: kickstarter && kickstarter.goals ? kickstarter.goals.length : 0,
    initialGoal: getCurrentFundingGoal()
  });
  // const [currentGoalId,  setGoalId ] = useState<number>()
  const getGoalStatus = () => {
    if (!kickstarter.active) {
      if (kickstarter.successful) 
        return "Completed"
      return "Timed Out"
    }

    const goal = getCurrentFundingGoal();
    if (goal) {
      const isOpen = isOpenPeriod(kickstarter)
      if (isOpen) {
        return "In Progress...";
      } else 
        return "Coming soon...";
    }
    return "";
  };
  useEffect(() => {
  
    if (kickstarter && kickstarter.goals) {
      const goal = kickstarter.goals.find((g: any) => g.id == currentGoalId);
      if (goal !== null && goal!== undefined) {
        const goalDesiredAmount = parseInt(goal.desired_amount);
        const deposited = parseInt(kickstarter.total_deposited);
        const raised =
          currentGoalId == 0
            ? deposited
            : deposited > goalDesiredAmount
            ? deposited
            : goalDesiredAmount - deposited;
        setGoal(goal);
        setGoalRaised(raised);
        setGoalProgress((raised * 100) / goalDesiredAmount);
        setGoalStatus(getGoalStatus());
        const currentFundingGoalis = getCurrentGoalId();
      }
    }
  }, [currentGoalId]);
  if (!props || !props.kickstarter) return <></>;
  return (
    <Card>
      <Text>GOALS</Text>
      <Container py={{ base: "4", md: "8" }}>
        <Stack>
          <Stack spacing="0" direction={{ base: "column", md: "row" }}>
            {kickstarter.goals.map((goal: any) => 
            (
                <Goal
                  key={goal.id}
                  kickstarterGoal={goal}
                  isActive={currentGoalId == goal.id}
                  isCompleted={parseInt(kickstarter.total_deposited) >= parseInt(goal.desired_amount)}
                  isFirstGoal={goal.id == 0}
                  isLastGoal={kickstarter.goals.length == parseInt(goal.id) + 1}
                />
            )
            )}
          </Stack>
          <Progress colorScheme="indigo" value={goalProgress} height='28px' rounded={"2xl"} shadow="sm" />
        </Stack>
      </Container>
      <Flex>
        <Spacer />
        <Box>
          <Tag>{goalStatus}</Tag>
        </Box>
      </Flex>
    </Card>
  );
};

export default GoalsProgressCard;
