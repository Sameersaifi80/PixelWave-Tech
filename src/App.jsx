import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import AI from './pages/AI';
import ThreeD from './pages/ThreeD';
import Team from './pages/Team';
import Career from './pages/Career';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './index.css';
export default function App() {
    return <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/ai-ml" element={<AI />} />
                <Route path="/services/3d-videos" element={<ThreeD />} />
                <Route path="/about/team" element={<Team />} />
                <Route path="/about/career" element={<Career />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Layout>
    </BrowserRouter>
}
