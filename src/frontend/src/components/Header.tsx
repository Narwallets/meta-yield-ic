import * as React from "react";
import { useState, useEffect } from "react";
import {
  Button,
  Text,
  ButtonProps,
  Box,
  Flex,
  HStack,
  Link,
  LinkOverlay,
  Container,
  useBreakpointValue,
  ButtonGroup,
  Spacer,
  Square,
  Image,
  useToast,
  Stack,
  Show,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  IconButton,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { colors } from "../constants/colors";
import { useStore as useWallet } from "../stores/wallet";
import { useStore as useBalance } from "../stores/balance";
import { useStore as useAuth } from "../stores/auth";
import { useStore as useActor } from "../stores/actor";
import { useRouter } from "next/router";
import { formatToLocaleNear } from "../lib/util";
import { AuthClient } from "@dfinity/auth-client";
import { Principal } from "@dfinity/principal";
import { getBalances } from "../lib/balance";
import { getTotalKickstarters, getKickstarters } from "../lib/icp";

const Header: React.FC<ButtonProps> = (props) => {
  const { loggedIn, principal, setLoggedIn, setPrincipal } = useAuth();
  const { backendActor, setBackendActor} = useActor();
  const {
    ICPBalance,
    setICPBalance,
    STICPBalance,
    setSTICPBalance,
    pTokenBalance,
    setPTokenBalance,
    webBalance,
    setWebBalance

  } = useBalance();
  const [signInAccountId, setSignInAccountId] = useState(null);
  const [client, setClient] = useState<AuthClient>();
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  const router = useRouter();
  const toast = useToast();
  // const config = getConfig()
  const onConnect = async () => {
    client?.login({
      identityProvider:
        // "https://identity.ic0.app/#authorize",
        process.env.DFX_NETWORK === "ic"
          ? "https://identity.ic0.app/#authorize"
          : `http://${process.env.NEXT_PUBLIC_INTERNET_IDENTITY_CANISTER_ID}.localhost:8000/#authorize`,
      onSuccess: handleAuth,
    });
  };

  const logout = async () => {
    await client?.logout();

    setLoggedIn(false);
    setPrincipal(Principal.anonymous());
    // setActor(createActor());
  };

  const handleAuth = () => {
    // Update Auth Store
    setLoggedIn(true);
    const tempPrincipal = client?.getIdentity().getPrincipal();
    if (tempPrincipal) {
      setPrincipal(tempPrincipal);
      console.log(`CALL "make init-local II_PRINCIPAL=${tempPrincipal.toString()}" to init local balance`);
      getBalances(
        true,
        tempPrincipal,
        setICPBalance,
        setSTICPBalance,
        setPTokenBalance,
        setWebBalance
      );
    }
  };
  const getStICP = () => {
    // Refresh principal local balance
    // To transfer tokens, use the DIP canister to transfer tokens to <II_PRINCIPAL>,
    // 	> make init-local II_PRINCIPAL=<II_PRINCILAL> and the balance will be reflected afte click here.
    if (loggedIn) 
      handleAuth()
  }
  useEffect(() => {
    (async () => {
      const tempClient = await AuthClient.create();
      setClient(tempClient);
      const id = tempClient.getIdentity();
      if (await tempClient.isAuthenticated()) {
        handleAuth();
      }
      setInterval(async () => {
        if (loggedIn) {
          getBalances(
            true,
            principal,
            setICPBalance,
            setSTICPBalance,
            setPTokenBalance,
            setWebBalance
          );
        }
    
      }, 300000);
    })();
  }, []);


  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box as="nav" alignContent="flex-end">
        <Container maxW="container.2xl" py={{ base: "3", lg: "4" }}>
          <HStack justify="space-between">
            <Flex
              onClick={() => router.push(`/`)}
              cursor="pointer"
              alignItems="center"
            >
              <Image objectFit="cover" src="/logo.svg" alt="logo" />
            </Flex>
            <Spacer />
            <Show above="md">
              <ButtonGroup variant="link" spacing="1" alignItems="flex-end">
                <Link href="/#projects">
                  <Button
                    fontWeight={600}
                    fontSize={"md"}
                    color={colors.indigo[500]}
                    aria-current="page"
                    variant="nav"
                  >
                    {" "}
                    Projects{" "}
                  </Button>
                </Link>
                <Link href="/#how-it-works">
                  <Button fontWeight={600} fontSize={"16px"} variant="nav">
                    {" "}
                    How it works{" "}
                  </Button>
                </Link>
              </ButtonGroup>
            </Show>
            <Spacer />
            {loggedIn ? (
              <>
                {/* <Square minW="30px">
                  <Image
                    boxSize="20px"
                    objectFit="cover"
                    src="/stakeSymbol.svg"
                    alt="stakeToken"
                  />
                </Square> */}
                <Text>{STICPBalance.toString()} stICP</Text>
                <Button colorScheme="indigo" onClick={getStICP}>
                    
                      Get stICP
                    
                  </Button>
                <Menu>
                  {isDesktop ? (
                    <MenuButton px={4} py={2}>
                      {principal
                        .toString()
                        .replace(
                          principal
                            .toString()
                            .substring(6, principal.toString().length - 6),
                          "...."
                        )}{" "}
                      <ChevronDownIcon />
                    </MenuButton>
                  ) : (
                    <MenuButton
                      as={IconButton}
                      icon={<HamburgerIcon h="22px" />}
                      variant="none"
                    />
                  )}
                  <MenuList>
                    <MenuItem onClick={() => logout()}>Disconnect</MenuItem>
                    <Show below="lg">
                      <MenuDivider />
                      <MenuItem onClick={() => router.push("/#projects")}>
                        Projects
                      </MenuItem>
                      <MenuItem onClick={() => router.push("/#how-it-works")}>
                        How it works
                      </MenuItem>
                    </Show>
                  </MenuList>
                </Menu>
              </>
            ) : (
              <Button
                color="blue"
                borderColor="blue"
                variant="outline"
                onClick={() => onConnect()}
              >
                Connect
              </Button>
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
