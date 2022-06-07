import create from "zustand";

interface BalanceState {
  ICPBalance: number;
  setICPBalance: (value: number) => void;
  STICPBalance: number;
  setSTICPBalance: (value: number) => void;
  pTokenBalance : number;
  setPTokenBalance : (value: number) => void;
}

export const useStore = create<BalanceState>((set) => ({
  ICPBalance: 0,
  STICPBalance: 0,
  pTokenBalance: 0,
  setICPBalance: (value: number) => set((state) => ({ ...state , ICPBalance: value })),
  setSTICPBalance: (value: number) => set((state) => ({ ...state , STICPBalance: value })),
  setPTokenBalance: (value: number) => set((state) => ({ ...state , pTokenBalance: value }))
}));
