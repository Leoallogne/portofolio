import React from 'react'
import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="py-12 mt-auto border-t border-white/10 bg-slate-950 text-slate-300">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
                    <div className="lg:col-span-4">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-white mb-4">Muhammad Syafiq</h3>
                            <p className="text-slate-400 leading-relaxed max-w-sm">
                                Building modern web applications and digital solutions with a focus on web performance and user experience.
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="mailto:leoallogne@gmail.com"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-2 sm:col-span-6">
                        <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-6">Navigation</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                                    Home <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                                    Projects <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                                    Contact <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2 sm:col-span-6">
                        <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-6">Connect</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                                    GitHub <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                                    LinkedIn <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                </a>
                            </li>
                            <li>
                                <a href="mailto:leoallogne@gmail.com" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                                    Email <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="lg:text-right text-slate-500 text-sm">
                            <p className="mb-2">&copy; {new Date().getFullYear()} Muhammad Syafiq.</p>
                            <p>All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
