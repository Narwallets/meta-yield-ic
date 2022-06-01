import create from "zustand";

interface BalanceState {
  balance: number;
  setBalance: (value: number) => void;
}

export const useStore = create<BalanceState>((set) => ({
  balance: 0,
  setBalance: (value: number) => set((state) => ({ ...state , balance: value })),
}));
