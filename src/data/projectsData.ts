import {BookOpen, Braces, LayoutTemplate, LucideIcon, MonitorStop} from 'lucide-react';

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
        description: "A backend service for managing users and lessons while mimicking the Du Chinese application, which helps language learners to improve their proficiency level by reading Chinese stories.",
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
    {
        id: 2,
        title: "JTETemplate",
        description: "A template project for building Java/Spring Boot applications using the Java Template Engine (JTE) library. It also includes Tailwind CSS for styling the front end.",
        icon: LayoutTemplate,
        technologies: ["Java", "Spring Boot", "Maven", "JTE", "Tailwind CSS"],
        overview: "This project is a template for building Java applications using the Java Template Engine (JTE) library. It includes a simple example of rendering a template with dynamic data and styled with Tailwind CSS.",
        keyFeatures: [
            "Rendering templates with dynamic data through JTE and Java pojo objects",
            "Styling with Tailwind CSS",
        ],
        longerDescription: "The `jte-template` project is a template for building Java applications using the Java Template Engine (JTE) library. JTE is a lightweight, high-performance template engine for Java that compiles templates to Java source code, providing a fast and efficient way to generate dynamic content.",
        githubUrl: "https://github.com/francislainy/jteTemplate-poc",
    },
    {
        id: 3,
        title: "Playwright BDD Java",
        description: "A sample project demonstrating how to use Playwright with Java and Cucumber for end-to-end testing of web applications.",
        icon: MonitorStop,
        technologies: ["Java", "Spring Boot", "Playwright", "Cucumber", "BDD"],
        overview: "This project demonstrates how to use Playwright with Java and Cucumber to write end-to-end tests for web applications. It includes examples of writing feature files, step definitions, and running tests with Playwright.",
        keyFeatures: [
            "Writing feature files with Gherkin syntax",
            "Implementing step definitions with Java and Cucumber",
            "Running end-to-end tests with Playwright",
        ],
        longerDescription: "The `playwright-bdd-java` project is a sample project demonstrating how to use Playwright with Java and Cucumber for end-to-end testing of web applications. Playwright is a Node.js library for automating browsers, and Cucumber is a popular tool for writing BDD-style tests. By combining these tools, developers can write expressive, readable tests that validate the behavior of web applications.",
        githubUrl: "https://github.com/francislainy/playwright-demo",
    },
    {
        id: 4,
        title: "Cucumber Spring Boot",
        description: "A sample project demonstrating how to use Cucumber with Spring Boot and Java for testing RESTful APIs.",
        icon: Braces,
        technologies: ["Java", "Spring Boot", "Maven", "Cucumber", "BDD", "Rest Assured"],
        overview: "This project demonstrates how to configure and use Cucumber with Spring Boot and Java to write BDD-style tests for RESTful APIs. It includes examples of writing feature files, step definitions, and running tests with Cucumber.",
        keyFeatures: [
            "Writing feature files with Gherkin syntax",
            "Implementing step definitions with Java and Cucumber",
            "Running BDD-style tests with Cucumber",
        ],
        longerDescription: "The `cucumber-spring-boot` project is a sample project demonstrating how to use Cucumber with Spring Boot and Java for testing RESTful APIs. Cucumber is a popular tool for writing BDD-style tests, and Spring Boot is a powerful framework for building Java applications. By combining these tools, developers can write expressive, readable tests that validate the behavior of RESTful APIs.",
        githubUrl: "",
    }
];

export default projectsData;