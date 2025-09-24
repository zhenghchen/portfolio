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

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  publishDate: string
  readTime: string
  tags: string[]
  featured: boolean
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

// Mock Data
export const personalInfo: PersonalInfo = {
  name: "Zheng Chen",
  title: "Software Engineer | Fullstack & AI",
  bio: "I build efficient backend systems and practical AI applications, from developing secure RESTful APIs in Java to optimizing high-performance code.",
  location: "Portland, OR",
  email: "chenz22@oregonstate.edu",
  phone: "+1 (971)-340-8699",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  resumeUrl: "/resume.pdf",
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
    "companyLogo": "https://via.placeholder.com/60x60/4A9EFF/FFFFFF?text=OSU",
    "duration": "June 2025 - Present",
    "location": "Remote",
    "description": "Researched and implemented advanced fine-tuning techniques for machine translation, while automating the evaluation pipeline to significantly accelerate the model development and experimentation lifecycle.",
    "achievements": [
      "Achieved a 24.80 BLEU score with fine-tuned Gemma-3-4B on IWSLT17 English to Chinese data as part of a 4-experiment study comparing standard and BitNet-adapter fine-tuning methods.",
      "Automated the model evaluation lifecycle by integrating live SacreBLEU score computation directly into the training script, eliminating a separate, hour-long evaluation job and collapsing a two-stage manual process into a single, automated SLURM submission."
    ],
    "technologies": ["Python", "PyTorch", "HuggingFace", "SLURM"]
  },

  {
    "id": "2",
    "title": "Undergraduate Research Assistant",
    "company": "Oregon State University",
    "companyLogo": "https://via.placeholder.com/60x60/4A9EFF/FFFFFF?text=OSU",
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
    institutionLogo: "https://via.placeholder.com/60x60/003262/FFFFFF?text=UC",
    duration: "2024 - 2028",
    location: "Corvallis, OR",
    gpa: "3.94/4.0",
    honors: ["Dean's List"],
    relevantCourses: [
      "Linear Algebra",
      "Vector Calculus",
      "Discrete Math",
      "Web Development",
      "Computer Architecture",
      "Statistics"
    ]
  }
]

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL",
    longDescription: "A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment processing, and admin dashboard. Built with modern technologies and following best practices for security and performance.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
    ],
    demoUrl: "https://ecommerce-demo.vercel.app",
    sourceUrl: "https://github.com/zhenghchen/ecommerce-platform",
    uiSourceUrl: "https://figma.com/ecommerce-design",
    featured: true,
    category: "Full Stack"
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management with real-time updates and team features",
    longDescription: "A modern task management application with drag-and-drop functionality, real-time collaboration, team workspaces, and detailed analytics. Features include Kanban boards, calendar view, and advanced filtering.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "Tailwind CSS"],
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
    ],
    demoUrl: "https://taskmanager-demo.vercel.app",
    sourceUrl: "https://github.com/zhenghchen/task-manager",
    featured: true,
    category: "Web App"
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Responsive weather app with location-based forecasts and analytics",
    longDescription: "A beautiful weather dashboard providing detailed forecasts, interactive maps, historical data, and weather analytics. Features include location search, favorite locations, and severe weather alerts.",
    technologies: ["React", "Chart.js", "OpenWeather API", "Mapbox", "PWA"],
    images: [
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop"
    ],
    demoUrl: "https://weather-dashboard-demo.vercel.app",
    sourceUrl: "https://github.com/zhenghchen/weather-dashboard",
    featured: true,
    category: "Web App"
  },
  {
    id: "4",
    title: "Portfolio Website",
    description: "Personal portfolio built with Next.js and modern design principles",
    longDescription: "A modern, responsive portfolio website showcasing projects, experience, and blog posts. Built with Next.js, TypeScript, and Tailwind CSS, featuring smooth animations and optimized performance.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    images: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop"
    ],
    demoUrl: "https://zhenghchen.dev",
    sourceUrl: "https://github.com/zhenghchen/portfolio",
    featured: false,
    category: "Portfolio"
  }
]

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable React Applications",
    excerpt: "Learn best practices for structuring and scaling React applications for production environments.",
    content: "Full blog content here...",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    tags: ["React", "JavaScript", "Architecture"],
    featured: true
  },
  {
    id: "2",
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies that will shape the future of web development.",
    content: "Full blog content here...",
    publishDate: "2024-01-10",
    readTime: "6 min read",
    tags: ["Web Development", "Trends", "Technology"],
    featured: true
  },
  {
    id: "3",
    title: "Optimizing Database Performance",
    excerpt: "Tips and techniques for improving database query performance and overall application speed.",
    content: "Full blog content here...",
    publishDate: "2024-01-05",
    readTime: "10 min read",
    tags: ["Database", "Performance", "Optimization"],
    featured: false
  }
]
