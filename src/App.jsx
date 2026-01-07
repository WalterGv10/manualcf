import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import FloatingAppButton from './components/FloatingAppButton';
import Welcome from './Welcome';
import TutorialView from './TutorialView';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-base text-white font-inter selection:bg-neon-pink selection:text-white">
        <Navbar />
        <FloatingAppButton />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/tutorial/:section" element={<TutorialView />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
