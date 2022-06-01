import {data, kickstarter_mock} from '../constants/_data'
export const fetchProjects = () => {

  return {...data, kickstarter: kickstarter_mock};
};

export const fetchProjectDetails =  (id: number) => {
  const [project]=  data.filter(d => d.id === id);
  return {...project, kickstarter: kickstarter_mock};
};

export const fetchActiveProjects =  () => {
  return data.filter(d => d.active).map(d => ({...d, kickstarter: kickstarter_mock}));
};
