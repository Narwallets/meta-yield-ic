import React, { useEffect } from "react";
import { idlFactory as pTokenIDL } from "../../declarations/pToken/";
import { idlFactory as stICPIDL } from "../../declarations/stICP/";
import { idlFactory as backendIDL } from "../../declarations/meta_yield/";
import { idlFactory as ledgerIDL } from "../../declarations/ledger/";
import { createCanisterActor } from "../stores/actor";
import {
  toHexString,
  hexToBytes,
  principalToAccountDefaultIdentifier,
} from "../utils/helpers";
import { AuthClient } from "@dfinity/auth-client";
import { HttpAgent } from "@dfinity/agent/lib/cjs/agent";
import { Actor } from '@dfinity/agent/lib/cjs/actor'
import { Null } from "@dfinity/candid/lib/cjs/idl";
import { useStore as useAuth } from "../stores/auth";
import { useStore as useActor } from "../stores/actor";
import { Principal } from "@dfinity/principal";
import { useStore as useBalance} from '../stores/balance'
export const getBalances = async () => {
  const host =
    process.env.NEXT_PUBLIC_DFX_NETWORK === "local"
      ? `http://localhost:8000`
      : "ic0.app";
  const { loggedIn, principal } = useAuth();
  const { ICPBalance,
  setICPBalance,
  STICPBalance,
  setSTICPBalance,
  pTokenBalance,
  setPTokenBalance } = useBalance();
  const {
    backendActor,
    setBackendActor,
    pTokenActor,
    setpTokenActor,
    setstICPTokenActor,
    stICPTokenActor,
    ledgerActor,
    setLedgerActor,
  } = useActor();
  let depositAddressBlob;
  let iiPrincipal = Principal.anonymous();
  let authType = "anonymous";

  // Use II as actor
  if (loggedIn) {
    console.log("Using II for DEX actor");
    authType = "II";

    // II must display principle, since it is unique.
    iiPrincipal = principal;

    // TODO: When using II, display a note on how to deposit.
    // e.g.
    //
    // To transfer tokens, use the DIP canister to transfer tokens to <iiPrincipal>, and the balance will be reflected here.
    // To transfer ICP, use the ledger to transfer ICP to <depositAddress>, and the balance will be reflected here.
    //
    // This can replace the COPY we have at the bottom, as this is not needed when using Plug

    // Create canister actors
    const authClient = await AuthClient.create();
    const identity = authClient.getIdentity();
    const agent = new HttpAgent({ identity, host });

    if (process.env.DFX_NETWORK === "local") agent.fetchRootKey();

    // TODO get canister ID
    setBackendActor(createCanisterActor(agent, backendIDL, process.env.META_YIELD_CANISTER_ID));
    setstICPTokenActor(createCanisterActor(agent, stICPIDL, process.env.STICP_CANISTER_ID));
    setpTokenActor(createCanisterActor(agent, pTokenIDL, process.env.PTOKEN_CANISTER_ID));
    setLedgerActor(createCanisterActor(agent, ledgerIDL, process.env.LEDGER_CANISTER_ID));

    // Fetch initial balances
    const _stICPBalance: any = await stICPTokenActor?.balanceOf(principal);
    const _pTokenBalance: any = await pTokenActor?.balanceOf(principal);
    let ledgerBalance = 0;

    depositAddressBlob = await backendActor?.getDepositAddress();
    const approved: any = await ledgerActor?.account_balance({
      account: hexToBytes(principalToAccountDefaultIdentifier(iiPrincipal)),
    });
    if (approved.e8s) {
      ledgerBalance = approved.e8s;
    }
    console.log('balance ledgerBalance', ledgerBalance);
    console.log('balance stICPBalance', _stICPBalance);
    console.log('balance pTokenBalance', _pTokenBalance)
    setICPBalance(ledgerBalance);
    setSTICPBalance(_stICPBalance);
    setPTokenBalance(_pTokenBalance);
  }
};
