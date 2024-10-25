import {BookOpen} from 'lucide-react';
import {LucideIcon} from 'lucide-react';

interface Project {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
    technologies: string[];
    overview: string;
    keyFeatures: string[];
    longerDescription: string;
    technicalDecisions?: string[];
    githubUrl?: string;
}

const projectsData: Project[] = [
    {
        id: 1,
        title: "Du Chinese Backend",
        description: "A backend service for managing users and lessons for mimicking the Du Chinese application, which helps language learners to improve their proficiency level by reading Chinese stories.",
        icon: BookOpen,
        technologies: ["Java", "Spring Boot", "Spring Security", "Maven", "TDD", "JUNIT", "SQL"],
        overview: "This project is a Spring Boot application that provides RESTful APIs for user management and lesson interactions. It includes functionalities such as creating users, favoriting lessons, and marking lessons as read or unread.",
        keyFeatures: [
            "User creation and management",
            "Favoriting lessons",
            "Marking lessons as read or unread",
            "Integration with PostgreSQL and H2 databases",
            "Unit and integration tests using JUnit and Mockito",
            "Pact for contract testing"
        ],
        longerDescription: "The `du-chinese-be` project is designed to handle backend operations for the Du Chinese application. It leverages Spring Boot for rapid development and includes various dependencies for web, security, and data management. The project also uses Lombok to reduce boilerplate code and includes comprehensive unit tests to ensure code quality.",
        technicalDecisions: [
            "Spring Boot: Chosen for its rapid development capabilities and extensive ecosystem.",
            "PostgreSQL: Used as the primary database for its robustness and scalability.",
            "H2 Database: Used for testing purposes to simplify setup and teardown.",
            "JUnit and Mockito: Used for unit testing to ensure code reliability.",
            "Pact: Used for contract testing to ensure API compatibility between this service and its corresponding user interface."
        ],
        githubUrl: "https://github.com/francislainy/du-chinese-be",
    },
];

export default projectsData;