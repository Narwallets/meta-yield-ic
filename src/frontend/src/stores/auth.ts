import create from "zustand";
import { Actor, HttpAgent } from "@dfinity/agent";
import { Principal } from '@dfinity/principal';
interface AuthState {
 loggedIn: boolean;
 principal: Principal;
 setLoggedIn: (value: boolean) => void;
 setPrincipal: (value: Principal) => void;
}

export const useStore = create<AuthState>((set) => ({
    loggedIn: false,
    principal: Principal.anonymous(),
    setLoggedIn: (value: boolean) => set((state) => ({ ...state , loggedIn: value })),
    setPrincipal: (value: Principal) => set((state) => ({...state, principal: value}))
}));
