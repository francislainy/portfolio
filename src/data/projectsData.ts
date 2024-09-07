import { Database, Server, Code2 } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Project {
    id: number;
    name: string;
    description: string;
    icon: LucideIcon;
    technologies: string[];
}

const projectsData: Project[] = [
    {
        id: 1,
        name: "E-commerce API",
        description: "RESTful API for a scalable e-commerce platform",
        icon: Database,
        technologies: ["Spring Boot", "Spring Data JPA", "PostgreSQL", "Redis"]
    },
    {
        id: 2,
        name: "Task Management System",
        description: "Microservices-based task management solution",
        icon: Server,
        technologies: ["Spring Boot", "Spring Cloud", "MongoDB", "RabbitMQ"]
    },
    {
        id: 3,
        name: "Auth Service",
        description: "Secure authentication and authorization service",
        icon: Code2,
        technologies: ["Spring Security", "JWT", "OAuth 2.0", "Keycloak"]
    },
    {
        id: 4,
        name: "Real-time Analytics Engine",
        description: "High-performance data processing and analytics system",
        icon: Database,
        technologies: ["Spring Boot", "Apache Kafka", "Elasticsearch", "Grafana"]
    },
];

export default projectsData;