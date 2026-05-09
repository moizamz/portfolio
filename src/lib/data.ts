import {
  Atom,
  Boxes,
  Brain,
  Briefcase,
  Code2,
  Database,
  Github,
  Globe,
  Hexagon,
  Layers,
  Linkedin,
  type LucideIcon,
  Mail,
  MessagesSquare,
  Phone,
  Rocket,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";

export const personal = {
  name: "Abdul Moiz",
  shortName: "Moiz",
  initials: "AM",
  headline: "Software Engineer · .NET · MERN / MEAN · AI/ML",
  location: "Islamabad / Lahore, Pakistan",
  locations: ["Islamabad", "Lahore"],
  email: "moizamz.dev@gmail.com",
  phone: "+92 304 4855094",
  linkedin: "https://linkedin.com/in/moizamz",
  github: "https://github.com/moizamz",
  resumeFile: "/Resume-Abdul-Moiz.pdf",
  photo: "/abdul-moiz.png",
  summary:
    "Computer Science graduate from NUST. I work across the .NET ecosystem (C#, ASP.NET Core) and the open-source MERN / MEAN stacks (React, Angular, Node.js), with a steady stream of AI and data-driven projects on the side. The things I care about: clean architecture, code that performs and interfaces that don't get in your way.",
  longSummary:
    "Computer Science graduate from NUST SEECS. My work spans the .NET ecosystem (C#, ASP.NET Core, Blazor) and the open-source MERN and MEAN stacks (MongoDB, Express, React or Angular, Node.js), plus hands-on projects in mobile and AI. I interned at Bitsmiths Studio, where I worked on React, Node.js and ASP.NET Core systems alongside the team, and at the NUST HPC Lab, where I built end-to-end ML pipelines and ran experiments on real datasets. Most of my other projects came out of coursework: reinforcement-learning agents, end-to-end encrypted protocols and Flutter apps. What I care about is doing the basics well: solid CS fundamentals, clean code and software that holds up under real use.",
  availability: "Open to Software Engineer / .NET / AI/ ML / Data Science roles",
} as const;

export type RoleTitle =
  | "Software Engineer"
  | ".NET Developer"
  | "AI / ML Engineer"
  | "Data Scientist"
  | "Full-Stack Developer"
  | "Mobile Developer"
  | "Systems & Security"
  | "Problem Solver";

export const rotatingRoles: RoleTitle[] = [
  "Software Engineer",
  ".NET Developer",
  "AI / ML Engineer",
  "Data Scientist",
  "Full-Stack Developer",
  "Mobile Developer",
  "Systems & Security",
  "Problem Solver",
];

export const stats: { label: string; value: string; suffix?: string }[] = [
  { label: "Years building software", value: "4", suffix: "+" },
  { label: "Engineering projects built", value: "11", suffix: "+" },
  { label: "Internships at top tech labs", value: "2" },
  { label: "Tech stacks mastered", value: "12", suffix: "+" },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: personal.github, icon: Github },
  { label: "LinkedIn", href: personal.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${personal.email}`, icon: Mail },
  { label: "Phone", href: `tel:${personal.phone.replace(/\s/g, "")}`, icon: Phone },
];

export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "dotnet",
    title: ".NET Ecosystem",
    description:
      "Production-grade C# services, web APIs and modern Blazor UIs, built clean with patterns that scale.",
    icon: Hexagon,
    accent: "from-indigo-500/35 to-violet-500/10",
    skills: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "Blazor",
      "Web APIs",
      "Entity Framework",
      "MVC",
      "Dependency Injection",
    ],
  },
  {
    id: "mern-mean",
    title: "MERN / MEAN",
    description:
      "End-to-end JavaScript/TypeScript stacks: MongoDB, Express, React or Angular, Node.js, with Next.js for production frontends.",
    icon: Server,
    accent: "from-emerald-500/35 to-cyan-500/10",
    skills: [
      "MongoDB",
      "Express",
      "React",
      "Angular",
      "Node.js",
      "Next.js",
      "REST APIs",
      "JWT Auth",
    ],
  },
  {
    id: "languages",
    title: "Languages",
    description: "Idiomatic across compiled, managed and dynamic languages.",
    icon: Code2,
    accent: "from-violet-500/30 to-fuchsia-500/10",
    skills: ["C#", "C / C++", "Python", "TypeScript", "JavaScript", "Java", "Dart"],
  },
  {
    id: "ai",
    title: "AI / ML & Data Science",
    description:
      "From classical ML and data analysis to deep learning, NLP and reinforcement learning.",
    icon: Brain,
    accent: "from-pink-500/30 to-rose-500/10",
    skills: [
      "TensorFlow",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Reinforcement Learning",
      "NLP",
      "Feature Engineering",
      "Model Evaluation",
      "Hyperparameter Tuning",
    ],
  },
  {
    id: "data",
    title: "Databases",
    description: "Modeling, indexing and scaling SQL & NoSQL systems.",
    icon: Database,
    accent: "from-emerald-500/30 to-teal-500/10",
    skills: ["MySQL", "MongoDB", "SQLite", "Hive", "NoSQL", "Schema Design"],
  },
  {
    id: "mobile",
    title: "Mobile",
    description: "Cross-platform apps with native-quality UX.",
    icon: Smartphone,
    accent: "from-amber-500/30 to-orange-500/10",
    skills: ["Flutter", "Dart", "Firebase", "Hive", "Material 3", "Push Notifications"],
  },
  {
    id: "systems",
    title: "Systems & Security",
    description: "OS internals, networking and applied cryptography.",
    icon: ShieldCheck,
    accent: "from-indigo-500/30 to-blue-500/10",
    skills: [
      "Operating Systems",
      "Computer Networks",
      "Information Security",
      "Network Security",
      "Socket Programming",
      "End-to-End Encryption",
    ],
  },
  {
    id: "fundamentals",
    title: "CS Fundamentals",
    description: "The foundations top tech companies hire for.",
    icon: Atom,
    accent: "from-purple-500/30 to-violet-500/10",
    skills: [
      "OOP",
      "Data Structures",
      "Algorithms",
      "Complexity Analysis",
      "Design Patterns",
      "Clean / MVC / MVVM",
      "SDLC",
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    description: "Modern tooling and a designer's eye for UX.",
    icon: Wrench,
    accent: "from-slate-500/30 to-zinc-500/10",
    skills: [
      "Git / GitHub",
      "Visual Studio",
      "VS Code",
      "IntelliJ",
      "Google Colab",
      "UI / UX Design",
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  type: "Full-time" | "Internship" | "Research";
  highlights: string[];
  stack: string[];
  icon: LucideIcon;
};

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer Intern",
    company: "Bitsmiths Studio",
    location: "Islamabad, Pakistan",
    start: "Mar 2025",
    end: "Jul 2025",
    type: "Internship",
    icon: Briefcase,
    highlights: [
      "Built full-stack web applications powering real client products with React, Node.js and ASP.NET Core.",
      "Designed and implemented RESTful APIs, integrating frontend and backend across MySQL and MongoDB stores.",
      "Owned authentication and session handling, including secure token flows and persistence.",
      "Collaborated through Git workflows, code reviews and sprint planning, sharpening engineering rigor.",
    ],
    stack: ["React", "Node.js", "ASP.NET Core", "MySQL", "MongoDB", "REST", "Git"],
  },
  {
    role: "Machine Learning Intern",
    company: "HPC Lab · SEECS, NUST",
    location: "Islamabad, Pakistan",
    start: "Jun 2024",
    end: "Aug 2024",
    type: "Research",
    icon: Brain,
    highlights: [
      "Built end-to-end ML pipelines on real-world datasets: Decision Trees, Random Forests, KNN and SVM.",
      "Performed data preprocessing, feature engineering and rigorous model evaluation with cross-validation.",
      "Tuned hyperparameters and benchmarked models, lifting accuracy and generalization.",
      "Worked with scikit-learn and TensorFlow inside an HPC research environment.",
    ],
    stack: ["Python", "scikit-learn", "TensorFlow", "Pandas", "NumPy", "Jupyter"],
  },
];

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category:
    | "AI / ML"
    | "Full-Stack"
    | "Mobile"
    | "Systems"
    | "Security"
    | "Tools";
  stack: string[];
  highlights: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  icon: LucideIcon;
  accent: string;
};

export const projects: Project[] = [
  {
    id: "personalized-lms",
    title: "Personalized LMS",
    tagline: "Reinforcement-learning powered adaptive learning",
    description:
      "An adaptive learning management system that personalizes content delivery for each learner using reinforcement learning. The agent observes interaction signals to dynamically tune difficulty, pacing and topic order, turning a static LMS into an intelligent tutor.",
    category: "AI / ML",
    stack: ["Python", "Reinforcement Learning", "TensorFlow", "Web", "REST"],
    highlights: [
      "RL policy that personalizes per-learner content sequencing",
      "Adaptive difficulty and pacing from interaction signals",
      "End-to-end pipeline from data ingestion to serving",
    ],
    icon: Brain,
    accent: "from-violet-500 via-fuchsia-500 to-pink-500",
    featured: true,
  },
  {
    id: "safepak",
    title: "SafePak: Online FIR Registration",
    tagline: "Civic-tech mobile app for digital FIRs",
    description:
      "A citizen-first mobile application that lets users register First Information Reports digitally, improving accessibility, transparency and response time. Includes secure auth, case tracking and structured submission flows designed with real police-process constraints in mind.",
    category: "Mobile",
    stack: ["Flutter", "Dart", "Firebase", "REST", "Hive"],
    highlights: [
      "Digital FIR submission with structured metadata",
      "Secure authentication and role-based access",
      "Real-time case tracking and notification flow",
    ],
    icon: ShieldCheck,
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
    featured: true,
  },
  {
    id: "ludoai",
    title: "LudoAI",
    tagline: "Q-learning agent that masters Ludo",
    description:
      "A Q-learning reinforcement learning agent that learns optimal Ludo gameplay strategies from scratch. Models state-action value tables, balances exploration vs exploitation, and converges to strong policies through self-play.",
    category: "AI / ML",
    stack: ["Python", "Q-Learning", "NumPy", "Game AI"],
    highlights: [
      "State-action Q-table with epsilon-greedy exploration",
      "Self-play training with reward shaping",
      "Visualized convergence and strategy emergence",
    ],
    icon: Sparkles,
    accent: "from-pink-500 via-rose-500 to-orange-500",
    featured: true,
  },
  {
    id: "ecommerce-app",
    title: "E-Commerce Mobile App",
    tagline: "Cross-platform shopping with real-time backend",
    description:
      "A polished cross-platform Flutter shopping app with full authentication, product management, cart and checkout, backed by Firebase for real-time data sync, secure storage and scalable serverless reads.",
    category: "Mobile",
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "Auth"],
    highlights: [
      "Auth, product CRUD and cart with real-time sync",
      "Clean architecture with reusable widgets",
      "Optimistic UI for snappy interactions",
    ],
    icon: Smartphone,
    accent: "from-amber-500 via-orange-500 to-red-500",
  },
  {
    id: "ticket-booking",
    title: "Online Ticket Booking",
    tagline: "Web platform with secure seat reservation",
    description:
      "A web-based ticket booking platform supporting interactive seat selection, booking management and secure user authentication, with a focus on race-condition-free reservation logic.",
    category: "Full-Stack",
    stack: ["JavaScript", "Node.js", "Express", "MySQL", "Auth"],
    highlights: [
      "Interactive seat-map UI with reservation locks",
      "Booking lifecycle: reserve → confirm → ticket",
      "Hardened authentication and session handling",
    ],
    icon: Globe,
    accent: "from-cyan-500 via-sky-500 to-indigo-500",
  },
  {
    id: "chat-sockets",
    title: "Real-Time Chat over Sockets",
    tagline: "TCP socket programming, low-level networking",
    description:
      "A low-level real-time chat application built directly on TCP sockets, implementing client-server communication, message synchronization and concurrent client handling without abstractions.",
    category: "Systems",
    stack: ["C++", "TCP Sockets", "Concurrency", "Linux"],
    highlights: [
      "Multi-client server with concurrent handling",
      "Custom message framing and sync protocol",
      "Hands-on networking & systems engineering",
    ],
    icon: MessagesSquare,
    accent: "from-indigo-500 via-violet-500 to-purple-500",
  },
  {
    id: "notex",
    title: "NoteX: AI Notes",
    tagline: "AI-assisted notes with summarization",
    description:
      "An AI-powered notes application that summarizes long-form content, organizes topics intelligently and turns scattered thoughts into structured knowledge, designed for students and engineers.",
    category: "AI / ML",
    stack: ["AI / NLP", "Web", "REST", "Auth"],
    highlights: [
      "AI-powered summarization & topic clustering",
      "Smart organization and search across notes",
      "Distraction-free editor with markdown",
    ],
    icon: Brain,
    accent: "from-fuchsia-500 via-purple-500 to-violet-500",
    featured: true,
  },
  {
    id: "e2e-secure",
    title: "E2E Secure Message Exchange",
    tagline: "End-to-end encrypted messaging system",
    description:
      "An end-to-end encrypted message exchange system implementing secure key exchange and modern encryption protocols, guaranteeing only the sender and intended recipient can read each message.",
    category: "Security",
    stack: ["Cryptography", "Key Exchange", "AES", "RSA", "Networking"],
    highlights: [
      "Public-key handshake with session keys",
      "Authenticated encryption for confidentiality + integrity",
      "Threat-modeled against MITM scenarios",
    ],
    icon: ShieldCheck,
    accent: "from-emerald-500 via-green-500 to-lime-500",
  },
  {
    id: "clothes-classifier",
    title: "Pakistani Cultural Clothes Classifier",
    tagline: "Computer vision for cultural attire",
    description:
      "A deep-learning image classifier trained to recognize traditional Pakistani cultural attire, celebrating local context where pretrained models typically fall short.",
    category: "AI / ML",
    stack: ["Python", "TensorFlow", "CNN", "Transfer Learning"],
    highlights: [
      "Custom CNN with transfer learning",
      "Hand-curated dataset for cultural categories",
      "Solid generalization on unseen photos",
    ],
    icon: Sparkles,
    accent: "from-rose-500 via-pink-500 to-fuchsia-500",
  },
  {
    id: "mushroom-classifier",
    title: "Mushroom Edibility Classifier",
    tagline: "ML for safe foraging",
    description:
      "A classical ML pipeline that classifies mushrooms as edible or poisonous from physical attributes, with feature engineering and model comparison across tree-based and SVM approaches.",
    category: "AI / ML",
    stack: ["Python", "scikit-learn", "Random Forest", "SVM"],
    highlights: [
      "Comparative study of multiple classifiers",
      "Feature importance analysis",
      "Cross-validated model selection",
    ],
    icon: Brain,
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    id: "turing-machine",
    title: "Turing Machine Simulator",
    tagline: "Theoretical CS, brought to life",
    description:
      "A Turing Machine simulator that lets you define states, transitions and tape, then watch the machine compute step-by-step, built to make formal computation tangible.",
    category: "Tools",
    stack: ["TAFL", "Algorithms", "Visualization"],
    highlights: [
      "Configurable states and transitions",
      "Step-through tape visualization",
      "Foundation for understanding computability",
    ],
    icon: Boxes,
    accent: "from-slate-400 via-zinc-400 to-stone-400",
  },
];

export type Advantage = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
};

export const advantages: Advantage[] = [
  {
    title: ".NET Engineering Depth",
    description:
      "C#, ASP.NET Core, Blazor and Web APIs in production: clean architectures, MVC / MVVM and patterns that scale across enterprise teams.",
    icon: Hexagon,
    accent: "from-indigo-500/40 to-indigo-500/0",
  },
  {
    title: "MERN / MEAN",
    description:
      "Equally fluent on the open-source side: MongoDB, Express, React, Angular and Node.js, building end-to-end JavaScript/TypeScript projects.",
    icon: Server,
    accent: "from-emerald-500/40 to-emerald-500/0",
  },
  {
    title: "Strong CS Fundamentals",
    description:
      "OOP, DSA, OS, networks and complexity: the foundation FAANG-tier companies hire for, drilled across NUST coursework and projects.",
    icon: Atom,
    accent: "from-violet-500/40 to-violet-500/0",
  },
  {
    title: "AI / ML × Data Science",
    description:
      "I don't just train models, I integrate them. Reinforcement learning, NLP, classical ML and data-driven analysis applied across hands-on projects.",
    icon: Brain,
    accent: "from-pink-500/40 to-pink-500/0",
  },
  {
    title: "Full-Stack + Mobile",
    description:
      "From React / Angular + Node + ASP.NET Core on the web to Flutter + Firebase on mobile. One engineer, every layer of the stack.",
    icon: Layers,
    accent: "from-cyan-500/40 to-cyan-500/0",
  },
  {
    title: "Systems & Security",
    description:
      "Hands-on with TCP sockets, OS concepts and end-to-end encryption. I understand what's happening below the framework.",
    icon: ShieldCheck,
    accent: "from-emerald-500/40 to-emerald-500/0",
  },
  {
    title: "Problem-Solving Mindset",
    description:
      "Algorithms, complexity analysis and a relentless habit of asking why. I model problems carefully before I write code.",
    icon: Zap,
    accent: "from-amber-500/40 to-amber-500/0",
  },
  {
    title: "Build-Fast, Learn-Faster",
    description:
      "11+ projects across 6 stacks in 4 years. New languages, frameworks and paradigms picked up at engineering velocity.",
    icon: Rocket,
    accent: "from-fuchsia-500/40 to-fuchsia-500/0",
  },
];

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Advantage", href: "#advantage" },
  { label: "Contact", href: "#contact" },
];

export const projectCategories = [
  "All",
  "AI / ML",
  "Full-Stack",
  "Mobile",
  "Systems",
  "Security",
  "Tools",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];
