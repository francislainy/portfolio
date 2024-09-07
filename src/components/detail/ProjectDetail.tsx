import React from 'react';
import ProjectHeader from './ProjectHeader.tsx';
import ProjectFeatures from './ProjectFeatures.tsx';
import ProjectOverview from './ProjectOverview.tsx';
import ProjectDescription from "./ProjectDescription.tsx";

const ProjectDetail: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <ProjectHeader title="E-commerce API" />
            <main className="pt-20 pb-12">
                <section className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/2">
                            <ProjectDescription />
                        </div>
                        <div className="w-full md:w-1/2">
                            <ProjectFeatures />
                        </div>
                    </div>
                </section>
                <ProjectOverview />
            </main>
        </div>
    );
}

export default ProjectDetail;