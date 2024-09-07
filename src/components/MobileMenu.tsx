import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Button from '@mui/material/Button';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{x: '100%'}}
                    animate={{x: 0}}
                    exit={{x: '100%'}}
                    transition={{type: 'tween'}}
                    className="fixed inset-0 bg-black z-50 md:hidden"
                >
                    <div className="flex flex-col h-full">
                        <div className="flex justify-end p-4">
                            <Button onClick={onClose}>
                                <X className="h-6 w-6"/>
                            </Button>
                        </div>
                        <nav className="flex flex-col items-center space-y-8 mt-20">
                            <a href="#about" className="text-2xl" onClick={onClose}>About</a>
                            <a href="#projects" className="text-2xl" onClick={onClose}>Projects</a>
                            <a href="#skills" className="text-2xl" onClick={onClose}>Skills</a>
                            <a href="#contact" className="text-2xl" onClick={onClose}>Contact</a>
                        </nav>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default MobileMenu;