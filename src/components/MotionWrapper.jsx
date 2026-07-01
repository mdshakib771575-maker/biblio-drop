"use client";

import { motion } from "framer-motion";

export default function MotionWrapper({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
        >
            {children}
        </motion.div>
    );
}