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
    "title": "Teaching Assistant - Object Oriented Programming",
    "company": "Oregon State University",
    "companyLogo": `${basePath}/assets/osulogo.png`,
    "duration": "Sept 2025 - Present",
    "location": "Corvallis, OR",
    "description": "Led and mentored a cohort of 100+ students weekly across four lab sessions, solidifying their understanding of object-oriented programming and data structure fundamentals in Python.",
    "achievements": [
      "Translated complex CS theory into practical application by leading hands-on demonstrations on systematic debugging, Git version control, and advanced topics like polymorphism and algorithmic complexity."
    ],
    "technologies": ["Python"]
  },
  {
    "id": "2",
    "title": "AI Research Internship",
    "company": "Oregon State University",
    "companyLogo": `${basePath}/assets/osulogo.png`,
    "duration": "Oct 2024 - Sept 2025",
    "location": "Corvallis, OR",
    "description": "Researched and implemented advanced fine-tuning techniques for machine translation, while automating the evaluation pipeline to significantly accelerate the model development and experimentation lifecycle.",
    "achievements": [
      "Drove a 117% performance increase in the team's Gemma-3-4B baseline model (from 24.80 to 54 BLEU), diagnosing and engineering a data preprocessing solution that appended end-of-sequence (EOS) tokens.",
      "Accelerated large language model (LLM) pretraining by 200% through the implementation of FlashAttention-2, reducing attention memory complexity from O(N^2) to O(N) via custom CUDA fused kernels.",
      "Automated the model evaluation lifecycle by integrating real-time SacreBLEU scoring into training scripts, reducing evaluation runtime from over an hour to minutes and streamlining SLURM job submission."
    ],
    "technologies": ["Python", "PyTorch", "HuggingFace", "SLURM"]
  }
]

export const education: Education[] = [
  {
    id: "1",
    degree: "B.S. Computer Science - Applied AI",
    institution: "Oregon State University",
    institutionLogo: `${basePath}/assets/osulogo.png`,
    duration: "Expected Graduation: June 2027/2028",
    location: "Corvallis, OR",
    gpa: "3.96/4.0",
    honors: ["Dean's List"],
    relevantCourses: [
      "Operating Systems",
      "Algorithms",
      "Data Structures",
      "Computer Architecture & Assembly",
      "Linear Algebra",
      "Web Development",
      "Software Engineering"
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
