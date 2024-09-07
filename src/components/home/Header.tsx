import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Button from '@mui/material/Button';
import MobileMenu from './MobileMenu.tsx';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Francislainy Campos</h1>
                <nav className="hidden md:flex space-x-6">
                    <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
                    <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
                    <a href="#skills" className="hover:text-gray-300 transition-colors">Skills</a>
                    <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
                </nav>
                <div className="md:hidden">
                    <Button onClick={() => setIsMenuOpen(true)}>
                        <Menu className="h-6 w-6"/>
                    </Button>
                </div>
            </div>
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </header>
    );
}

export default Header;