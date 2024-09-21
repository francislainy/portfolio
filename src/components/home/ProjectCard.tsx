import {motion} from 'framer-motion';
import {ChevronRight} from 'lucide-react';
import {Link} from 'react-router-dom';
import {LucideIcon} from 'lucide-react';

interface ProjectProps {
    project: {
        id: number;
        title: string;
        description: string;
        icon: LucideIcon;
        technologies: string[];
    };
    index: number;
}

const ProjectCard: React.FC<ProjectProps> = ({project, index}) => {
    const Icon = project.icon;

    return (
        <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: index * 0.1}}
            className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
            <div className="flex items-center mb-4">
                <Icon className="w-8 h-8"/>
                <h4 className="text-2xl font-semibold ml-4">{project.title}</h4>
            </div>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm">
            {tech}
            </span>
                ))}
            </div>
            <Link to={`/project/${project.id}`}
                  className="inline-flex items-center text-sm font-medium text-black hover:underline">
                View Project <ChevronRight className="ml-1 h-4 w-4"/>
            </Link>
        </motion.div>
    );
}

export default ProjectCard;