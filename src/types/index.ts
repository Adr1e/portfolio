export interface Project {
  title: string;
  description: string;
  image: string;
  technologies?: Technology[];
  codeUrl?: string;
}

export interface Technology {
  name: string;
}