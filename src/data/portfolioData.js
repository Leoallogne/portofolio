import { 
  Code, 
  Layout, 
  Bug, 
  Globe, 
  Terminal, 
  Database, 
  Server, 
  Smartphone, 
  Cpu, 
  Github, 
  ExternalLink,
  FileText
} from 'lucide-react';

export const skillsData = [
    {
        title: "Languages",
        icon: Code,
        skills: ['JavaScript (ES6+)', 'Python', 'HTML5', 'CSS3', 'SQL', 'PHP']
    },
    {
        title: "Frontend",
        icon: Layout,
        skills: ['React.js', 'Bootstrap 5', 'Tailwind CSS', 'Redux', 'Framer Motion']
    },
    {
        title: "Backend",
        icon: Server,
        skills: ['Node.js', 'Express', 'Flask', 'Laravel', 'REST APIs']
    },
    {
        title: "Database",
        icon: Database,
        skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase']
    },
    {
        title: "Tools & DevOps",
        icon: Terminal,
        skills: ['Git & GitHub', 'Docker', 'AWS', 'Netlify', 'Vercel']
    }
]

// Add project categories for filtering
export const projectCategories = [
    'All',
    'Web3',
    'Education',
    'E-commerce',
    'Mobile',
    'Open Source',
    'UI/UX',
    'Full Stack'
];

export const projectsData = [
    {
        id: 'cyberwallet',
        title: "CyberWallet",
        description: "A web-based e-wallet dashboard featuring transaction history, secure login, and a modern dark UI inspired by Web3 aesthetics.",
        longDescription: "CyberWallet is a comprehensive financial management platform that allows users to track their cryptocurrency and fiat transactions in one place. The dashboard provides real-time balance updates, spending analytics, and secure wallet management features.",
        techStack: ['React', 'Bootstrap', 'Chart.js', 'Web3.js', 'Node.js', 'MongoDB'],
        category: "Web3",
        date: '2023-10-15',
        featured: true,
        links: [
            { type: 'demo', url: 'https://cyberwallet-demo.com', icon: ExternalLink },
            { type: 'github', url: 'https://github.com/username/cyberwallet', icon: Github },
            { type: 'case-study', url: '/case-studies/cyberwallet', icon: FileText }
        ],
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3",
        gallery: [
            { url: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3', alt: 'CyberWallet Dashboard' },
            { url: 'https://images.unsplash.com/photo-1639766787206-868e2c8a7c1a?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3', alt: 'Transaction History' },
            { url: 'https://images.unsplash.com/photo-1639766787206-868e2c8a7c1b?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3', alt: 'Portfolio Overview' }
        ],
        challenges: [
            'Implementing real-time transaction updates',
            'Ensuring secure wallet connections',
            'Optimizing for mobile performance'
        ],
        solution: 'Developed a real-time data pipeline using WebSockets and implemented secure authentication with Web3 providers.',
        role: 'Full-stack Developer',
        teamSize: 4,
        duration: '6 months',
        technologies: {
            frontend: ['React', 'Redux', 'Styled Components'],
            backend: ['Node.js', 'Express', 'MongoDB'],
            devops: ['Docker', 'AWS', 'GitHub Actions']
        },
        results: [
            'Reduced transaction processing time by 40%',
            'Achieved 99.9% uptime in production',
            'Gained 1,000+ active users in first month'
        ],
        testimonial: {
            text: "Working with this team on CyberWallet was a game-changer for our financial management. The platform is both powerful and intuitive.",
            author: "Jane Smith",
            role: "Product Manager",
            company: "FinTech Innovations"
        }
    },
    {
        id: 'automata-learning',
        title: "Automata Learning Platform",
        description: "An interactive educational platform for visualizing NFA to DFA conversions, helping students understand automata theory.",
        longDescription: "The Automata Learning Platform is designed to make complex computer science concepts more accessible through interactive visualizations. Students can build, test, and convert different types of finite automata with real-time feedback and step-by-step explanations.",
        techStack: ['JavaScript', 'D3.js', 'React', 'Python', 'Flask'],
        category: "Education",
        date: '2023-05-20',
        featured: true,
        links: [
            { type: 'demo', url: 'https://automata-learning-demo.com', icon: ExternalLink },
            { type: 'github', url: 'https://github.com/username/automata-learning', icon: Github },
            { type: 'documentation', url: '/docs/automata-learning', icon: FileText }
        ],
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
        gallery: [
            { url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3', alt: 'Automata Visualization' },
            { url: 'https://images.unsplash.com/photo-1509228468518-180dd4864905?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3', alt: 'Step-by-Step Conversion' },
            { url: 'https://images.unsplash.com/photo-1509228468518-180dd4864906?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3', alt: 'Interactive Examples' }
        ],
        challenges: [
            'Creating intuitive visualization of state transitions',
            'Handling complex automata algorithms in the browser',
            'Providing clear educational content'
        ],
        solution: 'Developed a custom rendering engine using D3.js and implemented interactive tutorials with React.',
        role: 'Frontend Developer & Educator',
        teamSize: 3,
        duration: '4 months',
        technologies: {
            frontend: ['React', 'D3.js', 'Material-UI'],
            backend: ['Python', 'Flask', 'SQLite'],
            education: ['Learning Analytics', 'Interactive Tutorials']
        },
        results: [
            'Improved student test scores by 35%',
            'Used by 5+ universities in their CS curriculum',
            'Received positive feedback from educators and students'
        ],
        testimonial: {
            text: "This platform has transformed how we teach automata theory. Students grasp complex concepts much faster with the interactive visualizations.",
            author: "Dr. Robert Chen",
            role: "Professor of Computer Science",
            company: "Tech University"
        }
    },
    {
        id: 'marketplace',
        title: "EcoMarketplace",
        description: "A sustainable marketplace platform connecting eco-conscious consumers with ethical brands and products.",
        longDescription: "EcoMarketplace is a comprehensive e-commerce platform that promotes sustainable shopping by featuring products with verified environmental and social impact. The platform includes features like carbon footprint tracking, supply chain transparency, and rewards for sustainable shopping habits.",
        techStack: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Blockchain'],
        category: "E-commerce",
        date: '2023-08-10',
        link: "/projects",
        image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3",
        featured: false
    },
    {
        title: "TaskFlow Pro",
        description: "An advanced project management tool with Kanban boards, time tracking, and team collaboration features built for modern teams.",
        techStack: ['React', 'Redux', 'Firebase'],
        link: "/projects",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=2839&ixlib=rb-4.0.3",
        category: "Productivity"
    },
    {
        title: "AI Chat Assistant",
        description: "An intelligent chatbot powered by machine learning that provides customer support and answers queries in real-time.",
        techStack: ['Python', 'Flask', 'TensorFlow'],
        link: "/projects",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3",
        category: "AI/ML"
    },
    {
        title: "Fitness Tracker App",
        description: "A comprehensive fitness application tracking workouts, nutrition, and progress with beautiful charts and goal setting.",
        techStack: ['React Native', 'Node.js', 'MongoDB'],
        link: "/projects",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
        category: "Mobile"
    },
    {
        title: "Real Estate Platform",
        description: "A property listing website with advanced search, virtual tours, and mortgage calculator for home buyers and sellers.",
        techStack: ['Next.js', 'PostgreSQL', 'Stripe'],
        link: "/projects",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2873&ixlib=rb-4.0.3",
        category: "Real Estate"
    },
    {
        title: "Social Media Dashboard",
        description: "A unified dashboard for managing multiple social media accounts with scheduling, analytics, and content planning.",
        techStack: ['Vue.js', 'Express', 'MySQL'],
        link: "/projects",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3",
        category: "Marketing"
    },
    {
        title: "Crypto Portfolio Tracker",
        description: "Track your cryptocurrency investments in real-time with price alerts, portfolio analytics, and news integration.",
        techStack: ['React', 'Web3.js', 'Chart.js'],
        link: "/projects",
        image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3",
        category: "Web3"
    },
    {
        title: "E-Learning Portal",
        description: "A complete LMS with video courses, quizzes, certificates, and progress tracking for online education.",
        techStack: ['Laravel', 'Vue.js', 'MySQL'],
        link: "/projects",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3",
        category: "Education"
    },
    {
        title: "Restaurant POS System",
        description: "A modern point-of-sale system for restaurants with table management, order tracking, and kitchen display.",
        techStack: ['React', 'Node.js', 'Socket.io'],
        link: "/projects",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
        category: "Business"
    },
    {
        title: "Weather Dashboard",
        description: "Beautiful weather app with 7-day forecasts, interactive maps, and severe weather alerts using real-time API data.",
        techStack: ['JavaScript', 'API', 'CSS3'],
        link: "/projects",
        image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
        category: "Utility"
    }
]

// Featured projects for carousel
export const featuredProjects = projectsData.filter(project => project.featured);

export const servicesData = [
    {
        title: "Website Development",
        description: "Responsive, fast, and SEO-friendly websites built with modern technologies like React and Bootstrap.",
        icon: Globe
    },
    {
        title: "Web App Development",
        description: "Complex web applications with dynamic functionality, secure authentication, and seamless user experience.",
        icon: Layout
    },
    {
        title: "Bug Fixing & Optimization",
        description: "Troubleshooting issues, improving website performance, and refactoring existing codebases.",
        icon: Bug
    }
]
