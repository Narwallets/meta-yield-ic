import create from "zustand";

interface BalanceState {
  ICPBalance: string;
  setICPBalance: (value: string) => void;
  STICPBalance: string;
  setSTICPBalance: (value: string) => void;
  pTokenBalance : string;
  setPTokenBalance : (value: string) => void;
  webBalance : string;
  setWebBalance : (value: string) => void;
}

export const useStore = create<BalanceState>((set) => ({
  ICPBalance: '',
  STICPBalance: '',
  pTokenBalance: '',
  webBalance: '',
  setICPBalance: (value: string) => set((state) => ({ ...state , ICPBalance: value })),
  setSTICPBalance: (value: string) => set((state) => ({ ...state , STICPBalance: value })),
  setPTokenBalance: (value: string) => set((state) => ({ ...state , pTokenBalance: value })),
  setWebBalance: (value: string) => set((state) => ({ ...state , webBalance: value }))
}));
