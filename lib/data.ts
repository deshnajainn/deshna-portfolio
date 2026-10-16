export const personalInfo = {
  name: "Deshna Jain",
  firstName: "Deshna",
  initials: "DJ",
  role: "Backend Developer",
  roles: ["Backend Developer", "Node.js Engineer", "API Architect", "Systems Builder"],
  tagline: "I build the things you never see — but always depend on.",
  location: "Indore, India",
  education: "B.Tech CSE · Acropolis Institute of Technology and Research, Indore · 2026",
  company: "Signalz",
  companyFrom: "June 2026",
  email: "deshnajain0222@gmail.com",
  github: "https://github.com/deshnajainn",
  linkedin: "https://www.linkedin.com/in/deshnajain2222/",
  available: true,
};

export const about = {
  paragraphs: [
    "Fresh out of Acropolis Indore (B.Tech CSE, 2026). I walked into my internship at Signalz one week after my last college exam.",
    "I work on the backend — building APIs, designing database schemas, wiring up real-time systems with Redis Pub/Sub. Production deployed. Actual users. Actual stakes.",
    "Not looking for learning opportunities. Already in one.",
  ],
};

export const techStack = [
  {
    category: "Runtime & Languages",
    skills: ["Node.js", "TypeScript", "JavaScript", "Python", "C++"],
  },
  {
    category: "Frameworks",
    skills: ["Express.js", "Next.js", "React"],
  },
  {
    category: "Databases & Infra",
    skills: ["CockroachDB", "Redis", "Redis Pub/Sub", "DBeaver"],
  },
  {
    category: "Auth & APIs",
    skills: ["JWT", "REST APIs", "3rd Party API Integration", "Postman"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "GitHub", "Vercel", "VS Code"],
  },
  {
    category: "Currently Learning",
    skills: ["NestJS", "Docker", "AWS"],
  },
];

export const experience = [
  {
    role: "Backend Developer Intern",
    company: "Signalz",
    period: "June 2026 – Present",
    location: "Indore, India",
    type: "Internship",
    highlights: [
      "Architected and deployed a push notification service to production",
      "Designed and managed database schemas in CockroachDB",
      "Built RESTful APIs consumed by frontend and mobile clients",
      "Integrated third-party APIs and external services",
      "Implemented Redis Pub/Sub for real-time event streaming",
      "Handled JWT-based authentication and session management",
    ],
  },
];

export const projects = [
  {
    title: "Push Notification Service",
    description:
      "End-to-end push notification infrastructure deployed to production at Signalz. Handles real-time delivery at scale.",
    tags: ["Node.js", "Redis", "CockroachDB", "REST API"],
    status: "production",
    nda: true,
  },
  {
    title: "Database Architecture",
    description:
      "Designed and managed CockroachDB schemas supporting the Signalz platform backend — indexes, relations, migrations.",
    tags: ["CockroachDB", "DBeaver", "SQL"],
    status: "production",
    nda: true,
  },
  {
    title: "Real-time API Suite",
    description:
      "Built a suite of RESTful APIs with JWT auth, 3rd party integrations, and Redis Pub/Sub for real-time event streaming.",
    tags: ["Express.js", "JWT", "Redis Pub/Sub", "TypeScript"],
    status: "production",
    nda: true,
  },
  {
    title: "Own Project — Coming Soon",
    description:
      "Building something of my own. Watch this space.",
    tags: [],
    status: "wip",
    nda: false,
  },
];
