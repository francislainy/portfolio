interface ProjectOverviewProps {
    overview: string;
    technicalDecisions?: string[];
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({overview, technicalDecisions}) => {
    return (
        <section className="container mx-auto px-4 py-8">
            <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
            <p className="text-gray-300 mb-4">
                {overview}
            </p>
            {technicalDecisions && technicalDecisions.length > 0 && (
                <>
                    <p className="text-gray-300 mb-4">
                        Key technical decisions include:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        {technicalDecisions.map((decision, index) => (
                            <li key={index}>{decision}</li>
                        ))}
                    </ul>
                </>
            )}
        </section>
    );
}

export default ProjectOverview;