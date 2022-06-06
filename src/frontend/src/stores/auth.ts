import create from "zustand";
import { Actor, HttpAgent } from "@dfinity/agent";
import { Principal } from '@dfinity/principal';
const idlFactory = require("../../declarations/meta_yield/meta_yield.did.js")


export const whitelist = [];

export const host = process.env.DFX_NETWORK === "ic"
? `https://ic0.app`
    : `http://localhost:8000`;


export const createActor = (options?: any) =>  {
    const hostOptions = {
      host:
        process.env.DFX_NETWORK === "ic"
          ? `https://${process.env.META_YIELD_CANISTER_ID}.ic0.app`
          : "http://localhost:8000",
    };
    if (!options) {
      options = {
        agentOptions: hostOptions,
      };
    } else if (!options.agentOptions) {
      options.agentOptions = hostOptions;
    } else {
      options.agentOptions.host = hostOptions.host;
    }
  
    const agent = new HttpAgent({ ...options.agentOptions });
  
    // Fetch root key for certificate validation during development
    if (process.env.DFX_NETWORK === "local") {
      console.log('fetchRootKey')
      agent.fetchRootKey().catch((err) => {
        console.warn(
          "Unable to fetch root key. Check to ensure that your local replica is running"
        );
        console.error(err);
      });
    }
  
    // Creates an actor with using the candid interface and the HttpAgent
    return Actor.createActor(idlFactory, {
      agent,
      canisterId: process.env.META_YIELD_CANISTER_ID,
      ...options?.actorOptions,
    });
  }


interface AuthState {
 loggedIn: boolean;
 principal: Principal;
 actor: Actor | undefined;
 setLoggedIn: (value: boolean) => void;
 setPrincipal: (value: Principal) => void;
 setActor: (value: Actor) => void;
}

export const useStore = create<AuthState>((set) => ({
    loggedIn: false,
    principal: Principal.anonymous(),
    // actor: createActor(),
    actor: undefined,
    setLoggedIn: (value: boolean) => set((state) => ({ ...state , loggedIn: value })),
    setPrincipal: (value: Principal) => set((state) => ({...state, principal: value})),
    setActor: (value: Actor | undefined) => set((state) => ({...state, actor: value}))
}));
