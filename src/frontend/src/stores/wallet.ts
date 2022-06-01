import { WalletConnection } from "near-api-js";
import create from "zustand";

interface WalletState {
  wallet: WalletConnection | null;
  isLogin: boolean;
  setWallet: (value: WalletConnection | null) => void;
  setLogin: (value: boolean) => void;
}

export const useStore = create<WalletState>((set) => ({
  wallet: null,
  isLogin: false,
  setLogin: (value: boolean) => set((state) => ({ ...state , isLogin: value })),
  setWallet: (value: WalletConnection | null) => set((state) => ({...state , wallet: value })),
}));
