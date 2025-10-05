export interface WorkExperience {
  id: string
  title: string
  company: string
  companyLogo: string
  duration: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
}

export interface Education {
  id: string
  degree: string
  institution: string
  institutionLogo: string
  duration: string
  location: string
  gpa?: string
  honors?: string[]
  relevantCourses: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  images: string[]
  demoUrl?: string
  sourceUrl?: string
  uiSourceUrl?: string
  featured: boolean
  category: string
}

export interface PersonalInfo {
  name: string
  title: string
  bio: string
  location: string
  email: string
  phone?: string
  profileImage: string
  resumeUrl: string
  socialLinks: {
    github: string
    linkedin: string
    website?: string
  }
}

// Base path for GitHub Pages deployment
const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

// Mock Data
export const personalInfo: PersonalInfo = {
  name: "Zheng Chen",
  title: "Software Engineer | Fullstack & AI",
  bio: "I build efficient backend systems and practical AI applications, from developing secure RESTful APIs in Java to optimizing high-performance code.",
  location: "Clackamas, OR",
  email: "chenz22@oregonstate.edu",
  phone: "971-340-8699",
  profileImage: `${basePath}/assets/me.jpg`,
  resumeUrl: `${basePath}/resume.pdf`,
  socialLinks: {
    github: "https://github.com/zhenghchen",
    linkedin: "https://linkedin.com/in/zhenghchen",
    website: "https://zhenghchen.dev"
  }
}

export const workExperience: WorkExperience[] = [
  {
    "id": "1",
    "title": "AI Research Intern",
    "company": "Oregon State University",
    "companyLogo": `${basePath}/assets/osulogo.png`,
    "duration": "June 2025 - Present",
    "location": "Remote",
    "description": "Researched and implemented advanced fine-tuning techniques for machine translation, while automating the evaluation pipeline to significantly accelerate the model development and experimentation lifecycle.",
    "achievements": [
      "Drove a 117% performance increase in the team's Gemma-3-4B baseline model (from 24.80 to 54 BLEU), diagnosing and engineering a data preprocessing solution that appended end-of-sequence (EOS) tokens.",
      "Automated the model evaluation lifecycle by integrating live SacreBLEU score computation directly into the training script, eliminating a separate, hour-long evaluation job and collapsing a two-stage manual process into a single, automated SLURM submission."
    ],
    "technologies": ["Python", "PyTorch", "HuggingFace", "SLURM"]
  },

  {
    "id": "2",
    "title": "Undergraduate Research Assistant",
    "company": "Oregon State University",
    "companyLogo": `${basePath}/assets/osulogo.png`,
    "duration": "Oct 2024 - June 2025",
    "location": "Corvallis, OR",
    "description": "Addressed computational bottlenecks in LLM pretraining by implementing and integrating FlashAttention-2, a memory-efficient attention algorithm, to optimize GPU memory access and throughput.",
    "achievements": [
      "Accelerated LLM pretraining by 200% through the implementation of FlashAttention-2, reducing the memory access in attention from O(N^2) to O(N) via optimized fused kernels."
    ],
    "technologies": ["Python", "PyTorch", "HuggingFace", "SLURM"]
  }
]

export const education: Education[] = [
  {
    id: "1",
    degree: "B.S. Computer Science",
    institution: "Oregon State University",
    institutionLogo: `${basePath}/assets/osulogo.png`,
    duration: "Sept 2024 - June 2028",
    location: "Corvallis, OR",
    gpa: "3.96/4.0",
    honors: ["Dean's List"],
    relevantCourses: [
      "Data Structures",
      "Web Development",
      "Computer Architecture",
      "Object-Oriented Programming",
      "Linear Algebra",
      "Discrete Mathematics"
    ]
  }
]

export const projects: Project[] = [
  {
    id: "1",
    title: "Redflagged",
    description: "Full-stack legal document analysis platform with AI-powered risk extraction (HackMIT 2025)",
    longDescription: "Architected a comprehensive legal document analysis platform leveraging React/TypeScript frontend, Python backend, and Supabase for authentication and vector storage. Implemented secure RESTful API with FastAPI for document ingestion, preprocessing, and AI-powered risk extraction, enabling scalable handling of 500,000 character PDF/DOCX files. Developed RAG pipeline with HuggingFace Xenova and LangChain for semantic chunking and embedding generation. Built companion Chrome extension for seamless in-browser document highlighting and analysis.",
    technologies: ["TypeScript", "React", "Python", "Tailwind CSS", "FastAPI", "Supabase", "HuggingFace", "LangChain", "Chrome Extension"],
    images: [
      `${basePath}/assets/redflagged1.png`,
      `${basePath}/assets/redflagged2.png`
    ],
    demoUrl: "https://redflaggy.vercel.app",
    sourceUrl: "https://github.com/zhenghchen/redflagged",
    featured: true,
    category: "Full Stack"
  },
  {
    id: "2",
    title: "MCP-Guardian",
    description: "Security middleware for AI Agent ecosystems with JWT authentication and rate limiting",
    longDescription: "Delivered a comprehensive security middleware for AI Agent ecosystems, enabling secure tool access via a single decorator-based API. Implemented configurable JWT authentication with RS256 signatures, scope-based authorization, and rate limiting for production-ready security. Established a security audit trail with structured JSON logging for real-time monitoring and compliance, capturing detailed authentication and authorization events to provide security teams with actionable intelligence for rapid incident response. Published as a Python package to PyPI with comprehensive documentation and real-world examples, reducing developer integration time from hours to minutes.",
    technologies: ["Python", "FastAPI", "JWT"],
    images: [
      `${basePath}/assets/mcp-guardian1.png`
    ],
    sourceUrl: "https://github.com/zhenghchen/mcp-guardian",
    featured: true,
    category: "Security/Infrastructure"
  },
  {
    id: "3",
    title: "Eulerian Fluid Simulation",
    description: "Real-time C++ fluid simulation implementing Navier-Stokes equations (390K+ LinkedIn impressions)",
    longDescription: "Engineered a real-time C++ fluid simulation from first principles that generated 390,000+ impressions on LinkedIn, demonstrating ability to communicate complex technical work effectively. Implemented stable fluid solver applying incompressible Navier-Stokes equations, utilizing pressure projection and semi-Lagrangian advection for realistic, divergence-free flow. Achieved real-time performance (60+ FPS) on 200x200 grid through optimized data structures and efficient rendering pipeline within ~2MB memory footprint.",
    technologies: ["C++", "OpenGL", "CMake", "GLSL", "Physics Simulation"],
    images: [
      `${basePath}/assets/FluidSIm1.png`,
      `${basePath}/assets/fluidsim2.png`
    ],
    sourceUrl: "https://github.com/zhenghchen/Eulerian-Fluid-Sim",
    featured: true,
    category: "Graphics/Simulation"
  },
  {
    id: "4",
    title: "AI Writing Assistant (Chrome Extension)",
    description: "Chrome extension with Java Spring Boot backend for AI-powered writing assistance",
    longDescription: "Designed and implemented a robust RESTful backend using Java Spring Boot, supporting secure user authentication and encrypted API key management for cross-device synchronization. Built Chrome extension frontend with React and TypeScript, integrating real-time chat functionality and comprehensive settings dashboard. Developed modular backend architecture as provider-agnostic proxy, enabling seamless integration and dynamic switching between multiple LLM providers.",
    technologies: ["Java", "Spring Boot", "React", "TypeScript", "Chrome Extension API", "REST API"],
    images: [],
    sourceUrl: "https://github.com/zhenghchen/Silq",
    featured: false,
    category: "AI/ML"
  },
]
