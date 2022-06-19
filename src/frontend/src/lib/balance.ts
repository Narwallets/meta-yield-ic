import React, { useEffect } from "react";
import { idlFactory as stICPIDL } from "../../declarations/stICP/";
import { idlFactory as pTokenIDL } from "../../declarations/pToken";
import { idlFactory as ledgerIDL } from "../../declarations/ledger/";
import { createActor } from "../stores/actor";
import {
  toHexString,
  hexToBytes,
  principalToAccountDefaultIdentifier,
} from "../utils/helpers";
import { AuthClient } from "@dfinity/auth-client";
import { ActorConfig, ActorSubclass, HttpAgentOptions } from "@dfinity/agent";

import { Principal } from "@dfinity/principal";
// import { useStore as useBalance } from "../stores/balance";
export const getBalances = async (
  loggedIn: boolean,
  principal: Principal,
  setICPBalance: (value: string) => void,
  setSTICPBalance: (value: string) => void,
  setPTokenBalance: (value: string) => void,
  setWebBalance: (value: string) => void
) => {
  let depositAddressBlob;
  let iiPrincipal = Principal.anonymous();
  let authType = "anonymous";
  // Use II as actor
  if (loggedIn) {
    authType = "II";
    iiPrincipal = principal;

    // Create canister actors
    const authClient = await AuthClient.create();
    const identity = authClient.getIdentity();

    const agentOptions: HttpAgentOptions = {
      host: process.env.NEXT_PUBLIC_IC_HOST,
      identity: identity,
    };
    const options = {
      agentOptions: agentOptions,
      identity: identity,
    };

    // Create Canisters Actors
    const stICPTokenActor = createActor(options, stICPIDL, process.env.NEXT_PUBLIC_STICP_CANISTER_ID);
    const pTokenActor = createActor(options, pTokenIDL, process.env.NEXT_PUBLIC_PTOKEN_CANISTER_ID);
    // const ledgerActor = createActor(options, ledgerIDL, process.env.NEXT_PUBLIC_LEDGER_CANISTER_ID);

    // Fetch initial balances
    const stICPBalance: any = await stICPTokenActor?.balanceOf(principal);
    const pTokenBalance: any = await pTokenActor?.balanceOf(principal);
    let ledgerBalance = 0;

    // const approved: any = await ledgerActor?.account_balance({
    //   account: hexToBytes(principalToAccountDefaultIdentifier(iiPrincipal)),
    // });
    // if (approved.e8s) {
    //   ledgerBalance = approved.e8s;
    // }
    console.log("balance stICPBalance", stICPBalance);
    console.log("balance pTokenBalance", pTokenBalance);
    // setICPBalance(ledgerBalance);
    setSTICPBalance(stICPBalance.toString());
    setPTokenBalance(pTokenBalance.toString());
  }
};
