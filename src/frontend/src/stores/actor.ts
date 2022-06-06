import { Actor, ActorSubclass, Agent } from "@dfinity/agent";
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
  canistersActors: ActorSubclass[];
  setCanistersActors: (value: ActorSubclass[]) => void;
  backendActor: ActorSubclass | undefined,
  setBackendActor: (value: ActorSubclass | undefined) => void;
  stICPTokenActor: ActorSubclass | undefined,
  setstICPTokenActor: (value: ActorSubclass | undefined) => void;
  pTokenActor: ActorSubclass | undefined,
  setpTokenActor: (value: ActorSubclass | undefined) => void;
  ledgerActor: ActorSubclass | undefined,
  setLedgerActor: (value: ActorSubclass | undefined) => void;
}

export const useStore = create<ActorState>((set) => ({
  canistersActors: [],
  setCanistersActors: (value: ActorSubclass[]) =>
    set((state) => ({ ...state, canistersActors: value })),
   backendActor: undefined,
   setBackendActor: (value: ActorSubclass | undefined) => set((state) => ({... state, backendActor: value})),
   stICPTokenActor: undefined,
   setstICPTokenActor: (value: ActorSubclass | undefined) => set((state) => ({... state, stICPTokenActor: value})),
   pTokenActor: undefined,
   setpTokenActor: (value: ActorSubclass | undefined) => set((state) => ({... state, pTokenActor: value})),
   ledgerActor: undefined,
   setLedgerActor: (value: ActorSubclass | undefined) => set((state) => ({... state, ledgerActor: value}))

}));

export const createCanisterActor = (
  agent: Agent,
  idl: InterfaceFactory,
  canisterId: any,
  options?: any
) => {
    const actor = Actor.createActor(idl, {
        agent,
        canisterId: canisterId,
        ...options?.actorOptions
      });
  return actor;
};
