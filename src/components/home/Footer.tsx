const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 py-8">
            <div className="container mx-auto px-4 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Francislainy Campos. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;