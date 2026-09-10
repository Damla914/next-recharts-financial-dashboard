'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function StatCard({ title, value, description }: { title: string; value: string | number; description: string }) {
    return (
        <motion.div whileHover={{y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"}} className="bg-white backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-gray-200 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className = "px-4 py-5 sm:p-6">
                <span className="text-sm font-medium text-gray-500 truncate">{title}</span>
                <div className="mt-1 text-3xl font-semibold text-gray-900">{value}</div>
                <p className="mt-2 text-sm text-gray-500">{description}</p>
            </div>
        </motion.div>
    )}