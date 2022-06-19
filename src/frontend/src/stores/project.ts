import create from "zustand";

interface ProjectState {
  all: any[] | undefined;
  currentProject: any | undefined;
  setAll: (value: any[] | undefined) => void;
  setCurrentProject: (value: any | undefined) => void;
}

export const useStore = create<ProjectState>((set) => ({
  all: undefined,
  currentProject: undefined,
  setAll: (value: any[] | undefined) => set((state) => ({ ...state , all: value })),
  setCurrentProject: (value: any | undefined) => set((state) => ({ ...state , currentProject: value })),
}));
