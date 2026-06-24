export type Project = {
  title: string;
  type: string;
  description: string;
  image?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "ParkWise",
    type: "Full-Stack Web App, Product Design",
    description:
      "ParkWise is a smart parking platform designed to help users find, filter, and explore parking spaces with a clean user interface and map-based experience.",
    image: "/floral/flower-pink.png",
    link: "#",
  },
  {
    title: "Portfolio Website",
    type: "Next.js, UI Design, Personal Branding",
    description:
      "A personal portfolio built with Next.js and Tailwind CSS to showcase software engineering projects, design experience, and technical growth.",
    image: "/floral/flower-pink.png",
    link: "#",
  },
];
