export type DomainType = 'all' | 'sde' | 'ai-ml';

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

export interface SkillCategory {
  category: string;
  domain: 'sde' | 'ai-ml';
  icon: string;
  description: string;
  skills: string[];
}

export interface ProjectArchitectureStep {
  step: string;
  description: string;
  tech: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  domain: 'sde' | 'ai-ml' | 'both';
  categoryBadge: string;
  description: string;
  longDescription: string;
  features: string[];
  techStack: string[];
  architecture?: ProjectArchitectureStep[];
  githubUrl?: string;
  liveUrl?: string;
  stats?: { label: string; value: string }[];
  highlightMetrics?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  domain: 'sde' | 'ai-ml' | 'both';
  badge: string;
  bullets: string[];
  techStack: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  badge: string;
  description: string;
  domain: 'sde' | 'ai-ml' | 'both';
  metrics: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  badge: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  duration: string;
  cgpa: string;
  highlights: string[];
  domainBadge: string;
}

export interface CompetitivePlatform {
  name: string;
  handle: string;
  url: string;
  color: string;
  icon: string;
  description: string;
  badge: string;
  statsHighlight: string;
}

export const PORTFOLIO_CONFIG = {
  personal: {
    name: "SHIVA KUMAR KAVALI",
    shortName: "SHIVA KUMAR",
    title: "Software Engineer | AI/ML Engineer",
    tagline: "Building scalable software systems and intelligent AI-powered applications.",
    about:
      "I am an Artificial Intelligence and Machine Learning undergraduate passionate about software engineering, backend development, machine learning, deep learning, and building real-world intelligent applications.",
    location: "Hyderabad, India",
    status: "Open to SDE & AI/ML Opportunities",
    availability: "Available Immediately / 2026-2027",
    photoUrl: "/assets/shiva-kumar.jpg",
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

  // SDE SKILLS (From Resume & Requirements)
  sdeSkills: [
    {
      category: "Programming Languages",
      domain: "sde" as const,
      icon: "Code2",
      description: "Robust, type-safe, and object-oriented systems programming",
      skills: ["Java", "Python", "C++", "JavaScript", "SQL"],
    },
    {
      category: "Computer Science Fundamentals",
      domain: "sde" as const,
      icon: "Binary",
      description: "Algorithmic thinking, design patterns, operating system mechanics, and DBMS",
      skills: [
        "Data Structures & Algorithms",
        "OOP",
        "Design Patterns",
        "Operating Systems",
        "DBMS",
        "Computer Networks",
      ],
    },
    {
      category: "Backend Engineering",
      domain: "sde" as const,
      icon: "Server",
      description: "High-concurrency microservices, robust REST APIs, and auth pipelines",
      skills: [
        "FastAPI",
        "Flask",
        "REST APIs",
        "Microservices",
        "JWT / bcrypt Auth",
        "SQLAlchemy",
      ],
    },
    {
      category: "Databases & Storage",
      domain: "sde" as const,
      icon: "Database",
      description: "Relational modeling, document stores, and indexing optimization",
      skills: ["PostgreSQL (Normalized Schemas)", "MySQL", "Database Indexing", "SQL"],
    },
    {
      category: "Distributed Systems & Queues",
      domain: "sde" as const,
      icon: "Network",
      description: "Asynchronous processing, message queues, and distributed communication",
      skills: ["RabbitMQ", "Asynchronous Pipelines", "API Design", "Message Queues", "Caching"],
    },
    {
      category: "Cloud, DevOps & Testing",
      domain: "sde" as const,
      icon: "Cloud",
      description: "Containerization, cluster management, automation, and CI/CD pipelines",
      skills: [
        "Docker",
        "Kubernetes",
        "CI/CD (GitHub Actions)",
        "Unit Testing",
        "Prometheus",
        "Git",
        "Linux",
      ],
    },
  ],

  // AI & ML SKILLS (From Resume & Requirements)
  aiSkills: [
    {
      category: "Generative AI & LLMs",
      domain: "ai-ml" as const,
      icon: "Sparkles",
      description: "State-of-the-art LLMs, parameter-efficient fine-tuning, and evaluation",
      skills: [
        "LLM API Integration",
        "Prompt Engineering",
        "Qwen2.5-1.5B",
        "Hugging Face PEFT / LoRA",
        "LangSmith",
        "Phoenix",
      ],
    },
    {
      category: "Enterprise AI & Observability",
      domain: "ai-ml" as const,
      icon: "Boxes",
      description: "Model telemetry, security boundaries, and enterprise governance",
      skills: [
        "PII Protection",
        "Safe Prompt Handling",
        "Data Loss Prevention (DLP)",
        "Latency & Cost Inspection",
        "Evaluation Benchmarks",
      ],
    },
    {
      category: "Deep Learning & Frameworks",
      domain: "ai-ml" as const,
      icon: "Layers",
      description: "Multi-layer neural networks, backpropagation, and specialized architectures",
      skills: [
        "PyTorch",
        "Neural Networks",
        "Model Training",
        "PEFT (Parameter-Efficient Fine-Tuning)",
      ],
    },
    {
      category: "Machine Learning & Anomaly Detection",
      domain: "ai-ml" as const,
      icon: "Brain",
      description: "Statistical modeling, predictive pipelines, and validation",
      skills: [
        "Scikit-learn",
        "Isolation Forest (Anomaly Detection)",
        "Supervised Learning",
        "Unsupervised Learning",
        "Feature Engineering",
      ],
    },
    {
      category: "Data Science & Mathematics",
      domain: "ai-ml" as const,
      icon: "LineChart",
      description: "Numerical computation, dataset wrangling, and statistical insights",
      skills: [
        "Python",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "Statistical Analysis",
      ],
    },
  ],

  // EXPERIENCE (From Resume)
  experience: [
    {
      id: "blackbucks",
      role: "Generative AI Engineer Intern",
      company: "Blackbucks Pvt. Ltd.",
      location: "Hyderabad, India",
      duration: "May 2026 – June 2026",
      domain: "ai-ml" as const,
      badge: "Internship",
      bullets: [
        "Applied LLM API integration and prompt-handling techniques in project-based AI application workflows.",
        "Used LangSmith and Phoenix to inspect model requests, response latency, token usage, and workflow errors.",
        "Compared large and lightweight language models across response quality, latency, token usage, and API cost.",
        "Studied enterprise AI security practices, including PII protection, safe prompt handling, and Data Loss Prevention (DLP).",
      ],
      techStack: ["LLMs", "LangSmith", "Phoenix", "Prompt Engineering", "Python", "Enterprise Security"],
    },
  ] as ExperienceItem[],

  // FEATURED PROJECTS (From Resume)
  projects: [
    {
      id: "cloud-pulse",
      title: "CloudPulse",
      subtitle: "Self-Healing Cloud-Native Microservices Platform",
      domain: "sde" as const,
      categoryBadge: "Software Engineering + Distributed Systems",
      description:
        "Resilient cloud-native microservices platform with automated remediation: combines FastAPI, PostgreSQL, RabbitMQ, Docker, Kubernetes, and an Isolation Forest anomaly detector.",
      longDescription:
        "CloudPulse is an enterprise-grade self-healing platform engineered for zero-downtime microservices resilience. Developed FastAPI microservices for gateway, authentication, order, and inventory workflows, using PostgreSQL for persistence and RabbitMQ for asynchronous communication. Implemented an autonomous remediation controller that ingests Prometheus telemetry and uses an Isolation Forest machine learning anomaly detector to trigger pod restarts or scaling through the Kubernetes API, with cooldown and rate-limit safeguards. Tested failure handling with chaos engineering scenarios (injected latency, out-of-memory conditions, cascading HTTP 500 errors) and automated CI through GitHub Actions.",
      features: [
        "Developed FastAPI microservices for gateway, authentication, order, and inventory workflows",
        "PostgreSQL persistence with RabbitMQ message queues for fault-tolerant asynchronous communication",
        "Autonomous remediation controller using Prometheus telemetry and an Isolation Forest anomaly detector",
        "Dynamic pod restarts and auto-scaling executed safely through the Kubernetes API with cooldown and rate limits",
        "Chaos scenario testing with injected latency, out-of-memory conditions, and cascading HTTP 500 error resilience",
        "Continuous Integration pipeline automated via GitHub Actions with multi-stage Docker builds",
      ],
      techStack: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "RabbitMQ",
        "Docker",
        "Kubernetes",
        "Prometheus",
        "Scikit-learn",
        "GitHub Actions",
      ],
      architecture: [
        {
          step: "1. Microservice Gateway & Queues",
          description: "FastAPI handles gateway, order, and inventory services; async events routed through RabbitMQ.",
          tech: "FastAPI / RabbitMQ",
        },
        {
          step: "2. Telemetry Ingestion",
          description: "Prometheus scrapes node and pod metrics continuously, logging CPU, memory, and error rates.",
          tech: "Prometheus / Python",
        },
        {
          step: "3. ML Anomaly Detection",
          description: "Isolation Forest model analyzes live telemetry stream to spot degraded states before crashes occur.",
          tech: "Scikit-learn (Isolation Forest)",
        },
        {
          step: "4. K8s Remediation Action",
          description: "Controller triggers automated pod scaling or restart through Kubernetes API with cooldown guards.",
          tech: "Kubernetes API / Docker",
        },
      ],
      githubUrl: "https://github.com/shiva-kumar-1319",
      stats: [
        { label: "Architecture", value: "Microservices" },
        { label: "Anomaly Engine", value: "Isolation Forest" },
        { label: "Orchestration", value: "Kubernetes & RabbitMQ" },
      ],
      highlightMetrics: "Self-Healing • Chaos Tested • Prometheus & K8s",
    },
    {
      id: "neural-query",
      title: "NeuralQuery",
      subtitle: "Full-Stack AI Research Assistant with LoRA Qwen Fine-Tuning",
      domain: "both" as const,
      categoryBadge: "AI/ML + Backend Engineering",
      description:
        "Full-stack AI research assistant powered by a fine-tuned Qwen2.5-1.5B LLM with LoRA adapters, normalized 4-table PostgreSQL backend, and Factory-pattern provider layer.",
      longDescription:
        "NeuralQuery bridges production backend engineering with parameter-efficient LLM tuning. Developed a Flask REST backend with 10+ endpoints for authentication, document ingestion, and research workflows, backed by a normalized four-table PostgreSQL schema and seven indexes for fast queries. Fine-tuned Qwen2.5-1.5B with LoRA (Low-Rank Adaptation) and evaluated it on a rigorous 100-scenario benchmark: unsupported-claim rejection rose from 38% to 89%. Implemented a clean Factory-pattern LLM provider layer with unit tests for core modules and deployed the application on Render.",
      features: [
        "Flask REST backend featuring 10+ endpoints for secure authentication, document ingestion, and research queries",
        "Normalized 4-table PostgreSQL schema optimized with 7 B-tree indexes for fast relational lookups",
        "Fine-tuned Qwen2.5-1.5B with LoRA using Hugging Face PEFT and PyTorch",
        "Evaluated on a 100-scenario benchmark: unsupported-claim rejection increased dramatically from 38% to 89%",
        "Factory-pattern LLM provider layer enabling extensible model switching and deterministic outputs",
        "Unit test suite covering core modules and deployed live on Render",
      ],
      techStack: [
        "Python",
        "Flask",
        "PostgreSQL",
        "SQLAlchemy",
        "JWT / bcrypt",
        "PyTorch",
        "Hugging Face PEFT/LoRA",
        "Qwen2.5-1.5B",
        "Render",
      ],
      architecture: [
        {
          step: "1. Document Ingestion & Auth",
          description: "Flask backend authenticates via JWT/bcrypt, normalizes ingested text across 4 PostgreSQL tables.",
          tech: "Flask / PostgreSQL / SQLAlchemy",
        },
        {
          step: "2. Indexed Relational Store",
          description: "Seven specialized B-tree database indexes ensure sub-millisecond retrieval of research corpora.",
          tech: "PostgreSQL B-Tree Indexes",
        },
        {
          step: "3. LoRA Qwen2.5-1.5B Inference",
          description: "Fine-tuned Qwen2.5-1.5B weights verify factual claims and suppress hallucinations with 89% precision.",
          tech: "PyTorch / Hugging Face PEFT",
        },
        {
          step: "4. Factory Provider Layer",
          description: "Factory-pattern LLM provider formats and streams verified responses back to the client application.",
          tech: "Design Patterns / Render",
        },
      ],
      githubUrl: "https://github.com/shiva-kumar-1319/NeuralQuery",
      stats: [
        { label: "Claim Rejection", value: "38% → 89%" },
        { label: "Model Architecture", value: "Qwen2.5-1.5B + LoRA" },
        { label: "DB Schema", value: "4 Tables, 7 Indexes" },
      ],
      highlightMetrics: "89% Claim Rejection • 10+ REST Endpoints",
    },
    {
      id: "pay-pilot",
      title: "PayPilot",
      subtitle: "High-Concurrency Distributed Payment Ledger Engine",
      domain: "sde" as const,
      categoryBadge: "Software Engineering + Fintech",
      description:
        "Production-grade distributed payment processing system ensuring idempotent transactions, double-entry ledger bookkeeping, and atomic balance updates.",
      longDescription:
        "PayPilot is an engineering-first payment ledger designed to eliminate double-spending and ledger drift under high concurrency. Utilizing strict ACID compliance in PostgreSQL, idempotent request deduplication keys, and distributed locking mechanisms, PayPilot guarantees accurate financial operations. Includes webhook retry workers, comprehensive REST APIs with automated validation, and a dashboard for real-time transaction tracking.",
      features: [
        "Idempotent API design using UUID request hashing to prevent accidental duplicate charges",
        "Double-entry bookkeeping architecture ensuring total ledger credits always balance debits",
        "Optimistic and pessimistic database locking to eliminate race conditions in wallet debits",
        "Asynchronous webhook dispatch engine with exponential backoff and jitter algorithms",
        "End-to-end integration test suite validating edge cases, concurrent transfers, and failure modes",
      ],
      techStack: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy",
        "Docker",
        "Git",
      ],
      githubUrl: "https://github.com/shiva-kumar-1319",
      stats: [
        { label: "Consistency", value: "Strict ACID" },
        { label: "Idempotency", value: "100% Guaranteed" },
        { label: "Auditability", value: "Double-Entry" },
      ],
      highlightMetrics: "ACID Guaranteed • Zero Double-Spending",
    },
  ] as ProjectItem[],

  // ACHIEVEMENTS & CERTIFICATIONS (From Resume)
  achievements: [
    {
      id: "cp-stats",
      title: "500+ LeetCode Problems | 1200+ Codeforces | 3-Star CodeChef",
      organization: "Competitive Programming",
      year: "Active",
      badge: "Algorithm Problem Solving",
      description:
        "Demonstrated consistent problem-solving acumen by solving 500+ problems on LeetCode, achieving a 1200+ rating on Codeforces, and earning 3-star rating on CodeChef.",
      domain: "both" as const,
      metrics: "500+ LC • 1200+ CF • 3★ CC",
    },
    {
      id: "amazon-ml-summer-school",
      title: "Amazon ML Summer School 2026",
      organization: "Amazon India",
      year: "2026",
      badge: "Nationwide Selection",
      description:
        "Selected among the top 3,000 participants nationwide through a rigorous competitive assessment covering Supervised Learning, Deep Neural Networks, Dimensionality Reduction, and LLMs.",
      domain: "ai-ml" as const,
      metrics: "Top 3,000 Nationwide",
    },
    {
      id: "visionary-hackathon",
      title: "Visionary Hackathon 2.0 – National Top 10",
      organization: "Team AuraAssess",
      year: "2026",
      badge: "National Finalist",
      description:
        "Recognized as a Top 10 national finalist with team AuraAssess for conceiving, architecting, and deploying a high-impact technology solution under timed hackathon constraints.",
      domain: "both" as const,
      metrics: "National Top 10 Ranking",
    },
    {
      id: "leadership",
      title: "Captain of College Football Team & College Chess Champion",
      organization: "College Sports & Strategy",
      year: "Honors",
      badge: "Leadership & Strategy",
      description:
        "Demonstrated strategic planning, resilience, and team leadership both on the field as Captain of the college football team and on the board as College Chess Champion.",
      domain: "both" as const,
      metrics: "Football Captain • Chess Champion",
    },
  ] as AchievementItem[],

  // CERTIFICATIONS (From Resume)
  certifications: [
    {
      name: "Oracle Java Foundations",
      issuer: "Oracle",
      badge: "Certified",
    },
    {
      name: "Oracle Database Programming with SQL",
      issuer: "Oracle",
      badge: "Certified",
    },
  ] as CertificationItem[],

  // COMPETITIVE PROGRAMMING (From Resume)
  competitiveProgramming: {
    overview:
      "Consistent problem-solver with strong algorithmic foundation across complex data structures, dynamic programming, graph theory, and mathematical optimizations.",
    platforms: [
      {
        name: "LeetCode",
        handle: "shivakumarnaidu",
        url: "https://leetcode.com/u/shivakumarnaidu/",
        color: "#FFA116",
        icon: "Code",
        description: "500+ algorithmic problems solved across Data Structures, Dynamic Programming, and Graph Theory.",
        badge: "Verified Profile",
        statsHighlight: "500+ Solved",
      },
      {
        name: "Codeforces",
        handle: "Kavali_Shiva_Kumar_Naidu",
        url: "https://codeforces.com/profile/Kavali_Shiva_Kumar_Naidu",
        color: "#1890FF",
        icon: "Terminal",
        description: "1200+ rating achieved in timed rated contests focusing on number theory, greedy algorithms, and data structures.",
        badge: "1200+ Rating",
        statsHighlight: "1200+ Rating",
      },
      {
        name: "CodeChef",
        handle: "shivakumar1319",
        url: "https://codechef.com/users/shivakumar1319",
        color: "#5B4638",
        icon: "Cpu",
        description: "3-star competitive coder actively participating in algorithmic optimization challenges.",
        badge: "3-Star Rated",
        statsHighlight: "3-Star Coder",
      },
    ] as CompetitivePlatform[],
    coreTopics: [
      "Dynamic Programming (1D, 2D, Bitmask)",
      "Graph Algorithms (BFS/DFS, Dijkstra, Topological Sort)",
      "Trees & Binary Search Trees",
      "Two Pointers & Sliding Window",
      "Binary Search & Monotonic Queues",
      "Design Patterns & System Logic",
      "Greedy Algorithms & Heuristics",
      "Hash Maps, Tries & Heap Queues",
    ],
  },

  // EDUCATION (From Resume)
  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Artificial Intelligence and Machine Learning",
      institution: "Maturi Venkata Subba Rao Engineering College",
      location: "Hyderabad, India",
      duration: "2024 – 2027",
      cgpa: "CGPA: 7.7 / 10",
      domainBadge: "B.Tech in AI & ML",
      highlights: [
        "In-depth coursework in Artificial Intelligence, Machine Learning, Deep Learning, and Computer Vision.",
        "Core computer science foundations: Operating Systems, Computer Networks, Database Management Systems (DBMS), and OOP.",
        "Active technical leader, competitive programmer (500+ LeetCode), and hackathon builder.",
      ],
    },
    {
      degree: "Diploma in Engineering",
      field: "Computer Science and Engineering",
      institution: "KDR Government Polytechnic College",
      location: "Wanaparthy, India",
      duration: "2021 – 2024",
      cgpa: "CGPA: 8.4 / 10",
      domainBadge: "Diploma in CSE",
      highlights: [
        "Graduated with Distinction (8.4/10 CGPA).",
        "Comprehensive foundations in Data Structures & Algorithms, C++, Java, Relational Database Management, and Linux.",
        "Hands-on lab training in systems programming and software engineering methodologies.",
      ],
    },
  ] as EducationItem[],
};
