import React from 'react';

interface ProjectOverviewProps {
    overview: string;
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({overview}) => {
    return (
        <section className="container mx-auto px-4 py-8">
            <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
            <p className="text-gray-300 mb-4">
                {overview}
            </p>
            <p className="text-gray-300 mb-4">
                Key technical decisions include:
            </p>
            {/*todo remove hardcode*/}
            <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Using Spring Data JPA for efficient data access and management</li>
                <li>Implementing Redis for caching to improve response times</li>
                <li>Containerizing the application with Docker for easy deployment and scaling</li>
                <li>Comprehensive error handling and validation for robust API responses</li>
            </ul>
        </section>
    );
}

export default ProjectOverview;