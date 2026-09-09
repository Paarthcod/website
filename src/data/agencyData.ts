export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'WEBSITES' | '3D' | 'APPLICATIONS' | 'AI / AUTOMATION' | 'E-COMMERCE';
  description: string;
  longDescription?: string;
  technologies: string[];
  year: string;
  image: string;
  client: string;
  featured: boolean;
  link?: string;
  outcomes?: { label: string; detail: string }[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  accentColor: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: { twitter?: string; linkedin?: string; github?: string };
}

export interface TechCategory {
  category: 'DESIGN' | 'DEVELOPMENT' | '3D' | 'AI' | 'AUTOMATION' | 'SYSTEMS';
  technologies: { name: string; description: string; connectedTo: string[] }[];
}

export const AGENCY_INFO = {
  name: 'KINETIX',
  tagline: 'WE BUILD DIGITAL EXPERIENCES.',
  subtagline: 'Premium websites, interactive experiences, applications and intelligent automation for ambitious brands.',
  email: 'hello@kinetix-studio.com',
  phone: '+1 (800) 987-6543',
  address: 'Creative Technology Studio — San Francisco & Mumbai',
  socials: {
    instagram: 'https://instagram.com/kinetix.studio',
    linkedin: 'https://linkedin.com/company/kinetix-studio',
    twitter: 'https://twitter.com/kinetix_studio',
    github: 'https://github.com/kinetix-studio',
  }
};

export const SERVICES: Service[] = [
  {
    id: 'website-design',
    number: '01',
    title: 'WEBSITE DESIGN & DEVELOPMENT',
    subtitle: 'Bespoke Digital Flagships',
    description: 'High-performance bespoke web flagships engineered with pixel perfection, clean typography, and modern architectural elegance.',
    deliverables: ['Custom Next.js & React Applications', 'Headless CMS Integration', 'Editorial UI/UX Systems', 'Performance & Accessibility Optimization'],
    accentColor: '#2B54FF'
  },
  {
    id: '3d-interactive',
    number: '02',
    title: '3D & INTERACTIVE EXPERIENCES',
    subtitle: 'Immersive WebGL Environments',
    description: 'Next-generation WebGL and Three.js visual experiences that immerse users in interactive 3D space, physical shaders, and camera storytelling.',
    deliverables: ['Three.js & React Three Fiber', 'Custom GLSL Shaders & Refraction', '3D Product Configurators', 'Interactive Camera Choreography'],
    accentColor: '#2B54FF'
  },
  {
    id: 'ai-automation',
    number: '03',
    title: 'AI & AUTOMATION',
    subtitle: 'Intelligent Autonomous Systems',
    description: 'Custom AI agent workflows, automated pipelines, LLM fine-tuning, and n8n orchestration designed to streamline enterprise operations.',
    deliverables: ['LLM & OpenAI Agent Workflows', 'n8n & Custom API Automation', 'Autonomous Lead Scraping & CRM Pipelines', 'AI Knowledge Retrieval Systems'],
    accentColor: '#2B54FF'
  },
  {
    id: 'web-applications',
    number: '04',
    title: 'WEB APPLICATIONS',
    subtitle: 'Scalable Software Architecture',
    description: 'Complex web platforms, client portals, and real-time application interfaces engineered for speed, security, and effortless usability.',
    deliverables: ['Full-stack Application Architecture', 'Real-time WebSocket Infrastructure', 'Microservices & API Integration', 'Role-based Access & Dashboards'],
    accentColor: '#2B54FF'
  },
  {
    id: 'ecommerce',
    number: '05',
    title: 'E-COMMERCE',
    subtitle: 'Conversion-Engineered Storefronts',
    description: 'Bespoke digital flagships built with custom checkout flows, interactive 3D product previews, and high-conversion UX.',
    deliverables: ['Headless Shopify & Custom Cart Architecture', 'Interactive 3D Product Viewers', 'Speed-Optimized Checkout Flow', 'Multi-Currency Global Storefronts'],
    accentColor: '#2B54FF'
  },
  {
    id: 'digital-products',
    number: '06',
    title: 'DIGITAL PRODUCTS',
    subtitle: 'End-to-End System Design',
    description: 'Complete digital product design from initial brand discovery and technical prototyping to production engineering and global launch.',
    deliverables: ['Design Systems & Component Libraries', 'Technical Architecture Specs', 'Cross-Platform Experience Design', 'Product Launch Strategy'],
    accentColor: '#2B54FF'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'natyasastra-gurukulam',
    number: '01',
    title: 'NĀṬYAŚĀSTRA GURUKULAM',
    subtitle: 'Custodians of Rasa, Rhythm & Dhārmic Responsibility',
    category: 'WEBSITES',
    description: 'A Centre for Civilisational Statecraft — A Dhārmic stream for the renewal of public life through aesthetic leadership.',
    longDescription: 'Nāṭyaśāstra Gurukulam (नाट्यशास्त्र गुरुकुलम्) is a premier digital institution dedicated to civilisational statecraft, classical performing arts, and dhārmic responsibility. Engineered with gold Devanagari typography, stone temple architectural imagery, publication archives, and programme enrolment pipelines.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Devanagari Typography', 'Media Streaming'],
    year: '2026',
    image: '/images/natyasastra.png',
    client: 'Nāṭyaśāstra Gurukulam — Centre for Civilisational Statecraft',
    featured: true,
    link: 'https://www.natyasastragurukulam.org/',
    outcomes: [
      { label: 'Aesthetic Leadership', detail: 'Gold Devanagari manuscript hierarchy & stone temple pillar visual identity' },
      { label: 'Programmes & Publications', detail: 'Digital archives engine for course enrolments & academic publications' },
      { label: 'Performance Rating', detail: '99 Lighthouse score with accessible international web standards' }
    ]
  },
  {
    id: 'renuka-tour-travels',
    number: '02',
    title: 'RENUKA TOUR & TRAVELS',
    subtitle: 'Comprehensive Tourism & Vehicle Rental Platform',
    category: 'WEBSITES',
    description: 'High-conversion travel portal featuring custom tour package builders, vehicle rental inquiries, and real-time destination guides.',
    longDescription: 'Renuka Tour & Travels offers a seamless booking platform for holiday tour packages and vehicle rentals across premier destinations. Designed for maximum usability, the platform features interactive itinerary timelines, fleet previews, and direct WhatsApp / online booking workflows.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Interactive Booking Engine', 'SEO Optimization'],
    year: '2026',
    image: '/images/renukatravels.png',
    client: 'Renuka Tour & Travels Pvt Ltd',
    featured: true,
    link: 'https://renukatourandtravels.com/',
    outcomes: [
      { label: 'Direct Booking Conversions', detail: '+140% increase in online package inquiries' },
      { label: 'Mobile Speed', detail: 'Instant responsive page rendering for on-the-go travelers' },
      { label: 'Fleet Showcasing', detail: '360 degree vehicle rental catalog inspection' }
    ]
  },
  {
    id: 'mhatre-traders',
    number: '03',
    title: 'MHATRE TRADERS',
    subtitle: 'B2B Industrial & Building Materials Marketplace',
    category: 'WEBSITES',
    description: 'Enterprise B2B digital catalog platform for industrial hardware, building materials, and instant quotation pipelines.',
    longDescription: 'Mhatre Traders is a leading building material supplier. We built a modern, streamlined B2B trade portal featuring smart product filtering, multi-category SKU search, and an automated inquiry-to-quote engine designed to serve commercial contractors and enterprise buyers.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'SKU Catalog Search', 'Automated Quotations'],
    year: '2026',
    image: '/images/mhatretraders.png',
    client: 'Mhatre Traders Industrial Group',
    featured: true,
    link: 'https://mhatretraders.com/',
    outcomes: [
      { label: 'Catalog Digitization', detail: '500+ industrial product SKUs indexed with instant search' },
      { label: 'Quotation Speed', detail: 'Automated inquiry processing reducing response time by 80%' },
      { label: 'Enterprise Growth', detail: 'Scaled online B2B lead generation across region' }
    ]
  }
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    category: 'DESIGN',
    technologies: [
      { name: 'UI/UX Design', description: 'Editorial layout design & design systems.', connectedTo: ['Development', '3D'] },
      { name: 'Motion Design', description: 'Kinetic animation & frame choreography.', connectedTo: ['3D', 'Development'] },
      { name: 'Brand Systems', description: 'Typography systems & visual identity.', connectedTo: ['UI/UX Design'] }
    ]
  },
  {
    category: 'DEVELOPMENT',
    technologies: [
      { name: 'React', description: 'Component architecture & state engine.', connectedTo: ['Next.js', 'TypeScript', 'Three.js'] },
      { name: 'Next.js', description: 'Server rendering & static edge deployment.', connectedTo: ['React', 'TypeScript'] },
      { name: 'TypeScript', description: 'Type-safe enterprise web development.', connectedTo: ['React', 'Node.js'] },
      { name: 'Tailwind CSS', description: 'Utility design token architecture.', connectedTo: ['React'] }
    ]
  },
  {
    category: '3D',
    technologies: [
      { name: 'Three.js', description: 'WebGL graphics engine.', connectedTo: ['React Three Fiber', 'GLSL Shaders'] },
      { name: 'React Three Fiber', description: 'Declarative 3D component layer.', connectedTo: ['Three.js', 'GSAP'] },
      { name: 'GLSL Shaders', description: 'Custom GPU shader programming.', connectedTo: ['Three.js'] }
    ]
  },
  {
    category: 'AI',
    technologies: [
      { name: 'OpenAI / LLMs', description: 'Function calling, fine-tuning & RAG.', connectedTo: ['n8n', 'Python'] },
      { name: 'Vector Search', description: 'Embeddings & knowledge retrieval.', connectedTo: ['OpenAI / LLMs'] }
    ]
  },
  {
    category: 'AUTOMATION',
    technologies: [
      { name: 'n8n Workflow', description: 'Autonomous multi-node API pipelines.', connectedTo: ['OpenAI / LLMs', 'Node.js'] },
      { name: 'API Pipelines', description: 'Custom webhook triggers & middleware.', connectedTo: ['Node.js', 'Python'] }
    ]
  },
  {
    category: 'SYSTEMS',
    technologies: [
      { name: 'Node.js', description: 'High-throughput asynchronous backend APIs.', connectedTo: ['TypeScript', 'PostgreSQL'] },
      { name: 'Python', description: 'Data processing & machine learning services.', connectedTo: ['OpenAI / LLMs'] },
      { name: 'PostgreSQL', description: 'Relational data modeling & vector storage.', connectedTo: ['Node.js'] }
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'alex-vance',
    name: 'Alex Vance',
    role: 'Creative Director & WebGL Lead',
    bio: '10+ years designing digital experiences for luxury brands and Awwwards-featured sites.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    socials: { twitter: '#', linkedin: '#', github: '#' }
  },
  {
    id: 'marcus-chen',
    name: 'Marcus Chen',
    role: 'Head of 3D & Technical Architecture',
    bio: 'Specialist in WebGL shaders, Three.js camera physics, and real-time graphics pipelines.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    socials: { twitter: '#', linkedin: '#', github: '#' }
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'AI Systems & Automation Engineer',
    bio: 'Pioneer in autonomous agent workflows, LLM fine-tuning, and enterprise operational systems.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
    socials: { twitter: '#', linkedin: '#', github: '#' }
  },
  {
    id: 'david-kats',
    name: 'David Kats',
    role: 'Lead UI/UX & Motion Designer',
    bio: 'Crafting pixel-perfect typography systems, quiet visual balance, and intuitive user journeys.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    socials: { twitter: '#', linkedin: '#', github: '#' }
  }
];

export const PHILOSOPHY_POINTS = [
  {
    title: 'LESS NOISE.',
    subtitle: 'Clarity is luxury.',
    description: 'We refuse to clutter interfaces with superficial gimmicks. Every layout, typography decision, and animation serves a clear strategic purpose.'
  },
  {
    title: 'MORE IMPACT.',
    subtitle: 'Restraint commands attention.',
    description: 'True sophistication lies in calm visual confidence. We fuse oversized typography, physical 3D glass physics, and kinetic motion into seamless storytelling.'
  },
  {
    title: 'DESIGN WITH PURPOSE.',
    subtitle: 'Form follows emotion and function.',
    description: 'A great website is not just a digital brochure — it is a sensory journey designed to instill immediate confidence in high-value clients.'
  },
  {
    title: 'BUILD WITH INTENTION.',
    subtitle: 'Engineering without compromise.',
    description: 'Underneath our glass animations is bulletproof enterprise code: clean TypeScript, fast load performance, accessible architecture, and maintainable logic.'
  },
  {
    title: 'MAKE IT MEMORABLE.',
    subtitle: 'Digital flagships that endure.',
    description: 'We create digital experiences that brands and users remember long after they close the browser tab.'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'DISCOVER',
    subtitle: 'Deconstruction & Strategic Vision',
    description: 'We analyze your business model, brand essence, audience, and key goals to structure a winning creative strategy.'
  },
  {
    number: '02',
    title: 'DEFINE',
    subtitle: 'System Architecture & Scope',
    description: 'We map out technical requirements, component hierarchy, user journeys, and custom 3D WebGL specifications.'
  },
  {
    number: '03',
    title: 'DESIGN',
    subtitle: 'Bespoke UI/UX & 3D Prototyping',
    description: 'We construct high-fidelity visual concepts, custom typography systems, procedural glass shaders, and motion guidelines.'
  },
  {
    number: '04',
    title: 'BUILD',
    subtitle: 'Full-Stack & WebGL Engineering',
    description: 'We develop clean React/TypeScript code, program responsive Three.js canvas environments, and integrate backend AI workflows.'
  },
  {
    number: '05',
    title: 'LAUNCH',
    subtitle: 'Optimization & Global Deployment',
    description: 'Rigorous cross-device testing, WebGL performance tuning, SEO meta structuring, and seamless deployment.'
  }
];
