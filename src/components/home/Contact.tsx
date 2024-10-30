import Button from '@mui/material/Button';
import {FaGithub, FaLinkedin, FaEnvelope, FaMedium, FaStackOverflow} from 'react-icons/fa';

const Contact: React.FC = () => {
    const githubUrl = "https://github.com/francislainy";
    const linkedinUrl = "https://www.linkedin.com/in/francislainycampos/";
    const mailUrl = "mailto:francislainy.campos@gmail.com";
    const mediumUrl = "https://medium.com/@francislainy.campos";
    const stackOverflowUrl = "https://stackoverflow.com/users/6654475/francislainy-campos";

    return (
        <section id="contact" className="py-20 bg-black text-white">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h3>
                <p className="text-xl mb-8">Interested in working together? Let's connect.</p>
                <div className="flex justify-center space-x-6">
                    <Button onClick={() => window.open(githubUrl, '_blank')}>
                        <FaGithub className="h-5 w-5"/>
                    </Button>
                    <Button onClick={() => window.open(linkedinUrl, '_blank')}>
                        <FaLinkedin className="h-5 w-5"/>
                    </Button>
                    <Button onClick={() => window.open(mailUrl, '_blank')}>
                        <FaEnvelope className="h-5 w-5"/>
                    </Button>
                    <Button onClick={() => window.open(mediumUrl, '_blank')}>
                        <FaMedium className="h-5 w-5"/>
                    </Button>
                    <Button onClick={() => window.open(stackOverflowUrl, '_blank')}>
                        <FaStackOverflow className="h-5 w-5"/>
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Contact;