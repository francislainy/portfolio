import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/home/Home.tsx";
import ProjectDetail from "./components/detail/ProjectDetail.tsx";

function App() {
    return (
        <Router basename="/portfolio">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
