'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    variant?: 'fade' | 'up' | 'down' | 'left' | 'right';
    delay?: number;
    duration?: number;
    once?: boolean;
}

export const ScrollReveal = ({
    children,
    variant = 'up',
    delay = 0,
    duration = 0.8,
    once = true
}: ScrollRevealProps) => {
    const variants = {
        fade: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        },
        up: {
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 }
        },
        down: {
            hidden: { opacity: 0, y: -40 },
            visible: { opacity: 1, y: 0 }
        },
        left: {
            hidden: { opacity: 0, x: -40 },
            visible: { opacity: 1, x: 0 }
        },
        right: {
            hidden: { opacity: 0, x: 40 },
            visible: { opacity: 1, x: 0 }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once }}
            transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1.0] }}
            variants={variants[variant]}
        >
            {children}
        </motion.div>
    );
};
