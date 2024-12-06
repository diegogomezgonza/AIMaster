import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import IF from './pages/IF';
import Truthfullness from './pages/Truthfullness';
import WS from './pages/WS';
import OQ from './pages/OQ';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        {/* Instruction following */}
        <Route path="/instruction-following" element={<IF />} />
        {/* Truthfullness */}
        <Route path="/Truthfullness" element={<Truthfullness />} />
        {/* Writing Style */}
        <Route path="/writing-style" element={<WS />} />
        {/* Overall Quality */}
        <Route path="/overall-quality" element={<OQ />} />
      </Routes>
    </Router>
  );
}

export default App;
