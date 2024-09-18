import { Database, Server, Code2, UserCheck } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

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
        description: "A backend service for managing users and lessons for mimicking the Du Chinese application.",
        icon: UserCheck,
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
    {
        id: 2,
        title: "E-commerce API",
        description: "RESTful API for a scalable e-commerce platform",
        icon: Database,
        technologies: ["Spring Boot", "Spring Data JPA", "PostgreSQL", "Redis"],
        overview: "The E-commerce API is designed to provide a solid foundation for building scalable online retail platforms. It leverages Spring Boot's powerful features to deliver high performance, security, and flexibility.",
        keyFeatures: ["RESTful API design", "Product catalog management", "User authentication and authorization", "Order processing and inventory management", "Payment gateway integration", "Caching for improved performance", "Comprehensive API documentation"],
        longerDescription: "A robust and scalable RESTful API built with Spring Boot to power modern e-commerce platforms. This API provides a comprehensive suite of endpoints for managing products, orders, users, and payments.",
        technicalDecisions: ["Using Spring Data JPA for efficient data access and management", "Implementing Redis for caching to improve response times", "Containerizing the application with Docker for easy deployment and scaling", "Comprehensive error handling and validation for robust API responses"],
    },
    {
        id: 3,
        title: "Task Management System",
        description: "Microservices-based task management solution",
        icon: Server,
        technologies: ["Spring Boot", "Spring Cloud", "MongoDB", "RabbitMQ"],
        overview: "The Task Management System is a distributed application that enables users to create, assign, and track tasks across teams. It is designed to be highly available, scalable, and fault-tolerant.",
        keyFeatures: ["Task creation and assignment", "Team collaboration and notifications", "Real-time task tracking", "Microservices architecture", "Event-driven communication", "Distributed data storage", "High availability and fault tolerance"],
        longerDescription: "A distributed task management system built with Spring Boot and Spring Cloud. This application allows users to create, assign, and track tasks across teams. It is designed to be highly available, scalable, and fault-tolerant",
    },
    {
        id: 4,
        title: "Auth Service",
        description: "Secure authentication and authorization service",
        icon: Code2,
        technologies: ["Spring Security", "JWT", "OAuth 2.0", "Keycloak"],
        overview: "The Auth Service provides secure authentication and authorization capabilities for applications and APIs. It supports industry-standard protocols like OAuth 2.0 and JWT to ensure secure access control.",
        keyFeatures: ["User registration and login", "Role-based access control", "Token-based authentication", "OAuth 2.0 and JWT support", "Integration with Keycloak", "Secure password hashing", "Session management and logout"],
        longerDescription: "A secure authentication and authorization service built with Spring Security, JWT, and OAuth 2.0. This service provides user registration, login, role-based access control, and token-based authentication for applications and APIs.",
    },
    {
        id: 5,
        title: "Real-time Analytics Engine",
        description: "High-performance data processing and analytics system",
        icon: Database,
        technologies: ["Spring Boot", "Apache Kafka", "Elasticsearch", "Grafana"],
        overview: "The Real-time Analytics Engine is a high-performance data processing and analytics system that enables real-time insights and monitoring of streaming data. It is designed for scalability and low-latency processing.",
        keyFeatures: ["Event-driven architecture", "Stream processing with Kafka", "Real-time data visualization", "Scalable data storage with Elasticsearch", "Monitoring and alerting with Grafana", "High-performance data processing", "Low-latency analytics"],
        longerDescription: "A real-time analytics engine built with Spring Boot, Apache Kafka, Elasticsearch, and Grafana. This system enables real-time insights and monitoring of streaming data through event-driven architecture, stream processing, and data visualization.",
    },
];

export default projectsData;