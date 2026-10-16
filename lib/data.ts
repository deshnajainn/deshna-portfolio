export const personalInfo = {
  name: "Deshna Jain",
  firstName: "Deshna",
  initials: "DJ",
  roles: ["Software Developer", "Full-Stack Engineer", "React & Node.js Dev", "Frontend + Backend"],
  tagline: "I build across the stack — from pixel to API to database.",
  location: "Indore, India",
  education: "B.Tech CSE · Acropolis Institute of Technology and Research, Indore · 2022–2026",
  company: "KatalX Technologies (Signalz)",
  companyFrom: "June 2026",
  email: "deshnajain0222@gmail.com",
  phone: "+91 85178 98324",
  github: "https://github.com/deshnajainn",
  linkedin: "https://www.linkedin.com/in/deshnajain2222/",
  available: true,
};

export const about = {
  paragraphs: [
    "Fresh out of Acropolis Indore (B.Tech CSE, 2022–2026). I stepped into my software engineering internship at KatalX Technologies just one week after my final exams.",
    "My core strength is backend engineering — designing database schemas, architecting REST APIs, wiring up real-time caching with Redis, and integrating third-party services. I also build clean frontend interfaces with React and Next.js when needed. Production codebase. Real pull requests. Real users.",
  ],
};

export const techStack = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Express.js", "NestJS", "REST APIs", "Redis"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "CockroachDB", "MySQL", "SQL"],
  },
  {
    category: "AI & Integrations",
    skills: ["Gemini API", "Prompt Engineering", "Agentic AI", "Claude", "Code Workflow Automation", "3rd Party API Integration"],
  },
  {
    category: "Tools & Workflow",
    skills: ["Git", "GitHub", "Postman", "DBeaver", "VS Code", "Vercel"],
  },
  {
    category: "Currently Learning",
    skills: ["Docker", "AWS", "Flask"],
  },
];

export const experience = [
  {
    role: "Software Developer Intern",
    company: "KatalX Technologies Pvt. Ltd. (Signalz)",
    period: "June 2026 – Present",
    location: "Hybrid / Remote",
    type: "Internship",
    highlights: [
      "Developed and maintained backend workflows using JavaScript, TypeScript, Node.js, Express.js, Redis, and SQL databases within an existing production codebase.",
      "Integrated third-party WhatsApp messaging APIs using Axios in Node.js, handling API requests, response processing, and backend service integration.",
      "Implemented and debugged Firebase Cloud Messaging (FCM) push-notification workflows, including topic-based delivery, Redis subscription lookups, and dynamic notification payload generation.",
      "Built and tested REST API workflows involving request validation, authentication handling, database integration, and external service communication.",
      "Developed Redis and SQL queries using multiple filter parameters, including dates, statuses, ranges, and record IDs, to retrieve and process application data.",
      "Troubleshot API integration issues and validated request/response handling using Postman, database queries, and DBeaver.",
      "Collaborated on feature delivery using Git branches, commits, and pull requests while maintaining compatibility with existing backend workflows.",
    ],
  },
];

export const projects = [
  {
    title: "My Binge Watch",
    subtitle: "Ongoing Personal Project",
    description:
      "Entertainment recommendation app with mood-based suggestions, an interactive 'Guess the Show' section, and reusable page components. Building it because it scratches my own itch.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    status: "wip",
    nda: false,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "URL Shortener",
    subtitle: "Deployed Project",
    description:
      "A responsive URL shortener built with the Next.js App Router — typed input handling, reusable components, and deployed live on Vercel. Clean, fast, works.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "live",
    nda: false,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Mock Interviewer",
    subtitle: "Major Academic Group Project",
    description:
      "Frontend developer in a five-member team. Built responsive interview flows connected to Gemini AI for question generation, Clerk for auth, and PostgreSQL for session data.",
    tags: ["Next.js 14", "React", "Gemini API", "PostgreSQL", "Drizzle ORM", "Clerk"],
    status: "live",
    nda: false,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Something Better — Coming Soon",
    subtitle: "Personal Project",
    description:
      "Working on my next project. It'll be bigger, more polished, and actually worth bragging about.",
    tags: [],
    status: "soon",
    nda: false,
    liveUrl: "",
    githubUrl: "",
  },
];
