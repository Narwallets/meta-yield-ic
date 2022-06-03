import { Actor } from '@dfinity/agent/lib/cjs/actor'
import { InterfaceFactory } from "@dfinity/candid/lib/cjs/idl";
import { Principal } from "@dfinity/principal";
import create from "zustand";
const _canisters = [
  {
    symbol: "PT",
    canisterName: "pToken",
    canisterId: process.env.PTOKEN_CANISTER_ID,
  },
  {
    symbol: "stICP",
    canisterName: "stICP",
    canisterId: process.env.STICP_CANISTER_ID,
  },
  {
    symbol: "ICP",
    canisterName: "ICP",
    canisterId: process.env.LEDGER_CANISTER_ID,
  },
];
interface ActorState {
  canistersActors: any[];
  setCanistersActors: (value: any[]) => void;
  backendActor: any,
  setBackendActor: (value: any) => void;
  stICPTokenActor: any,
  setstICPTokenActor: (value: any) => void;
  pTokenActor: any,
  setpTokenActor: (value: any) => void;
  ledgerActor: any,
  setLedgerActor: (value: any) => void;
}

export const useStore = create<ActorState>((set) => ({
  canistersActors: [],
  setCanistersActors: (value: any[]) =>
    set((state) => ({ ...state, canistersActors: value })),
   backendActor: undefined,
   setBackendActor: (value: any) => set((state) => ({... state, backendActor: value})),
   stICPTokenActor: undefined,
   setstICPTokenActor: (value: any) => set((state) => ({... state, stICPTokenActor: value})),
   pTokenActor: undefined,
   setpTokenActor: (value: any) => set((state) => ({... state, pTokenActor: value})),
   ledgerActor: undefined,
   setLedgerActor: (value: any) => set((state) => ({... state, ledgerActor: value}))

}));

export const createCanisterActor = (
  agent: any,
  idl: InterfaceFactory,
  canisterId: any
) => {
    const actor = Actor.createActor(idl, {
        agent,
        canisterId,
      });
  return actor;
};
