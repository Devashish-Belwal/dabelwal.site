import { Icons } from "@/components/icons";
import { HomeIcon, FileText } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";

export const DATA = {
  name: "Devashish Belwal",
  initials: "DB",
  url: "https://dabelwal.online",
  location: "Greater Noida, India",
  locationLink: "https://www.google.com/maps/place/Greater+Noida,+Uttar+Pradesh,+India",
  description:
    "Full-Stack and AI Engineer specializing in real-time LLM token streaming, autonomous AI agents, and high-performance distributed systems.",
  summary:
    "Full-Stack and AI Engineer with deep expertise in architecting high-throughput distributed systems, real-time WebSocket infrastructure, and autonomous agent loops. Experienced in building scalable applications across Next.js, TypeScript, Node.js, Redis Streams, PostgreSQL (pgvector), and multi-provider LLM orchestration (OpenAI, Gemini Live, Anthropic). Currently pursuing a B.S. in Data Science and Applications at Indian Institute of Technology Madras.",
  avatarUrl: "",
  resumeUrl: "/resume.pdf",
  resumes: [
    {
      label: "View Resume (PDF)",
      href: "/resume.pdf",
    },
    {
      label: "Applied AI Resume",
      href: "/Devashish_Belwal_Applied_AI_Resume.pdf",
    },
    {
      label: "Backend & Systems Resume",
      href: "/Devashish_Belwal_Resume.pdf",
    },
  ],
  skills: [
    { name: "Python", icon: Python },
    { name: "TypeScript", icon: Typescript },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Node.js", icon: Nodejs },
    { name: "PostgreSQL & pgvector", icon: Postgresql },
    { name: "Redis Streams", icon: undefined },
    { name: "WebSockets & SSE", icon: undefined },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "AWS (EC2)", icon: undefined },
    { name: "Gemini Live API", icon: undefined },
    { name: "OpenAI & Anthropic APIs", icon: undefined },
    { name: "AST Code Chunking", icon: undefined },
    { name: "Bun & Express", icon: undefined },
    { name: "BullMQ & NATS", icon: undefined },
    { name: "Prisma ORM", icon: undefined },
    { name: "Tailwind CSS", icon: undefined },
    { name: "Deterministic Guardrails", icon: undefined },
    { name: "CI/CD & GitHub Actions", icon: undefined },
  ],
  skillCategories: [
    {
      category: "AI & LLMs",
      description: "Model orchestration, prompt pipelines, and real-time streaming",
      skills: [
        "OpenAI API",
        "Anthropic API",
        "Gemini Live API",
        "Function / Tool Calling",
        "Prompt Engineering",
      ],
    },
    {
      category: "RAG & Vector Search",
      description: "Semantic search, indexing, and syntax-aware codebase retrieval",
      skills: [
        "pgvector (HNSW Indexing)",
        "AST Code Chunking",
        "Vector Embeddings",
        "Semantic Search",
      ],
    },
    {
      category: "Real-Time & Streaming",
      description: "Low-latency protocols, token streaming, and media channels",
      skills: [
        "Server-Sent Events (SSE)",
        "WebRTC (LiveKit SFU)",
        "WebSockets",
        "Token Streaming",
      ],
    },
    {
      category: "Backend & Data",
      description: "High-concurrency services, event queues, and relational data",
      skills: [
        "Node.js",
        "Express",
        "Bun",
        "Next.js",
        "PostgreSQL",
        "Redis Streams & Lua",
        "BullMQ",
        "Prisma ORM",
      ],
    },
    {
      category: "DevOps & Safety",
      description: "Containerization, infrastructure, guardrails, and reliability",
      skills: [
        "Docker",
        "AWS (EC2)",
        "GitHub Actions",
        "CI/CD",
        "Deterministic Guardrails",
        "Jest",
      ],
    },
    {
      category: "Languages",
      description: "Core programming and query languages",
      skills: ["Python", "TypeScript", "JavaScript", "SQL", "HTML/CSS"],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/resume.pdf", icon: FileText, label: "Resume" },
  ],
  contact: {
    email: "433devashish@gmail.com",
    tel: "+919953067667",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Devashish-Belwal",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/devashish-belwal",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:433devashish@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "100xDevs",
      href: "https://100xdevs.com",
      badges: ["AI Engineering", "Distributed Systems"],
      location: "Remote",
      title: "Full-Stack and AI Engineer",
      logoUrl: "",
      start: "May 2026",
      end: "Present",
      description:
        "- Built and deployed end-to-end AI applications integrating OpenAI, Anthropic, and Gemini models with real-time SSE token streaming, function calling pipelines, and structured JSON outputs.\n- Designed modular Turborepo monorepos, containerized AI agent microservices with Docker, engineered context caching strategies, and automated testing and cloud deployments with CI/CD.",
    },
    {
      company: "Client Solutions — Full Stack Freelance Projects",
      href: "#",
      badges: ["Production Deployments"],
      location: "Greater Noida, India",
      title: "Full Stack Freelance Developer",
      logoUrl: "",
      start: "Jun 2025",
      end: "Feb 2026",
      description:
        "- **Inventory Manager:** Engineered an inventory and accounting platform with an ACID double-entry ledger, cutting monthly financial reconciliation from 2 days to 4 hours.\n- **ClinicPro:** Built a clinic management system with conflict-free slot booking and sub-millisecond patient search across 1,000+ records, lifting attendance by 20%.\n- **CloneTree:** Built a creator bio-link platform with Next.js 16, React 19, Tailwind CSS, and fluid Motion animations.",
    },
  ],

  education: [
    {
      school: "Indian Institute of Technology Madras",
      href: "https://www.iitm.ac.in",
      degree: "B.S. in Data Science and Applications",
      logoUrl: "",
      start: "2023",
      end: "Present",
      cgpa: "8.20 / 10",
      courses: [
        "Machine Learning Techniques",
        "Database Management Systems",
        "Modern Application Development",
      ],
    },
  ],

  projects: [
    {
      title: "CodeBoy — Self-Hosted AI Coding Agent",
      href: "https://codepuppet.dabelwal.online",
      dates: "2026",
      active: true,
      description:
        "- Architected a Turborepo monorepo with three applications and six shared packages; isolated 11 tools across five categories in a permission-gated sandbox and validated core workflows with 40+ Jest tests.\n- Unified streaming adapters for four LLM providers over SSE in under 100 ms, persisted turns atomically with per-turn token accounting, and secured keys using AES-256-GCM and device-flow login.",
      technologies: [
        "TypeScript",
        "Next.js 16",
        "Express",
        "Prisma",
        "PostgreSQL",
        "SSE",
        "AWS EC2",
        "Jest",
        "CI/CD",
        "Turborepo",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://codepuppet.dabelwal.online",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/Devashish-Belwal/codepuppet",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Agentic Intelligence — Real-Time Voice AI Agent & Codebase RAG",
      href: "https://agentic.dabelwal.online",
      dates: "2026",
      active: true,
      description:
        "- Architected a full-duplex voice AI agent with LiveKit WebRTC and Gemini Live API; streamed bi-directional audio with sub-second latency, interruptible speech turn-taking, and real-time code drawer citations.\n- Grounded voice interactions with an asynchronous codebase RAG engine (BullMQ, AST chunking); indexed 768-d embeddings in pgvector via HNSW and queried symbol dependency call-chains with recursive CTEs.",
      technologies: [
        "TypeScript",
        "Bun",
        "LiveKit WebRTC",
        "Gemini Live API",
        "Next.js",
        "pgvector",
        "BullMQ",
        "Docker",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://agentic.dabelwal.online",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/Devashish-Belwal/ai-agent",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/ai-agent.png",
      video: "",
    },
    {
      title: "Distributed Exchange — High-Performance Crypto Exchange",
      href: "https://debug.cex.dabelwal.online",
      dates: "2026",
      active: true,
      description:
        "- Engineered an event-driven spot and perpetual exchange across six microservices, utilizing red-black tree order books and FIFO queues to sustain 1,000+ orders/sec with sub-50 ms p95 latency.\n- Decoupled persistence and WebSocket fan-out via Redis Streams consumer groups, streaming book deltas to 500+ clients under 100 ms and rehydrating R2 snapshots in sub-5 s with zero data loss.",
      technologies: [
        "TypeScript",
        "Bun",
        "Redis Streams",
        "PostgreSQL",
        "WebSockets",
        "Docker",
        "Turborepo",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://debug.cex.dabelwal.online",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/Devashish-Belwal/CryptoExchange",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Ticket Agent — Autonomous Customer Support Agent",
      href: "https://ticketagent.dabelwal.online",
      dates: "2026",
      active: true,
      description:
        "- Engineered a multi-turn OpenAI tool-calling agent loop across seven tools, enforcing a 6-step execution ceiling, repeated-failure circuit breakers, and exponential backoff retries to handle provider rate limits.\n- Enforced deterministic policy guardrails and human-in-the-loop approvals for refunds above INR 2,000 with RBAC and concurrency locks; surfaced ticket lifecycles and sequenced tool-execution traces in a Next.js dashboard.",
      technologies: [
        "TypeScript",
        "Next.js 15",
        "Express",
        "Bun",
        "OpenAI API",
        "Docker",
        "Turborepo",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://ticketagent.dabelwal.online",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/Devashish-Belwal/ticket-agent",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "CloneTree — Creator Bio-Link Platform",
      href: "https://clonetree.dabelwal.online",
      dates: "2025",
      active: true,
      description:
        "Built a creator bio-link platform with Next.js 16, React 19, Tailwind CSS, and fluid Motion animations. Centralizes links, social identities, and media with sub-second performance.",
      technologies: [
        "Next.js 16",
        "React 19",
        "Tailwind CSS",
        "TypeScript",
        "Motion",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://clonetree.dabelwal.online",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/Devashish-Belwal/clonetree",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Ludo — Real-Time Multiplayer Gaming Platform",
      href: "https://ludo.dabelwal.online",
      dates: "2026",
      active: true,
      description:
        "Architected an authoritative, zero-dependency Ludo game engine across a Turborepo monorepo; synchronized deterministic turn progression, safe-zone captures, and 3-consecutive-six penalties, validated with 24 unit tests. Engineered a dedicated Node.js WebSocket service delivering sub-50 ms updates via Redis Pub/Sub; automated 4-player FIFO matchmaking via atomic Lua scripts and enforced a 60s disconnect recovery grace period.",
      technologies: [
        "TypeScript",
        "Next.js 16",
        "Node.js",
        "WebSockets",
        "Redis",
        "PostgreSQL",
        "Prisma",
        "Docker",
        "Turborepo",
        "Lua",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://ludo.dabelwal.online",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/Devashish-Belwal/ludo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Refokus Clone — Immersive Agency Web Experience",
      href: "https://refokus.dabelwal.online",
      dates: "2026",
      active: true,
      description:
        "Architected a responsive agency UI using React and Framer Motion, engineering cubic-bezier transition reels for hover-driven video previews and synchronized bi-directional infinite marquees. Integrated Locomotive Scroll with scroll-progress scrub triggers to reveal staggered visual cards at discrete thresholds, sustaining fluid 60 FPS rendering via GPU-accelerated transforms.",
      technologies: [
        "React 18",
        "Vite",
        "Framer Motion",
        "Locomotive Scroll",
        "Tailwind CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://refokus.dabelwal.online",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/Devashish-Belwal/refokus-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/refokus.png",
      video: "",
    },
    {
      title: "Snake — Full-Stack Real-Time Grid Arcade",
      href: "https://snake.dabelwal.online",
      dates: "2026",
      active: true,
      description:
        "Architected a deterministic 150 ms game loop and four-state machine using an immutable reducer; integrated O(1) boundary and self-collision detection with directional input buffering to prevent 180-degree reversals. Isolated timer updates in refs to eliminate redundant re-renders, implemented responsive touch-swipe and keyboard controls, and synced high scores with a compound-indexed MongoDB leaderboard using JWT-authenticated APIs.",
      technologies: [
        "TypeScript",
        "React 19",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Vite",
        "JWT",
        "Passport.js",
      ],
      links: [
        {
          type: "Live Demo",
          href: "https://snake.dabelwal.online",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "GitHub",
          href: "https://github.com/Devashish-Belwal/snake-game",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],

  hackathons: [] as readonly {
    title: string;
    dates: string;
    location: string;
    description: string;
    image?: string;
    mlh?: string;
    links?: readonly {
      title: string;
      icon: React.ReactNode;
      href: string;
    }[];
  }[],
};
