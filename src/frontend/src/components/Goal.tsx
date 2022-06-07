import {
  BoxProps,
  Divider,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as React from "react";
import { formatToLocaleNear, yton } from "../lib/util";
import { KickstarterGoalProps } from "../types/project.types";
import GoalCircle from "./GoalCircle";

interface GoalProps extends BoxProps {
  kickstarterGoal: KickstarterGoalProps;
  isCompleted: boolean;
  isActive: boolean;
  isLastGoal: boolean;
  isFirstGoal: boolean;
}

const Goal = (props: GoalProps) => {
  const {
    isActive,
    isCompleted,
    isLastGoal,
    isFirstGoal,
    kickstarterGoal,
    ...stackProps
  } = props as GoalProps;
  const isMobile = useBreakpointValue({ base: true, md: false });

  const orientation = useBreakpointValue<"horizontal" | "vertical">({
    base: "vertical",
    md: "horizontal",
  });
  if (!props) return <></>;
  return (
    <Stack
      spacing="4"
      direction={{ base: "row", md: "column" }}
      flex="1"
      {...stackProps}
    >
      <Stack
        spacing="0"
        align="center"
        direction={{ base: "column", md: "row" }}
      >
        <Divider
          display={isMobile ? "none" : "initial"}
          orientation={orientation}
          borderWidth="1px"
          borderColor={
            isFirstGoal
              ? "transparent"
              : isCompleted || isActive
              ? "accent"
              : "inherit"
          }
        />
        <GoalCircle
          isActive={isActive}
          isCompleted={isCompleted}
          goalNumber={kickstarterGoal?.id + 1}
        />
        <Divider
          orientation={orientation}
          borderWidth="1px"
          borderColor={
            isCompleted && !isLastGoal ? "accent" : isLastGoal ? "transparent" : "inherit"
          }
        />
      </Stack>
      <Stack
        spacing="0.5"
        pb={isMobile && !isLastGoal ? "8" : "0"}
        align={{ base: "start", md: "center" }}
      >
        <Text color="emphasized" fontWeight="medium">
          {kickstarterGoal?.name.replaceAll('_',' ')}
        </Text>
        <Text color="emphasized" fontWeight="medium">
          {kickstarterGoal
            ? `${formatToLocaleNear(yton(kickstarterGoal?.desired_amount))} stNEAR `
            : "N/D"}
        </Text>
      </Stack>
    </Stack>
  );
};

export default Goal;
