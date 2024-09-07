import React from 'react';
import { motion } from 'framer-motion';

interface ProjectFeaturesProps {
    features: string[];
}

const ProjectFeatures: React.FC<ProjectFeaturesProps> = ({features}) => {
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