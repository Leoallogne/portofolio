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
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3"
    },
    {
        title: "Automata Learning Platform",
        description: "An interactive educational platform for visualizing NFA to DFA conversions, helping students understand automata theory.",
        techStack: ['JavaScript', 'D3.js', 'Visualization'],
        link: "/projects",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3"
    },
    {
        title: "Marketplace Website",
        description: "A comprehensive marketplace platform for physical and digital products, designed to be Web3-ready with crypto integration.",
        techStack: ['React', 'Node.js', 'MongoDB'],
        link: "/projects",
        image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3"
    }
]

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
