import {data} from '../constants/_data'
export const fetchProjects = () => {

  return {...data};
};

export const fetchProjectDetails =  (id: number) => {
  const [project]=  data.filter(d => d.id == id);
  return {...project};
};

export const fetchActiveProjects =  () => {
  return data.filter(d => d.active).map(d => ({...d}));
};
