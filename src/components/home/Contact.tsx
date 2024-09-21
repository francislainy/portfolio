import React from 'react';
import Button from '@mui/material/Button';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-black text-white">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h3>
                <p className="text-xl mb-8">Interested in collaborating or have a project in mind? Let's connect.</p>
                <div className="flex justify-center space-x-6">
                    <Button>
                        <Github className="h-5 w-5"/>
                    </Button>
                    <Button>
                        <Linkedin className="h-5 w-5"/>
                    </Button>
                    <Button>
                        <Mail className="h-5 w-5"/>
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Contact;