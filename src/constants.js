// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import dotnetLogo from "./assets/tech_logo/.net.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import supaLogo from "./assets/tech_logo/supa.png";
import cLogo from "./assets/tech_logo/c.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's
import sitaLogo from "./assets/company_logo/sita_logo.png";
import tcsLogo from "./assets/company_logo/tcs_logo.png";
import nokiaLogo from "./assets/company_logo/nokia_logo.png";

// Education Section Logo's
import uniLogo from "./assets/education_logo/uni_logo.png";

// Project Section Logo's
import supanextLogo from "./assets/work_logo/supa_next.png";
import ecommerceLogo from "./assets/work_logo/ecommerce.png";
import personnummerLogo from "./assets/work_logo/person_number.png";
import aiBlogLogo from "./assets/work_logo/ai.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "Java Script", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: ".NET Core", logo: dotnetLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "Supa base", logo: supaLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C#", logo: cLogo },
      { name: "Java Script", logo: javascriptLogo },
      { name: "Type Script", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: sitaLogo,
    role: "Web Developer",
    company: "SITA.dev",
    date: "May 2024 - April 2025",
    desc: "Developed modern, scalable web applications using React, Next.js (TypeScript), and Tailwind CSS, focusing on performance, SEO, and accessibility. Collaborated with cross-functional teams to transform Figma designs into responsive UI, integrate secure authentication using OAuth and Bank ID, and connect to dynamic content via RESTful APIs. Improved application performance using ISR, SSR, and Lighthouse audits, while managing state with Context API. Contributed to CI/CD automation using Vercel and wrote robust test suites using Cypress in an agile environment.",
    skills: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Redux",
      "Next Js",
      "REST API",
      "OAuth",
      "Vercel",
      "Cypress",
      "CI/CD",
      "Agile Methodology",
    ],
  },
  {
    id: 1,
    img: tcsLogo,
    role: "Web Developer",
    company: "Tata Consultancy Services",
    date: "October 2020 - September 2022",
    desc: "At Tata Consultancy Services, I worked with clients like Japan Airlines and Singapore Airlines, developing frontend features using React and Angular. I handled real-time data with Redux, optimized performance with lazy loading and memoization, and improved accessibility following WCAG 2.1 AA standards. I collaborated on API integrations, used .NET Core, Azure, and Contentful CMS, and practiced TDD with Jest and Cypress, achieving up to 80%-90% test coverage.",
    skills: [
      "HTML",
      "Angular",
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      ".NET Core",
      "Microsoft Azure",
      "Contentful CMS",
      "Web Accessibility (WCAG 2.1 AA)",
    ],
  },
  {
    id: 2,
    img: nokiaLogo,
    role: "Engineer Trainee",
    company: "Nokia Solutions and Networks",
    date: "July 2019 – July 2020",
    desc: "As an Engineer Trainee at Nokia, I assisted in building responsive UI components using React, JavaScript, and HTML/CSS, contributing to improved user interfaces. I gained hands-on experience with Context API, stateful components, and integrated RESTful APIs, deepening my understanding of client-server architecture. I also supported WordPress customizations and plugin maintenance, and actively participated in Agile ceremonies to help identify and resolve frontend bugs, improving overall application stability.",
    skills: ["HTML", "CSS", "Bootstrap", "Javascript", "React JS", "WordPress"],
  },
];

export const education = [
  {
    id: 0,
    img: uniLogo,
    school: "Pondicherry University",
    date: "Aug 2018 - Aug 2020",
    grade: "9.2 GPA",
    desc: "I have completed my Master of Technology in Distributed Computing Systems from Pondicherry University. The program provided me with in-depth knowledge of distributed systems and cloud technologies. I studied specialized subjects such as Cloud Computing, Distributed Database Management, Distributed System Security, and Software Architecture, which strengthened my understanding of scalable and secure system design. I also participated in technical workshops and academic projects that enhanced my hands-on skills and collaborative learning. This experience laid a strong foundation for my career in full-stack development and cloud-based application architecture.",
    degree: "Master of Distributed Computing Systems ",
  },
  {
    id: 1,
    img: uniLogo,
    school: "Pondicherry University",
    date: "Aug 2014 - Aug 2018",
    grade: "8.4 GPA",
    desc: "I hold a Bachelor of Technology in Computer Science and Engineering from Pondicherry University, where I built a solid foundation in core computer science principles and software development. The curriculum covered key subjects such as Data Structures, Algorithms, Operating Systems, Database Management Systems, Computer Networks, and Web Technologies. I also took part in coding contests, technical seminars, and hands-on lab sessions that deepened my problem-solving abilities and practical knowledge. My undergraduate experience played a crucial role in shaping my logical thinking, technical versatility, and interest in building real-world applications.",
    degree: "Bachelor of Technology in Computer Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "Next.js + Supabase: Auth, Forms & Product Management",
    description:
      "A modern Next.js application with robust Supabase authentication, client-side form validation, image uploads, and protected routes.",
    image: supanextLogo,
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "OAuth (Google, GitHub)",
      "Cloud Storage (Supabase Storage)",
    ],
    github: "https://github.com/keerthanamaha/nextjs-supabase-auth-app",
    webapp: "https://nextjs-supabase-auth-app.vercel.app/",
  },
  {
    id: 1,
    title: "React + Node.js E-commerce: Full-Stack App with Cart & Orders",
    description:
      "A complete e-commerce platform built using React and Node.js. Features include product listing, cart management, order creation, and stock updates. Fully integrated frontend and backend with scalable architecture.",
    image: ecommerceLogo,
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
      "Full-Stack",
      "Cart & Order System",
      "Environment Variables",
      "Frontend-Backend Integration",
    ],
    github: "https://github.com/keerthanamaha/mini-ecommerce-frontend",
    webapp: "https://mini-ecommerce-frontend-bay.vercel.app/",
  },
  {
    id: 2,
    title:
      "Swedish Personal Identity Number Validator: Validate & Decode Personnummer",
    description:
      "A user-friendly web app that validates and decodes Swedish Personal Identity Numbers (personnummer). Extracts birthdate, gender, and verifies the checksum using the Luhn algorithm. Perfect for learning about Sweden’s unique ID system.",
    image: personnummerLogo,
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
      "Validation",
      "Luhn Algorithm",
      "Personnummer",
      "Frontend",
      "User Input",
      "Responsive Design",
      "Web App",
    ],
    github: "https://github.com/keerthanamaha/personnummer-validator",
    webapp: "https://personnummer-validator.netlify.app/",
  },
  {
    id: 2,
    title:
      "AI-Powered Comment Companion: Chrome Extension for Intelligent Web Interaction",
    description:
      "AI-Powered Comment Companion — a Chrome extension that enhances your web experience with AI-driven content filtering and intelligent comment generation. Customize prompts, filter posts, and generate context-aware replies instantly.",
    image: aiBlogLogo,
    tags: ["React ", "TypeScript", "Tailwind CSS", "WXT"],
    github: "https://github.com/keerthanamaha/ai-blog-assistant",
    webapp: "",
  },
];
