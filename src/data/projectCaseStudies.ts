export type ProjectCaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  year: string;
  overview: string;
  problem: string;
  role: string;
  tools: string[];
  features: string[];
  process: string[];
  challenges: string;
  learning: string;
};

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "parkwise",
    title: "ParkWise",
    category: "React.js, FastAPI, Python, PostgreSQL, Supabase",
    summary:
      "Smart parking platform for finding nearby parking, checking real-time availability, and making better urban parking decisions.",
    image: "/parkwise.png",
    year: "2025",
    overview:
      "ParkWise is a smart parking web platform designed to help drivers discover nearby parking, compare availability, and make faster decisions in busy urban areas.",
    problem:
      "Finding parking can be stressful because availability is often unclear, location information is scattered, and users do not always know which option is best before reaching the area.",
    role:
      "I worked across frontend, backend, database structure, and product flow, turning the idea into a usable full-stack parking experience.",
    tools: ["React.js", "FastAPI", "Python", "PostgreSQL", "Supabase"],
    features: [
      "Search and discover nearby parking options.",
      "View real-time parking availability.",
      "Compare parking locations and details.",
      "Support better urban parking decisions through clearer information.",
    ],
    process: [
      "Mapped the user journey from searching for parking to choosing a location.",
      "Designed the data model for parking locations, availability, and related details.",
      "Built the frontend experience in React with clean, scannable parking information.",
      "Connected backend APIs and database records to support real-time platform behavior.",
    ],
    challenges:
      "The hardest part was organizing parking data so it stayed useful, fast to read, and simple enough for users to understand at a glance.",
    learning:
      "This project helped me understand how product clarity, backend structure, and frontend usability all depend on each other in a real full-stack application.",
  },
  {
    slug: "gems-school",
    title: "GEMS School",
    category: "UI/UX Design, Website Design, Content Strategy",
    summary:
      "School website redesign focused on accessibility, clear navigation, and better communication for parents and students.",
    image: "/gems.png",
    year: "2024",
    overview:
      "GEMS School is a website redesign project focused on creating a clearer, more accessible digital experience for parents, students, and the wider school community.",
    problem:
      "School websites often contain important information, but it can be difficult for visitors to find admissions details, academic information, events, and contact points quickly.",
    role:
      "I led the visual design, information structure, content organization, and user experience direction for the redesign.",
    tools: ["UI/UX Design", "Website Design", "Content Strategy", "Figma", "Adobe Creative Suite"],
    features: [
      "Clear navigation for parents, students, and school visitors.",
      "Accessible page structure for important school information.",
      "Improved content hierarchy and communication flow.",
      "Modern visual direction aligned with the school identity.",
    ],
    process: [
      "Reviewed the existing website experience and identified navigation pain points.",
      "Organized school content into clearer sections and page priorities.",
      "Created visual layouts that made important actions easier to find.",
      "Refined the design around readability, accessibility, and trust.",
    ],
    challenges:
      "The main challenge was balancing a formal school identity with a website experience that still felt approachable and easy to navigate.",
    learning:
      "This project strengthened my ability to translate institutional content into a clear, user-centered website experience.",
  },
  {
    slug: "thunderbolts-cup",
    title: "Thunderbolts Cup 2023",
    category: "Event Branding, Illustrator, Motion Graphics",
    summary:
      "Complete event identity for one of GEMS School's largest interschool sporting events.",
    image: "/Thunderbolts.png",
    year: "2023",
    overview:
      "Thunderbolts Cup 2023 was a complete event branding project for one of GEMS School's largest interschool sporting events.",
    problem:
      "The event needed a strong identity that could work across print, digital, social media, team materials, and motion graphics while still feeling energetic and consistent.",
    role:
      "I created the visual identity and extended it across event assets, promotional materials, team graphics, and motion-based content.",
    tools: ["Event Branding", "Adobe Illustrator", "Motion Graphics", "Adobe Creative Suite"],
    features: [
      "Event logo and visual identity system.",
      "Sports-focused graphics for print and social media.",
      "Team and event promotional materials.",
      "Motion assets for event communication.",
    ],
    process: [
      "Defined a visual direction that matched the energy of a large sports event.",
      "Created core identity elements including color, typography, and graphic style.",
      "Adapted the system across multiple event touchpoints.",
      "Refined assets for consistency across digital and printed formats.",
    ],
    challenges:
      "The biggest challenge was keeping the event identity consistent while adapting it to many different formats and deadlines.",
    learning:
      "This project taught me how important flexible design systems are when a brand needs to scale across many real-world event materials.",
  },
];

export function getProjectCaseStudy(slug: string) {
  return projectCaseStudies.find((project) => project.slug === slug);
}
