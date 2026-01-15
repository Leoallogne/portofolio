import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Database, Layout, Server, Cpu, Globe, Terminal, Box } from 'lucide-react'

const brands = [
    { name: 'React', icon: Code2 },
    { name: 'Next.js', icon: Globe },
    { name: 'Bootstrap', icon: Layout },
    { name: 'Node.js', icon: Server },
    { name: 'Python', icon: Terminal },
    { name: 'MongoDB', icon: Database },
    { name: 'Docker', icon: Box },
    { name: 'AWS', icon: Cpu },
]

const infiniteBrands = [...brands, ...brands, ...brands]

const BrandCarousel = () => {
    return (
        <div className="py-5 overflow-hidden bg-dark bg-opacity-25 border-y border-white-10">
            <motion.div
                className="d-flex gap-5 px-3"
                style={{ width: 'max-content' }}
                animate={{ x: [0, -1000] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                    },
                }}
            >
                {infiniteBrands.map((brand, index) => (
                    <div key={index} className="d-flex align-items-center gap-3 text-secondary">
                        <brand.icon size={24} />
                        <span className="fw-medium">{brand.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default BrandCarousel
