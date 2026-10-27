export const site = {
  name: "Rishi Bharadwaj",
  initials: "RB",
  role: "Software Engineer",
  title: "Frontend Engineer (SDE-1)",
  location: "Bangalore, Karnataka",
  address: "278, II Phase Bharatnagar, Bangalore-91",
  phone: "6360584334",
  phoneDisplay: "+91 63605 84334",
  email: "rishi.bcbs@gmail.com",
  linkedin: "https://linkedin.com/in/rishi-bharadwaj-5b6b89255",
  github: "https://github.com/azbestos21",
  summary:
    "Software Engineer building scalable, high-performance applications with React and Next.js. Experienced in backend integrations, cloud platforms, and distributed systems.",
  tagline: "Fluent in JavaScript. Still negotiating with CSS.",
};

export const nav = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "highlights", label: "Highlights" },
  { id: "contact", label: "Contact" },
] as const;

export const sectionIds = nav.map((item) => item.id);

export const experience = [
  {
    company: "Optym",
    role: "Frontend Engineer (SDE-1)",
    location: "Bangalore",
    period: "Mar 2025 — Present",
    products: ["Shiplo", "LoadOps", "CREWOPT"],
    bullets: [
      "Built modern, responsive interfaces with React, Next.js, TypeScript, and MUI for enterprise logistics platforms.",
      "Improved shipper-carrier workflows on Shiplo through clearer UI and efficient state management.",
      "Shipped LoadOps components for trip management, dispatch workflows, and real-time data visualization.",
      "Delivered CREWOPT features for Southwest Airlines, focusing on crew optimization and UI performance.",
      "Implemented a microfrontend architecture and used the Jetstream component library for consistent, scalable UI.",
      "Optimized frontend performance for large datasets and complex grid-based interfaces.",
      "Integrated REST APIs with backend teams and supported full-stack work across AWS, Azure, and databases.",
    ],
  },
];

export const projects = [
  {
    name: "Academic Project Management System",
    year: "2023",
    stack: ["React", "Node.js", "AWS", "MySQL"],
    href: "https://github.com/azbestos21/Projectmanagement",
    bullets: [
      "Full-stack web app for managing academic projects with role-based access control.",
      "Responsive React frontend integrated with Node.js and Express APIs.",
      "Deployed on AWS EC2 with S3 for files and RDS for the database.",
    ],
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MUI",
      "Context API",
      "Redux",
      "Zustand",
    ],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "CI/CD"],
  },
  {
    label: "Databases",
    items: ["MySQL", "MongoDB"],
  },
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "C", "SQL"],
  },
];

export const education = {
  school: "R.N.S Institute of Technology",
  location: "Bangalore, Karnataka",
  degree: "Bachelor of Engineering in Computer Science",
  period: "Dec 2021 — April 2025",
};

export const certifications = [
  { name: "AWS Cloud Practitioner", year: "2024" },
  { name: "Database Management System — NPTEL", year: "2023" },
];

export const leadership = [
  {
    title: "First Place",
    detail: "VTU Chess Selection Trials",
    year: "2023",
  },
  {
    title: "Team Lead",
    detail: "AIU South Zone Inter-University Chess Competition",
    year: "2023",
  },
];
