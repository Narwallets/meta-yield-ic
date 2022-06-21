import {
  Actor,
  ActorSubclass,
  Agent,
  HttpAgent,
  HttpAgentOptions,
} from "@dfinity/agent";
import { idlFactory } from "../../declarations/meta_yield/";
import { idlFactory as idlFactoryLedger } from "../../declarations/ledger";
import create from "zustand";
import { AuthClient } from "@dfinity/auth-client";

interface ActorState {
  canistersActors: ActorSubclass[];
  setCanistersActors: (value: ActorSubclass[]) => void;
  backendActor: ActorSubclass | undefined;
  setBackendActor: (value: ActorSubclass | undefined) => void;
  stICPTokenActor: ActorSubclass | undefined;
  setstICPTokenActor: (value: ActorSubclass | undefined) => void;
  pTokenActor: ActorSubclass | undefined;
  setpTokenActor: (value: ActorSubclass | undefined) => void;
  ledgerActor: ActorSubclass | undefined;
  setLedgerActor: (value: ActorSubclass | undefined) => void;
}

export const useStore = create<ActorState>((set) => ({
  canistersActors: [],
  setCanistersActors: (value: ActorSubclass[]) =>
    set((state) => ({ ...state, canistersActors: value })),
  backendActor: undefined,
  setBackendActor: (value: ActorSubclass | undefined) =>
    set((state) => ({ ...state, backendActor: value })),
  stICPTokenActor: undefined,
  setstICPTokenActor: (value: ActorSubclass | undefined) =>
    set((state) => ({ ...state, stICPTokenActor: value })),
  pTokenActor: undefined,
  setpTokenActor: (value: ActorSubclass | undefined) =>
    set((state) => ({ ...state, pTokenActor: value })),
  ledgerActor: undefined,
  setLedgerActor: (value: ActorSubclass | undefined) =>
    set((state) => ({ ...state, ledgerActor: value })),
}));

export const createActor = (
  options: any,
  idlFactory: any,
  canisterId?: string
) => {
  const isProd = process.env.DFX_NETWORK === "ic";
  const host = process.env.NEXT_PUBLIC_IC_HOST;
  let agentOptions;

  if (options && options.agentOptions) {
    agentOptions = { host, identity: options.agentOptions.identity };
  } else {
    agentOptions = { host };
  }

  const agent = new HttpAgent({ ...agentOptions });

  // Fetch root key for certificate validation during development
  if (!isProd) {
    agent.fetchRootKey().catch((err: any) => {
      console.warn(
        "Unable to fetch root key. Check to ensure that your local replica is running"
      );
      console.error(err);
    });
  }

  // Creates an actor with using the candid interface and the HttpAgent
  return Actor.createActor(idlFactory, {
    agent,
    canisterId,
    ...options?.actorOptions,
  });
};

export const createBackendActor = async () => {
  
  const authClient = await AuthClient.create();
  const identity = authClient.getIdentity();

  const agentOptions: HttpAgentOptions = {
    host: process.env.NEXT_PUBLIC_IC_HOST,
    identity: identity,
  };
  const options = {
    agentOptions: agentOptions,
    identity: identity,
    actorOptions: { host: process.env.NEXT_PUBLIC_IC_HOST}
  };
  return createActor(options, idlFactory, process.env.NEXT_PUBLIC_META_YIELD_CANISTER_ID)
};


export const createLedgerActor = async () => {
  
  const authClient = await AuthClient.create();
  const identity = authClient.getIdentity();

  const agentOptions: HttpAgentOptions = {
    host: process.env.NEXT_PUBLIC_IC_HOST,
    identity: identity,
  };
  const options = {
    agentOptions: agentOptions,
    identity: identity,
    actorOptions: { host: process.env.NEXT_PUBLIC_IC_HOST}
  };
  return createActor(options, idlFactoryLedger, process.env.NEXT_PUBLIC_LEDGER_CANISTER_ID)
};