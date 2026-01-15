import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ScrollReveal = ({ children, delay = 0, width = "100%" }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
            style={{ width, height: "100%" }} // Ensure full height for grid items
        >
            {children}
        </motion.div>
    )
}

export default ScrollReveal
