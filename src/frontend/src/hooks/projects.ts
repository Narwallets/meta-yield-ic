import { useQuery } from "react-query";
import {
  fetchProjects,
  fetchProjectDetails,
  fetchActiveProjects
} from "../queries/projects";
export const useGetProjects = () => {
  return useQuery("projects", () => fetchProjects(), {
    onError: (err) => {
      console.error(err);
    },
  });
};

export const useGetProjectDetails = (id: number) => {
  return useQuery("project-fund", () => fetchProjectDetails(id), {
    onError: (err) => {
      console.error(err);
    },
  });
};

export const useGetActiveProjects = () => {
  return useQuery("active-projects", () => fetchActiveProjects(), {
    onError: (err) => {
      console.error(err);
    },
  });
};