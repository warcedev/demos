import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EmpresaTemplate from './pages/EmpresaTemplate';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/empresa/:id" element={<EmpresaTemplate />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;