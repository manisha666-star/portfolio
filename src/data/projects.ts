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
    title: "Weather App",
    type: "React, Node.js, Docker, GitHub Actions",
    description:
      "Full-stack weather application with real-time weather data, a responsive UI, and automated CI/CD deployment.",
    link: "/projects/weather-app",
    slug: "weather-app",
  },
  {
    title: "Flight Reservation System",
    type: "C++",
    description:
      "Command-line flight reservation system with login, flight search, booking, CSV data storage, and input validation.",
    link: "/projects/flight-reservation-system",
    slug: "flight-reservation-system",
  },
];
