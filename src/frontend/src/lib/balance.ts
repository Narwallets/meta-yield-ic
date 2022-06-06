import React, { useEffect } from "react";
import { idlFactory as pTokenIDL } from "../../declarations/pToken";
import { idlFactory as stICPIDL} from "../../declarations/stICP";
import { idlFactory as backendIDL } from "../../declarations/meta_yield/";
import { idlFactory as ledgerIDL } from "../../declarations/ledger/";
import { createCanisterActor } from "../stores/actor";
import {
  toHexString,
  hexToBytes,
  principalToAccountDefaultIdentifier,
} from "../utils/helpers";
import { AuthClient } from "@dfinity/auth-client";
import { Actor, ActorSubclass, HttpAgent } from "@dfinity/agent";

import { Principal } from "@dfinity/principal";
// import { useStore as useBalance } from "../stores/balance";
export const getBalances = async (
  loggedIn: boolean,
  principal: Principal,
  setICPBalance: (value: number) => void,
  setSTICPBalance: (value: number) => void,
  setPTokenBalance: (value: number) => void
) => {
  const hostOptions = {
    host: process.env.NEXT_PUBLIC_IC_HOST
  };

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
    const options = {
      agentOptions: hostOptions,
      actorOptions: hostOptions,
      identity: identity,
    };
    const agent = new HttpAgent({ ...options?.agentOptions });
    if (process.env.DFX_NETWORK === "local") agent.fetchRootKey();

    // Create Canisters Actors  

    const stICPTokenActor = createCanisterActor(agent, stICPIDL, process.env.STICP_CANISTER_ID, options);
    const backendActor = createCanisterActor(agent, backendIDL, process.env.META_YIELD_CANISTER_ID, options);
    const pTokenActor = createCanisterActor(agent, pTokenIDL, process.env.PTOKEN_CANISTER_ID, options);
    const ledgerActor = createCanisterActor(agent, ledgerIDL, process.env.LEDGER_CANISTER_ID, options);


    // Fetch initial balances
    const stICPBalance: any = await stICPTokenActor?.balanceOf(principal);
    // const pTokenBalance: any = await pTokenActor?.balanceOf(principal);
    // let ledgerBalance = 0;

    // depositAddressBlob = await backendActor?.getDepositAddress();
    // const approved: any = await ledgerActor?.account_balance({
    //   account: hexToBytes(principalToAccountDefaultIdentifier(iiPrincipal)),
    // });
    // if (approved.e8s) {
    //   ledgerBalance = approved.e8s;
    // }
    // console.log("balance ledgerBalance", ledgerBalance);
    // console.log("balance stICPBalance", stICPBalance);
    // console.log("balance pTokenBalance", pTokenBalance);
    // setICPBalance(ledgerBalance);
    // setSTICPBalance(stICPBalance);
    // setPTokenBalance(pTokenBalance);
  }
};
