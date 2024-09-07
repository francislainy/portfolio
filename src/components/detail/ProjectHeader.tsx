import React from 'react';
import { ChevronLeft } from 'lucide-react';
import Button from "@mui/material/Button";

interface ProjectHeaderProps {
    title: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ title }) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4 flex items-center">
                <Button className="mr-4" onClick={() => window.history.back()}>
                    <ChevronLeft className="h-6 w-6"/>
                </Button>
                <h1 className="text-2xl font-bold">{title}</h1>
            </div>
        </header>
    );
}

export default ProjectHeader;