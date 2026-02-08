import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap, Award, ExternalLink } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import { useProjects } from '../hooks/useProjects';

const HeroBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Dark Gradient Base */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

            {/* Grid Pattern with Fade */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                    backgroundSize: '100px 100px',
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
                }}
            />

            {/* Glowing Orbs */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen"
            />
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen"
            />
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 20, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 5
                }}
                className="absolute -bottom-32 left-1/3 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] mix-blend-screen"
            />
        </div>
    );
};

const HomeHero = () => {
    const { projects } = useProjects();
    const containerRef = useRef(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    // Mouse follow effect for the card
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <HeroBackground />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT CONTENT */}
                    <motion.div
                        style={{ y: y1 }}
                        className="max-w-2xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-md mb-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-slate-300 text-xs font-medium tracking-wide uppercase">Available for Hire</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
                        >
                            Building <br />
                            <span className="relative inline-block">
                                <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 blur-xl"></span>
                                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                                    high-performance
                                </span>
                            </span>
                            <br /> web experiences.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-lg"
                        >
                            I design and develop modern websites that are fast, accessible, and built to scale. Focusing on clean code and user-centric design.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link
                                to="/contact"
                                className="group relative px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Start a Project <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>

                            <Link
                                to="/projects"
                                className="px-8 py-4 bg-slate-800/50 text-white border border-slate-700/50 rounded-full font-bold text-lg hover:bg-slate-800 transition-all hover:border-slate-600 active:scale-95 flex items-center gap-2"
                            >
                                View Portfolio <ExternalLink size={18} className="opacity-60" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="mt-12 flex items-center gap-8 text-slate-500"
                        >
                            <div className="flex items-center gap-2">
                                <Zap size={18} className="text-yellow-500" />
                                <span className="text-sm font-medium">Fast Performance</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award size={18} className="text-purple-500" />
                                <span className="text-sm font-medium">Best Practices</span>
                            </div>
                        </motion.div>
                    </motion.div>


                    {/* RIGHT VISUAL - GLASS CARD */}
                    <motion.div
                        style={{ y: y2 }}
                        className="relative hidden lg:block"
                        onMouseMove={handleMouseMove}
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur-xl animate-pulse"></div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="relative bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden group"
                        >
                            <motion.div
                                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                                style={{
                                    background: useMotionTemplate`
                                        radial-gradient(
                                          650px circle at ${mouseX}px ${mouseY}px,
                                          rgba(255,255,255,0.1),
                                          transparent 80%
                                        )
                                    `,
                                }}
                            />

                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-1">Impact First</h3>
                                    <p className="text-slate-400 text-sm">Delivering real value through code.</p>
                                </div>
                                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl border border-blue-500/30">
                                    <Sparkles size={24} className="text-blue-400" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-2xl bg-slate-800/50 border border-white/5">
                                    <div className="text-3xl font-bold text-white mb-1">
                                        <AnimatedCounter end={projects?.length || 0} duration={2000} suffix="+" />
                                    </div>
                                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Projects Completed</div>
                                </div>
                                <div className="p-4 rounded-2xl bg-slate-800/50 border border-white/5">
                                    <div className="text-3xl font-bold text-white mb-1">100%</div>
                                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Client Satisfaction</div>
                                </div>
                                <div className="col-span-2 p-5 rounded-2xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/5 flex items-center justify-between group/item hover:border-white/10 transition-colors cursor-default">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                                            <Zap size={20} />
                                        </div>
                                        <div>
                                            <div className="text-white font-semibold">Web Performance</div>
                                            <div className="text-xs text-emerald-400 font-mono">98/100 Lighthouse</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -top-10 -right-10 bg-slate-800/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl"
                        >
                            <div className="flex items-center gap-3">
                                <div className="h-3 w-3 rounded-full bg-red-400" />
                                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                                <div className="h-3 w-3 rounded-full bg-green-400" />
                            </div>
                            <div className="mt-3 space-y-2">
                                <div className="h-2 w-24 bg-slate-600/50 rounded-full" />
                                <div className="h-2 w-16 bg-slate-600/50 rounded-full" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, delay: 1.5, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-slate-500 to-transparent" />
            </motion.div>
        </section>
    );
};

export default HomeHero;
