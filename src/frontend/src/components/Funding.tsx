import React, { useEffect, useState } from "react";
import {
  Button,
  Stack,
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  HStack,
  InputLeftAddon,
  Square,
  Avatar,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import moment from "moment";
import { useFormik } from "formik";
import { KickstarterGoalProps } from "../types/project.types";
import { fundToKickstarter, withdraw } from "../lib/icp";
import { useStore as useAuth } from "../stores/auth";
import { useStore as useBalance } from "../stores/balance";
import { getCurrentFundingGoal, ntoy, yton } from "../lib/util";
import depositSchemaValidation from "../validation/fundSchemaValidation";
import withdrawSchemaValidation from "../validation/withdrawSchemaValidation";

const Funding = (props: { project: any; supportedDeposited: number }) => {
  const project = props.project;
  const supportedDeposited = props.supportedDeposited;
  const isWithdrawEnabled = supportedDeposited > 0;
  const router = useRouter();
  const { STICPBalance } = useBalance();
  const { loggedIn, principal, setLoggedIn, setPrincipal } = useAuth();
  const toast = useToast();
  const MINIMUM_TO_FUND = process.env.MINIMUM_AMOUNT_DEPOSIT
    ? process.env.MINIMUM_AMOUNT_DEPOSIT
    : 0;
  const [amountDeposit, setAmountDeposit] = useState<number>(0);
  const [balance, setBalance] = useState<number>(parseInt(STICPBalance.toString()));
  const [fundingNeeded, setFundingNeeded] = useState<number | undefined>(
    undefined
  );
  const [lockUpPeriod, setLockUpPeriod] = useState<number | undefined>(
    undefined
  );
  const [currentFundingGoal, setCurrentFundingGoal] =
    useState<KickstarterGoalProps>();
  const [estimatedRewards, setEstimatedRewards] = useState<number>(0);
  const handleChangeDeposit = (event: any) =>
    setAmountDeposit(event.target.value);

  const onMaxClickDeposit = async (event: any) => {
    formikDeposit.setFieldValue("amount_deposit", balance);
    setAmountDeposit(balance);
  };
  const onMaxClickWithdraw = async (event: any) =>
    formikWithdraw.setFieldValue("amount_withdraw", supportedDeposited);

  const initialValuesDeposit: any = {
    amount_deposit: 0,
    balance: 0,
  };
  const formikDeposit = useFormik({
    initialValues: initialValuesDeposit,
    validationSchema: depositSchemaValidation,
    validateOnMount: true,
    enableReinitialize: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values: any) => {
      if (values.amount_deposit < MINIMUM_TO_FUND) {
        toast({
          title: "Transaction error.",
          description: `The amount to deposit must be at least ${MINIMUM_TO_FUND} stICP`,
          status: "error",
          duration: 9000,
          position: "top-right",
          isClosable: true,
        });
      } else {
        const result = await fundToKickstarter(
          principal,
          project.id,
          values.amount_deposit
        );
      }
    },
  });

  const initialValuesWithdraw: any = {
    amount_withdraw: 0,
    supporterDeposited: 0,
  };

  const formikWithdraw = useFormik({
    initialValues: initialValuesWithdraw,
    validationSchema: withdrawSchemaValidation,
    validateOnMount: true,
    enableReinitialize: true,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values: any) => {
      if (values.amount_deposit <= 0) {
        toast({
          title: "Transaction error.",
          description: "The amount to withdraw must be greater than 0",
          status: "error",
          duration: 9000,
          position: "top-right",
          isClosable: true,
        });
      } else {
        const result = await withdrawAmount(ntoy(values.amount_withdraw));
      }
    },
  });

  const withdrawAmount = async (amount: string) => {
    withdraw(principal, project.id, amount).then((val) => {
      console.log("Return withdraw success", val);
    });
  };

  const getFormikError = () => {
    const error =
      formikDeposit.errors && formikDeposit.errors.amount_deposit
        ? formikDeposit.errors.amount_deposit
        : "";
    return {
      __html: error as string,
    };
  };

  useEffect(() => {
    if (project) {
      const current = getCurrentFundingGoal(
        project.kickstarter.goals,
        project.kickstarter.total_deposited
      );
      setCurrentFundingGoal(current);
      if (current) {
        setFundingNeeded(current.desired_amount);
        const lockup = moment(current.unfreeze_timestamp).diff(
          moment(project?.kickstarter?.close_timestamp),
          "months"
        );
        setLockUpPeriod(lockup);
      }
    }
  }, [project]);

  useEffect(() => {
    if (currentFundingGoal) {
      const tokenAwardPerStICP: string =
        currentFundingGoal.tokens_to_release_per_sticp;
        const estimatedRewardss= parseInt(tokenAwardPerStICP) * amountDeposit
      setEstimatedRewards(estimatedRewardss)
    }
  }, [amountDeposit, currentFundingGoal]);

  useEffect(() => {
    formikDeposit.setFieldValue("balance", balance);
  }, [balance]);

  if (!project) return <></>;

  return (
    <Tabs defaultIndex={0}>
      <TabList>
        <Tab>Deposit</Tab>
        <Tab isDisabled={!isWithdrawEnabled}>Withdraw</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <HStack>
            <InputGroup>
              <InputLeftAddon>
                <Square minW="30px">
                  <Avatar
                    boxSize="30px"
                    objectFit="cover"
                    src="/sticporig.svg"
                  />
                  <Text ml={2}>stICP</Text>
                </Square>
              </InputLeftAddon>
              <Input
                id="amount_deposit"
                name="amount_deposit"
                placeholder="0"
                value={formikDeposit.values.amount_deposit}
                onPaste={formikDeposit.handleChange}
                onBlur={formikDeposit.handleBlur}
                onChange={(e) => {
                  handleChangeDeposit(e);
                  formikDeposit.handleChange(e);
                }}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={onMaxClickDeposit}>
                  Max
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button
              colorScheme="blue"
              size="lg"
              // disabled={!formikDeposit.isValid}
              onClick={(e: any) => formikDeposit.handleSubmit(e)}
            >
              Deposit
            </Button>
          </HStack>
          {!formikDeposit.isValid && (
            <HStack mt={5}>
              <Text
                dangerouslySetInnerHTML={getFormikError()}
                color={"red"}
              ></Text>
            </HStack>
          )}

          <Stack mt={4}>
            <Text
              fontSize="md"
              lineHeight="6"
              fontWeight="semibold"
              color="gray.500"
            >
              ESTIMATED REWARDS: {estimatedRewards}{" "}
              {project.kickstarter.project_token_symbol}
            </Text>
          </Stack>
        </TabPanel>
        <TabPanel>
          <HStack>
            <InputGroup>
              <InputLeftAddon>
                <Square minW="30px">
                  <Avatar
                    boxSize="30px"
                    objectFit="cover"
                    src="/sticporig.svg"
                  />
                  <Text ml={2}>stICP</Text>
                </Square>
              </InputLeftAddon>
              <Input
                id="amount_withdraw"
                name="amount_withdraw"
                placeholder="0"
                value={formikWithdraw.values.amount_withdraw}
                onPaste={formikWithdraw.handleChange}
                onBlur={formikWithdraw.handleBlur}
                onChange={formikWithdraw.handleChange}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={onMaxClickWithdraw}>
                  Max
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button
              colorScheme="blue"
              size="lg"
              disabled={!formikWithdraw.isValid}
              onClick={(e: any) => {
                formikWithdraw.handleSubmit(e);
              }}
            >
              Withdraw
            </Button>
          </HStack>
          <Stack mt={4}>
            <Text
              fontSize="md"
              lineHeight="6"
              fontWeight="semibold"
              color="gray.500"
            >
              CURRENT DEPOSITS: {supportedDeposited} stICP
            </Text>
          </Stack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default Funding;
