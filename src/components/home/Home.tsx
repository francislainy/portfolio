import React from 'react';
import Header from './Header.tsx';
import About from './About.tsx';
import Projects from './Projects.tsx';
import Skills from './Skills.tsx';
import Contact from './Contact.tsx';
import Footer from './Footer.tsx';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            <main className="pt-20">
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default Home;