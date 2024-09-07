import React from 'react';
import ProjectHeader from './ProjectHeader.tsx';
import ProjectFeatures from './ProjectFeatures.tsx';
import ProjectOverview from './ProjectOverview.tsx';
import ProjectDescription from "./ProjectDescription.tsx";
import {useParams} from "react-router-dom";
import projectsData from "../../data/projectsData.ts";

const ProjectDetail: React.FC = () => {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === parseInt(id || '', 10));

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <ProjectHeader title={project.title} />
            <main className="pt-20 pb-12">
                <section className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/2">
                            <ProjectDescription title={project.title} description={project.longerDescription} />
                        </div>
                        <div className="w-full md:w-1/2">
                            <ProjectFeatures features={project.keyFeatures}/>
                        </div>
                    </div>
                </section>
                <ProjectOverview overview={project.overview}/>
            </main>
        </div>
    );
}

export default ProjectDetail;