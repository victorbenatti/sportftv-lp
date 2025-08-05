import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BestMoments from './pages/BestMoments';
import Cameras from './pages/Cameras';
import Tournaments from './pages/Tournaments';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/melhores-momentos" element={<BestMoments />} />
            <Route path="/cameras" element={<Cameras />} />
            <Route path="/torneios" element={<Tournaments />} />
            <Route path="/sobre" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
