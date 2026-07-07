import { projectCaseStudies } from "./projectCaseStudies";

export type Project = {
  title: string;
  type: string;
  description: string;
  image?: string;
  link?: string;
  slug: string;
};

export const projects: Project[] = projectCaseStudies.map((project) => ({
  title: project.title,
  type: project.category,
  description: project.summary,
  image: project.image,
  link: `/projects/${project.slug}`,
  slug: project.slug,
}));
