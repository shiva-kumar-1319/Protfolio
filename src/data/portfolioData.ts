export interface SocialLinks {
  github: string;
  linkedin: string;
  leetcode: string;
  codeforces: string;
  codechef: string;
  email: string;
  phone: string;
  resumeUrl: string;
}

export interface MetricCard {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  iconName: string;
}

export interface AboutFocusCard {
  number: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface SkillCategoryGroup {
  category: string;
  icon: string;
  description: string;
  skills: string[];
}

export interface ProjectArchitectureStep {
  step: string;
  description: string;
  tech: string;
}

export interface FeaturedProject {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  keyHighlights: string[];
  architectureSteps: string[];
  architectureDetails?: ProjectArchitectureStep[];
  githubUrl: string;
  liveUrl?: string;
  metricsBadge: string;
}

export interface CompetitivePlatform {
  name: string;
  handle: string;
  url: string;
  ratingBadge: string;
  rankBadge: string;
  description: string;
  color: string;
  icon: string;
  stats: { label: string; value: string }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  badge: string;
  description: string;
  metrics: string;
  projectUrl?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  dateOrBadge: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  badge: string;
  bullets: string[];
  techStack: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  cgpa: string;
  highlights: string[];
  badge: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Shiva Kumar Kavali",
    shortName: "SHIVA KUMAR",
    roleSubtitle: "AI/ML · BACKEND · SYSTEMS",
    statusBadge: "OPEN TO INTERNSHIPS · SOFTWARE ENGINEERING · AI/ML",
    heroHeading: "Hi, I'm Shiva Kumar Kavali.",
    rotatingPhrases: [
      "Software Development Engineer",
      "AI/ML Engineer",
      "Backend Engineer",
      "Cloud & Distributed Systems Enthusiast",
    ],
    heroDescription:
      "Building intelligent, scalable systems with Machine Learning, Backend Engineering, Cloud Infrastructure, and Distributed Systems.",
    location: "Hyderabad, India",
    photoUrl: "/assets/shiva-kumar.jpg",
    terminal: {
      whoami: "Shiva Kumar Kavali",
      focus: "AI/ML | Backend | Cloud | DSA",
      building: "Intelligent & Scalable Systems",
    },
  },

  socials: {
    github: "https://github.com/shiva-kumar-1319",
    linkedin: "https://www.linkedin.com/in/shiva-kumar-kavali-b200342a7/",
    leetcode: "https://leetcode.com/u/shivakumarnaidu/",
    codeforces: "https://codeforces.com/profile/Kavali_Shiva_Kumar_Naidu",
    codechef: "https://www.codechef.com/users/shivakumar1319",
    email: "shivakumar867df@gmail.com",
    phone: "+91-8019061319",
    resumeUrl: "/assets/Shiva_Kumar_Resume.pdf",
  } as SocialLinks,

  // QUICK PROFILE STATISTICS
  quickStats: [
    {
      id: "leetcode",
      value: "500+",
      label: "LeetCode Problems",
      sublabel: "Algorithm Problem Solving",
      iconName: "Code2",
    },
    {
      id: "codechef",
      value: "3★",
      label: "CodeChef Rating",
      sublabel: "Competitive Programming",
      iconName: "Zap",
    },
    {
      id: "amazon-ml",
      value: "Top 3,000",
      label: "Amazon ML Summer School 2026",
      sublabel: "Nationwide Selection",
      iconName: "Award",
    },
    {
      id: "hackathon",
      value: "Top 10",
      label: "National Hackathon Finish",
      sublabel: "Visionary Hackathon 2.0",
      iconName: "Trophy",
    },
  ] as MetricCard[],

  // ABOUT ME
  about: {
    heading: "A Little About Me",
    content:
      "I'm a B.Tech AI & Machine Learning student building production-style systems that sit at the intersection of ML, backend engineering, and cloud infrastructure.\n\nI like taking a system past the \"it works on my machine\" stage — wiring up observability, containerizing services, and thinking about failure modes, not just the happy path.",
    focusCards: [
      {
        number: "01",
        title: "Self-Healing Infrastructure",
        description:
          "Combining ML anomaly detection with automated Kubernetes remediation.",
        tags: ["Kubernetes", "Prometheus", "Isolation Forest", "FastAPI"],
        icon: "ShieldAlert",
      },
      {
        number: "02",
        title: "Retrieval-Augmented Systems",
        description:
          "Document QA and research assistants built using LangChain, FAISS, and LLM APIs.",
        tags: ["LangChain", "FAISS", "Vector Search", "Gemini 2.0"],
        icon: "Search",
      },
      {
        number: "03",
        title: "Cloud-Native Architecture",
        description:
          "Microservices, message queues, Infrastructure as Code, and observability.",
        tags: ["Docker", "RabbitMQ", "Terraform", "PostgreSQL"],
        icon: "Server",
      },
      {
        number: "04",
        title: "Engineering Fundamentals",
        description:
          "Strengthening DSA, competitive programming, and distributed systems fundamentals.",
        tags: ["Algorithms", "System Design", "ACID", "Concurrency"],
        icon: "Binary",
      },
    ] as AboutFocusCard[],
  },

  // TECHNICAL SKILLS
  skills: [
    {
      category: "Languages",
      icon: "Code",
      description: "Systems programming, algorithm implementations, and data pipelines",
      skills: ["Python", "C++", "Java", "JavaScript", "SQL"],
    },
    {
      category: "AI / Machine Learning",
      icon: "Brain",
      description: "Deep learning models, vector retrieval, and anomaly detection",
      skills: [
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Hugging Face",
        "LangChain",
        "FAISS",
      ],
    },
    {
      category: "Backend",
      icon: "Server",
      description: "High-performance microservices, REST APIs, and message brokers",
      skills: ["FastAPI", "Flask", "PostgreSQL", "RabbitMQ"],
    },
    {
      category: "Cloud / DevOps",
      icon: "Cloud",
      description: "Container orchestration, IaC, CI/CD pipelines, and metrics telemetry",
      skills: [
        "Docker",
        "Kubernetes",
        "Terraform",
        "AWS",
        "GitHub Actions",
        "Prometheus",
        "Grafana",
      ],
    },
    {
      category: "Development",
      icon: "Terminal",
      description: "Version control, Linux environments, and developer toolchains",
      skills: ["Git", "GitHub", "Linux"],
    },
  ] as SkillCategoryGroup[],

  // FEATURED PROJECTS
  projects: [
    {
      id: "cloudpulse",
      number: "01",
      title: "CloudPulse — Self-Healing Cloud-Native Microservices Platform",
      category: "CLOUD-NATIVE · DISTRIBUTED SYSTEMS · MLOPS",
      description:
        "A microservices platform (auth, order, inventory services) where an ML anomaly detector watches Prometheus telemetry in real time. When latency spikes or error rates cross a threshold, a Remediation Controller validates safety guardrails (confidence threshold, cooldown window, rate limits) and calls the Kubernetes API to recycle or scale pods — closing the loop from detection to recovery automatically.",
      techStack: [
        "FastAPI",
        "PostgreSQL",
        "RabbitMQ",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Prometheus",
        "Grafana",
        "Isolation Forest",
      ],
      keyHighlights: [
        "ML-based anomaly detection using live Isolation Forest inference",
        "Automated Kubernetes remediation with cooldown and rate-limit guardrails",
        "Distributed microservices architecture connected via RabbitMQ",
        "Real-time observability and Prometheus/Grafana monitoring dashboards",
      ],
      architectureSteps: [
        "Microservices",
        "RabbitMQ",
        "Prometheus Telemetry",
        "ML Anomaly Detection (Isolation Forest)",
        "Remediation Controller",
        "Kubernetes API",
        "Automated Recovery",
      ],
      architectureDetails: [
        {
          step: "1. Microservices Layer",
          description: "Auth, Order, and Inventory microservices built with FastAPI and PostgreSQL.",
          tech: "FastAPI / PostgreSQL",
        },
        {
          step: "2. Message Broker",
          description: "RabbitMQ handles asynchronous events and decoupled inter-service communications.",
          tech: "RabbitMQ",
        },
        {
          step: "3. Telemetry Stream",
          description: "Prometheus continuously scrapes latency, CPU, memory, and HTTP 5xx error metrics.",
          tech: "Prometheus / Grafana",
        },
        {
          step: "4. ML Anomaly Detection",
          description: "Isolation Forest model analyzes multidimensional telemetry streams to catch anomalies before failures.",
          tech: "Scikit-learn (Isolation Forest)",
        },
        {
          step: "5. Guarded Controller",
          description: "Remediation Controller checks confidence scores, rate limits, and cooldown windows.",
          tech: "Python Controller",
        },
        {
          step: "6. K8s Remediation",
          description: "Autonomous pod recycling and HPA scaling commands dispatched directly to Kubernetes API.",
          tech: "Kubernetes API / Docker",
        },
      ],
      githubUrl: "https://github.com/shiva-kumar-1319/CloudPulse",
      metricsBadge: "Zero-Downtime • Autonomous Healing • Chaos Resilient",
    },
    {
      id: "neuralquery",
      number: "02",
      title: "NeuralQuery — AI Research Assistant",
      category: "AI ENGINEERING · BACKEND DEVELOPMENT",
      description:
        "A research assistant backend with JWT (HS256) authentication, bcrypt password hashing, and 10+ REST endpoints across a 4-table indexed schema, deployed on Render. Answers research queries via Gemini 2.0 Flash with approximately 79–85% accuracy across test queries.",
      techStack: ["Flask", "PostgreSQL", "Gemini 2.0 Flash", "JWT", "REST APIs"],
      keyHighlights: [
        "10+ REST API endpoints with robust input validation and error handling",
        "Normalized 4-table PostgreSQL schema with 7 optimized B-tree indexes",
        "JWT authentication and bcrypt password hashing for secure session control",
        "Production-tested query processing with Gemini 2.0 Flash (79–85% benchmark accuracy)",
        "Deployed and monitored live on Render cloud environment",
      ],
      architectureSteps: [
        "Client Request",
        "JWT Auth & Bcrypt",
        "Flask REST Engine",
        "PostgreSQL 4-Table Schema (7 Indexes)",
        "Gemini 2.0 Flash Integration",
        "Structured Query Response",
      ],
      githubUrl: "https://github.com/shiva-kumar-1319/NeuralQuery",
      metricsBadge: "79–85% Query Accuracy • 10+ REST Endpoints • Render Deployed",
    },
    {
      id: "idqs",
      number: "03",
      title: "IDQS — Intelligent Document Query System",
      category: "NLP · INFORMATION RETRIEVAL · RAG",
      description:
        "A document QA system built on LangChain's ConversationalRetrievalChain, using a FAISS vectorstore over flan-t5-base embeddings. Chunks documents with a CharacterTextSplitter (size 1000, overlap 200) and supports querying across up to 5 PDFs simultaneously — validated across 20–30 test queries.",
      techStack: ["LangChain", "FAISS", "flan-t5-base"],
      keyHighlights: [
        "Multi-document conversational retrieval with ConversationalRetrievalChain",
        "Simultaneous querying across up to 5 complex PDF research documents",
        "Dense similarity search powered by high-performance FAISS vectorstore",
        "Tuned document chunking strategy (chunk size: 1000, overlap: 200) for context preservation",
        "Systematically validated across 20–30 comprehensive test queries",
      ],
      architectureSteps: [
        "PDF Ingestion (Up to 5 PDFs)",
        "CharacterTextSplitter (1000 chunk / 200 overlap)",
        "flan-t5-base Embeddings",
        "FAISS Vector Index",
        "ConversationalRetrievalChain",
        "Accurate Contextual Answers",
      ],
      githubUrl: "https://github.com/shiva-kumar-1319/Chat-with-Multiple-PDF-s",
      metricsBadge: "Up to 5 PDFs • FAISS Vectorstore • Conversational RAG",
    },
    {
      id: "animal-keypoint",
      number: "04",
      title: "Animal Keypoint Estimation Suite",
      category: "COMPUTER VISION · DEEP LEARNING",
      description:
        "Browser-based real-time 2D skeletal keypoint detection for quadruped animals (cats, dogs, cows, horses, sheep), using a YOLOv8-nano + RTMPose-Medium ONNX pipeline with AP-10K → Animal-Pose 20-joint schema mapping.",
      techStack: ["YOLOv8", "RTMPose", "ONNX"],
      keyHighlights: [
        "Real-time browser-based inference running fully on client side with ONNX runtime",
        "Multi-species coverage for 5 quadrupeds: cats, dogs, cows, horses, and sheep",
        "Unified 20-joint skeletal topology mapping AP-10K to Animal-Pose standard",
        "High-efficiency two-stage pipeline: YOLOv8-nano detector + RTMPose-Medium estimator",
      ],
      architectureSteps: [
        "Video / Image Input",
        "YOLOv8-nano Quadruped Detection",
        "Bounding Box Cropping & Preprocessing",
        "RTMPose-Medium ONNX Inference",
        "AP-10K → Animal-Pose 20-Joint Schema",
        "Real-Time Skeletal Overlay",
      ],
      githubUrl: "https://github.com/shiva-kumar-1319",
      metricsBadge: "Real-Time In-Browser • 5 Species • 20-Joint Skeletal Schema",
    },
  ] as FeaturedProject[],

  // COMPETITIVE PROGRAMMING & DSA
  competitiveProgramming: {
    overview:
      "Consistent problem-solver with strong algorithmic foundation across complex data structures, dynamic programming, graph theory, and mathematical optimizations.",
    platforms: [
      {
        name: "LeetCode",
        handle: "shivakumarnaidu",
        url: "https://leetcode.com/u/shivakumarnaidu/",
        ratingBadge: "500+ Solved",
        rankBadge: "Consistent Solver",
        color: "#FFA116",
        icon: "LeetCode",
        description:
          "500+ algorithmic problems solved across Data Structures, Dynamic Programming, Graphs, and Greedy Algorithms.",
        stats: [
          { label: "Problems Solved", value: "500+" },
          { label: "Focus", value: "DSA & Patterns" },
        ],
      },
      {
        name: "Codeforces",
        handle: "Kavali_Shiva_Kumar_Naidu",
        url: "https://codeforces.com/profile/Kavali_Shiva_Kumar_Naidu",
        ratingBadge: "~1200 Rating",
        rankBadge: "Pupil (Peak ~1255)",
        color: "#3B82F6",
        icon: "Codeforces",
        description:
          "Active competitive contestant. Achieved ~1200 rating with a peak rating of ~1255, competing in timed global Div. 2 and Div. 3 rounds.",
        stats: [
          { label: "Current Rating", value: "~1200" },
          { label: "Peak Rating", value: "~1255" },
        ],
      },
      {
        name: "CodeChef",
        handle: "shivakumar1319",
        url: "https://codechef.com/users/shivakumar1319",
        ratingBadge: "3-Star Rated",
        rankBadge: "3★ Coder",
        color: "#F97316",
        icon: "CodeChef",
        description:
          "3-Star competitive programmer solving algorithmic optimization and number theory challenges in timed Starters contests.",
        stats: [
          { label: "Rating Tier", value: "3-Star" },
          { label: "Contest Focus", value: "Algorithmic Speed" },
        ],
      },
    ] as CompetitivePlatform[],
    coreTopics: [
      "Dynamic Programming (1D, 2D, Bitmask)",
      "Graph Algorithms (BFS/DFS, Dijkstra, Topological Sort)",
      "Trees & Binary Search Trees",
      "Two Pointers & Sliding Window",
      "Binary Search & Monotonic Queues",
      "Greedy Algorithms & Heuristics",
      "Hash Maps, Tries & Priority Queues",
      "Divide & Conquer & Number Theory",
    ],
  },

  // ACHIEVEMENTS
  achievements: [
    {
      id: "amazon-ml",
      title: "Amazon ML Summer School 2026",
      organization: "Amazon India",
      year: "2026",
      badge: "Nationwide Selection",
      description:
        "Selected among the Top 3,000 participants nationwide through a rigorous competitive assessment. Focused on core machine learning concepts and applied technical learning across supervised learning, deep neural networks, and generative models.",
      metrics: "Top 3,000 Nationwide",
    },
    {
      id: "visionary-hackathon",
      title: "Visionary Hackathon 2.0 — Mercer Mettl / Xathon",
      organization: "Team AuraAssess",
      year: "2026",
      badge: "National Finalist",
      description:
        "Top 10 finish nationally — submitted AuraAssess, a WebXR-based spatial intelligence and candidate evaluation system built under timed hackathon constraints.",
      metrics: "National Top 10 Finish",
      projectUrl: "https://github.com/shiva-kumar-1319/Visinory-Hackthon---AuraAssess-WebXR",
    },
    {
      id: "leadership",
      title: "Captain of College Football Team & College Chess Champion",
      organization: "College Sports & Strategy",
      year: "Honors",
      badge: "Leadership & Strategy",
      description:
        "Demonstrated strategic planning, resilience, and team leadership on the pitch as Captain of the college football team and on the board as College Chess Champion.",
      metrics: "Football Captain • Chess Champion",
    },
  ] as AchievementItem[],

  // CERTIFICATIONS
  certifications: [
    {
      name: "AWS Academy AI-ML",
      issuer: "AICTE EduSkills National Internship Program",
      dateOrBadge: "Completed",
      tags: ["AWS", "AI/ML", "Cloud Architecture"],
    },
    {
      name: "Infosys Springboard",
      issuer: "Natural Language Processing for Developers",
      dateOrBadge: "Completed",
      tags: ["NLP", "Transformers", "Text Processing"],
    },
    {
      name: "Oracle Java Foundations",
      issuer: "Oracle",
      dateOrBadge: "October 2024",
      tags: ["Java", "OOP", "Data Structures"],
    },
    {
      name: "Oracle Database Programming with SQL",
      issuer: "Oracle",
      dateOrBadge: "November 2024",
      tags: ["SQL", "Relational Databases", "Normalization"],
    },
  ] as CertificationItem[],

  // CURRENTLY BUILDING & LEARNING
  buildingAndLearning: {
    building: [
      {
        title: "Cloud-native systems with ML-powered monitoring",
        detail: "Real-time stream telemetry integration with Prometheus and automated alert triage.",
      },
      {
        title: "Kubernetes automation and self-healing infrastructure",
        detail: "Autonomous controllers recycling unhealthy pods and reconciling desired cluster states.",
      },
      {
        title: "Applied Machine Learning for real-world backend systems",
        detail: "Embedding predictive models and RAG pipelines directly into low-latency API services.",
      },
      {
        title: "Distributed systems fundamentals",
        detail: "Deepening concurrency, consensus protocols, idempotency, and partition fault-tolerance.",
      },
    ],
    learning: [
      { name: "Distributed Systems", level: "Core Architecture" },
      { name: "System Design", level: "High Scalability" },
      { name: "Kubernetes", level: "Custom Controllers & CRDs" },
      { name: "MLOps", level: "Continuous Training & Serving" },
      { name: "Cloud Architecture", level: "Multi-Region Resiliency" },
      { name: "Advanced ML", level: "LLM Fine-Tuning & Quantization" },
      { name: "DSA", level: "Advanced Graphs & String Algorithms" },
    ],
  },

  // INDUSTRY EXPERIENCE (From Resume)
  experience: [
    {
      id: "blackbucks",
      role: "Generative AI Engineer Intern",
      company: "Blackbucks Pvt. Ltd.",
      location: "Hyderabad, India",
      duration: "May 2026 – June 2026",
      badge: "Industry Internship",
      bullets: [
        "Applied LLM API integration and prompt-handling techniques in project-based AI application workflows.",
        "Used LangSmith and Phoenix to inspect model requests, response latency, token usage, and workflow errors.",
        "Compared large and lightweight language models across response quality, latency, token usage, and API cost.",
        "Studied enterprise AI security practices, including PII protection, safe prompt handling, and Data Loss Prevention (DLP).",
      ],
      techStack: ["LLMs", "LangSmith", "Phoenix", "Prompt Engineering", "Python", "Enterprise Security"],
    },
  ] as ExperienceItem[],

  // ACADEMIC EDUCATION (From Resume)
  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Artificial Intelligence and Machine Learning",
      institution: "Maturi Venkata Subba Rao Engineering College",
      location: "Hyderabad, India",
      duration: "2024 – 2027",
      cgpa: "CGPA: 7.7 / 10",
      badge: "B.Tech in AI & ML",
      highlights: [
        "In-depth coursework in Artificial Intelligence, Machine Learning, Deep Learning, and Computer Vision.",
        "Core computer science foundations: Operating Systems, Computer Networks, Database Management Systems (DBMS), and OOP.",
        "Active technical builder, competitive programmer (500+ LeetCode), and hackathon finalist.",
      ],
    },
    {
      degree: "Diploma in Engineering",
      field: "Computer Science and Engineering",
      institution: "KDR Government Polytechnic College",
      location: "Wanaparthy, India",
      duration: "2021 – 2024",
      cgpa: "CGPA: 8.4 / 10",
      badge: "Diploma in CSE",
      highlights: [
        "Graduated with Distinction (8.4/10 CGPA).",
        "Comprehensive foundations in Data Structures & Algorithms, C++, Java, Relational Database Management, and Linux.",
        "Hands-on lab training in systems programming and software engineering methodologies.",
      ],
    },
  ] as EducationItem[],
};
