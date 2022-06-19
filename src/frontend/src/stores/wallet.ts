
import create from "zustand";

interface WalletState {
  wallet: any | null;
  isLogin: boolean;
  setWallet: (value: any | null) => void;
  setLogin: (value: boolean) => void;
}

export const useStore = create<WalletState>((set) => ({
  wallet: null,
  isLogin: false,
  setLogin: (value: boolean) => set((state) => ({ ...state , isLogin: value })),
  setWallet: (value: any | null) => set((state) => ({...state , wallet: value })),
}));
