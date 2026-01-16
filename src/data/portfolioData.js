import { Code, Layout, Bug, Globe, Terminal, Database, Server, Smartphone, Cpu } from 'lucide-react'

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

export const projectsData = [
    {
        title: "CyberWallet",
        description: "A web-based e-wallet dashboard featuring transaction history, secure login, and a modern dark UI inspired by Web3 aesthetics.",
        techStack: ['React', 'Bootstrap', 'Chart.js'],
        link: "/projects",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3",
        category: "Web3"
    },
    {
        title: "Automata Learning Platform",
        description: "An interactive educational platform for visualizing NFA to DFA conversions, helping students understand automata theory.",
        techStack: ['JavaScript', 'D3.js', 'Visualization'],
        link: "/projects",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3",
        category: "Education"
    },
    {
        title: "Marketplace Website",
        description: "A comprehensive marketplace platform for physical and digital products, designed to be Web3-ready with crypto integration.",
        techStack: ['React', 'Node.js', 'MongoDB'],
        link: "/projects",
        image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3",
        category: "E-Commerce"
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
export const featuredProjects = projectsData.slice(0, 6)

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
