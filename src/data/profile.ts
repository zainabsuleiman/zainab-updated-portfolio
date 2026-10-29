export const profile = {
  name: "Nyinawumuntu Zainab Suleiman",
  shortName: "Zainab",
  title: "Full Stack Engineer",
  tagline:
    "TypeScript · Node.js · Next.js · React · AI-native · Load-tested systems",
  location: "Kigali, Rwanda",
  phone: "+250 780 958 495",
  email: "zainabseryu@gmail.com",
  linkedin: "https://www.linkedin.com/in/", // TODO: add your LinkedIn handle
  github: "https://github.com/", // TODO: add your GitHub handle
  summary:
    "Full stack engineer with 4+ years shipping production products end to end, from PostgreSQL data models and Node.js/TypeScript APIs to React and Next.js front ends. AI-native: I build with AI coding agents (Claude Code) and integrate LLMs into products, including two AI agents that run and judge browser tests and an MCP tool that generates a complete government service from a prompt in under 10 minutes. I build for correctness under load: k6 load tests in CI, queue-based job runners, and integrations between independent systems with failure handling. I own features from requirements through production, and follow production issues to root cause.",
};

export const highlights = [
  { value: "4+", label: "years shipping production software" },
  { value: "2", label: "AI agents in production" },
  { value: "<10 min", label: "to generate a government service via MCP" },
  { value: "4", label: "government agencies onboarded" },
];

export type Role = {
  company: string;
  title: string;
  period: string;
  location?: string;
  projects: {
    name: string;
    stack: string[];
    bullets: string[];
  }[];
};

export const experience: Role[] = [
  {
    company: "Irembo Ltd",
    title: "Software Engineer",
    period: "Jun 2024 – Present",
    location: "Kigali",
    projects: [
      {
        name: "AI-facilitated QA platform",
        stack: [
          "TypeScript",
          "Node.js",
          "Next.js",
          "Prisma",
          "PostgreSQL",
          "Docker",
          "GitHub Actions",
        ],
        bullets: [
          "Built an internal QA platform end to end, from the Next.js front end to the Node.js API, PostgreSQL data model and role-based access, replacing spreadsheets as the single source of truth for test cases, runs, evidence, defects and coverage.",
          "Integrated LLM APIs (Claude API, OpenRouter) into two AI agents: one runs tests in a real browser and judges each result from screenshots; the other turns requirement documents into proposed test cases for human review.",
          "Built a queue-based job runner for long-running test and AI jobs, and an import pipeline (ExcelJS) that validates legacy spreadsheets and loads them as structured records.",
          "Set up CI in GitHub Actions running Vitest unit tests and k6 load tests; containerised the services with Docker; exposed the platform to AI agents through an MCP interface.",
        ],
      },
      {
        name: "IremboGov national platform",
        stack: ["Java", "Spring Boot", "Angular", "TypeScript", "AWS ECS", "MWAA"],
        bullets: [
          "Build features end to end, front end to back end, on Rwanda's national e-government platform, which connects independent government systems to deliver citizen services.",
          "Built an internal MCP-based tool that generates a new government service from a prompt, cutting service creation time to under 10 minutes.",
          "Integrate third-party and government APIs with failure handling and secure credential management; monitor performance and fix production issues down to root cause.",
          "Work with containerised services on AWS ECS, Managed Airflow (MWAA) pipelines, and MLOps: model versioning, monitoring and retraining.",
          "Led onboarding of four government agencies (RICA, NCPD, NIDA, DGIE) from requirements to launch, working directly with agency stakeholders.",
        ],
      },
    ],
  },
  {
    company: "Rwanda Revenue Authority",
    title: "Software Engineer Consultant",
    period: "Mar 2024 – May 2025",
    projects: [
      {
        name: "Rwanda Single Trade Platform integrations",
        stack: ["Next.js", "Tailwind CSS", "REST APIs"],
        bullets: [
          "Integrated three government systems (RFDA, NAEB, RICA) with the Rwanda Single Trade Platform to support customs and trade workflows.",
          "Built a responsive tracking dashboard in Next.js and Tailwind CSS.",
        ],
      },
    ],
  },
  {
    company: "Hexakomb Ltd",
    title: "Software Developer",
    period: "Sep 2022 – Feb 2024",
    location: "Kigali",
    projects: [
      {
        name: "Ticketing apps and regulatory systems",
        stack: [
          "Python",
          "Django",
          "Flutter",
          "Firebase",
          "Java",
          "Spring",
          "React",
          "Vue",
        ],
        bullets: [
          "Shipped consumer-facing bus and events ticketing apps (Python/Django, Flutter, Firebase/Firestore) from requirements to release in a small team.",
          "Built production systems for Rwanda FDA (Product Regulatory Inspection System: Java, Spring, React) and the Waka Attendance System (Spring Boot, Vue).",
          "Implemented OAuth2 authentication, REST APIs and PostgreSQL data models; wrote handover documentation for each feature.",
        ],
      },
    ],
  },
];

export const projects = [
  {
    name: "AI-facilitated QA platform",
    description:
      "Internal platform that replaced spreadsheets as the source of truth for test cases, runs, evidence, defects and coverage. Two LLM-powered agents: one executes tests in a real browser and judges results from screenshots, the other drafts test cases from requirement documents.",
    stack: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "Claude API", "MCP", "k6"],
  },
  {
    name: "Service generator (MCP tool)",
    description:
      "An MCP-based tool that generates a complete IremboGov government service from a single prompt, cutting service creation time from days to under 10 minutes.",
    stack: ["MCP", "TypeScript", "LLM APIs"],
  },
  {
    name: "Single Trade Platform integrations",
    description:
      "Connected RFDA, NAEB and RICA systems to the Rwanda Single Trade Platform for customs and trade workflows, with a responsive Next.js tracking dashboard.",
    stack: ["Next.js", "Tailwind CSS", "REST"],
  },
  {
    name: "Rwanda FDA inspection system",
    description:
      "Product Regulatory Inspection System for Rwanda FDA, built on Java/Spring with a React front end, plus OAuth2 auth and PostgreSQL data models.",
    stack: ["Java", "Spring", "React", "PostgreSQL"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Full stack",
    items: [
      "TypeScript",
      "Node.js",
      "Next.js",
      "React",
      "Python (Django)",
      "Java (Spring Boot)",
      "Angular",
      "Vue",
      "Tailwind CSS",
      "Flutter",
      "REST & public API design",
    ],
  },
  {
    group: "AI-native engineering",
    items: [
      "AI coding agents (Claude Code)",
      "LLM API integration (Claude API, OpenRouter)",
      "AI agents",
      "Model Context Protocol (MCP)",
      "AI-facilitated QA",
    ],
  },
  {
    group: "Performance & reliability",
    items: [
      "k6 load testing",
      "Queue-based job runners",
      "Failure handling between systems",
      "Production debugging & root-cause analysis",
    ],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firestore", "Prisma", "Data modelling", "Import pipelines"],
  },
  {
    group: "Infrastructure & CI/CD",
    items: ["Docker", "docker-compose", "AWS ECS", "Managed Airflow (MWAA)", "GitHub Actions", "Linux", "Git/GitHub"],
  },
  {
    group: "Testing",
    items: ["Vitest", "Playwright", "k6", "API regression testing", "Mockoon"],
  },
  {
    group: "Security & auth",
    items: ["OAuth2", "NextAuth", "Role-based access control", "Secure credential management"],
  },
];

export const education = [
  {
    degree: "MSc Big Data Analytics",
    school: "Adventist University of Central Africa (AUCA)",
    period: "In progress",
  },
  {
    degree: "BSc Information Technology",
    school: "Adventist University of Central Africa (AUCA)",
    period: "2019 – 2023",
  },
];

export const languages = ["English", "French", "Kinyarwanda"];
