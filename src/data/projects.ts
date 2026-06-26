export type Project = {
  title: string;
  type: string;
  description: string;
  image?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    title: "ParkWise — Smart Parking & Real-Time Monitoring Platform",
    type: "React.js, FastAPI, Python, PostgreSQL, Supabase, Leaflet.js",
    description:
      "A full-stack smart parking platform that helps users find nearby parking, view real-time availability, explore facilities on interactive maps, and make better urban parking decisions.",
    image: "/parkwise.png",
    link: "#",
  },
  {
    title: "GEMS School",
    type: "Figma, Adobe Creative Suite, UI/UX Design, Content Strategy",
    description:
      "A school website design project focused on accessibility, usability, and clear content organization, creating an intuitive platform for parents, students, and the wider school community.",
    image: "/gems.png",
    link: "#",
  },
  {
    title: "Thunderbolts Cup 2023",
    type: "Adobe Creative Suite, Adobe Illustrator, Branding, Motion Graphics",
    description:
      "A complete creative direction and event branding project for one of GEMS School's largest interschool sporting events, covering logo identity, team jerseys, print materials, social media creatives, and promotional media.",
    image: "/Thunderbolts.png",
    link: "#",
  },
];
