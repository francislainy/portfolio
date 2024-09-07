import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
            <div className="text-center px-4">
                <motion.h2
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="text-5xl md:text-7xl font-bold mb-6"
                >
                    Spring Boot Developer
                </motion.h2>
                <motion.p
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.2}}
                    className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
                >
                    Crafting robust, scalable backend solutions with Spring Boot and microservices architecture.
                </motion.p>
            </div>
        </section>
    );
}

export default About;