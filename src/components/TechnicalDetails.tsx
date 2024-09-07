import React from 'react';

const TechnicalDetails: React.FC = () => {
    return (
        <section className="container mx-auto px-4 py-8">
            <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
            <p className="text-gray-300 mb-4">
                The E-commerce API is designed to provide a solid foundation for building scalable
                online retail platforms. It leverages Spring Boot's powerful features to deliver high
                performance, security, and flexibility.
            </p>
            <p className="text-gray-300 mb-4">
                Key technical decisions include:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Using Spring Data JPA for efficient data access and management</li>
                <li>Implementing Redis for caching to improve response times</li>
                <li>Containerizing the application with Docker for easy deployment and scaling</li>
                <li>Comprehensive error handling and validation for robust API responses</li>
            </ul>
        </section>
    );
}

export default TechnicalDetails;