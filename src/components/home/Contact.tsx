import Button from '@mui/material/Button';
import {Github, Linkedin, Mail} from 'lucide-react';

const Contact: React.FC = () => {
    const githubUrl = "https://github.com/francislainy";
    const linkedinUrl = "https://www.linkedin.com/in/francislainycampos/";
    const mailUrl = "mailto:francislainy.campos@gmail.com";

    return (
        <section id="contact" className="py-20 bg-black text-white">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h3>
                <p className="text-xl mb-8">Interested in working together? Let's connect.</p>
                <div className="flex justify-center space-x-6">
                    <Button onClick={() => window.open(githubUrl, '_blank')}>
                        <Github className="h-5 w-5"/>
                    </Button>
                    <Button onClick={() => window.open(linkedinUrl, '_blank')}>
                        <Linkedin className="h-5 w-5"/>
                    </Button>
                    <Button onClick={() => window.open(mailUrl, '_blank')}>
                        <Mail className="h-5 w-5"/>
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Contact;