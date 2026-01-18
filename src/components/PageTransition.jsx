import React from 'react'
import { motion } from 'framer-motion'

const MotionDiv = motion.div

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
        scale: 0.98
    },
    in: {
        opacity: 1,
        y: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        y: -20,
        scale: 0.98
    }
}

const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
}

const PageTransition = ({ children }) => {
    return (
        <MotionDiv
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            style={{ width: '100%', overflowX: 'hidden' }}
        >
            {children}
        </MotionDiv>
    )
}

export default PageTransition
