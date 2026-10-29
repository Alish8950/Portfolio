import { Aurora, CFCSus, ClientpointMe } from "../assets";

// Single source of truth for the site's content. Keep it in sync with the resume PDF.
export const profile = {
  name: "Alish Allawadhi",
  role: "Frontend Developer",
  focus: ["React", "Next.js", "TypeScript"],
  location: "India · Open to remote",
  availability: "Open to remote frontend roles",
  email: "alishallawadhi5@gmail.com",
  linkedin: "https://www.linkedin.com/in/alish-allawadhi-60a883219",
  github: "https://github.com/Alish8950",
  summary:
    "Frontend developer with 4+ years of experience building production React and Next.js applications in TypeScript. I currently build MasterBrand's Rebode kitchen-planning platform, where I own the shared navigation library used by four Next.js apps. I care about clean component architecture, measurable product impact and shipping reliably in distributed agile teams.",
};

export const stats = [
  { value: "4+", label: "Years building production React apps" },
  { value: "20K+", label: "Monthly active users on Rebode" },
  { value: "116", label: "Pull requests merged across 6 repos" },
  { value: "20+", label: "Feature launches at ClientPoint" },
];

// Text wrapped in **double asterisks** renders bold.
export const experience = [
  {
    company: "Broadpoint Group",
    role: "Frontend Developer",
    period: "Aug 2025 – Present",
    location: "Remote",
    context:
      "Contract for MasterBrand (North America's largest cabinet manufacturer) · Rebode consumer platform",
    bullets: [
      "Built Rebode's **universal navbar from scratch** as a React 19 + TypeScript package in a Turborepo/pnpm monorepo, with Kontent.ai content, auth state, a Zustand store and mobile navigation; shipped **12 versioned releases** consumed by 4 Next.js apps.",
      "Delivered **Virtual Designer v1.0–1.4** in the kitchen-remodel journey: Calendly consultation booking, dealer listings with optimized map loading, image upload/share and PDF export.",
      "Built the end-to-end **Connect Now** dealer-connection flow on the Next.js App Router: CMS-driven UI, server-side Calendly fetching, session-expiry handling and user data synced across apps.",
      "Instrumented **Amplitude** events across the navbar, Connect Now and Virtual Designer funnels, giving product teams conversion data for decisions.",
      "Merged **116 pull requests across 6 production repositories**, with Vitest / React Testing Library tests and regular code reviews.",
    ],
    tags: ["React 19", "Next.js", "TypeScript", "Zustand", "Kontent.ai", "Amplitude", "Turborepo"],
  },
  {
    company: "Freelance",
    role: "Frontend Developer",
    period: "Mar 2025 – Jul 2025",
    location: "Remote",
    bullets: [
      "Built responsive websites and web apps for small-business clients with React, Next.js and Tailwind CSS, from Figma designs to deployment.",
      "Created reusable component sets, integrated REST APIs and improved SEO and Core Web Vitals for client sites.",
    ],
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    company: "Softobiz Technologies",
    role: "Frontend Developer",
    period: "Jul 2022 – Feb 2025",
    location: "Mohali, India",
    bullets: [
      "**ClientPoint** (US B2B sales-enablement SaaS, Next.js): built a reusable MUI-based component library used across teams, managed complex state with Redux Toolkit and delivered **20+ feature launches**.",
      "Improved performance with lazy loading, code splitting and memoization, raising Lighthouse performance scores.",
      "**Sustainability platform** (Australian enterprise; React, NestJS, PostgreSQL): theme setup, Figma-to-Material-UI build, role-based access for buyers and sellers, multi-step forms and PDF upload/download.",
      "**TourO Bikes**, **Peak IT** and **Aurora Home Inspection**: booking flows, authentication, live rental updates, REST API integration, file uploads, ticketing and staff management.",
    ],
    tags: ["Next.js", "React", "Redux Toolkit", "Material UI", "Chakra UI"],
  },
];

export const projects = [
  {
    name: "Rebode",
    org: "MasterBrand · via Broadpoint Group",
    url: "https://rebode.us",
    summary:
      "Kitchen-planning platform with 20K+ monthly users. I built the shared navbar library used by 4 Next.js apps, plus the Virtual Designer and Connect Now flows.",
    stack: ["Next.js", "React 19", "TypeScript", "Kontent.ai"],
  },
  {
    name: "ClientPoint",
    org: "Softobiz Technologies",
    url: "https://www.clientpoint.me/",
    img: ClientpointMe,
    summary:
      "B2B sales-enablement SaaS for proposals, e-signatures, messaging, video calls and scheduling. Built its reusable component library and shipped 20+ features.",
    stack: ["Next.js", "Material UI", "Redux Toolkit"],
  },
  {
    name: "Aurora Home Inspection",
    org: "Softobiz Technologies",
    url: "https://app.myauroraportal.com/",
    img: Aurora,
    summary:
      "Platform for home-inspection businesses: report writing, client management, memberships and staff management, with mobile inspections and automation.",
    stack: ["React", "Chakra UI", "REST APIs"],
  },
  {
    name: "Consolidated Food Co.",
    org: "Softobiz Technologies",
    url: "https://cfco.com/",
    img: CFCSus,
    summary:
      "Sustainability platform for a food supply-chain company: role-based buyer and seller access, multi-step forms and PDF upload/download.",
    stack: ["React", "Material UI", "NestJS"],
  },
];

export const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript (ES2022+)", "HTML5", "CSS3 / SCSS"] },
  {
    group: "Frameworks & state",
    items: ["React 19", "Next.js (App & Pages Router)", "Redux Toolkit", "Zustand", "React Query", "SWR", "React Hook Form", "Zod"],
  },
  { group: "UI", items: ["Tailwind CSS", "Material UI", "Chakra UI", "Framer Motion", "Responsive design"] },
  { group: "CMS, analytics & auth", items: ["Kontent.ai", "Amplitude", "Google Tag Manager", "Auth0"] },
  {
    group: "Testing & tooling",
    items: ["Vitest", "Jest", "React Testing Library", "Turborepo", "pnpm", "Vite", "Changesets", "Azure DevOps CI/CD", "Git", "Jira"],
  },
];

export const education = {
  degree: "B.Tech, Computer Science & Engineering",
  school: "Chandigarh Group of Colleges, Landran (Mohali)",
  period: "2018 – 2022",
  detail: "CGPA 7.8",
};
