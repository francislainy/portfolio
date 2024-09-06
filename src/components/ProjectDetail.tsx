import {motion} from 'framer-motion'
import {ChevronLeft, GitBranch} from 'lucide-react'
import Button from "@mui/material/Button";

function ProjectDetail() {
    const features = [
        "RESTful API design",
        "Product catalog management",
        "User authentication and authorization",
        "Order processing and inventory management",
        "Payment gateway integration",
        "Caching for improved performance",
        "Comprehensive API documentation",
    ]


    return (
        <div className="min-h-screen bg-black text-white">
            <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-4 flex items-center">
                    <Button className="mr-4" onClick={() => window.history.back()}>
                        <ChevronLeft className="h-6 w-6"/>
                    </Button>
                    <h1 className="text-2xl font-bold">E-commerce API</h1>
                </div>
            </header>


            <main className="pt-20 pb-12">
                <section className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/2">
                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                                className="bg-gray-900 p-6 rounded-lg shadow-lg"
                            >
                                <h2 className="text-3xl font-bold mb-4">E-commerce API</h2>
                                <p className="text-gray-300 mb-6">
                                    A robust and scalable RESTful API built with Spring Boot to power modern e-commerce
                                    platforms.
                                    This API provides a comprehensive suite of endpoints for managing products, orders,
                                    users,
                                    and
                                    payments.
                                </p>
                                <div className="flex flex-wrap gap-4 mb-6">
                                    <span
                                        className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Spring Boot</span>
                                    <span
                                        className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Spring Data JPA</span>
                                    <span
                                        className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                                    <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Redis</span>
                                    <span
                                        className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">Docker</span>
                                </div>
                                <div className="flex space-x-4">
                                    <Button>
                                        <GitBranch className="w-4 h-4 mr-2"/>
                                        View on GitHub
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                            <ul className="space-y-2 mb-6">
                                {features.map((feature, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{opacity: 0, x: -20}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{duration: 0.5, delay: index * 0.1}}
                                        className="flex items-center"
                                    >
                                        <span className="mr-2">•</span>
                                        {feature}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

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
            </main>

        </div>
    )
}

export default ProjectDetail