import type { Variants } from "framer-motion"

export const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

export const container: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
}


export const stagger: Variants = {
    visible: {
        transition: {
            delayChildren: 0.15,
            staggerChildren: 0.22,
        },
    },
}

// Slide function
export const carouselItem: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.96,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}
