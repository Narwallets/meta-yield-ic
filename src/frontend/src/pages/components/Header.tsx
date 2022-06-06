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
import { colors } from "../../constants/colors";
import { useStore as useWallet } from "../../stores/wallet";
import { useStore as useBalance } from "../../stores/balance";
import { useRouter } from "next/router";
import { formatToLocaleNear } from "../../lib/util";
import { AuthClient } from "@dfinity/auth-client";
import {
  useStore as useAuth
} from "../../stores/auth";
import { Principal } from "@dfinity/principal";
import {getBalances} from '../../lib/balance'

const Header: React.FC<ButtonProps> = (props) => {
  const { loggedIn, principal, actor, setLoggedIn, setPrincipal, setActor } =
    useAuth();
  const { ICPBalance,
  setICPBalance,
  STICPBalance,
  setSTICPBalance,
  pTokenBalance,
  setPTokenBalance } = useBalance();
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
          : `http://${process.env.INTERNET_IDENTITY_CANISTER_ID}.localhost:8000/#authorize`,
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
    console.log("in handle auth");
    console.log(client?.getIdentity());
    // Update Auth Store
    setLoggedIn(true);
    const tempPrincipal = client?.getIdentity().getPrincipal();
    console.log('principal', tempPrincipal)
    if (tempPrincipal) {
      setPrincipal(tempPrincipal);
      console.log('PRINCIPAL', tempPrincipal.toString())
    }
    // setActor(
    //   createActor({
    //     agentOptions: {
    //       identity: client?.getIdentity(),
    //     },
    //   })
    // );
  };

  useEffect(() => {
    (async () => {
      const tempClient = await AuthClient.create();
      setClient(tempClient);
      const id = tempClient.getIdentity();
      if (await tempClient.isAuthenticated()) {
        handleAuth();
      }
      getBalances(loggedIn, principal,  setICPBalance, setSTICPBalance, setPTokenBalance);
    })();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const tempWallet = await getWallet();
  //       if (!wallet) {
  //         setWallet(tempWallet);
  //       }
  //       if (tempWallet && tempWallet.getAccountId()) {
  //         setSignInAccountId(tempWallet.getAccountId());
  //         setBalance(await getBalance(tempWallet!));
  //       }

  //       setLogin(tempWallet && tempWallet.getAccountId() ? true : false);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   })();

  //   setInterval(async () => {
  //     const tempWallet = await getWallet();
  //     if (tempWallet && tempWallet.getAccountId()) {
  //       const balance = await getBalance(tempWallet);
  //       setBalance(balance);
  //     }
  //   }, 5000);
  // }, []);

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
                <Show above="lg">
                  <Square minW="30px">
                    <Image
                      boxSize="20px"
                      objectFit="cover"
                      src="/stakeSymbol.svg"
                      alt="stakeToken"
                    />
                  </Square>
                  <Text>{STICPBalance}</Text>
                </Show>
                <Menu>
                  {isDesktop ? (
                    <MenuButton px={4} py={2}>
                      {principal.toString().replace(principal.toString().substring(5, principal.toString().length -5), '....')} <ChevronDownIcon />
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
