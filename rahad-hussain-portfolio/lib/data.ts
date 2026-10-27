// All portfolio content lives here. Only verified facts from Rahad's CV.
export const site = {
  name: "Rahad Hussain",
  first: "RAHAD",
  last: "HUSSAIN",
  url: "https://rahad.bond",
  title: "Rahad Hussain | CSE Graduate & Software Developer",
  description:
    "Portfolio of Rahad Hussain, a Computer Science & Engineering graduate from Uttara University, Bangladesh, with research experience in WebSocket security.",
  email: "rahad01921@gmail.com",
  github: "https://github.com/rahad00x",
  githubHandle: "@rahad00x",
  linkedin: "https://www.linkedin.com/in/rahad-hussain/",
  linkedinHandle: "in/rahad-hussain",
  facebook: "https://www.facebook.com/rah4d.hussain/",
  instagram: "https://www.instagram.com/rah4d.hussain/",
  socialHandle: "rah4d.hussain",
  resume: "/Rahad_Hussain_CV.pdf",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  badges: ["BSc in CSE, Uttara University", "WebSocket security research"],
  roles: ["Computer Science & Engineering Graduate", "Software Developer"],
  tagline: ["Building practical software.", "Solving problems through code."],
};

export const about = [
  "I am a Computer Science and Engineering graduate from Uttara University in Dhaka, with a foundation in programming, data structures, algorithms and computer networks.",
  "My undergraduate thesis looked at the security of WebSocket implementations. I tested real vulnerabilities by hand in a lab environment and then wrote my own Python scanner to automate the checks.",
  "I enjoy breaking a problem down until the solution is simple, and I am looking for an entry-level role in software or IT where I can keep learning and build things that work.",
];

export const skills = [
  { group: "Programming languages", items: ["C", "C++", "Java", "Python", "JavaScript"] },
  {
    group: "Core competencies",
    items: ["Object-Oriented Programming", "Data Structures & Algorithms", "Software Engineering", "Computer Networks"],
  },
  {
    group: "Security research tools",
    items: ["Burp Suite Professional", "PortSwigger Web Security Academy", "Python asyncio", "websockets"],
  },
  { group: "Working style", items: ["Communication", "Teamwork", "Problem solving", "Presentation", "Leadership"] },
  { group: "Spoken languages", items: ["Bengali (native)", "English (proficient)"] },
];

export type Project = {
  title: string;
  summary: string;
  problem: string;
  features: string[];
  stack: string[];
  screenshot: string | null;
  repo: string | null;
  demo: string | null;
  caseStudy: string[];
};

export const projects: Project[] = [
  {
    title: "WebSocket Penetration Testing & Vulnerability Scanner",
    summary:
      "Undergraduate thesis (2025-2026) on the security of WebSocket implementations, including an automated Python scanner that detects five major vulnerabilities.",
    problem:
      "WebSocket connections can be exposed to cross-site scripting, cross-site WebSocket hijacking (CSWSH) and handshake manipulation. The thesis investigates these weaknesses and how to find them.",
    features: [
      "Manual assessment of XSS, CSWSH and handshake manipulation",
      "Hands-on testing with Burp Suite Professional in PortSwigger Web Security Academy labs",
      "Asynchronous Python scanner built with asyncio and websockets",
      "Detects five major vulnerabilities",
    ],
    stack: ["Python", "asyncio", "websockets", "Burp Suite Professional"],
    screenshot: null,
    repo: null,
    demo: null,
    caseStudy: [
      "Scope: security assessment of WebSocket implementations, focused on XSS, CSWSH and handshake manipulation.",
      "Method: practical penetration testing with Burp Suite Professional inside the PortSwigger Web Security Academy environment.",
      "Tooling: an automated WebSocket Vulnerability Scanner written in Python using asyncio and websockets, covering five major vulnerabilities.",
    ],
  },
];

export const experience = [
  {
    role: "Undergraduate Thesis Researcher",
    org: "Uttara University",
    period: "2025 to 2026",
    points: [
      "Assessed WebSocket implementations for XSS, CSWSH and handshake manipulation vulnerabilities.",
      "Ran practical penetration tests with Burp Suite Professional in the PortSwigger Web Security Academy.",
      "Designed an automated Python WebSocket Vulnerability Scanner using asyncio and websockets.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science & Engineering",
  school: "Uttara University",
  place: "Dhaka, Bangladesh",
  status: "Completed August 2026",
};
