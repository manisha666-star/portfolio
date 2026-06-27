export type Project = {
  title: string;
  type: string;
  description: string;
  image?: string;
  link?: string;
  slug: string;
};

export const projects: Project[] = [
  {
    title: "ParkWise",
    type: "React.js, FastAPI, Python, PostgreSQL, Supabase",
    description:
      "Smart parking platform for finding nearby parking, checking real-time availability, and making better urban parking decisions.",
    image: "/parkwise.png",
    link: "/projects/parkwise",
    slug: "parkwise",
  },
  {
    title: "GEMS School",
    type: "UI/UX Design, Website Design, Content Strategy",
    description:
      "School website redesign focused on accessibility, clear navigation, and better communication for parents and students.",
    image: "/gems.png",
    link: "/projects/gems-school",
    slug: "gems-school",
  },
  {
    title: "Thunderbolts Cup 2023",
    type: "Event Branding, Illustrator, Motion Graphics",
    description:
      "Complete event identity for one of GEMS School's largest interschool sporting events.",
    image: "/Thunderbolts.png",
    link: "/projects/thunderbolts-cup",
    slug: "thunderbolts-cup",
  },
];
