import React, { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Code2, Award, Layers, Zap, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import ProjectModal from '../components/ProjectModal';
import BrandCarousel from '../components/BrandCarousel';
import AnimatedCounter from '../components/AnimatedCounter';
import TiltCard from '../components/TiltCard';
import HomeHero from '../components/HomeHero';
import ServiceCard from '../components/ServiceCard';
import { useProjects } from '../hooks/useProjects';
import { skillsData, servicesData } from '../data/portfolioData';

const Home = () => {
    const [selectedProject, setSelectedProject] = useState(null)

    const companyBrands = useMemo(
        () => [
            { name: 'Google', imgSrc: 'https://cdn.simpleicons.org/google' },
            { name: 'Microsoft', imgSrc: 'https://cdn.simpleicons.org/microsoft' },
            { name: 'Amazon', imgSrc: 'https://cdn.simpleicons.org/amazon' },
            { name: 'Meta', imgSrc: 'https://cdn.simpleicons.org/meta' },
            { name: 'Netflix', imgSrc: 'https://cdn.simpleicons.org/netflix' },
            { name: 'Spotify', imgSrc: 'https://cdn.simpleicons.org/spotify' },
            { name: 'Tokopedia', imgSrc: 'https://cdn.simpleicons.org/tokopedia' },
            { name: 'Gojek', imgSrc: 'https://cdn.simpleicons.org/gojek' },
        ],
        [],
    )

    const { projects } = useProjects()

    const featuredProjects = useMemo(() => {
        const sorted = [...(projects || [])].sort((a, b) => new Date(b?.date || 0) - new Date(a?.date || 0))
        return sorted.slice(0, 3)
    }, [projects])

    const primaryFeatured = featuredProjects[0] || null
    const secondaryFeatured = featuredProjects.slice(1, 3)

    return (
        <PageTransition>
            <div className="home-wrapper min-h-screen">
                {/* Hero Section */}
                <HomeHero />

                {/* About Section */}
                <section className="py-24 bg-slate-900/30">
                    <div className="container mx-auto px-4">
                        <div className="mb-20">
                            <ScrollReveal>
                                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">About Me</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-4xl leading-tight">
                                    Crafting high-performance digital experiences with code and creativity.
                                </h2>
                                <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
                                    I am a passionate Full-Stack Developer based in Karawang, Indonesia, dedicated to building scalable, accessible, and user-centric web applications. My approach combines technical precision with a keen eye for modern design.
                                </p>
                            </ScrollReveal>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                            <div className="lg:col-span-7 flex">
                                <ScrollReveal delay={0.15} width="100%">
                                    <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 md:p-12 w-full flex flex-col justify-center h-full shadow-2xl">
                                        <div className="prose prose-invert max-w-none">
                                            <h3 className="text-2xl font-bold text-white mb-4">More than just code</h3>
                                            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                                                I don't just write code; I solve problems. Whether it's optimizing a landing page for conversions or architecting a complex backend system, I focus on delivering real business value.
                                            </p>
                                            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                                                My expertise spans the modern JavaScript ecosystem, including <strong className="text-white">React, Next.js, Node.js</strong>, and cloud integrations. I pride myself on writing clean, maintainable code that future developers will love.
                                            </p>

                                            <div className="flex flex-wrap gap-4">
                                                <Link
                                                    to="/contact"
                                                    className="px-8 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-lg flex items-center gap-2 transition-all shadow-lg shadow-primary/25 hover:-translate-y-1"
                                                >
                                                    <MessageSquare size={20} />
                                                    Start a Conversation
                                                </Link>

                                                <Link
                                                    to="/projects"
                                                    className="px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white border border-white/10 font-bold text-lg flex items-center gap-2 transition-all hover:-translate-y-1"
                                                >
                                                    <Code2 size={20} />
                                                    My Works
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>

                            <div className="lg:col-span-5 flex">
                                <ScrollReveal delay={0.3} width="100%">
                                    <div className="grid grid-cols-1 gap-6 w-full h-full">
                                        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/20 shadow-xl transition-transform hover:-translate-y-1">
                                            <div className="flex items-start gap-5">
                                                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30 flex-shrink-0">
                                                    <Award size={28} />
                                                </div>
                                                <div>
                                                    <div className="text-4xl font-extrabold text-white mb-2">
                                                        <AnimatedCounter end={3} duration={2000} suffix="+" />
                                                    </div>
                                                    <div className="text-xs uppercase tracking-widest text-blue-300 font-bold mb-1">Years Experience</div>
                                                    <div className="text-slate-400 text-sm">Professional development</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20 shadow-xl transition-transform hover:-translate-y-1">
                                            <div className="flex items-start gap-5">
                                                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 flex-shrink-0">
                                                    <Layers size={28} />
                                                </div>
                                                <div>
                                                    <div className="text-4xl font-extrabold text-white mb-2">
                                                        <AnimatedCounter end={20} duration={2500} suffix="+" />
                                                    </div>
                                                    <div className="text-xs uppercase tracking-widest text-purple-300 font-bold mb-1">Projects Delivered</div>
                                                    <div className="text-slate-400 text-sm">Successful deployments</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-3xl p-8 border border-amber-500/20 shadow-xl transition-transform hover:-translate-y-1">
                                            <div className="flex items-start gap-5">
                                                <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30 flex-shrink-0">
                                                    <Zap size={28} />
                                                </div>
                                                <div>
                                                    <div className="text-4xl font-extrabold text-white mb-2">
                                                        <AnimatedCounter end={100} duration={3000} suffix="%" />
                                                    </div>
                                                    <div className="text-xs uppercase tracking-widest text-amber-300 font-bold mb-1">Client Satisfaction</div>
                                                    <div className="text-slate-400 text-sm">Quality guaranteed</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-8 border-y border-white/5 bg-slate-950/50">
                    <BrandCarousel items={companyBrands} />
                </section>

                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-20">
                            <ScrollReveal>
                                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">Technologies</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                    Modern tools for modern problems
                                </h2>
                                <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                                    I leverage a cutting-edge tech stack to ensure your product is fast, secure, and easy to maintain.
                                </p>
                            </ScrollReveal>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {skillsData.map((category, index) => {
                                const Icon = category.icon
                                return (
                                    <ScrollReveal key={category.title || index} delay={0.08 * (index + 1)} width="100%">
                                        <div className="bg-slate-900/40 border border-white/10 rounded-3xl p-8 hover:border-primary/40 hover:bg-slate-900/60 transition-all duration-300 h-full group">
                                            <div className="flex items-center gap-4 mb-8">
                                                <div className="text-primary bg-primary/10 p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300">{Icon ? <Icon size={28} /> : null}</div>
                                                <h3 className="text-xl font-bold text-white mb-0">{category.title}</h3>
                                            </div>

                                            <div className="flex flex-wrap gap-2.5">
                                                {category.skills.map((skill, i) => (
                                                    <span key={`${category.title}-${i}`} className="text-sm font-semibold px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 border border-white/5 group-hover:bg-white/10 transition-colors">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Full Width Bottom Carousel */}
                <section className="py-10 border-y border-white/5 bg-slate-950/50 overflow-hidden">
                    <div className="container mx-auto px-4 mb-8">
                        <p className="text-center text-slate-500 text-xs uppercase font-bold tracking-[0.2em]">Trusted frameworks & technologies</p>
                    </div>
                    {/* Reverse direction automatically via prop if supported or just standard */}
                    <div className="w-full">
                        <BrandCarousel reverse={true} items={companyBrands} />
                    </div>
                </section>

                {/* Projects Section */}
                <section className="py-24 relative overflow-hidden projects-home-section">
                    <div className="absolute top-0 start-0 w-full h-full pointer-events-none" aria-hidden="true">
                        <div className="absolute top-0 start-0 w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
                        <div
                            className="absolute top-0 start-0 w-full h-full opacity-25"
                            style={{
                                backgroundImage:
                                    'radial-gradient(circle at 15% 35%, rgba(34, 211, 238, 0.15) 0%, transparent 40%), radial-gradient(circle at 85% 65%, rgba(168, 85, 247, 0.12) 0%, transparent 40%)',
                                backgroundSize: '100% 100%',
                            }}
                        />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <ScrollReveal>
                            <div className="text-center mb-20">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-bold tracking-wider uppercase text-sm mb-3 block">
                                    Selected Work
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                    Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Projects</span>
                                </h2>
                                <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                                    Highlights from my portfolio. Each project represents a unique challenge solved with robust code and thoughtful design.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="mb-20">
                            <AnimatePresence>
                                {selectedProject && (
                                    <ProjectModal
                                        project={selectedProject}
                                        onClose={() => setSelectedProject(null)}
                                    />
                                )}
                            </AnimatePresence>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
                                {primaryFeatured && (
                                    <div className="lg:col-span-7 h-full">
                                        <ScrollReveal delay={0.1} width="100%">
                                            <div className="h-full">
                                                <TiltCard intensity={12}>
                                                    <ProjectCard
                                                        project={primaryFeatured}
                                                        onClick={() => setSelectedProject(primaryFeatured)}
                                                    />
                                                </TiltCard>
                                            </div>
                                        </ScrollReveal>
                                    </div>
                                )}

                                <div className="lg:col-span-5 h-full">
                                    <div className="flex flex-col gap-8 h-full">
                                        {secondaryFeatured.map((project, index) => (
                                            <ScrollReveal key={project?.id || index} delay={0.2 + index * 0.1} width="100%">
                                                <div>
                                                    <TiltCard intensity={10}>
                                                        <ProjectCard
                                                            project={project}
                                                            onClick={() => setSelectedProject(project)}
                                                        />
                                                    </TiltCard>
                                                </div>
                                            </ScrollReveal>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="text-center">
                                <Link
                                    to="/projects"
                                    className="px-10 py-5 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-lg inline-flex items-center gap-3 transition-all shadow-lg shadow-primary/25 hover:scale-105 hover:shadow-primary/40"
                                >
                                    Explore All Projects
                                    <ArrowRight size={22} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-24 relative overflow-hidden bg-slate-900/30 border-y border-white/5">
                    <div className="absolute top-0 start-0 w-full h-full pointer-events-none" aria-hidden="true">
                        <div
                            className="absolute top-0 start-0 w-full h-full opacity-20"
                            style={{
                                backgroundImage:
                                    'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 40%)',
                                backgroundSize: '100% 100%',
                            }}
                        />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <ScrollReveal>
                            <div className="text-center mb-20">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400 font-bold tracking-wider uppercase text-sm mb-3 block">
                                    Services
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                    How I can <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">help you</span>
                                </h2>
                                <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                                    Comprehensive web development solutions tailored to your specific needs.
                                </p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {servicesData.map((service, index) => (
                                <div key={index}>
                                    <ScrollReveal delay={index * 0.1} width="100%">
                                        <TiltCard intensity={10}>
                                            <ServiceCard {...service} />
                                        </TiltCard>
                                    </ScrollReveal>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute top-0 start-0 w-full h-full pointer-events-none" aria-hidden="true">
                        <div
                            className="absolute top-0 start-0 w-full h-full opacity-30"
                            style={{
                                backgroundImage:
                                    'radial-gradient(circle at 25% 40%, rgba(34, 197, 94, 0.1) 0%, transparent 40%), radial-gradient(circle at 75% 60%, rgba(59, 130, 246, 0.1) 0%, transparent 40%)',
                                backgroundSize: '100% 100%',
                            }}
                        />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <ScrollReveal>
                            <div className="bg-slate-800/60 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 lg:p-20 relative overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-purple-500/10 pointer-events-none"></div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                                    <div>
                                        <div className="inline-flex align-items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white border border-white/10 text-sm font-bold mb-8">
                                            <Sparkles size={16} className="text-emerald-400" />
                                            Open for new opportunities
                                        </div>
                                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                                            Ready to launch your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">next big thing</span>?
                                        </h2>
                                        <p className="text-xl text-slate-300 mb-10 max-w-lg leading-relaxed">
                                            Let's collaborate to build a product that stands out. I'm ready to bring your vision to life with speed and precision.
                                        </p>
                                        <div className="flex flex-wrap gap-5">
                                            <Link
                                                to="/contact"
                                                className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-lg flex items-center gap-2 transition-all shadow-lg hover:scale-105 hover:shadow-xl"
                                            >
                                                <MessageSquare size={20} />
                                                Let's Talk
                                            </Link>
                                            <Link
                                                to="/projects"
                                                className="px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-950 text-white border border-white/10 font-bold text-lg flex items-center gap-2 transition-all hover:-translate-y-1"
                                            >
                                                <Code2 size={20} />
                                                See My Work
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-6">
                                        <div className="bg-slate-950/60 p-8 rounded-3xl border border-white/5 flex items-center justify-between hover:border-emerald-500/30 transition-colors">
                                            <div className="text-sm uppercase tracking-widest text-slate-400 font-bold">Turnaround</div>
                                            <div className="text-white font-bold text-xl">Fast & Reliable</div>
                                        </div>
                                        <div className="bg-slate-950/60 p-8 rounded-3xl border border-white/5 flex items-center justify-between hover:border-cyan-500/30 transition-colors">
                                            <div className="text-sm uppercase tracking-widest text-slate-400 font-bold">Design</div>
                                            <div className="text-white font-bold text-xl">Pixel Perfect</div>
                                        </div>
                                        <div className="bg-slate-950/60 p-8 rounded-3xl border border-white/5 flex items-center justify-between hover:border-purple-500/30 transition-colors">
                                            <div className="text-sm uppercase tracking-widest text-slate-400 font-bold">Code</div>
                                            <div className="text-white font-bold text-xl">Clean & Scalable</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </div>
        </PageTransition>
    )
}

export default Home
