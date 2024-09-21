import {motion} from 'framer-motion';

const skills: string[] = [
    "Spring Boot", "Java", "Maven",
    "Microservices", "Spring Security", "RESTful APIs", "Rest Assured",
    "JPA / Hibernate", "PostgreSQL", "Swagger", "Postman",
    "Testcontainers", "CI/CD", "Git", "TDD",
    "JUnit", "Mockito", "BDD", "Cucumber", "Selenium", "Backend Testing", "UI Testing",
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Technical Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, scale: 0.5}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.5, delay: index * 0.05}}
                            className="bg-gray-800 p-4 rounded-lg text-center"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;