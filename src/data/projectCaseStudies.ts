export type ProjectCaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image?: string;
  year: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  tools: string[];
  features: string[];
  process: string[];
  challenges: string;
  screenshots: string[];
  github?: string;
  liveDemo?: string;
};

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "parkwise",
    title: "ParkWise",
    category: "React.js, FastAPI, Python, PostgreSQL, Supabase",
    summary:
      "Full-stack smart parking platform for discovering nearby parking locations, visualizing real-time availability, and improving urban parking decisions.",
    image: "/projects/mp_find park.png",
    year: "2025",
    overview:
      "ParkWise is a smart parking web platform designed to help drivers discover nearby parking, compare availability, and make faster decisions in busy urban areas.",
    problem:
      "Finding parking can be stressful because availability is often unclear, location information is scattered, and users do not always know which option is best before reaching the area.",
    solution:
      "I built a full-stack parking experience that surfaces nearby parking options, availability, and location details in a clean decision-focused interface.",
    architecture:
      "React.js provides the user interface, FastAPI exposes RESTful APIs, PostgreSQL stores structured parking data, and Supabase manages cloud database services and backend integration.",
    tools: ["React.js", "FastAPI", "Python", "PostgreSQL", "Supabase"],
    features: [
      "Search and discover nearby parking options.",
      "View real-time parking availability.",
      "Compare parking locations, availability, and details.",
      "Support better urban parking decisions through clearer information.",
    ],
    process: [
      "Mapped the user journey from searching for parking to choosing a location.",
      "Designed the data model for parking locations, availability, and related details.",
      "Built the frontend experience in React with clean, scannable parking information.",
      "Developed RESTful APIs with FastAPI and integrated Supabase with PostgreSQL for persistent data management.",
    ],
    challenges:
      "Designed a scalable parking data structure while keeping search results organized, responsive, and easy for users to understand.",
    screenshots: [],
    github: "https://github.com/manisha666-star/ParkWise_1.7",
  },
  {
    slug: "weather-app",
    title: "Weather App",
    category: "React, Node.js, Docker, GitHub Actions",
    summary:
      "Full-stack weather application with real-time weather data, a responsive UI, and automated CI/CD deployment.",
    image: "/projects/Weather .png",
    year: "2025",
    overview:
      "Weather App is a full-stack application designed to give users quick access to current weather conditions through a responsive web interface.",
    problem:
      "Weather information needs to feel immediate, readable, and reliable across devices, while the application also needs a repeatable deployment workflow.",
    solution:
      "I developed a React and Node.js weather application that fetches real-time weather data, presents it in a clean responsive UI, and uses Docker and GitHub Actions for automated delivery.",
    architecture:
      "React handles the frontend experience, Node.js supports server-side application logic, Docker packages the app consistently, and GitHub Actions automates the CI/CD workflow.",
    tools: ["React", "Node.js", "Docker", "GitHub Actions"],
    features: [
      "Real-time weather data display.",
      "Responsive interface for desktop and mobile users.",
      "Full-stack React and Node.js application structure.",
      "Automated CI/CD deployment with GitHub Actions.",
    ],
    process: [
      "Built the frontend layout around fast weather lookup and clear condition details.",
      "Connected the application to real-time weather data through backend logic.",
      "Containerized the project with Docker for consistent local and deployment environments.",
      "Configured GitHub Actions to automate build and deployment steps.",
    ],
    challenges:
      "The main challenge was keeping the weather experience simple for users while also setting up a dependable automated deployment pipeline.",
    screenshots: [],
    github: "https://github.com/manisha666-star/The-Weather-Forecasting",
  },
  {
    slug: "flight-reservation-system",
    title: "Flight Reservation System",
    category: "C++",
    summary:
      "Command-line flight reservation system with login, flight search, booking, CSV data storage, and input validation.",
    year: "2024",
    overview:
      "Flight Reservation System is a C++ command-line project focused on core reservation logic, file-based data storage, and a practical booking workflow.",
    problem:
      "Flight booking requires reliable handling of user authentication, flight search, booking records, stored data, and invalid user input.",
    solution:
      "I built a command-line reservation system that lets users log in, search available flights, create bookings, and store records using CSV files.",
    architecture:
      "The system uses C++ application logic for menus, authentication, search, booking, validation, and CSV file operations for persistent data storage.",
    tools: ["C++", "CSV Files", "Input Validation", "Command Line"],
    features: [
      "User login flow.",
      "Flight search and booking workflow.",
      "CSV file storage for reservation data.",
      "Input validation for safer command-line interactions.",
    ],
    process: [
      "Mapped the command-line journey from login to flight booking.",
      "Structured CSV files to store and retrieve flight and booking data.",
      "Implemented search, booking, and validation logic in C++.",
      "Tested common paths including login, flight lookup, booking, and invalid inputs.",
    ],
    challenges:
      "The most important challenge was keeping file-based reservation data organized while making the command-line flow clear and resilient to incorrect inputs.",
    screenshots: [],
    github: "https://github.com/manisha666-star/Flight-Reservation-System",
  },
];

export function getProjectCaseStudy(slug: string) {
  return projectCaseStudies.find((project) => project.slug === slug);
}
