import React from 'react';
import { motion } from 'framer-motion';

const features = [
    "RESTful API design",
    "Product catalog management",
    "User authentication and authorization",
    "Order processing and inventory management",
    "Payment gateway integration",
    "Caching for improved performance",
    "Comprehensive API documentation",
];

const ProjectFeatures: React.FC = () => {
    return (
        <>
            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
            <ul className="space-y-2 mb-6">
                {features.map((feature, index) => (
                    <motion.li
                        key={index}
                        initial={{opacity: 0, x: -20}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5, delay: index * 0.1}}
                        className="flex items-center"
                    >
                        <span className="mr-2">•</span>
                        {feature}
                    </motion.li>
                ))}
            </ul>
        </>
    );
}

export default ProjectFeatures;