import create from "zustand";
import { data } from "../constants/_data";

interface ProjectState {
  all: any[] | undefined;
  currentProject: any | undefined;
  setAll: (value: any[] | undefined) => void;
  setCurrentProject: (value: any | undefined) => void;
  updateCurrentProject: (id: number | string, fetchFn: any) => void;
}

export const useStore = create<ProjectState>((set) => ({
  all: undefined,
  currentProject: undefined,
  setAll: (value: any[] | undefined) =>
    set((state) => ({ ...state, all: value })),
  setCurrentProject: (value: any | undefined) =>
    set((state) => ({ ...state, currentProject: value })),
  updateCurrentProject: async (id: number | string, fetch: any) => {
    const response = await fetch(id);
    const projectStaticData = data.find((p) => p.id == id);
    set((state) => ({
      ...state,
      currentProject: { ...projectStaticData, kickstarter: { ...response } },
    }));
  },
}));
