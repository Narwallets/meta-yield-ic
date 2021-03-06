import { Button } from "@chakra-ui/react";
import * as React from "react";
import { useState } from "react";
import { useStore } from "../stores/wallet";
import { useStore as useAuth } from "../stores/auth";
import { AuthClient } from "@dfinity/auth-client";
// import { getConfig } from "../../config";
interface Props {
  text: string;
}

const ConnectButton = (props: Props) => {
  const { loggedIn, principal, setLoggedIn, setPrincipal } =
    useAuth();
  const { wallet, setWallet } = useStore();
  const [connected, setconnected] = useState(false);
  const [client, setClient] = useState<AuthClient>();
  // const config = getConfig();

  const onConnect = async () => {
    client?.login({
      identityProvider: "https://identity.ic0.app/#authorize",
        // process.env.DFX_NETWORK === "ic"
        //   ? "https://identity.ic0.app/#authorize"
        //   : `http://${config.canisterIds.INTERNET_IDENTITY_CANISTER_ID}.localhost:8000/#authorize`,
      onSuccess: handleAuth,
    });
  };
  const handleAuth = () => {
    // Update Auth Store
    setLoggedIn(true);
    const tempPrincipal = client?.getIdentity().getPrincipal();
    if (tempPrincipal) {
      setPrincipal(tempPrincipal);
    }
  };

  return (
    <>
      <Button width={"100%"} colorScheme="indigo" onClick={() => onConnect()}>
        {props && props.text ? props.text : "Connect Wallet"}
      </Button>
    </>
  );
};

export default ConnectButton;
