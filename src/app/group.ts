import { Project } from './project';

export interface Group {
  id: string;
  name: string;
  projects: Project[];
}
