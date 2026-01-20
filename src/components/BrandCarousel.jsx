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

const MotionDiv = motion.div

const BrandCarousel = ({ reverse = false, className = '', items = null }) => {
    const baseItems = Array.isArray(items) && items.length > 0 ? items : brands
    const infiniteItems = [...baseItems, ...baseItems, ...baseItems]
    const distance = 1000
    const xKeyframes = reverse ? [-distance, 0] : [0, -distance]

    return (
        <div className={`py-5 overflow-hidden bg-dark bg-opacity-25 border-y border-white-10 ${className}`.trim()}>
            <MotionDiv
                className="d-flex gap-5 px-3"
                style={{ width: 'max-content' }}
                animate={{ x: xKeyframes }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                    },
                }}
            >
                {infiniteItems.map((item, index) => {
                    const Icon = item?.icon
                    const hasImage = typeof item?.imgSrc === 'string' && item.imgSrc.length > 0

                    return (
                        <div key={index} className="brand-carousel-item d-flex align-items-center gap-3 text-secondary">
                            {hasImage ? (
                                <img
                                    src={item.imgSrc}
                                    alt={item?.name ? `${item.name} logo` : 'Company logo'}
                                    className="brand-carousel-logo"
                                    loading="lazy"
                                />
                            ) : Icon ? (
                                <Icon size={24} aria-hidden="true" />
                            ) : null}

                            <span className="fw-medium brand-carousel-name">{item?.name}</span>
                        </div>
                    )
                })}
            </MotionDiv>
        </div>
    )
}

export default BrandCarousel
