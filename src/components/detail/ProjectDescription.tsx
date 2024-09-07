import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch } from 'lucide-react';
import Button from "@mui/material/Button";

const ProjectDescription: React.FC = () => {
    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            className="bg-gray-900 p-6 rounded-lg shadow-lg"
        >
            <h2 className="text-3xl font-bold mb-4">E-commerce API</h2>
            <p className="text-gray-300 mb-6">
                A robust and scalable RESTful API built with Spring Boot to power modern e-commerce platforms.
                This API provides a comprehensive suite of endpoints for managing products, orders, users, and payments.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Spring Boot</span>
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Spring Data JPA</span>
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Redis</span>
                <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Docker</span>
            </div>
            <div className="flex space-x-4">
                <Button>
                    <GitBranch className="w-4 h-4 mr-2"/>
                    View on GitHub
                </Button>
            </div>
        </motion.div>
    );
}

export default ProjectDescription;