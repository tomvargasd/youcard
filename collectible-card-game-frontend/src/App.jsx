import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PackPage from './pages/PackPage';
import './index.css'; // Ensure Tailwind's styles are imported

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pack" element={<PackPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
