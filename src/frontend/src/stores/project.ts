import create from "zustand";
import { ProjectProps } from "../types/project.types";

interface ProjectState {
  all: ProjectProps[] | undefined,
  currentProject: ProjectProps | undefined,
  setAll: (value: ProjectProps[] | undefined) => void;
  setCurrentProject: (value: ProjectProps | undefined) => void;
}

export const useStore = create<ProjectState>((set) => ({
  all: undefined,
  currentProject: undefined,
  setAll: (value: ProjectProps[] | undefined) => set((state) => ({ ...state , all: value })),
  setCurrentProject: (value: ProjectProps | undefined) => set((state) => ({ ...state , currentProject: value })),
}));
