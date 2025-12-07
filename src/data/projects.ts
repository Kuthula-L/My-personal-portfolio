import projectQuantumFinance from '@/assets/project-quantum-finance.jpg';
import projectNovaHealth from '@/assets/project-nova-health.jpg';
import projectAtlasLogistics from '@/assets/project-atlas-logistics.jpg';
import projectEchoMusic from '@/assets/project-echo-music.jpg';
import projectVerdeSustainable from '@/assets/project-verde-sustainable.jpg';
import projectNexusWorkspace from '@/assets/project-nexus-workspace.jpg';
import projectCipherSecurity from '@/assets/project-cipher-security.jpg';
import projectPulseFitness from '@/assets/project-pulse-fitness.jpg';

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  date: string;
  year: number;
  month: number;
  image: string;
  tags: string[];
  client: string;
  role: string;
  duration: string;
  liveUrl?: string;
  techStack: string[];
  challenge: string;
  solution: string;
  results: string[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: "quantum-finance",
    title: "Quantum Finance",
    description: "A next-generation fintech platform that revolutionizes how users interact with their financial data. Built with real-time analytics, AI-powered insights, and an intuitive dashboard that makes complex financial decisions feel effortless.",
    shortDescription: "Fintech platform with AI-powered insights and real-time analytics dashboard.",
    date: "December 2024",
    year: 2024,
    month: 12,
    image: projectQuantumFinance,
    tags: ["Fintech", "Dashboard", "AI"],
    client: "Quantum Capital LLC",
    role: "Lead Designer & Developer",
    duration: "4 months",
    liveUrl: "https://example.com",
    techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "TensorFlow"],
    challenge: "Create a platform that simplifies complex financial data while maintaining the depth required by professional traders.",
    solution: "Developed a modular dashboard system with customizable widgets, AI-driven insights, and progressive disclosure patterns.",
    results: ["40% increase in user engagement", "2x faster decision-making", "98% positive user feedback"],
    gallery: [projectQuantumFinance, projectQuantumFinance, projectQuantumFinance]
  },
  {
    id: "nova-health",
    title: "Nova Health",
    description: "A comprehensive healthcare management system designed for modern clinics. Features patient scheduling, telemedicine integration, electronic health records, and a patient portal that prioritizes accessibility and ease of use.",
    shortDescription: "Healthcare management system with telemedicine and EHR integration.",
    date: "September 2024",
    year: 2024,
    month: 9,
    image: projectNovaHealth,
    tags: ["Healthcare", "SaaS", "Telemedicine"],
    client: "Nova Medical Group",
    role: "Full-Stack Developer",
    duration: "6 months",
    techStack: ["Next.js", "Python", "FastAPI", "MongoDB", "WebRTC"],
    challenge: "Build a HIPAA-compliant system that integrates seamlessly with existing clinic workflows.",
    solution: "Created a microservices architecture with end-to-end encryption and intuitive UX for medical staff.",
    results: ["50% reduction in admin time", "35% increase in patient satisfaction", "Zero security incidents"],
    gallery: [projectNovaHealth, projectNovaHealth, projectNovaHealth]
  },
  {
    id: "atlas-logistics",
    title: "Atlas Logistics",
    description: "An end-to-end logistics platform for global supply chain management. Real-time tracking, predictive analytics for delivery optimization, and a unified dashboard for managing shipments across multiple carriers.",
    shortDescription: "Global supply chain platform with real-time tracking and predictive analytics.",
    date: "June 2024",
    year: 2024,
    month: 6,
    image: projectAtlasLogistics,
    tags: ["Logistics", "Enterprise", "Analytics"],
    client: "Atlas Shipping Co.",
    role: "Frontend Architect",
    duration: "5 months",
    liveUrl: "https://example.com",
    techStack: ["Vue.js", "GraphQL", "Go", "Redis", "Kubernetes"],
    challenge: "Handle millions of real-time data points while maintaining sub-second response times.",
    solution: "Implemented event-driven architecture with intelligent caching and predictive data prefetching.",
    results: ["99.9% uptime", "60% cost reduction", "3x faster delivery estimates"],
    gallery: [projectAtlasLogistics, projectAtlasLogistics, projectAtlasLogistics]
  },
  {
    id: "echo-music",
    title: "Echo Music",
    description: "A social music discovery platform that connects artists with fans through AI-curated playlists, live streaming, and collaborative listening sessions. Features a unique algorithm that learns user preferences.",
    shortDescription: "Social music platform with AI curation and collaborative listening.",
    date: "March 2024",
    year: 2024,
    month: 3,
    image: projectEchoMusic,
    tags: ["Music", "Social", "Streaming"],
    client: "Echo Entertainment",
    role: "Product Designer",
    duration: "4 months",
    techStack: ["React Native", "Spotify API", "AWS", "Machine Learning"],
    challenge: "Create a unique value proposition in an oversaturated music streaming market.",
    solution: "Focused on social features and discovery, making music consumption a shared experience.",
    results: ["1M+ downloads", "4.8 App Store rating", "Featured by Apple"],
    gallery: [projectEchoMusic, projectEchoMusic, projectEchoMusic]
  },
  {
    id: "verde-sustainable",
    title: "Verde Sustainable",
    description: "An e-commerce platform dedicated to sustainable products. Features carbon footprint tracking, supplier transparency reports, and gamification elements that encourage eco-friendly purchasing decisions.",
    shortDescription: "Sustainable e-commerce with carbon tracking and eco-gamification.",
    date: "November 2023",
    year: 2023,
    month: 11,
    image: projectVerdeSustainable,
    tags: ["E-commerce", "Sustainability", "UX"],
    client: "Verde Group",
    role: "UX/UI Designer",
    duration: "3 months",
    liveUrl: "https://example.com",
    techStack: ["Shopify", "React", "Node.js", "Stripe"],
    challenge: "Make sustainability metrics accessible and actionable for everyday consumers.",
    solution: "Designed intuitive visualizations and a rewards system that gamifies sustainable choices.",
    results: ["25% higher conversion rate", "40% repeat purchases", "Carbon positive operations"],
    gallery: [projectVerdeSustainable, projectVerdeSustainable, projectVerdeSustainable]
  },
  {
    id: "nexus-workspace",
    title: "Nexus Workspace",
    description: "A hybrid workspace management platform for the post-pandemic era. Features desk booking, meeting room scheduling, occupancy analytics, and integrations with popular collaboration tools.",
    shortDescription: "Hybrid workspace platform with smart booking and occupancy analytics.",
    date: "July 2023",
    year: 2023,
    month: 7,
    image: projectNexusWorkspace,
    tags: ["PropTech", "Enterprise", "IoT"],
    client: "Nexus Properties",
    role: "Technical Lead",
    duration: "5 months",
    techStack: ["Angular", "Firebase", "IoT Sensors", "Tableau"],
    challenge: "Integrate disparate building systems into a cohesive user experience.",
    solution: "Built a middleware layer that normalizes data from various IoT devices and legacy systems.",
    results: ["30% space utilization improvement", "20% energy savings", "95% employee adoption"],
    gallery: [projectNexusWorkspace, projectNexusWorkspace, projectNexusWorkspace]
  },
  {
    id: "cipher-security",
    title: "Cipher Security",
    description: "A cybersecurity dashboard for enterprise threat detection and response. Features real-time threat visualization, automated incident response, and compliance reporting for major security frameworks.",
    shortDescription: "Enterprise cybersecurity dashboard with real-time threat detection.",
    date: "February 2023",
    year: 2023,
    month: 2,
    image: projectCipherSecurity,
    tags: ["Security", "Dashboard", "Enterprise"],
    client: "Cipher Defense Inc.",
    role: "Senior Developer",
    duration: "6 months",
    techStack: ["React", "D3.js", "Python", "Elasticsearch", "Docker"],
    challenge: "Present complex security data in a way that enables rapid decision-making.",
    solution: "Designed a threat-centric UI with customizable alert thresholds and automated playbooks.",
    results: ["70% faster threat response", "SOC 2 compliant", "Zero false positives"],
    gallery: [projectCipherSecurity, projectCipherSecurity, projectCipherSecurity]
  },
  {
    id: "pulse-fitness",
    title: "Pulse Fitness",
    description: "A comprehensive fitness app with personalized workout plans, nutrition tracking, and social challenges. Features wearable integration and AI-powered form correction using device cameras.",
    shortDescription: "AI-powered fitness app with personalized plans and form correction.",
    date: "August 2022",
    year: 2022,
    month: 8,
    image: projectPulseFitness,
    tags: ["Health", "Mobile", "AI"],
    client: "Pulse Athletics",
    role: "Mobile Developer",
    duration: "4 months",
    liveUrl: "https://example.com",
    techStack: ["Flutter", "TensorFlow Lite", "Firebase", "HealthKit"],
    challenge: "Provide professional-grade fitness guidance without requiring expensive personal trainers.",
    solution: "Leveraged on-device ML for real-time form analysis and adaptive workout recommendations.",
    results: ["500K+ active users", "92% goal completion rate", "Featured in Google I/O"],
    gallery: [projectPulseFitness, projectPulseFitness, projectPulseFitness]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(p => p.id === id);
};

export const getSortedProjects = (): Project[] => {
  return [...projects].sort((a, b) => {
    if (a.year !== b.year) return b.year - a.year;
    return b.month - a.month;
  });
};
