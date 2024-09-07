import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from "../data/projectsData.ts";

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 bg-white text-black">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;